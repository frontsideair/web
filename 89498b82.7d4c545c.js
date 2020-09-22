(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return s})),a.d(n,"metadata",(function(){return r})),a.d(n,"rightToc",(function(){return p})),a.d(n,"default",(function(){return l}));var t=a(2),i=a(6),o=(a(0),a(74)),s={title:"Overview"},r={unversionedId:"language/overview",id:"language/overview",isDocsHomePage:!1,title:"Overview",description:"Wasp is a declarative language which recognizes web application-specific terms (e.g. page or route) as",source:"@site/docs/language/overview.md",slug:"/language/overview",permalink:"/web/docs/language/overview",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/language/overview.md",version:"current",sidebar:"docs",previous:{title:"Getting Started",permalink:"/web/docs/language/getting-started"},next:{title:"Basic Elements",permalink:"/web/docs/language/basic-elements"}},p=[],c={rightToc:p};function l(e){var n=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Wasp is a declarative language which recognizes web application-specific terms (e.g. ",Object(o.b)("em",{parentName:"p"},"page")," or ",Object(o.b)("em",{parentName:"p"},"route"),") as\nwords of the language."),Object(o.b)("p",null,"The basic idea is that the higher-level overview of an app (e.g. pages, routes, database model, ...) is defined in a single ",Object(o.b)("inlineCode",{parentName:"p"},"*.wasp")," file, while the specific parts (web components, back-end queries, ...) are implemented in specific non-wasp technologies (React, NodeJS, Prisma) and then referenced in the ",Object(o.b)("inlineCode",{parentName:"p"},"*.wasp")," file."),Object(o.b)("p",null,"Basic structure of a Wasp project is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"single ",Object(o.b)("inlineCode",{parentName:"li"},"*.wasp")," file"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ext/")," directory -> Contains non-wasp code (JS, CSS, ...) structured in any way you want.")),Object(o.b)("p",null,"When referencing code from ",Object(o.b)("inlineCode",{parentName:"p"},"ext/")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"*.wasp")," file, you do it as ",Object(o.b)("inlineCode",{parentName:"p"},"@ext/relative/path/of/file/in/ext/dir"),"."),Object(o.b)("h1",{id:"minimal-example"},"Minimal example"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"TodoApp/\n  - main.wasp\n  - ext/\n    - operations.js\n    - pages/\n      - Main.js\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-css"}),'/* file: main.wasp */\n\napp todoApp {\n  title: "ToDo App"\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/pages/Main"\n}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/operations.js"\n}\n\naction createTask {\n  fn: import { createTask } from "@ext/operations.js"\n}\n\nentityPSL Task {=psl\n  id          Int     @id @default(autoincrement())\n  description String\n  isDone      Boolean @default(false)\npsl=}\n')),Object(o.b)("p",null,"In the following sections each of these basic language elements is explained. "))}l.isMDXComponent=!0}}]);