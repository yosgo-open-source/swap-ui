import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-xw-MS0Oi.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{States as c,n as l,t as u}from"./TextField.stories-V-evyjIF.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`textfield`,children:`TextField`}),`
`,(0,p.jsx)(t.p,{children:`表單文字輸入框。label 浮在邊框上、focus 顯示品牌色光圈、錯誤時紅框。`}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[`單行/多行文字輸入（`,(0,p.jsx)(t.code,{children:`multiline`}),`）；下拉選擇可用 `,(0,p.jsx)(t.code,{children:`select`}),` 模式搭配 MenuItem。`]}),`
`,(0,p.jsxs)(t.li,{children:[`驗證失敗時給 `,(0,p.jsx)(t.code,{children:`error`}),` + `,(0,p.jsx)(t.code,{children:`helperText`}),` 說明原因。`]}),`
`,(0,p.jsxs)(t.li,{children:[`寬高可用 `,(0,p.jsx)(t.code,{children:`width`}),` / `,(0,p.jsx)(t.code,{children:`height`}),` 指定，或 `,(0,p.jsx)(t.code,{children:`fullWidth`}),` 撐滿。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { TextField } from "@yosgo/swap-ui";

<TextField label="信箱" placeholder="you@example.com"
error={!valid} helperText={!valid ? "格式不正確" : ""} />`}),`
`,(0,p.jsx)(t.h2,{id:`狀態`,children:`狀態`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};