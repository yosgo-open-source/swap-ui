import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{a,c as o,d as s,i as c,n as l,s as u,t as d,u as f}from"./FormHelperText-B2lCgRtt.js";import{n as p,t as m}from"./MenuItem-11_D0Ih8.js";import{r as h,t as g}from"./tokens-pmEXbg7u.js";import{n as _,t as v}from"./cssSize-CQJ4xdPA.js";import{n as y,t as b}from"./Stack-u7uhj71j.js";var x,S,C=t((()=>{r(),u(),c(),d(),f(),g(),_(),x=i(),S=({children:e,formControlStyle:t,inputProps:n,MenuProps:r,helperText:i,width:c,height:u,helperTextStyle:d,sx:f,...p})=>{let m=(u??0)>=56,g={"& .MuiSelect-select":{height:u?m?u-38:u-24:16,display:`flex`,alignItems:`center`,padding:m?`19px 8px 19px 24px`:`12px 4px 12px 16px`,fontSize:m?16:14,lineHeight:m?`18px`:`15.75px`,fontWeight:700,color:h.black.black800,"&:hover":{color:h.black.black1000,backgroundColor:`white`,fontWeight:700},"&:focus-visible":{color:h.black.black1000,backgroundColor:`white`,fontWeight:700}},"& .MuiSelect-icon":{marginTop:`2px`,width:20,height:20,color:h.black.black800}};return(0,x.jsxs)(a,{variant:`outlined`,style:t,sx:{width:v(c)??`100%`},children:[(0,x.jsx)(o,{...p,inputProps:n,input:(0,x.jsx)(s,{sx:{"& .MuiOutlinedInput-notchedOutline":{borderColor:h.black.black500},"&:hover":{borderColor:h.black.black1000,"& svg":{color:h.black.black1000}},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:h.black.black1000,borderWidth:1},"&.Mui-focused svg":{color:h.black.black1000}}}),sx:[g,...Array.isArray(f)?f:[f]],MenuProps:{slotProps:{paper:{sx:{marginTop:`8px`}}},...r},children:e}),(0,x.jsx)(l,{style:d,children:i})]})},S.__docgenInfo={description:``,methods:[],displayName:`Dropdown`,props:{width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!1,tsType:{name:`number`},description:``},helperText:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},helperTextStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``},formControlStyle:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}},composes:[`Omit`]}})),w=n({Playground:()=>A,Sizes:()=>k,__namedExportsOrder:()=>j,default:()=>D}),T,E,D,O,k,A,j,M=t((()=>{T=e(r(),1),m(),b(),C(),E=i(),D={title:`Inputs/Dropdown`,component:S},O=e=>{let[t,n]=T.useState(`30d`);return(0,E.jsxs)(S,{value:t,onChange:e=>n(e.target.value),...e,children:[(0,E.jsx)(p,{value:`7d`,children:`近 7 天`}),(0,E.jsx)(p,{value:`30d`,children:`近 30 天`}),(0,E.jsx)(p,{value:`90d`,children:`近 90 天`})]})},k={render:()=>(0,E.jsxs)(y,{spacing:3,sx:{width:240},children:[(0,E.jsx)(O,{height:40}),(0,E.jsx)(O,{height:56})]})},A={parameters:{controls:{include:[`width`,`height`,`helperText`]}},args:{width:240,height:40,helperText:``},argTypes:{width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},helperText:{control:`text`}},render:e=>(0,E.jsx)(O,{...e})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 240
  }}>
      <Demo height={40} />
      <Demo height={56} />
    </Stack>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["width", "height", "helperText"]
    }
  },
  args: {
    width: 240,
    height: 40,
    helperText: ""
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
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    },
    helperText: {
      control: "text"
    }
  },
  render: args => <Demo {...args} />
}`,...A.parameters?.docs?.source}}},j=[`Sizes`,`Playground`]}));M();export{A as Playground,k as Sizes,j as __namedExportsOrder,D as default,M as n,w as t};