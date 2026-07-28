import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a,t as o}from"./Button-BA96CW2o.js";import{n as s,t as c}from"./Typography-DFw7yHJZ.js";import{n as l,t as u}from"./Modal-BpuqTLKp.js";var d=n({Basic:()=>g,Checked:()=>v,Failed:()=>y,FullWidthMobile:()=>b,Playground:()=>x,WithHelpText:()=>_,__namedExportsOrder:()=>S,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{f=e(r(),1),o(),l(),s(),p=i(),m={title:`Feedback/Modal`,component:u},h=({buttonText:e,...t})=>{let[n,r]=f.useState(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{variant:`secondary`,onClick:()=>r(!0),children:e??`開啟 Modal`}),(0,p.jsx)(u,{open:n,onClose:()=>r(!1),title:`確認送出請款單？`,size:`small`,secondaryButton:{title:`取消`,onClick:()=>r(!1)},primaryButton:{title:`送出`,onClick:()=>r(!1)},...t,children:(0,p.jsx)(c,{variant:`body2_loose`,color:`black800`,children:`送出後將通知業主付款，內容如需修改請先取消送出。`})})]})},g={render:()=>(0,p.jsx)(h,{})},_={render:()=>(0,p.jsx)(h,{helpText:`送出前請再次確認金額與項目。`})},v={render:()=>(0,p.jsx)(h,{buttonText:`成功狀態`,checked:!0,checkIconColor:`success500`,title:`請款單已送出`})},y={render:()=>(0,p.jsx)(h,{buttonText:`失敗狀態`,failed:!0,iconColor:`danger700`,title:`送出失敗`})},b={render:()=>(0,p.jsx)(h,{buttonText:`行動版底部彈出`,fullWidth:!0,mobile:!0})},x={parameters:{controls:{include:[`title`,`helpText`,`size`,`width`,`disCloseIcon`,`fullWidth`,`fullScreen`,`mobile`,`onExit`]}},args:{title:`確認送出請款單？`,helpText:``,size:`small`,disCloseIcon:!1,fullWidth:!1,fullScreen:!1,mobile:!1,onExit:!1},argTypes:{title:{control:`text`},helpText:{control:`text`},size:{control:`select`,options:[`extraSmall`,`small`,`medium`,`large`]},width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度；不給則依 size`,table:{type:{summary:`number | string`}}},secondaryButton:{control:!1},primaryButton:{control:!1},icon:{control:!1},headChildren:{control:!1},footer:{control:!1}},render:e=>(0,p.jsx)(h,{...e})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Demo helpText="送出前請再次確認金額與項目。" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Demo buttonText="成功狀態" checked checkIconColor="success500" title="請款單已送出" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Demo buttonText="失敗狀態" failed iconColor="danger700" title="送出失敗" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Demo buttonText="行動版底部彈出" fullWidth mobile />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["title", "helpText", "size", "width", "disCloseIcon", "fullWidth", "fullScreen", "mobile", "onExit"]
    }
  },
  args: {
    title: "確認送出請款單？",
    helpText: "",
    size: "small",
    disCloseIcon: false,
    fullWidth: false,
    fullScreen: false,
    mobile: false,
    onExit: false
  },
  argTypes: {
    title: {
      control: "text"
    },
    helpText: {
      control: "text"
    },
    size: {
      control: "select",
      options: ["extraSmall", "small", "medium", "large"]
    },
    width: {
      control: "text",
      description: "數字＝px；字串可用任意 CSS 長度；不給則依 size",
      table: {
        type: {
          summary: "number | string"
        }
      }
    },
    secondaryButton: {
      control: false
    },
    primaryButton: {
      control: false
    },
    icon: {
      control: false
    },
    headChildren: {
      control: false
    },
    footer: {
      control: false
    }
  },
  render: args => <Demo {...args} />
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`WithHelpText`,`Checked`,`Failed`,`FullWidthMobile`,`Playground`]}));C();export{g as Basic,v as Checked,y as Failed,b as FullWidthMobile,x as Playground,_ as WithHelpText,S as __namedExportsOrder,m as default,C as n,d as t};