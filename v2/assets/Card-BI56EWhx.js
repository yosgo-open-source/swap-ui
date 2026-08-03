import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-DUL-KZ-S.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Loading as c,WithButtons as l,n as u,t as d}from"./Card.stories-CvHJ0Fm8.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`card`,children:`Card`}),`
`,(0,m.jsxs)(t.p,{children:[`帶底部操作按鈕列的內容卡片。`,(0,m.jsx)(t.code,{children:`loading`}),` 時整卡自動換成骨架。`]}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsx)(t.li,{children:`清單中的資料卡片（請款單、專案）且卡片本身帶操作（查看/刪除）。`}),`
`,(0,m.jsx)(t.li,{children:`純內容區塊（無按鈕列）用 Paper。`}),`
`,(0,m.jsxs)(t.li,{children:[(0,m.jsx)(t.code,{children:`buttons`}),` 由左到右排列、均分寬度；破壞性操作放最後並用 `,(0,m.jsx)(t.code,{children:`variant: "danger"`}),`。`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import { Card } from "@yosgo/swap-ui";

<Card
loading={isLoading}
buttons={[
  { title: "查看明細", onClick: view },
  { title: "刪除", variant: "danger", onClick: remove },
]}
>
{content}
</Card>`}),`
`,(0,m.jsx)(t.h2,{id:`按鈕列`,children:`按鈕列`}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(t.h2,{id:`載入骨架`,children:`載入骨架`}),`
`,(0,m.jsx)(a,{of:c})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};