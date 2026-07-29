import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./tokens-pmEXbg7u.js";import{i as u}from"./react-XnqUzw--.js";import{l as d,s as f}from"./blocks-CvcMLFjb.js";import{t as p}from"./mdx-react-shim-y1jXGhTh.js";function m({token:e,hex:t}){let[n,r]=b.useState(!1);return(0,x.jsxs)(`button`,{type:`button`,title:`點擊複製 ${t}`,onClick:()=>{navigator.clipboard.writeText(t).then(()=>{r(!0),setTimeout(()=>r(!1),1200)})},style:{cursor:`pointer`,border:`1px solid #ECECEC`,borderRadius:8,padding:0,background:`#FFFFFF`,textAlign:`left`,overflow:`hidden`,fontFamily:`inherit`},children:[(0,x.jsx)(`div`,{style:{height:48,backgroundColor:t}}),(0,x.jsxs)(`div`,{style:{padding:`6px 8px`,fontSize:12,lineHeight:1.5},children:[(0,x.jsx)(`div`,{style:{fontWeight:700},children:e}),(0,x.jsx)(`div`,{style:{color:n?`#00932A`:`#6F6F6F`},children:n?`✓ 已複製`:t})]})]})}function h(){return(0,x.jsx)(`div`,{style:{display:`grid`,gap:24},children:Object.entries(c).map(([e,t])=>(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{style:{fontWeight:700,marginBottom:8,textTransform:`capitalize`},children:e}),(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:8},children:Object.entries(t).map(([e,t])=>(0,x.jsx)(m,{token:e,hex:t},e))})]},e))})}function g(){return(0,x.jsx)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`},children:Object.entries(i).map(([e,t])=>(0,x.jsxs)(`div`,{style:{textAlign:`center`,fontSize:12},children:[(0,x.jsx)(`div`,{style:{width:96,height:64,borderRadius:t,border:`2px solid #1747C2`,background:`#E6E9F8`,marginBottom:6}}),(0,x.jsxs)(`div`,{style:{fontWeight:700},children:[`swapRadius.`,e]}),(0,x.jsx)(`div`,{style:{color:`#6F6F6F`},children:t})]},e))})}function _(){return(0,x.jsx)(`div`,{style:{display:`flex`,gap:24,flexWrap:`wrap`,padding:`8px 0 16px`},children:Object.entries(s).map(([e,t])=>(0,x.jsxs)(`div`,{style:{textAlign:`center`,fontSize:12},children:[(0,x.jsx)(`div`,{style:{width:120,height:72,borderRadius:8,background:`#FFFFFF`,boxShadow:t,marginBottom:10}}),(0,x.jsxs)(`div`,{style:{fontWeight:700},children:[`swapShadows.`,e]}),(0,x.jsx)(`div`,{style:{color:`#6F6F6F`,maxWidth:140},children:t})]},e))})}function v(){let e={border:`1px solid #ECECEC`,padding:`6px 16px`,textAlign:`left`};return(0,x.jsxs)(`table`,{style:{borderCollapse:`collapse`,fontSize:14},children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{style:e,children:`token`}),(0,x.jsx)(`th`,{style:e,children:`min-width`})]})}),(0,x.jsx)(`tbody`,{children:Object.entries(o).map(([t,n])=>(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{style:{...e,fontWeight:700},children:t}),(0,x.jsxs)(`td`,{style:e,children:[n,`px`]})]},t))})]})}function y(){return(0,x.jsxs)(`div`,{style:{display:`grid`,gap:12},children:[(0,x.jsx)(`div`,{style:{fontFamily:a,fontSize:20},children:`SWAP 自由工作者的行政後盾 — Aa Bb Cc 0123456789`}),(0,x.jsx)(`code`,{style:{fontSize:12,color:`#6F6F6F`},children:a})]})}var b,x,S=t((()=>{b=e(n(),1),l(),x=r(),h.__docgenInfo={description:``,methods:[],displayName:`ColorTokens`},g.__docgenInfo={description:``,methods:[],displayName:`RadiusTokens`},_.__docgenInfo={description:``,methods:[],displayName:`ShadowTokens`},v.__docgenInfo={description:``,methods:[],displayName:`BreakpointTokens`},y.__docgenInfo={description:``,methods:[],displayName:`FontTokens`}}));function C(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...u(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f,{title:`Design Tokens`}),`
`,(0,T.jsx)(t.h1,{id:`design-tokens`,children:`Design Tokens`}),`
`,(0,T.jsxs)(t.p,{children:[`SWAP 品牌的設計常數（色彩、圓角、陰影、斷點、字體），由 `,(0,T.jsx)(t.code,{children:`@yosgo/swap-ui`}),` 具名匯出。
取代 v1 的 `,(0,T.jsx)(t.code,{children:`Styles`}),` 預覽小工具——v1 是 import 一個元件來「看」token，v2 直接 import「值」來用，本頁負責預覽。`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`import { swapColors, swapRadius, swapShadows, swapBreakpoints } from "@yosgo/swap-ui";

// 搭配 sx 使用
<Box
  sx={{
    color: swapColors.primary.primary700,
    borderRadius: swapRadius.m,
    boxShadow: swapShadows.m,
  }}
/>
`})}),`
`,(0,T.jsxs)(t.p,{children:[`同一組值也掛在 theme 上（`,(0,T.jsx)(t.code,{children:`theme.palette.swap`}),`），寫 styleOverrides 或 sx callback 時可直接取用：`]}),`
`,(0,T.jsx)(t.pre,{children:(0,T.jsx)(t.code,{className:`language-tsx`,children:`sx={(theme) => ({ color: theme.palette.swap.primary.primary700 })}
`})}),`
`,(0,T.jsx)(t.h2,{id:`色彩`,children:`色彩`}),`
`,(0,T.jsx)(t.p,{children:(0,T.jsx)(t.strong,{children:`點擊色票可複製色碼。`})}),`
`,(0,T.jsx)(h,{}),`
`,(0,T.jsx)(t.h2,{id:`圓角swapradius`,children:`圓角（swapRadius）`}),`
`,(0,T.jsx)(g,{}),`
`,(0,T.jsx)(t.h2,{id:`陰影swapshadows`,children:`陰影（swapShadows）`}),`
`,(0,T.jsx)(_,{}),`
`,(0,T.jsx)(t.h2,{id:`斷點swapbreakpoints`,children:`斷點（swapBreakpoints）`}),`
`,(0,T.jsxs)(t.p,{children:[`沿用 v1 的自訂斷點值（非 MUI 預設），已寫入 theme，`,(0,T.jsx)(t.code,{children:`useBreakpoints`}),` hook 與 `,(0,T.jsx)(t.code,{children:`theme.breakpoints`}),` 皆以此為準：`]}),`
`,(0,T.jsx)(v,{}),`
`,(0,T.jsx)(t.h2,{id:`字體swapfontfamily`,children:`字體（swapFontFamily）`}),`
`,(0,T.jsxs)(t.p,{children:[(0,T.jsx)(t.code,{children:`SWAPThemeProvider`}),` 內建自托管字體（@fontsource），不需另外引入：`]}),`
`,(0,T.jsx)(y,{})]})}function w(e={}){let{wrapper:t}={...u(),...e.components};return t?(0,T.jsx)(t,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;t((()=>{T=r(),p(),d(),S()}))();export{w as default};