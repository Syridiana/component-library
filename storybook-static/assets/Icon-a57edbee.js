import{j as J}from"./jsx-runtime-f6d73c06.js";import{_ as Z,s as we}from"./styled-components.browser.esm-b2422914.js";import{_ as Ee}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as ge,a as K}from"./inheritsLoose-9eefaa95.js";import{p as f}from"./index-9d475cdf.js";import{r as T}from"./index-8ee6c85d.js";import{m as ye}from"./motion-f47e2267.js";/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ee=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Se=/\\([\u000b\u0020-\u00ff])/g,be=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,xe=Ae;function Ae(n){if(!n)throw new TypeError("argument string is required");var e=typeof n=="object"?qe(n):n;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var a=e.indexOf(";"),r=a!==-1?e.slice(0,a).trim():e.trim();if(!be.test(r))throw new TypeError("invalid media type");var t=new je(r.toLowerCase());if(a!==-1){var i,o,s;for(ee.lastIndex=a;o=ee.exec(e);){if(o.index!==a)throw new TypeError("invalid parameter format");a+=o[0].length,i=o[1].toLowerCase(),s=o[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==-1&&(s=s.replace(Se,"$1"))),t.parameters[i]=s}if(a!==e.length)throw new TypeError("invalid parameter format")}return t}function qe(n){var e;if(typeof n.getHeader=="function"?e=n.getHeader("content-type"):typeof n.headers=="object"&&(e=n.headers&&n.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function je(n){this.parameters=Object.create(null),this.type=n}var L=new Map,se=function(e){return e.cloneNode(!0)},te=function(){return window.location.protocol==="file:"},ue=function(e,a,r){var t=new XMLHttpRequest;t.onreadystatechange=function(){try{if(!/\.svg/i.test(e)&&t.readyState===2){var i=t.getResponseHeader("Content-Type");if(!i)throw new Error("Content type not found");var o=xe(i).type;if(!(o==="image/svg+xml"||o==="text/plain"))throw new Error("Invalid content type: ".concat(o))}if(t.readyState===4){if(t.status===404||t.responseXML===null)throw new Error(te()?"Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver.":"Unable to load SVG file: "+e);if(t.status===200||te()&&t.status===0)r(null,t);else throw new Error("There was a problem injecting the SVG: "+t.status+" "+t.statusText)}}catch(s){if(t.abort(),s instanceof Error)r(s,t);else throw s}},t.open("GET",e),t.withCredentials=a,t.overrideMimeType&&t.overrideMimeType("text/xml"),t.send()},A={},re=function(e,a){A[e]=A[e]||[],A[e].push(a)},Ce=function(e){for(var a=function(o,s){setTimeout(function(){if(Array.isArray(A[e])){var l=L.get(e),p=A[e][o];l instanceof SVGSVGElement&&p(null,se(l)),l instanceof Error&&p(l),o===A[e].length-1&&delete A[e]}},0)},r=0,t=A[e].length;r<t;r++)a(r)},Ie=function(e,a,r){if(L.has(e)){var t=L.get(e);if(t===void 0){re(e,r);return}if(t instanceof SVGSVGElement){r(null,se(t));return}}L.set(e,void 0),re(e,r),ue(e,a,function(i,o){var s;i?L.set(e,i):((s=o.responseXML)===null||s===void 0?void 0:s.documentElement)instanceof SVGSVGElement&&L.set(e,o.responseXML.documentElement),Ce(e)})},Re=function(e,a,r){ue(e,a,function(t,i){var o;t?r(t):((o=i.responseXML)===null||o===void 0?void 0:o.documentElement)instanceof SVGSVGElement&&r(null,i.responseXML.documentElement)})},Ge=0,_e=function(){return++Ge},y=[],ne={},We="http://www.w3.org/2000/svg",$="http://www.w3.org/1999/xlink",ie=function(e,a,r,t,i,o,s){var l=e.getAttribute("data-src")||e.getAttribute("src");if(!l){s(new Error("Invalid data-src or src attribute"));return}if(y.indexOf(e)!==-1){y.splice(y.indexOf(e),1),e=null;return}y.push(e),e.setAttribute("src","");var p=t?Ie:Re;p(l,i,function(G,u){if(!u){y.splice(y.indexOf(e),1),e=null,s(G);return}var q=e.getAttribute("id");q&&u.setAttribute("id",q);var x=e.getAttribute("title");x&&u.setAttribute("title",x);var j=e.getAttribute("width");j&&u.setAttribute("width",j);var C=e.getAttribute("height");C&&u.setAttribute("height",C);var m=Array.from(new Set(Z(Z(Z([],(u.getAttribute("class")||"").split(" "),!0),["injected-svg"],!1),(e.getAttribute("class")||"").split(" "),!0))).join(" ").trim();u.setAttribute("class",m);var d=e.getAttribute("style");d&&u.setAttribute("style",d),u.setAttribute("data-src",l);var w=[].filter.call(e.attributes,function(v){return/^data-\w[\w-]*$/.test(v.name)});if(Array.prototype.forEach.call(w,function(v){v.name&&v.value&&u.setAttribute(v.name,v.value)}),r){var E={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],path:[],pattern:["fill","stroke"],radialGradient:["fill","stroke"]},_,h,S,c,b;Object.keys(E).forEach(function(v){_=v,S=E[v],h=u.querySelectorAll(_+"[id]");for(var de=function(P,Oe){c=h[P].id,b=c+"-"+_e();var M;Array.prototype.forEach.call(S,function(Q){M=u.querySelectorAll("["+Q+'*="'+c+'"]');for(var N=0,me=M.length;N<me;N++){var Y=M[N].getAttribute(Q);Y&&!Y.match(new RegExp('url\\("?#'+c+'"?\\)'))||M[N].setAttribute(Q,"url(#"+b+")")}});for(var U=u.querySelectorAll("[*|href]"),D=[],k=0,he=U.length;k<he;k++){var B=U[k].getAttributeNS($,"href");B&&B.toString()==="#"+h[P].id&&D.push(U[k])}for(var z=0,ve=D.length;z<ve;z++)D[z].setAttributeNS($,"href","#"+b);h[P].id=b},H=0,pe=h.length;H<pe;H++)de(H)})}u.removeAttribute("xmlns:a");for(var g=u.querySelectorAll("script"),I=[],W,R,V=0,ce=g.length;V<ce;V++)R=g[V].getAttribute("type"),(!R||R==="application/ecmascript"||R==="application/javascript"||R==="text/javascript")&&(W=g[V].innerText||g[V].textContent,W&&I.push(W),u.removeChild(g[V]));if(I.length>0&&(a==="always"||a==="once"&&!ne[l])){for(var X=0,fe=I.length;X<fe;X++)new Function(I[X])(window);ne[l]=!0}var le=u.querySelectorAll("style");if(Array.prototype.forEach.call(le,function(v){v.textContent+=""}),u.setAttribute("xmlns",We),u.setAttribute("xmlns:xlink",$),o(u),!e.parentNode){y.splice(y.indexOf(e),1),e=null,s(new Error("Parent node is null"));return}e.parentNode.replaceChild(u,e),y.splice(y.indexOf(e),1),e=null,s(null,u)})},Ve=function(e,a){var r=a===void 0?{}:a,t=r.afterAll,i=t===void 0?function(){}:t,o=r.afterEach,s=o===void 0?function(){}:o,l=r.beforeEach,p=l===void 0?function(){}:l,G=r.cacheRequests,u=G===void 0?!0:G,q=r.evalScripts,x=q===void 0?"never":q,j=r.httpRequestWithCredentials,C=j===void 0?!1:j,m=r.renumerateIRIElements,d=m===void 0?!0:m;if(e&&"length"in e)for(var w=0,E=0,_=e.length;E<_;E++)ie(e[E],x,d,u,C,p,function(h,S){s(h,S),e&&"length"in e&&e.length===++w&&i(w)});else e?ie(e,x,d,u,C,p,function(h,S){s(h,S),i(1),e=null}):i(0)},Le=function(e){var a=(e==null?void 0:e.ownerDocument)||document;return a.defaultView||window},Te=function(e,a){for(var r in e)if(!(r in a))return!0;for(var t in a)if(e[t]!==a[t])return!0;return!1},Me=["afterInjection","beforeInjection","desc","evalScripts","fallback","httpRequestWithCredentials","loading","renumerateIRIElements","src","title","useRequestCache","wrapper"],O="http://www.w3.org/2000/svg",ae="http://www.w3.org/1999/xlink",F=function(n){ge(e,n);function e(){for(var r,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return r=n.call.apply(n,[this].concat(i))||this,r.initialState={hasError:!1,isLoading:!0},r.state=r.initialState,r._isMounted=!1,r.reactWrapper=void 0,r.nonReactWrapper=void 0,r.refCallback=function(s){r.reactWrapper=s},r}var a=e.prototype;return a.renderSVG=function(){var t=this;if(this.reactWrapper instanceof Le(this.reactWrapper).Node){var i=this.props,o=i.desc,s=i.evalScripts,l=i.httpRequestWithCredentials,p=i.renumerateIRIElements,G=i.src,u=i.title,q=i.useRequestCache,x=this.props.onError,j=this.props.beforeInjection,C=this.props.afterInjection,m=this.props.wrapper,d,w;m==="svg"?(d=document.createElementNS(O,m),d.setAttribute("xmlns",O),d.setAttribute("xmlns:xlink",ae),w=document.createElementNS(O,m)):(d=document.createElement(m),w=document.createElement(m)),d.appendChild(w),w.dataset.src=G,this.nonReactWrapper=this.reactWrapper.appendChild(d);var E=function(c){if(t.removeSVG(),!t._isMounted){x(c);return}t.setState(function(){return{hasError:!0,isLoading:!1}},function(){x(c)})},_=function(c,b){if(c){E(c);return}t._isMounted&&t.setState(function(){return{isLoading:!1}},function(){try{C(b)}catch(g){E(g)}})},h=function(c){if(c.setAttribute("role","img"),o){var b=c.querySelector(":scope > desc");b&&c.removeChild(b);var g=document.createElement("desc");g.innerHTML=o,c.prepend(g)}if(u){var I=c.querySelector(":scope > title");I&&c.removeChild(I);var W=document.createElement("title");W.innerHTML=u,c.prepend(W)}try{j(c)}catch(R){E(R)}};Ve(w,{afterEach:_,beforeEach:h,cacheRequests:q,evalScripts:s,httpRequestWithCredentials:l,renumerateIRIElements:p})}},a.removeSVG=function(){var t;(t=this.nonReactWrapper)!=null&&t.parentNode&&(this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper),this.nonReactWrapper=null)},a.componentDidMount=function(){this._isMounted=!0,this.renderSVG()},a.componentDidUpdate=function(t){var i=this;Te(K({},t),this.props)&&this.setState(function(){return i.initialState},function(){i.removeSVG(),i.renderSVG()})},a.componentWillUnmount=function(){this._isMounted=!1,this.removeSVG()},a.render=function(){var t=this.props;t.afterInjection,t.beforeInjection,t.desc,t.evalScripts;var i=t.fallback;t.httpRequestWithCredentials;var o=t.loading;t.renumerateIRIElements,t.src,t.title,t.useRequestCache;var s=t.wrapper,l=Ee(t,Me),p=s;return T.createElement(p,K({},l,{ref:this.refCallback},s==="svg"?{xmlns:O,xmlnsXlink:ae}:{}),this.state.isLoading&&o&&T.createElement(o,null),this.state.hasError&&i&&T.createElement(i,null))},e}(T.Component);F.defaultProps={afterInjection:function(){},beforeInjection:function(){},desc:"",evalScripts:"never",fallback:null,httpRequestWithCredentials:!1,loading:null,onError:function(){},renumerateIRIElements:!0,title:"",useRequestCache:!0,wrapper:"div"};F.propTypes={afterInjection:f.func,beforeInjection:f.func,desc:f.string,evalScripts:f.oneOf(["always","once","never"]),fallback:f.oneOfType([f.func,f.object,f.string]),httpRequestWithCredentials:f.bool,loading:f.oneOfType([f.func,f.object,f.string]),onError:f.func,renumerateIRIElements:f.bool,src:f.string.isRequired,title:f.string,useRequestCache:f.bool,wrapper:f.oneOf(["div","span","svg"])};const ke=we(F).attrs(n=>({src:n.favouriteicon}))`
  width: 24px;
  height: 24px;
  cursor: pointer;

  .st0 {
    fill: ${n=>n.color}
  }

`,oe=({color:n,favouriteicon:e},{...a})=>{const[r,t]=T.useState(n),[i,o]=T.useState(!1);return J.jsx(ye.div,{whileHover:{scale:1.1,rotate:15},transition:{type:"spring",stiffness:400,damping:10},whileTap:{scale:.9},children:J.jsx(ke,{...a,color:r,favouriteicon:e,onClick:()=>{o(!i),t(i?n:"#EB5757")}})})};try{oe.displayName="Icon",oe.__docgenInfo={description:"",displayName:"Icon",props:{favouriteicon:{defaultValue:null,description:"",name:"favouriteicon",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}export{oe as I};
//# sourceMappingURL=Icon-a57edbee.js.map