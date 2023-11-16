import{j as t}from"./jsx-runtime-f6d73c06.js";import{r as P,a as q}from"./index-8ee6c85d.js";import{s as u}from"./styled-components.browser.esm-b2422914.js";import{T as C}from"./Title-f1157f65.js";import{S}from"./Subhead-a9b0f057.js";import{T as B}from"./TextInput-4f595a28.js";import{e as N,r as V,i as I,P as E}from"./PasswordInput-40a62e81.js";import{B as c}from"./Button-c413f4f7.js";import{s as T,a as M,u as R,c as k,b as L,d as O,C as G,M as d}from"./TextField-d5382737.js";import{a as z}from"./inheritsLoose-9eefaa95.js";import{_ as F}from"./objectWithoutPropertiesLoose-4f48578a.js";import{m as W}from"./motion-f47e2267.js";import"./_commonjsHelpers-de833af9.js";import"./assertThisInitialized-081f9914.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-8bf7f4ad.js";const D=["className","component"];function H(e={}){const{themeId:n,defaultTheme:r,defaultClassName:o="MuiBox-root",generateClassName:a}=e,h=T("div",{shouldForwardProp:s=>s!=="theme"&&s!=="sx"&&s!=="as"})(M);return P.forwardRef(function(g,j){const i=R(r),p=N(g),{className:_,component:v="div"}=p,w=F(p,D);return t.jsx(h,z({as:v,ref:j,className:k(_,a?a(o):o),theme:n&&i[n]||i},w))})}const U=L(),A=H({themeId:O,defaultTheme:U,defaultClassName:"MuiBox-root",generateClassName:G.generate}),X=A;var m={},Y=I;Object.defineProperty(m,"__esModule",{value:!0});var b=m.default=void 0,$=Y(V()),J=t,K=(0,$.default)((0,J.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded");b=m.default=K;const Q=u.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  align-items: center;
`,Z=u.div`
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: center;
  gap: 17px;
`,ee=u.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: 258px;
  justify-content: center;
  gap: 24px;
`,te={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:375,bgcolor:"background.paper",border:"none",boxShadow:"0px 0px 25px 10px rgba(0, 0, 0, 0.10)"},ae=e=>{const[n,r]=q.useState(!1),o=()=>r(!0),a=()=>r(!1);return t.jsxs("div",{children:[t.jsx("button",{onClick:o,children:"Open modal"}),t.jsx(d,{...e,open:n,onClose:a,children:t.jsxs(X,{sx:te,children:[t.jsxs(Q,{...e,children:[t.jsx(C,{textnode:e.titlecontent}),t.jsx(W.div,{whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},style:{originX:.5,originY:.5,height:24},children:t.jsx(b,{onClick:a,sx:{cursor:"pointer"}})})]}),t.jsxs(ee,{...e,children:[t.jsx(S,{textnode:e.subheadcontent}),t.jsx(B,{type:e.emailtype,label:e.emaillabel}),t.jsx(E,{type:e.passtype,label:e.passlabel})]}),t.jsxs(Z,{...e,children:[t.jsx(c,{textnode:e.textnode,primary:e.primary}),t.jsx(c,{textnode:e.textnodebtn,primary:e.primarybtn})]})]})})]})};try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},subheadcontent:{defaultValue:null,description:"",name:"subheadcontent",required:!0,type:{name:"string"}},titlecontent:{defaultValue:null,description:"",name:"titlecontent",required:!0,type:{name:"string"}},emailtype:{defaultValue:null,description:"",name:"emailtype",required:!0,type:{name:"string"}},emaillabel:{defaultValue:null,description:"",name:"emaillabel",required:!0,type:{name:"string"}},passlabel:{defaultValue:null,description:"",name:"passlabel",required:!0,type:{name:"string"}},passtype:{defaultValue:null,description:"",name:"passtype",required:!0,type:{name:"string"}},primarybtn:{defaultValue:null,description:"",name:"primarybtn",required:!0,type:{name:"number"}},textnodebtn:{defaultValue:null,description:"",name:"textnodebtn",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"number"}},textnode:{defaultValue:null,description:"",name:"textnode",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:"ButtonPropsI"}}}}}catch{}const je={component:ae},l={args:{titlecontent:"Welcome Back",subheadcontent:"Please complete Email and Password",emailtype:"email",emaillabel:"Email",passlabel:"Password",passtype:"password",primarybtn:1,textnodebtn:"LOG IN",primary:0,textnode:"SIGN UP"}};var x,y,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const _e=["FirstStory"];export{l as FirstStory,_e as __namedExportsOrder,je as default};
//# sourceMappingURL=Modal.stories-1348cfde.js.map
