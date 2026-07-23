import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-C24dPbIs.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Colors as c,DarkMode as l,Scale as u,n as d,t as f}from"./Typography.stories-x3OsSXo4.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`typography`,children:`Typography`}),`
`,(0,h.jsxs)(t.p,{children:[`SWAP 品牌排版元件，涵蓋 32 種字級 variant。`,(0,h.jsx)(t.code,{children:`variant`}),` 決定字級／字重／行高，
`,(0,h.jsx)(t.code,{children:`color`}),` 決定文字顏色，`,(0,h.jsx)(t.code,{children:`mode="dark"`}),` 切換深色底適用的文字色。從 `,(0,h.jsx)(t.code,{children:`@yosgo/swap-ui`}),` 匯入。`]}),`
`,(0,h.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`標題`}),`：頁面主標用 `,(0,h.jsx)(t.code,{children:`d1`}),`–`,(0,h.jsx)(t.code,{children:`d4`}),`（Display）或 `,(0,h.jsx)(t.code,{children:`h1`}),`–`,(0,h.jsx)(t.code,{children:`h6`}),`；區塊標題用 `,(0,h.jsx)(t.code,{children:`title`}),` / `,(0,h.jsx)(t.code,{children:`subtitle`}),`。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`內文`}),`：段落用 `,(0,h.jsx)(t.code,{children:`body1`}),` / `,(0,h.jsx)(t.code,{children:`body2`}),`；需要更寬鬆行距時用 `,(0,h.jsx)(t.code,{children:`_loose`}),` 版（如 `,(0,h.jsx)(t.code,{children:`body1_loose`}),`）。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`輔助文字`}),`：說明、標註用 `,(0,h.jsx)(t.code,{children:`caption1`}),` / `,(0,h.jsx)(t.code,{children:`caption2`}),`；極小字用 `,(0,h.jsx)(t.code,{children:`small*`}),` / `,(0,h.jsx)(t.code,{children:`tiny*`}),`。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`顏色`}),`：一般文字用語意色 `,(0,h.jsx)(t.code,{children:`primary`}),`（主）／`,(0,h.jsx)(t.code,{children:`secondary`}),`（次）／`,(0,h.jsx)(t.code,{children:`tertiary`}),`（輔）；
需要品牌色或狀態色時用 token 名（如 `,(0,h.jsx)(t.code,{children:`primary400`}),`、`,(0,h.jsx)(t.code,{children:`danger800`}),`）。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`深色底`}),`：文字放在深色背景時加 `,(0,h.jsx)(t.code,{children:`mode="dark"`}),`，語意色會自動改用亮色。`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,h.jsx)(r,{language:`tsx`,code:`import { Typography } from "@yosgo/swap-ui";

<Typography variant="body1" color="primary">
一般內文
</Typography>`}),`
`,(0,h.jsx)(t.h2,{id:`字級一覽`,children:`字級一覽`}),`
`,(0,h.jsx)(t.p,{children:`32 種 variant 的大小與粗細層次。`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`顏色`,children:`顏色`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`primary`}),` / `,(0,h.jsx)(t.code,{children:`secondary`}),` / `,(0,h.jsx)(t.code,{children:`tertiary`}),` 是文字色語意（黑／深灰／灰，非品牌藍）；token 名對應該色階。`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`深色模式`,children:`深色模式`}),`
`,(0,h.jsxs)(t.p,{children:[`加 `,(0,h.jsx)(t.code,{children:`mode="dark"`}),`，語意色自動改亮色。`]}),`
`,(0,h.jsx)(a,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),i(),d()}))();export{m as default};