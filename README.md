# design-skills

中文优先的网站风格技能仓库。这里每个 `styles/<slug>/SKILL.md` 都和 [design.zondev.top](https://design.zondev.top/) 上的一个具体风格详情页一一对应。

## 这个仓库解决什么

- 看图选风格之后，直接拿走对应 skill
- 把风格规则喂给 Codex / Cursor / Claude / OpenClaw
- 避免每次都从零描述“我想要这种页面感觉”

## 如何使用

1. 先在 [design.zondev.top/browse](https://design.zondev.top/browse) 找到接近的风格
2. 打开对应详情页，确认“适合做 / 不适合做 / 参考网站”
3. 下载或复制这个仓库里的 `SKILL.md`，放进你的 skills 目录
4. 再把真实内容需求和这个 skill 一起给 AI

## 收录风格

- [瑞士网格 (Swiss Typographic Grid)](styles/swiss-grid/SKILL.md)  
  适合做：档案站 · 工作室 · 参考库
- [机构项目网格 (Institutional Program Grid)](styles/institutional-grid/SKILL.md)  
  适合做：美术馆站 · 机构项目 · 节展计划
- [极简黑白 (Monochrome Studio Systems)](styles/minimal-black-white/SKILL.md)  
  适合做：作品集 · 品牌站 · 工作室
- [暗色画廊 (Dark Studio Gallery)](styles/dark-studio-gallery/SKILL.md)  
  适合做：工作室作品集 · 案例展示 · Selected Works
- [人文现代 (Humanist Modern Brand)](styles/humanist-modern/SKILL.md)  
  适合做：生活方式品牌 · 现代产品品牌 · 内容品牌首页
- [报告叙事 (Report Storytelling Narrative)](styles/report-storytelling/SKILL.md)  
  适合做：年度报告 · 研究专题 · 影响力报告
- [开发者平台 (Developer Infrastructure Aura)](styles/developer-platform/SKILL.md)  
  适合做：云平台 · 开发者工具 · API 平台
- [工业硬件极简 (Industrial Hardware Minimal)](styles/industrial-hardware/SKILL.md)  
  适合做：硬件发布 · 设备单品 · 科技品牌
- [创意媒体 (Creative Media Editorial)](styles/creative-media/SKILL.md)  
  适合做：创意媒体 · 设计博客 · 文化资讯
- [霓虹科技 (Neon Techno-Futurist Interface)](styles/neon-tech/SKILL.md)  
  适合做：游戏页 · 发布页 · 未来科技
- [杂志编辑 (Magazine Editorial)](styles/magazine-editorial/SKILL.md)  
  适合做：出版站 · 内容站 · 专题页
- [时尚奢刊 (Luxury Fashion Editorial)](styles/luxury-fashion-editorial/SKILL.md)  
  适合做：时尚品牌 · 奢刊专题 · 文化品牌
- [工艺自然 (Quiet Lifestyle Editorial)](styles/craft-natural/SKILL.md)  
  适合做：生活方式 · 品牌页 · 慢内容
- [编辑商店 (Editorial Commerce Catalog)](styles/editorial-commerce/SKILL.md)  
  适合做：设计商店 · 刊物目录 · 内容品牌零售
- [排印海报实验 (Experimental Typographic Poster)](styles/typographic-poster/SKILL.md)  
  适合做：设计活动 · 展览专题 · 文化 campaign
- [大胆个性 (Playful Postmodern / Anti-Grid)](styles/bold-personality/SKILL.md)  
  适合做：创作者 · 个人站 · 反模板发布
- [粗野直给 (Brutalist Raw Interface)](styles/brutalist-raw/SKILL.md)  
  适合做：创作者发布 · 实验品牌 · 宣言页
- [产品工具 (Product Precision Interface)](styles/product-tool/SKILL.md)  
  适合做：AI 工具 · 产品官网 · 平台页
- [模板市场 (Template Market Library)](styles/template-market/SKILL.md)  
  适合做：模板库 · Prompt 库 · Starter Kit
- [参考目录 (Curated Reference Directory)](styles/reference-directory/SKILL.md)  
  适合做：灵感库 · 模板库 · 参考站
- [灵感看板 (Networked Visual Board)](styles/visual-board/SKILL.md)  
  适合做：灵感库 · 研究地图 · 案例收集
- [知识系统 (Evidence-Dense Knowledge Surface)](styles/knowledge-system/SKILL.md)  
  适合做：知识库 · 研究站 · 设计系统
- [舞台展示 (Stage-Driven Showcase)](styles/stage-showcase/SKILL.md)  
  适合做：品牌发布 · 作品首屏 · Campaign

## 同步规则

- 站点浏览层：`design-site`
- 公共 skills 层：`design-skills`
- 这两个仓库通过 `npm run build && npm run export:skills` 保持同步

