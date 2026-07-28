import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-CLOq3Eyn.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,Mobile as l,n as u,t as d}from"./TaxTextField.stories-D7-fVfIT.js";function f(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:d}),`
`,(0,m.jsx)(t.h1,{id:`taxtextfield`,children:`TaxTextField`}),`
`,(0,m.jsx)(t.p,{children:`稅務申報類別欄位組（所得類別 + 執行業務類別連動）。`}),`
`,(0,m.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,m.jsxs)(t.ul,{children:[`
`,(0,m.jsxs)(t.li,{children:[`請款流程的稅務申報區塊。內建規則：`,(0,m.jsx)(t.strong,{children:`9A/9B 才有費用類別`}),`（選項依來源過濾；9A 用搜尋選單、9B 用下拉）、`,(0,m.jsx)(t.strong,{children:`50 薪資無費用類別`}),`。`]}),`
`,(0,m.jsxs)(t.li,{children:[`選定後 `,(0,m.jsx)(t.code,{children:`onChange`}),` 回傳完整組合值（代號、標籤、稅務說明、`,(0,m.jsx)(t.code,{children:`[代號] 標籤`}),` 組字）。`]}),`
`,(0,m.jsxs)(t.li,{children:[`相關常數（`,(0,m.jsx)(t.code,{children:`SWAPIncomeTypes`}),`、`,(0,m.jsx)(t.code,{children:`SWAPTaxDescription`}),` 等）也由 swap-ui 匯出，可自行組 UI。`]}),`
`]}),`
`,(0,m.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,m.jsx)(r,{language:`tsx`,code:`import { TaxTextField } from "@yosgo/swap-ui";

<TaxTextField
codeValue={value?.incomeCode ?? ""}
domainValue={value?.expenseCodeAndLabel ?? ""}
domainCodeValue={value?.expenseCode ?? ""}
onChange={setValue}
/>`}),`
`,(0,m.jsx)(t.h2,{id:`基本--行動版`,children:`基本 / 行動版`}),`
`,(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(a,{of:l})]})}function p(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,m.jsx)(t,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=t(),s(),i(),u()}))();export{p as default};