"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7066],{41939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(85893),c=t(11151);const r={},a="CTE",d={id:"database/MySQL/\u67e5\u8be2\u8bed\u53e5/CTE",title:"CTE",description:"Recursive Common Table Expressions:\u9012\u5f52\u516c\u5171\u8868\u8fbe\u5f0f",source:"@site/docs/database/MySQL/\u67e5\u8be2\u8bed\u53e5/CTE.mdx",sourceDirName:"database/MySQL/\u67e5\u8be2\u8bed\u53e5",slug:"/database/MySQL/\u67e5\u8be2\u8bed\u53e5/CTE",permalink:"/docs/database/MySQL/\u67e5\u8be2\u8bed\u53e5/CTE",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"database",previous:{title:"Undo log",permalink:"/docs/database/MySQL/\u65e5\u5fd7\u7cfb\u7edf/undoLog"},next:{title:"\u4e00\u4e9b\u573a\u666f\u4e0b\u7684\u67e5\u8be2\u8bed\u53e5",permalink:"/docs/database/MySQL/\u67e5\u8be2\u8bed\u53e5/SQLStatement"}},i={},o=[{value:"Excerpt",id:"excerpt",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"cte",children:"CTE"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Recursive Common Table Expressions:\u9012\u5f52\u516c\u5171\u8868\u8fbe\u5f0f"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h2,{id:"excerpt",children:"Excerpt"}),"\n",(0,s.jsx)(n.p,{children:"A conversational AI system that listens, learns, and challenges"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u901a\u8fc7\u4e00\u4e2a\u7ed9\u5b9a\u7684 ",(0,s.jsx)(n.code,{children:"id"})," \u67e5\u8be2\u6240\u6709\u4e0a\u7ea7\uff0c\u4f60\u901a\u5e38\u9700\u8981\u4f7f\u7528\u9012\u5f52\u67e5\u8be2\u3002\u5728 MySQL 8.0 \u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528\u9012\u5f52\u516c\u5171\u8868\u8fbe\u5f0f (Recursive Common Table Expressions, CTE) \u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u4f60\u7684\u8868\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"my_table"}),"\uff0c\u5e76\u4e14\u5b83\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sqlCopy codeCREATE TABLE my_table (\n    id INT PRIMARY KEY,\n    name VARCHAR(255),\n    fid INT\n);\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u4f7f\u7528\u9012\u5f52 CTE \u4ece\u7ed9\u5b9a\u7684 ",(0,s.jsx)(n.code,{children:"id"})," \u67e5\u627e\u6240\u6709\u4e0a\u7ea7\u7684 SQL \u67e5\u8be2\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sqlCopy codeWITH RECURSIVE cte AS (\n    SELECT id, name, fid\n    FROM my_table\n    WHERE id = ?  -- \u8fd9\u91cc\u7684 ? \u662f\u4f60\u8981\u67e5\u8be2\u7684\u8d77\u59cb id\n    UNION ALL\n    SELECT m.id, m.name, m.fid\n    FROM my_table m\n    JOIN cte ON m.id = cte.fid\n)\nSELECT * FROM cte;\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5c06\u6b64\u67e5\u8be2\u4e0e MyBatis \u96c6\u6210\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u793a\u4f8b\u7684 MyBatis Mapper \u6587\u4ef6\u7247\u6bb5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'xmlCopy code<mapper namespace="YourMapperNamespace">\n\n    <select id="selectAllAncestors" parameterType="int" resultType="YourResultType">\n        WITH RECURSIVE cte AS (\n            SELECT id, name, fid\n            FROM my_table\n            WHERE id = #{id}\n            UNION ALL\n            SELECT m.id, m.name, m.fid\n            FROM my_table m\n            JOIN cte ON m.id = cte.fid\n        )\n        SELECT * FROM cte;\n    </select>\n\n</mapper>\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u4f60\u9700\u8981\u5bf9\u4e0a\u8ff0\u4ee3\u7801\u8fdb\u884c\u9002\u5f53\u7684\u8c03\u6574\uff0c\u4ee5\u9002\u5e94\u4f60\u7684\u6570\u636e\u5e93\u7ed3\u6784\u548c MyBatis \u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u4e0d\u662f\u6240\u6709\u7684 MySQL \u7248\u672c\u90fd\u652f\u6301 CTE\u3002\u5982\u679c\u4f60\u7684 MySQL \u7248\u672c\u4f4e\u4e8e 8.0\uff0c\u4f60\u9700\u8981\u8003\u8651\u5176\u4ed6\u65b9\u6cd5\uff0c\u4f8b\u5982\u5728\u5e94\u7528\u4ee3\u7801\u4e2d\u8fdb\u884c\u9012\u5f52\u67e5\u8be2\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var s=t(67294);const c={},r=s.createContext(c);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);