# Starlight 组件快速参考

## 导入速查表

### Icon 和 Badge（最常用）
```astro
// 推荐：使用本地副本
import Icon from "@/components/starlight/Icon.astro";
import Badge from "@/components/starlight/Badge.astro";
```

### 其他用户组件
```astro
// 选项 1: 通过别名（推荐）
import Card from "@starlight/user-components/Card.astro";
import LinkCard from "@starlight/user-components/LinkCard.astro";

// 选项 2: 通过公开 API
import { Card, LinkCard } from "@astrojs/starlight/components";
```

### 框架组件（用于 Override）
```astro
// 通过别名访问
import Header from "@starlight/components/Header.astro";
import Footer from "@starlight/components/Footer.astro";
import Sidebar from "@starlight/components/Sidebar.astro";
```

### 内部组件（谨慎使用）
```astro
// 现在可以访问了！
import SidebarRestorePoint from "@starlight/components/SidebarRestorePoint.astro";
import ContentNotice from "@starlight/components/ContentNotice.astro";
```

### 工具函数
```typescript
import { flattenSidebar, PAGE_TITLE_ID } from "@/lib/utils/starlight-helpers";
```

## 可用别名

| 别名 | 指向 | 用途 |
|------|------|------|
| `@/*` | `src/*` | 项目源文件 |
| `~/*` | `src/*` | 项目源文件（备选） |
| `@starlight/components/*` | `node_modules/@astrojs/starlight/components/*` | 框架和内部组件 |
| `@starlight/user-components/*` | `node_modules/@astrojs/starlight/user-components/*` | 用户组件 |

## 常用图标名称（Icon 组件）

```
right-caret, left-arrow, right-arrow, external
github, twitter, information, magnifier
```

## 使用建议

✅ **推荐**
- Icon, Badge → 本地副本
- Framework 组件 → @starlight/components/*
- 工具函数 → @/lib/utils/starlight-helpers

⚠️ **谨慎使用**
- Internal 组件 → 可能在版本更新时变化
- 直接访问 node_modules → 不推荐

## 文件位置

- 本地组件: `src/components/starlight/`
- 工具函数: `src/lib/utils/starlight-helpers.ts`
- 测试文件: `src/components/test/ComponentAccessTest.astro`
- 示例: `src/components/examples/ComponentImportExample.astro`
