import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-Bd6y7pRB.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,Many as l,n as u,t as d}from"./Pagination.stories-DOy_52e8.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`pagination`,children:`Pagination`}),`
`,(0,m.jsx)(t.p,{children:`分頁導覽。SWAP 樣式（24px 方塊、品牌藍選中態）由 theme 自動套用，直接用原生 MUI Pagination。`}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`清單/表格資料量大需要分頁時；`,(0,m.jsx)(t.code,{children:`count`}),` 為總頁數，`,(0,m.jsx)(t.code,{children:`onChange`}),` 取得目標頁。`]}),`
`,(0,m.jsx)(t.li,{children:`無限捲動的行動裝置情境可考慮不用分頁。`}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import Pagination from "@mui/material/Pagination";

<Pagination count={10} page={page} onChange={(e, p) => setPage(p)} />`}),`
`,(0,m.jsx)(t.h2,{id:`基本`,children:`基本`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`多頁省略號`,children:`多頁（省略號）`}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};