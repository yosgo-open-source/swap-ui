import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-4mpE5-uY.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,n as l,t as u}from"./Progress.stories-BRaSQWxJ.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`progress`,children:`Progress`}),`
`,(0,p.jsx)(t.p,{children:`步驟進度條。目前步以白底藍框光圈突顯，完成步實心藍。`}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`多步驟流程（申請、註冊、結帳）標示目前位置。`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`step`}),` 從 1 起算；`,(0,p.jsx)(t.code,{children:`label`}),` 依序對應各步。`]}),`
`,(0,p.jsx)(t.li,{children:`環形載入用 CircularProgress；非步驟式進度另尋 LinearProgress。`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { Progress } from "@yosgo/swap-ui";

<Progress step={2} count={4} label={["填寫資料", "確認內容", "送出", "完成"]} />`}),`
`,(0,p.jsx)(t.h2,{id:`基本`,children:`基本`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};