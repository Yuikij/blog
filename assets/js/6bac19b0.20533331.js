"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7547],{76221:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=t(74848),s=t(28453);const o={},r=void 0,l={id:"basicSoftware/\u4e2d\u95f4\u4ef6/Redis/\u7f13\u5b58\u98ce\u9669",title:"\u7f13\u5b58\u98ce\u9669",description:"\u7f13\u5b58\u7a7f\u900f",source:"@site/docs/basicSoftware/\u4e2d\u95f4\u4ef6/Redis/\u7f13\u5b58\u98ce\u9669.md",sourceDirName:"basicSoftware/\u4e2d\u95f4\u4ef6/Redis",slug:"/basicSoftware/\u4e2d\u95f4\u4ef6/Redis/\u7f13\u5b58\u98ce\u9669",permalink:"/kibou/docs/basicSoftware/\u4e2d\u95f4\u4ef6/Redis/\u7f13\u5b58\u98ce\u9669",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"middleware",previous:{title:"\u96c6\u5408",permalink:"/kibou/docs/basicSoftware/\u4e2d\u95f4\u4ef6/Redis/\u6570\u636e\u7ed3\u6784/\u96c6\u5408"},next:{title:"Sentinel",permalink:"/kibou/docs/basicSoftware/\u4e2d\u95f4\u4ef6/Sentinel"}},c={},d=[{value:"\u7f13\u5b58\u7a7f\u900f",id:"\u7f13\u5b58\u7a7f\u900f",level:2},{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:3},{value:"\u7f13\u5b58\u51fb\u7a7f",id:"\u7f13\u5b58\u51fb\u7a7f",level:2},{value:"\u7f13\u5b58\u96ea\u5d29",id:"\u7f13\u5b58\u96ea\u5d29",level:2},{value:"\u7f13\u5b58\u6c61\u67d3",id:"\u7f13\u5b58\u6c61\u67d3",level:2}];function a(e){const n={blockquote:"blockquote",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u7a7f\u900f",children:"\u7f13\u5b58\u7a7f\u900f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u67e5\u8be2\u4e0d\u5b58\u5728\u7684\u6570\u636e\uff0c\u7f13\u5b58\u672a\u547d\u4e2d\uff0c\u6570\u636e\u5e93\u4e5f\u67e5\u4e0d\u5230\uff0c\u56e0\u6b64\u4f1a\u6301\u7eed\u67e5\u8be2\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u89e3\u51b3\u65b9\u6cd5",children:"\u89e3\u51b3\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bf9\u53c2\u6570\u8fdb\u884c\u5408\u6cd5\u6027\u6821\u9a8c"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u4e1a\u52a1\u4e0d\u80fd\u907f\u514d\uff0c\u5219\u5c06\u7a7a\u503c\u7684key\u4e5f\u8fdb\u884c\u7f13\u5b58"}),"\n",(0,i.jsx)(n.li,{children:"\u5e03\u9686\u8fc7\u6ee4\u5668"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u51fb\u7a7f",children:"\u7f13\u5b58\u51fb\u7a7f"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u7f13\u5b58\u4e2d\u7684\u70ed\u70b9\u6570\u636e\u5ffd\u7136\u56e0\u4e3a\u67d0\u79cd\u539f\u56e0\u5931\u6548\u4e86\uff0c\u6bd4\u5982\u7531\u4e8e\u8d85\u65f6\u5931\u6548\uff0c\u7f13\u5b58\u670d\u52a1\u5d29\u6e83"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u96ea\u5d29",children:"\u7f13\u5b58\u96ea\u5d29"}),"\n",(0,i.jsx)(n.h2,{id:"\u7f13\u5b58\u6c61\u67d3",children:"\u7f13\u5b58\u6c61\u67d3"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);