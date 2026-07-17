import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{At as r,Ot as i,b as a,n as o,nt as s,ot as c,st as l,tt as u,x as d}from"./styled-1csGAVYW.js";import{t as f}from"./jsx-runtime-cM__dR4X.js";import{n as p,t as m}from"./generateUtilityClasses-CgN69icw.js";import{n as h}from"./zero-styled-CfF_nIrt.js";import{n as g,t as _}from"./memoTheme-DbS0d9iA.js";import{r as v,t as y}from"./DefaultPropsProvider-DNw0Mz9p.js";import{n as b,t as x}from"./capitalize-CJlm6f_a.js";import{i as S,o as C,t as w}from"./utils-s_8mhAKk.js";import{n as T,t as E}from"./createSimplePaletteValueFilter-DQrOMEB4.js";function D(e){return s(`MuiCircularProgress`,e)}var O=t((()=>{m(),u(),p(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`])})),k,A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{k=e(n(),1),l(),a(),h(),_(),y(),b(),T(),C(),O(),A=f(),j=44,M=r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,N=r`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,P=typeof M==`string`?null:i`
        animation: ${M} 1.4s linear infinite;
      `,F=typeof N==`string`?null:i`
        animation: ${N} 1.4s ease-in-out infinite;
      `,I=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e;return d({root:[`root`,n,`color${x(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]},D,t)},L=o(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${x(n.color)}`]]}})(g(({theme:e})=>{let t=w(e,{animation:`none`});return{display:`inline-block`,variants:[{props:{variant:`determinate`},style:{...S(e,`transform`)}},{props:{variant:`indeterminate`},style:P||{animation:`${M} 1.4s linear infinite`}},...t?[{props:{variant:`indeterminate`},style:t}]:[],...Object.entries(e.palette).filter(E()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}})),R=o(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),z=o(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(g(({theme:e})=>{let t=w(e,{animation:`none`});return{stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{...S(e,`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:F||{animation:`${N} 1.4s ease-in-out infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:t}]:[]]}})),B=o(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(g(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),V=k.forwardRef(function(e,t){let n=v({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:o=!1,min:s,max:l,size:u=40,style:d,thickness:f=3.6,value:p=n.min??0,variant:m=`indeterminate`,...h}=n,g=s??0,_=l??100,y={...n,color:i,disableShrink:a,size:u,thickness:f,value:p,variant:m,enableTrackSlot:o},b=I(y),x={},S={},C={};if(m===`determinate`){let e=2*Math.PI*((j-f)/2),t=_-g;x.strokeDasharray=e.toFixed(3),x.strokeDashoffset=t>0?`${((_-p)/t*e).toFixed(3)}px`:`${e.toFixed(3)}px`,S.transform=`rotate(-90deg)`,C[`aria-valuenow`]=p,C[`aria-valuemin`]=g,C[`aria-valuemax`]=_}return(0,A.jsx)(L,{className:c(b.root,r),style:{width:u,height:u,...S,...d},ownerState:y,ref:t,role:`progressbar`,...C,...h,children:(0,A.jsxs)(R,{className:b.svg,ownerState:y,viewBox:`${j/2} ${j/2} ${j} ${j}`,children:[o?(0,A.jsx)(B,{className:b.track,ownerState:y,cx:j,cy:j,r:(j-f)/2,fill:`none`,strokeWidth:f,"aria-hidden":`true`}):null,(0,A.jsx)(z,{className:b.circle,style:x,ownerState:y,cx:j,cy:j,r:(j-f)/2,fill:`none`,strokeWidth:f})]})})})})),U=t((()=>{H(),O(),O()}));export{V as n,H as r,U as t};