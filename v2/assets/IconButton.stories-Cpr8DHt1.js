import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./Stack-u7uhj71j.js";import{n as a,t as o}from"./Close-BNr_-L2K.js";import{n as s,t as c}from"./IconButton-C2tLV6KC.js";var l=t({Hover:()=>f,Playground:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m,h=e((()=>{i(),a(),s(),u=n(),d={title:`Inputs/IconButton`,component:c},f={render:()=>(0,u.jsxs)(r,{direction:`row`,spacing:2,children:[(0,u.jsx)(c,{children:(0,u.jsx)(o,{})}),(0,u.jsx)(c,{hoverColor:`primary50`,hoverIconColor:`primary400`,children:(0,u.jsx)(o,{})}),(0,u.jsx)(c,{hoverColor:`danger50`,hoverIconColor:`danger800`,children:(0,u.jsx)(o,{})})]})},p={parameters:{controls:{include:[`hoverColor`,`hoverIconColor`,`width`,`height`,`disabled`]}},args:{hoverColor:`primary50`,hoverIconColor:`primary400`,width:32,height:32,disabled:!1},argTypes:{hoverColor:{control:`text`,description:`SWAP token 名（如 primary50）或任意 CSS 色`},hoverIconColor:{control:`text`,description:`SWAP token 名或任意 CSS 色`},width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}}},render:e=>(0,u.jsx)(c,{...e,children:(0,u.jsx)(o,{})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <IconButton>
        <CloseIcon />
      </IconButton>
      <IconButton hoverColor="primary50" hoverIconColor="primary400">
        <CloseIcon />
      </IconButton>
      <IconButton hoverColor="danger50" hoverIconColor="danger800">
        <CloseIcon />
      </IconButton>
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["hoverColor", "hoverIconColor", "width", "height", "disabled"]
    }
  },
  args: {
    hoverColor: "primary50",
    hoverIconColor: "primary400",
    width: 32,
    height: 32,
    disabled: false
  },
  argTypes: {
    hoverColor: {
      control: "text",
      description: "SWAP token 名（如 primary50）或任意 CSS 色"
    },
    hoverIconColor: {
      control: "text",
      description: "SWAP token 名或任意 CSS 色"
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
    }
  },
  render: args => <IconButton {...args}>
      <CloseIcon />
    </IconButton>
}`,...p.parameters?.docs?.source}}},m=[`Hover`,`Playground`]}));h();export{f as Hover,p as Playground,m as __namedExportsOrder,d as default,h as n,l as t};