import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-C0XwP2PW.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Day as c,Month as l,Year as u,n as d,t as f}from"./DatePicker.stories-DJph0v71.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`datepicker`,children:`DatePicker`}),`
`,(0,h.jsx)(t.p,{children:`日期選擇彈窗。v2 起改基於 MUI X Date Pickers（日曆視覺與 v1 不同，props 與回呼格式沿 v1）。`}),`
`,(0,h.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`選擇單一日期/月份/年份（`,(0,h.jsx)(t.code,{children:`format`}),` 控制精度）。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`getValue`}),` 回傳字串格式沿 v1：`,(0,h.jsx)(t.code,{children:`"YYYY"`}),`／`,(0,h.jsx)(t.code,{children:`"YYYY-M"`}),`／`,(0,h.jsx)(t.code,{children:`"YYYY-M-D"`}),`（`,(0,h.jsx)(t.strong,{children:`不補零`}),`）。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`min`}),` / `,(0,h.jsx)(t.code,{children:`max`}),` 限制可選範圍；`,(0,h.jsx)(t.code,{children:`ModalProps`}),` 可調彈窗（標題、尺寸等）。`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,h.jsx)(r,{language:`tsx`,code:`import { DatePicker } from "@yosgo/swap-ui";

<DatePicker
open={open} onClose={close}
format="day" value={date}
min="2026-01-01" max="2026-12-31"
getValue={(d) => setDate(d)}
/>`}),`
`,(0,h.jsx)(t.h2,{id:`三種精度`,children:`三種精度`}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(a,{of:l}),`
`,(0,h.jsx)(a,{of:u})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),i(),d()}))();export{m as default};