import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-4mpE5-uY.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{MaxWidths as c,n as l,t as u}from"./Container.stories-CNIIzGAn.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`container`,children:`Container`}),`
`,(0,p.jsxs)(t.p,{children:[`限制內容最大寬度並置中的版面容器。不指定 `,(0,p.jsx)(t.code,{children:`maxWidth`}),`/`,(0,p.jsx)(t.code,{children:`padding`}),` 時，會依裝置斷點自動調整。`]}),`
`,(0,p.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsx)(t.li,{children:`頁面主要內容區包一層 Container，避免在寬螢幕上文字/元素過度延展。`}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`maxWidth`}),`：一般內容 `,(0,p.jsx)(t.code,{children:`lg`}),`(960)、較寬 `,(0,p.jsx)(t.code,{children:`xl`}),`(1140)、最寬 `,(0,p.jsx)(t.code,{children:`xxl`}),`(1320)。`]}),`
`,(0,p.jsx)(t.li,{children:`不傳 props 即為響應式預設（手機留較小邊距、大螢幕置中不留邊）。`}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,p.jsx)(r,{language:`tsx`,code:`import { Container } from "@yosgo/swap-ui";

<Container maxWidth="lg">{children}</Container>`}),`
`,(0,p.jsx)(t.h2,{id:`maxwidth`,children:`maxWidth`}),`
`,(0,p.jsx)(a,{of:c})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),s(),i(),l()}))();export{f as default};