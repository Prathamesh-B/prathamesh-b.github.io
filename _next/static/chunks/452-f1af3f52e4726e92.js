(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{6435:function(e,t,i){"use strict";i.d(t,{F:function(){return u},f:function(){return d}});var n=i(2265);let r=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=(0,n.createContext)(void 0),a={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,n.useContext)(o))&&void 0!==e?e:a},d=e=>(0,n.useContext)(o)?n.createElement(n.Fragment,null,e.children):n.createElement(p,e),c=["light","dark"],p=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:a="theme",themes:u=c,defaultTheme:d=i?"system":"light",attribute:p="data-theme",value:v,children:y,nonce:w})=>{let[E,b]=(0,n.useState)(()=>g(a,d)),[P,A]=(0,n.useState)(()=>g(a)),S=v?Object.values(v):u,x=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&i&&(n=m());let l=v?v[n]:n,o=t?f():null,a=document.documentElement;if("class"===p?(a.classList.remove(...S),l&&a.classList.add(l)):l?a.setAttribute(p,l):a.removeAttribute(p),s){let e=r.includes(d)?d:null,t=r.includes(n)?n:e;a.style.colorScheme=t}null==o||o()},[]),_=(0,n.useCallback)(e=>{b(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),M=(0,n.useCallback)(t=>{let n=m(t);A(n),"system"===E&&i&&!e&&x("system")},[E,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(M),M(e),()=>e.removeListener(M)},[M]),(0,n.useEffect)(()=>{let e=e=>{e.key===a&&_(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[_]),(0,n.useEffect)(()=>{x(null!=e?e:E)},[e,E]);let O=(0,n.useMemo)(()=>({theme:E,setTheme:_,forcedTheme:e,resolvedTheme:"system"===E?P:E,themes:i?[...u,"system"]:u,systemTheme:i?P:void 0}),[E,_,e,P,i,u]);return n.createElement(o.Provider,{value:O},n.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:i,enableColorScheme:s,storageKey:a,themes:u,defaultTheme:d,attribute:p,value:v,children:y,attrs:S,nonce:w}),y)},h=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:i,enableSystem:s,enableColorScheme:o,defaultTheme:a,value:u,attrs:d,nonce:c})=>{let p="system"===a,h="class"===i?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${i}',s='setAttribute';`,g=o?r.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=(e,t=!1,n=!0)=>{let l=u?u[e]:e,s=t?e+"|| ''":`'${l}'`,a="";return o&&n&&!t&&r.includes(e)&&(a+=`d.style.colorScheme = '${e}';`),"class"===i?a+=t||l?`c.add(${s})`:"null":l&&(a+=`d[s](n,${s})`),a},m=e?`!function(){${h}${f(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${p})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${f(u?"x[e]":"e",!0)}}${p?"":"else{"+f(a,!1,!1)+"}"}${g}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${f(u?"x[e]":"e",!0)}}else{${f(a,!1,!1)};}${g}}catch(t){}}();`;return n.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:m}})},()=>!0),g=(e,t)=>{let i;if(!s){try{i=localStorage.getItem(e)||void 0}catch(e){}return i||t}},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},m=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},3222:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=i(1024),r=i(8533),l=r._(i(2265)),s=i(4887),o=n._(i(2912)),a=i(2301),u=i(7709),d=i(9469);i(7873);let c=i(2706),p=n._(i(5033)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,i,n,r,l){let s=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===s)return;e["data-loaded-src"]=s;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function f(e){let[t,i]=l.version.split("."),n=parseInt(t,10),r=parseInt(i,10);return n>18||18===n&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,l.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:r,height:s,width:o,decoding:a,className:u,style:d,fetchPriority:c,placeholder:p,loading:h,unoptimized:m,fill:v,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:E,setShowAltText:b,onLoad:P,onError:A,...S}=e;return l.default.createElement("img",{...S,...f(c),loading:h,width:o,height:s,decoding:a,"data-nimg":v?"fill":"1",className:u,style:d,sizes:r,srcSet:n,src:i,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(A&&(e.src=e.src),e.complete&&g(e,p,y,w,E,m))},[i,p,y,w,E,A,m,t]),onLoad:e=>{let t=e.currentTarget;g(t,p,y,w,E,m)},onError:e=>{b(!0),"empty"!==p&&E(!0),A&&A(e)}})});function v(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...f(i.fetchPriority)};return t&&s.preload?((0,s.preload)(i.src,n),null):l.default.createElement(o.default,null,l.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...n}))}let y=(0,l.forwardRef)((e,t)=>{let i=(0,l.useContext)(c.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),r=(0,l.useMemo)(()=>{let e=h||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:s,onLoadingComplete:o}=e,g=(0,l.useRef)(s);(0,l.useEffect)(()=>{g.current=s},[s]);let f=(0,l.useRef)(o);(0,l.useEffect)(()=>{f.current=o},[o]);let[y,w]=(0,l.useState)(!1),[E,b]=(0,l.useState)(!1),{props:P,meta:A}=(0,a.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:y,showAltText:E});return l.default.createElement(l.default.Fragment,null,l.default.createElement(m,{...P,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:g,onLoadingCompleteRef:f,setBlurComplete:w,setShowAltText:b,ref:t}),A.priority?l.default.createElement(v,{isAppRouter:!i,imgAttributes:P}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7555:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return l}});let n=i(1024),r=n._(i(2265)),l=r.default.createContext({})},8551:function(e,t){"use strict";function i(e){let{ampFirst:t=!1,hybrid:i=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||i&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return i}})},2301:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),i(7873);let n=i(9540),r=i(7709);function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var i;let o,a,u,{src:d,sizes:c,unoptimized:p=!1,priority:h=!1,loading:g,className:f,quality:m,width:v,height:y,fill:w=!1,style:E,onLoad:b,onLoadingComplete:P,placeholder:A="empty",blurDataURL:S,fetchPriority:x,layout:_,objectFit:M,objectPosition:O,lazyBoundary:C,lazyRoot:L,...I}=e,{imgConf:k,showAltText:z,blurComplete:j,defaultLoader:$}=t,T=k||r.imageConfigDefault;if("allSizes"in T)o=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);o={...T,allSizes:e,deviceSizes:t}}let R=I.loader||$;delete I.loader,delete I.srcSet;let Y="__next_img_default"in R;if(Y){if("custom"===o.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=R;R=t=>{let{config:i,...n}=t;return e(n)}}if(_){"fill"===_&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!c&&(c=t)}let X="",D=s(v),U=s(y);if("object"==typeof(i=d)&&(l(i)||void 0!==i.src)){let e=l(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,X=e.src,!w){if(D||U){if(D&&!U){let t=D/e.width;U=Math.round(e.height*t)}else if(!D&&U){let t=U/e.height;D=Math.round(e.width*t)}}else D=e.width,U=e.height}}let W=!h&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:X)||d.startsWith("data:")||d.startsWith("blob:"))&&(p=!0,W=!1),o.unoptimized&&(p=!0),Y&&d.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(p=!0),h&&(x="high");let N=s(m),F=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},z?{}:{color:"transparent"},E),G=j||"empty"===A?null:"blur"===A?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:a,blurHeight:u,blurDataURL:S||"",objectFit:F.objectFit})+'")':'url("'+A+'")',B=G?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:G}:{},V=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:l,sizes:s,loader:o}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let l=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:l,kind:"x"}}(t,r,s),d=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,n)=>o({config:t,src:i,quality:l,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:o({config:t,src:i,quality:l,width:a[d]})}}({config:o,src:d,unoptimized:p,width:D,quality:N,sizes:c,loader:R}),H={...I,loading:W?"lazy":g,fetchPriority:x,width:D,height:U,decoding:"async",className:f,style:{...F,...B},sizes:V.sizes,srcSet:V.srcSet,src:V.src},q={unoptimized:p,priority:h,placeholder:A,fill:w};return{props:H,meta:q}}},2912:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{defaultHead:function(){return d},default:function(){return g}});let n=i(1024),r=i(8533),l=r._(i(2265)),s=n._(i(2378)),o=i(7555),a=i(1330),u=i(8551);function d(e){void 0===e&&(e=!1);let t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}i(7873);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:i}=t;return e.reduce(c,[]).reverse().concat(d(i).reverse()).filter(function(){let e=new Set,t=new Set,i=new Set,n={};return r=>{let l=!0,s=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){s=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?l=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?l=!1:t.add(r.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)i.has(t)?l=!1:i.add(t);else{let e=r.props[t],i=n[t]||new Set;("name"!==t||!s)&&i.has(e)?l=!1:(i.add(e),n[t]=i)}}}}return l}}()).reverse().map((e,t)=>{let n=e.key||t;if(!i&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,i=(0,l.useContext)(o.AmpStateContext),n=(0,l.useContext)(a.HeadManagerContext);return l.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(i)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9540:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:l,objectFit:s}=e,o=n?40*n:t,a=r?40*r:i,u=o&&a?"viewBox='0 0 "+o+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+l+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},9469:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let n=i(1024),r=n._(i(2265)),l=i(7709),s=r.default.createContext(l.imageConfigDefault)},7709:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return n}});let i=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},1295:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return u},unstable_getImgProps:function(){return a}});let n=i(1024),r=i(2301),l=i(7873),s=i(3222),o=n._(i(5033)),a=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,r.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},u=s.Image},5033:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),i.__next_img_default=!0;let n=i},2706:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return l}});let n=i(1024),r=n._(i(2265)),l=r.default.createContext(null)},2378:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=i(8533),r=n._(i(2265)),l=r.useLayoutEffect,s=r.useEffect;function o(e){let{headManager:t,reduceComponentsToState:i}=e;function n(){if(t&&t.mountedInstances){let n=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(n,e))}}return l(()=>{var i;return null==t||null==(i=t.mountedInstances)||i.add(e.children),()=>{var i;null==t||null==(i=t.mountedInstances)||i.delete(e.children)}}),l(()=>(t&&(t._pendingUpdate=n),()=>{t&&(t._pendingUpdate=n)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},622:function(e,t,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=i(2265),r=Symbol.for("react.element"),l=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,i){var n,a={},u=null,d=null;for(n in void 0!==i&&(u=""+i),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:u,ref:d,props:a,_owner:s.current}}t.jsx=a,t.jsxs=a},7437:function(e,t,i){"use strict";e.exports=i(622)},6691:function(e,t,i){e.exports=i(1295)},8868:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(2265);"function"==typeof SuppressedError&&SuppressedError;let r=(e,t,i,n)=>{e.style.transition=`${t} ${i}ms ${n}`},l=(e,t,i)=>Math.min(Math.max(e,t),i);class s{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{let{width:t,height:i}=e,n=Math.sqrt(Math.pow(t,2)+Math.pow(i,2));return{width:n,height:n}},this.setSize=e=>{let t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,i,n)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,i,n)},this.updateAngle=(e,t)=>{let{xPercentage:i,yPercentage:n}=e;this.glareAngle=(i?Math.atan2(n,-i)*(180/Math.PI):0)-(t?180:0)},this.updateOpacity=(e,t,i,n)=>{let{xPercentage:r,yPercentage:s}=e,{glarePosition:o,glareReverse:a,glareMaxOpacity:u}=t,d=i?-1:1,c=n?-1:1,p=a?-1:1,h=0;switch(o){case"top":h=-r*d*p;break;case"right":h=s*c*p;break;case"bottom":case void 0:h=r*d*p;break;case"left":h=-s*c*p;break;case"all":h=Math.hypot(r,s)}let g=l(h,0,100);this.glareOpacity=g*u/100},this.render=e=>{let{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";let i=this.calculateGlareSize(e),n={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${i.width}px`,height:`${i.height}px`};Object.assign(this.glareWrapperEl.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"}),Object.assign(this.glareEl.style,n)}}class o{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{let{xPercentage:i,yPercentage:n}=e,{tiltMaxAngleX:r,tiltMaxAngleY:l}=t;this.tiltAngleX=i*r/100,this.tiltAngleY=-(n*l/100*1)},this.updateTiltManualInput=(e,t)=>{let{tiltAngleXManual:i,tiltAngleYManual:n,tiltMaxAngleX:r,tiltMaxAngleY:l}=t;(null!==i||null!==n)&&(this.tiltAngleX=null!==i?i:0,this.tiltAngleY=null!==n?n:0,e.xPercentage=100*this.tiltAngleX/r,e.yPercentage=100*this.tiltAngleY/l)},this.updateTiltReverse=e=>{let t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{let{tiltAxis:t}=e;this.tiltAngleX=l(this.tiltAngleX,-90,90),this.tiltAngleY=l(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{let{tiltMaxAngleX:t,tiltMaxAngleY:i}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/i*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}let a=Object.assign(Object.assign({scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1},{tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null}),{glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"});class u extends n.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=()=>{var e,t,i,n;return e=this,t=void 0,i=void 0,n=function*(){if(!window.DeviceOrientationEvent)return;let e=DeviceOrientationEvent.requestPermission;"function"==typeof e?"granted"===(yield e())&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},new(i||(i=Promise))(function(r,l){function s(e){try{a(n.next(e))}catch(e){l(e)}}function o(e){try{a(n.throw(e))}catch(e){l(e)}}function a(e){var t;e.done?r(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(s,o)}a((n=n.apply(e,t||[])).next())})},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{let{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t(e.type)},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{let{onLeave:t}=this.props;if(this.setTransitions(),t&&t(e.type),this.props.reset){let e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{let{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":let{tiltAngleXInitial:i,tiltAngleYInitial:n,tiltMaxAngleX:r,tiltMaxAngleY:s}=this.props;this.wrapperEl.clientPosition.xPercentage=l(i/r*100,-100,100),this.wrapperEl.clientPosition.yPercentage=l(n/s*100,-100,100),this.wrapperEl.scale=1}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;let{tiltMaxAngleX:t,tiltMaxAngleY:i}=this.props,n=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=n/i*100,this.wrapperEl.clientPosition.xPercentage=l(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=l(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{let{tiltEnable:t,flipVertically:i,flipHorizontally:n}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,i,n)},this.updateClientInput=()=>{let e,t;let{trackOnWindow:i}=this.props;if(i){let{x:i,y:n}=this.wrapperEl.clientPosition;e=n/window.innerHeight*200-100,t=i/window.innerWidth*200-100}else{let{size:{width:i,height:n,left:r,top:l},clientPosition:{x:s,y:o}}=this.wrapperEl;e=(o-l)/n*200-100,t=(s-r)/i*200-100}this.wrapperEl.clientPosition.xPercentage=l(e,-100,100),this.wrapperEl.clientPosition.yPercentage=l(t,-100,100)},this.updateFlip=()=>{let{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new o,this.initGlare(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;let e=new CustomEvent("autoreset");this.mainLoop(e);let t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){let e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){let{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){let e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){let{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new s(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){let{onMove:t}=this.props;if(!t)return;let i=0,n=0;this.glare&&(i=this.glare.glareAngle,n=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:i,glareOpacity:n,eventType:e.type})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){let{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){let{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){let{transitionSpeed:e,transitionEasing:t}=this.props;r(this.wrapperEl.node,"all",e,t),this.glare&&r(this.glare.glareEl,"opacity",e,t)}render(){let{children:e,className:t,style:i}=this.props;return n.createElement("div",{ref:e=>this.wrapperEl.node=e,onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:i},e)}}u.defaultProps=a},1872:function(e,t,i){"use strict";let n;i.d(t,{Z:function(){return a}});let r="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var l={randomUUID:r};let s=new Uint8Array(16),o=[];for(let e=0;e<256;++e)o.push((e+256).toString(16).slice(1));var a=function(e,t,i){if(l.randomUUID&&!t&&!e)return l.randomUUID();e=e||{};let r=e.random||(e.rng||function(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)})();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=r[e];return t}return function(e,t=0){return o[e[t+0]]+o[e[t+1]]+o[e[t+2]]+o[e[t+3]]+"-"+o[e[t+4]]+o[e[t+5]]+"-"+o[e[t+6]]+o[e[t+7]]+"-"+o[e[t+8]]+o[e[t+9]]+"-"+o[e[t+10]]+o[e[t+11]]+o[e[t+12]]+o[e[t+13]]+o[e[t+14]]+o[e[t+15]]}(r)}}}]);