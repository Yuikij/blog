"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4276],{89514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(74848),s=t(28453);const o={},r=void 0,c={id:"database/MySQL/\u67e5\u8be2\u8bed\u53e5/\u7edf\u8ba1\u548c\u8fd0\u7ef4",title:"\u7edf\u8ba1\u548c\u8fd0\u7ef4",description:"\u67e5\u8be2\u4f30\u7b97\u7684\u8868\u548c\u6bcf\u884c\u7684\u78c1\u76d8\u5360\u7528",source:"@site/docs/database/MySQL/\u67e5\u8be2\u8bed\u53e5/\u7edf\u8ba1\u548c\u8fd0\u7ef4.md",sourceDirName:"database/MySQL/\u67e5\u8be2\u8bed\u53e5",slug:"/database/MySQL/\u67e5\u8be2\u8bed\u53e5/\u7edf\u8ba1\u548c\u8fd0\u7ef4",permalink:"/kibou/docs/database/MySQL/\u67e5\u8be2\u8bed\u53e5/\u7edf\u8ba1\u548c\u8fd0\u7ef4",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"database",previous:{title:"\u4e00\u4e9b\u573a\u666f\u4e0b\u7684\u67e5\u8be2\u8bed\u53e5",permalink:"/kibou/docs/database/MySQL/\u67e5\u8be2\u8bed\u53e5/SQLStatement"},next:{title:"\u5177\u4f53\u6848\u4f8b",permalink:"/kibou/docs/database/MySQL/\u8c03\u4f18/\u5177\u4f53\u6848\u4f8b"}},i={},l=[{value:"\u67e5\u8be2\u4f30\u7b97\u7684\u8868\u548c\u6bcf\u884c\u7684\u78c1\u76d8\u5360\u7528",id:"\u67e5\u8be2\u4f30\u7b97\u7684\u8868\u548c\u6bcf\u884c\u7684\u78c1\u76d8\u5360\u7528",level:2},{value:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5",id:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5",level:2}];function d(e){const n={code:"code",h2:"h2",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u67e5\u8be2\u4f30\u7b97\u7684\u8868\u548c\u6bcf\u884c\u7684\u78c1\u76d8\u5360\u7528",children:"\u67e5\u8be2\u4f30\u7b97\u7684\u8868\u548c\u6bcf\u884c\u7684\u78c1\u76d8\u5360\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT\n    table_name,\n    table_rows,\n    data_length,\n    avg_row_length\nFROM\n    information_schema.tables\nWHERE\n    table_schema = 'your_database_name'\n    AND table_name = 'your_table_name';\n\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5",children:"\u67e5\u770b\u5f53\u524d\u8fde\u63a5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"show processlist;\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);