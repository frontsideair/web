(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return f})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return w}));var a=n(2),r=n(0),o=n.n(r),i=n(75),s=n(81),l=n(76),c=n(65),u=n.n(c);const p=37,b=39;var d=function(e){const{block:t,children:n,defaultValue:a,values:i,groupId:c}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(s.a)(),[f,h]=Object(r.useState)(a),[g,O]=Object(r.useState)(!1);if(null!=c){const e=d[c];null!=e&&e!==f&&i.some((t=>t.value===e))&&h(e)}const w=e=>{h(e),null!=c&&m(c,e)},y=[],j=e=>{e.metaKey||e.altKey||e.ctrlKey||O(!0)},v=()=>{O(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",j),window.addEventListener("mousedown",v)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},i.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(l.a)("tabs__item",u.a.tabItem,{"tabs__item--active":f===e}),style:g?{}:{outline:"none"},key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e),j(e)},onFocus:()=>w(e),onClick:()=>{w(e),O(!1)},onPointerDown:()=>O(!1)},t)))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===f))[0]))};var m=function(e){return o.a.createElement("div",null,e.children)};const f={title:"Getting Started"},h={unversionedId:"tutorials/getting-started",id:"tutorials/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Requirements",source:"@site/docs/tutorials/getting-started.md",slug:"/tutorials/getting-started",permalink:"/docs/tutorials/getting-started",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/getting-started.md",version:"current",sidebar:"docs",previous:{title:"How it works",permalink:"/docs/how-it-works"},next:{title:"Todo App",permalink:"/docs/tutorials/todo-app"}},g=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Creating and running your first app",id:"creating-and-running-your-first-app",children:[]},{value:"IDE support",id:"ide-support",children:[]},{value:"What next?",id:"what-next",children:[]}],O={rightToc:g};function w({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},O,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"You need to have Node.js installed and it needs to be at least ",Object(i.b)("strong",{parentName:"p"},"12.18.0"),". We recommend using\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," for managing your Node.js installation version(s)."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(d,{defaultValue:"linux/osx",values:[{label:"Linux / OS X",value:"linux/osx"},{label:"Windows",value:"win"},{label:"From source",value:"source"}],mdxType:"Tabs"},Object(i.b)(m,{value:"linux/osx",mdxType:"TabItem"},Object(i.b)("p",null,"Run following command to download and install ",Object(i.b)("inlineCode",{parentName:"p"},"wasp")," binary:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl -sSL https://raw.githubusercontent.com/wasp-lang/wasp/master/waspc/tools/install.sh | sh\n"))),Object(i.b)(m,{value:"win",mdxType:"TabItem"},Object(i.b)("p",null,"With Wasp for Windows, we are almost there: Wasp is successfully compiling and running on Windows but there is a bug or two stopping it from fully working."),Object(i.b)("p",null,"Check it out ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/issues/48"}),"here")," if you are interested in helping.")),Object(i.b)(m,{value:"source",mdxType:"TabItem"},Object(i.b)("p",null,"If installer is not working for you or your OS is not supported, you can try building Wasp from source."),Object(i.b)("p",null,"To install from source, you need to clone the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp"}),"wasp repo"),", install ",Object(i.b)("inlineCode",{parentName:"p"},"stack")," on your machine and then run ",Object(i.b)("inlineCode",{parentName:"p"},"stack install")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"waspc/")," dir."),Object(i.b)("p",null,"If you have never built Wasp before, this might take some time due to ",Object(i.b)("inlineCode",{parentName:"p"},"stack")," downloading dependencies for the first time.  "),Object(i.b)("p",null,"Check ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wasp-lang/wasp/tree/master/waspc"}),"waspc/")," for more details on building."))),Object(i.b)("h2",{id:"creating-and-running-your-first-app"},"Creating and running your first app"),Object(i.b)("p",null,"Execute the following commands in your terminal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell-session"}),"$ wasp new MyNewApp # Creates a new web app named MyNewApp.\n$ cd MyNewApp\n$ wasp start # Serves the web app.\n")),Object(i.b)("p",null,"That's it! You have successfully created and served a new web app at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," and Wasp is serving both frontend and backend for you."),Object(i.b)("h2",{id:"ide-support"},"IDE support"),Object(i.b)("p",null,"If you are using Visual Studio Code, install our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=wasp-lang.wasp"}),"Wasp language extension"),"!"),Object(i.b)("h2",{id:"what-next"},"What next?"),Object(i.b)("p",null,"Check out our ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tutorials/todo-app"}),"Todo App tutorial"),"."))}w.isMDXComponent=!0},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},c),{},{components:n})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},80:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},81:function(e,t,n){"use strict";var a=n(0),r=n(80);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);