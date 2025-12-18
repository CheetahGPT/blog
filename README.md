# My Blog - 基于 DocKit Astro 主题

这是一个集成了 DocKit Astro 主题的博客项目，使用 Astro、Starlight 和 Tailwind CSS 构建。

## 已集成的组件

从 DocKit Astro 主题集成了以下组件和功能：

### 📦 组件库

#### 用户组件 (`src/components/user-components/`)
- **Button.astro** - 按钮组件
- **Grid.astro** - 网格布局组件
- **ListCard.astro** - 列表卡片组件
- **NewCard.astro** - 新卡片组件

#### 功能组件 (`src/components/`)
- **Accordion.astro** & **AccordionContainer.astro** - 手风琴折叠组件
- **Breadcrumb.astro** - 面包屑导航
- **CTA.astro** - 行动号召组件
- **HeroTabs.astro** & **HeroTabsItem.astro** - 英雄区域标签页
- **ImageMod.astro** - 图片组件
- **LinkButton.astro** - 链接按钮
- **Section.astro** - 页面区块
- **SidebarNav.astro** - 侧边栏导航
- **ThemeDemo.astro** - 主题演示

#### 覆盖组件 (`src/components/override-components/`)
- **Header.astro** - 自定义头部
- **Footer.astro** - 自定义页脚
- **Hero.astro** - 英雄区域
- **Sidebar.astro** - 侧边栏
- **TableOfContents.astro** - 目录
- **ThemeSwitch.astro** - 主题切换器
- 以及更多 Starlight 覆盖组件...

### 🎨 样式文件

- `src/styles/global.css` - 全局样式
- `src/styles/base.css` - 基础样式
- `src/styles/components.css` - 组件样式
- `src/styles/button.css` - 按钮样式
- `src/styles/navigation.css` - 导航样式

### ⚙️ 配置文件

- `src/config/config.json` - 站点配置
- `src/config/sidebar.json` - 侧边栏配置
- `src/config/social.json` - 社交媒体链接
- `src/config/locals.json` - 国际化配置
- `src/config/theme.json` - 主题配置
- `src/config/menu.en.json` / `menu.fr.json` - 多语言菜单

### 📝 示例内容

- `src/content/docs/` - 文档内容（英文和法文）
- `src/assets/` - 图片和图标资源
- `public/` - 公共资源文件

## 🚀 项目结构

```text
my_blog/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 图片、图标等资源
│   ├── components/     # Astro 组件
│   │   ├── user-components/      # 用户组件
│   │   └── override-components/  # Starlight 覆盖组件
│   ├── config/         # 配置文件
│   ├── content/        # 内容文件（Markdown/MDX）
│   │   └── docs/       # 文档页面
│   ├── styles/         # CSS 样式文件
│   └── content.config.ts
├── astro.config.mjs    # Astro 配置
├── package.json
└── tsconfig.json
```

## 🧞 命令

从项目根目录运行以下命令：

| 命令 | 说明 |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | 安装依赖                            |
| `npm run dev`             | 启动本地开发服务器 `localhost:4321`      |
| `npm run start`           | 启动开发服务器（别名）     |
| `npm run build`           | 构建生产站点到 `./dist/`          |
| `npm run preview`         | 本地预览构建结果     |
| `npm run astro ...`       | 运行 Astro CLI 命令 |

## 📚 使用指南

### 修改站点配置

编辑 `src/config/config.json` 来自定义站点标题、Logo 等：

```json
{
  "site": {
    "title": "My Blog",
    "logo": "/src/assets/logo-light.svg",
    "logo_darkmode": "/src/assets/logo-dark.svg"
  }
}
```

### 配置侧边栏

编辑 `src/config/sidebar.json` 来自定义文档导航结构。

### 添加新页面

在 `src/content/docs/` 目录下创建新的 `.md` 或 `.mdx` 文件。

### 使用组件

在 Markdown 文件中导入和使用组件：

```mdx
import Button from '@/components/user-components/Button.astro';
import Grid from '@/components/user-components/Grid.astro';

<Button>点击我</Button>

<Grid>
  // 网格内容
</Grid>
```

## 🎨 主题功能

- ✅ 深色/浅色主题切换
- ✅ 响应式设计
- ✅ 多语言支持（英文/法文）
- ✅ 搜索功能
- ✅ 目录导航
- ✅ 代码高亮
- ✅ Tailwind CSS v4

## 📖 了解更多

- [Astro 文档](https://docs.astro.build)
- [Starlight 文档](https://starlight.astro.build)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 许可证

基于 DocKit Astro 主题构建（MIT License）
