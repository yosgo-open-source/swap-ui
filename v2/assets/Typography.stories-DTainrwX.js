import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./iframe-tTU918ub.js";import{n as a,t as o}from"./Typography-DFw7yHJZ.js";import{n as s,t as c}from"./Stack-u7uhj71j.js";var l=t({Colors:()=>p,DarkMode:()=>m,Playground:()=>h,Scale:()=>f,__namedExportsOrder:()=>g,default:()=>d}),u,d,f,p,m,h,g,_=e((()=>{c(),a(),r(),u=n(),d={title:`Display/Typography`,component:o},f={render:()=>(0,u.jsx)(s,{spacing:1,children:i.map(e=>(0,u.jsxs)(o,{variant:e,children:[e,` — SWAP 排版 The quick brown fox`]},e))})},p={render:()=>(0,u.jsxs)(s,{spacing:1,children:[(0,u.jsx)(o,{variant:`h4`,color:`primary`,children:`primary（黑）`}),(0,u.jsx)(o,{variant:`h4`,color:`secondary`,children:`secondary（深灰）`}),(0,u.jsx)(o,{variant:`h4`,color:`tertiary`,children:`tertiary（灰）`}),(0,u.jsx)(o,{variant:`h4`,color:`primary400`,children:`primary400（品牌藍）`}),(0,u.jsx)(o,{variant:`h4`,color:`danger800`,children:`danger800（紅）`})]})},m={render:()=>(0,u.jsxs)(s,{spacing:1,sx:{p:2,backgroundColor:`#2D2D2D`},children:[(0,u.jsx)(o,{variant:`h4`,color:`primary`,mode:`dark`,children:`primary（白）`}),(0,u.jsx)(o,{variant:`h4`,color:`secondary`,mode:`dark`,children:`secondary（淺灰）`})]})},h={parameters:{controls:{include:[`children`,`variant`,`color`,`mode`]}},args:{variant:`subtitle`,color:`tertiary`,children:`SWAP Typography`,mode:``,style:{}},argTypes:{children:{control:`text`},style:{control:!1},variant:{control:`select`,options:i},color:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`primary400`,`danger800`,`success500`]},mode:{control:`inline-radio`,options:[``,`dark`]}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      {SWAP_TYPOGRAPHY_VARIANTS.map(v => <Typography key={v} variant={v as never}>
          {v} — SWAP 排版 The quick brown fox
        </Typography>)}
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={1}>
      <Typography variant="h4" color="primary">
        primary（黑）
      </Typography>
      <Typography variant="h4" color="secondary">
        secondary（深灰）
      </Typography>
      <Typography variant="h4" color="tertiary">
        tertiary（灰）
      </Typography>
      <Typography variant="h4" color="primary400">
        primary400（品牌藍）
      </Typography>
      <Typography variant="h4" color="danger800">
        danger800（紅）
      </Typography>
    </Stack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={1} sx={{
    p: 2,
    backgroundColor: "#2D2D2D"
  }}>
      <Typography variant="h4" color="primary" mode="dark">
        primary（白）
      </Typography>
      <Typography variant="h4" color="secondary" mode="dark">
        secondary（淺灰）
      </Typography>
    </Stack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["children", "variant", "color", "mode"]
    }
  },
  args: {
    variant: "subtitle",
    color: "tertiary",
    children: "SWAP Typography",
    mode: "",
    style: {}
  },
  argTypes: {
    children: {
      control: "text"
    },
    style: {
      control: false
    },
    variant: {
      control: "select",
      options: SWAP_TYPOGRAPHY_VARIANTS
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "primary400", "danger800", "success500"]
    },
    mode: {
      control: "inline-radio",
      options: ["", "dark"]
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Scale`,`Colors`,`DarkMode`,`Playground`]}));_();export{p as Colors,m as DarkMode,h as Playground,f as Scale,g as __namedExportsOrder,d as default,_ as n,l as t};