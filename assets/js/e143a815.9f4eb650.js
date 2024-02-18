"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2505],{81779:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=n(85893),i=n(11151);const s={},o=void 0,r={id:"basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Set/LinkedHashSet",title:"LinkedHashSet",description:"extends HashSet\\ implements Set\\, Cloneable, java.io.Serializable",source:"@site/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Set/LinkedHashSet.mdx",sourceDirName:"basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Set",slug:"/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Set/LinkedHashSet",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Set/LinkedHashSet",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"programmingLanguage",previous:{title:"HashSet",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Set/HashSet"},next:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5e76\u53d1/\u57fa\u672c\u6982\u5ff5"}},c={},l=[{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:4}];function d(e){const a=Object.assign({blockquote:"blockquote",p:"p",ul:"ul",li:"li",h4:"h4",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"extends HashSet<E> implements Set<E>, Cloneable, java.io.Serializable"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"\u62e5\u6709 HashSet \u7684\u6240\u6709\u6027\u80fd\u4f18\u52bf\uff0c\u540c\u65f6\u8fd8\u589e\u52a0\u4e86\u5143\u7d20\u7684\u6709\u5e8f\u6027\u3002\u76f8\u5f53\u4e8e\u7279\u5b9a\u7248\u672c\u7684HashSet \u6216 LinkedHashMap"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.h4,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-java",children:"    /**\n     * FROM LinkedHashSet\n     * Constructs a new, empty linked hash set with the default initial\n     * capacity (16) and load factor (0.75).\n     */\n    public LinkedHashSet() {\n        super(16, .75f, true);\n    }\n    \n    \n    /**\n     * FROM HashSet\n     * Constructs a new, empty linked hash set.  (This package private\n     * constructor is only used by LinkedHashSet.) The backing\n     * HashMap instance is a LinkedHashMap with the specified initial\n     * capacity and the specified load factor.\n     *\n     * @param      initialCapacity   the initial capacity of the hash map\n     * @param      loadFactor        the load factor of the hash map\n     * @param      dummy             ignored (distinguishes this\n     *             constructor from other int, float constructor.)\n     * @throws     IllegalArgumentException if the initial capacity is less\n     *             than zero, or if the load factor is nonpositive\n     */\n    HashSet(int initialCapacity, float loadFactor, boolean dummy) {\n        map = new LinkedHashMap<>(initialCapacity, loadFactor);\n    }\n    \n    \n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,i.ah)(),e.components);return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:(e,a,n)=>{n.d(a,{Zo:()=>r,ah:()=>s});var t=n(67294);const i=t.createContext({});function s(e){const a=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function r({components:e,children:a,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:s(e),t.createElement(i.Provider,{value:r},a)}}}]);