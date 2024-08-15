"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9267],{52014:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(85893),s=a(11151);const r={},i=void 0,l={id:"basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/LinkedHashMap",title:"LinkedHashMap",description:"extends HashMap\\ implements Map\\",source:"@site/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/LinkedHashMap.mdx",sourceDirName:"basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map",slug:"/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/LinkedHashMap",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/LinkedHashMap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"programmingLanguage",previous:{title:"HashMap",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/HashMap"},next:{title:"TreeMap",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/TreeMap"}},o={},c=[{value:"\u5bb9\u5668\u5b9e\u4f53",id:"\u5bb9\u5668\u5b9e\u4f53",level:4},{value:"\u7528\u9014",id:"\u7528\u9014",level:3},{value:"LRU\uff08Least Recent Used\uff09",id:"lruleast-recent-used",level:4},{value:"LRU\u7684\u5b9e\u73b0",id:"lru\u7684\u5b9e\u73b0",level:3}];function p(e){const n={blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"extends HashMap<K,V> implements Map<K,V>"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"LinkedHashMap\u7ee7\u627f\u4e86HashMap\uff0c\u901a\u8fc7\u91cd\u5199HashMap\u7684\u63d2\u5165\u8bbf\u95ee\u7684\u540e\u7f6e\u65b9\u6cd5\uff0c\u5b9e\u73b0\u4e86\u53ef\u4ee5\u6309\u7167\u8bbf\u95ee\u987a\u5e8f\u6392\u5e8f\u7684\u5bb9\u5668"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.h4,{id:"\u5bb9\u5668\u5b9e\u4f53",children:"\u5bb9\u5668\u5b9e\u4f53"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"\n    /**\n     * HashMap.Node subclass for normal LinkedHashMap entries.\n     * \u53d8\u6210\u4e86\u53cc\u5411\u94fe\u8868\n     */\n    static class Entry<K,V> extends HashMap.Node<K,V> {\n        Entry<K,V> before, after;\n        Entry(int hash, K key, V value, Node<K,V> next) {\n            super(hash, key, value, next);\n        }\n    }\n    \n    /**\n     * The head (eldest) of the doubly linked list.\n     */\n    transient LinkedHashMap.Entry<K,V> head;\n\n    /**\n     * The tail (youngest) of the doubly linked list.\n     */\n    transient LinkedHashMap.Entry<K,V> tail;\n    \n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u7528\u9014",children:"\u7528\u9014"}),"\n",(0,t.jsx)(n.h4,{id:"lruleast-recent-used",children:"LRU\uff08Least Recent Used\uff09"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import java.util.LinkedHashMap;\nimport java.util.Map;\n\npublic class LRUCache<K, V> extends LinkedHashMap<K, V> {\n    private final int capacity;\n\n    public LRUCache(int capacity) {\n        // \u8bbe\u7f6eaccessOrder\u4e3atrue\uff0c\u8fd9\u6837\u5728get()\u65f6\u4e5f\u4f1a\u6539\u53d8\u5143\u7d20\u987a\u5e8f\uff0c\u4f7f\u4e4b\u6210\u4e3a\u6700\u8fd1\u8bbf\u95ee\u7684\u3002\n        super(capacity, 0.75f, true);\n        this.capacity = capacity;\n    }\n\n    // \u6bcf\u6b21\u6dfb\u52a0\u7684\u540e\u7f6e\u5904\u7406\n    @Override\n    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {\n        return size() > capacity;\n    }\n\n    public static void main(String[] args) {\n        LRUCache<Integer, String> lru = new LRUCache<>(5);\n\n        lru.put(1, "one");\n        lru.put(2, "two");\n        lru.put(3, "three");\n        lru.put(4, "four");\n        lru.put(5, "five");\n\n        System.out.println(lru.get(2));  // Outputs: "two"\n        \n        lru.put(6, "six"); // This will remove the key "1" from the cache because of the capacity limit.\n\n        System.out.println(lru.get(1));  // Outputs: null\n    }\n}\n\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"lru\u7684\u5b9e\u73b0",children:"LRU\u7684\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"    //\u5c06\u88ab\u8bbf\u95ee\u7684\u8282\u70b9\u653e\u5230\u6700\u540e\n    void afterNodeAccess(Node<K,V> e) { // move node to last\n        LinkedHashMap.Entry<K,V> last;\n        if (accessOrder && (last = tail) != e) {\n            //\u627e\u5230\u8bbf\u95ee\u8282\u70b9\u7684\u524d\u540e\u8282\u70b9\n            LinkedHashMap.Entry<K,V> p =\n                (LinkedHashMap.Entry<K,V>)e, b = p.before, a = p.after;\n            p.after = null;\n            \n            //\u5f53\u524d\u8282\u70b9\u662f\u5934\u8282\u70b9\uff0c\u4e0d\u505a\u5904\u7406\uff0c\u8bbe\u7f6e\u4e00\u4e0b\u65b0\u7684\u5934\u8282\u70b9\n            if (b == null)\n                head = a;\n            //\u8fde\u63a5\u5934\u5c3e\n            else\n                b.after = a;\n            //\u5224\u65ad\u5f53\u524d\u8282\u70b9\u662f\u4e0d\u662f\u5c3e\u8282\u70b9    \n            if (a != null)\n                a.before = b;\n            else\n                last = b;\n                \n            if (last == null)\n                head = p;\n            else {\n                p.before = last;\n                last.after = p;\n            }\n            \n            tail = p;\n            ++modCount;\n        }\n    }\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);