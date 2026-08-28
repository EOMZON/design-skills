# Webdesign Style Skills · 模块现状与计划

> 快照日期：2026-08-26
> 生命周期：`maintenance` 模块；不是独立产品，不占 Active Top 3
> 权威关系：`webdesign-site` 生成 → `design-skills/styles` 公共分发

## 边界裁决

Project Hub 中的 `styles.zondev.top` 记录并不存在对应独立站点或仓库。真实资产是 `EOMZON/design-skills`：每个 `styles/<slug>/SKILL.md` 与 `webdesign.zondev.top` 的一个风格详情页对应，供 Codex、Cursor、Claude 或 OpenClaw 取用。

因此保留 `styles` project id 仅为兼容旧 Project Hub 身份，但显示名改为 `Webdesign Style Skills (Module)`，生命周期为 maintenance；不开发独立首页、域名、账号或市场。

## 用户、市场与场景

- 主用户：Zon，在 Webdesign Atlas 选定方向后，把具体风格规则交给编码 agent。
- 次用户：从 GitHub 复制公开 style skill 的 AI 建站者；尚无使用结果证据。
- 替代方案：直接复制 atlas prompt、通用前端提示词、模板/UI kit、私有 skills。
- 成立条件：比临时 prompt 更稳定地保留适用场景、avoid、布局、排印、图片和参考来源。

关键场景：按 slug 找到 skill、复制到 agent 工作流、追溯与 atlas 的对应关系、发现同步缺失时停止发布并回到源 catalog。

## 回归与下一步

`R0 PASS / R1 PASS / R2 PARTIAL / R3 PARTIAL / R4 NOT_APPLICABLE / R5 MISSING`

`node scripts/smoke-catalog.mjs` 校验当前 40 个 catalog、目录、frontmatter、README 链接和 GitHub URL 一致。`node scripts/smoke-upstream-export-preview.mjs` 会把当前 Webdesign dirty source 放入临时目录，排除旧 dist 后 build/export 并验证 42 个生成 skill，再逐字比较公共仓；当前精确差异为新增 `decision-surface`、`electric-learning-library`，`changed=[] / removed=[]`。加 `--require-synced` 会 fail-closed。在上游形成恢复点并明确执行跨仓同步前，不手工补目录，也不把 R2/data 标成通过。

```bash
node scripts/smoke-catalog.mjs
node scripts/smoke-upstream-export-preview.mjs
node scripts/smoke-upstream-export-preview.mjs --require-synced # 当前应失败并列出 2 个 added
```

下一次有真实选型任务时记录选中 slug、实际 prompt/skill 使用、产出和返工；连续 8 周无人取用则将本身份并入 `webdesign-site` 展示，不删除公共仓历史。
