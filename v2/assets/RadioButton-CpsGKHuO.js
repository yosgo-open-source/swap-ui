import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-4mpE5-uY.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Group as c,n as l,t as u}from"./RadioButton.stories-WKvJa9vg.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`radiobutton`,children:`RadioButton`}),`
`,(0,p.jsxs)(t.p,{children:[`單選圓鈕（24px、品牌藍選中）。搭配 MUI `,(0,p.jsx)(t.code,{children:`RadioGroup`}),` 管理互斥選取。`]}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`少量互斥選項（2–5 個）全部攤開讓使用者比較時。`}),`
`,(0,p.jsx)(t.li,{children:`選項多時改用 Select 下拉；可複選用 CheckBox。`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { RadioButton } from "@yosgo/swap-ui";
import RadioGroup from "@mui/material/RadioGroup";

<RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
<RadioButton value="monthly" label="月繳" />
<RadioButton value="yearly" label="年繳" />
</RadioGroup>`}),`
`,(0,p.jsx)(t.h2,{id:`群組`,children:`群組`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};