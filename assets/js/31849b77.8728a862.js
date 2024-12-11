"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3608],{61608:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=i(74848),s=i(28453);const r={},c=void 0,d={id:"publishClass/cs186/note/proj3",title:"proj3",description:"Buffer Management",source:"@site/docs/publishClass/cs186/note/proj3.md",sourceDirName:"publishClass/cs186/note",slug:"/publishClass/cs186/note/proj3",permalink:"/kibou/docs/publishClass/cs186/note/proj3",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"publishClass",previous:{title:"proj2",permalink:"/kibou/docs/publishClass/cs186/note/proj2"},next:{title:"Project\u8bb0\u5f55",permalink:"/kibou/docs/category/project\u8bb0\u5f55-1"}},h={},o=[{value:"Buffer Management",id:"buffer-management",level:2},{value:"Buffer Pool",id:"buffer-pool",level:3},{value:"Handling Page Requests",id:"handling-page-requests",level:3},{value:"LRU Replacement and Clock Policy",id:"lru-replacement-and-clock-policy",level:3},{value:"Sequential Scanning Performance - LRU",id:"sequential-scanning-performance---lru",level:4},{value:"MRU Replacement  MRU",id:"mru-replacement--mru",level:3},{value:"Relational Algebra",id:"relational-algebra",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Hashing",id:"hashing",level:2},{value:"Motivation \u52a8\u673a",id:"motivation-\u52a8\u673a",level:3},{value:"General Strategy \u603b\u4f53\u7b56\u7565",id:"general-strategy-\u603b\u4f53\u7b56\u7565",level:3},{value:"The Algorithm \u5177\u4f53\u7b97\u6cd5",id:"the-algorithm-\u5177\u4f53\u7b97\u6cd5",level:3},{value:"Sorting",id:"sorting-1",level:2},{value:"Two Way External Merge Sort",id:"two-way-external-merge-sort",level:3},{value:"Iterators and Joins",id:"iterators-and-joins",level:2},{value:"Simple Nested Loop Join",id:"simple-nested-loop-join",level:3},{value:"Page Nested Loop Join",id:"page-nested-loop-join",level:3},{value:"Block Nested Loop Join",id:"block-nested-loop-join",level:3},{value:"Index Nested Loop Join",id:"index-nested-loop-join",level:3},{value:"Hash Join",id:"hash-join",level:3},{value:"Naive Hash Join",id:"naive-hash-join",level:4},{value:"Grace Hash Join",id:"grace-hash-join",level:4},{value:"Sort-Merge Join",id:"sort-merge-join",level:3},{value:"Query Optimization",id:"query-optimization",level:3},{value:"\u603b\u7ed3\u548c\u95ee\u9898",id:"\u603b\u7ed3\u548c\u95ee\u9898",level:2}];function a(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"buffer-management",children:"Buffer Management"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ecb\u4e8e\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406\u548c\u57fa\u4e8e\u9875\u7684\u6587\u4ef6\u7d22\u5f15\u7ba1\u7406\u4e4b\u95f4\u7684\u63a5\u53e3"}),"\n",(0,l.jsx)(e.li,{children:"\u8d1f\u8d23\u7ba1\u7406\u5185\u5b58\u4e2d\u7684\u9875\uff0c\u5e76\u5904\u7406\u6765\u81eafile and index manager\u7684\u8bf7\u6c42\uff0c\u540c\u65f6\u4f1a\u5904\u7406\u9010\u51fa\u9875\u9762\u548c\u5c06\u65b0\u9875\u9762\u8bfb\u5165\u5185\u5b58"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"buffer-pool",children:"Buffer Pool"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7\u4e00\u4e2ametadata table\u6765\u8bb0\u5f55\u5185\u5b58\u7684\u5e27\u4e0e\u78c1\u76d8\u7684\u9875\u7684\u6620\u5c04\u5173\u7cfb\u548c\u72b6\u6001\n",(0,l.jsx)(e.img,{alt:"alt text",src:i(5171).A+"",width:"443",height:"173"})]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Frame ID that is uniquely associated with a memory address"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u4e0e\u5185\u5b58\u5730\u5740\u552f\u4e00\u5173\u8054\u7684\u5e27 ID"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Page ID for determining which page a frame currently contains"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u7528\u4e8e\u786e\u5b9a\u6846\u67b6\u5f53\u524d\u5305\u542b\u54ea\u4e2a\u9875\u9762\u7684\u9875\u9762 ID"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Dirty Bit for verifying whether or not a page has been modified"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u810f\u4f4d\u7528\u4e8e\u9a8c\u8bc1\u9875\u9762\u662f\u5426\u5df2\u88ab\u4fee\u6539\uff0c\u5185\u5b58\u4e2d\u66f4\u65b0\u540e\u4e3a1\uff0c\u5199\u56de\u78c1\u76d8\u540e\u4e3a0"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Pin Count for tracking the number of requestors currently using a page"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"Pin \u8ba1\u6570\uff0c\u7528\u4e8e\u8ddf\u8e2a\u5f53\u524d\u4f7f\u7528\u9875\u9762\u7684\u8bf7\u6c42\u8005\u6570\u91cf"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"handling-page-requests",children:"Handling Page Requests"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u8bf7\u6c42\u9875\u9762\u5df2\u5b58\u5728\uff1a\u589e\u52a0\u8be5\u9875\u9762\u7684\u5f15\u811a\u8ba1\u6570\uff08pin count\uff09\u4f1a\u5e76\u8fd4\u56de\u8be5\u9875\u9762\u7684\u5185\u5b58\u5730\u5740\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u8bf7\u6c42\u9875\u4e0d\u5b58\u5728\u5e76\u4e14\u5185\u5b58\u4ecd\u6709\u7a7a\u95f4\uff1a\u627e\u5230\u4e0b\u4e00\u4e2a\u7a7a\u5e27\u5e76\u5c06\u8be5\u9875\u63d2\u5165\u8be5\u5e27\u3002\u8be5\u9875\u7684\u5f15\u811a\u8ba1\u6570\u8bbe\u7f6e\u4e3a 1\uff0c\u5e76\u8fd4\u56de\u8be5\u9875\u7684\u5185\u5b58\u5730\u5740"}),"\n",(0,l.jsx)(e.li,{children:"\u8bf7\u6c42\u9875\u4e0d\u5b58\u5728\u5e76\u4e14\u5185\u5b58\u6ca1\u6709\u7a7a\u5e27\uff1a\u9700\u8981\u7528 replacement policy\u6765\u9010\u51fa\u9875\u9762\uff0c\u5982\u679c\u9a71\u9010\u7684\u65f6\u5019\u9875\u9762\u662f\u810f\u7684\uff0c\u5219\u5c06\u5176\u5199\u56de\u78c1\u76d8"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"lru-replacement-and-clock-policy",children:"LRU Replacement and Clock Policy"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"LRU(Least Recently Used)\uff1a\u6700\u8fd1\u6700\u5c11\u88ab\u4f7f\u7528\uff0c\u5373\u6700\u8fd1\u6ca1\u6709\u88ab\u8bbf\u95ee\u7684\u9875\u9762"}),"\n",(0,l.jsx)(e.li,{children:"\u5728\u5143\u6570\u636e\u8868\u4e2d\u52a0\u4e00\u5217Last Used"}),"\n",(0,l.jsxs)(e.li,{children:["\u6216\u8005\u4f7f\u7528Clock Policy\u7b56\u7565\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5143\u6570\u636e\u8868\u589e\u52a0\u5f15\u7528\u4f4d\u548c\u4e00\u4e2a\u65f6\u949f\u6307\u9488\uff0c\u65f6\u949f\u6307\u9488\u6307\u5411\u67d0\u4e00\u5e27"}),"\n"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u521d\u59cb\u5316\uff1a\n\u65f6\u949f\u6307\u9488\u6307\u5411\u7b2c\u4e00\u4e2a\u672a\u56fa\u5b9a\u7684\u5e27\uff0c\u6240\u6709\u9875\u9762\u7684\u53c2\u8003\u4f4d\u521d\u59cb\u4e3a1\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u8bbf\u95ee\u9875\u9762\uff1a\n\u6bcf\u5f53\u8bbf\u95ee\u4e00\u4e2a\u9875\u9762\uff08\u65e0\u8bba\u662f\u8bfb\u8fd8\u662f\u5199\uff09\uff0c\u5c06\u8be5\u9875\u9762\u7684\u53c2\u8003\u4f4d\u8bbe\u4e3a1\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u9875\u9762\u66ff\u6362\uff1a\n\u5f53\u9700\u8981\u5c06\u65b0\u9875\u9762\u8bfb\u5165\u5df2\u6ee1\u7684\u7f13\u51b2\u6c60\u65f6\uff0c\u65f6\u949f\u7b97\u6cd5\u4f1a\u8fdb\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u68c0\u67e5\u53c2\u8003\u4f4d\uff1a\u4ece\u65f6\u949f\u6307\u9488\u5f53\u524d\u6240\u6307\u7684\u5e27\u5f00\u59cb\uff0c\u68c0\u67e5\u5176\u53c2\u8003\u4f4d\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u53c2\u8003\u4f4d\u4e3a1\uff1a\u5982\u679c\u53c2\u8003\u4f4d\u4e3a1\uff0c\u8868\u793a\u8be5\u9875\u9762\u6700\u8fd1\u88ab\u8bbf\u95ee\u8fc7\uff0c\u5c06\u53c2\u8003\u4f4d\u8bbe\u4e3a0\uff0c\u5e76\u5c06\u65f6\u949f\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5e27\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u53c2\u8003\u4f4d\u4e3a0\uff1a\u5982\u679c\u53c2\u8003\u4f4d\u4e3a0\uff0c\u8868\u793a\u8be5\u9875\u9762\u6700\u8fd1\u672a\u88ab\u8bbf\u95ee\uff0c\u9009\u62e9\u8be5\u9875\u9762\u8fdb\u884c\u66ff\u6362\u3002\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u8be5\u9875\u9762\u6709\u4fee\u6539\uff08\u810f\u4f4d\u4e3a1\uff09\uff0c\u5c06\u9875\u9762\u5199\u56de\u78c1\u76d8\uff0c\u5e76\u5c06\u810f\u4f4d\u8bbe\u4e3a0\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5c06\u65b0\u9875\u9762\u8bfb\u5165\u8be5\u5e27\uff0c\u5c06\u5176\u53c2\u8003\u4f4d\u8bbe\u4e3a1\uff0c\u5e76\u5c06\u65f6\u949f\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5e27\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5206\u6790\uff1a\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53c2\u8003\u4f4d1\u4ee3\u8868\u88ab\u8bbf\u95ee\u8fc7\uff0c0\u4ee3\u8868\u672a\u88ab\u8bbf\u95ee\u8fc7"}),"\n",(0,l.jsx)(e.li,{children:"\u66ff\u6362\u53d1\u751f\u65f6\uff0c\u88ab\u626b\u63cf\u8fc7\u7684\u4f1a\u88ab\u7f6e\u62100"}),"\n",(0,l.jsx)(e.li,{children:"\u9891\u7e41\u8bbf\u95ee\u7684\u9875\uff0c\u4f1a\u5728\u626b\u63cf\u4e4b\u540e\u4e5f\u88ab\u7f6e\u62101"}),"\n",(0,l.jsx)(e.li,{children:"\u65e0\u4eba\u95ee\u6d25\u7684\uff0c\u626b\u63cf\u4e4b\u540e\u4e00\u76f4\u5c31\u662f0"}),"\n",(0,l.jsxs)(e.li,{children:["\u6bd4\u8f83LRU\u7684\u4e0d\u4e25\u8c28\u7684\u60c5\u51b5\uff1a\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e00\u51715s\u65f6\u95f4\uff0c2s\u5185A\u88ab\u8bbf\u95ee\u4e862\u6b21\uff0cB\u88ab\u8bbf\u95ee\u4e862\u6b21\uff0c3s\u7684\u65f6\u5019A\u88ab\u8bbf\u95ee\u4e86\u4e00\u6b21\uff0c4s\u7684\u65f6\u5019\u626b\u63cf\u66ff\u6362\u4e86C\uff0c5S\u7684\u65f6\u5019\u5148\u626b\u63cf\u4e86A\uff0cA\u5c31\u88ab\u66ff\u6362\u4e86"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"sequential-scanning-performance---lru",children:"Sequential Scanning Performance - LRU"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u987a\u5e8f\u626b\u63cf\u7684\u6027\u80fd\u4f4e\u4e0b"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5f53\u9891\u7e41\u8bbf\u95ee\u7684\u9875\u9762\u6570 > \u7f13\u51b2\u6c60\u5927\u5c0f\uff0cLRU\u6027\u80fd\u4f1a\u964d\uff0c\u79f0\u4e3asequential flooding"}),"\n",(0,l.jsx)(e.li,{children:"\u6bd4\u5982\u7f13\u51b2\u6c60\u7684\u5e27\u6570\u662f3\uff0c\u4f46\u662f\u9700\u8981\u6309\u987a\u5e8f\u8bbf\u95eeABCDABCD..."}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"mru-replacement--mru",children:"MRU Replacement  MRU"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"MRU(Most Recently Used)\uff1a\u6700\u8fd1\u88ab\u4f7f\u7528\uff0c\u5373\u6700\u8fd1\u88ab\u8bbf\u95ee\u7684\u9875\u9762\uff0c\u548cLRU\u76f8\u53cd\u5417"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6570\u636e\u8bbf\u95ee\u6a21\u5f0f\u5177\u6709\u8f83\u5f3a\u7684\u5468\u671f\u6027\uff0c\u5e76\u4e14\u6700\u8fd1\u8bbf\u95ee\u7684\u6570\u636e\u4e0d\u592a\u53ef\u80fd\u518d\u6b21\u88ab\u8bbf\u95ee\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7279\u5b9a\u5e94\u7528\u7a0b\u5e8f\u7f13\u5b58\u6570\u636e\u7684\u6a21\u5f0f\u66f4\u9002\u5408 MRU \u7b56\u7565\uff0c\u4f8b\u5982\u67d0\u4e9b\u7c7b\u578b\u7684\u56fe\u5f62\u5904\u7406\u6216\u591a\u5a92\u4f53\u7f13\u5b58\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6bd4\u8f83\u9002\u5408\u4e0a\u8ff0\u7684\u987a\u5e8f\u626b\u63cf"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"relational-algebra",children:"Relational Algebra"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u903b\u8f91\u8fd0\u7b97\u7b26\uff1a\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Projection: \u03c0\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6295\u5f71\u64cd\u4f5c\uff0c\u7528\u4e8e\u9009\u62e9\u8868\u4e2d\u6307\u5b9a\u7684\u5217"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Selection: \u03c3\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u9009\u62e9\u64cd\u4f5c\uff0c\u7528\u4e8e\u4ece\u8868\u4e2d\u9009\u62e9\u6ee1\u8db3\u6761\u4ef6\u7684\u884c\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Union: \u222a\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5e76\u96c6\u64cd\u4f5c\uff0c\u7528\u4e8e\u5c06\u4e24\u4e2a\u5173\u7cfb\u4e2d\u7684\u6240\u6709\u884c\u5408\u5e76\uff08\u53bb\u91cd\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Set Difference: \u2212\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5dee\u96c6\u64cd\u4f5c\uff0c\u7528\u4e8e\u4ece\u4e00\u4e2a\u5173\u7cfb\u4e2d\u79fb\u9664\u53e6\u4e00\u4e2a\u5173\u7cfb\u4e2d\u5b58\u5728\u7684\u884c\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Cross Product: \xd7\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7b1b\u5361\u5c14\u79ef\u64cd\u4f5c\uff0c\u5c06\u4e24\u4e2a\u5173\u7cfb\u7684\u6bcf\u4e00\u884c\u7ec4\u5408\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Joins: \u22c8\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8fde\u63a5\u64cd\u4f5c\uff0c\u901a\u5e38\u7528\u4e8e\u6839\u636e\u6761\u4ef6\u8fde\u63a5\u4e24\u4e2a\u8868\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Rename: \u03c1\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u91cd\u547d\u540d\u64cd\u4f5c\uff0c\u7528\u4e8e\u7ed9\u8868\u6216\u5217\u8d4b\u65b0\u540d\u79f0\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Group By / Aggregation: \u03b3\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5206\u7ec4\u805a\u5408\u64cd\u4f5c\uff0c\u7528\u4e8e\u6309\u6307\u5b9a\u5217\u5206\u7ec4\u5e76\u6267\u884c\u805a\u5408\u51fd\u6570\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"sorting",children:"Sorting"}),"\n",(0,l.jsx)(e.h2,{id:"hashing",children:"Hashing"}),"\n",(0,l.jsx)(e.h3,{id:"motivation-\u52a8\u673a",children:"Motivation \u52a8\u673a"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6709\u65f6\u5019\u4e0d\u5173\u5fc3\u987a\u5e8f\uff0c\u53ea\u60f3\u628a\u76f8\u540c\u7684\u653e\u5728\u4e00\u8d77\uff08group by\uff09\uff0cgrouping like values together is called hashing\n\u7531\u4e8e\u65e0\u6cd5\u5168\u90e8\u4f7f\u7528\u5185\u5b58\uff0c\u9700\u8981\u4f7f\u7528out-of-core hashing algorithm\uff0c\u501f\u52a9\u5916\u90e8\u5b58\u50a8\u6765\u8ba1\u7b97\u548c\u5b58\u50a8"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"general-strategy-\u603b\u4f53\u7b56\u7565",children:"General Strategy \u603b\u4f53\u7b56\u7565"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u7c7b\u4f3cMapReduce?"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"the-algorithm-\u5177\u4f53\u7b97\u6cd5",children:"The Algorithm \u5177\u4f53\u7b97\u6cd5"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5047\u8bbe\u5185\u5b58\u4e2d\u6709B\u4e2a\u53ef\u7528\u5e27"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u53d6\u4e00\u4e2a\u5f53\u4f5cinput buffer,\u5176\u4ed6\u7684\uff08B-1\uff09\u5f53\u4f5c output buffers"}),"\n",(0,l.jsx)(e.li,{children:"\u5f53input buffer\u6765\u4e86\uff0c\u5c31\u7528\u7279\u5b9a\u7684\u54c8\u5e0c\u51fd\u6570\u6563\u5217\u5230\u5404\u4e2a\u5206\u533a\uff0c\u5982\u679c\u8f93\u51fa\u7f13\u51b2\u533a\u5df2\u6ee1\uff0c\u5219\u8be5\u9875\u9762\u5c06\u5237\u65b0\u5230\u78c1\u76d8"}),"\n",(0,l.jsx)(e.li,{children:"\u6765\u81ea\u540c\u4e00\u7f13\u51b2\u533a\u7684\u4efb\u4f55\u5237\u65b0\u9875\u9762\u5c06\u5728\u78c1\u76d8\u4e0a\u5f7c\u6b64\u76f8\u90bb"}),"\n",(0,l.jsx)(e.li,{children:"\u5bf9\u4e8e\u592a\u5927\u7684\u5206\u533a\uff0c\u9700\u8981\u591a\u6b21\u4f7f\u7528\u4e0d\u540c\u7684hash\u51fd\u6570\uff0c\u51cf\u5c0f\u5206\u533a\u5927\u5c0f"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"sorting-1",children:"Sorting"}),"\n",(0,l.jsx)(e.h3,{id:"two-way-external-merge-sort",children:"Two Way External Merge Sort"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5bf9\u6bcf\u4e2a\u5355\u72ec\u9875\u9762\u4e0a\u7684\u8bb0\u5f55\u8fdb\u884c\u6392\u5e8f"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"iterators-and-joins",children:"Iterators and Joins"}),"\n",(0,l.jsx)(e.h3,{id:"simple-nested-loop-join",children:"Simple Nested Loop Join"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6700\u7b80\u5355\u7684\u7b56\u7565\uff0c\u4e24\u5c42for\u5faa\u73af"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u793a\u4f8b\uff1aR join S"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"for each record r in R:\n  for each record s in S:\n    if mach(r,s):\n      yield(r,s)\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"I/O \u6210\u672c\uff1aPageSize(R)+RecordSize(R)*RecordSize(S)"}),"\n"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"R\u7684\u9875\u6570+R\u7684\u8bb0\u5f55\u6570*S\u7684\u8bb0\u5f55\u6570\uff08\u4e00\u9875\u6709\u591a\u6761\u8bb0\u5f55\uff0c\u6309\u9875\u8bfb\u53d6\uff0c\u7136\u540e\u6309\u884c\u67e5\u627e\uff09"}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u7f6e\u6362R\u548cS\u7684\u987a\u5e8f\u7a0d\u5fae\u4f18\u5316\u4e00\u4e0bIO"})}),"\n",(0,l.jsx)(e.h3,{id:"page-nested-loop-join",children:"Page Nested Loop Join"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u57fa\u4e8e\u9875\u9762\u7684\u5d4c\u5957\u5faa\u73af"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u793a\u4f8b\uff1aR join S"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"for each page R_P in R:\n    for each page S_j in S:\n        for each record r in R_P:\n            for each record s in S_j:\n                if \u03b8(r, s):\n                    yield <r, s>\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"I/O \u6210\u672c\uff1aPageSize(R)+PageSize(R)*PageSize(S)"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"block-nested-loop-join",children:"Block Nested Loop Join"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5206\u5757\u5d4c\u5957\u5faa\u73af"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u793a\u4f8b\uff1aR join S"}),"\n"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5047\u8bbe\u7f13\u51b2\u533a\u6709B\u9875\uff0c1\u4e2a\u662f\u8f93\u51fa\u7f13\u51b2\u533a\uff0c1\u4e2a\u7528\u4e8eS\uff0cB-2\u4e2a\u7528\u4e8eR"}),"\n"]}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u5982\u679c\u6709B-2\u4e2a\u9875\uff0c\u90a3\u4e48\u4e00\u6b21\u8bfbB-2\u4e2a\u9875\uff0c\u4e00\u6b21\u8bfb\u4e00\u5757\uff0c\u4e00\u5757\u6709B-2\u4e2a\u9875\uff0cR\u7684\u5927\u5c0f\u662fPageSize(R)\u4e2a\u9875\uff0c\u4e00\u5171\u6709PageSize(R)/(B-2)\u5757"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"# \u524d\u63d0:\u4e00\u6b21\u8bfb\u53d6PageSize(R)\n# PageSize(R)/(B-2)\u4e2ablock\nfor each block B_R in R:\n  # PageSize(S)\n    for each page P_S in S:\n        for each record r in B_R:\n            for each record s in P_S:\n                if \u03b8(r, s):\n                    yield <r, s>\n\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"I/O \u6210\u672c\uff1aPageSize(R)+(PageSize(R)/(B-2))*PageSize(S)"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"index-nested-loop-join",children:"Index Nested Loop Join"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u5728S\u8868\u9700\u8981\u8fde\u63a5\u7684\u5b57\u6bb5\u6709\u7d22\u5f15\u7684\u60c5\u51b5\u4e0b"}),"\n"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u793a\u4f8b\uff1aR join S"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"for each record r in R:\n    for each page s in S where \u03b8(r, s):\n        yield <r, s>\n\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"I/O \u6210\u672c\uff1aPageSize(R)+RecordSize(R)*(\u6bcf\u6b21\u7d22\u5f15\u67e5\u8be2\u7684\u6d88\u8017)"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"hash-join",children:"Hash Join"}),"\n",(0,l.jsx)(e.h4,{id:"naive-hash-join",children:"Naive Hash Join"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u904d\u5386\u5de6\u8868\uff0c\u751f\u6210\u4e00\u4e2ahash\u8868\uff0c\u7136\u540e\u904d\u5386\u53f3\u8868\uff0c\u5728hash\u8868\u4e2d\u67e5\u627e"}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"grace-hash-join",children:"Grace Hash Join"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7528page\u4f5c\u4e3a\u8ba1\u91cf\u5355\u4f4d\uff0c\u5047\u8bbe\u7f13\u51b2\u533a\u5171\u6709B\u4e2a\u9875\uff0c\u53ef\u7528\u7684\u662fB-2\u4e2a\u9875"}),"\n",(0,l.jsx)(e.li,{children:"\u5206\u533a\u7684\u65f6\u5019\uff0c\u5c06\u8868\u5206\u6210B-1\u4e2a\u5206\u533a\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u662f\u5728\u78c1\u76d8\u4e0a\u505a\u7684"}),"\n",(0,l.jsx)(e.li,{children:"\u7f3a\u70b9\u5f88\u660e\u663e\uff0c\u4f8b\u5982\u76f8\u540c\u7684key\u7684\u8bb0\u5f55\u8fc7\u5927\uff0chash\u4e0d\u80fd\u5206\u6563\u5230\u5404\u4e2a\u5206\u533a\uff0c\u90a3\u5c31\u5f97\u629b\u5f02\u5e38\u4e86"}),"\n"]})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u628a\u5de6\u53f3\u8868\u90fd\u5206\u533a\uff0c\u7136\u540e\u5206\u522b\u53bb\u4e00\u4e2a\u8fdb\u884c\u6784\u5efa\u548c\u67e5\u627e"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u5de6\u53f3\u8868\u7684\u9875\u5927\u5c0f\u90fd\u5927\u4e8eB-2\uff0c\u5c31\u9012\u5f52run\uff0c\u7ee7\u7eed\u5206\u6210\u66f4\u5c0f\u7684\u5206\u533a"}),"\n",(0,l.jsx)(e.li,{children:"run\u7684\u65b9\u6cd5\u5c31\u662f\u6784\u5efamap\u548c\u5339\u914d\u8fde\u63a5\u6210\u4e00\u4e2areccord"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"sort-merge-join",children:"Sort-Merge Join"}),"\n",(0,l.jsx)(e.h3,{id:"query-optimization",children:"Query Optimization"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u57fa\u672c\u6b65\u9aa4\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6d41\u5f0f\u8f93\u51fa\uff1aoperator -> iterator  -> another operator"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u603b\u7ed3\u548c\u95ee\u9898",children:"\u603b\u7ed3\u548c\u95ee\u9898"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5e27\u548c\u9875\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"page = block of consecutive virtual memory\nframe = block of consecutive physical memory"}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},5171:(n,e,i)=>{i.d(e,{A:()=>l});const l="data:image/png;base64,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"},28453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var l=i(96540);const s={},r=l.createContext(s);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);