"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6600],{31123:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=i(85893),r=i(11151);const l={title:"Redo log"},d=void 0,s={id:"database/MySQL/\u65e5\u5fd7\u7cfb\u7edf/redoLog",title:"Redo log",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/docs/database/MySQL/\u65e5\u5fd7\u7cfb\u7edf/redoLog.mdx",sourceDirName:"database/MySQL/\u65e5\u5fd7\u7cfb\u7edf",slug:"/database/MySQL/\u65e5\u5fd7\u7cfb\u7edf/redoLog",permalink:"/kibou/docs/database/MySQL/\u65e5\u5fd7\u7cfb\u7edf/redoLog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Redo log"},sidebar:"database",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/kibou/docs/database/MySQL/\u57fa\u7840\u77e5\u8bc6/\u6570\u636e\u7c7b\u578b"},next:{title:"Undo log",permalink:"/kibou/docs/database/MySQL/\u65e5\u5fd7\u7cfb\u7edf/undoLog"}},t={},c=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5982\u4f55\u5de5\u4f5c\u7684",id:"\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"\u5d29\u6e83\u6062\u590d\u7684\u6d41\u7a0b",id:"\u5d29\u6e83\u6062\u590d\u7684\u6d41\u7a0b",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:2},{value:"Q&amp;A",id:"qa",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The redo log is a disk-based data structure used during crash recovery to correct data written by incomplete transactions"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u57fa\u4e8e\u78c1\u76d8\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4fdd\u8bc1\u4e86\u5d29\u6e83\u6062\u590d\uff0c\u4fdd\u8bc1\u5df2\u63d0\u4ea4\u4e8b\u52a1\u7684\u6062\u590d\uff0c\u5e76\u4e14\u901a\u8fc7WAL\u52a0\u5feb\u4e86\u5199\u5165\u7684\u6548\u7387\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u5982\u4f55\u5de5\u4f5c\u7684",children:"\u5982\u4f55\u5de5\u4f5c\u7684"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u57fa\u4e8e\u4e8b\u52a1"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u4e8b\u52a1\u5f00\u59cb"}),"\uff1a \u5f53\u4e8b\u52a1\u542f\u52a8\u65f6\uff0cMySQL\u4f1a\u4e3a\u8be5\u4e8b\u52a1\u5206\u914d\u4e00\u4e2a\u552f\u4e00\u7684\u4e8b\u52a1ID\uff0c\u540c\u65f6\u5728\u5185\u5b58\u4e2d\u4e3a\u8be5\u4e8b\u52a1\u5206\u914d\u4e00\u4e2aRedo Log Buffer\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u6570\u636e\u4fee\u6539"}),"\uff1a\u5728\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u5f53\u5bf9\u6570\u636e\u8fdb\u884c\u4fee\u6539\uff08\u63d2\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664\uff09\u65f6\uff0c\u8fd9\u4e9b\u4fee\u6539\u64cd\u4f5c\u4f1a\u9996\u5148\u88ab\u5199\u5165\u5230\u4e8b\u52a1\u7684Redo Log Buffer\u4e2d\u3002\u8fd9\u662f\u4e00\u4e2a\u5f88\u5feb\u7684\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5b83\u6d89\u53ca\u7684\u662f\u5728\u5185\u5b58\u4e2d\u7684\u7f13\u51b2\u533a\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u6301\u4e45\u5316\u78c1\u76d8"}),"\uff1a\u4e00\u65e6Redo Log Buffer\u6ee1\u4e86\uff0c\u6216\u8005\u5f53\u4e8b\u52a1\u63d0\u4ea4\u65f6\uff0cMySQL\u4f1a\u5c06Redo Log Buffer\u4e2d\u7684\u65e5\u5fd7\u8bb0\u5f55\u5199\u5165\u5230Redo Log\u6587\u4ef6\u4e2d\uff0c\n\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u5728\u4fee\u6539\u5b9e\u9645\u6570\u636e\u4e4b\u524d\uff0c\u4e5f\u5c31\u662fWAL\u3002\u7136\u540e\u66f4\u65b0write pos\uff0c\u5f53\u524d\u5199\u5165\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u66f4\u65b0Checkpoint"}),"\uff1a\u5f53Redo Log\u7684\u8bb0\u5f55\u88ab\u5199\u5165\u5230\u6570\u636e\u9875\uff0c\u66f4\u65b0Checkpoint\uff0cCheckpoint\u5305\u62ec\u4e86LSN\u7684\u4fe1\u606f\uff0cCheckpoint\u5f80\u524d\u7684\u90fd\u53ef\u4ee5\u5220\u4e86"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u6587\u4ef6\u5faa\u73af"}),"\uff1a\u5f53\u4e00\u4e2aRedo Log\u6587\u4ef6\u5199\u6ee1\u6216\u8fbe\u5230\u4e00\u5b9a\u6761\u4ef6\u65f6\uff0cMySQL\u4f1a\u5207\u6362\u5230\u4e0b\u4e00\u4e2aRedo Log\u6587\u4ef6"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Redo Log Buffer\uff1a\u5b58\u50a8\u4e8b\u52a1\u4e2d\u7684\u4fee\u6539\u64cd\u4f5c\u7684\u5185\u5b58\u7f13\u51b2\u533a\uff0c\u7528\u4e8e\u4e8b\u52a1\u7684\u6301\u4e45\u6027\u548c\u6062\u590d\uff0c\u5f02\u6b65\u5199\u5165\u78c1\u76d8\uff0c\u548c\u78c1\u76d8\u7684\u6570\u636e\u9875\u6ca1\u6709\u76f4\u63a5\u7684\u5173\u7cfb\u3002"}),"\n",(0,o.jsx)(n.li,{children:"InnoDB Buffer Pool\uff1a\u5305\u542b\u4e86\u8868\u548c\u7d22\u5f15\u7684\u5b9e\u9645\u6570\u636e\u3002\u4ece\u800c\u51cf\u5c11\u4e86\u78c1\u76d8 I/O \u64cd\u4f5c\uff0c\u63d0\u9ad8\u4e86\u6570\u636e\u8bfb\u5199\u7684\u6548\u7387\uff08\u5237\u65b0\u810f\u9875...\uff09\u3002"}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u5d29\u6e83\u6062\u590d\u7684\u6d41\u7a0b",children:"\u5d29\u6e83\u6062\u590d\u7684\u6d41\u7a0b"}),"\n",(0,o.jsx)(n.p,{children:"-- \uff08todo\uff1a\u9700\u8981\u5b8c\u5584\uff09"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u901a\u8fc7redo log\u627e\u5230\u6700\u8fd1\u4e00\u6b21checkpoint\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u6839\u636echeckpoint\u76f8\u5bf9\u5e94\u7684LSN\u5f00\u59cb\uff0c\u83b7\u53d6\u9700\u8981\u91cd\u505a\u7684\u65e5\u5fd7\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u786e\u5b9a\u9700\u8981\u56de\u6eda\u548c\u9700\u8981\u63d0\u4ea4\u7684\u4e8b\u52a1id\uff0cXID\uff08Transaction ID\uff09"}),"\n",(0,o.jsxs)(n.li,{children:["redo log\u56de\u653e\uff0c\u8bfb\u53d6\u8bb0\u5f55\u5e76\u5e94\u7528\u5230\u5df2\u63d0\u4ea4\u7684\u4e8b\u52a1","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u627e\u5230 XID\uff1a \u4ece prepare \u8bb0\u5f55\u4e2d\u627e\u5230 XID\uff0c\u5373\u4e8b\u52a1\u6807\u8bc6\u7b26"}),"\n",(0,o.jsx)(n.li,{children:"\u5982\u679c\u78b0\u5230\u65e2\u6709prepare\u3001\u53c8\u6709commit\u7684redo log\uff0c\u5c31\u76f4\u63a5\u63d0\u4ea4"}),"\n",(0,o.jsx)(n.li,{children:"\u5982\u679c\u78b0\u5230\u53ea\u6709prepare\u3001\u800c\u6ca1\u6709commit\u7684redo log\uff0c\u5c31\u62ff\u7740XID\u53bbbinlog\u627e\u5bf9\u5e94\u7684\u4e8b\u52a1"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u987a\u5e8f\u7684\u78c1\u76d8\u5199\u5165\uff0c\u6309\u7167\u4e8b\u52a1\u63d0\u4ea4\u987a\u5e8f\u5199\u5165\uff08\uff1f\u6709\u5f85\u52a0\u6df1\u7406\u89e3\uff09"}),"\n",(0,o.jsxs)(n.li,{children:["WAL\uff1aWrite-Ahead Logging","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5728\u4e8b\u52a1\u5bf9\u6570\u636e\u5e93\u8fdb\u884c\u4fee\u6539\u4e4b\u524d\uff0c\u5148\u5c06\u4fee\u6539\u7684\u64cd\u4f5c\u8bb0\u5f55\u5230\u4e00\u4e2a\u6301\u4e45\u7684\u65e5\u5fd7\u6587\u4ef6\u4e2d"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"\u5d29\u6e83\u6062\u590d\uff1a\u6062\u590d\u672a\u6301\u4e45\u5316\u7684\u5185\u5b58\u6570\u636e"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ordinary redo log files","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u666e\u901a\u7684redo log\u6587\u4ef6\uff0c\u6b63\u5728\u4f7f\u7528\u7684\uff0c\u4f7f\u7528#ib_redoN\u547d\u540d"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Spare redo log files","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u7a7a\u95f2\u7684redo log\u6587\u4ef6\uff0c\u4f7f\u7528#ib_redoN_tmp\u547d\u540d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"'#ib_redo582'  '#ib_redo590'  '#ib_redo598'      '#ib_redo606_tmp'\n'#ib_redo583'  '#ib_redo591'  '#ib_redo599'      '#ib_redo607_tmp'\n'#ib_redo584'  '#ib_redo592'  '#ib_redo600'      '#ib_redo608_tmp'\n'#ib_redo585'  '#ib_redo593'  '#ib_redo601'      '#ib_redo609_tmp'\n'#ib_redo586'  '#ib_redo594'  '#ib_redo602'      '#ib_redo610_tmp'\n'#ib_redo587'  '#ib_redo595'  '#ib_redo603_tmp'  '#ib_redo611_tmp'\n'#ib_redo588'  '#ib_redo596'  '#ib_redo604_tmp'  '#ib_redo612_tmp'\n'#ib_redo589'  '#ib_redo597'  '#ib_redo605_tmp'  '#ib_redo613_tmp'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f18\u5316",children:"\u4f18\u5316"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"todo"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"qa",children:"Q&A"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u4e3a\u4ec0\u4e48\u53ea\u7528binlog\u4e0d\u884c","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"binlog\u4e0d\u77e5\u9053\u6570\u636e\u9875\u5237\u5165\u78c1\u76d8\u5bf9\u5e94\u7684\u70b9\uff08redolog\u7684checkpoint\uff09"}),"\n",(0,o.jsx)(n.li,{children:"\u5982\u679c\u6062\u590d\u7684\u8bdd\uff0c\u53ea\u80fd\u6062\u590d\u6ca1\u6709\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u5148\u56de\u6eda\uff08undo log\uff09\u518d\u5e94\u7528"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\u53ea\u7528redo log\u7684\u95ee\u9898","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u751f\u6001\u95ee\u9898\uff0c\u5f88\u591a\u4e2d\u95f4\u4ef6\u7528\u5230\u4e86binlog"}),"\n",(0,o.jsx)(n.li,{children:"\u6ca1\u6cd5\u8bb0\u5f55\u5386\u53f2\u6570\u636e\uff0c\u53ea\u6709\u5185\u5b58\u7684\u6570\u636e\uff0c\u8d77\u4e0d\u5230\u5f52\u6863\u7684\u4f5c\u7528"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ini",children:"\n# --- MySQL 8.0.30 or Higher ---\n# redo log\u7684\u78c1\u76d8\u7a7a\u95f4,\u9ed8\u8ba4\u503c: 104857600 \u5b57\u8282 (100MB)\u3002\u6700\u5927\u91cd\u505a\u65e5\u5fd7\u5bb9\u91cf\u4e3a128GB\u3002\ninnodb_redo_log_capacity = 8589934592;\n# --- Before MySQL 8.0.30 ---\n# \u6bcf\u4e2a\u65e5\u5fd7\u6587\u4ef6\u7684\u5927\u5c0f\ninnodb_log_file_size = 256M\n# \u65e5\u5fd7\u6587\u4ef6\u7684\u6570\u91cf\ninnodb_log_files_in_group = 2 \n\n# redo log buffer\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c\u4e3a 16MB\uff0c\u5982\u679c\u7ecf\u5e38\u6267\u884c\u5927\u7684\u4e8b\u52a1\uff0c\u90a3\u4e0d\u59a8\u589e\u5927\u8fd9\u4e2a\u503c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5728\u4e8b\u52a1\u63d0\u4ea4\u4e4b\u524d\u907f\u514d\u5199\u5165\u78c1\u76d8\n# The size in bytes of the buffer that InnoDB uses to write to the log files on disk. The default is 16MB. A large log buffer enables large transactions to run without the need to write the log to disk before the transactions commit. \n# Thus, if you have transactions that update, insert, or delete many rows, making the log buffer larger saves disk I/O\ninnodb_log_buffer_size = 16MB\n# \u5237\u5165\u78c1\u76d8\u7684\u65f6\u673a\n# 1\uff1a\u6bcf\u6b21\u4e8b\u52a1\u63d0\u4ea4\u65f6\u90fd\u4f1a\u5c06\u65e5\u5fd7\u5199\u5165\u5e76\u5237\u65b0\u5230\u78c1\u76d8\u3002\uff08\u9ed8\u8ba4\uff09\n# 0\uff1a\u6bcf\u79d2\u5c06\u65e5\u5fd7\u5199\u5165\u5e76\u5237\u65b0\u5230\u78c1\u76d8\u4e00\u6b21\u3002\u672a\u5237\u65b0\u65e5\u5fd7\u7684\u4e8b\u52a1\u53ef\u80fd\u4f1a\u5728\u5d29\u6e83\u4e2d\u4e22\u5931\u3002\n# 2\uff1a\u65e5\u5fd7\u4f1a\u5728\u6bcf\u6b21\u4e8b\u52a1\u63d0\u4ea4\u540e\u5199\u5165\uff08\u628a redo log buffer \u91cc\u7684\u6570\u636e\u5199\u5165\u5230 os buffer \u4e2d\uff0c\u4f46\u4e0d\u7acb\u5373\u6267\u884cfsync () \uff09\uff0c\u5e76\u6bcf\u79d2\u5237\u65b0\u5230\u78c1\u76d8\u4e00\u6b21\u3002\u672a\u5237\u65b0\u65e5\u5fd7\u7684\u4e8b\u52a1\u53ef\u80fd\u4f1a\u5728\u5d29\u6e83\u4e2d\u4e22\u5931\u3002\ninnodb_flush_log_at_trx_commit = 1\n# redo log\u7684\u76ee\u5f55\ninnodb_log_group_home_dir = \n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"--redo log capacity resize mechanism\u7684\u72b6\u6001\nSHOW STATUS LIKE 'Innodb_redo_log_resize_status';\n+-------------------------------+-------+\n| Variable_name                 | Value |\n+-------------------------------+-------+\n| Innodb_redo_log_resize_status | OK    |\n+-------------------------------+-------+\n--redo log \u5bb9\u91cf\u9650\u5236\nmysql> SHOW STATUS LIKE 'Innodb_redo_log_capacity_resized';\n +----------------------------------+-----------+\n| Variable_name                    | Value     |\n+----------------------------------+-----------+\n| Innodb_redo_log_capacity_resized | 104857600 |\n+----------------------------------+-----------+\n\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>d});var o=i(67294);const r={},l=o.createContext(r);function d(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);