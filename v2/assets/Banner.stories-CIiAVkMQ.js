import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./Box-D65gl5nR.js";import{n as l,t as u}from"./Typography-D620WT8R.js";import{n as d,t as f}from"./cssSize-CQJ4xdPA.js";import{n as p,t as m}from"./Stack-u7uhj71j.js";function h(e){return(0,_.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,_.jsx)(`path`,{d:e===`success`?b:e===`warning`?x:y,fill:v[e].iconFill})})}var g,_,v,y,b,x,S,C=t((()=>{g=e(r(),1),c(),o(),d(),l(),_=i(),v={normal:{bg:a.black.black100,border:a.black.black500,iconFill:a.black.black700},info:{bg:a.primary.primary50,border:a.primary.primary200,iconFill:a.primary.primary400},success:{bg:a.success.success50,border:a.success.success400,iconFill:`#00932A`},warning:{bg:a.secondary.secondary50,border:a.secondary.secondary600,iconFill:`#E5640C`},error:{bg:a.danger.danger50,border:a.danger.danger300,iconFill:a.danger.danger700}},y=`M13 9H11V7H13V9ZM13 17H11V11H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z`,b=`M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z`,x=`M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z`,S=g.forwardRef(function({icon:e,variant:t=`info`,width:n,height:r,mobile:i,children:a,sx:o,...c},l){let d=g.useRef(null),[p,m]=g.useState(!1);g.useEffect(()=>{d.current&&d.current.offsetHeight>60&&m(!0)},[]);let y=v[t];return(0,_.jsxs)(s,{ref:e=>{d.current=e,typeof l==`function`?l(e):l&&(l.current=e)},sx:[{backgroundColor:y.bg,border:`1px solid ${y.border}`,borderRadius:`8px`,padding:`12px 16px`,width:f(n),height:f(r),display:`flex`,alignItems:i||p?`flex-start`:`center`},...Array.isArray(o)?o:[o]],...c,children:[(0,_.jsx)(s,{sx:{width:24,height:24,marginRight:`8px`,flexShrink:0},children:e??h(t)}),(0,_.jsx)(u,{variant:`caption2`,children:a})]})}),S.__docgenInfo={description:``,methods:[],displayName:`Banner`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"info" | "normal" | "success" | "warning" | "error"`,elements:[{name:`literal`,value:`"info"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},mobile:{required:!1,tsType:{name:`boolean`},description:``},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`BoxProps`]}})),w=n({Playground:()=>k,Variants:()=>O,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=t((()=>{m(),C(),T=i(),E={title:`Feedback/Banner`,component:S},D=[`normal`,`info`,`success`,`warning`,`error`],O={render:()=>(0,T.jsx)(p,{spacing:2,sx:{maxWidth:480},children:D.map(e=>(0,T.jsxs)(S,{variant:e,children:[`這是 `,e,` 提示訊息，用來告知使用者目前的狀態或需要注意的事項。`]},e))})},k={parameters:{controls:{include:[`variant`,`children`,`mobile`,`width`]}},args:{variant:`info`,children:`提示訊息內容`,mobile:!1},argTypes:{variant:{control:`select`,options:D},children:{control:`text`},icon:{control:!1},width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    maxWidth: 480
  }}>
      {VARIANTS.map(v => <Banner key={v} variant={v}>
          這是 {v} 提示訊息，用來告知使用者目前的狀態或需要注意的事項。
        </Banner>)}
    </Stack>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["variant", "children", "mobile", "width"]
    }
  },
  args: {
    variant: "info",
    children: "提示訊息內容",
    mobile: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS
    },
    children: {
      control: "text"
    },
    icon: {
      control: false
    },
    width: {
      control: "text",
      description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）",
      table: {
        type: {
          summary: "number | string"
        }
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Variants`,`Playground`]}));j();export{k as Playground,O as Variants,A as __namedExportsOrder,E as default,j as n,w as t};