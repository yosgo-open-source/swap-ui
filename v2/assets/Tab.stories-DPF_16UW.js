import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./Box-D65gl5nR.js";import{n as l,t as u}from"./Typography-D620WT8R.js";import{n as d,t as f}from"./cssSize-CQJ4xdPA.js";import{a as p,i as m,n as h,t as g}from"./Tabs-BTcdeplS.js";var _,v,y,b=t((()=>{_=e(r(),1),m(),c(),o(),d(),v=i(),y=_.forwardRef(function({label:e,selected:t,width:n,height:r,margin:i,fontSize:o,noIndicator:c,animation:l,sx:u,...d},m){return(0,v.jsx)(p,{ref:m,disableRipple:!0,sx:[{minWidth:0,minHeight:0,padding:0,margin:i??`0px 12px`,fontWeight:700,fontSize:o??14,lineHeight:1.4,opacity:1,color:a.black.black700,"&:hover":{color:`#000000`},"&.Mui-selected":{color:`#000000`}},...Array.isArray(u)?u:[u]],label:(0,v.jsxs)(s,{sx:{width:f(n)??56,height:f(r)??56,display:`flex`,justifyContent:`center`,alignItems:`center`,position:`relative`},children:[e,t&&!c?(0,v.jsx)(s,{sx:{height:`4px`,width:`100%`,backgroundColor:a.primary.primary400,position:`absolute`,bottom:0,borderRadius:`100px 100px 0px 0px`,...l?{animation:`swap-tab-selected 300ms`,"@keyframes swap-tab-selected":{from:{width:0},to:{width:`100%`}}}:{}}}):null]}),...d})}),y.__docgenInfo={description:``,methods:[],displayName:`Tab`,props:{selected:{required:!1,tsType:{name:`boolean`},description:``},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},margin:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},fontSize:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},noIndicator:{required:!1,tsType:{name:`boolean`},description:``},animation:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`MuiTabProps`]}})),x,S,C,w=t((()=>{x=e(r(),1),g(),S=i(),C=x.forwardRef(function({children:e,sx:t,...n},r){return(0,S.jsx)(h,{ref:r,sx:[{"& .MuiTabs-indicator":{backgroundColor:`transparent`}},...Array.isArray(t)?t:[t]],...n,children:e})}),C.__docgenInfo={description:``,methods:[],displayName:`Tabs`,composes:[`MuiTabsProps`]}})),T,E,D=t((()=>{r(),c(),T=i(),E=({children:e,value:t,index:n,...r})=>(0,T.jsx)(`div`,{role:`tabpanel`,hidden:t!==n,id:`scrollable-auto-tabpanel-${n}`,"aria-labelledby":`scrollable-auto-tab-${n}`,...r,children:t===n&&(0,T.jsx)(s,{children:e})}),E.__docgenInfo={description:``,methods:[],displayName:`TabPanel`,props:{children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},index:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},value:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``}}}})),O=n({Basic:()=>N,Playground:()=>F,WithAnimation:()=>P,__namedExportsOrder:()=>I,default:()=>j}),k,A,j,M,N,P,F,I,L=t((()=>{k=e(r(),1),b(),w(),D(),l(),A=i(),j={title:`Navigation/Tab`,component:y},M=e=>{let[t,n]=k.useState(0);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(C,{value:t,onChange:(e,t)=>n(t),children:[(0,A.jsx)(y,{label:`帳戶總覽`,selected:t===0,...e}),(0,A.jsx)(y,{label:`請款單`,selected:t===1,...e}),(0,A.jsx)(y,{label:`設定`,selected:t===2,...e})]}),(0,A.jsx)(E,{value:t,index:0,children:(0,A.jsx)(u,{variant:`body2`,children:`帳戶總覽內容`})}),(0,A.jsx)(E,{value:t,index:1,children:(0,A.jsx)(u,{variant:`body2`,children:`請款單內容`})}),(0,A.jsx)(E,{value:t,index:2,children:(0,A.jsx)(u,{variant:`body2`,children:`設定內容`})})]})},N={render:()=>(0,A.jsx)(M,{})},P={render:()=>(0,A.jsx)(M,{animation:!0})},F={parameters:{controls:{include:[`label`,`selected`,`noIndicator`,`animation`,`width`,`height`,`fontSize`,`margin`]}},args:{label:`分頁`,selected:!0,noIndicator:!1,animation:!0},argTypes:{label:{control:`text`},width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},fontSize:{control:`number`},margin:{control:`text`}},render:e=>(0,A.jsx)(C,{value:0,children:(0,A.jsx)(y,{...e})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Demo animation />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["label", "selected", "noIndicator", "animation", "width", "height", "fontSize", "margin"]
    }
  },
  args: {
    label: "分頁",
    selected: true,
    noIndicator: false,
    animation: true
  },
  argTypes: {
    label: {
      control: "text"
    },
    width: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    },
    height: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    },
    fontSize: {
      control: "number"
    },
    margin: {
      control: "text"
    }
  },
  // Tab 需在 Tabs 容器內渲染（MUI 9 context 約束）
  render: args => <Tabs value={0}>
      <Tab {...args} />
    </Tabs>
}`,...F.parameters?.docs?.source}}},I=[`Basic`,`WithAnimation`,`Playground`]}));L();export{N as Basic,F as Playground,P as WithAnimation,I as __namedExportsOrder,j as default,L as n,O as t};