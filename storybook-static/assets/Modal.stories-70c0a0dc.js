import{j as t}from"./jsx-runtime-f6d73c06.js";import{r as P,a as _}from"./index-8ee6c85d.js";import{s as m}from"./styled-components.browser.esm-b2422914.js";import{T as S}from"./Title-f1157f65.js";import{S as q}from"./Subhead-a9b0f057.js";import{T as B}from"./TextInput-4f595a28.js";import{e as C,P as N}from"./PasswordInput-7dfd2225.js";import{B as u}from"./Button-f4a77c4a.js";import{s as V,a as v,u as I,c as T,b as E,d as M,C as k,M as d}from"./TextField-d5382737.js";import{a as O}from"./inheritsLoose-9eefaa95.js";import{_ as G}from"./objectWithoutPropertiesLoose-4f48578a.js";import{m as R}from"./motion-f47e2267.js";import"./_commonjsHelpers-de833af9.js";import"./assertThisInitialized-081f9914.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-8bf7f4ad.js";const F=["className","component"];function L(e={}){const{themeId:a,defaultTheme:r,defaultClassName:o="MuiBox-root",generateClassName:n}=e,b=V("div",{shouldForwardProp:s=>s!=="theme"&&s!=="sx"&&s!=="as"})(v);return P.forwardRef(function(f,h){const i=I(r),p=C(f),{className:g,component:j="div"}=p,w=G(p,F);return t.jsx(b,O({as:j,ref:h,className:T(g,n?n(o):o),theme:a&&i[a]||i},w))})}const W=E(),z=L({themeId:M,defaultTheme:W,defaultClassName:"MuiBox-root",generateClassName:k.generate}),H=z,U=""+new URL("close-8a21ae1d.svg",import.meta.url).href,A=m.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`,D=m.div`
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: center;
  gap: 24px;
`,X=m.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 21px 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: 253px;
  justify-content: center;
  gap: 24px;
`,Y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:375,bgcolor:"background.paper",border:"none",boxShadow:"0px 0px 25px 10px rgba(0, 0, 0, 0.10)"},$=e=>{const[a,r]=_.useState(!1),o=()=>r(!0),n=()=>r(!1);return t.jsxs("div",{children:[t.jsx("button",{onClick:o,children:"Open modal"}),t.jsx(d,{...e,open:a,onClose:n,children:t.jsxs(H,{sx:Y,children:[t.jsxs(A,{...e,children:[t.jsx(S,{textnode:e.titlecontent}),t.jsx(R.div,{whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},style:{originX:.5,originY:.5,height:24},children:t.jsx("img",{src:U,onClick:n,style:{cursor:"pointer"}})})]}),t.jsxs(X,{...e,children:[t.jsx(q,{textnode:e.subheadcontent}),t.jsx(B,{type:e.emailtype,label:e.emaillabel}),t.jsx(N,{type:e.passtype,label:e.passlabel})]}),t.jsxs(D,{...e,children:[t.jsx(u,{textnode:e.textnode,primary:e.primary}),t.jsx(u,{textnode:e.textnodebtn,primary:e.primarybtn})]})]})})]})};try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},subheadcontent:{defaultValue:null,description:"",name:"subheadcontent",required:!0,type:{name:"string"}},titlecontent:{defaultValue:null,description:"",name:"titlecontent",required:!0,type:{name:"string"}},emailtype:{defaultValue:null,description:"",name:"emailtype",required:!0,type:{name:"string"}},emaillabel:{defaultValue:null,description:"",name:"emaillabel",required:!0,type:{name:"string"}},passlabel:{defaultValue:null,description:"",name:"passlabel",required:!0,type:{name:"string"}},passtype:{defaultValue:null,description:"",name:"passtype",required:!0,type:{name:"string"}},primarybtn:{defaultValue:null,description:"",name:"primarybtn",required:!0,type:{name:"number"}},textnodebtn:{defaultValue:null,description:"",name:"textnodebtn",required:!0,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"number"}},textnode:{defaultValue:null,description:"",name:"textnode",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:"ButtonPropsI"}}}}}catch{}const ce={component:$},l={args:{titlecontent:"Welcome Back",subheadcontent:"Please complete Email and Password",emailtype:"email",emaillabel:"Email",passlabel:"Password",passtype:"password",primarybtn:1,textnodebtn:"LOG IN",primary:0,textnode:"SIGN UP"}};var c,x,y;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const xe=["FirstStory"];export{l as FirstStory,xe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Modal.stories-70c0a0dc.js.map
