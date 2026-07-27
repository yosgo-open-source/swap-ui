import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-D8qCQTTk.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Compare as c,n as l,t as u}from"./SegmentedTabs.stories-D_dTRJC8.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`segmentedtab--segmentedtabs`,children:`SegmentedTab / SegmentedTabs`}),`
`,(0,p.jsxs)(t.p,{children:[`分段切換（膠囊型頁籤，外框圓角容器）。`,(0,p.jsx)(t.code,{children:`slide`}),` 開啟時選中底色以滑動動畫移動。`]}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`同層級的檢視切換（清單/圖表、我的/全部），選項少且等權重時比 Tab 更聚焦。`}),`
`,(0,p.jsxs)(t.li,{children:[`選項多到需要橫向捲動時加 `,(0,p.jsx)(t.code,{children:`variant="scrollable"`}),`（初載會自動把選中項捲進視野）。`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`寬度`}),`：預設撐滿父容器（沿 v1）；要讓外框貼合 tab 內容，傳 `,(0,p.jsx)(t.code,{children:`width="fit-content"`}),`；也可給具體數字。`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { SegmentedTab, SegmentedTabs } from "@yosgo/swap-ui";

<SegmentedTabs value={value} onChange={(_, v) => setValue(v)} slide>
<SegmentedTab label="我的請款單" />
<SegmentedTab label="SWAP Point 明細" />
</SegmentedTabs>`}),`
`,(0,p.jsx)(t.h2,{id:`基本-vs-slide`,children:`基本 vs slide`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};