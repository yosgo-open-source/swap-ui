import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-Bv5q9V5b.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{WithMenu as c,n as l,t as u}from"./MenuItem.stories-t44ZTlc4.js";function d(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`menuitem`,children:`MenuItem`}),`
`,(0,p.jsx)(t.p,{children:`選單項目（14px 粗體、hover 品牌色）。搭配原生 MUI Menu 使用。`}),`
`,(0,p.jsxs)(t.blockquote,{children:[`
`,(0,p.jsxs)(t.p,{children:[`v1 的 `,(0,p.jsx)(t.code,{children:`Menu`}),` 是純轉發、無任何加值，v2 不再匯出——選單容器直接
`,(0,p.jsx)(t.code,{children:`import Menu from "@mui/material/Menu"`}),`。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`下拉操作選單（更多操作、右鍵選單）內的項目。`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`iconChildren`}),` 在項目尾端放圖示；hover 三色（底/字/圖示）可個別覆蓋——破壞性操作可換成 danger 色系。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { MenuItem } from "@yosgo/swap-ui";
import Menu from "@mui/material/Menu";

<Menu anchorEl={anchorEl} open={open} onClose={close}>
<MenuItem onClick={onEdit}>編輯</MenuItem>
<MenuItem hoverBackgroundColor="#FFEBED" hoverFontColor="#D40F14">刪除</MenuItem>
</Menu>`}),`
`,(0,p.jsx)(t.h2,{id:`搭配選單`,children:`搭配選單`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};