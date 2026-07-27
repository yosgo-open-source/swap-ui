import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-D8qCQTTk.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,WithHelper as l,n as u,t as d}from"./Select.stories-CLxJUF_X.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`select`,children:`Select`}),`
`,(0,m.jsx)(t.p,{children:`下拉選單（FormControl 組合，含浮動 label 與 helperText）。`}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`選項較多（5+）或空間有限的單選；少量選項攤開比較用 RadioButton。`}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`placeholder`}),` 同時是浮動 label；`,(0,m.jsx)(t.code,{children:`helperText`}),` 放說明或錯誤訊息（配 `,(0,m.jsx)(t.code,{children:`error`}),`）。`]}),`
`,(0,m.jsxs)(t.li,{children:[`選單位置可用 `,(0,m.jsx)(t.code,{children:`vertical`}),` / `,(0,m.jsx)(t.code,{children:`horizontal`}),` / `,(0,m.jsx)(t.code,{children:`transformOrigin`}),` 微調。`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import { Select } from "@yosgo/swap-ui";
import MenuItem from "@mui/material/MenuItem";

<Select placeholder="類別" value={v} onChange={(e) => setV(e.target.value)}>
<MenuItem value="design">設計費</MenuItem>
<MenuItem value="dev">開發費</MenuItem>
</Select>`}),`
`,(0,m.jsx)(t.h2,{id:`基本`,children:`基本`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`說明與錯誤`,children:`說明與錯誤`}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};