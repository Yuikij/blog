"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7227],{96859:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=r(85893),c=r(11151);const i={},o="go run -race",l={id:"basicKnowledge/programmingLanguage/Go/\u547d\u4ee4\u53c2\u6570",title:"go run -race",description:"go run -race\u662f\u4e00\u4e2ago\u547d\u4ee4\uff0c\u5b83\u53ef\u4ee5\u5728\u7f16\u8bd1\u548c\u8fd0\u884cgo\u7a0b\u5e8f\u7684\u65f6\u5019\u542f\u7528\u6570\u636e\u7ade\u4e89\u68c0\u6d4b\u3002\u6570\u636e\u7ade\u4e89\u662f\u6307\u591a\u4e2agoroutine\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u4e2a\u53d8\u91cf\uff0c\u800c\u81f3\u5c11\u6709\u4e00\u4e2agoroutine\u662f\u5199\u64cd\u4f5c\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u7684\u4e0d\u786e\u5b9a\u6027\u548c\u9519\u8bef\u3002go run -race\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u53d1\u73b0\u548c\u4fee\u590d\u6570\u636e\u7ade\u4e89\u7684\u95ee\u9898\u3002",source:"@site/docs/basicKnowledge/programmingLanguage/Go/\u547d\u4ee4\u53c2\u6570.md",sourceDirName:"basicKnowledge/programmingLanguage/Go",slug:"/basicKnowledge/programmingLanguage/Go/\u547d\u4ee4\u53c2\u6570",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Go/\u547d\u4ee4\u53c2\u6570",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"programmingLanguage",previous:{title:"\u9501",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501"}},t={},a=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}];function d(n){const e=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",ol:"ol",strong:"strong"},(0,c.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"go-run--race",children:"go run -race"}),"\n",(0,s.jsx)(e.p,{children:"go run -race\u662f\u4e00\u4e2ago\u547d\u4ee4\uff0c\u5b83\u53ef\u4ee5\u5728\u7f16\u8bd1\u548c\u8fd0\u884cgo\u7a0b\u5e8f\u7684\u65f6\u5019\u542f\u7528\u6570\u636e\u7ade\u4e89\u68c0\u6d4b\u3002\u6570\u636e\u7ade\u4e89\u662f\u6307\u591a\u4e2agoroutine\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u4e2a\u53d8\u91cf\uff0c\u800c\u81f3\u5c11\u6709\u4e00\u4e2agoroutine\u662f\u5199\u64cd\u4f5c\uff0c\u8fd9\u53ef\u80fd\u5bfc\u81f4\u7a0b\u5e8f\u7684\u4e0d\u786e\u5b9a\u6027\u548c\u9519\u8bef\u3002go run -race\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u53d1\u73b0\u548c\u4fee\u590d\u6570\u636e\u7ade\u4e89\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u7528\u6cd5",children:"\u7528\u6cd5"}),"\n",(0,s.jsx)(e.p,{children:"go run -race [build flags] [-exec xprog] package [arguments...]"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"build flags: \u53ef\u9009\u7684\u7f16\u8bd1\u6807\u5fd7\uff0c\u4f8b\u5982-o, -v, -x\u7b49\u3002"}),"\n",(0,s.jsx)(e.li,{children:"-exec xprog: \u53ef\u9009\u7684\u53c2\u6570\uff0c\u6307\u5b9a\u8981\u8fd0\u884c\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"package: \u8981\u7f16\u8bd1\u548c\u8fd0\u884c\u7684go\u5305\u6216\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.li,{children:"arguments: \u53ef\u9009\u7684\u53c2\u6570\uff0c\u4f20\u9012\u7ed9\u8fd0\u884c\u7684\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8bbe\u6709\u4e00\u4e2a\u540d\u4e3amain.go\u7684\u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"sync"\n)\n\nvar counter int\n\nfunc main() {\n\tvar wg sync.WaitGroup\n\tfor i := 0; i < 10; i++ {\n\t\twg.Add(1)\n\t\tgo func() {\n\t\t\tdefer wg.Done()\n\t\t\tcounter++\n\t\t}()\n\t}\n\twg.Wait()\n\tfmt.Println(counter)\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"go run -race"})," \u662f Go \u8bed\u8a00\u4e2d\u7528\u6765\u68c0\u6d4b\u5e76\u53d1\u4ee3\u7801\u4e2d\u6570\u636e\u7ade\u4e89\u6761\u4ef6\u7684\u5de5\u5177\u3002",(0,s.jsx)(e.code,{children:"-race"})," \u6807\u5fd7\u542f\u7528\u6570\u636e\u7ade\u4e89\u68c0\u6d4b\u5668\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4ee5\u4e0b\u662f\u5173\u4e8e ",(0,s.jsx)(e.code,{children:"go run -race"})," \u7684\u4e00\u4e9b\u8981\u70b9\uff1a"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6570\u636e\u7ade\u4e89"}),"\uff1a\u5f53\u4e24\u4e2a\u6216\u66f4\u591a\u7684\u534f\u7a0b\u5e76\u53d1\u8bbf\u95ee\u76f8\u540c\u7684\u5185\u5b58\u4f4d\u7f6e\uff0c\u5e76\u4e14\u81f3\u5c11\u6709\u4e00\u4e2a\u534f\u7a0b\u5728\u5199\u5165\u6570\u636e\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u6570\u636e\u7ade\u4e89\u3002\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u4e0d\u786e\u5b9a\u7684\u884c\u4e3a\u548c\u96be\u4ee5\u8ffd\u8e2a\u7684\u9519\u8bef\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5de5\u4f5c\u539f\u7406"}),"\uff1a",(0,s.jsx)(e.code,{children:"-race"})," \u6807\u5fd7\u4f1a\u4f7f Go \u7f16\u8bd1\u5668\u63d2\u5165\u7279\u6b8a\u7684\u4ee3\u7801\u6765\u52a8\u6001\u68c0\u6d4b\u8fd0\u884c\u65f6\u7684\u6570\u636e\u7ade\u4e89\u6761\u4ef6\u3002\u5f53\u5b83\u68c0\u6d4b\u5230\u6570\u636e\u7ade\u4e89\u65f6\uff0c\u4f1a\u5728\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u4e0a\u62a5\u544a\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u6027\u80fd\u5f71\u54cd"}),"\uff1a\u56e0\u4e3a\u8fd9\u79cd\u68c0\u6d4b\u662f\u52a8\u6001\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"-race"})," \u6807\u5fd7\u7f16\u8bd1\u548c\u8fd0\u884c\u7684\u7a0b\u5e8f\u4f1a\u6bd4\u5e38\u89c4\u7248\u672c\u6162\u3002\u540c\u65f6\uff0c\u5b83\u4e5f\u4f1a\u4f7f\u7528\u66f4\u591a\u7684\u5185\u5b58\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u573a\u666f"}),"\uff1a\u5c3d\u7ba1\u6027\u80fd\u5f00\u9500\u8f83\u5927\uff0c\u4f46\u6570\u636e\u7ade\u4e89\u68c0\u6d4b\u5bf9\u4e8e\u9a8c\u8bc1\u5e76\u53d1\u4ee3\u7801\u7684\u6b63\u786e\u6027\u975e\u5e38\u6709\u4ef7\u503c\u3002\u56e0\u6b64\uff0c\u5efa\u8bae\u5728\u5f00\u53d1\u548c\u6d4b\u8bd5\u9636\u6bb5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"-race"})," \u6807\u5fd7\uff0c\u4ee5\u786e\u4fdd\u4ee3\u7801\u6ca1\u6709\u6570\u636e\u7ade\u4e89\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u4f7f\u7528\u65b9\u6cd5"}),"\uff1a\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c\u3001\u6d4b\u8bd5\u6216\u6784\u5efa Go \u4ee3\u7801\u65f6\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"-race"})," \u6807\u5fd7\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8fd0\u884c\u7a0b\u5e8f\u5e76\u68c0\u6d4b\u6570\u636e\u7ade\u4e89\uff1a",(0,s.jsx)(e.code,{children:"go run -race myprogram.go"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u6d4b\u8bd5\u5e76\u68c0\u6d4b\u6570\u636e\u7ade\u4e89\uff1a",(0,s.jsx)(e.code,{children:"go test -race mypackage"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u6784\u5efa\u5e76\u68c0\u6d4b\u6570\u636e\u7ade\u4e89\uff1a",(0,s.jsx)(e.code,{children:"go build -race myprogram.go"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u5e73\u53f0\u652f\u6301"}),"\uff1a\u6570\u636e\u7ade\u4e89\u68c0\u6d4b\u5668\u4e0d\u662f\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u90fd\u53ef\u7528\u3002\u4e3b\u8981\u652f\u6301\u7684\u64cd\u4f5c\u7cfb\u7edf\u6709 Linux\u3001macOS \u548c Windows\uff0c\u800c\u652f\u6301\u7684\u4f53\u7cfb\u7ed3\u6784\u5305\u62ec amd64\u3001arm64 \u548c ppc64le\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u8f93\u51fa"}),"\uff1a\u5f53\u68c0\u6d4b\u5230\u6570\u636e\u7ade\u4e89\u65f6\uff0c\u68c0\u6d4b\u5668\u4f1a\u8f93\u51fa\u8be6\u7ec6\u7684\u62a5\u544a\uff0c\u5176\u4e2d\u5305\u542b\u5bfc\u81f4\u7ade\u4e89\u7684\u534f\u7a0b\u548c\u4ee3\u7801\u884c\u4fe1\u606f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c",(0,s.jsx)(e.code,{children:"go run -race"})," \u662f\u4e00\u4e2a\u975e\u5e38\u6709\u4ef7\u503c\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u68c0\u6d4b\u548c\u4fee\u590d\u5e76\u53d1\u4ee3\u7801\u4e2d\u7684\u6570\u636e\u7ade\u4e89\uff0c\u4ece\u800c\u786e\u4fdd\u4ee3\u7801\u7684\u7a33\u5b9a\u6027\u548c\u6b63\u786e\u6027\u3002"]})]})}const g=function(n={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:(n,e,r)=>{r.d(e,{Zo:()=>l,ah:()=>i});var s=r(67294);const c=s.createContext({});function i(n){const e=s.useContext(c);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function l({components:n,children:e,disableParentContext:r}){let l;return l=r?"function"==typeof n?n({}):n||o:i(n),s.createElement(c.Provider,{value:l},e)}}}]);