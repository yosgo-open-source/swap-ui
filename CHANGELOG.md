# Changelog

## 2.0.0（2026-11-09）

首個 v2 正式版：品牌樣式改由 MUI v9 theme 提供，樣式引擎由 JSS 換成 Emotion。

### Breaking

- 需要 `@mui/material` ^9 與 React 18 以上，不再支援 `@material-ui` v4。
- 部分元件改從 `@mui/material` 直接引用，部分舊匯出已移除。遷移步驟與完整清單見 [MIGRATION.md](./MIGRATION.md)。

### Fixed

- **Banner**：icon 不論一行或多行都與第一行文字垂直置中，自訂 icon 亦同。改由 CSS 版面處理，不再於 mount 時量測高度，容器寬度改變造成換行後仍保持對齊。

### Deprecated

- **Banner**：`mobile` prop 已無作用，保留以維持相容。
