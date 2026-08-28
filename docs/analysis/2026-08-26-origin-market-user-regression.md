# Webdesign Style Skills：源头、市场、用户与回归审计

日期：2026-08-26

## 1. 源头与所有权

仓库从 `0d6b231`（2026-04-03）开始，目的就是公共 design skills atlas；后续提交均为从网页 atlas 同步风格。`3049144`（2026-04-11）明确为 webdesign split 同步。README 的同步规则声明：浏览层由 `webdesign-site` 拥有，公共 skills 层由 `design-skills` 拥有，导出命令位于上游仓库。

Project Hub 旧身份 `styles.zondev.top` 来自把 `/design-skills/styles` 子目录扫描成项目，并无独立生产域名、应用或产品责任。裁决为 **webdesign-site 的公共执行/分发模块**，不是新项目提案。

## 2. 市场与用户

| 替代方式 | 优势 | 本模块的成立条件 |
|---|---|---|
| atlas 页面直接复制 prompt | 路径最短 | 需要保存为可复用 agent 资产 |
| 通用前端 prompt | 灵活、零维护 | 需要稳定的风格边界、avoid 与来源 |
| 模板 / UI kit | 可直接实现 | 需要跨框架的方向约束而非具体组件 |
| 私有 skills | 与个人工作流更近 | 需要公开分享和外部可复制入口 |

主用户是已在 atlas 完成选型的 Zon；次用户是 GitHub 公开使用者假设。模块不承担“帮用户选风格”，只承担“把已选方向交给 agent”。

## 3. 核心场景

1. 按 atlas slug 找到对应 `SKILL.md`。
2. 复制风格约束并与真实内容需求一起交给 agent。
3. 查看适用/不适用、视觉特征、布局、字体、图像、动效与参考来源。
4. 当 catalog 与目录数量、slug 或 GitHub URL 不一致时阻断同步，而不是静默发布残缺集合。

## 4. R0–R5

| 阶段 | 状态 | 证据 / 缺口 |
|---|---|---|
| R0 可发现 | PASS | Git remote、历史、catalog、styles 目录和上游关系明确 |
| R1 可读取 | PASS | 当前 40 个 catalog/目录一致；上游 current source 在临时目录生成的 42 个 skill 均有匹配 frontmatter、Prompt DNA 与 README 索引 |
| R2 核心路径 | PARTIAL | 当前 40 项仓内 smoke 与 42 项隔离导出合同通过；公共层仍缺 2 项，尚无 agent 实际加载与执行回归 |
| R3 异常恢复 | PARTIAL | 隔离 preview 精确输出 added/changed/removed，`--require-synced` 在漂移时 fail-closed；仍缺正式 checkpoint、审阅/应用、回滚收据与跨仓原子性 |
| R4 发布 | NOT_APPLICABLE | 没有独立站；公共 GitHub 仓是分发表面，生产浏览归 webdesign-site |
| R5 结果 | MISSING | 无复制、安装、复用或页面返工结果 |

当前同步缺口：公共仓为 40 个 skill，上游 current source 隔离生成 42 个；精确差异仅为 added `decision-surface`、`electric-learning-library`，现有 40 项无内容变更、无删除。因上游改动尚未形成独立恢复点，本轮不运行跨仓写入的 `export:skills`，避免把未确认内容扩散到第二仓库。

## 5. 优先级

- P0：关闭“独立 styles 产品”的错误提案，建立模块真相和仓内 smoke。
- P1：隔离导出预览与严格漂移阻断已完成；上游 checkpoint 后人工审查两个新增 skill，再执行两仓同步、回归与 scoped commit。
- P2：收集至少 5 次真实 agent 使用结果。
- 不做：独立域名、首页、CMS、账号、市场与第二套 catalog。
