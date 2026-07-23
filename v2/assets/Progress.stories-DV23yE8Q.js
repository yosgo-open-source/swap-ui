import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,t as c}from"./Box-D65gl5nR.js";import{n as l,t as u}from"./Typography-DFw7yHJZ.js";import{n as d,t as f}from"./cssSize-CQJ4xdPA.js";var p,m,h,g=t((()=>{p=e(r(),1),c(),o(),d(),l(),m=i(),h=p.forwardRef(function({width:e,size:t,label:n,step:r,count:i,sx:o,...c},l){let d=f(t)??24;return(0,m.jsx)(s,{ref:l,sx:[{width:f(e)??`100%`,display:`flex`,alignItems:`flex-start`},...Array.isArray(o)?o:[o]],...c,children:Array.from(Array(i).keys()).map(e=>{let t=e===r-1,o=e+1<r;return(0,m.jsxs)(s,{sx:{width:`100%`,display:`flex`,flexDirection:`column`,textAlign:`center`},children:[(0,m.jsxs)(s,{sx:{width:`100%`,display:`flex`,alignItems:`center`},children:[(0,m.jsx)(s,{sx:{height:`2px`,width:`calc((100% - 24px)/2)`,backgroundColor:e===0?`transparent`:e+1<=r?a.primary.primary800:a.black.black500}}),(0,m.jsx)(s,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:12,lineHeight:1.4,fontWeight:700,width:d,height:d,borderRadius:`50%`,boxSizing:`border-box`,backgroundColor:t?`white`:o?a.primary.primary800:a.black.black600,color:t?a.primary.primary800:`white`,border:t?`2px solid ${a.primary.primary800}`:`none`,boxShadow:t?`0px 0px 0px 4px #D7DFF8`:`unset`},children:e+1}),(0,m.jsx)(s,{sx:{height:`2px`,width:`calc((100% - 24px)/2)`,backgroundColor:e+1===i?`transparent`:e+1<r?a.primary.primary800:a.black.black500}})]}),(0,m.jsx)(u,{variant:`caption1`,color:e+1===r?`black1000`:`black700`,style:{marginTop:8},children:n?n[e]:null})]},e)})})}),h.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{step:{required:!0,tsType:{name:`number`},description:`目前進行到第幾步（1 起算）`},count:{required:!0,tsType:{name:`number`},description:`總步數`},label:{required:!1,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:`各步驟下方標籤`},size:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`步驟圓直徑，預設 24`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``}},composes:[`Omit`]}})),_=n({Basic:()=>b,Playground:()=>x,__namedExportsOrder:()=>S,default:()=>y}),v,y,b,x,S,C=t((()=>{g(),v=i(),y={title:`Feedback/Progress`,component:h},b={render:()=>(0,v.jsx)(`div`,{style:{maxWidth:480},children:(0,v.jsx)(h,{step:2,count:4,label:[`填寫資料`,`確認內容`,`送出`,`完成`]})})},x={parameters:{controls:{include:[`step`,`count`,`size`]}},args:{step:2,count:4,label:[`填寫資料`,`確認內容`,`送出`,`完成`]},argTypes:{step:{control:`number`},count:{control:`number`},size:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}}},render:e=>(0,v.jsx)(`div`,{style:{maxWidth:480},children:(0,v.jsx)(h,{...e})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480
  }}>
      <Progress step={2} count={4} label={["填寫資料", "確認內容", "送出", "完成"]} />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["step", "count", "size"]
    }
  },
  args: {
    step: 2,
    count: 4,
    label: ["填寫資料", "確認內容", "送出", "完成"]
  },
  argTypes: {
    step: {
      control: "number"
    },
    count: {
      control: "number"
    },
    size: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    }
  },
  render: args => <div style={{
    maxWidth: 480
  }}>
      <Progress {...args} />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`Playground`]}));C();export{b as Basic,x as Playground,S as __namedExportsOrder,y as default,C as n,_ as t};