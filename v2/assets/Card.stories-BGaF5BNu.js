import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./Button-BA96CW2o.js";import{n as l,t as u}from"./Box-D65gl5nR.js";import{n as d,t as f}from"./Typography-DFw7yHJZ.js";import{n as p,t as m}from"./cssSize-CQJ4xdPA.js";import{n as h,t as g}from"./Stack-u7uhj71j.js";import{n as _,t as v}from"./Skeleton-DnarN6qK.js";var y,b,x,S=t((()=>{y=e(r(),1),u(),c(),v(),o(),p(),b=i(),x=y.forwardRef(function({width:e,height:t,children:n,buttons:r,bodyStyle:i,loading:o,sx:c,...u},d){return(0,b.jsxs)(l,{ref:d,sx:[{width:m(e)??350,height:m(t)??`100%`,backgroundColor:a.black.white,boxSizing:`border-box`,border:`1px solid ${a.black.black500}`,borderRadius:`8px`,display:`flex`,flexDirection:`column`,justifyContent:`space-between`,overflow:`hidden`},...Array.isArray(c)?c:[c]],...u,children:[(0,b.jsx)(l,{sx:{padding:`24px`,width:`100%`,height:`100%`},style:i,children:o?(0,b.jsxs)(l,{sx:{width:`100%`,height:`100%`},children:[(0,b.jsx)(_,{width:`40%`,height:`calc((100% - 16px) / 3)`}),(0,b.jsx)(l,{sx:{height:`8px`}}),(0,b.jsx)(_,{width:`100%`,height:`calc((100% - 16px) / 3)`}),(0,b.jsx)(l,{sx:{height:`8px`}}),(0,b.jsxs)(l,{sx:{display:`flex`,justifyContent:`space-between`,width:`100%`,height:`calc((100% - 16px) / 3)`},children:[(0,b.jsx)(_,{width:`26.4%`,height:`100%`}),(0,b.jsx)(_,{width:`26.4%`,height:`100%`})]})]}):n}),(0,b.jsx)(l,{sx:{width:`100%`,boxShadow:`0px -1px 0px ${a.black.black400}`,borderRadius:`0px 0px 8px 8px`,display:`flex`,padding:0},children:o?(0,b.jsx)(l,{sx:{padding:`16px 24px`,width:`100%`,height:48},children:(0,b.jsx)(_,{width:`100%`,height:`100%`})}):r?.map((e,t)=>(0,b.jsx)(s,{fullWidth:!0,variant:e.variant??`black`,style:{borderRight:t+1===r.length?void 0:`1px solid ${a.black.black400}`,borderRadius:`0px 0px 0px 0px`,...e.style},onClick:e.onClick,disabled:e.disabled,loading:e.loading,children:e.title},t))})]})}),x.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},bodyStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},buttons:{required:!1,tsType:{name:`Array`,elements:[{name:`CardButtonItem`}],raw:`CardButtonItem[]`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`BoxProps`]}})),C=n({Loading:()=>O,Playground:()=>k,WithButtons:()=>D,__namedExportsOrder:()=>A,default:()=>T}),w,T,E,D,O,k,A,j=t((()=>{g(),S(),d(),w=i(),T={title:`Display/Card`,component:x},E=()=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{variant:`title`,children:`七月請款單`}),(0,w.jsx)(f,{variant:`body2`,color:`secondary`,children:`共 3 筆，合計 NT$ 42,000。最後更新 07/16。`})]}),D={render:()=>(0,w.jsx)(x,{buttons:[{title:`查看明細`},{title:`刪除`,variant:`danger`}],children:(0,w.jsx)(E,{})})},O={render:()=>(0,w.jsx)(h,{sx:{height:200},children:(0,w.jsx)(x,{loading:!0,height:200,buttons:[{title:`查看明細`}],children:(0,w.jsx)(E,{})})})},k={parameters:{controls:{include:[`loading`,`width`,`height`]}},args:{loading:!1,width:350},argTypes:{width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}},buttons:{control:!1}},render:e=>(0,w.jsx)(x,{...e,buttons:[{title:`查看明細`}],children:(0,w.jsx)(E,{})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Card buttons={[{
    title: "查看明細"
  }, {
    title: "刪除",
    variant: "danger"
  }]}>
      <Body />
    </Card>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Stack sx={{
    height: 200
  }}>
      <Card loading height={200} buttons={[{
      title: "查看明細"
    }]}>
        <Body />
      </Card>
    </Stack>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["loading", "width", "height"]
    }
  },
  args: {
    loading: false,
    width: 350
  },
  argTypes: {
    width: {
      control: "text",
      description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）",
      table: {
        type: {
          summary: "number | string"
        }
      }
    },
    buttons: {
      control: false
    }
  },
  render: args => <Card {...args} buttons={[{
    title: "查看明細"
  }]}>
      <Body />
    </Card>
}`,...k.parameters?.docs?.source}}},A=[`WithButtons`,`Loading`,`Playground`]}));j();export{O as Loading,k as Playground,D as WithButtons,A as __namedExportsOrder,T as default,j as n,C as t};