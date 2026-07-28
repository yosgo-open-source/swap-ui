import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-CLOq3Eyn.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Variants as c,n as l,t as u}from"./Banner.stories-dukrsQPh.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`banner`,children:`Banner`}),`
`,(0,p.jsxs)(t.p,{children:[`頁面內的狀態提示橫幅。以 `,(0,p.jsx)(t.code,{children:`variant`}),` 決定語意配色與預設圖示。`]}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`需要`,(0,p.jsx)(t.strong,{children:`常駐`}),`在頁面/區塊內的提示（權限不足、功能維護中、操作結果說明）。`]}),`
`,(0,p.jsxs)(t.li,{children:[`操作後的`,(0,p.jsx)(t.strong,{children:`暫時`}),`回饋用 Snackbar；重要決策用 Modal。`]}),`
`,(0,p.jsxs)(t.li,{children:[`內容較長時會自動改為頂部對齊（手機可強制 `,(0,p.jsx)(t.code,{children:`mobile`}),`）。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { Banner } from "@yosgo/swap-ui";

<Banner variant="warning">此功能將於 7/20 進行維護，期間暫停服務。</Banner>`}),`
`,(0,p.jsx)(t.h2,{id:`五種語意`,children:`五種語意`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};