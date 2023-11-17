import{j as a}from"./jsx-runtime-f6d73c06.js";import{r as y,a as K}from"./index-8ee6c85d.js";import{s as V}from"./styled-components.browser.esm-b2422914.js";import{T as Q}from"./Title-f1157f65.js";import{S as Z}from"./Subhead-a9b0f057.js";import{T as ee}from"./TextInput-0ac86d21.js";import{e as te,P as ne}from"./PasswordInput-58680172.js";import{B as q}from"./Button-46951f7c.js";import{s as re,a as ie,u as ae,c as se,b as oe,d as le,C as de,e as ue,f as ce,o as O,g as me,h as pe,r as fe,i as I,M as S}from"./TextField-255f9f16.js";import{a as g}from"./inheritsLoose-9eefaa95.js";import{_ as M}from"./objectWithoutPropertiesLoose-4f48578a.js";import{m as xe}from"./motion-f47e2267.js";import"./_commonjsHelpers-de833af9.js";import"./assertThisInitialized-081f9914.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-8bf7f4ad.js";const ye=["className","component"];function he(t={}){const{themeId:i,defaultTheme:u,defaultClassName:n="MuiBox-root",generateClassName:r}=t,x=re("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(ie);return y.forwardRef(function(c,s){const d=ae(u),b=te(c),{className:f,component:E="div"}=b,j=M(b,ye);return a.jsx(x,g({as:E,ref:s,className:se(f,r?r(n):n),theme:i&&d[i]||d},j))})}const ge=oe(),be=he({themeId:le,defaultTheme:ge,defaultClassName:"MuiBox-root",generateClassName:de.generate}),Ee=be,we=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Te(t,i,u){const n=i.getBoundingClientRect(),r=u&&u.getBoundingClientRect(),x=O(i);let m;if(i.fakeTransform)m=i.fakeTransform;else{const s=x.getComputedStyle(i);m=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let l=0,c=0;if(m&&m!=="none"&&typeof m=="string"){const s=m.split("(")[1].split(")")[0].split(",");l=parseInt(s[4],10),c=parseInt(s[5],10)}return t==="left"?r?`translateX(${r.right+l-n.left}px)`:`translateX(${x.innerWidth+l-n.left}px)`:t==="right"?r?`translateX(-${n.right-r.left-l}px)`:`translateX(-${n.left+n.width-l}px)`:t==="up"?r?`translateY(${r.bottom+c-n.top}px)`:`translateY(${x.innerHeight+c-n.top}px)`:r?`translateY(-${n.top-r.top+n.height-c}px)`:`translateY(-${n.top+n.height-c}px)`}function je(t){return typeof t=="function"?t():t}function w(t,i,u){const n=je(u),r=Te(t,i,n);r&&(i.style.webkitTransform=r,i.style.transform=r)}const Ce=y.forwardRef(function(i,u){const n=ue(),r={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},x={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:m,appear:l=!0,children:c,container:s,direction:d="down",easing:b=r,in:f,onEnter:E,onEntered:j,onEntering:k,onExit:v,onExited:_,onExiting:W,style:C,timeout:P=x,TransitionComponent:z=me}=i,X=M(i,we),p=y.useRef(null),Y=ce(c.ref,p,u),h=e=>o=>{e&&(o===void 0?e(p.current):e(p.current,o))},F=h((e,o)=>{w(d,e,s),fe(e),E&&E(e,o)}),G=h((e,o)=>{const R=I({timeout:P,style:C,easing:b},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",g({},R)),e.style.transition=n.transitions.create("transform",g({},R)),e.style.webkitTransform="none",e.style.transform="none",k&&k(e,o)}),H=h(j),U=h(W),A=h(e=>{const o=I({timeout:P,style:C,easing:b},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",o),e.style.transition=n.transitions.create("transform",o),w(d,e,s),v&&v(e)}),D=h(e=>{e.style.webkitTransition="",e.style.transition="",_&&_(e)}),J=e=>{m&&m(p.current,e)},B=y.useCallback(()=>{p.current&&w(d,p.current,s)},[d,s]);return y.useEffect(()=>{if(f||d==="down"||d==="right")return;const e=pe(()=>{p.current&&w(d,p.current,s)}),o=O(p.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}},[d,f,s]),y.useEffect(()=>{f||B()},[f,B]),a.jsx(z,g({nodeRef:p,onEnter:F,onEntered:H,onEntering:G,onExit:A,onExited:D,onExiting:U,addEndListener:J,appear:l,in:f,timeout:P},X,{children:(e,o)=>y.cloneElement(c,g({ref:Y,style:g({visibility:e==="exited"&&!f?"hidden":void 0},C,c.props.style)},o))}))}),Pe=Ce,Se=""+new URL("close-8a21ae1d.svg",import.meta.url).href,Ve=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`,ke=V.div`
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: center;
  gap: 24px;
`,ve=V.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 21px 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: 253px;
  justify-content: center;
  gap: 24px;
`,_e={position:"absolute",width:375,bgcolor:"background.paper",border:"none",boxShadow:"0px 0px 25px 10px rgba(0, 0, 0, 0.10)"},Be=t=>{const[i,u]=K.useState(!1),n=()=>u(!0),r=()=>u(!1);return a.jsxs("div",{children:[a.jsx("button",{onClick:n,children:"Open modal"}),a.jsx(S,{...t,open:i,onClose:r,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsx(Pe,{in:i,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:a.jsxs(Ee,{sx:_e,children:[a.jsxs(Ve,{...t,children:[a.jsx(Q,{textnode:t.titlecontent}),a.jsx(xe.div,{whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},style:{originX:.5,originY:.5,height:24},children:a.jsx("img",{src:Se,onClick:r,style:{cursor:"pointer"}})})]}),a.jsxs(ve,{...t,children:[a.jsx(Z,{textnode:t.subheadcontent}),a.jsx(ee,{type:t.emailtype,label:t.emaillabel}),a.jsx(ne,{type:t.passtype,label:t.passlabel})]}),a.jsxs(ke,{...t,children:[a.jsx(q,{textnode:t.textnode,primary:t.primary}),a.jsx(q,{textnode:t.textnodebtn,primary:t.primarybtn})]})]})})})]})};try{S.displayName="Modal",S.__docgenInfo={description:"",displayName:"Modal",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},subheadcontent:{defaultValue:null,description:"",name:"subheadcontent",required:!0,type:{name:"string"}},titlecontent:{defaultValue:null,description:"",name:"titlecontent",required:!0,type:{name:"string"}},emailtype:{defaultValue:null,description:"",name:"emailtype",required:!0,type:{name:"string"}},emaillabel:{defaultValue:null,description:"",name:"emaillabel",required:!0,type:{name:"string"}},passlabel:{defaultValue:null,description:"",name:"passlabel",required:!0,type:{name:"string"}},passtype:{defaultValue:null,description:"",name:"passtype",required:!0,type:{name:"string"}},primarybtn:{defaultValue:null,description:"",name:"primarybtn",required:!0,type:{name:"number"}},textnodebtn:{defaultValue:null,description:"",name:"textnodebtn",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"number"}},textnode:{defaultValue:null,description:"",name:"textnode",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:"ButtonPropsI"}}}}}catch{}const Ae={component:Be},T={args:{titlecontent:"Welcome Back",subheadcontent:"Please complete Email and Password",emailtype:"email",emaillabel:"Email",passlabel:"Password",passtype:"password",primarybtn:1,textnodebtn:"LOG IN",primary:0,textnode:"SIGN UP"}};var N,$,L;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    //👇 The args you need here will depend on your component
    titlecontent: 'Welcome Back',
    subheadcontent: 'Please complete Email and Password',
    emailtype: 'email',
    emaillabel: 'Email',
    passlabel: 'Password',
    passtype: 'password',
    primarybtn: 1,
    textnodebtn: 'LOG IN',
    primary: 0,
    textnode: 'SIGN UP'
  }
}`,...(L=($=T.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const De=["FirstStory"];export{T as FirstStory,De as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Modal.stories-7d39579e.js.map
