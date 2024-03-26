"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2732],{63321:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=i(85893),s=i(11151);const r={sidebar_position:4},d=void 0,c={id:"basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/Synchronized",title:"Synchronized",description:"\u5bf9\u8c61\u9501\uff0c\u60b2\u89c2\u9501",source:"@site/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/Synchronized.mdx",sourceDirName:"basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501",slug:"/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/Synchronized",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/Synchronized",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"programmingLanguage",previous:{title:"CAS",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/CompareAndSwap"},next:{title:"ReentrantLock",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/ReentrantLock"}},t={},a=[{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:3},{value:"\u4f7f\u7528\u548c\u539f\u7406",id:"\u4f7f\u7528\u548c\u539f\u7406",level:3},{value:"Q&amp;A",id:"qa",level:3},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:3},{value:"\u4e3b\u8981\u601d\u60f3",id:"\u4e3b\u8981\u601d\u60f3",level:5},{value:"\u524d\u7f6e\u77e5\u8bc6\uff1a\u5bf9\u8c61\u5934",id:"\u524d\u7f6e\u77e5\u8bc6\u5bf9\u8c61\u5934",level:4},{value:"\u504f\u5411\u9501",id:"\u504f\u5411\u9501",level:4},{value:"\u83b7\u53d6\u6d41\u7a0b",id:"\u83b7\u53d6\u6d41\u7a0b",level:5},{value:"\u8f7b\u91cf\u7ea7\u9501",id:"\u8f7b\u91cf\u7ea7\u9501",level:4},{value:"\u91cd\u91cf\u7ea7\u9501",id:"\u91cd\u91cf\u7ea7\u9501",level:4}];function h(n){const e=Object.assign({blockquote:"blockquote",p:"p",h3:"h3",ul:"ul",li:"li",a:"a",h5:"h5",strong:"strong",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5bf9\u8c61\u9501\uff0c\u60b2\u89c2\u9501"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f5c\u7528",children:"\u4f5c\u7528"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"/docs/basicKnowledge/programmingLanguage/Java/%E5%B9%B6%E5%8F%91/%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5#lock-monitor",children:"\u53ef\u89c1\u6027\uff0c\u6e05\u7a7a\u5de5\u4f5c\u533a\u5185\u5b58\uff0c\u540c\u6b65\u4e3b\u5185\u5b58"})}),"\n",(0,l.jsx)(e.li,{children:"\u6709\u5e8f\u6027\uff0c\u539f\u5b50\u6027\uff1a\u540c\u4e00\u65f6\u523b\u53ea\u5141\u8bb8\u4e00\u6761\u7ebf\u7a0b\u8bbf\u95ee\u8d44\u6e90\uff0c\u77e5\u9053\u65b9\u6cd5\u6216\u4ee3\u7801\u5757\u7ed3\u675f"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f7f\u7528\u548c\u539f\u7406",children:"\u4f7f\u7528\u548c\u539f\u7406"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5bf9\u4e8e\u975e\u9759\u6001\u6210\u5458\u51fd\u6570\uff0c\u9501\u52a0\u5728\u5bf9\u8c61\u4e0a\u9762\u7684\uff08\u65b9\u6cd5\u4e0a\u7684\u8bbf\u95ee\u6807\u5fd7\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u5bf9\u4e8e\u9759\u6001\u6210\u5458\u51fd\u6570\uff0c\u9501\u662f\u52a0\u5728class\u5bf9\u8c61\u4e0a\uff08\u65b9\u6cd5\u4e0a\u7684\u8bbf\u95ee\u6807\u5fd7\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u5bf9\u4e8e\u4ee3\u7801\u5757\u52a0\u9501\uff0c\u52a0\u5230\u7279\u5b9a\u5bf9\u8c61\uff08monitorenter,monitorexit\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u7efc\u4e0a\uff0csynchronized\u662f\u5728\u5bf9\u8c61\u5934\u7684Mark Word\u533a\uff0c\u5b582\u4e2a\u91cd\u8981\u5b57\u6bb5\uff1a\u9501\u6807\u5fd7\u4f4d\u548c\u5360\u7528\u8be5\u9501\u7684thread ID"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"qa",children:"Q&A"}),"\n",(0,l.jsx)(e.h3,{id:"\u4f18\u5316",children:"\u4f18\u5316"}),"\n",(0,l.jsx)(e.h5,{id:"\u4e3b\u8981\u601d\u60f3",children:"\u4e3b\u8981\u601d\u60f3"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"optimistic \u4e50\u89c2\u7f16\u7a0b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8868\u793a\u5bf9\u4e8e\u5171\u4eab\u8d44\u6e90\u7684\u8bbf\u95ee\u6301\u4e50\u89c2\u6001\u5ea6\uff0c\u8ba4\u4e3a\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u53d1\u751f\u7ade\u4e89\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u52a0\u9501\u3002\u5148\u7528\u6700\u4f4e\u6210\u672c\u53bb\u6267\u884c"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"adaptive \u81ea\u9002\u5e94\u7f16\u7a0b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8868\u793a\u6839\u636e\u8fd0\u884c\u65f6\u7684\u60c5\u51b5\u52a8\u6001\u8c03\u6574\u7a0b\u5e8f\u7684\u884c\u4e3a\u548c\u7b56\u7565\uff0c\u4ee5\u9002\u5e94\u4e0d\u540c\u7684\u73af\u5883\u548c\u9700\u6c42\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"double check \u53cc\u91cd\u6821\u9a8c"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7b2c\u4e00\u6b21\u6821\u9a8c\uff1a\u52a0\u9501\u4e4b\u524d\uff0c\u65e0\u9501\u72b6\u6001\u4e0b\u8fc7\u6ee4\u6389\u5927\u591a\u6570\u60c5\u51b5"}),"\n",(0,l.jsx)(e.li,{children:"\u7b2c\u4e8c\u6b21\u6821\u9a8c\uff1a\u52a0\u9501\u4e4b\u540e\uff0c\u9632\u6b62\u7b2c\u4e00\u6b21\u548c\u52a0\u9501\u4e2d\u95f4\uff0c\u5171\u4eab\u6570\u636e\u88ab\u5176\u4ed6\u7ebf\u7a0b\u4fee\u6539\u8fc7"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u524d\u7f6e\u77e5\u8bc6\u5bf9\u8c61\u5934",children:"\u524d\u7f6e\u77e5\u8bc6\uff1a\u5bf9\u8c61\u5934"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u9501\u72b6\u6001"}),(0,l.jsx)(e.th,{children:"\u504f\u5411\u6a21\u5f0f"}),(0,l.jsx)(e.th,{children:"\u6807\u5fd7\u4f4d"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u672a\u9501\u5b9a"}),(0,l.jsx)(e.td,{children:"0"}),(0,l.jsx)(e.td,{children:"01"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u8f7b\u91cf\u7ea7\u9501\u5b9a"}),(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{children:"00"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u91cd\u91cf\u7ea7\u9501\u5b9a"}),(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{children:"10"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"GC\u6807\u8bb0"}),(0,l.jsx)(e.td,{}),(0,l.jsx)(e.td,{children:"11"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u53ef\u504f\u5411"}),(0,l.jsx)(e.td,{children:"1"}),(0,l.jsx)(e.td,{children:"10"})]})]})]}),"\n",(0,l.jsx)(e.h4,{id:"\u504f\u5411\u9501",children:"\u504f\u5411\u9501"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u4f1a\u6709\u4e00\u4e2a\u6807\u5fd7\u4f4d\uff0c\u8bb0\u5f55\u83b7\u53d6\u9501\u7684\u7ebf\u7a0b\uff0c\u4e3a\u4e86\u5728\u65e0\u7ade\u4e89\u72b6\u6001\u4e0b\uff0c\u8ba9\u540c\u4e00\u7ebf\u7a0b\u66f4\u5feb\u83b7\u53d6\u5230\u9501"}),"\n"]}),"\n",(0,l.jsx)(e.h5,{id:"\u83b7\u53d6\u6d41\u7a0b",children:"\u83b7\u53d6\u6d41\u7a0b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u9996\u5148\u83b7\u53d6\u5bf9\u8c61\u7684 MarkWord\uff0c\u5224\u65ad\u662f\u5426\u5904\u4e8e\u53ef\u504f\u5411\u72b6\u6001","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c\u662f",(0,l.jsx)(e.strong,{children:"\u53ef\u504f\u5411"}),"\u72b6\u6001\uff0c\u5219\u901a\u8fc7 CAS \u64cd\u4f5c\uff0c\u628a\u5f53\u524d\u7ebf\u7a0b\u7684 ID \u5199\u5165\u5230 MarkWord","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c cas \u6210\u529f\uff0c \u8868\u793a\u5df2\u7ecf\u83b7\u5f97\u4e86\u9501\u5bf9\u8c61\u7684\u504f\u5411\u9501\uff0c\u63a5\u7740\u6267\u884c\u540c\u6b65\u4ee3\u7801\u5757"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c cas \u5931\u8d25\uff0c\u8bf4\u660e\u6709\u5176\u4ed6\u7ebf\u7a0b\u5df2\u7ecf\u83b7\u5f97\u4e86\u504f\u5411\u9501\uff0c\u5f53\u524d\u9501\u5b58\u5728\u7ade\u4e89\uff0c\u9700\u8981\u64a4\u9500\u5df2\u83b7\u5f97\u504f\u5411\u9501\u7684\u7ebf\u7a0b\uff0c\u5e76\u5347\u7ea7\u4e3a\u8f7b\u91cf\u7ea7\u9501"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5982\u679c\u662f",(0,l.jsx)(e.strong,{children:"\u5df2\u504f\u5411"}),"\u72b6\u6001\uff0c\u9700\u8981\u68c0\u67e5\u5f53\u524d\u7ebf\u7a0b\u662f\u4e0d\u662f\u8bb0\u5f55\u7ebf\u7a0b\uff08 MarkWord \u4e2d\u5b58\u50a8\u7684ThreadID \u662f\u5426\u7b49\u4e8e\u5f53\u524d\u7ebf\u7a0b\u7684 ThreadID\u975ecas\uff09","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u76f8\u7b49\uff0c\u4e0d\u9700\u8981\u518d\u6b21\u83b7\u5f97\u9501\uff08\u52a0\u9501\uff0c\u89e3\u9501\uff0c\u66f4\u65b0MarkWord\uff09\uff0c\u53ef\u76f4\u63a5\u6267\u884c\u540c\u6b65\u4ee3\u7801\u5757"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u76f8\u7b49\uff0c\u504f\u5411\u6a21\u5f0f\u7acb\u523b\u7ed3\u675f\uff0c\u8bf4\u660e\u5f53\u524d\u9501\u504f\u5411\u4e8e\u5176\u4ed6\u7ebf\u7a0b\uff0c\u9700\u8981\u64a4\u9500\u504f\u5411\u9501\u5e76\u5347\u7ea7\u5230\u8f7b\u91cf\u7ea7\u9501"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u8f7b\u91cf\u7ea7\u9501",children:"\u8f7b\u91cf\u7ea7\u9501"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5b58\u5728\u7ade\u4e89\u7684\u60c5\u51b5\u4e0b\uff0c\u77ed\u671f\u5185\u4e0d\u4f1a\u963b\u585e\u5417\uff0c\u4f1a\u5148\u901a\u8fc7\u81ea\u65cb\u5c1d\u8bd5\u83b7\u53d6\u9501"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5148\u5224\u65ad\u5bf9\u8c61\u7684\u9501\u72b6\u6001\u662f\u4e0d\u662f\u65e0\u9501\u72b6\u6001\uff08\u6807\u5fd7\u4f4d01\uff0c\u504f\u5411\u6a21\u5f0f0\uff09"}),"\n",(0,l.jsxs)(e.li,{children:["\u7136\u540e\u5728\u6808\u5e27\u4e2d\u590d\u5236\u4e00\u4efd\u5bf9\u8c61\u5934\u7684MarkWord\uff0ccas\u5c1d\u8bd5\u66f4\u65b0\u5bf9\u8c61\u5934MarkWord\u7684\u6307\u9488","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679ccas\u66f4\u65b0\u6210\u529f\uff0c\u6807\u5fd7\u4f4d\u6539\u621000"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u5931\u8d25\uff0cdouble check\u4e00\u4e0bMarkWord\u7684\u6307\u9488\uff0c\u5982\u679c\u662f\u5f53\u524d\u7ebf\u7a0b\u7684\u6307\u9488\uff0c\u66f4\u65b0\u6210\u529f"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679cdouble check\u5931\u8d25\uff0c\u610f\u5473\u7740\u6709\u591a\u7ebf\u7a0b\u7ade\u4e89\uff0c\u5f53\u524d\u7ebf\u7a0b\u4f1a\u81ea\u65cb\u591a\u5c1d\u8bd5\u51e0\u6b21\uff0c\u5f53\u81ea\u65cb\u8d85\u8fc7\u4e00\u5b9a\u6b21\u6570\uff0c\u6216\u8005\u6709\u7b2c\u4e09\u4e2a\u7ebf\u7a0b\u6765\u7ade\u4e89\u7684\u65f6\u5019\uff0c\u5347\u7ea7\u5230\u91cd\u91cf\u7ea7\u9501"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\u91cd\u91cf\u7ea7\u9501",children:"\u91cd\u91cf\u7ea7\u9501"})]})}const o=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,l.jsx)(e,Object.assign({},n,{children:(0,l.jsx)(h,n)})):h(n)}},11151:(n,e,i)=>{i.d(e,{Zo:()=>c,ah:()=>r});var l=i(67294);const s=l.createContext({});function r(n){const e=l.useContext(s);return l.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const d={};function c({components:n,children:e,disableParentContext:i}){let c;return c=i?"function"==typeof n?n({}):n||d:r(n),l.createElement(s.Provider,{value:c},e)}}}]);