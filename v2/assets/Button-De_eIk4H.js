import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-C0XwP2PW.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Sizes as c,States as l,Variants as u,n as d,t as f}from"./Button.stories-DrmKyoMH.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`button`,children:`Button`}),`
`,(0,h.jsxs)(t.p,{children:[`觸發主要動作的按鈕。以 `,(0,h.jsx)(t.code,{children:`variant`}),` 決定視覺層級。用法與原生 MUI Button 相同——
從 `,(0,h.jsx)(t.code,{children:`@mui/material/Button`}),` 匯入即可，SWAP 品牌樣式由 theme 自動套用（需在最外層包一層 `,(0,h.jsx)(t.code,{children:`SWAPThemeProvider`}),`）。`]}),`
`,(0,h.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`主要動作`}),`（送出、確認、下一步）→ `,(0,h.jsx)(t.code,{children:`variant="primary"`})]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`次要動作`}),`（取消、上一步）→ `,(0,h.jsx)(t.code,{children:`variant="secondary"`})]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`低強度動作`}),`（更多、輔助操作）→ `,(0,h.jsx)(t.code,{children:`variant="tertiary"`}),` 或 `,(0,h.jsx)(t.code,{children:`variant="text"`})]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.strong,{children:`危險動作`}),`（刪除、解除綁定）→ `,(0,h.jsx)(t.code,{children:`variant="danger"`})]}),`
`,(0,h.jsxs)(t.li,{children:[`一個畫面`,(0,h.jsx)(t.strong,{children:`聚焦一顆 primary`}),`，避免多顆主按鈕分散注意力。`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,h.jsx)(r,{language:`tsx`,code:`import Button from "@mui/material/Button";

<Button variant="primary" onClick={handleSubmit}>
送出
</Button>`}),`
`,(0,h.jsx)(t.h2,{id:`variant-一覽`,children:`variant 一覽`}),`
`,(0,h.jsx)(t.p,{children:`六種視覺層級。切到下方範例的「Show code」可看並複製對應寫法。`}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(t.h2,{id:`尺寸`,children:`尺寸`}),`
`,(0,h.jsxs)(t.p,{children:[`以 `,(0,h.jsx)(t.code,{children:`size`}),` 配合版面密度：`,(0,h.jsx)(t.code,{children:`small`}),` 40px、`,(0,h.jsx)(t.code,{children:`medium`}),` 48px、`,(0,h.jsx)(t.code,{children:`large`}),` 56px。`]}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(t.h2,{id:`狀態`,children:`狀態`}),`
`,(0,h.jsxs)(t.p,{children:[(0,h.jsx)(t.code,{children:`disabled`}),` 轉為灰字＋淡色底（保留 variant 色系身分）；`,(0,h.jsx)(t.code,{children:`loading`}),` 顯示 variant 色系的轉圈並鎖住點擊（用 v9 原生 `,(0,h.jsx)(t.code,{children:`loading`}),` prop）。兩種狀態滑鼠移入都顯示 🚫（not-allowed）游標。`]}),`
`,(0,h.jsxs)(t.p,{children:[`⚠️ `,(0,h.jsx)(t.code,{children:`loading`}),` 請永遠傳布林（`,(0,h.jsx)(t.code,{children:`loading={isFetching}`}),`），不要條件展開（`,(0,h.jsx)(t.code,{children:`{...(isFetching && { loading: true })}`}),`）——`,(0,h.jsx)(t.code,{children:`undefined ↔ true`}),` 切換會重組 loading 的 DOM 結構，遇到 Google 翻譯等會修改 DOM 的瀏覽器擴充功能可能 crash。`]}),`
`,(0,h.jsx)(a,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),i(),d()}))();export{m as default};