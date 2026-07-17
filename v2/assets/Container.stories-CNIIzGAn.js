import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a,t as o}from"./useMediaQuery-CbWrN8Tg.js";import{n as s,t as c}from"./tokens-pmEXbg7u.js";import{n as l,t as u}from"./Box-D65gl5nR.js";var d,f,p,m,h,g=t((()=>{d=e(r(),1),u(),o(),c(),f=i(),p={lg:960,xl:1140,xxl:1320},m={xxs:`0px 8px`,xs:`0px 16px`,sm:`0px 24px`,md:`0px 24px`},h=d.forwardRef(function({children:e,maxWidth:t,padding:n,sx:r,...i},o){let c=a(`(min-width:${s.xxl}px)`),u=a(`(min-width:${s.xl}px)`),d=a(`(min-width:${s.lg}px)`),h=a(`(min-width:${s.md}px)`),g=a(`(min-width:${s.sm}px)`),_=a(`(min-width:${s.xs}px)`);return(0,f.jsx)(l,{ref:o,sx:[{marginLeft:`auto`,marginRight:`auto`,width:`100%`,maxWidth:typeof t==`number`?t:t?p[t]:c?1320:u?1140:d?960:void 0,padding:typeof n==`number`?n:n?m[n]:c||u||d?`0px 0px`:h||g?`0px 24px`:_?`0px 16px`:`0px 8px`},...Array.isArray(r)?r:[r]],...i,children:e})}),h.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{maxWidth:{required:!1,tsType:{name:`union`,raw:`number | "lg" | "xl" | "xxl"`,elements:[{name:`number`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xxl"`}]},description:``},padding:{required:!1,tsType:{name:`union`,raw:`number | "xxs" | "xs" | "sm" | "md"`,elements:[{name:`number`},{name:`literal`,value:`"xxs"`},{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`}]},description:``}},composes:[`Omit`]}})),_=n({MaxWidths:()=>b,Playground:()=>x,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S,C=t((()=>{g(),v=i(),y={title:`Layout/Container`,component:h},b={render:()=>(0,v.jsx)(v.Fragment,{children:[`lg`,`xl`,`xxl`].map(e=>(0,v.jsx)(h,{maxWidth:e,children:(0,v.jsxs)(`div`,{style:{background:`#E6E9F8`,padding:8,marginBottom:8,textAlign:`center`},children:[`maxWidth=`,e]})},e))})},x={parameters:{controls:{include:[`maxWidth`,`padding`]}},args:{maxWidth:`lg`,padding:`sm`},argTypes:{maxWidth:{control:`select`,options:[`lg`,`xl`,`xxl`]},padding:{control:`select`,options:[`xxs`,`xs`,`sm`,`md`]}},render:e=>(0,v.jsx)(h,{...e,children:(0,v.jsx)(`div`,{style:{background:`#E6E9F8`,padding:8,textAlign:`center`},children:`內容區`})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <>
      {(["lg", "xl", "xxl"] as const).map(m => <Container key={m} maxWidth={m}>
          <div style={{
        background: "#E6E9F8",
        padding: 8,
        marginBottom: 8,
        textAlign: "center"
      }}>
            maxWidth={m}
          </div>
        </Container>)}
    </>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["maxWidth", "padding"]
    }
  },
  args: {
    maxWidth: "lg",
    padding: "sm"
  },
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["lg", "xl", "xxl"]
    },
    padding: {
      control: "select",
      options: ["xxs", "xs", "sm", "md"]
    }
  },
  render: args => <Container {...args}>
      <div style={{
      background: "#E6E9F8",
      padding: 8,
      textAlign: "center"
    }}>內容區</div>
    </Container>
}`,...x.parameters?.docs?.source}}},S=[`MaxWidths`,`Playground`]}));C();export{b as MaxWidths,x as Playground,S as __namedExportsOrder,y as default,C as n,_ as t};