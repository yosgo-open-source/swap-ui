import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a,t as o}from"./useMediaQuery-CbWrN8Tg.js";import{n as s,o as c,r as l,t as u}from"./tokens-pmEXbg7u.js";import{n as d,t as f}from"./Paper-0Qb0_-r2.js";import{n as p,t as m}from"./Typography-D620WT8R.js";import{n as h,t as g}from"./cssSize-CQJ4xdPA.js";var _,v,y,b=t((()=>{_=e(r(),1),f(),o(),u(),h(),v=i(),y=_.forwardRef(function({width:e,height:t,sx:n,...r},i){let o=a(`(min-width:${s.sm}px)`),u=a(`(min-width:${s.xs}px)`),f=o?40:u?24:16;return(0,v.jsx)(d,{ref:i,variant:`outlined`,sx:[{boxShadow:c.xl,borderRadius:`12px`,border:`1px solid ${l.black.black500}`,width:g(e)??`100%`,height:g(t)??`100%`,padding:`${f}px`},...Array.isArray(n)?n:[n]],...r})}),y.__docgenInfo={description:``,methods:[],displayName:`Paper`,props:{width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``}},composes:[`MuiPaperProps`]}})),x=n({Basic:()=>w,Playground:()=>T,__namedExportsOrder:()=>E,default:()=>C}),S,C,w,T,E,D=t((()=>{b(),p(),S=i(),C={title:`Display/Paper`,component:y},w={render:()=>(0,S.jsx)(`div`,{style:{width:360},children:(0,S.jsxs)(y,{children:[(0,S.jsx)(m,{variant:`title`,children:`卡片標題`}),(0,S.jsx)(m,{variant:`body2`,color:`tertiary`,children:`Paper 是帶外框與陰影的內容容器，內距會依裝置自動調整。`})]})})},T={parameters:{controls:{include:[`width`,`height`]}},args:{width:360,height:`auto`},argTypes:{width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},height:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}}},render:e=>(0,S.jsxs)(y,{...e,children:[(0,S.jsx)(m,{variant:`title`,children:`卡片標題`}),(0,S.jsx)(m,{variant:`body2`,color:`tertiary`,children:`調整右側 controls 看效果。`})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360
  }}>
      <Paper>
        <Typography variant="title">卡片標題</Typography>
        <Typography variant="body2" color="tertiary">
          Paper 是帶外框與陰影的內容容器，內距會依裝置自動調整。
        </Typography>
      </Paper>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["width", "height"]
    }
  },
  args: {
    width: 360,
    height: "auto"
  },
  argTypes: {
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
      control: "text",
      description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）",
      table: {
        type: {
          summary: "number | string"
        }
      }
    }
  },
  render: args => <Paper {...args}>
      <Typography variant="title">卡片標題</Typography>
      <Typography variant="body2" color="tertiary">
        調整右側 controls 看效果。
      </Typography>
    </Paper>
}`,...T.parameters?.docs?.source}}},E=[`Basic`,`Playground`]}));D();export{w as Basic,T as Playground,E as __namedExportsOrder,C as default,D as n,x as t};