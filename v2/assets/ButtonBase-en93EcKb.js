import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{At as r,Ot as i,b as a,c as o,n as s,nt as c,ot as l,st as u,tt as d,x as f}from"./styled-1csGAVYW.js";import{t as p}from"./jsx-runtime-cM__dR4X.js";import{n as m,t as h}from"./generateUtilityClasses-CgN69icw.js";import{_ as g,c as _,d as v,f as y,g as b,h as x,i as S,m as C,n as ee,p as te,r as w,t as T}from"./useReducedMotion-B-4Q7kE9.js";import{n as E}from"./zero-styled-CfF_nIrt.js";import{r as ne,t as D}from"./DefaultPropsProvider-DNw0Mz9p.js";import{r as re,t as O}from"./isFocusVisible-BY_zR6Xk.js";var ie=t((()=>{C()})),ae=t((()=>{y()}));function oe(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return k.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var k,A=t((()=>{k=e(n(),1)}));function se(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=j.useRef(null),m=l===!0,h=oe({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=j.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`||!!(e.tagName===`A`&&e.href)},[t]),_=j.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:j.useCallback((e=M)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var j,M,N=t((()=>{j=e(n(),1),A(),M={}}));function ce(){return le.use()}function P(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var F,le,I=t((()=>{F=e(n(),1),ie(),le=class e{static create(){return new e}static use(){let t=x(e.create).current,[n,r]=F.useState(!1);return t.shouldMount=n,t.setShouldMount=r,F.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=P(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}})),L=t((()=>{I()}));function ue(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:c,timeout:u}=e,[d,f]=R.useState(!1),p=v(),m=R.useRef(!1),h=R.useRef(c);h.current=c;let g=c!=null,_=l(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),y={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},b=l(n.child,d&&n.childLeaving,r&&n.childPulsate);return!s&&!d&&f(!0),R.useEffect(()=>{!s&&g?m.current||(m.current=!0,p.start(u,()=>{m.current=!1,h.current?.()})):(m.current=!1,p.clear())},[p,g,s,u]),(0,z.jsx)(`span`,{className:_,style:y,children:(0,z.jsx)(`span`,{className:b})})}var R,z,B=t((()=>{R=e(n(),1),u(),_(),z=p()})),V,H=t((()=>{h(),V=m(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`])}));function U(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function de({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}function W(e){if(e.motion.reducedMotion===`always`)return null;let t=i`
    &.${V.rippleVisible} {
      animation-name: ${pe};
      animation-duration: ${q}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${V.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${V.childLeaving} {
      animation-name: ${me};
      animation-duration: ${q}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${V.childPulsate} {
      animation-name: ${he};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?i`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var G,K,q,J,Y,fe,pe,me,he,ge,_e,ve,ye=t((()=>{G=e(n(),1),u(),ae(),_(),E(),D(),B(),H(),w(),T(),K=p(),q=550,J={},Y=[],fe=()=>{},pe=r`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,me=r`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,he=r`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,ge=s(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),_e=s(ue,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${V.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${V.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${V.childLeaving} {
    opacity: 0;
  }

  & .${V.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>W(e)}
`,ve=G.forwardRef(function(e,t){let n=ne({props:e,name:`MuiTouchRipple`}),r=ee(o().motion.reducedMotion,!1),{center:i=!1,classes:a=J,className:s,...c}=n,[u,d]=G.useState({items:Y,order:Y}),f=u.items,p=G.useRef(0),m=G.useRef(null),h=G.useRef(!1);te(()=>(h.current=!0,()=>{h.current=!1})),G.useEffect(()=>{m.current&&=(m.current(),null)},[f]);let g=G.useRef(!1),_=v(),y=G.useRef(null),b=G.useRef(null),x=S(e=>{h.current&&d(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:U(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),C=S(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=p.current;p.current+=1,d(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:U(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),m.current=a}),w=S((e=J,t=J,n=fe)=>{let{pulsate:r=!1,center:a=i||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&g.current){g.current=!1;return}e?.type===`touchstart`&&(g.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=de({event:e,element:o?null:b.current,center:a});e?.touches?y.current===null&&(y.current=()=>{C({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},_.start(80,()=>{y.current&&=(y.current(),null)})):C({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),T=S(()=>{w(J,{pulsate:!0})}),E=S((e,t)=>{if(_.clear(),e?.type===`touchend`&&y.current){y.current(),y.current=null,_.start(0,()=>{E(e,t)});return}y.current=null,d(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:U(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),m.current=t});G.useImperativeHandle(t,()=>({pulsate:T,start:w,stop:E}),[T,w,E]);let D=new Map(f.map(e=>[e.key,e])),re=u.order.map(e=>D.get(e)).filter(Boolean);return(0,K.jsx)(ge,{className:l(V.root,a.root,s),ref:b,...c,children:re.map(e=>(0,K.jsx)(_e,{classes:{ripple:l(a.ripple,V.ripple),rippleVisible:l(a.rippleVisible,V.rippleVisible),ripplePulsate:l(a.ripplePulsate,V.ripplePulsate),child:l(a.child,V.child),childLeaving:l(a.childLeaving,V.childLeaving),childPulsate:l(a.childPulsate,V.childPulsate)},timeout:r.shouldReduceMotion?0:q,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>x(e.key)},e.key))})})}));function be(e){return c(`MuiButtonBase`,e)}var xe,X=t((()=>{h(),d(),xe=m(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`])}));function Z(e,t,n,r=!1){return S(i=>(n&&n(i),r||e[t](i),!0))}var Q,Se,Ce,we,$,Te=t((()=>{Q=e(n(),1),u(),a(),O(),E(),D(),b(),w(),N(),L(),ye(),X(),Se=p(),Ce=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,o=f({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},be,a);return n&&!i&&r&&(o.root+=` ${r}`),o},we=s(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${xe.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),$=Q.forwardRef(function(e,t){let n=ne({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:s=`button`,disabled:c=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:f=!1,focusVisibleClassName:p,focusableWhenDisabled:m,suppressFocusVisible:h=!1,internalNativeButton:_,LinkComponent:v=`a`,nativeButton:y,onBlur:b,onClick:x,onContextMenu:C,onDragLeave:ee,onFocus:te,onFocusVisible:w,onKeyDown:T,onKeyUp:E,onMouseDown:D,onMouseLeave:O,onMouseUp:ie,onTouchEnd:ae,onTouchMove:oe,onTouchStart:k,tabIndex:A=0,TouchRippleProps:j,touchRippleRef:M,type:N,...P}=n,F=!!(P.href||P.to),le=!!P.formAction,I=s;I===`button`&&F&&(I=v);let L=typeof I==`string`?I===`button`:_??!1,ue=y??L,R=ce(),z=g(R.ref,M),[B,V]=Q.useState(!1);(c||h)&&B&&V(!1);let H=S(e=>{f&&!e.repeat&&B&&e.key===` `&&R.stop(e,()=>{R.start(e)})}),U=S(e=>{f&&e.key===` `&&B&&!e.defaultPrevented&&R.stop(e,()=>{R.pulsate(e)})}),{getButtonProps:de,rootRef:W}=se({nativeButton:ue,nativeButtonProp:y,internalNativeButton:L,allowInferredHostMismatch:F||typeof I==`string`,disabled:c,type:N,hasFormAction:le,tabIndex:A,onBeforeKeyDown:H,onBeforeKeyUp:U}),{onClick:G,onKeyDown:K,onKeyUp:q,...J}=de({onClick:x,onKeyDown:T,onKeyUp:E});Q.useImperativeHandle(r,()=>({focusVisible:()=>{V(!0),W.current.focus()}}),[W]);let Y=R.shouldMount&&!u&&!c;Q.useEffect(()=>{B&&f&&!u&&R.pulsate()},[u,f,B,R]);let fe=Z(R,`start`,D,d),pe=Z(R,`stop`,C,d),me=Z(R,`stop`,ee,d),he=Z(R,`stop`,ie,d),ge=Z(R,`stop`,e=>{B&&e.preventDefault(),O&&O(e)},d),_e=Z(R,`start`,k,d),ye=Z(R,`stop`,ae,d),be=Z(R,`stop`,oe,d),xe=Z(R,`stop`,e=>{re(e.target)||V(!1),b&&b(e)},!1),X=S(e=>{W.current||=e.currentTarget,!h&&re(e.target)&&(V(!0),w&&w(e)),te&&te(e)}),$={};F&&($.tabIndex=c?-1:A,c&&($[`aria-disabled`]=c),$.type=N);let Te=g(t,W),Ee={...n,centerRipple:i,component:s,disabled:c,disableRipple:u,disableTouchRipple:d,focusRipple:f,suppressFocusVisible:h,tabIndex:A,focusVisible:B},De=Ce(Ee);return(0,Se.jsxs)(we,{as:I,className:l(De.root,o),ownerState:Ee,onBlur:xe,onClick:G,onContextMenu:pe,onFocus:X,onKeyDown:K,onKeyUp:q,onMouseDown:fe,onMouseLeave:ge,onMouseUp:he,onDragLeave:me,onTouchEnd:ye,onTouchMove:be,onTouchStart:_e,ref:Te,...F?$:J,...P,children:[a,Y?(0,Se.jsx)(ve,{ref:z,center:i,...j}):null]})})})),Ee=t((()=>{Te(),X(),X(),H(),H()}));export{$ as n,Te as r,Ee as t};