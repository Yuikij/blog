"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3792],{4298:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=r(5893),o=r(3905);const t={sidebar_position:1},i="Manage Docs Versions",c={id:"tutorial-extras/manage-docs-versions",title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/tutorial-extras/manage-docs-versions.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/manage-docs-versions",permalink:"/kibou/docs/tutorial-extras/manage-docs-versions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/kibou/docs/category/tutorial---extras"},next:{title:"Translate your site",permalink:"/kibou/docs/tutorial-extras/translate-your-site"}},a={},d=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}];function l(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",img:"img"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"manage-docs-versions",children:"Manage Docs Versions"}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus can manage multiple versions of your docs."}),"\n",(0,s.jsx)(n.h2,{id:"create-a-docs-version",children:"Create a docs version"}),"\n",(0,s.jsx)(n.p,{children:"Release a version 1.0 of your project:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"docs"})," folder is copied into ",(0,s.jsx)(n.code,{children:"versioned_docs/version-1.0"})," and ",(0,s.jsx)(n.code,{children:"versions.json"})," is created."]}),"\n",(0,s.jsx)(n.p,{children:"Your docs now have 2 versions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1.0"})," at ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/"})," for the version 1.0 docs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"current"})," at ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/next/"})," for the ",(0,s.jsx)(n.strong,{children:"upcoming, unreleased docs"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"add-a-version-dropdown",children:"Add a Version Dropdown"}),"\n",(0,s.jsx)(n.p,{children:"To navigate seamlessly across versions, add a version dropdown."}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"The docs version dropdown appears in your navbar:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Docs Version Dropdown",src:r(5720).Z+"",width:"370",height:"302"})}),"\n",(0,s.jsx)(n.h2,{id:"update-an-existing-version",children:"Update an existing version"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to edit versioned docs in their respective folder:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"versioned_docs/version-1.0/hello.md"})," updates ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/hello"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"docs/hello.md"})," updates ",(0,s.jsx)(n.code,{children:"http://localhost:3000/docs/next/hello"})]}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>d});var s=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,s,o=function(e,n){if(null==e)return{};var r,s,o={},t=Object.keys(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)r=t[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=s.createContext({}),d=function(e){var n=s.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(r),h=o,j=p["".concat(a,".").concat(h)]||p[h]||l[h]||t;return r?s.createElement(j,i(i({ref:n},u),{},{components:r})):s.createElement(j,i({ref:n},u))}));u.displayName="MDXCreateElement"},5720:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);