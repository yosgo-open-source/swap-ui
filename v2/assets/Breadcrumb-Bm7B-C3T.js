import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-DUL-KZ-S.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,Collapsed as l,n as u,t as d}from"./Breadcrumb.stories-CkKTUh9X.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`breadcrumb`,children:`Breadcrumb`}),`
`,(0,m.jsxs)(t.p,{children:[`麵包屑導覽，標示當前頁在層級中的位置。最後一項用 `,(0,m.jsx)(t.code,{children:`last`}),`（黑色粗體、不可點）。`]}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`層級三層以上的頁面（列表 → 分類 → 詳情），幫使用者快速回上層。`}),`
`,(0,m.jsxs)(t.li,{children:[`層級太深時給 `,(0,m.jsx)(t.code,{children:`maxItems`}),`，中間項會收合成「⋯」選單。`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import { Breadcrumb, BreadcrumbItem } from "@yosgo/swap-ui";

<Breadcrumb>
{[
  <BreadcrumbItem key="1" href="/">首頁</BreadcrumbItem>,
  <BreadcrumbItem key="2" last>目前頁面</BreadcrumbItem>,
]}
</Breadcrumb>`}),`
`,(0,m.jsx)(t.h2,{id:`基本`,children:`基本`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`收合maxitems`,children:`收合（maxItems）`}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};