"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5685],{16078:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>s});var a=r(85893),i=r(11151);const l={},c=void 0,t={id:"basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/ReentrantLock",title:"ReentrantLock",description:"\u91cd\u5165\u9501",source:"@site/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/ReentrantLock.mdx",sourceDirName:"basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501",slug:"/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/ReentrantLock",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/ReentrantLock",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"programmingLanguage",previous:{title:"CAS",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u9501/CompareAndSwap"},next:{title:"\u7ebf\u7a0b\u6c60",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u7ebf\u7a0b\u6c60"}},d={},s=[{value:"\u6e90\u7801\u5b9e\u73b0",id:"\u6e90\u7801\u5b9e\u73b0",level:2},{value:"AbstractQueuedSynchronizer",id:"abstractqueuedsynchronizer",level:3},{value:"\u57fa\u672c\u6d41\u7a0b",id:"\u57fa\u672c\u6d41\u7a0b",level:4},{value:"\u963b\u585e\u548c\u5524\u9192\u7ebf\u7a0b",id:"\u963b\u585e\u548c\u5524\u9192\u7ebf\u7a0b",level:4},{value:"\u591a\u7ebf\u7a0b\u7684\u7ba1\u7406",id:"\u591a\u7ebf\u7a0b\u7684\u7ba1\u7406",level:4},{value:"\u516c\u5e73\u548c\u975e\u516c\u5e73\u7684\u5b9e\u73b0",id:"\u516c\u5e73\u548c\u975e\u516c\u5e73\u7684\u5b9e\u73b0",level:4},{value:"tryLock\u7684\u5b9e\u73b0",id:"trylock\u7684\u5b9e\u73b0",level:4},{value:"Q&amp;A",id:"qa",level:2}];function o(e){const n=Object.assign({blockquote:"blockquote",p:"p",ul:"ul",li:"li",h2:"h2",h3:"h3",h4:"h4",pre:"pre",code:"code",ol:"ol"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u91cd\u5165\u9501"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u53ef\u91cd\u5165"}),"\n",(0,a.jsx)(n.li,{children:"\u6709\u516c\u5e73\u9501\u7684\u5b9e\u73b0\uff0c\u6309\u7167\u7533\u8bf7\u4e8b\u4ef6\u83b7\u53d6\u9501"}),"\n",(0,a.jsx)(n.li,{children:"\u53ef\u4ee5\u7ed1\u5b9a\u591a\u4e2a\u6761\u4ef6\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u53ef\u4ee5\u7cbe\u51c6\u7684\u5524\u9192\u67d0\u4e2a\u7ebf\u7a0b\uff0c\u800c\u4e0d\u662f\u50cfSynchronized\u90a3\u6837\u53ea\u80fd\u7528notifyall"}),"\n",(0,a.jsx)(n.li,{children:"\u63d0\u4f9b\u4e86tryLock()\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u4e0d\u963b\u585e\u7ebf\u7a0b\u7684\u60c5\u51b5\u4e0b\u5c1d\u8bd5\u83b7\u53d6\u9501\u8d44\u6e90\uff0c\u907f\u514d\u6b7b\u9501\u95ee\u9898"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6e90\u7801\u5b9e\u73b0",children:"\u6e90\u7801\u5b9e\u73b0"}),"\n",(0,a.jsx)(n.h3,{id:"abstractqueuedsynchronizer",children:"AbstractQueuedSynchronizer"}),"\n",(0,a.jsx)(n.h4,{id:"\u57fa\u672c\u6d41\u7a0b",children:"\u57fa\u672c\u6d41\u7a0b"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5c1d\u8bd5\u83b7\u53d6\u9501\uff08\u5f85\u5b50\u7c7b\u5b9e\u73b0\uff09"}),"\n",(0,a.jsx)(n.li,{children:"\u5c1d\u8bd5\u52a0\u5165\u961f\u5c3e"}),"\n",(0,a.jsx)(n.li,{children:"\u5c1d\u8bd5\u68c0\u67e5\u662f\u5426\u6392\u5230\u961f\u5934\uff0c \u5c1d\u8bd5\u83b7\u53d6\u9501\uff08\u5f85\u5b50\u7c7b\u5b9e\u73b0\uff09"}),"\n",(0,a.jsx)(n.li,{children:"\u68c0\u67e5\u524d\u7f6e\u8282\u70b9\u72b6\u6001\uff0c\u81ea\u65cb\u6216\u8005\u963b\u585e"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\u963b\u585e\u548c\u5524\u9192\u7ebf\u7a0b",children:"\u963b\u585e\u548c\u5524\u9192\u7ebf\u7a0b"}),"\n",(0,a.jsx)(n.p,{children:"LockSupport\u5de5\u5177\u7c7b\uff1a\u5bf9Unsafe\u7c7b\u4e2d\u539f\u8bed\u8fdb\u884c\u4e86\u5c01\u88c5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="\u963b\u585e"',children:"    public static void park(Object blocker) {\n        Thread t = Thread.currentThread();\n        setBlocker(t, blocker);\n        UNSAFE.park(false, 0L);\n        setBlocker(t, null);\n    }\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="\u5524\u9192"',children:"    public static void unpark(Thread thread) {\n        if (thread != null)\n            UNSAFE.unpark(thread);\n    }\n"})}),"\n",(0,a.jsx)(n.h4,{id:"\u591a\u7ebf\u7a0b\u7684\u7ba1\u7406",children:"\u591a\u7ebf\u7a0b\u7684\u7ba1\u7406"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u5229\u7528\u53cc\u5411\u94fe\u8868\u548cCAS\u5b9e\u73b0\u4e86\u4e00\u4e2a\u963b\u585e\u961f\u5217"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"    public final void acquire(int arg) {\n    //\u5c1d\u8bd5\u4e00\u6b21\u83b7\u53d6\u9501\n        if (!tryAcquire(arg) &&\n//        acquireQueued\uff1a\u7b49\u5f85\u5e76\u5c1d\u8bd5\u83b7\u53d6\u9501\n//        addWaiter\uff1a\u5411\u961f\u5c3e\u6dfb\u52a0\u5f53\u524d\u7ebf\u7a0b\u7684node\u8282\u70b9\n            acquireQueued(addWaiter(Node.EXCLUSIVE), arg))\n            selfInterrupt();\n    }\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"    final boolean acquireQueued(final Node node, int arg) {\n        boolean failed = true;\n        try {\n            boolean interrupted = false;\n            for (;;) {\n                final Node p = node.predecessor();\n                if (p == head && tryAcquire(arg)) {\n                    // \u83b7\u53d6\u5230\u9501\u4e4b\u540e\uff0c\u5220\u6389\u5f53\u524d\u7ebf\u7a0b\u7684\u8282\u70b9\n                    setHead(node);\n                    p.next = null; // help GC\n                    failed = false;\n                    return interrupted;\n                }\n                //\u963b\u585e\u7b49\u5f85\n                if (shouldParkAfterFailedAcquire(p, node) &&\n                    parkAndCheckInterrupt())\n                    interrupted = true;\n            }\n        } finally {\n            if (failed)\n                cancelAcquire(node);\n        }\n    }\n"})}),"\n",(0,a.jsx)(n.h4,{id:"\u516c\u5e73\u548c\u975e\u516c\u5e73\u7684\u5b9e\u73b0",children:"\u516c\u5e73\u548c\u975e\u516c\u5e73\u7684\u5b9e\u73b0"}),"\n",(0,a.jsx)(n.p,{children:"\u975e\u516c\u5e73\u53ea\u662f\u5728\u6392\u961f\u4e4b\u524d\u53bb\u5c1d\u8bd5\u83b7\u53d6\u4e00\u6b21\u9501\uff0c\u516c\u5e73\u5c31\u8001\u8001\u5b9e\u5b9e\u6392\u961f\uff0c\u5148\u8fdb\u5148\u51fa"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="NonfairSync"',children:"        final void lock() {\n            if (compareAndSetState(0, 1))\n                setExclusiveOwnerThread(Thread.currentThread());\n            else\n                acquire(1);\n        }\n"})}),"\n",(0,a.jsx)(n.h4,{id:"trylock\u7684\u5b9e\u73b0",children:"tryLock\u7684\u5b9e\u73b0"}),"\n",(0,a.jsx)(n.p,{children:"\u76f4\u63a5\u8c03\u7528tryAcquire\uff0c\u5c1d\u8bd5\u4e00\u6b21"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"    public boolean tryLock() {\n        return sync.nonfairTryAcquire(1);\n    }\n"})}),"\n",(0,a.jsx)(n.h2,{id:"qa",children:"Q&A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u4e3a\u4ec0\u4e48AQS\u9700\u8981\u53cc\u5411\u961f\u5217\n\u4e3a\u4e86\u83b7\u53d6\u524d\u7f6e\u8282\u70b9\u7684\u72b6\u6001\uff0c\u5728\u5c1d\u8bd5\u83b7\u53d6\u9501\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u5148\u5224\u65ad\u524d\u7f6e\u8282\u70b9\u662f\u5426\u662fhead\u8282\u70b9\uff0c\u56e0\u4e3a\u53ea\u6709\u83b7\u53d6\u9501\u4e4b\u540e\uff0c\u8be5\u7ebf\u7a0b\u8282\u70b9\u624d\u4f1a\u88ab\u8bbe\u7f6e\u6210head"}),"\n",(0,a.jsx)(n.li,{children:"AQS\u5728java18\u505a\u4e86\u54ea\u4e9b\u6539\u8fdb"}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},11151:(e,n,r)=>{r.d(n,{Zo:()=>t,ah:()=>l});var a=r(67294);const i=a.createContext({});function l(e){const n=a.useContext(i);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function t({components:e,children:n,disableParentContext:r}){let t;return t=r?"function"==typeof e?e({}):e||c:l(e),a.createElement(i.Provider,{value:t},n)}}}]);