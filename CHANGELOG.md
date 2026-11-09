# Changelog

## Unreleased

### Fixed

- **Banner**：icon 不論一行或多行都與第一行文字垂直置中，自訂 icon 亦同。改由 CSS 版面處理，不再於 mount 時量測高度，容器寬度改變造成換行後仍保持對齊。

### Deprecated

- **Banner**：`mobile` prop 已無作用，保留以維持相容。
