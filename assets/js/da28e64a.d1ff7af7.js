"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5150],{95370:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var i=l(85893),s=l(11151);const d={toc_max_heading_level:5},a=void 0,r={id:"basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/HashMap",title:"HashMap",description:"extends AbstractMap\\ implements Map\\, Cloneable, Serializable",source:"@site/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/HashMap.mdx",sourceDirName:"basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map",slug:"/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/HashMap",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/HashMap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{toc_max_heading_level:5},sidebar:"basicKnowledge",previous:{title:"LinkedList",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/List/LinkedList"},next:{title:"LinkedHashMap",permalink:"/kibou/docs/basicKnowledge/programmingLanguage/Java/\u5bb9\u5668/Map/LinkedHashMap"}},h={},c=[{value:"\u5bb9\u5668\u5b9e\u4f53",id:"\u5bb9\u5668\u5b9e\u4f53",level:4},{value:"\u53c2\u6570\u5b57\u6bb5\u548c\u9759\u6001\u5e38\u6570",id:"\u53c2\u6570\u5b57\u6bb5\u548c\u9759\u6001\u5e38\u6570",level:4},{value:"loadFactor",id:"loadfactor",level:6},{value:"tableLength",id:"tablelength",level:6},{value:"threshold",id:"threshold",level:6},{value:"size",id:"size",level:6},{value:"modCount",id:"modcount",level:6},{value:"DEFAULT_LOAD_FACTOR = 0.75f",id:"default_load_factor--075f",level:6},{value:"TREEIFY_THRESHOLD = 8",id:"treeify_threshold--8",level:6},{value:"DEFAULT_INITIAL_CAPACITY = 1 &lt;&lt; 4; // aka 16",id:"default_initial_capacity--1--4--aka-16",level:6},{value:"MIN_TREEIFY_CAPACITY = 64;",id:"min_treeify_capacity--64",level:6},{value:"\u6563\u5217\u65b9\u6cd5",id:"\u6563\u5217\u65b9\u6cd5",level:3},{value:"\u76ee\u7684",id:"\u76ee\u7684",level:4},{value:"\u4f18\u5316",id:"\u4f18\u5316",level:4},{value:"\u8ba1\u7b97\u6563\u5217\u7684\u65b9\u5f0f",id:"\u8ba1\u7b97\u6563\u5217\u7684\u65b9\u5f0f",level:5},{value:"\u53d6\u6a21\u65b9\u5f0f",id:"\u53d6\u6a21\u65b9\u5f0f",level:5},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:4},{value:"\u6269\u5bb9",id:"\u6269\u5bb9",level:3},{value:"\u500d\u6570\uff1a2n",id:"\u500d\u65702n",level:4},{value:"1.8\u7684\u7d22\u5f15\u91cd\u65b0\u8ba1\u7b97",id:"18\u7684\u7d22\u5f15\u91cd\u65b0\u8ba1\u7b97",level:4},{value:"\u6d41\u7a0b\u56fe",id:"\u6d41\u7a0b\u56fe",level:4},{value:"\u6e90\u7801",id:"\u6e90\u7801",level:4},{value:"Q&amp;A",id:"qa",level:3},{value:"\u548cHashTable\u7684\u5f02\u540c",id:"\u548chashtable\u7684\u5f02\u540c",level:3},{value:"\u76f8\u540c\u70b9\uff1a",id:"\u76f8\u540c\u70b9",level:6},{value:"\u4e0d\u540c\u70b9\uff1a",id:"\u4e0d\u540c\u70b9",level:6},{value:"\u7ed3\u8bba\uff1a",id:"\u7ed3\u8bba",level:6},{value:"1.7\u548c1.8\u7684\u5f02\u540c",id:"17\u548c18\u7684\u5f02\u540c",level:3}];function t(n){const e=Object.assign({blockquote:"blockquote",p:"p",ul:"ul",li:"li",h4:"h4",pre:"pre",code:"code",h6:"h6",h3:"h3",h5:"h5",admonition:"admonition",br:"br",strong:"strong",ol:"ol",mermaid:"mermaid"},(0,s.ah)(),n.components),{Details:l}=e;return l||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"extends AbstractMap<K,V> implements Map<K,V>, Cloneable, Serializable"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u5bb9\u5668\u5b9e\u4f53",children:"\u5bb9\u5668\u5b9e\u4f53"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    // \u6876\u6570\u7ec4\n    transient Node<K,V>[] table;\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u53c2\u6570\u5b57\u6bb5\u548c\u9759\u6001\u5e38\u6570",children:"\u53c2\u6570\u5b57\u6bb5\u548c\u9759\u6001\u5e38\u6570"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"\u5c55\u5f00"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"loadfactor",children:"loadFactor"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8d1f\u8f7d\u56e0\u5b50\uff0c\u9ed8\u8ba40.75"}),"\n",(0,i.jsx)(e.li,{children:"\u8d1f\u8f7d\u56e0\u5b50\u8d8a\u9ad8\u65f6\u95f4\u6548\u7387\u8d8a\u4f4e\uff0c\u7a7a\u95f4\u6548\u7387\u8d8a\u9ad8"}),"\n",(0,i.jsx)(e.li,{children:"\u8868\u793a\u9884\u671f\u7684\u6bcf\u4e2a\u6876\u7684\u5143\u7d20\u7684\u5e73\u5747\u6570\u91cf"}),"\n",(0,i.jsx)(e.li,{children:"\u56e0\u4e3ahash\u4f1a\u53d1\u751f\u78b0\u649e\u3001\u5206\u5e03\u4e0d\u5747\u5300\uff0c\u5982\u679c\u8fd9\u4e2a\u503c\u63a5\u8fd11\uff0c\u90a3\u5c31\u8bf4\u660e\u6709\u4e9b\u6876\u7684\u5143\u7d20\u5927\u4e8e1\uff0c\u9700\u8981\u7528\u5230\u94fe\u8868\u6216\u8005\u6811\uff0c\u67e5\u8be2\u6548\u7387\u5c31\u4e0d\u662fO(1)\u4e86"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"tablelength",children:"tableLength"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6876\u6570\u7ec4\uff08\u8868\uff09\u7684\u957f\u5ea6"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"threshold",children:"threshold"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f53\u524d\u5141\u8bb8\u6700\u5927\u7684\u5bb9\u91cf\uff08\u8282\u70b9\u7684\u4e2a\u6570\uff09\uff1atableLength*loadFactor"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"size",children:"size"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u952e\u503c\u5bf9\uff0c\u8282\u70b9\u4e2a\u6570"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"modcount",children:"modCount"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8bb0\u5f55HashMap\u5185\u90e8\u7ed3\u6784\u53d1\u751f\u53d8\u5316\u7684\u6b21\u6570"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"default_load_factor--075f",children:"DEFAULT_LOAD_FACTOR = 0.75f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9ed8\u8ba4\u8d1f\u8f7d\u56e0\u5b50\uff0c\u5f53\u5143\u7d20\u4e2a\u6570\u5927\u4e8e0.75*\u6876\u957f\u5ea6\u65f6\u6269\u5bb9"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"treeify_threshold--8",children:"TREEIFY_THRESHOLD = 8"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u94fe\u8868\u6811\u5316\u7684\u9608\u503c\uff0c\u6876\u7684\u5143\u7d20\u5927\u4e8e8\u6811\u5316"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"default_initial_capacity--1--4--aka-16",children:"DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u521d\u59cb\u5316\u7684\u6876\u957f\u5ea6\uff1a16"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"min_treeify_capacity--64",children:"MIN_TREEIFY_CAPACITY = 64;"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6700\u5c0f\u6811\u5316\u5bb9\u91cf\uff0c\u6811\u5316\u65f6\u5982\u679c\u6876\u957f\u5ea6<64\u8981\u5148\u6269\u5bb9\uff0c\u4e0d\u6811\u5316\uff0c\u9632\u6b62\u51fa\u73b0\u5f88\u957f\u7684\u6876"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(e.h3,{id:"\u6563\u5217\u65b9\u6cd5",children:"\u6563\u5217\u65b9\u6cd5"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u76ee\u7684",children:"\u76ee\u7684"}),"\n",(0,i.jsx)(e.p,{children:"\u589e\u52a0\u6563\u5217\u540e\u7684\u968f\u673a\u6027\uff0c\u7136\u540e\u628a\u6563\u5217\u540e\u7684\u503c\u5bf9\u6570\u7ec4\u957f\u5ea6\u53d6\u6a21"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u4f18\u5316",children:"\u4f18\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h5,{id:"\u8ba1\u7b97\u6563\u5217\u7684\u65b9\u5f0f",children:"\u8ba1\u7b97\u6563\u5217\u7684\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u822c\u662f\u7528\u53d6\u6a21\u8fd0\u7b97\uff1ah%length\u3002\u4f46\u662f\u5728hashmap\u4e2d\uff0clength\u4e3an\u76842\u6b21\u65b9\u65f6\uff0c\u6240\u4ee5 h & (length -1) \u76f8\u5f53\u4e8eh%length"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{title:"\u539f\u56e0\u548c\u5e26\u6765\u7684\u95ee\u9898",type:"warning",children:[(0,i.jsxs)(e.p,{children:["length\u662f2\u7684\u500d\u6570\uff1a\u4e8c\u8fdb\u5236\u5c31\u662f 100...",(0,i.jsx)(e.br,{}),"\n","length-1 \u5c31\u662f\u63a9\u7801011...\n\u4efb\u610f\u6570 1xxx(n) % 100(m) \u7684\u7ed3\u679c\u5c31\u662f 1xxx(m) % 100(m) , \u53ea\u8003\u8651\u4e86",(0,i.jsx)(e.strong,{children:"m\u4e2a\u4f4e\u4f4d"})]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"\u4e8c\u8fdb\u5236\u53d6\u6a21\u7684\u4f8b\u5b50\uff1a11101%100 "}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4ece\u5de6\u4fa7\u5f00\u59cb\uff0c\u627e\u5230\u4e00\u4e2a\u5927\u4e8e\u6216\u7b49\u4e8e\u9664\u6570 100 \u7684\u6570\u5b57\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u9996\u5148\u8003\u8651 111\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c06 111 \u9664\u4ee5 100\u3002\u7ed3\u679c\u4e3a 1\uff0c\u4f59\u6570\u4e3a 11\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c06\u4e0b\u4e00\u4e2a\u4f4d\u6570 0 \u62c9\u4e0b\u6765\uff0c\u5f97\u5230 110\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u518d\u6b21\u5c06 110 \u9664\u4ee5 100\u3002\u7ed3\u679c\u4e3a 1\uff0c\u4f59\u6570\u4e3a 10\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6700\u540e\uff0c\u5c06\u6700\u540e\u4e00\u4e2a\u4f4d\u6570 1 \u62c9\u4e0b\u6765\uff0c\u5f97\u5230 101\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c06 101 \u9664\u4ee5 100\u3002\u7ed3\u679c\u4e3a 1\uff0c\u4f59\u6570\u4e3a 1\u3002"}),"\n"]}),"\n"]})]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h5,{id:"\u53d6\u6a21\u65b9\u5f0f",children:"\u53d6\u6a21\u65b9\u5f0f"}),"\n","\u56e0\u4e3a\u8003\u8651\u4e86\u4f4e\u4f4d\uff0c\u6240\u4ee5\u7528 ",(0,i.jsx)(e.code,{children:" (h = key.hashCode()) ^ (h >>> 16)"})," \u8ba9\u9ad8\u4f4d\u4e5f\u53c2\u4e0e\u8ba1\u7b97"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    // 1.8\n    static final int hash(Object key) {\n        int h;\n        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);\n    }\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u6269\u5bb9",children:"\u6269\u5bb9"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u500d\u65702n",children:"\u500d\u6570\uff1a2n"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    final Node<K,V>[] resize() {\n            ...\n            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&\n                     oldCap >= DEFAULT_INITIAL_CAPACITY)\n            ...\n        }\n    }\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"18\u7684\u7d22\u5f15\u91cd\u65b0\u8ba1\u7b97",children:"1.8\u7684\u7d22\u5f15\u91cd\u65b0\u8ba1\u7b97"}),"\n",(0,i.jsx)(e.p,{children:"\u5047\u8bbe\u5f53\u524d\u7684length\u4e3a2^m\n\u5f53length\u6269\u5927\u4e00\u500d\u65f6\uff0c2^m -> 2^(m+1)\n\u6b64\u65f6\u7684\u6a21\u6570\u8981\u4e48\u662f01xxx \u8981\u4e48\u662f11xxx  (xxx\u6709m-1\u4e2a)\n\u5373\uff1a\u8981\u4e48\u662findex \u8981\u4e48\u662findex + 2^m"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4e3e\u4e2a\u4f8b\u5b50",(0,i.jsx)(e.br,{}),"\n","length\u4e3a 4 (100) , h \u4e3a 14(1110) , \u5f53length\u6269\u5927\u4e00\u500d\u65f6\uff0c 100 -> 1000",(0,i.jsx)(e.br,{}),"\n","\u6a21\u6570\u4ece010 \u53d8\u6210 110 , \u5373 010+100"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u6d41\u7a0b\u56fe",children:"\u6d41\u7a0b\u56fe"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"\u5c55\u5f00"}),(0,i.jsx)(e.mermaid,{value:"graph TD\n    A[\u5f00\u59cbresize]\n    B[\u8bbe\u7f6e\u65b0\u6876\u6570\u7ec4\u5bb9\u91cf\u548c\u65b0\u7684\u6269\u5bb9\u9608\u503c]\n    C[\u5c06\u65b0\u5bb9\u91cf\u8bbe\u4e3a\u5f53\u524d\u5bb9\u91cf\u7684\u4e24\u500d]\n    D[\u4f7f\u7528\u65b0\u7684\u5bb9\u91cf\u521b\u5efa\u65b0\u7684\u8282\u70b9\u6570\u7ec4]\n    E[\u904d\u5386\u65e7\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6876]\n    F[\u786e\u5b9a\u9ad8\u4f4e\u4f4d\u5e76\u4e14\u751f\u6210\u4e24\u4e2a\u65b0\u6876]\n    G[\u5c06\u5143\u7d20\u653e\u5165\u65b0\u6570\u7ec4\u5bf9\u5e94\u4f4d\u7f6e]\n\n    A --\x3e B\n    B --\x3e C\n    C --\x3e D\n    D --\x3e E\n    E --\x3e F\n    F --\x3e G\n"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h4,{id:"\u6e90\u7801",children:"\u6e90\u7801"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"1.8"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:'    /**\n     * @from 1.8\n     * Initializes or doubles table size.  If null, allocates in\n     * accord with initial capacity target held in field threshold.\n     * Otherwise, because we are using power-of-two expansion, the\n     * elements from each bin must either stay at same index, or move\n     * with a power of two offset in the new table.\n     *\n     * @return the table\n     */\n    final Node<K,V>[] resize() {\n        // \u5148\u786e\u5b9a\u4e0b\u6765 newCap \u548c newThr\n        // newCap:\u6269\u5bb9\u4e4b\u540etable\u6570\u7ec4\u5927\u5c0f\n        // newThr:\u4e0b\u6b21\u9700\u8981\u6269\u5bb9table\u65f6\u6570\u7ec4\u5927\u5c0f (new threshold)\n        Node<K,V>[] oldTab = table;\n        int oldCap = (oldTab == null) ? 0 : oldTab.length;\n        int oldThr = threshold;\n        int newCap, newThr = 0;\n        if (oldCap > 0) {\n            if (oldCap >= MAXIMUM_CAPACITY) {\n                threshold = Integer.MAX_VALUE;\n                return oldTab;\n            }\n            else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&\n                     oldCap >= DEFAULT_INITIAL_CAPACITY)\n                newThr = oldThr << 1; // double threshold\n        }\n        else if (oldThr > 0) // initial capacity was placed in threshold\n            newCap = oldThr;\n        else {               // zero initial threshold signifies using defaults\n            newCap = DEFAULT_INITIAL_CAPACITY;\n            newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);\n        }\n        if (newThr == 0) {\n            float ft = (float)newCap * loadFactor;\n            newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?\n                      (int)ft : Integer.MAX_VALUE);\n        }\n        threshold = newThr;\n        @SuppressWarnings({"rawtypes","unchecked"})\n        // \u4ea7\u751f\u65b0\u7684\u6876\u6570\u7ec4\n        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];\n        table = newTab;\n        if (oldTab != null) {\n            //\u904d\u5386\u65e7\u6876\n            for (int j = 0; j < oldCap; ++j) {\n                Node<K,V> e;\n                //\u627e\u5230\u6bcf\u4e2a\u6876\uff0c\u904d\u5386\u6876\uff08\u94fe\u8868\u6216\u8005\u6811\uff09\n                if ((e = oldTab[j]) != null) {\n                    oldTab[j] = null;\n                    //\u6876\u91cc\u53ea\u6709\u4e00\u4e2a\u5143\u7d20\n                    if (e.next == null)\n                        newTab[e.hash & (newCap - 1)] = e;\n                    //\u6811\u7684\u60c5\u51b5\n                    else if (e instanceof TreeNode)\n                        ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);\n                    else { // preserve order\n                        // \u4f4e\u4f4d\u6876\n                        Node<K,V> loHead = null, loTail = null;\n                        // \u9ad8\u4f4d\u6876\n                        Node<K,V> hiHead = null, hiTail = null;\n                        Node<K,V> next;\n                        // 1.8 \u4e0d\u4f1a\u5bf9\u539f\u6876\u505a\u64cd\u4f5c\n                        do {\n                            next = e.next;\n                            // \u5224\u65ad\u662f\u9ad8\u4f4d\u8fd8\u662f\u4f4e\u4f4d\uff0coldCap\u4e8c\u8fdb\u5236\u53ea\u6709\u4e00\u4e2a1\uff0c\u5c31\u5224\u65adhash\u7684\u90a3\u4e00\u4f4d\u662f\u4e0d\u662f1\n                            if ((e.hash & oldCap) == 0) {\n                                // \u5c3e\u63d2\u6cd5\uff0c\u539f\u6876\u904d\u5386\u5b8c\u5c31\u53ef\u4ee5\u786e\u5b9a\u4e24\u4e2a\u6876\u4e86\n                                if (loTail == null)\n                                    loHead = e;\n                                else\n                                    loTail.next = e;\n                                loTail = e;\n                            }\n                            else {\n                                if (hiTail == null)\n                                    hiHead = e;\n                                else\n                                    hiTail.next = e;\n                                hiTail = e;\n                            }\n                        } while ((e = next) != null);\n                        // \u63d2\u5165\u4e24\u4e2a\u9ad8\u4f4e\u4f4d\u7684\u6876\n                        if (loTail != null) {\n                            loTail.next = null;\n                            newTab[j] = loHead;\n                        }\n                        if (hiTail != null) {\n                            hiTail.next = null;\n                            newTab[j + oldCap] = hiHead;\n                        }\n                    }\n                }\n            }\n        }\n        return newTab;\n    }\n\n'})})]}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"1.7"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-java",children:"    /**\n     *@from 1.7\n     * Transfers all entries from current table to newTable.\n     * \u5934\u63d2\u6cd5\n     */\n    void transfer(Entry[] newTable, boolean rehash) {\n        int newCapacity = newTable.length;\n        //  table \u4ee5\u53ca\u6bcf\u4e2a\u6876 \u662f\u7ebf\u7a0b\u5171\u4eab\u7684\n        for (Entry<K,V> e : table) {\n            while(null != e) {\n                //\u53d6\u51fa\u4e0b\u4e00\u4e2a\n                Entry<K,V> next = e.next;\n                //\u8fd9\u4e2a\u5730\u65b9e.next \u53ef\u80fd\u4f1a\u53d8\uff0c\u56e0\u4e3a\u539f\u6876\u7684head\u4f1a\u4e00\u4e2a\u4e00\u4e2a\u53d8\u5c11\n                if (rehash) {\n                    e.hash = null == e.key ? 0 : hash(e.key);\n                }\n                //\u8ba1\u7b97\u5f53\u524d\u7684index\n                int i = indexFor(e.hash, newCapacity);\n                //\u628a\u627e\u5230\u7684\u6876\u653e\u5230\u5f53\u524d\u7684\u4e0b\u4e00\u4e2a\n                e.next = newTable[i];\n                // \u628a\u5f53\u524d\u62fc\u63a5\u7684\u6876\u653e\u5230\u9884\u671f\u4f4d\u7f6e\n                newTable[i] = e;\n                e = next;\n            }\n        }\n    }\n"})})]}),"\n",(0,i.jsx)(e.h3,{id:"qa",children:"Q&A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h3,{id:"\u548chashtable\u7684\u5f02\u540c",children:"\u548cHashTable\u7684\u5f02\u540c"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"HashMap"})," \u548c ",(0,i.jsx)(e.code,{children:"Hashtable"})," \u90fd\u662f Java \u4e2d\u7684\u6570\u636e\u7ed3\u6784\uff0c\u7528\u4e8e\u5b58\u50a8\u952e\u503c\u5bf9\u3002\u5b83\u4eec\u90fd\u5b9e\u73b0\u4e86 ",(0,i.jsx)(e.code,{children:"Map"})," \u63a5\u53e3"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"\u76f8\u540c\u70b9",children:"\u76f8\u540c\u70b9\uff1a"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u57fa\u7840\u529f\u80fd"}),"\uff1a\u5b83\u4eec\u90fd\u63d0\u4f9b\u4e86\u57fa\u7840\u7684 ",(0,i.jsx)(e.code,{children:"Map"})," \u529f\u80fd\uff0c\u5982 ",(0,i.jsx)(e.code,{children:"put()"}),", ",(0,i.jsx)(e.code,{children:"get()"}),", ",(0,i.jsx)(e.code,{children:"remove()"}),", ",(0,i.jsx)(e.code,{children:"containsKey()"}),", \u7b49\u3002",(0,i.jsx)(e.br,{}),"\n",(0,i.jsx)(e.strong,{children:"\u5185\u90e8\u5b9e\u73b0"}),"\uff1a\u5b83\u4eec\u90fd\u4f7f\u7528\u54c8\u5e0c\u8868\u4f5c\u4e3a\u5185\u90e8\u6570\u636e\u7ed3\u6784\u6765\u5b58\u50a8\u952e\u503c\u5bf9\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"\u4e0d\u540c\u70b9",children:"\u4e0d\u540c\u70b9\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7ebf\u7a0b\u5b89\u5168\u6027"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Hashtable"})," \u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u5b83\u7684\u5927\u591a\u6570\u65b9\u6cd5\u90fd\u662f\u540c\u6b65\u7684\uff0c\u8fd9\u610f\u5473\u7740\u540c\u4e00\u65f6\u95f4\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u8bbf\u95ee\u5b83\u7684\u5b9e\u4f8b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HashMap"})," \u5219\u4e0d\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u5982\u679c\u9700\u8981\u5728\u5e76\u53d1\u73af\u5883\u4e2d\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"HashMap"}),"\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8003\u8651\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"Collections.synchronizedMap()"})," \u6216 ",(0,i.jsx)(e.code,{children:"ConcurrentHashMap"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u5141\u8bb8 null \u503c"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HashMap"})," \u5141\u8bb8\u4e00\u4e2a null \u952e\u548c\u591a\u4e2a null \u503c\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Hashtable"})," \u4e0d\u5141\u8bb8 null \u952e\u6216 null \u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u7ee7\u627f\u7684\u7c7b"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HashMap"})," \u7ee7\u627f\u81ea ",(0,i.jsx)(e.code,{children:"AbstractMap"})," \u7c7b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Hashtable"})," \u7ee7\u627f\u81ea ",(0,i.jsx)(e.code,{children:"Dictionary"}),"(\u5df2\u7ecf\u8fc7\u65f6) \u7c7b\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6027\u80fd"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u7531\u4e8e ",(0,i.jsx)(e.code,{children:"Hashtable"})," \u7684\u540c\u6b65\u7279\u6027\uff0c\u5f53\u4e0d\u9700\u8981\u7ebf\u7a0b\u5b89\u5168\u65f6\uff0c",(0,i.jsx)(e.code,{children:"HashMap"})," \u901a\u5e38\u6bd4 ",(0,i.jsx)(e.code,{children:"Hashtable"})," \u6709\u66f4\u597d\u7684\u6027\u80fd\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u904d\u5386"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"HashMap"})," \u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"iterator"})," \u6765\u904d\u5386\u952e\u503c\u5bf9\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"Hashtable"})," \u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"enumerator"})," \u6216 ",(0,i.jsx)(e.code,{children:"iterator"}),"\u3002\u4f46 ",(0,i.jsx)(e.code,{children:"iterator"})," \u662fJava 2\u4e4b\u540e\u624d\u52a0\u5165\u7684\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u521d\u59cb\u5bb9\u91cf\u548c\u52a0\u8f7d\u56e0\u5b50"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5c3d\u7ba1\u5b83\u4eec\u90fd\u6709\u521d\u59cb\u5bb9\u91cf\u548c\u52a0\u8f7d\u56e0\u5b50\u7684\u6982\u5ff5\uff0c\u4f46 ",(0,i.jsx)(e.code,{children:"HashMap"})," \u5141\u8bb8\u66f4\u5927\u7684\u7075\u6d3b\u6027\u3002\u9ed8\u8ba4\u52a0\u8f7d\u56e0\u5b50\u5bf9\u4e8e\u5b83\u4eec\u90fd\u662f0.75\uff0c\u4f46 ",(0,i.jsx)(e.code,{children:"HashMap"})," \u7684\u9ed8\u8ba4\u521d\u59cb\u5bb9\u91cf\u662f16\uff0c\u800c ",(0,i.jsx)(e.code,{children:"Hashtable"})," \u7684\u9ed8\u8ba4\u521d\u59cb\u5bb9\u91cf\u662f11\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h6,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba\uff1a"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"HashMap"})," \u662f Java 2 (Java 1.2) \u4e4b\u540e\u5f15\u5165\u7684\uff0c\u800c ",(0,i.jsx)(e.code,{children:"Hashtable"})," \u5728\u65e9\u671f\u7248\u672c\u4e2d\u5df2\u7ecf\u5b58\u5728\uff08",(0,i.jsx)(e.code,{children:"@since JDK1.0"}),"\uff09\u3002\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c",(0,i.jsx)(e.code,{children:"HashMap"})," \u5728\u5927\u591a\u6570\u5e94\u7528\u4e2d\u5df2\u7ecf\u66ff\u4ee3\u4e86 ",(0,i.jsx)(e.code,{children:"Hashtable"}),"\uff0c\u5c24\u5176\u662f\u5f53\u7ebf\u7a0b\u5b89\u5168\u4e0d\u662f\u5173\u952e\u8981\u6c42\u65f6\u3002\u5728\u9700\u8981\u7ebf\u7a0b\u5b89\u5168\u7684\u573a\u666f\u4e2d\uff0c\u901a\u5e38\u66f4\u63a8\u8350\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"ConcurrentHashMap"}),"\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u4e86\u66f4\u9ad8\u7684\u5e76\u53d1\u6027\u80fd\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.h3,{id:"17\u548c18\u7684\u5f02\u540c",children:"1.7\u548c1.8\u7684\u5f02\u540c"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6269\u5bb9"}),"\uff1a"]}),"\n",(0,i.jsxs)(e.p,{children:["1.7\u6bcf\u6b21\u90fd\u91cd\u65b0\u8ba1\u7b97\u7d22\u5f15\uff0c1.8\u5224\u65ad\u9ad8\u4f4e\u4f4d\u6765\u786e\u5b9a\u7d22\u5f15\u30021.7\u91c7\u7528\u5934\u63d2\u6cd5\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u8981\u79fb\u52a8\u539f\u6765\u7684\u6876\uff0c\u5bfc\u81f4\u4e86\u5143\u7d20\u7684\u53cd\u5e8f\uff0c1.8\u662f\u5148\u786e\u5b9a\u4e24\u4e2a\u6876\u7136\u540e\u76f4\u63a5\u63d2\u5165",(0,i.jsx)(e.br,{}),"\n","\u4e0d\u8003\u8651\u6811\u5316\u7684\u60c5\u51b5\uff0c1.7\u52a8\u4e86\u539f\u6876\uff0c\u539f\u6876\u662f\u73b0\u6210\u5171\u4eab\u7684\u30021.8\u91c7\u7528\u4e86\u4e24\u4e2a\u94fe\u8868\uff0c\u6ca1\u6709\u64cd\u4f5c\u539f\u6876"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u6570\u636e\u7ed3\u6784"}),"\uff1a"]}),"\n",(0,i.jsx)(e.p,{children:"1.8\u5f15\u5165\u4e86\u7ea2\u9ed1\u6811\uff0c\u4f7f\u5f97hash\u5206\u5e03\u4e0d\u5747\u7684\u65f6\u5019\u67e5\u8be2\u6548\u679c\u66f4\u597d"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}const o=function(n={}){const{wrapper:e}=Object.assign({},(0,s.ah)(),n.components);return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(t,n)})):t(n)}},11151:(n,e,l)=>{l.d(e,{Zo:()=>r,ah:()=>d});var i=l(67294);const s=i.createContext({});function d(n){const e=i.useContext(s);return i.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const a={};function r({components:n,children:e,disableParentContext:l}){let r;return r=l?"function"==typeof n?n({}):n||a:d(n),i.createElement(s.Provider,{value:r},e)}}}]);