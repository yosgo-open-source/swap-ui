import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{r as a,t as o}from"./tokens-pmEXbg7u.js";import{n as s,r as c}from"./iframe-iZWG7d6n.js";import{n as l,t as u}from"./Box-D65gl5nR.js";import{n as d,t as f}from"./Typography-DFw7yHJZ.js";import{n as p,t as m}from"./cssSize-CQJ4xdPA.js";import{n as h,t as g}from"./Stack-u7uhj71j.js";function ee(e){return(0,v.jsx)(`svg`,{width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,v.jsx)(`path`,{d:e===`success`?T:e===`warning`?E:w,fill:y[e].iconFill})})}var _,v,y,b,x,S,C,w,T,E,D,O=t((()=>{_=e(r(),1),u(),o(),s(),p(),d(),v=i(),y={normal:{bg:a.black.black100,border:a.black.black500,iconFill:a.black.black700},info:{bg:a.primary.primary50,border:a.primary.primary200,iconFill:a.primary.primary400},success:{bg:a.success.success50,border:a.success.success400,iconFill:`#00932A`},warning:{bg:a.secondary.secondary50,border:a.secondary.secondary600,iconFill:`#E5640C`},error:{bg:a.danger.danger50,border:a.danger.danger300,iconFill:a.danger.danger700}},{fontSize:b,lineHeight:x}=c.caption2,S=`calc(${b} * ${x})`,C=50,w=`M13 9H11V7H13V9ZM13 17H11V11H13V17ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z`,T=`M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z`,E=`M13 14H11V9H13V14ZM13 18H11V16H13V18ZM1 21H23L12 2L1 21Z`,D=_.forwardRef(function({icon:e,variant:t=`info`,width:n,height:r,mobile:i,children:a,sx:o,...s},c){let u=y[t];return(0,v.jsx)(l,{ref:c,sx:[{backgroundColor:u.bg,border:`1px solid ${u.border}`,borderRadius:`8px`,padding:`12px 16px`,width:m(n),height:m(r),minHeight:r===void 0?C:void 0,display:`flex`,alignItems:`center`},...Array.isArray(o)?o:[o]],...s,children:(0,v.jsxs)(l,{sx:{display:`flex`,alignItems:`flex-start`,minWidth:0},children:[(0,v.jsx)(l,{sx:{height:S,minWidth:24,marginRight:`8px`,flexShrink:0,display:`flex`,alignItems:`center`},children:e??ee(t)}),(0,v.jsx)(f,{variant:`caption2`,component:`div`,children:a})]})})}),D.__docgenInfo={description:``,methods:[],displayName:`Banner`,props:{variant:{required:!1,tsType:{name:`union`,raw:`"info" | "normal" | "success" | "warning" | "error"`,elements:[{name:`literal`,value:`"info"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"info"`,computed:!1}},mobile:{required:!1,tsType:{name:`boolean`},description:`已無作用（icon 一律對齊第一行文字），保留以維持相容`},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}},composes:[`BoxProps`]}})),k=n({CustomIconSizes:()=>Z,FixedHeight:()=>J,NarrowedContainer:()=>q,Playground:()=>L,SingleLine:()=>W,SmallFixedHeight:()=>Y,ThreeLines:()=>K,TwoLines:()=>G,Variants:()=>I,__namedExportsOrder:()=>Q,default:()=>P});function A(e,t){let n=N(e).getByText(t),r=parseFloat(getComputedStyle(n).lineHeight),i=n.getBoundingClientRect(),a=e.querySelector(`svg`).getBoundingClientRect();return{lines:Math.round(i.height/r),offsetFromFirstLine:Math.abs(H(a)-(i.top+r/2)),offsetFromBanner:Math.abs(H(a)-H(e.getBoundingClientRect())),bannerHeight:e.getBoundingClientRect().height}}var j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{g(),O(),j=i(),{expect:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Feedback/Banner`,component:D},F=[`normal`,`info`,`success`,`warning`,`error`],I={render:()=>(0,j.jsx)(h,{spacing:2,sx:{maxWidth:480},children:F.map(e=>(0,j.jsxs)(D,{variant:e,children:[`這是 `,e,` 提示訊息，用來告知使用者目前的狀態或需要注意的事項。`]},e))})},L={parameters:{controls:{include:[`variant`,`children`,`mobile`,`width`]}},args:{variant:`info`,children:`提示訊息內容`,mobile:!1},argTypes:{variant:{control:`select`,options:F},children:{control:`text`},icon:{control:!1},width:{control:`text`,description:`數字＝px；字串可用任意 CSS 長度（100px / 50% / fit-content）`,table:{type:{summary:`number | string`}}}}},R=`提示訊息內容`,z=R.repeat(3),B=R.repeat(9),V=R.repeat(15),H=e=>e.top+e.height/2,U=(e,t,n)=>({render:()=>(0,j.jsx)(`div`,{style:{width:480},children:(0,j.jsx)(D,{"data-testid":`banner`,children:e})}),play:async({canvasElement:r})=>{let i=A(N(r).getByTestId(`banner`),e);await M(i.lines).toBe(t),await M(i.offsetFromFirstLine).toBeLessThanOrEqual(1),await M(i.bannerHeight).toBeCloseTo(n,0)}}),W=U(z,1,50),G=U(B,2,59.6),K=U(V,3,76.4),q={render:()=>(0,j.jsx)(`div`,{style:{width:480},children:(0,j.jsx)(D,{"data-testid":`banner`,children:z})}),play:async({canvasElement:e})=>{let t=N(e).getByTestId(`banner`);await M(A(t,z).lines).toBe(1),t.parentElement.style.width=`200px`;let n=A(t,z);await M(n.lines).toBeGreaterThan(1),await M(n.offsetFromFirstLine).toBeLessThanOrEqual(1)}},J={render:()=>(0,j.jsx)(`div`,{style:{width:480},children:(0,j.jsx)(D,{"data-testid":`banner`,height:56,children:z})}),play:async({canvasElement:e})=>{let t=A(N(e).getByTestId(`banner`),z);await M(t.bannerHeight).toBe(56),await M(t.offsetFromBanner).toBeLessThanOrEqual(1),await M(t.offsetFromFirstLine).toBeLessThanOrEqual(1)}},Y={render:()=>(0,j.jsx)(`div`,{style:{width:480},children:(0,j.jsx)(D,{"data-testid":`banner`,height:40,children:z})}),play:async({canvasElement:e})=>{let t=A(N(e).getByTestId(`banner`),z);await M(t.bannerHeight).toBe(40)}},X=e=>(0,j.jsx)(`svg`,{width:e,height:e,viewBox:`0 0 24 24`,xmlns:`http://www.w3.org/2000/svg`,children:(0,j.jsx)(`circle`,{cx:`12`,cy:`12`,r:`12`,fill:`#1747C2`})}),Z={render:()=>(0,j.jsxs)(h,{spacing:2,sx:{width:480},children:[(0,j.jsx)(D,{"data-testid":`icon-16`,icon:X(16),children:V}),(0,j.jsx)(D,{"data-testid":`icon-40`,icon:X(40),children:V})]}),play:async({canvasElement:e})=>{let t=N(e);for(let e of[`icon-16`,`icon-40`]){let n=A(t.getByTestId(e),V);await M(n.lines).toBe(3),await M(n.offsetFromFirstLine).toBeLessThanOrEqual(1)}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    maxWidth: 480
  }}>
      {VARIANTS.map(v => <Banner key={v} variant={v}>
          這是 {v} 提示訊息，用來告知使用者目前的狀態或需要注意的事項。
        </Banner>)}
    </Stack>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["variant", "children", "mobile", "width"]
    }
  },
  args: {
    variant: "info",
    children: "提示訊息內容",
    mobile: false
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANTS
    },
    children: {
      control: "text"
    },
    icon: {
      control: false
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
}`,...L.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`lineStory(ONE_LINE, 1, 50)`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`lineStory(TWO_LINES, 2, 59.6)`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`lineStory(THREE_LINES, 3, 76.4)`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 480
  }}>
      <Banner data-testid="banner">{ONE_LINE}</Banner>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const banner = within(canvasElement).getByTestId("banner");
    await expect(measure(banner, ONE_LINE).lines).toBe(1);
    banner.parentElement!.style.width = "200px";
    const m = measure(banner, ONE_LINE);
    await expect(m.lines).toBeGreaterThan(1);
    await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
  }
}`,...q.parameters?.docs?.source},description:{story:`掛載後容器變窄、單行變多行，仍須對齊第一行`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 480
  }}>
      <Banner data-testid="banner" height={56}>
        {ONE_LINE}
      </Banner>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const m = measure(within(canvasElement).getByTestId("banner"), ONE_LINE);
    await expect(m.bannerHeight).toBe(56);
    await expect(m.offsetFromBanner).toBeLessThanOrEqual(1);
    await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
  }
}`,...J.parameters?.docs?.source},description:{story:`指定 height 的單行 Banner 維持垂直置中，不可貼頂`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 480
  }}>
      <Banner data-testid="banner" height={40}>
        {ONE_LINE}
      </Banner>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const m = measure(within(canvasElement).getByTestId("banner"), ONE_LINE);
    await expect(m.bannerHeight).toBe(40);
  }
}`,...Y.parameters?.docs?.source},description:{story:`指定的 height 小於預設最小高度時，以 height 為準`,...Y.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={2} sx={{
    width: 480
  }}>
      <Banner data-testid="icon-16" icon={customIcon(16)}>
        {THREE_LINES}
      </Banner>
      <Banner data-testid="icon-40" icon={customIcon(40)}>
        {THREE_LINES}
      </Banner>
    </Stack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const id of ["icon-16", "icon-40"]) {
      const m = measure(canvas.getByTestId(id), THREE_LINES);
      await expect(m.lines).toBe(3);
      await expect(m.offsetFromFirstLine).toBeLessThanOrEqual(1);
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`自訂 icon 不論大小，都以第一行置中`,...Z.parameters?.docs?.description}}},Q=[`Variants`,`Playground`,`SingleLine`,`TwoLines`,`ThreeLines`,`NarrowedContainer`,`FixedHeight`,`SmallFixedHeight`,`CustomIconSizes`]}));$();export{Z as CustomIconSizes,J as FixedHeight,q as NarrowedContainer,L as Playground,W as SingleLine,Y as SmallFixedHeight,K as ThreeLines,G as TwoLines,I as Variants,Q as __namedExportsOrder,P as default,$ as n,k as t};