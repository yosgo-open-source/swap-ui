import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./CheckBox-CVaMTP4W.js";import{n as a,t as o}from"./Stack-u7uhj71j.js";var s=t({Playground:()=>d,States:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{o(),r(),c=n(),l={title:`Inputs/CheckBox`,component:i},u={render:()=>(0,c.jsxs)(a,{direction:`row`,spacing:2,children:[(0,c.jsx)(i,{label:`未勾選`}),(0,c.jsx)(i,{label:`已勾選`,defaultChecked:!0}),(0,c.jsx)(i,{label:`停用`,disabled:!0}),(0,c.jsx)(i,{label:`停用已勾`,disabled:!0,defaultChecked:!0})]})},d={parameters:{controls:{include:[`label`,`labelPlacement`,`disabled`,`disableHover`]}},args:{label:`同意服務條款`,disabled:!1,disableHover:!1},argTypes:{label:{control:`text`},labelPlacement:{control:`select`,options:[`end`,`start`,`top`,`bottom`],description:`label 相對位置`},icon:{control:!1},checkedIcon:{control:!1}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <CheckBox label="未勾選" />
      <CheckBox label="已勾選" defaultChecked />
      <CheckBox label="停用" disabled />
      <CheckBox label="停用已勾" disabled defaultChecked />
    </Stack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["label", "labelPlacement", "disabled", "disableHover"]
    }
  },
  args: {
    label: "同意服務條款",
    disabled: false,
    disableHover: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    labelPlacement: {
      control: "select",
      options: ["end", "start", "top", "bottom"],
      description: "label 相對位置"
    },
    icon: {
      control: false
    },
    checkedIcon: {
      control: false
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`States`,`Playground`]}));p();export{d as Playground,u as States,f as __namedExportsOrder,l as default,p as n,s as t};