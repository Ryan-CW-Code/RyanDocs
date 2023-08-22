!(function(){"use strict";var wt=Object.defineProperty,Pt=Object.defineProperties;var Et=Object.getOwnPropertyDescriptors;var ie=Object.getOwnPropertySymbols;var De=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var Ze=(y,g,i)=>g in y?wt(y,g,{enumerable:!0,configurable:!0,writable:!0,value:i}):y[g]=i,u=(y,g)=>{for(var i in g||(g={}))De.call(g,i)&&Ze(y,i,g[i]);if(ie)for(var i of ie(g))Le.call(g,i)&&Ze(y,i,g[i]);return y},b=(y,g)=>Pt(y,Et(g));var fe=(y,g)=>{var i={};for(var d in y)De.call(y,d)&&g.indexOf(d)<0&&(i[d]=y[d]);if(y!=null&&ie)for(var d of ie(y))g.indexOf(d)<0&&Le.call(y,d)&&(i[d]=y[d]);return i};(self.webpackChunkdumiLib=self.webpackChunkdumiLib||[]).push([[437],{6437:function(y,g,i){i.d(g,{Z:function(){return $t}});var d=i(50959),M=i(79968),I=i(58216),m=i(49919),Z=i(29922),x=i(27529),$=i(37543),S=i(24843),k=["borders","breakpoints","colors","components","config","direction","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","shadows","sizes","space","styles","transition","zIndices"];function Y(e){return(0,S.Kn)(e)?k.every(n=>Object.prototype.hasOwnProperty.call(e,n)):!1}var B=i(81138);function W(e){return typeof e=="function"}function ne(...e){return n=>e.reduce((r,t)=>t(r),n)}var D=e=>function(...r){let t=[...r],o=r[r.length-1];return Y(o)&&t.length>1?t=t.slice(0,t.length-1):o=e,ne(...t.map(s=>a=>W(s)?s(a):E(a,s)))(o)},N=D(x.rS),P=D(x.wE);function E(...e){return B({},...e,A)}function A(e,n,r,t){if((W(e)||W(n))&&Object.prototype.hasOwnProperty.call(t,r))return(...o)=>{const s=W(e)?e(...o):e,a=W(n)?n(...o):n;return B({},s,a,A)}}var O=i(58518),l=i(11527),X=String.raw,q=X`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,oe=()=>(0,l.jsx)(O.xB,{styles:q}),_=({scope:e=""})=>(0,l.jsx)(O.xB,{styles:X`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${q}
    `}),At=null,Ie=i(99222),ve=i(75658),re={light:"chakra-ui-light",dark:"chakra-ui-dark"};function Ne(e={}){const{preventTransition:n=!0}=e,r={setDataset:t=>{const o=n?r.preventTransition():void 0;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,o==null||o()},setClassName(t){document.body.classList.add(t?re.dark:re.light),document.body.classList.remove(t?re.light:re.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(t){var o;return((o=r.query().matches)!=null?o:t==="dark")?"dark":"light"},addListener(t){const o=r.query(),s=a=>{t(a.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(s):o.addEventListener("change",s),()=>{typeof o.removeListener=="function"?o.removeListener(s):o.removeEventListener("change",s)}},preventTransition(){const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(t)})})}}};return r}var se="chakra-ui-color-mode";function Oe(e){return{ssr:!1,type:"localStorage",get(n){if(!(globalThis!=null&&globalThis.document))return n;let r;try{r=localStorage.getItem(e)||n}catch(t){}return r||n},set(n){try{localStorage.setItem(e,n)}catch(r){}}}}var Re=Oe(se);function ge(e,n){const r=e.match(new RegExp(`(^| )${n}=([^;]+)`));return r==null?void 0:r[2]}function ye(e,n){return{ssr:!!n,type:"cookie",get(r){return n?ge(n,e):globalThis!=null&&globalThis.document&&ge(document.cookie,e)||r},set(r){document.cookie=`${e}=${r}; max-age=31536000; path=/`}}}var zt=ye(se),Zt=e=>ye(se,e),Be=i(27187),F=()=>{};function xe(e,n){return e.type==="cookie"&&e.ssr?e.get(n):n}function be(e){const{value:n,children:r,options:{useSystemColorMode:t,initialColorMode:o,disableTransitionOnChange:s}={},colorModeManager:a=Re}=e,c=o==="dark"?"dark":"light",[f,h]=(0,d.useState)(()=>xe(a,c)),[v,j]=(0,d.useState)(()=>xe(a)),{getSystemTheme:T,setClassName:w,setDataset:C,addListener:G}=(0,d.useMemo)(()=>Ne({preventTransition:s}),[s]),z=o==="system"&&!f?v:f,p=(0,d.useCallback)(R=>{const V=R==="system"?T():R;h(V),w(V==="dark"),C(V),a.set(V)},[a,T,w,C]);(0,Be.G)(()=>{o==="system"&&j(T())},[]),(0,d.useEffect)(()=>{const R=a.get();if(R){p(R);return}if(o==="system"){p("system");return}p(c)},[a,c,o,p]);const K=(0,d.useCallback)(()=>{p(z==="dark"?"light":"dark")},[z,p]);(0,d.useEffect)(()=>{if(t)return G(p)},[t,G,p]);const te=(0,d.useMemo)(()=>({colorMode:n!=null?n:z,toggleColorMode:n?F:K,setColorMode:n?F:p,forced:n!==void 0}),[z,K,p,n]);return(0,l.jsx)($.kc.Provider,{value:te,children:r})}be.displayName="ColorModeProvider";function We(e){const n=(0,d.useMemo)(()=>({colorMode:"dark",toggleColorMode:F,setColorMode:F,forced:!0}),[]);return(0,l.jsx)($.kc.Provider,u({value:n},e))}We.displayName="DarkMode";function Ge(e){const n=(0,d.useMemo)(()=>({colorMode:"light",toggleColorMode:F,setColorMode:F,forced:!0}),[]);return(0,l.jsx)($.kc.Provider,u({value:n},e))}Ge.displayName="LightMode";var Ke=i(1298),Ve=e=>{const{children:n,colorModeManager:r,portalZIndex:t,resetScope:o,resetCSS:s=!0,theme:a={},environment:c,cssVarsRoot:f,disableEnvironment:h,disableGlobalStyle:v}=e,j=(0,l.jsx)(Ke.u,{environment:c,disabled:h,children:n});return(0,l.jsx)(ve.f6,{theme:a,cssVarsRoot:f,children:(0,l.jsxs)(be,{colorModeManager:r,options:a.config,children:[s?(0,l.jsx)(_,{scope:o}):(0,l.jsx)(oe,{}),!v&&(0,l.jsx)(ve.ZL,{}),t?(0,l.jsx)(Ie.h,{zIndex:t,children:j}):j]})})},Ue=(e,n)=>e.find(r=>r.id===n);function pe(e,n){const r=ae(e,n),t=r?e[r].findIndex(o=>o.id===n):-1;return{position:r,index:t}}function ae(e,n){for(const[r,t]of Object.entries(e))if(Ue(t,n))return r}var Dt=(e,n)=>!!ae(e,n);function He(e){const n=e.includes("right"),r=e.includes("left");let t="center";return n&&(t="flex-end"),r&&(t="flex-start"),{display:"flex",flexDirection:"column",alignItems:t}}function Fe(e){const r=e==="top"||e==="bottom"?"0 auto":void 0,t=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,s=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",a=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:r,top:t,bottom:o,right:s,left:a}}var Qe=i(56517);function Je(e,n){const r=(0,Qe.W)(e);(0,d.useEffect)(()=>{if(n==null)return;let t=null;return t=window.setTimeout(()=>{r()},n),()=>{t&&window.clearTimeout(t)}},[n,r])}var Se=i(57452),Ye=i(10157),Xe=i(63061),Q=i(88246),qe={initial:e=>{const{position:n}=e,r=["top","bottom"].includes(n)?"y":"x";let t=["top-right","bottom-right"].includes(n)?1:-1;return n==="bottom"&&(t=1),{opacity:0,[r]:t*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},Ce=(0,d.memo)(e=>{const{id:n,message:r,onCloseComplete:t,onRequestRemove:o,requestClose:s=!1,position:a="bottom",duration:c=5e3,containerStyle:f,motionVariants:h=qe,toastSpacing:v="0.5rem"}=e,[j,T]=(0,d.useState)(c),w=(0,Ye.hO)();(0,Se.r)(()=>{w||t==null||t()},[w]),(0,Se.r)(()=>{T(c)},[c]);const C=()=>T(null),G=()=>T(c),z=()=>{w&&o()};(0,d.useEffect)(()=>{w&&s&&o()},[w,s,o]),Je(z,j);const p=(0,d.useMemo)(()=>u({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:v},f),[f,v]),K=(0,d.useMemo)(()=>He(a),[a]);return(0,l.jsx)(Xe.E.div,{layout:!0,className:"chakra-toast",variants:h,initial:"initial",animate:"animate",exit:"exit",onHoverStart:C,onHoverEnd:G,custom:{position:a},style:K,children:(0,l.jsx)(Q.m.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:p,children:(0,S.Pu)(r,{id:n,onClose:z})})})});Ce.displayName="ToastComponent";var le=i(94614);function _e(e){return(0,l.jsx)(le.J,b(u({viewBox:"0 0 24 24"},e),{children:(0,l.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})}))}function et(e){return(0,l.jsx)(le.J,b(u({viewBox:"0 0 24 24"},e),{children:(0,l.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})}))}function Me(e){return(0,l.jsx)(le.J,b(u({viewBox:"0 0 24 24"},e),{children:(0,l.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))}var ce=i(41235),tt=i(32986),[nt,de]=(0,ce.k)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[ot,ue]=(0,ce.k)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),ke={info:{icon:et,colorScheme:"blue"},warning:{icon:Me,colorScheme:"orange"},success:{icon:_e,colorScheme:"green"},error:{icon:Me,colorScheme:"red"},loading:{icon:tt.$,colorScheme:"blue"}};function rt(e){return ke[e].colorScheme}function it(e){return ke[e].icon}var me=i(35604),st=i(83198),at=i(53711),Te=(0,me.G)(function(n,r){var t;const v=(0,st.Lr)(n),{status:o="info",addRole:s=!0}=v,a=fe(v,["status","addRole"]),c=(t=n.colorScheme)!=null?t:rt(o),f=(0,at.jC)("Alert",b(u({},n),{colorScheme:c})),h=u({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},f.container);return(0,l.jsx)(nt,{value:{status:o},children:(0,l.jsx)(ot,{value:f,children:(0,l.jsx)(Q.m.div,b(u({"data-status":o,role:s?"alert":void 0,ref:r},a),{className:(0,S.cx)("chakra-alert",n.className),__css:h}))})})});Te.displayName="Alert";function $e(e){const{status:n}=de(),r=it(n),t=ue(),o=n==="loading"?t.spinner:t.icon;return(0,l.jsx)(Q.m.span,b(u({display:"inherit","data-status":n},e),{className:(0,S.cx)("chakra-alert__icon",e.className),__css:o,children:e.children||(0,l.jsx)(r,{h:"100%",w:"100%"})}))}$e.displayName="AlertIcon";var je=(0,me.G)(function(n,r){const t=ue(),{status:o}=de();return(0,l.jsx)(Q.m.div,b(u({ref:r,"data-status":o},n),{className:(0,S.cx)("chakra-alert__title",n.className),__css:t.title}))});je.displayName="AlertTitle";var we=(0,me.G)(function(n,r){const t=ue(),{status:o}=de(),s=u({display:"inline"},t.description);return(0,l.jsx)(Q.m.div,b(u({ref:r,"data-status":o},n),{className:(0,S.cx)("chakra-alert__desc",n.className),__css:s}))});we.displayName="AlertDescription";var lt=i(41107),ct={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},L=dt(ct);function dt(e){let n=e;const r=new Set,t=o=>{n=o(n),r.forEach(s=>s())};return{getState:()=>n,subscribe:o=>(r.add(o),()=>{t(()=>e),r.delete(o)}),removeToast:(o,s)=>{t(a=>b(u({},a),{[s]:a[s].filter(c=>c.id!=o)}))},notify:(o,s)=>{const a=ut(o,s),{position:c,id:f}=a;return t(h=>{var v,j;const w=c.includes("top")?[a,...(v=h[c])!=null?v:[]]:[...(j=h[c])!=null?j:[],a];return b(u({},h),{[c]:w})}),f},update:(o,s)=>{o&&t(a=>{const c=u({},a),{position:f,index:h}=pe(c,o);return f&&h!==-1&&(c[f][h]=b(u(u({},c[f][h]),s),{message:Ee(s)})),c})},closeAll:({positions:o}={})=>{t(s=>{const a=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:a).reduce((f,h)=>(f[h]=s[h].map(v=>b(u({},v),{requestClose:!0})),f),u({},s))})},close:o=>{t(s=>{const a=ae(s,o);return a?b(u({},s),{[a]:s[a].map(c=>c.id==o?b(u({},c),{requestClose:!0}):c)}):s})},isActive:o=>!!pe(L.getState(),o).position}}var Pe=0;function ut(e,n={}){var r,t;Pe+=1;const o=(r=n.id)!=null?r:Pe,s=(t=n.position)!=null?t:"bottom";return{id:o,message:e,position:s,duration:n.duration,onCloseComplete:n.onCloseComplete,onRequestRemove:()=>L.removeToast(String(o),s),status:n.status,requestClose:!1,containerStyle:n.containerStyle}}var mt=e=>{const{status:n,variant:r="solid",id:t,title:o,isClosable:s,onClose:a,description:c,colorScheme:f,icon:h}=e,v=t?{root:`toast-${t}`,title:`toast-${t}-title`,description:`toast-${t}-description`}:void 0;return(0,l.jsxs)(Te,{addRole:!1,status:n,variant:r,id:v==null?void 0:v.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:f,children:[(0,l.jsx)($e,{children:h}),(0,l.jsxs)(Q.m.div,{flex:"1",maxWidth:"100%",children:[o&&(0,l.jsx)(je,{id:v==null?void 0:v.title,children:o}),c&&(0,l.jsx)(we,{id:v==null?void 0:v.description,display:"block",children:c})]}),s&&(0,l.jsx)(lt.P,{size:"sm",onClick:a,position:"absolute",insetEnd:1,top:1})]})};function Ee(e={}){const{render:n,toastComponent:r=mt}=e;return o=>typeof n=="function"?n(u(u({},o),e)):(0,l.jsx)(r,u(u({},o),e))}function Lt(e,n){const r=o=>{var s;return b(u(u({},n),o),{position:getToastPlacement((s=o==null?void 0:o.position)!=null?s:n==null?void 0:n.position,e)})},t=o=>{const s=r(o),a=Ee(s);return L.notify(a,s)};return t.update=(o,s)=>{L.update(o,r(s))},t.promise=(o,s)=>{const a=t(b(u({},s.loading),{status:"loading",duration:null}));o.then(c=>t.update(a,u({status:"success",duration:5e3},runIfFn(s.success,c)))).catch(c=>t.update(a,u({status:"error",duration:5e3},runIfFn(s.error,c))))},t.closeAll=L.closeAll,t.close=L.close,t.isActive=L.isActive,t}var ht=i(41843),ft=i(33058),[vt,It]=(0,ce.k)({name:"ToastOptionsContext",strict:!1}),gt=e=>{const n=(0,d.useSyncExternalStore)(L.subscribe,L.getState,L.getState),{motionVariants:r,component:t=Ce,portalProps:o}=e,a=Object.keys(n).map(c=>{const f=n[c];return(0,l.jsx)("div",{role:"region","aria-live":"polite","aria-label":"Notifications",id:`chakra-toast-manager-${c}`,style:Fe(c),children:(0,l.jsx)(ht.M,{initial:!1,children:f.map(h=>(0,l.jsx)(t,u({motionVariants:r},h),h.id))})},c)});return(0,l.jsx)(ft.h,b(u({},o),{children:a}))},Ae=e=>function(a){var c=a,{children:r,theme:t=e,toastOptions:o}=c,s=fe(c,["children","theme","toastOptions"]);return(0,l.jsxs)(Ve,b(u({theme:t},s),{children:[(0,l.jsx)(vt,{value:o==null?void 0:o.defaultOptions,children:r}),(0,l.jsx)(gt,u({},o))]}))},yt=Ae(x.rS),Nt=Ae(x.wE),xt=i(63020),bt=i(61605),ee=i(62454),pt=function(n){return{".markdown":{a:{color:(0,ee.x)("brand.500","brand.300")(n)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5,bgColor:(0,ee.x)("gray.50","gray.800")(n),color:(0,ee.x)("brand.500","brand.300")(n),fontSize:"md"},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{th:{color:(0,ee.x)("gray.600","gray.400")(n)},"th, td":{borderColor:(0,ee.x)("gray.100","gray.700")(n)}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-of-type":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link":{visibility:"hidden"}}}}},St=pt,Ct=function(n){var r=n.children,t=n.config,o=n.brand,s=o===void 0?x.rS.colors.purple:o,a=(0,$.If)(),c=a.colorMode,f=(0,d.useState)(s),h=(0,Z.Z)(f,2),v=h[0],j=h[1],T=(0,d.useMemo)(function(){var C,G,z,p,K,te,R;return N((0,m.Z)((0,m.Z)({initialColorMode:c!=null?c:"system",useSystemColorMode:!1,styles:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.styles),(C=t==null?void 0:t.styles)!==null&&C!==void 0?C:{}),{},{global:function(he){var U,H,J;return(0,m.Z)((0,m.Z)((0,m.Z)({},(U=x.rS.styles.global)!==null&&U!==void 0?U:{}),(H=t==null||(J=t.styles)===null||J===void 0?void 0:J.global)!==null&&H!==void 0?H:{}),{},{body:{p:0}},St(he))}})},t!=null?t:{}),{},{fonts:Object.entries(x.rS.fonts).reduce(function(V,he){var U,H,J=(0,Z.Z)(he,2),ze=J[0],jt=J[1];return(0,m.Z)((0,m.Z)({},V),{},(0,I.Z)({},ze,"Inter Variable, "+((U=t==null||(H=t.fonts)===null||H===void 0?void 0:H[ze])!==null&&U!==void 0?U:jt)))},x.rS.fonts),colors:(0,m.Z)({brand:v},(G=t==null?void 0:t.colors)!==null&&G!==void 0?G:{}),space:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.space),(z=t==null?void 0:t.space)!==null&&z!==void 0?z:{}),{},{18:"4.5rem"}),sizes:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.sizes),(p=t==null?void 0:t.sizes)!==null&&p!==void 0?p:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.sizes.container),(K=t==null||(te=t.sizes)===null||te===void 0?void 0:te.container)!==null&&K!==void 0?K:{}),{},{xxl:"1392px"})}),breakpoints:(0,m.Z)((0,m.Z)((0,m.Z)({},x.rS.breakpoints),(R=t==null?void 0:t.breakpoints)!==null&&R!==void 0?R:{}),{},{xxl:"1392px"})}))},[t,c,v]),w=(0,d.useCallback)(function(C){(0,bt.Kn)(C)&&j(C),typeof C=="string"&&C in T.colors&&j(T.colors[C])},[t]);return d.createElement(yt,{theme:T},d.createElement(xt.f,{value:{brand:v,changeBrand:w,config:T}},r))},Mt=Ct,kt=i(10167),Tt=function(){var n,r=(0,M.pC)(),t=(n=(0,kt.Z)())!==null&&n!==void 0?n:{},o=t.brand,s=t.config;return r&&d.createElement(Mt,{brand:o,config:s},r)},$t=Tt},1298:function(y,g,i){i.d(g,{O:function(){return Z},u:function(){return x}});var d=i(27187),M=i(50959),I=i(11527),m=(0,M.createContext)({getDocument(){return document},getWindow(){return window}});m.displayName="EnvironmentContext";function Z({defer:$}={}){const[,S]=(0,M.useReducer)(k=>k+1,0);return(0,d.G)(()=>{$&&S()},[$]),(0,M.useContext)(m)}function x($){const{children:S,environment:k,disabled:Y}=$,B=(0,M.useRef)(null),W=(0,M.useMemo)(()=>k||{getDocument:()=>{var D,N;return(N=(D=B.current)==null?void 0:D.ownerDocument)!=null?N:document},getWindow:()=>{var D,N;return(N=(D=B.current)==null?void 0:D.ownerDocument.defaultView)!=null?N:window}},[k]),ne=!Y||!k;return(0,I.jsxs)(m.Provider,{value:W,children:[S,ne&&(0,I.jsx)("span",{id:"__chakra_env",hidden:!0,ref:B})]})}x.displayName="EnvironmentProvider"},57452:function(y,g,i){i.d(g,{r:function(){return M}});var d=i(50959);function M(I,m){const Z=(0,d.useRef)(!1),x=(0,d.useRef)(!1);(0,d.useEffect)(()=>{if(Z.current&&x.current)return I();x.current=!0},m),(0,d.useEffect)(()=>(Z.current=!0,()=>{Z.current=!1}),[])}},75658:function(y,g,i){i.d(g,{ZL:function(){return N},f6:function(){return Y},eC:function(){return D}});var d=i(37543),M=i(50959);function I(P={}){const{strict:E=!0,errorMessage:A="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:O}=P,l=(0,M.createContext)(void 0);l.displayName=O;function X(){var q;const oe=(0,M.useContext)(l);if(!oe&&E){const _=new Error(A);throw _.name="ContextError",(q=Error.captureStackTrace)==null||q.call(Error,_,X),_}return oe}return[l.Provider,X,l]}var m=i(83198),Z=i(65405),x=i(26788),$=i(86532),S=i(58518),k=i(11527);function Y(P){const{cssVarsRoot:E,theme:A,children:O}=P,l=(0,M.useMemo)(()=>(0,m.c0)(A),[A]);return(0,k.jsxs)($.a,{theme:l,children:[(0,k.jsx)(B,{root:E}),O]})}function B({root:P=":host, :root"}){const E=[P,"[data-theme]"].join(",");return(0,k.jsx)(S.xB,{styles:A=>({[E]:A.__cssVars})})}var[W,ne]=I({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function D(P){return I({name:`${P}StylesContext`,errorMessage:`useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${P} />" `})}function N(){const{colorMode:P}=(0,d.If)();return(0,k.jsx)(S.xB,{styles:E=>{const A=(0,Z.Wf)(E,"styles.global"),O=(0,x.Pu)(A,{theme:E,colorMode:P});return O?(0,m.iv)(O)(E):void 0}})}}}]);
}());