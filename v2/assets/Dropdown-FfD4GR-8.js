import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-C0XwP2PW.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Sizes as c,n as l,t as u}from"./Dropdown.stories-CBUfMcNh.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`dropdown`,children:`Dropdown`}),`
`,(0,p.jsx)(t.p,{children:`輕量下拉選擇（無浮動 label，粗體選值）。適合工具列上的篩選條件。`}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`頁面/清單的篩選器（時間範圍、排序方式）——選值本身就是說明，不需要 label。`}),`
`,(0,p.jsx)(t.li,{children:`表單欄位（需要 label、錯誤狀態）用 Select。`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`height`}),` ≥ 56 時自動放大字級與內距。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { Dropdown } from "@yosgo/swap-ui";
import MenuItem from "@mui/material/MenuItem";

<Dropdown value={range} onChange={(e) => setRange(e.target.value)} width={240} height={40}>
<MenuItem value="7d">近 7 天</MenuItem>
<MenuItem value="30d">近 30 天</MenuItem>
</Dropdown>`}),`
`,(0,p.jsx)(t.h2,{id:`尺寸`,children:`尺寸`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};