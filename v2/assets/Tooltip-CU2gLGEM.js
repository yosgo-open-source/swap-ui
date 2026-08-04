import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-xw-MS0Oi.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Variants as c,n as l,t as u}from"./Tooltip.stories-CzKaA5Wl.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,p.jsxs)(t.p,{children:[`滑鼠停留時顯示的補充說明。預設深色底白字；`,(0,p.jsx)(t.code,{children:`light`}),` 切淺色、`,(0,p.jsx)(t.code,{children:`arrow`}),` 加指向箭頭。`]}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`為圖示按鈕、縮寫、需要解釋的欄位提供補充說明，不佔版面。`}),`
`,(0,p.jsxs)(t.li,{children:[`說明較短用預設；需要指向特定元素用 `,(0,p.jsx)(t.code,{children:`arrow`}),`。`]}),`
`,(0,p.jsxs)(t.li,{children:[`淺色背景區域若深色 tooltip 太重，可用 `,(0,p.jsx)(t.code,{children:`light`}),`。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { Tooltip } from "@yosgo/swap-ui";

<Tooltip title="說明文字" arrow>
<IconButton>...</IconButton>
</Tooltip>`}),`
`,(0,p.jsx)(t.h2,{id:`樣式`,children:`樣式`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};