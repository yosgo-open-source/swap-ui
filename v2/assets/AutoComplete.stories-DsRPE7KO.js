import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a,t as o}from"./AutoComplete-D1cUycWk.js";import{n as s,t as c}from"./Button-BA96CW2o.js";var l=n({Basic:()=>h,DisableFreeInput:()=>g,Playground:()=>_,__namedExportsOrder:()=>v,default:()=>f}),u,d,f,p,m,h,g,_,v,y=t((()=>{u=e(r(),1),c(),a(),d=i(),f={title:`Inputs/AutoComplete`,component:o},p=[`台灣銀行`,`國泰世華`,`玉山銀行`,`中國信託`,`台新銀行`,`富邦銀行`],m=e=>{let[t,n]=u.useState(null),[r,i]=u.useState(``);return(0,d.jsxs)(`div`,{style:{height:420,paddingTop:80},children:[(0,d.jsx)(s,{variant:`secondary`,onClick:e=>n(t?null:e.currentTarget),children:r||`選擇銀行`}),(0,d.jsx)(o,{open:!!t,anchorEl:t,title:`選擇銀行`,placeholder:`搜尋銀行`,options:p,getOptionLabel:e=>String(e),value:r||void 0,anchorOrigin:{vertical:8,horizontal:0},optionsMaxHeight:200,onChange:(e,t)=>{typeof t==`string`&&i(t),n(null)},handleNoOptionsValueChange:e=>{i(e),n(null)},...e})]})},h={render:()=>(0,d.jsx)(m,{})},g={render:()=>(0,d.jsx)(m,{disableFreeInput:!0})},_={parameters:{controls:{include:[`title`,`placeholder`,`disableFreeInput`,`width`,`optionsMaxHeight`,`addNewOptionsText`]}},args:{title:`選擇銀行`,placeholder:`搜尋銀行`,disableFreeInput:!1,width:320,optionsMaxHeight:200},argTypes:{title:{control:`text`},placeholder:{control:`text`},addNewOptionsText:{control:`text`,description:`自由輸入連結文案（預設「使用」）`},width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},optionsMaxHeight:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}}},render:e=>(0,d.jsx)(m,{...e})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Demo disableFreeInput />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["title", "placeholder", "disableFreeInput", "width", "optionsMaxHeight", "addNewOptionsText"]
    }
  },
  args: {
    title: "選擇銀行",
    placeholder: "搜尋銀行",
    disableFreeInput: false,
    width: 320,
    optionsMaxHeight: 200
  },
  argTypes: {
    title: {
      control: "text"
    },
    placeholder: {
      control: "text"
    },
    addNewOptionsText: {
      control: "text",
      description: "自由輸入連結文案（預設「使用」）"
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
    optionsMaxHeight: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    }
  },
  render: args => <Demo {...args} />
}`,..._.parameters?.docs?.source}}},v=[`Basic`,`DisableFreeInput`,`Playground`]}));y();export{h as Basic,g as DisableFreeInput,_ as Playground,v as __namedExportsOrder,f as default,y as n,l as t};