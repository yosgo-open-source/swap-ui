import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{At as r,Ot as i,b as a,n as o,nt as s,ot as c,st as l,tt as u,x as d}from"./styled-1csGAVYW.js";import{t as f}from"./jsx-runtime-cM__dR4X.js";import{n as p,t as m}from"./generateUtilityClasses-CgN69icw.js";import{n as h}from"./zero-styled-CfF_nIrt.js";import{n as g,t as _}from"./memoTheme-DbS0d9iA.js";import{r as v,t as y}from"./DefaultPropsProvider-DNw0Mz9p.js";import{o as b,t as x}from"./utils-s_8mhAKk.js";import{c as S,o as C,t as w}from"./styles-p6-_iz2H.js";function T(e){return s(`MuiSkeleton`,e)}var E=t((()=>{m(),u(),p(`MuiSkeleton`,[`root`,`text`,`rectangular`,`rounded`,`circular`,`pulse`,`wave`,`withChildren`,`fitContent`,`heightAuto`])})),D,O,k,A,j,M,N,P,F,I=t((()=>{D=e(n(),1),l(),a(),w(),h(),_(),y(),b(),E(),O=f(),k=e=>{let{classes:t,variant:n,animation:r,hasChildren:i,width:a,height:o}=e;return d({root:[`root`,n,r,i&&`withChildren`,i&&!a&&`fitContent`,i&&!o&&`heightAuto`]},T,t)},A=r`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,j=r`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,M=typeof A==`string`?null:i`
        animation: ${A} 2s ease-in-out 0.5s infinite;
      `,N=typeof j==`string`?null:i`
        &::after {
          animation: ${j} 2s linear 0.5s infinite;
        }
      `,P=o(`span`,{name:`MuiSkeleton`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.animation!==!1&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(g(({theme:e})=>{let t=C(e.shape.borderRadius)||`px`,n=S(e.shape.borderRadius),r=x(e,{animation:`none`}),i=x(e,{"&::after":{animation:`none`,display:`none`}});return{display:`block`,backgroundColor:e.vars?e.vars.palette.Skeleton.bg:e.alpha(e.palette.text.primary,e.palette.mode===`light`?.11:.13),height:`1.2em`,variants:[{props:{variant:`text`},style:{marginTop:0,marginBottom:0,height:`auto`,transformOrigin:`0 55%`,transform:`scale(1, 0.60)`,borderRadius:`${n}${t}/${Math.round(n/.6*10)/10}${t}`,"&:empty:before":{content:`"\\00a0"`}}},{props:{variant:`circular`},style:{borderRadius:`50%`}},{props:{variant:`rounded`},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:({ownerState:e})=>e.hasChildren,style:{"& > *":{visibility:`hidden`}}},{props:({ownerState:e})=>e.hasChildren&&!e.width,style:{maxWidth:`fit-content`}},{props:({ownerState:e})=>e.hasChildren&&!e.height,style:{height:`auto`}},{props:{animation:`pulse`},style:M||{animation:`${A} 2s ease-in-out 0.5s infinite`}},...r?[{props:{animation:`pulse`},style:r}]:[],{props:{animation:`wave`},style:{position:`relative`,overflow:`hidden`,WebkitMaskImage:`-webkit-radial-gradient(white, black)`,"&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(e.vars||e).palette.action.hover},
                transparent
              )`,content:`""`,position:`absolute`,transform:`translateX(-100%)`,bottom:0,left:0,right:0,top:0}}},{props:{animation:`wave`},style:N||{"&::after":{animation:`${j} 2s linear 0.5s infinite`}}},...i?[{props:{animation:`wave`},style:i}]:[]]}})),F=D.forwardRef(function(e,t){let n=v({props:e,name:`MuiSkeleton`}),{animation:r=`pulse`,className:i,component:a=`span`,height:o,style:s,variant:l=`text`,width:u,...d}=n,f={...n,animation:r,component:a,variant:l,hasChildren:!!d.children},p=k(f);return(0,O.jsx)(P,{as:a,ref:t,className:c(p.root,i),ownerState:f,...d,style:{width:u,height:o,...s}})})})),L=t((()=>{I(),E(),E()}));export{F as n,I as r,L as t};