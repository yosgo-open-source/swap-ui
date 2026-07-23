import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-C24dPbIs.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Basic as c,Checked as l,Failed as u,FullWidthMobile as d,WithHelpText as f,n as p,t as m}from"./Modal.stories-CZExetPs.js";function h(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{of:m}),`
`,(0,_.jsx)(t.h1,{id:`modal`,children:`Modal`}),`
`,(0,_.jsx)(t.p,{children:`對話彈窗（head / body / footer 完整組合）。四檔尺寸、成功/失敗圖示、行動版底部彈出與全螢幕。`}),`
`,(0,_.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[`需要使用者`,(0,_.jsx)(t.strong,{children:`確認或決策`}),`的操作（送出、刪除）；單純通知用 Snackbar。`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`size`}),`：extraSmall 320 / small 480 / medium 640 / large 800。`]}),`
`,(0,_.jsxs)(t.li,{children:[`行動版：`,(0,_.jsx)(t.code,{children:`mobile`}),` 調整字級與間距，搭 `,(0,_.jsx)(t.code,{children:`fullWidth`}),` 從底部滑出；`,(0,_.jsx)(t.code,{children:`fullScreen`}),` 全螢幕。`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`primaryButton`}),` / `,(0,_.jsx)(t.code,{children:`secondaryButton`}),` 支援 loading、disabled、tooltip；`,(0,_.jsx)(t.code,{children:`footer`}),` 可整段自訂。`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(t.code,{children:`checked`}),` / `,(0,_.jsx)(t.code,{children:`failed`}),` 在標題前顯示成功/警告圖示（`,(0,_.jsx)(t.code,{children:`checkIconColor`}),` / `,(0,_.jsx)(t.code,{children:`iconColor`}),` 給 token 名）。`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,_.jsx)(r,{language:`tsx`,code:`import { Modal } from "@yosgo/swap-ui";

<Modal
open={open} onClose={close}
title="確認送出請款單？" size="small"
secondaryButton={{ title: "取消", onClick: close }}
primaryButton={{ title: "送出", onClick: submit, loading }}
>
送出後將通知業主付款。
</Modal>`}),`
`,(0,_.jsx)(t.h2,{id:`基本--說明文字`,children:`基本 / 說明文字`}),`
`,(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(a,{of:f}),`
`,(0,_.jsx)(t.h2,{id:`成功--失敗圖示`,children:`成功 / 失敗圖示`}),`
`,(0,_.jsx)(a,{of:l}),`
`,(0,_.jsx)(a,{of:u}),`
`,(0,_.jsx)(t.h2,{id:`行動版底部彈出`,children:`行動版底部彈出`}),`
`,(0,_.jsx)(a,{of:d})]})}function g(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=t(),s(),i(),p()}))();export{g as default};