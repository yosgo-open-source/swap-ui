import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-4mpE5-uY.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,DisableFreeInput as l,n as u,t as d}from"./AutoComplete.stories-DNF0gZKX.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`autocomplete`,children:`AutoComplete`}),`
`,(0,m.jsx)(t.p,{children:`搜尋式選單（常開 Popper 面板：標題 + 搜尋框 + 選項清單）。支援「找不到選項時以輸入值新增」的自由輸入流程。`}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`選項很多需要搜尋過濾（銀行、申報類別）。`}),`
`,(0,m.jsxs)(t.li,{children:[`允許使用者新增不在清單中的值時，保留自由輸入（點「使用 『輸入值』」觸發 `,(0,m.jsx)(t.code,{children:`handleNoOptionsValueChange`}),`）；不允許則 `,(0,m.jsx)(t.code,{children:`disableFreeInput`}),`。`]}),`
`,(0,m.jsxs)(t.li,{children:[`由 `,(0,m.jsx)(t.code,{children:`open`}),` + `,(0,m.jsx)(t.code,{children:`anchorEl`}),` 控制開闔（通常掛在一顆按鈕上）。`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import { AutoComplete } from "@yosgo/swap-ui";

<AutoComplete
open={Boolean(anchorEl)} anchorEl={anchorEl}
title="選擇銀行" placeholder="搜尋銀行"
options={banks} getOptionLabel={(o) => o}
onChange={(_, v) => select(v)}
handleNoOptionsValueChange={(v) => addAndSelect(v)}
/>`}),`
`,(0,m.jsx)(t.h2,{id:`基本含自由輸入`,children:`基本（含自由輸入）`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`關閉自由輸入`,children:`關閉自由輸入`}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};