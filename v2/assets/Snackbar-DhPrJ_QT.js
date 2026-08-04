import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{i as n}from"./react-XnqUzw--.js";import{c as r,l as i,n as a,s as o}from"./blocks-Bd6y7pRB.js";import{t as s}from"./mdx-react-shim-y1jXGhTh.js";import{Default as c,Error as l,Success as u,n as d,t as f}from"./Snackbar.stories-B6YoeDCM.js";function p(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o,{of:f}),`
`,(0,h.jsx)(t.h1,{id:`snackbar`,children:`Snackbar`}),`
`,(0,h.jsx)(t.p,{children:`操作後的暫時回饋（底部浮出）。支援語意配色、收回操作、關閉鈕與四向進場。`}),`
`,(0,h.jsx)(t.h2,{id:`使用時機`,children:`使用時機`}),`
`,(0,h.jsxs)(t.ul,{children:[`
`,(0,h.jsxs)(t.li,{children:[`操作完成/失敗的`,(0,h.jsx)(t.strong,{children:`短暫`}),`通知（儲存成功、刪除完成）；常駐提示用 Banner。`]}),`
`,(0,h.jsxs)(t.li,{children:[`可復原的操作（刪除）給 `,(0,h.jsx)(t.code,{children:`revertButton`}),`，預設文案「收回操作」。`]}),`
`,(0,h.jsxs)(t.li,{children:[(0,h.jsx)(t.code,{children:`variant="success" + checkIcon`}),`、`,(0,h.jsx)(t.code,{children:`variant="error" + errorIcon`}),` 是標準組合。`]}),`
`]}),`
`,(0,h.jsx)(t.h2,{id:`基本用法`,children:`基本用法`}),`
`,(0,h.jsx)(r,{language:`tsx`,code:`import { Snackbar } from "@yosgo/swap-ui";

<Snackbar
open={open} autoHideDuration={3000} onClose={close}
message="已刪除 1 筆資料"
revertButton={{ onClick: undo }}
closeIcon={{ onClick: close }}
/>`}),`
`,(0,h.jsx)(t.h2,{id:`預設--成功--失敗`,children:`預設 / 成功 / 失敗`}),`
`,(0,h.jsx)(a,{of:c}),`
`,(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(a,{of:l})]})}function m(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=t(),s(),i(),d()}))();export{m as default};