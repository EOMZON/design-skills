import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const moduleRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const upstreamRoot = path.resolve(moduleRoot, "..", "webdesign-site");
const requireSynced = process.argv.includes("--require-synced");
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "design-skills-preview-"));
const snapshotRoot = path.join(tempRoot, "webdesign-site");
const exportRoot = path.join(tempRoot, "design-skills");

function copyUpstreamSnapshot() {
  fs.cpSync(upstreamRoot, snapshotRoot, {
    recursive: true,
    filter(source) {
      const relative = path.relative(upstreamRoot, source);
      if (!relative) return true;
      const segments = relative.split(path.sep);
      return !segments.some((segment) => [".git", "dist", "_tmp", ".DS_Store"].includes(segment));
    },
  });
}

function styleDirs(root) {
  const stylesRoot = path.join(root, "styles");
  if (!fs.existsSync(stylesRoot)) return [];
  return fs.readdirSync(stylesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function readCatalog(root) {
  return JSON.parse(fs.readFileSync(path.join(root, "catalog.json"), "utf8"));
}

function readSkill(root, slug) {
  return fs.readFileSync(path.join(root, "styles", slug, "SKILL.md"), "utf8");
}

try {
  copyUpstreamSnapshot();
  execFileSync("node", ["scripts/build-site.mjs"], { cwd: snapshotRoot, stdio: "pipe" });
  execFileSync("node", ["scripts/export-design-skills-repo.mjs"], {
    cwd: snapshotRoot,
    env: { ...process.env, DESIGN_SKILLS_OUT: exportRoot },
    stdio: "pipe",
  });

  const generatedCatalog = readCatalog(exportRoot);
  const generatedSlugs = generatedCatalog.map((item) => item.slug);
  const generatedDirs = styleDirs(exportRoot);
  assert.equal(new Set(generatedSlugs).size, generatedSlugs.length, "generated slugs must be unique");
  assert.deepEqual([...generatedSlugs].sort(), generatedDirs, "generated catalog and directories must match");

  const generatedReadme = fs.readFileSync(path.join(exportRoot, "README.md"), "utf8");
  for (const item of generatedCatalog) {
    const skill = readSkill(exportRoot, item.slug);
    assert.match(skill, new RegExp(`^---[\\s\\S]*?^name: ${item.slug}$[\\s\\S]*?^---$`, "m"));
    assert.match(skill, /## Prompt DNA/, `${item.slug} needs executable Prompt DNA`);
    assert.ok(generatedReadme.includes(`styles/${item.slug}/SKILL.md`), `${item.slug} missing from generated README`);
  }

  const currentCatalog = readCatalog(moduleRoot);
  const currentSlugs = currentCatalog.map((item) => item.slug);
  assert.deepEqual([...currentSlugs].sort(), styleDirs(moduleRoot), "current catalog and directories must match");
  const currentSet = new Set(currentSlugs);
  const generatedSet = new Set(generatedSlugs);
  const added = generatedSlugs.filter((slug) => !currentSet.has(slug)).sort();
  const removed = currentSlugs.filter((slug) => !generatedSet.has(slug)).sort();
  const changed = currentSlugs
    .filter((slug) => generatedSet.has(slug) && readSkill(moduleRoot, slug) !== readSkill(exportRoot, slug))
    .sort();

  const summary = {
    schemaVersion: "design-skills-export-preview/v1",
    current: currentSlugs.length,
    generated: generatedSlugs.length,
    added,
    changed,
    removed,
    synced: added.length === 0 && changed.length === 0 && removed.length === 0,
  };
  console.log(JSON.stringify(summary));
  if (requireSynced) assert.equal(summary.synced, true, "public design-skills differs from current upstream export");
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
