# Webdesign → Design Skills 隔离导出预览门

> 2026-08-27（Asia/Shanghai）。只读比较；没有写入公共 styles、提交、推送或部署。

## Owner 边界

Webdesign Site 是风格 catalog 与导出生成器 owner；Design Skills 是公共执行/分发层。上游当前有未提交改动，正式导出会删除意外目录并重写 catalog、README 与全部 `SKILL.md`，因此必须先在临时目录预览。

## 实测结果

```json
{
  "schemaVersion": "design-skills-export-preview/v1",
  "current": 40,
  "generated": 42,
  "added": ["decision-surface", "electric-learning-library"],
  "changed": [],
  "removed": [],
  "synced": false
}
```

- 当前 Webdesign source snapshot 在临时目录从零 build。
- 导出到第二个临时目录，42/42 catalog slug、目录、frontmatter、Prompt DNA 与 README 索引一致。
- 公共仓现有 40/40 `SKILL.md` 与当前上游导出逐字相同。
- preview 模式成功输出差异；`--require-synced` 以 exit 1 阻断，并明确报告两个 added。
- 临时目录最终删除，公共仓内容零改写。

## 反方边界

该门证明差异可预览、结构有效、漂移会阻断；不证明两个新增 skill 已获 owner 确认，不创建上游 checkpoint，不完成跨仓原子应用/回滚，也不证明 Agent 使用结果。因此 test 可验证，R2/R3/data 继续 partial。

## 复现

```bash
node scripts/smoke-catalog.mjs
node scripts/smoke-upstream-export-preview.mjs
node scripts/smoke-upstream-export-preview.mjs --require-synced
```
