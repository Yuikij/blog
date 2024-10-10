"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9347],{87697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var i=t(85893),o=t(11151);const a={},r="LRU\uff1aLeast Recently Used",d={id:"algorithm/\u5e38\u7528\u7b97\u6cd5/LRU",title:"LRU\uff1aLeast Recently Used",description:"\u4e00\u79cd\u7f13\u5b58\u66ff\u6362\u7b56\u7565\uff0c\u7528\u4e8e\u5728\u7f13\u5b58\u5df2\u6ee1\u65f6\u51b3\u5b9a\u54ea\u4e9b\u6570\u636e\u5e94\u8be5\u88ab\u79fb\u9664\u4ee5\u817e\u51fa\u7a7a\u95f4\u3002LRU \u7b56\u7565\u7684\u6838\u5fc3\u601d\u60f3\u662f\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6761\u76ee\u6700\u6709\u53ef\u80fd\u5728\u672a\u6765\u4e5f\u4e0d\u4f1a\u88ab\u4f7f\u7528\uff0c\u56e0\u6b64\u5728\u9700\u8981\u817e\u51fa\u7a7a\u95f4\u65f6\u4f18\u5148\u79fb\u9664\u8fd9\u4e9b\u6761\u76ee\u3002",source:"@site/docs/algorithm/\u5e38\u7528\u7b97\u6cd5/LRU.md",sourceDirName:"algorithm/\u5e38\u7528\u7b97\u6cd5",slug:"/algorithm/\u5e38\u7528\u7b97\u6cd5/LRU",permalink:"/docs/algorithm/\u5e38\u7528\u7b97\u6cd5/LRU",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorithm",previous:{title:"index",permalink:"/docs/algorithm/"},next:{title:"\u5806(Heap)",permalink:"/docs/algorithm/\u6570\u636e\u7ed3\u6784/Heap"}},l={},s=[{value:"\u5de5\u4f5c\u539f\u7406",id:"\u5de5\u4f5c\u539f\u7406",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"lruleast-recently-used",children:"LRU\uff1aLeast Recently Used"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e00\u79cd\u7f13\u5b58\u66ff\u6362\u7b56\u7565\uff0c\u7528\u4e8e\u5728\u7f13\u5b58\u5df2\u6ee1\u65f6\u51b3\u5b9a\u54ea\u4e9b\u6570\u636e\u5e94\u8be5\u88ab\u79fb\u9664\u4ee5\u817e\u51fa\u7a7a\u95f4\u3002LRU \u7b56\u7565\u7684\u6838\u5fc3\u601d\u60f3\u662f\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6761\u76ee\u6700\u6709\u53ef\u80fd\u5728\u672a\u6765\u4e5f\u4e0d\u4f1a\u88ab\u4f7f\u7528\uff0c\u56e0\u6b64\u5728\u9700\u8981\u817e\u51fa\u7a7a\u95f4\u65f6\u4f18\u5148\u79fb\u9664\u8fd9\u4e9b\u6761\u76ee\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5de5\u4f5c\u539f\u7406",children:"\u5de5\u4f5c\u539f\u7406"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ef4\u62a4\u4e00\u4e2a\u8bb0\u5f55\u8bbf\u95ee\u987a\u5e8f\u7684\u6570\u636e\u7ed3\u6784\uff1a\u901a\u5e38\u4f7f\u7528\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u6765\u5b9e\u73b0\uff0c\u94fe\u8868\u5934\u90e8\u4fdd\u5b58\u6700\u8fd1\u8bbf\u95ee\u7684\u6761\u76ee\uff0c\u5c3e\u90e8\u4fdd\u5b58\u6700\u4e45\u672a\u8bbf\u95ee\u7684\u6761\u76ee\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u6bcf\u6b21\u8bbf\u95ee\u6216\u63d2\u5165\uff1a\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u7f13\u5b58\u4e2d\u5df2\u6709\u8be5\u6570\u636e\uff0c\u66f4\u65b0\u94fe\u8868\uff0c\u5c06\u8be5\u6570\u636e\u79fb\u52a8\u5230\u5934\u90e8\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u662f\u65b0\u6570\u636e\uff0c\u5c06\u5176\u63d2\u5165\u5230\u94fe\u8868\u5934\u90e8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u7f13\u5b58\u6ee1\u65f6\uff1a\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u79fb\u9664\u94fe\u8868\u5c3e\u90e8\u7684\u6761\u76ee\uff08\u5373\u6700\u8fd1\u6700\u5c11\u4f7f\u7528\u7684\u6761\u76ee\uff09\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import java.util.HashMap;\n\nclass LRUCache {\n    class Node {\n        int key;\n        int value;\n        Node prev;\n        Node next;\n        Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n        }\n    }\n\n    private int capacity;\n    private HashMap<Integer, Node> map = new HashMap<>();\n    //  \u94fe\u8868\u7684\u5e38\u7528\u624b\u6bb5\uff1a\u7528\u865a\u8282\u70b9\uff0c\u907f\u514d\u5404\u79cd\u8fb9\u754c\u5224\u65ad\n    private Node head = new Node(0, 0);\n    private Node tail = new Node(0, 0);\n\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        head.next = tail;\n        tail.prev = head;\n    }\n\n    public int get(int key) {\n        if (map.containsKey(key)) {\n            Node node = map.get(key);\n            remove(node);\n            insert(node);\n            return node.value;\n        } else {\n            return -1;\n        }\n    }\n\n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            Node node = map.get(key);\n            remove(node);\n        }\n        if (map.size() == capacity) {\n            map.remove(tail.prev.key);\n            remove(tail.prev);\n        }\n        Node node = new Node(key, value);\n        insert(node);\n        map.put(key, node);\n    }\n\n    private void remove(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n\n    private void insert(Node node) {\n        node.next = head.next;\n        node.next.prev = node;\n        head.next = node;\n        node.prev = head;\n    }\n}\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var i=t(67294);const o={},a=i.createContext(o);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);