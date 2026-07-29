import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a,t as o}from"./CheckBox-CVaMTP4W.js";import{n as s,t as c}from"./RadioButton-CBnRmsvg.js";import{r as l,t as u}from"./tokens-pmEXbg7u.js";import{n as d,t as f}from"./Box-D65gl5nR.js";import{n as p,t as m}from"./Typography-DFw7yHJZ.js";import{n as h,t as g}from"./cssSize-CQJ4xdPA.js";import{n as _,t as v}from"./Stack-u7uhj71j.js";function y(e){let{checked:t,multiline:n,line:r,width:i,height:a}=e;return{width:g(i)??(n?240:r?342:327),height:g(a)??(n?69:r?76:54),padding:r?`16px`:n?`12px 16px`:`15px 16px`,border:t?`1px solid ${l.primary.primary400}`:`1px solid ${l.black.black500}`,boxSizing:`border-box`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,cursor:`pointer`,backgroundColor:t?l.primary.primary50:`white`,WebkitTapHighlightColor:`transparent`,"&:hover":{backgroundColor:t?l.primary.primary50:l.black.black100,border:t?`1px solid ${l.primary.primary400}`:`1px solid ${l.black.black600}`}}}var b=t((()=>{u(),h()}));function x({control:e,title:t,subtitle:n,multiline:r,line:i}){let a=S.useRef(null),[o,s]=S.useState(44);return S.useEffect(()=>{a.current&&s(Math.max(a.current.offsetHeight,44))},[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(d,{sx:{display:`flex`,alignItems:`center`},children:[e,i?(0,C.jsxs)(d,{sx:{display:`flex`,alignItems:`center`,marginLeft:`4px`},children:[(0,C.jsx)(m,{variant:`title`,component:`div`,style:{maxWidth:56,minWidth:56,textAlign:`center`,wordBreak:`break-word`},children:t}),(0,C.jsx)(d,{sx:{height:o,width:`1px`,margin:`0 12px`,backgroundColor:`#909090`}}),(0,C.jsx)(`div`,{ref:a,children:(0,C.jsx)(m,{variant:`body2_loose`,color:`black800`,component:`div`,style:{width:`100%`,wordBreak:`break-word`},children:n})})]}):(0,C.jsxs)(d,{sx:{display:`flex`,flexDirection:`column`},children:[(0,C.jsx)(m,{variant:`title`,component:`div`,children:t}),r?(0,C.jsx)(m,{variant:`body2_loose`,color:`black800`,component:`div`,children:n}):null]})]}),!r&&!i?(0,C.jsx)(m,{variant:`body2_loose`,color:`black800`,component:`div`,children:n}):null]})}var S,C,w,T=t((()=>{S=e(r(),1),f(),s(),p(),b(),C=i(),w=S.forwardRef(function({width:e,height:t,title:n,subtitle:r,multiline:i,checked:a,line:o,sx:s,...l},u){return(0,C.jsx)(d,{ref:u,sx:[y({checked:a,multiline:i,line:o,width:e,height:t}),...Array.isArray(s)?s:[s]],...l,children:(0,C.jsx)(x,{control:(0,C.jsx)(c,{disableHover:!0,checked:!!a,sx:{marginLeft:`4px`}}),title:n,subtitle:r,multiline:i,line:o})})}),x.__docgenInfo={description:``,methods:[],displayName:`SelectionListInner`,props:{control:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},multiline:{required:!1,tsType:{name:`boolean`},description:``},line:{required:!1,tsType:{name:`boolean`},description:``}}},w.__docgenInfo={description:``,methods:[],displayName:`RadioList`,props:{title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},checked:{required:!0,tsType:{name:`boolean`},description:``},multiline:{required:!1,tsType:{name:`boolean`},description:`title 下方顯示 subtitle（窄卡模式）`},line:{required:!1,tsType:{name:`boolean`},description:`title 與 subtitle 以直線分隔（寬卡模式）`},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``}},composes:[`Omit`]}})),E,D,O,k=t((()=>{E=e(r(),1),f(),a(),T(),b(),D=i(),O=E.forwardRef(function({width:e,height:t,title:n,subtitle:r,multiline:i,checked:a,line:s,sx:c,...l},u){return(0,D.jsx)(d,{ref:u,sx:[y({checked:a,multiline:i,line:s,width:e,height:t}),...Array.isArray(c)?c:[c]],...l,children:(0,D.jsx)(x,{control:(0,D.jsx)(o,{disableHover:!0,checked:!!a,sx:{marginLeft:`4px`}}),title:n,subtitle:r,multiline:i,line:s})})}),O.__docgenInfo={description:``,methods:[],displayName:`CheckBoxList`,props:{title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},checked:{required:!0,tsType:{name:`boolean`},description:``},multiline:{required:!1,tsType:{name:`boolean`},description:`title 下方顯示 subtitle（窄卡模式）`},line:{required:!1,tsType:{name:`boolean`},description:`title 與 subtitle 以直線分隔（寬卡模式）`},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``}},composes:[`Omit`]}})),A=n({Basic:()=>F,CheckBoxes:()=>R,Modes:()=>I,Playground:()=>z,__namedExportsOrder:()=>B,default:()=>N}),j,M,N,P,F,I,L,R,z,B,V=t((()=>{j=e(r(),1),v(),T(),k(),M=i(),N={title:`Inputs/RadioList`,component:w},P=()=>{let[e,t]=j.useState(`monthly`);return(0,M.jsxs)(_,{spacing:2,children:[(0,M.jsx)(w,{checked:e===`monthly`,onClick:()=>t(`monthly`),title:`月繳`,subtitle:`NT$ 300 / 月`}),(0,M.jsx)(w,{checked:e===`yearly`,onClick:()=>t(`yearly`),title:`年繳`,subtitle:`NT$ 3,000 / 年`})]})},F={render:()=>(0,M.jsx)(P,{})},I={render:()=>(0,M.jsxs)(_,{spacing:2,children:[(0,M.jsx)(w,{checked:!0,title:`預設`,subtitle:`右側說明`}),(0,M.jsx)(w,{checked:!0,multiline:!0,title:`multiline`,subtitle:`說明在標題下方`}),(0,M.jsx)(w,{checked:!0,line:!0,title:`line`,subtitle:`標題與說明之間以直線分隔，適合較長的說明文字內容。`})]})},L=()=>{let[e,t]=j.useState(!0),[n,r]=j.useState(!1);return(0,M.jsxs)(_,{spacing:2,children:[(0,M.jsx)(O,{checked:e,onClick:()=>t(!e),title:`Email 通知`,subtitle:`每日摘要`}),(0,M.jsx)(O,{checked:n,onClick:()=>r(!n),title:`簡訊通知`,subtitle:`重要事件`})]})},R={render:()=>(0,M.jsx)(L,{})},z={parameters:{controls:{include:[`checked`,`title`,`subtitle`,`multiline`,`line`,`width`]}},args:{checked:!0,title:`月繳`,subtitle:`NT$ 300 / 月`,multiline:!1,line:!1},argTypes:{title:{control:`text`},subtitle:{control:`text`},width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <RadioDemo />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <RadioList checked title="預設" subtitle="右側說明" />
      <RadioList checked multiline title="multiline" subtitle="說明在標題下方" />
      <RadioList checked line title="line" subtitle="標題與說明之間以直線分隔，適合較長的說明文字內容。" />
    </Stack>
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <CheckDemo />
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["checked", "title", "subtitle", "multiline", "line", "width"]
    }
  },
  args: {
    checked: true,
    title: "月繳",
    subtitle: "NT$ 300 / 月",
    multiline: false,
    line: false
  },
  argTypes: {
    title: {
      control: "text"
    },
    subtitle: {
      control: "text"
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
}`,...z.parameters?.docs?.source}}},B=[`Basic`,`Modes`,`CheckBoxes`,`Playground`]}));V();export{F as Basic,R as CheckBoxes,I as Modes,z as Playground,B as __namedExportsOrder,N as default,V as n,A as t};