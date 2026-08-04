import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-xw-MS0Oi.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,WithAnimation as l,n as u,t as d}from"./Tab.stories-zECeM4N1.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`tab--tabs--tabpanel`,children:`Tab / Tabs / TabPanel`}),`
`,(0,m.jsx)(t.p,{children:`頁籤導覽。選中的 Tab 底部顯示 4px 品牌藍指示條（可加展開動畫）。`}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`同一頁面內切換平行內容區（總覽/明細/設定）。`}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`selected`}),` 需由使用端依 value 傳入（指示條由 Tab 自繪）；`,(0,m.jsx)(t.code,{children:`animation`}),` 開啟 300ms 展開動畫；`,(0,m.jsx)(t.code,{children:`noIndicator`}),` 隱藏指示條。`]}),`
`,(0,m.jsxs)(t.li,{children:[`內容區用 `,(0,m.jsx)(t.code,{children:`TabPanel`}),`（value/index 對應顯示）。`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import { Tab, Tabs, TabPanel } from "@yosgo/swap-ui";

<Tabs value={value} onChange={(_, v) => setValue(v)}>
<Tab label="總覽" selected={value === 0} />
<Tab label="明細" selected={value === 1} />
</Tabs>
<TabPanel value={value} index={0}>總覽內容</TabPanel>
<TabPanel value={value} index={1}>明細內容</TabPanel>`}),`
`,(0,m.jsx)(t.h2,{id:`基本`,children:`基本`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(t.h2,{id:`指示條動畫`,children:`指示條動畫`}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};