(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),i=(a(0),a(74)),s={title:"Introduction",sidebar_label:"What is Wasp?",slug:"/"},o={unversionedId:"about",id:"about",isDocsHomePage:!1,title:"Introduction",description:"Wasp is in alpha and is therefore likely to change a lot, have bugs and miss important features.",source:"@site/docs/about.md",slug:"/",permalink:"/web/docs/",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/about.md",version:"current",sidebar_label:"What is Wasp?",sidebar:"docs",next:{title:"How it works",permalink:"/web/docs/how-it-works"}},p=[{value:"What is Wasp?",id:"what-is-wasp",children:[]},{value:"Wasp is a DSL",id:"wasp-is-a-dsl",children:[]},{value:"Wasp integrates with the existing stack",id:"wasp-integrates-with-the-existing-stack",children:[]},{value:"Is Wasp a web app framework?",id:"is-wasp-a-web-app-framework",children:[]},{value:"What it is meant for",id:"what-it-is-meant-for",children:[]},{value:"What it is not meant for",id:"what-it-is-not-meant-for",children:[]}],c={rightToc:p};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Wasp is in alpha and is therefore likely to change a lot, have bugs and miss important features.")),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Also, if some design decisions don't seem to make much sense, it might be because they are preparation for the next step in evolution of Wasp (even if not we will use it as an excuse anyway :P).")),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Despite all that, Wasp works, so give a try to what is there and imagine the rest together with us (by contributing)!")))),Object(i.b)("p",null,"Thanks a lot for giving Wasp a try! In the sections below we will give a short overview of what it is, how\nit works and get you started."),Object(i.b)("h2",{id:"what-is-wasp"},"What is Wasp?"),Object(i.b)("p",null,"Wasp is a programming language for building ",Object(i.b)("strong",{parentName:"p"},"full-stack web applications"),". That means Wasp takes care of all three\nmajor parts of a web application: ",Object(i.b)("strong",{parentName:"p"},"client")," (front-end), ",Object(i.b)("strong",{parentName:"p"},"server")," (back-end) and ",Object(i.b)("strong",{parentName:"p"},"deployment"),"."),Object(i.b)("h2",{id:"wasp-is-a-dsl"},"Wasp is a DSL"),Object(i.b)("p",null,"Wasp is a programming language, but a specific kind: It is a ",Object(i.b)("em",{parentName:"p"},"Domain Specific Language"),", or shorter ",Object(i.b)("em",{parentName:"p"},"DSL"),".\nThat means it is not a general-purpose, Turing-complete language (such as e.g. Python or Java) and it is not meant\nto replace them. Instead, it is specialised for a single purpose: ",Object(i.b)("strong",{parentName:"p"},"building modern web applications"),"."),Object(i.b)("p",null,"Another examples of ",Object(i.b)("em",{parentName:"p"},"DSL"),"s that are often used today are e.g. ",Object(i.b)("em",{parentName:"p"},"SQL")," for databases and ",Object(i.b)("em",{parentName:"p"},"HTML")," for web page layouts.\nThe main advantage and reason why ",Object(i.b)("em",{parentName:"p"},"DSL"),"s exist is because they need to do only one task (e.g. database queries)\nso they can do it really well and provide the best possible experience for the developer."),Object(i.b)("p",null,"The same idea stands behind Wasp - a language that will allow developers to ",Object(i.b)("strong",{parentName:"p"},"build modern web applications with\n10x less code and less stack-specific knowledge"),"."),Object(i.b)("h2",{id:"wasp-integrates-with-the-existing-stack"},"Wasp integrates with the existing stack"),Object(i.b)("p",null,"As mentioned above, Wasp is not trying to do everything at once but rather focuses on the accidental complexity\nwhich arises from connecting all the parts of the stack (client, server, deployment) together."),Object(i.b)("p",null,"Right now, Wasp supports React and Node and relies on them to define web components and server queries and\nactions."),Object(i.b)("h2",{id:"is-wasp-a-web-app-framework"},"Is Wasp a web app framework?"),Object(i.b)("p",null,"Wasp is addressing the same core problems that typical web app frameworks are addressing, and it in big part ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Duck_test"}),"looks, swims and quacks")," like a web app framework."),Object(i.b)("p",null,"On the other hand, Wasp does not match typical expectations of a web app framework: it is not a set of libraries, but instead it is a programming language (DSL)."),Object(i.b)("h2",{id:"what-it-is-meant-for"},"What it is meant for"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"building full-stack web apps (like e.g. Airbnb or Asana)"),Object(i.b)("li",{parentName:"ul"},"quickly starting a web app with industry best practices"),Object(i.b)("li",{parentName:"ul"},"to be used alongside modern web dev stack (currently supported React and Node)")),Object(i.b)("h2",{id:"what-it-is-not-meant-for"},"What it is not meant for"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"building static/presentational websites"),Object(i.b)("li",{parentName:"ul"},"to be used as a no-code solution"),Object(i.b)("li",{parentName:"ul"},"to be a solve-it-all tool in a single language")))}l.isMDXComponent=!0},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=l(a),u=n,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||i;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);