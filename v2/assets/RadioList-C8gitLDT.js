import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-xw-MS0Oi.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,CheckBoxes as l,Modes as u,n as d,t as f}from"./RadioList.stories-Qif3zPsv.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`radiolist--checkboxlist`,children:`RadioList / CheckBoxList`}),`
`,(0,h.jsx)(t.p,{children:`可點選的選項卡片（內嵌 Radio / CheckBox）。選中時品牌藍框藍底。`}),`
`,(0,h.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsx)(t.li,{children:`方案選擇（單選用 RadioList）、通知偏好（多選用 CheckBoxList）等需要「大點擊面積 + 說明文字」的選項。`}),`
`,(0,h.jsxs)(t.li,{children:[`三種版型：預設（說明靠右）、`,(0,h.jsx)(t.code,{children:`multiline`}),`（說明在標題下）、`,(0,h.jsx)(t.code,{children:`line`}),`（標題｜直線｜長說明）。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`checked`}),` 與點擊邏輯由使用端控制（整張卡片可點）。`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,h.jsx)(r,{language:`tsx`,code:`import { RadioList } from "@yosgo/swap-ui";

<RadioList
checked={plan === "monthly"}
onClick={() => setPlan("monthly")}
title="月繳" subtitle="NT$ 300 / 月"
/>`}),`
`,(0,h.jsx)(t.h2,{id:`單選`,children:`單選`}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`三種版型`,children:`三種版型`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`多選checkboxlist`,children:`多選（CheckBoxList）`}),`
`,(0,h.jsx)(a,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),i(),d()}))();export{m as default};