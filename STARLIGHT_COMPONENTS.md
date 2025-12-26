# Starlight 组件访问指南

本项目已配置别名，可以直接访问所有 Starlight 组件（包括内部组件）。

## 组件分类和访问方式

### 1. User Components（用户组件）
这些是 Starlight 提供给用户在 MDX 文件中使用的公开组件。

**方式 A：通过公开 API 导入（推荐）**
```astro
import { Icon, Badge, Card, LinkCard } from "@astrojs/starlight/components";
```

**方式 B：通过别名直接导入**
```astro
import Icon from "@starlight/user-components/Icon.astro";
import Badge from "@starlight/user-components/Badge.astro";
```

**方式 C：使用本地副本**
```astro
import Icon from "@/components/starlight/Icon.astro";
import Badge from "@/components/starlight/Badge.astro";
```

可用组件：
- Icon
- Badge
- Card
- CardGrid
- LinkCard
- LinkButton
- Steps
- Tabs
- TabItem
- FileTree
- Aside

### 2. Framework Components（框架组件）
这些是 Starlight 框架的核心组件，可以在 astro.config.mjs 中 override。

**方式 A：通过包导出导入**
```astro
import Header from "@astrojs/starlight/components/Header.astro";
import Footer from "@astrojs/starlight/components/Footer.astro";
```

**方式 B：通过别名直接导入（推荐）**
```astro
import Header from "@starlight/components/Header.astro";
import Footer from "@starlight/components/Footer.astro";
```

可用组件：
- Header
- Footer
- Sidebar
- SidebarSublist
- PageFrame
- PageSidebar
- TwoColumnContent
- ContentPanel
- Pagination
- Search
- Hero
- Head
- TableOfContents
- MobileTableOfContents
- ThemeSelect
- LanguageSelect
- SocialIcons
- 等等...

### 3. Internal Components（内部组件）
这些组件没有在 package.json 中明确导出，但仍可访问。

**通过别名导入**
```astro
import SidebarRestorePoint from "@starlight/components/SidebarRestorePoint.astro";
import ContentNotice from "@starlight/components/ContentNotice.astro";
```

### 4. 工具函数和类型

**工具函数（已复制到本地）**
```typescript
import { flattenSidebar, PAGE_TITLE_ID } from "@/lib/utils/starlight-helpers";
```

**类型定义**
```typescript
import type { SidebarEntry, SidebarLink } from "@/lib/utils/starlight-helpers";
```

## 配置说明

### Vite 别名配置
在 `astro.config.mjs` 中已配置：

```javascript
alias: {
  "@": "./src",
  "~": "./src",
  "@starlight/components": "./node_modules/@astrojs/starlight/components",
  "@starlight/user-components": "./node_modules/@astrojs/starlight/user-components",
}
```

### TypeScript 路径映射
需要在 `tsconfig.json` 中添加（可选，用于 IDE 支持）：

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"],
      "~/*": ["src/*"],
      "@starlight/components/*": ["node_modules/@astrojs/starlight/components/*"],
      "@starlight/user-components/*": ["node_modules/@astrojs/starlight/user-components/*"]
    }
  }
}
```

## 推荐实践

1. **User Components**: 优先使用本地副本 `@/components/starlight/*`，避免依赖 Starlight 内部实现
2. **Framework Components**: 使用别名 `@starlight/components/*` 访问，便于维护
3. **Internal Components**: 仅在必要时使用，通过别名访问

## 示例

### 在 Override 组件中使用
```astro
---
// SidebarSublist.astro
import Icon from "@/components/starlight/Icon.astro";
import Badge from "@/components/starlight/Badge.astro";
import SidebarRestorePoint from "@starlight/components/SidebarRestorePoint.astro";
import { flattenSidebar } from "@/lib/utils/starlight-helpers";
---
```

### 在用户组件中使用
```astro
---
// NewCard.astro
import Icon from "@/components/starlight/Icon.astro";
---

<div class="card">
  <Icon name="rocket" />
  <slot />
</div>
```

### 访问所有 Starlight 组件列表

**Framework Components (26个)**
- AnchorHeading
- Banner
- ContentNotice (内部)
- ContentPanel
- DraftContentNotice
- EditLink
- FallbackContentNotice
- Footer
- Head
- Header
- Hero
- LanguageSelect
- LastUpdated
- MarkdownContent
- MobileMenuFooter
- MobileMenuToggle
- MobileTableOfContents
- Page
- PageFrame
- PageSidebar
- PageTitle
- Pagination
- Search
- Select
- Sidebar
- SidebarPersister
- SidebarRestorePoint (内部)
- SidebarSublist
- SiteTitle
- SkipLink
- SocialIcons
- StarlightPage
- TableOfContents
- ThemeProvider
- ThemeSelect
- TwoColumnContent

**User Components (11个)**
- Aside
- Badge
- Card
- CardGrid
- FileTree
- Icon
- LinkButton
- LinkCard
- Steps
- TabItem
- Tabs

## 注意事项

1. 内部组件可能在 Starlight 更新时发生变化，使用时需谨慎
2. 建议关键组件（如 Icon、Badge）使用本地副本，避免 breaking changes
3. 使用别名后，可以统一管理组件导入路径
