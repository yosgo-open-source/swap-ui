import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./CircularProgress-Dainukb6.js";import{n as l,t as u}from"./cssSize-CQJ4xdPA.js";import{n as d,t as f}from"./Stack-u7uhj71j.js";var p,m,h,g=t((()=>{p=e(r(),1),c(),o(),l(),m=i(),h=p.forwardRef(function({dark:e,size:t=20,thickness:n=5,style:r,...i},o){return(0,m.jsxs)(`div`,{ref:o,style:{position:`relative`,width:u(t),height:u(t),...r},...i,children:[(0,m.jsx)(s,{variant:`determinate`,value:100,size:t,thickness:n,style:{position:`absolute`,left:0,top:0,color:e?a.black.white:a.black.black500,opacity:e?.4:1}}),(0,m.jsx)(s,{variant:`indeterminate`,size:t,thickness:n,style:{position:`absolute`,left:0,top:0,color:e?a.black.white:a.primary.primary800}})]})}),h.__docgenInfo={description:``,methods:[],displayName:`CircularProgress`,props:{dark:{required:!1,tsType:{name:`boolean`},description:``},size:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`20`,computed:!1}},thickness:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}}}}})),_=n({Dark:()=>x,Playground:()=>S,Sizes:()=>b,__namedExportsOrder:()=>C,default:()=>y}),v,y,b,x,S,C,w=t((()=>{f(),g(),v=i(),y={title:`Feedback/CircularProgress`,component:h},b={render:()=>(0,v.jsxs)(d,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:[(0,v.jsx)(h,{size:20}),(0,v.jsx)(h,{size:32}),(0,v.jsx)(h,{size:48,thickness:4})]})},x={render:()=>(0,v.jsx)(d,{direction:`row`,spacing:2,sx:{p:2,backgroundColor:`#2D2D2D`},children:(0,v.jsx)(h,{dark:!0,size:32})})},S={parameters:{controls:{include:[`dark`,`size`,`thickness`]}},args:{dark:!1,size:32,thickness:5},argTypes:{size:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} sx={{
    alignItems: "center"
  }}>
      <CircularProgress size={20} />
      <CircularProgress size={32} />
      <CircularProgress size={48} thickness={4} />
    </Stack>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} sx={{
    p: 2,
    backgroundColor: "#2D2D2D"
  }}>
      <CircularProgress dark size={32} />
    </Stack>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["dark", "size", "thickness"]
    }
  },
  args: {
    dark: false,
    size: 32,
    thickness: 5
  },
  argTypes: {
    size: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Sizes`,`Dark`,`Playground`]}));w();export{x as Dark,S as Playground,b as Sizes,C as __namedExportsOrder,y as default,w as n,_ as t};