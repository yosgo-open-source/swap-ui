import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./cssSize-CQJ4xdPA.js";import{n as l,t as u}from"./Stack-u7uhj71j.js";import{a as d,i as f,n as p,t as m}from"./Tabs-BTcdeplS.js";var h,g,_,v=t((()=>{h=e(r(),1),f(),s(),g=i(),_=h.forwardRef(function({width:e,height:t,fontSize:n,flex:r,sx:i,...a},o){return(0,g.jsx)(d,{ref:o,disableRipple:!0,sx:[{textTransform:`unset`,padding:`12px 16px`,minWidth:0,minHeight:c(t)??40,width:c(e)??`fit-content`,fontWeight:700,fontSize:n??14,lineHeight:1.4,color:`#6F6F6F`,opacity:1,whiteSpace:`nowrap`,flex:r,"&:hover":{color:`#000000`},"& .MuiTab-wrapper, &":{position:`relative`,zIndex:5}},...Array.isArray(i)?i:[i]],...a})}),_.__docgenInfo={description:``,methods:[],displayName:`SegmentedTab`,props:{width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},fontSize:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},flex:{required:!1,tsType:{name:`number`},description:``}},composes:[`MuiTabProps`]}})),y,b,x,S=t((()=>{y=e(r(),1),m(),o(),s(),b=i(),x=y.forwardRef(function({children:e,width:t,slide:n,sx:r,...i},o){let s=y.useRef(null);return y.useEffect(()=>{if(s.current&&i.variant===`scrollable`){let e=s.current.querySelector(`.MuiTab-root.Mui-selected`),t=s.current.querySelector(`.MuiTabs-scroller`);e&&t&&setTimeout(()=>{let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();t.scrollTo({left:t.scrollLeft+(n.left-r.left)-(r.width-n.width)/2,behavior:`smooth`})},1e3)}},[]),(0,b.jsx)(p,{ref:e=>{s.current=e,typeof o==`function`?o(e):o&&(o.current=e)},sx:[{width:c(t),boxSizing:`border-box`,border:`1px solid ${a.black.black500}`,borderRadius:`9px`,padding:`4px 0`,"& button":{borderRadius:`8px`,margin:`0 4px`,"&.Mui-selected":{backgroundColor:n?`unset`:a.primary.primary50,color:a.primary.primary500}},"& .MuiTabs-indicator":{borderRadius:`8px`,height:n?`100%`:0,backgroundColor:a.primary.primary50},"& .MuiTabs-scrollButtons":{width:32,overflow:`hidden`,"&.Mui-disabled":{width:`4px`}}},...Array.isArray(r)?r:[r]],...i,children:e})}),x.__docgenInfo={description:``,methods:[],displayName:`SegmentedTabs`,props:{width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},slide:{required:!1,tsType:{name:`boolean`},description:`選中底色以 indicator 滑動呈現（切換時有滑動動畫）`}},composes:[`MuiTabsProps`]}})),C=n({Basic:()=>O,Compare:()=>M,FitContent:()=>j,Playground:()=>A,Slide:()=>k,__namedExportsOrder:()=>N,default:()=>E}),w,T,E,D,O,k,A,j,M,N,P=t((()=>{w=e(r(),1),u(),v(),S(),T=i(),E={title:`Navigation/SegmentedTabs`,component:x},D=e=>{let[t,n]=w.useState(0);return(0,T.jsxs)(x,{value:t,onChange:(e,t)=>n(t),...e,children:[(0,T.jsx)(_,{label:`我的請款單`}),(0,T.jsx)(_,{label:`SWAP Point 明細`}),(0,T.jsx)(_,{label:`設定`})]})},O={render:()=>(0,T.jsx)(D,{})},k={render:()=>(0,T.jsx)(D,{slide:!0})},A={parameters:{controls:{include:[`slide`,`width`]}},args:{slide:!0,width:`fit-content`},argTypes:{width:{control:`text`,description:`數字（px）或 CSS 寬度字串；fit-content 貼合內容`}},render:e=>(0,T.jsx)(D,{...e})},j={render:()=>(0,T.jsxs)(l,{spacing:2,children:[(0,T.jsx)(D,{}),(0,T.jsx)(D,{width:`fit-content`})]})},M={render:()=>(0,T.jsxs)(l,{spacing:2,children:[(0,T.jsx)(D,{}),(0,T.jsx)(D,{slide:!0})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Demo />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Demo slide />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["slide", "width"]
    }
  },
  args: {
    slide: true,
    width: "fit-content"
  },
  argTypes: {
    width: {
      control: "text",
      description: "數字（px）或 CSS 寬度字串；fit-content 貼合內容"
    }
  },
  render: args => <Demo {...args} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Demo />
      <Demo width="fit-content" />
    </Stack>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2}>
      <Demo />
      <Demo slide />
    </Stack>
}`,...M.parameters?.docs?.source}}},N=[`Basic`,`Slide`,`Playground`,`FitContent`,`Compare`]}));P();export{O as Basic,M as Compare,j as FitContent,A as Playground,k as Slide,N as __namedExportsOrder,E as default,P as n,C as t};