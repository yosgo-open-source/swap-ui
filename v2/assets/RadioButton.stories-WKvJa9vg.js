import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{t as r}from"./react-DvlgmmzG.js";import{b as i,n as a,nt as o,ot as s,st as c,tt as l,x as u}from"./styled-1csGAVYW.js";import{t as d}from"./jsx-runtime-cM__dR4X.js";import{n as f,t as p}from"./generateUtilityClasses-CgN69icw.js";import{_ as m,g as h}from"./useReducedMotion-B-4Q7kE9.js";import{r as g,t as _}from"./useFormControl-Bu5TOGcf.js";import{n as v}from"./zero-styled-CfF_nIrt.js";import{r as y,t as b}from"./DefaultPropsProvider-DNw0Mz9p.js";import{i as x,n as S,r as C,t as w}from"./RadioButton-CBnRmsvg.js";import{n as ee,t as T}from"./useId-TxBVZf_p.js";import{n as E,t as D}from"./useControlled-EAF-boxJ.js";import{n as O,t as k}from"./Stack-u7uhj71j.js";function A(e){return o(`MuiFormGroup`,e)}var j=t((()=>{p(),l(),f(`MuiFormGroup`,[`root`,`row`,`error`])})),M,N,P,F,I,L=t((()=>{M=e(r(),1),c(),i(),v(),b(),j(),_(),N=d(),P=e=>{let{classes:t,row:n,error:r}=e;return u({root:[`root`,n&&`row`,r&&`error`]},A,t)},F=a(`div`,{name:`MuiFormGroup`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.row&&t.row]}})({display:`flex`,flexDirection:`column`,flexWrap:`wrap`,variants:[{props:{row:!0},style:{flexDirection:`row`}}]}),I=M.forwardRef(function(e,t){let n=y({props:e,name:`MuiFormGroup`}),{className:r,row:i=!1,...a}=n,[o]=g({props:n,states:[`error`]}),c={...n,row:i,error:o.error},l=P(c);return(0,N.jsx)(F,{className:s(l.root,r),ownerState:c,ref:t,...a})})})),R=t((()=>{L(),j(),j()}));function z(e){return o(`MuiRadioGroup`,e)}var B=t((()=>{p(),l(),f(`MuiRadioGroup`,[`root`,`row`,`error`])})),V,H,U,W,G=t((()=>{V=e(r(),1),c(),i(),R(),B(),h(),D(),x(),T(),H=d(),U=e=>{let{classes:t,row:n,error:r}=e;return u({root:[`root`,n&&`row`,r&&`error`]},z,t)},W=V.forwardRef(function(e,t){let{actions:n,children:r,className:i,defaultValue:a,name:o,onChange:c,value:l,...u}=e,d=V.useRef(null),f=U(e),[p,h]=E({controlled:l,default:a,name:`RadioGroup`});V.useImperativeHandle(n,()=>({focus:()=>{let e=d.current.querySelector(`input:not(:disabled):checked`);e||=d.current.querySelector(`input:not(:disabled)`),e&&e.focus()}}),[]);let g=m(t,d),_=ee(o),v=V.useMemo(()=>({name:_,onChange(e){h(e.target.value),c&&c(e,e.target.value)},value:p}),[_,c,h,p]);return(0,H.jsx)(C.Provider,{value:v,children:(0,H.jsx)(I,{role:`radiogroup`,ref:g,className:s(f.root,i),...u,children:r})})})})),K=t((()=>{G(),B(),B()})),q=n({Group:()=>X,Playground:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),J,Y,X,Z,Q,$=t((()=>{K(),k(),S(),J=d(),Y={title:`Inputs/RadioButton`,component:w},X={render:()=>(0,J.jsx)(W,{defaultValue:`monthly`,children:(0,J.jsxs)(O,{direction:`row`,spacing:2,children:[(0,J.jsx)(w,{value:`monthly`,label:`月繳`}),(0,J.jsx)(w,{value:`yearly`,label:`年繳`}),(0,J.jsx)(w,{value:`none`,label:`停用`,disabled:!0})]})})},Z={parameters:{controls:{include:[`label`,`labelPlacement`,`disabled`,`disableHover`]}},args:{label:`選項`,disabled:!1,disableHover:!1},argTypes:{label:{control:`text`},labelPlacement:{control:`select`,options:[`end`,`start`,`top`,`bottom`],description:`label 相對位置`}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="monthly">
      <Stack direction="row" spacing={2}>
        <RadioButton value="monthly" label="月繳" />
        <RadioButton value="yearly" label="年繳" />
        <RadioButton value="none" label="停用" disabled />
      </Stack>
    </RadioGroup>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["label", "labelPlacement", "disabled", "disableHover"]
    }
  },
  args: {
    label: "選項",
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
    }
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Group`,`Playground`]}));$();export{X as Group,Z as Playground,Q as __namedExportsOrder,Y as default,$ as n,q as t};