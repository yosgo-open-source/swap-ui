import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a}from"./createSvgIcon-C87uXgZl.js";import{n as o,t as s}from"./Button-BA96CW2o.js";import{a as c,i as l,t as u}from"./Menu-BvLe0T_G.js";import{t as d}from"./Menu-QpsxFiAL.js";import{t as f}from"./createSvgIcon-gsq5Zk43.js";import{n as p,t as m}from"./MenuItem-DwkS6rZX.js";var h,g,_=t((()=>{f(),h=i(),g=a((0,h.jsx)(`path`,{d:`M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z`}),`Edit`)})),v=n({Playground:()=>w,WithMenu:()=>C,__namedExportsOrder:()=>T,default:()=>x}),y,b,x,S,C,w,T,E=t((()=>{y=e(r(),1),d(),l(),s(),_(),p(),b=i(),x={title:`Inputs/MenuItem`,component:m},S=()=>{let[e,t]=y.useState(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{variant:`secondary`,onClick:e=>t(e.currentTarget),children:`開啟選單`}),(0,b.jsxs)(u,{anchorEl:e,open:!!e,onClose:()=>t(null),children:[(0,b.jsx)(m,{onClick:()=>t(null),children:`檢視`}),(0,b.jsx)(m,{onClick:()=>t(null),iconChildren:(0,b.jsx)(g,{fontSize:`small`}),children:`編輯`}),(0,b.jsx)(m,{onClick:()=>t(null),hoverBackgroundColor:`#FFEBED`,hoverFontColor:`#D40F14`,hoverIconColor:`#D40F14`,children:`刪除`})]})]})},C={render:()=>(0,b.jsx)(S,{})},w={parameters:{controls:{include:[`children`,`hoverBackgroundColor`,`hoverFontColor`,`hoverIconColor`,`width`,`height`]}},args:{children:`選單項目`,hoverBackgroundColor:``,hoverFontColor:``,hoverIconColor:``},argTypes:{children:{control:`text`},hoverBackgroundColor:{control:`text`,description:`hover 底色（CSS 色，如 #FFEBED；留空用品牌預設）`},hoverFontColor:{control:`text`,description:`hover 文字色（CSS 色；留空用品牌預設）`},hoverIconColor:{control:`text`,description:`hover 圖示色（CSS 色；留空用品牌預設）`},width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},iconChildren:{control:!1}},render:e=>(0,b.jsx)(c,{sx:{width:200,border:`1px solid #ECECEC`,borderRadius:`8px`},children:(0,b.jsx)(m,{...e})})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["children", "hoverBackgroundColor", "hoverFontColor", "hoverIconColor", "width", "height"]
    }
  },
  args: {
    children: "選單項目",
    hoverBackgroundColor: "",
    hoverFontColor: "",
    hoverIconColor: ""
  },
  argTypes: {
    children: {
      control: "text"
    },
    hoverBackgroundColor: {
      control: "text",
      description: "hover 底色（CSS 色，如 #FFEBED；留空用品牌預設）"
    },
    hoverFontColor: {
      control: "text",
      description: "hover 文字色（CSS 色；留空用品牌預設）"
    },
    hoverIconColor: {
      control: "text",
      description: "hover 圖示色（CSS 色；留空用品牌預設）"
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
    iconChildren: {
      control: false
    }
  },
  render: args => <MenuList sx={{
    width: 200,
    border: "1px solid #ECECEC",
    borderRadius: "8px"
  }}>
      <MenuItem {...args} />
    </MenuList>
}`,...w.parameters?.docs?.source}}},T=[`WithMenu`,`Playground`]}));E();export{w as Playground,C as WithMenu,T as __namedExportsOrder,x as default,E as n,v as t};