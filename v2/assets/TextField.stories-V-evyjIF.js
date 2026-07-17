import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./Stack-u7uhj71j.js";import{n as a,t as o}from"./TextField-B-Wb9umI.js";var s=t({Playground:()=>d,States:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{i(),a(),c=n(),l={title:`Inputs/TextField`,component:o},u={render:()=>(0,c.jsxs)(r,{spacing:3,sx:{width:320,pt:1},children:[(0,c.jsx)(o,{label:`姓名`,placeholder:`請輸入姓名`}),(0,c.jsx)(o,{label:`信箱`,error:!0,helperText:`格式不正確`,defaultValue:`not-an-email`}),(0,c.jsx)(o,{label:`唯讀`,disabled:!0,defaultValue:`不可編輯`}),(0,c.jsx)(o,{label:`含說明`,helperText:`這是輔助說明文字`})]})},d={parameters:{controls:{include:[`label`,`placeholder`,`helperText`,`error`,`disabled`,`width`,`height`,`multiline`]}},args:{label:`標籤`,placeholder:`請輸入`,error:!1,disabled:!1,helperText:``,height:80},argTypes:{height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={3} sx={{
    width: 320,
    pt: 1
  }}>
      <TextField label="姓名" placeholder="請輸入姓名" />
      <TextField label="信箱" error helperText="格式不正確" defaultValue="not-an-email" />
      <TextField label="唯讀" disabled defaultValue="不可編輯" />
      <TextField label="含說明" helperText="這是輔助說明文字" />
    </Stack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["label", "placeholder", "helperText", "error", "disabled", "width", "height", "multiline"]
    }
  },
  args: {
    label: "標籤",
    placeholder: "請輸入",
    error: false,
    disabled: false,
    helperText: "",
    height: 80
  },
  argTypes: {
    height: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
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
}`,...d.parameters?.docs?.source}}},f=[`States`,`Playground`]}));p();export{d as Playground,u as States,f as __namedExportsOrder,l as default,p as n,s as t};