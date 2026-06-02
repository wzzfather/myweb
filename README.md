# 魏子政 · 个人简历网站

> 个人线上简历，基于纯静态站点（原生 HTML / CSS / JavaScript）搭建，部署于 GitHub Pages。

🌐 **在线访问**：<https://wzzfather.github.io/myweb/>

---

## 关于我

- **魏子政** · 计算机科学与技术硕士（元智大学，中国台湾）
- 后端开发工程师 · AI 应用与数据工程
- 约 2 年金融行业后端开发经验，主攻 Python / FastAPI / MySQL
- 主导过智能问数、消保审查、数据中台等企业级交付
- 熟练使用 Dify、扣子（Coze）、MaxKB 等平台将大模型落地为后端服务
- 日常深度使用 Claude Code、Cursor、OpenClaw 做智能体与工作流编排
- 发表 SCI 论文 1 篇（*Journal of Imaging*, DOI: [10.3390/jimaging11090311](https://doi.org/10.3390/jimaging11090311)）
- 星河超级个体黑客松竞赛 **优胜奖** 得主

## 联系方式

| 项目 | 信息 |
| --- | --- |
| 邮箱 | wazizheng@163.com |
| 电话 | +86 18559179213 |
| 个人网站 | <https://wzzfather.github.io/myweb/> |

## 技术栈

| 分类 | 能力 |
| --- | --- |
| **后端与服务** | Python · FastAPI / REST · Java · Spring 生态 · MySQL / Oracle / OceanBase / Hive · Redis · RabbitMQ |
| **数据工程** | ODS / DWD / ADS 分层建模 · 入湖同步 · 血缘治理 · WeData |
| **AI 工程化** | RAG · NL2SQL · Prompt / 意图 / 向量检索 · Dify / MaxKB / 扣子 Coze · PyTorch |
| **运维与协作** | Linux · Docker · Nginx · Claude Code · Cursor IDE · OpenClaw |

## 代表项目

- **浦发银行 · 智能问数平台** — SQL 准确率由 67% 提升至 91%
- **鼎和保险 · 消保审查系统** — PDF/Word/OCR 解析 + RAG 知识库 + RabbitMQ 异步调度
- **申能财险 · WeData 数据中台** — 表级与字段级血缘治理
- **AI 驱动个人职涯运营系统** — FastAPI + Vue3 全栈，星河黑客松优胜奖
- **CSDA-UNet 海马体分割** — ADNI Dice 0.9512，发表于 *Journal of Imaging*

## 网站功能

- 顶栏导航 + 锚点平滑滚动
- Hero 区域：个人头像、简介、下载简历、**扫码访问二维码**（点击可复制链接）
- 工作经历 / 教育经历 / 项目经历 / 技能专长 / 学术与荣誉 / 联系方式
- 响应式布局，适配 PC 与移动端
- 联系信息一键复制

## 本地预览

无需任何构建工具，直接用浏览器打开 `index.html`，或启动任意静态服务器：

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

然后访问 <http://localhost:8000>。

## 目录结构

```
myweb/
├── index.html          # 主页面
├── css/style.css       # 样式
├── js/script.js        # 交互逻辑
├── images/             # 头像与装饰图片
├── assets/resume.pdf   # 可下载简历
└── docs/PRD.md         # 二维码功能 PRD
```

## License

MIT
