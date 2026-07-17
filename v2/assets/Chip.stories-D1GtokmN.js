import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./Box-D65gl5nR.js";import{n as l,t as u}from"./cssSize-CQJ4xdPA.js";import{n as d,t as f}from"./Stack-u7uhj71j.js";var p,m,h,g,_,v=t((()=>{p=e(r(),1),c(),o(),l(),m=i(),h={neutral:{fill:a.black.black300,border:a.black.black500,text:a.black.black800},primary:{fill:a.primary.primary50,border:a.primary.primary800,text:a.primary.primary800},success:{fill:a.success.success50,border:a.success.success800,text:a.success.success800},danger:{fill:a.danger.danger50,border:a.danger.danger800,text:a.danger.danger800}},g=(0,m.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,m.jsx)(`path`,{d:`M14 4.66666L6 12.6667L2.33333 9L3.27333 8.06L6 10.78L13.06 3.72666L14 4.66666Z`,fill:`#00821E`})}),_=p.forwardRef(function({variant:e=`primary`,outlined:t,contained:n,width:r,height:i,label:o,icon:c,sx:l,...d},f){let p=h[e],_=t||!n;return(0,m.jsxs)(s,{ref:f,sx:[{display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`4px`,fontSize:`0.75rem`,lineHeight:`17px`,fontWeight:700,width:u(r)??`fit-content`,height:u(i)??24,padding:_?`0px 8px`:`0px 9px`,backgroundColor:_?a.black.white:p.fill,border:_?`1px solid ${p.border}`:`none`,color:p.text},...Array.isArray(l)?l:[l]],...d,children:[(0,m.jsx)(s,{component:`span`,sx:{marginRight:e===`success`?`4px`:0},children:o}),e===`success`&&!c?g:c]})}),_.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"neutral" | "primary" | "success" | "danger"`,elements:[{name:`literal`,value:`"neutral"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"danger"`}]},description:``,defaultValue:{value:`"primary"`,computed:!1}},outlined:{required:!1,tsType:{name:`boolean`},description:``},contained:{required:!1,tsType:{name:`boolean`},description:``},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`Omit`]}})),y=n({Contained:()=>w,Outlined:()=>C,Playground:()=>T,__namedExportsOrder:()=>E,default:()=>x}),b,x,S,C,w,T,E,D=t((()=>{f(),v(),b=i(),x={title:`Display/Chip`,component:_},S=[`neutral`,`primary`,`success`,`danger`],C={render:()=>(0,b.jsx)(d,{direction:`row`,spacing:1,children:S.map(e=>(0,b.jsx)(_,{variant:e,label:e},e))})},w={render:()=>(0,b.jsx)(d,{direction:`row`,spacing:1,children:S.map(e=>(0,b.jsx)(_,{variant:e,contained:!0,label:e},e))})},T={parameters:{controls:{include:[`variant`,`label`,`contained`,`outlined`,`width`,`height`]}},args:{variant:`primary`,label:`標籤`,contained:!1},argTypes:{variant:{control:`select`,options:S},label:{control:`text`},width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}},height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},icon:{control:!1}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={1}>
      {VARIANTS.map(v => <Chip key={v} variant={v} label={v} />)}
    </Stack>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={1}>
      {VARIANTS.map(v => <Chip key={v} variant={v} contained label={v} />)}
    </Stack>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["variant", "label", "contained", "outlined", "width", "height"]
    }
  },
  args: {
    variant: "primary",
    label: "標籤",
    contained: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS
    },
    label: {
      control: "text"
    },
    width: {
      control: "text",
      description: "數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）",
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
    icon: {
      control: false
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Outlined`,`Contained`,`Playground`]}));D();export{w as Contained,C as Outlined,T as Playground,E as __namedExportsOrder,x as default,D as n,y as t};