import { strict as assert } from 'node:assert'
import { readdirSync, readFileSync } from 'node:fs'

const root = new URL('../', import.meta.url)
const catalog = JSON.parse(readFileSync(new URL('catalog.json', root), 'utf8'))
const styleDirs = readdirSync(new URL('styles/', root), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()
const slugs = catalog.map((item) => item.slug)

assert.equal(new Set(slugs).size, catalog.length, 'Catalog slugs must be unique')
assert.deepEqual([...slugs].sort(), styleDirs, 'Catalog and style directories must match exactly')

const readme = readFileSync(new URL('README.md', root), 'utf8')
for (const item of catalog) {
  const skill = readFileSync(new URL(`styles/${item.slug}/SKILL.md`, root), 'utf8')
  assert.match(skill, new RegExp(`^---[\\s\\S]*?^name: ${item.slug}$[\\s\\S]*?^---$`, 'm'), `${item.slug} needs matching frontmatter`)
  assert.match(skill, /## Prompt DNA/, `${item.slug} needs executable prompt DNA`)
  assert.ok(item.githubSkillHref.endsWith(`/styles/${item.slug}`), `${item.slug} GitHub URL must match its directory`)
  assert.ok(readme.includes(`styles/${item.slug}/SKILL.md`), `${item.slug} must be indexed in README`)
}

console.log(`design-skills smoke passed: ${catalog.length} catalog entries and skill directories`)
