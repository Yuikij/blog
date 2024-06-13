"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3168],{33962:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var i=s(85893),l=s(11151);const r={},o=void 0,t={id:"publishClass/cs186/note/pro0&1",title:"pro0&1",description:"Note1  Basic Queries",source:"@site/docs/publishClass/cs186/note/pro0&1.md",sourceDirName:"publishClass/cs186/note",slug:"/publishClass/cs186/note/pro0&1",permalink:"/kibou/docs/publishClass/cs186/note/pro0&1",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"publishClass",previous:{title:"Note\u8bb0\u5f55",permalink:"/kibou/docs/category/note\u8bb0\u5f55-1"},next:{title:"pro2",permalink:"/kibou/docs/publishClass/cs186/note/pro2"}},d={},c=[{value:"Note1  Basic Queries",id:"note1--basic-queries",level:2},{value:"NULL\u7684\u5904\u7406",id:"null\u7684\u5904\u7406",level:3},{value:"\u805a\u5408",id:"\u805a\u5408",level:3},{value:"HAVING",id:"having",level:3},{value:"Note2  Joins &amp; Subqueries",id:"note2--joins--subqueries",level:2},{value:"Note3 Disks and Files",id:"note3-disks-and-files",level:2},{value:"Memory and Disk",id:"memory-and-disk",level:3},{value:"Files, Pages, Records",id:"files-pages-records",level:3},{value:"Choosing File Types",id:"choosing-file-types",level:3},{value:"Heap File",id:"heap-file",level:4},{value:"Sorted Files",id:"sorted-files",level:4},{value:"A Note on Counting Header Pages",id:"a-note-on-counting-header-pages",level:3},{value:"Record Types",id:"record-types",level:3},{value:"Page Formats",id:"page-formats",level:3},{value:"Field Types",id:"field-types",level:3}];function a(e){const n=Object.assign({h2:"h2",h3:"h3",ul:"ul",li:"li",column:"column",pre:"pre",code:"code",p:"p",blockquote:"blockquote",img:"img",h4:"h4"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"note1--basic-queries",children:"Note1  Basic Queries"}),"\n",(0,i.jsx)(n.h3,{id:"null\u7684\u5904\u7406",children:"NULL\u7684\u5904\u7406"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NULL\u7684\u4efb\u4f55\u8ba1\u7b97\u90fd\u662fNULL\uff0c\u5305\u62ecx = NULL"}),"\n",(0,i.jsx)(n.li,{children:"WHERE NULL \u610f\u5473\u7740 WHERE FALSE\uff0c\u4e0d\u4f1a\u5305\u542b\u4efb\u4f55\u7ed3\u679c"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u805a\u5408",children:"\u805a\u5408"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9664COUNT\uff08*\uff09\u4e4b\u5916\uff0c\u6bcf\u4e2a\u805a\u5408\u51fd\u6570\u90fd\u5ffd\u7565NULL\u503c\uff0c\u56e0\u6b64COUNT(",(0,i.jsx)(n.column,{children:") \u8fd4\u56de\u6307\u5b9a\u5217\u7684\u975eNULL\u503c\u6570\u91cf\uff0c\u800cCOUNT(*)\u8fd4\u56de\u6574\u4e2a\u8868\u4e2d\u7684\u884c\u6570"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"having",children:"HAVING"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"WHERE occurs before grouping. It filters out uninteresting rows.\nWHERE \u53d1\u751f\u5728\u5206\u7ec4\u4e4b\u524d\u3002\u5b83\u8fc7\u6ee4\u6389\u4e0d\u611f\u5174\u8da3\u7684\u884c\u3002"}),"\n",(0,i.jsx)(n.li,{children:"HAVING occurs after grouping. It filters out uninteresting groups.\nHAVING \u53d1\u751f\u5728\u5206\u7ec4\u4e4b\u540e\u3002\u5b83\u8fc7\u6ee4\u6389\u4e0d\u611f\u5174\u8da3\u7684\u7fa4\u4f53\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"note2--joins--subqueries",children:"Note2  Joins & Subqueries"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Subquery Factoring"}),"\n",(0,i.jsxs)(n.li,{children:["WITH \u63d0\u53d6\u4e00\u4e2a\u5b50\u67e5\u8be2\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"-- \u7528\u540d\u79f0\u7b80\u5316\nWITH courseEnrollment AS (\n  SELECT c.num AS num1, c.name, e.num AS num2, e.students\n  FROM courses AS c INNER JOIN enrollment AS e\n  ON c.num = e.num;\n)\n-- \u5c06\u7b80\u5316\u7684courseEnrollment\u5f53\u6210\u81ea\u5df1\u7684\u8868\nSELECT num1, name, students\nFROM courseEnrollment\nWHERE students > 700;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"note3-disks-and-files",children:"Note3 Disks and Files"}),"\n",(0,i.jsx)(n.h3,{id:"memory-and-disk",children:"Memory and Disk"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u78c1\u76d8\u7684\u8bfb\u5199\u6548\u7387\u5f88\u4f4e\uff0c\u4f20\u8f93\u7684\u5355\u4f4d\u662f\u9875"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8bbf\u95ee\u78c1\u76d8\uff08\u8bfb\u5199\uff09\u9875\u9762/\u5757 \u7684\u65f6\u95f4\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"seek time (moving arms to position disk head on track);  2-3 ms on average"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5bfb\u9053\u65f6\u95f4\uff08\u79fb\u52a8\u78c1\u81c2\u5c06\u78c1\u76d8\u5934\u5b9a\u4f4d\u5728\u78c1\u9053\u4e0a\uff09\uff1b  \u5e73\u5747 2-3 \u6beb\u79d2"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"rotational delay (waiting for block to rotate under head); 0-4 ms (15000 RPM)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u65cb\u8f6c\u5ef6\u8fdf\uff08\u7b49\u5f85\u65b9\u5757\u5728\u5934\u4e0b\u65cb\u8f6c\uff09\uff1b 0-4 \u6beb\u79d2\uff0815000 \u8f6c/\u5206\u949f\uff09"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"transfer time (actually moving data to/from disk surface); 0.25 ms per 64KB page"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4f20\u8f93\u65f6\u95f4\uff08\u5b9e\u9645\u5c06\u6570\u636e\u79fb\u5165/\u79fb\u51fa\u78c1\u76d8\u8868\u9762\uff09\uff1b\u6bcf 64KB \u9875 0.25 \u6beb\u79d2"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u78c1\u76d8\u7a7a\u95f4\u7ba1\u7406\u662f DBMS \u7684\u6700\u4f4e\u5c42\u3002\u5b83\u8d1f\u8d23\u7ba1\u7406\u78c1\u76d8\u7a7a\u95f4\u3002\u5176\u4e3b\u8981\u7528\u9014\u5305\u62ec\u5c06\u9875\u9762\u6620\u5c04\u5230\u78c1\u76d8\u4e0a\u7684\u4f4d\u7f6e\u3001\u5c06\u9875\u9762\u4ece\u78c1\u76d8\u52a0\u8f7d\u5230\u5185\u5b58\u4ee5\u53ca\u5c06\u9875\u9762\u4fdd\u5b58\u56de\u78c1\u76d8\u5e76\u786e\u4fdd\u5199\u5165\u3002\n",(0,i.jsx)(n.img,{alt:"alt text",src:s(34099).Z+"",width:"281",height:"306"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"files-pages-records",children:"Files, Pages, Records"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7cfb\u7edf\u7684\u57fa\u672c\u5355\u4f4d\u662frecord (row)\uff0crecord\u88ab\u7ec4\u7ec7\u6210relations (tables) \uff0c\u53ef\u4ee5\u5728\u5185\u5b58\u4e2d\u88ab\u589e\u5220\u6539\u67e5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u78c1\u76d8\u6570\u636e\u7684\u57fa\u672c\u5355\u4f4d\u662fpage\uff0c\u6bcf\u5f20\u8868\u88ab\u88ab\u7ec4\u7ec7\u6210\u591a\u4e2apage\u5f62\u6210\u4e86\u4e00\u4e2afile\uff0cfile\u88ab\u7ec4\u7ec7\u6210database\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Based on the relation\u2019s schema and access pattern, the database will determine: (1) type of file used, (2) how pages are organized in the file, (3) how records are organized on each page, (4) and how each record is formatted."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8e\u5173\u7cfb\u6a21\u5f0f\u7684\u8bbf\u95ee\u6a21\u5f0f\uff0c\u6570\u636e\u5e93\u5c06\u51b3\u5b9a\uff1a(1) \u4f7f\u7528\u7684\u6587\u4ef6\u7c7b\u578b\uff0c(2) \u6587\u4ef6\u4e2d\u7684\u9875\u9762\u5982\u4f55\u7ec4\u7ec7\uff0c(3) \u6bcf\u4e2a\u9875\u9762\u4e0a\u7684\u8bb0\u5f55\u5982\u4f55\u7ec4\u7ec7\uff0c(4) \u4ee5\u53ca\u6bcf\u4e2a\u9875\u9762\u5982\u4f55\u7ec4\u7ec7\u8bb0\u5f55\u5df2\u683c\u5f0f\u5316\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"choosing-file-types",children:"Choosing File Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There are two main types of files: Heap Files and Sorted Files."}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e\u6bcf\u5f20\u8868\uff0c\u6570\u636e\u5e93\u5c06\u901a\u8fc7I/O\u6210\u672c\u6765\u9009\u62e9\u7c7b\u578b\uff0c1I/O\u76f8\u5f53\u4e8e\u8bfb\u6216\u8005\u5199\u4e00\u9875"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"heap-file",children:"Heap File"}),"\n",(0,i.jsx)(n.h4,{id:"sorted-files",children:"Sorted Files"}),"\n",(0,i.jsx)(n.h3,{id:"a-note-on-counting-header-pages",children:"A Note on Counting Header Pages"}),"\n",(0,i.jsx)(n.h3,{id:"record-types",children:"Record Types"}),"\n",(0,i.jsx)(n.h3,{id:"page-formats",children:"Page Formats"}),"\n",(0,i.jsx)(n.h3,{id:"field-types",children:"Field Types"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}},34099:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/image-e2c8d599b647e2af66e5c14822df6b3d.png"},11151:(e,n,s)=>{s.d(n,{Zo:()=>t,ah:()=>r});var i=s(67294);const l=i.createContext({});function r(e){const n=i.useContext(l);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function t({components:e,children:n,disableParentContext:s}){let t;return t=s?"function"==typeof e?e({}):e||o:r(e),i.createElement(l.Provider,{value:t},n)}}}]);