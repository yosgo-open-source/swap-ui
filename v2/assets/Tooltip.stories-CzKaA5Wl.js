import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./Button-BA96CW2o.js";import{n as a,t as o}from"./Stack-u7uhj71j.js";import{n as s,t as c}from"./Tooltip-uLuk627X.js";var l=t({Playground:()=>p,Variants:()=>f,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=e((()=>{o(),i(),s(),u=n(),d={title:`Display/Tooltip`,component:c},f={render:()=>(0,u.jsxs)(a,{direction:`row`,spacing:4,sx:{p:6},children:[(0,u.jsx)(c,{title:`深色（預設）`,open:!0,children:(0,u.jsx)(r,{variant:`secondary`,children:`dark`})}),(0,u.jsx)(c,{title:`淺色`,light:!0,open:!0,children:(0,u.jsx)(r,{variant:`secondary`,children:`light`})}),(0,u.jsx)(c,{title:`帶箭頭`,arrow:!0,open:!0,children:(0,u.jsx)(r,{variant:`secondary`,children:`arrow`})})]})},p={parameters:{controls:{include:[`title`,`light`,`arrow`,`width`,`open`]}},args:{title:`說明文字`,light:!1,arrow:!1,width:240,open:!0},argTypes:{title:{control:`text`},width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}}},render:e=>(0,u.jsx)(a,{sx:{p:6,alignItems:`flex-start`},children:(0,u.jsx)(c,{...e,children:(0,u.jsx)(r,{variant:`secondary`,children:`目標元素`})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} sx={{
    p: 6
  }}>
      <Tooltip title="深色（預設）" open>
        <Button variant="secondary">dark</Button>
      </Tooltip>
      <Tooltip title="淺色" light open>
        <Button variant="secondary">light</Button>
      </Tooltip>
      <Tooltip title="帶箭頭" arrow open>
        <Button variant="secondary">arrow</Button>
      </Tooltip>
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["title", "light", "arrow", "width", "open"]
    }
  },
  args: {
    title: "說明文字",
    light: false,
    arrow: false,
    width: 240,
    open: true
  },
  argTypes: {
    title: {
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
    }
  },
  render: args => <Stack sx={{
    p: 6,
    alignItems: "flex-start"
  }}>
      <Tooltip {...args}>
        <Button variant="secondary">目標元素</Button>
      </Tooltip>
    </Stack>
}`,...p.parameters?.docs?.source}}},m=[`Variants`,`Playground`]}));h();export{p as Playground,f as Variants,m as __namedExportsOrder,d as default,h as n,l as t};