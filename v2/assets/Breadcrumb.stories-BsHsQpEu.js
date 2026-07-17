import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{n as a,t as o}from"./MenuItem-11_D0Ih8.js";import{n as s,t as c}from"./Typography-D620WT8R.js";import{t as l}from"./Menu-BvLe0T_G.js";import{t as u}from"./Menu-QpsxFiAL.js";import{n as d,t as f}from"./Link-CZRfr1Jc.js";var p,m,h,g,_,v,y=t((()=>{p=e(r(),1),u(),o(),s(),m=i(),h=({children:e})=>(0,m.jsx)(c,{variant:`body2`,style:{margin:`0 8px`},children:e}),g=`M1.946 16.182C2.45 16.182 2.87 15.79 2.87 15.216C2.87 14.642 2.45 14.222 1.946 14.222C1.442 14.222 1.022 14.642 1.022 15.216C1.022 15.79 1.442 16.182 1.946 16.182ZM5.84248 16.182C6.34648 16.182 6.76648 15.79 6.76648 15.216C6.76648 14.642 6.34648 14.222 5.84248 14.222C5.33848 14.222 4.91848 14.642 4.91848 15.216C4.91848 15.79 5.33848 16.182 5.84248 16.182ZM9.73897 16.182C10.243 16.182 10.663 15.79 10.663 15.216C10.663 14.642 10.243 14.222 9.73897 14.222C9.23497 14.222 8.81497 14.642 8.81497 15.216C8.81497 15.79 9.23497 16.182 9.73897 16.182Z`,_=({hover:e})=>(0,m.jsxs)(`svg`,{width:`12`,height:`20`,viewBox:`0 0 12 20`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,m.jsx)(`path`,{d:g,fill:`#4B4B4B`}),e&&(0,m.jsx)(`path`,{d:`M0 18.1H11.685V18.8H0V18.1Z`,fill:`#4B4B4B`})]}),v=p.forwardRef(function({maxItems:e,separator:t=`/`,children:n,style:r,...i},o){let[s,c]=p.useState(null),[u,d]=p.useState(!1),f=p.Children.toArray(n),g=!!e&&f.length>e,v=g?f.slice(f.length-e+1):f,y=g?f.slice(1,f.length-e+1):[],b=(e,n,r)=>(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,fontSize:14,fontWeight:n?700:400},children:[e,!n&&(0,m.jsx)(h,{children:t})]},r);return(0,m.jsxs)(`div`,{ref:o,style:{display:`flex`,alignItems:`center`,...r},...i,children:[g?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,fontSize:14},children:[f[0],(0,m.jsx)(h,{children:t}),(0,m.jsx)(`div`,{"data-testid":`breadcrumb-ellipsis`,onClick:e=>c(e.currentTarget),onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),style:{cursor:`pointer`},children:(0,m.jsx)(_,{hover:u})}),(0,m.jsx)(h,{children:t})]}),v.map((e,t)=>b(e,t===v.length-1,t))]}):f.map((e,t)=>b(e,t===f.length-1,t)),(0,m.jsx)(l,{anchorEl:s,open:!!s,onClose:()=>c(null),children:y.map((e,t)=>{let n=e;return(0,m.jsx)(a,{onClick:()=>{let{href:e,target:t}=n.props;e&&(t===`_blank`?window.open(e):window.location.href=e),c(null)},children:n.props.children},t)})})]})}),v.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{children:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:``},separator:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``,defaultValue:{value:`"/"`,computed:!1}},maxItems:{required:!1,tsType:{name:`number`},description:``}}}})),b,x,S,C=t((()=>{b=e(r(),1),d(),x=i(),S=b.forwardRef(function({last:e,sx:t,...n},r){let i={fontWeight:e?700:400,...e?{cursor:`unset`,textDecoration:`none`,"&:hover":{textDecoration:`none`}}:{}};return(0,x.jsx)(f,{ref:r,color:e?`black1000`:`black800`,sx:[i,...Array.isArray(t)?t:[t]],...n})}),S.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbItem`,props:{color:{required:!1,tsType:{name:`string`},description:`SWAP token 名（如 primary400）；非 token 一律 black1000`},last:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`Omit`]}})),w=n({Basic:()=>D,Collapsed:()=>O,Playground:()=>k,__namedExportsOrder:()=>A,default:()=>E}),T,E,D,O,k,A,j=t((()=>{y(),C(),T=i(),E={title:`Navigation/Breadcrumb`,component:v},D={render:()=>(0,T.jsx)(v,{children:[(0,T.jsx)(S,{href:`#`,children:`首頁`},`1`),(0,T.jsx)(S,{href:`#`,children:`會員中心`},`2`),(0,T.jsx)(S,{last:!0,children:`請款單`},`3`)]})},O={render:()=>(0,T.jsx)(v,{maxItems:3,children:[(0,T.jsx)(S,{href:`#`,children:`首頁`},`1`),(0,T.jsx)(S,{href:`#`,children:`會員中心`},`2`),(0,T.jsx)(S,{href:`#`,children:`請款`},`3`),(0,T.jsx)(S,{href:`#`,children:`2026`},`4`),(0,T.jsx)(S,{last:!0,children:`七月帳單`},`5`)]})},k={parameters:{controls:{include:[`maxItems`,`separator`]}},args:{maxItems:3,separator:`/`},argTypes:{separator:{control:`text`},maxItems:{control:`number`}},render:e=>(0,T.jsx)(v,{...e,children:[(0,T.jsx)(S,{href:`#`,children:`首頁`},`1`),(0,T.jsx)(S,{href:`#`,children:`會員中心`},`2`),(0,T.jsx)(S,{href:`#`,children:`請款`},`3`),(0,T.jsx)(S,{href:`#`,children:`2026`},`4`),(0,T.jsx)(S,{last:!0,children:`七月帳單`},`5`)]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      {[<BreadcrumbItem key="1" href="#">
          首頁
        </BreadcrumbItem>, <BreadcrumbItem key="2" href="#">
          會員中心
        </BreadcrumbItem>, <BreadcrumbItem key="3" last>
          請款單
        </BreadcrumbItem>]}
    </Breadcrumb>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb maxItems={3}>
      {[<BreadcrumbItem key="1" href="#">
          首頁
        </BreadcrumbItem>, <BreadcrumbItem key="2" href="#">
          會員中心
        </BreadcrumbItem>, <BreadcrumbItem key="3" href="#">
          請款
        </BreadcrumbItem>, <BreadcrumbItem key="4" href="#">
          2026
        </BreadcrumbItem>, <BreadcrumbItem key="5" last>
          七月帳單
        </BreadcrumbItem>]}
    </Breadcrumb>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["maxItems", "separator"]
    }
  },
  args: {
    maxItems: 3,
    separator: "/"
  },
  argTypes: {
    separator: {
      control: "text"
    },
    maxItems: {
      control: "number"
    }
  },
  render: args => <Breadcrumb {...args}>
      {[<BreadcrumbItem key="1" href="#">首頁</BreadcrumbItem>, <BreadcrumbItem key="2" href="#">會員中心</BreadcrumbItem>, <BreadcrumbItem key="3" href="#">請款</BreadcrumbItem>, <BreadcrumbItem key="4" href="#">2026</BreadcrumbItem>, <BreadcrumbItem key="5" last>七月帳單</BreadcrumbItem>]}
    </Breadcrumb>
}`,...k.parameters?.docs?.source}}},A=[`Basic`,`Collapsed`,`Playground`]}));j();export{D as Basic,O as Collapsed,k as Playground,A as __namedExportsOrder,E as default,j as n,w as t};