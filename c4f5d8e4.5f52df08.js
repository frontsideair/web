(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{73:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(0),r=a.n(l),s=a(76),o=a(85),c=a(86);function i(e){var t=e.title,a=e.children,n=e.language;return r.a.createElement("div",{className:"code-with-header"},r.a.createElement("div",{className:"code-header"},t),r.a.createElement(c.a,{className:n},a))}a(68);var m=function(){return r.a.createElement("form",{className:"email-signup-form",action:"https://gmail.us4.list-manage.com/subscribe/post?u=8139c7de74df98aa17054b235&id=f0c6ba5f1d",method:"post"},r.a.createElement("input",{"aria-label":"Email address",name:"EMAIL",type:"email",required:!0,className:"input",placeholder:"Enter your email"}),r.a.createElement("div",{className:""},r.a.createElement("button",{className:"button button--primary",type:"submit"},"Subscribe")))},u=a(78),p=a(74),d=a(77),g=a(69),h=a.n(g);const y=[{title:"Quick start",description:r.a.createElement(r.a.Fragment,null,"Create a production-ready web app from scratch with only a few lines of concise, declarative code.")},{title:"Flexible",description:r.a.createElement(r.a.Fragment,null,"Move fast using high-level constructs provided by Wasp or drop down to ",r.a.createElement("code",null,"js/html/css...")," when you require more control.")},{title:"No lock-in",description:r.a.createElement(r.a.Fragment,null,"If Wasp becomes too limiting for you, simply eject and continue with the human-readable source code following industry best-practices.")}];function f({imageUrl:e,title:t,description:a}){const n=Object(d.a)(e);return r.a.createElement("div",{className:Object(s.a)("col col--4",h.a.feature)},n&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:h.a.featureImage,src:n,alt:t})),r.a.createElement("h2",null,t),r.a.createElement("p",null,a))}function E(){return r.a.createElement("section",{className:"section-lg"},r.a.createElement("div",{className:"container",style:{textAlign:"center"}},r.a.createElement("img",{className:"logo",src:"img/eqpar-separator.png"})))}function v(){const e=Object.freeze({NEW_APP:"Create a new app",DEFINE_ENTITY:"Define and query a data model",ADD_AUTH:"Add authentication"}),[t,a]=Object(l.useState)(e.NEW_APP);function n(){if(t===e.NEW_APP){const e='app todoApp {\n  title: "ToDo App"\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main"\n}\n',t="import React from 'react'\n\nexport default () => <span> Hello World! </span>\n";return r.a.createElement("div",{className:"codeExampleFiles"},r.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),r.a.createElement(i,{title:"ext/Main.js",language:"jsx"},t),r.a.createElement("div",null,"That's it, this is the whole app! Run ",r.a.createElement("code",null,"wasp start")," and check it out at ",r.a.createElement("code",null,"http://localhost:3000"),"!"))}if(t===e.ADD_AUTH){const e='app todoApp {\n  title: "ToDo App"\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main"\n}\n\nauth {\n  userEntity: User,\n  methods: [ EmailAndPassword ]\n}\n\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n',t="import React from 'react'\nimport { Link } from 'react-router-dom'\nimport useAuth from '@wasp/auth/useAuth.js'\nimport Todo from './Todo.js'\n\nexport default () => {\n  const { data: user } = useAuth()\n\n  if (!user) {\n    return <span>\n             Please login or signup <Link to='/login'>here</Link>.\n           </span>\n  } else {\n    return <Todo/>\n  }\n}\n";return r.a.createElement("div",{className:"codeExampleFiles"},r.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),r.a.createElement(i,{title:"ext/Main.js",language:"jsx"},t),r.a.createElement("div",null,"To learn more about authentication & authorization in Wasp, check the ",r.a.createElement(u.a,{to:Object(d.a)("/docs/language/basic-elements#authentication--authorization")},"docs"),"."))}if(t===e.DEFINE_ENTITY){const e='//...\n\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js",\n  entities: [Task] // A list of entities this query uses.\n}\n',t="export const getTasks = async (args, context) => {\n  return context.entities.Task.findMany()\n}\n",a="import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks.js'\n\nexport default () => {\n  const { data: tasks } = useQuery(getTasks)\n  return <Tasks tasks={tasks}/>\n}\n";return r.a.createElement("div",{className:"codeExampleFiles"},r.a.createElement(i,{title:"todoApp.wasp",language:"css"},e),r.a.createElement(i,{title:"ext/queries.js",language:"jsx"},t),r.a.createElement(i,{title:"ext/Todo.js",language:"jsx"},a),r.a.createElement("div",null,"To learn more about working with data in Wasp, check the ",r.a.createElement(u.a,{to:Object(d.a)("/docs/language/language/basic-elements#entity")},"docs"),"."))}return console.log("this should never happen."),null}function o(){function n({codeExampleKey:n}){return r.a.createElement("button",{className:Object(s.a)("button","info",t===e[n]&&"is-active","button--secondary"),onClick:()=>a(e[n])},e[n])}return Object.keys(e).map((e=>r.a.createElement(n,{codeExampleKey:e})))}return r.a.createElement("div",{className:"row CodeExamples"},r.a.createElement("div",{className:"ButtonTabs col col--3"},r.a.createElement("div",null,r.a.createElement(o,null))),r.a.createElement("div",{className:"col col--9"},r.a.createElement(n,null)))}function b(){return r.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=wasp-lang&repo=wasp&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"})}function k(){return r.a.createElement("section",{className:"section-lg",id:"signup"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered)},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement("h2",null,"Stay up to date"),r.a.createElement("h3",null,r.a.createElement("p",null,"Join our mailing list and be the first to know when we ship new features and updates!")))),r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m,null))),r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered,"section-text")},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement("h3",null,r.a.createElement("p",null,"Also, make sure to check out ",r.a.createElement(u.a,{to:"https://github.com/wasp-lang/wasp"},"Wasp repo on Github")," and express your support by giving us a star!")))),r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered),style:{paddingTop:"1rem"}},r.a.createElement("div",{className:"col"},r.a.createElement(b,null)))))}t.default=function(){const e=Object(p.a)(),{siteConfig:t={}}=e,a=Object(d.a)("docs/tutorials/todo-app");return r.a.createElement(o.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:Object(s.a)("hero",h.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero-title"},"Web App Specification Language"),r.a.createElement("p",{className:"hero-subtitle"},t.tagline),r.a.createElement("div",{className:h.a.buttons},r.a.createElement(u.a,{className:Object(s.a)("button button--outline button--secondary button--lg",h.a.heroButton),to:Object(d.a)("docs/tutorials/getting-started")},"Get Started"),r.a.createElement(u.a,{className:Object(s.a)("button button--secondary button--lg",h.a.heroButton),to:a},"Take the Tutorial"),r.a.createElement(b,null)))),r.a.createElement("main",null,r.a.createElement("section",{className:"section-lg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered)},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement("h3",{className:"title"},"Wasp is a ",r.a.createElement("span",{className:"title-strong"},"declarative language")," for building\xa0",r.a.createElement("span",{className:"title-strong"},"full-stack web apps")," with less code."),r.a.createElement("h3",null,r.a.createElement("p",null,"Front-end, back-end and deployment - all in one concise DSL.")))))),r.a.createElement(E,null),r.a.createElement("section",{className:"section-lg",id:"how-it-works"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered)},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement("h2",null,"How it works"),r.a.createElement("h3",null,r.a.createElement("p",null,"Given ",r.a.createElement("code",null,".wasp")," files as an input, Wasp generates the full source code of your web app - front-end, back-end and deployment."),r.a.createElement("p",null,"Wasp is used along with files written in standard web technologies - ",r.a.createElement("code",null,".js(x)"),",",r.a.createElement("code",null,".css"),", ...")))),r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered),style:{paddingTop:"2rem"}},r.a.createElement("div",{className:"col"},r.a.createElement("img",{className:"wasp-diagram",src:"img/wasp-compilation.png",alt:"Wasp compilation"}))))),r.a.createElement(E,null),y&&y.length>0&&r.a.createElement("section",{className:h.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},y.map(((e,t)=>r.a.createElement(f,Object(n.a)({key:t},e))))))),r.a.createElement(E,null),r.a.createElement("section",{className:"section-lg",id:"the-language"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered)},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement("h2",null,"The Language"),r.a.createElement("h3",null,r.a.createElement("p",null,"Concepts such as ",r.a.createElement("em",null,"app"),", ",r.a.createElement("em",null,"page"),", ",r.a.createElement("em",null,"route"),", ",r.a.createElement("em",null,"auth"),"\xa0 etc. are baked into Wasp, providing the higher level of expressiveness.")))),r.a.createElement(v,null))),r.a.createElement("section",{className:"section-lg"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered)},r.a.createElement("div",{className:"col col--10 col--offset-1"},r.a.createElement("h2",null,"Take the tutorial"),r.a.createElement("h3",null,r.a.createElement("p",null,"Take ",r.a.createElement(u.a,{to:a},"our tutorial")," and build a full-fledged Todo app in Wasp! You can find it ",r.a.createElement(u.a,{to:a},"here"),".")))),r.a.createElement("div",{className:Object(s.a)("row",h.a.responsiveCentered),style:{paddingTop:"2rem"}},r.a.createElement("div",{className:"col"},r.a.createElement("img",{alt:"How Todo App will work once it is done",src:Object(d.a)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}))))),r.a.createElement("div",{id:"join-the-list"},r.a.createElement(k,null))))}},86:function(e,t,a){"use strict";var n=a(2),l=a(0),r=a.n(l),s=a(76),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(19).a,theme:o};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),l=e.styles.reduce((function(e,a){var n=a.languages,l=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=m({},e[t],l);e[t]=a})),e}),n);return l.root=a,l.plain=m({},a,{backgroundColor:null}),l};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,l=e.style,r=m({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==l&&(r.style=void 0!==r.style?m({},r.style,l):l),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,l=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===l&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===l&&!n)return r[a[0]];var s=n?{display:"inline-block"}:{},o=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(o))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,l=e.style,r=e.token,s=m({},h(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==l&&(s.style=void 0!==s.style?m({},s.style,l):l),void 0!==a&&(s.key=a),n&&(s.className+=" "+n),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,l=e.children,r=this.getThemeDict(this.props),s=t.languages[a];return l({tokens:function(e){for(var t=[[]],a=[e],n=[0],l=[e.length],r=0,s=0,o=[],c=[o];s>-1;){for(;(r=n[s]++)<l[s];){var i=void 0,m=t[s],g=a[s][r];if("string"==typeof g?(m=s>0?m:["plain"],i=g):(m=d(m,g.type),g.alias&&(m=d(m,g.alias)),i=g.content),"string"==typeof i){var h=i.split(u),y=h.length;o.push({types:m,content:h[0]});for(var f=1;f<y;f++)p(o),c.push(o=[]),o.push({types:m,content:h[f]})}else s++,t.push(m),a.push(i),n.push(0),l.push(i.length)}s--,t.pop(),a.pop(),n.pop(),l.pop()}return p(o),c}(void 0!==s?t.tokenize(n,s,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),f=a(88),E=a.n(f),v=a(89),b=a.n(v),k=a(74),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(82),w=function(){var e=Object(k.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(j.a)().isDarkTheme,n=t.theme||N,l=t.darkTheme||n;return a?l:n},T=a(46),x=a.n(T),O=/{([\d,-]+)}/,A=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},C=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,o=e.metastring,i=Object(k.a)().siteConfig.themeConfig.prism,m=void 0===i?{}:i,u=Object(l.useState)(!1),p=u[0],d=u[1],g=Object(l.useState)(!1),h=g[0],f=g[1];Object(l.useEffect)((function(){f(!0)}),[]);var v=Object(l.useRef)(null),N=[],j="",T=w();if(o&&O.test(o)){var D=o.match(O)[1];N=b.a.parse(D).filter((function(e){return e>0}))}o&&C.test(o)&&(j=o.match(C)[0].split("title=")[1].replace(/"+/g,""));var P=a&&a.replace(/language-/,"");!P&&m.defaultLanguage&&(P=m.defaultLanguage);var S=t.replace(/\n$/,"");if(0===N.length&&void 0!==P){for(var W,L="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(P),F=t.replace(/\n$/,"").split("\n"),I=0;I<F.length;){var M=I+1,q=F[I].match(B);if(null!==q){switch(q.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=M+",";break;case"highlight-start":W=M;break;case"highlight-end":L+=W+"-"+(M-1)+","}F.splice(I,1)}else I+=1}N=b.a.parse(L),S=F.join("\n")}var _=function(){E()(S),d(!0),setTimeout((function(){return d(!1)}),2e3)};return r.a.createElement(y,Object(n.a)({},c,{key:String(h),theme:T,code:S,language:P}),(function(e){var t,a,l=e.className,o=e.style,c=e.tokens,i=e.getLineProps,m=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,j&&r.a.createElement("div",{style:o,className:x.a.codeBlockTitle},j),r.a.createElement("div",{className:x.a.codeBlockContent},r.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(s.a)(x.a.copyButton,(t={},t[x.a.copyButtonWithTitle]=j,t)),onClick:_},p?"Copied":"Copy"),r.a.createElement("div",{tabIndex:0,className:Object(s.a)(l,x.a.codeBlock,(a={},a[x.a.codeBlockWithTitle]=j,a))},r.a.createElement("div",{className:x.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return N.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(n.a)({key:t},m({token:e,key:t})))})))}))))))}))}},88:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const l=document.getSelection();let r=!1;l.rangeCount>0&&(r=l.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(o){}return a.remove(),r&&(l.removeAllRanges(),l.addRange(r)),n&&n.focus(),s};e.exports=n,e.exports.default=n},89:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],l=t[3];if(a&&l){var r=[],s=(a=parseInt(a))<(l=parseInt(l))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(l+=s);for(var o=a;o!=l;o+=s)r.push(o);return r}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);