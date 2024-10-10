"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8385],{10060:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=n(85893),t=n(11151);const c={},a=void 0,l={id:"basicSoftware/Linux/\u5e38\u7528\u547d\u4ee4/\u6587\u4ef6\u64cd\u4f5c",title:"\u6587\u4ef6\u64cd\u4f5c",description:"\u76ee\u5f55",source:"@site/docs/basicSoftware/Linux/\u5e38\u7528\u547d\u4ee4/\u6587\u4ef6\u64cd\u4f5c.md",sourceDirName:"basicSoftware/Linux/\u5e38\u7528\u547d\u4ee4",slug:"/basicSoftware/Linux/\u5e38\u7528\u547d\u4ee4/\u6587\u4ef6\u64cd\u4f5c",permalink:"/docs/basicSoftware/Linux/\u5e38\u7528\u547d\u4ee4/\u6587\u4ef6\u64cd\u4f5c",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs/category/\u5e38\u7528\u547d\u4ee4-1"},next:{title:"\u6587\u672c\u64cd\u4f5c",permalink:"/docs/basicSoftware/Linux/\u5e38\u7528\u547d\u4ee4/\u6587\u672c\u64cd\u4f5c"}},i={},d=[{value:"\u76ee\u5f55",id:"\u76ee\u5f55",level:2},{value:"\u89e3\u538b\u7f29",id:"\u89e3\u538b\u7f29",level:2},{value:"tar",id:"tar",level:3},{value:"\u5e38\u7528\u9009\u9879\uff1a",id:"\u5e38\u7528\u9009\u9879",level:4},{value:"\u5e38\u7528\u793a\u4f8b\uff1a",id:"\u5e38\u7528\u793a\u4f8b",level:4},{value:"1. <strong>tar + gzip (<code>.tar.gz</code>)</strong>",id:"1-tar--gzip-targz",level:5},{value:"2. <strong>tar + bzip2 (<code>.tar.bz2</code>)</strong>",id:"2-tar--bzip2-tarbz2",level:5},{value:"3. <strong>tar + xz (<code>.tar.xz</code>)</strong>",id:"3-tar--xz-tarxz",level:5},{value:"4. <strong>tar + zstd (<code>.tar.zst</code>)</strong>",id:"4-tar--zstd-tarzst",level:5},{value:"5. <strong>tar + lzma (<code>.tar.lzma</code>)</strong>",id:"5-tar--lzma-tarlzma",level:5},{value:"6. <strong>tar + 7z (<code>.tar.7z</code>)</strong>",id:"6-tar--7z-tar7z",level:5},{value:"7. <strong>tar + brotli (<code>.tar.br</code>)</strong>",id:"7-tar--brotli-tarbr",level:5}];function o(e){const r={a:"a",blockquote:"blockquote",code:"code",details:"details",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"\u76ee\u5f55",children:"\u76ee\u5f55"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#%E8%A7%A3%E5%8E%8B%E7%BC%A9",children:"\u89e3\u538b\u7f29"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#tar",children:"tar"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"\u89e3\u538b\u7f29",children:"\u89e3\u538b\u7f29"}),"\n",(0,s.jsx)(r.h3,{id:"tar",children:"tar"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar [OPTION...] [FILE]...\n"})}),"\n",(0,s.jsx)(r.h4,{id:"\u5e38\u7528\u9009\u9879",children:"\u5e38\u7528\u9009\u9879\uff1a"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.details,{children:["\n    ",(0,s.jsx)(r.summary,{children:"-C, --directory=DIR : change to directory DIR"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"\u538b\u7f29\u65f6\u5f52\u6863\uff1a"}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-arduino",children:"/home/user/documents/\n\u251c\u2500\u2500 project/\n\u2502   \u251c\u2500\u2500 file1.txt\n\u2502   \u2514\u2500\u2500 file2.txt\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# \u5c06 project \u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u6253\u5305\u6210\u4e00\u4e2a\u5f52\u6863 project.tar.gz\uff0c\u4f46\u5e0c\u671b\u5f52\u6863\u5185\u7684\u8def\u5f84\u4e0d\u5305\u542b /home/user/documents/project/ \u7684\u5b8c\u6574\u8def\u5f84\uff0c\u800c\u662f\u4ece project/ \u76ee\u5f55\u5f00\u59cb\u3002\ntar -czvf project.tar.gz -C /home/user/documents project/\n"})}),"\n "]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"\u5e38\u7528\u793a\u4f8b",children:"\u5e38\u7528\u793a\u4f8b\uff1a"}),"\n",(0,s.jsxs)(r.h5,{id:"1-tar--gzip-targz",children:["1. ",(0,s.jsxs)(r.strong,{children:["tar + gzip (",(0,s.jsx)(r.code,{children:".tar.gz"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u4e2d\u7b49\u3002",(0,s.jsx)(r.code,{children:"gzip"})," \u662f\u5e38\u89c1\u7684\u538b\u7f29\u7b97\u6cd5\uff0c\u538b\u7f29\u901f\u5ea6\u5feb\uff0c\u4f46\u538b\u7f29\u6bd4\u7387\u4e00\u822c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar -czvf archive.tar.gz directory/\n"})}),"\n",(0,s.jsx)(r.p,{children:"zz"}),"\n",(0,s.jsxs)(r.h5,{id:"2-tar--bzip2-tarbz2",children:["2. ",(0,s.jsxs)(r.strong,{children:["tar + bzip2 (",(0,s.jsx)(r.code,{children:".tar.bz2"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u9ad8\u3002",(0,s.jsx)(r.code,{children:"bzip2"})," \u63d0\u4f9b\u66f4\u9ad8\u7684\u538b\u7f29\u7387\uff0c\u4f46\u901f\u5ea6\u8f83\u6162\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar -cjvf archive.tar.bz2 directory/\n"})}),"\n",(0,s.jsxs)(r.h5,{id:"3-tar--xz-tarxz",children:["3. ",(0,s.jsxs)(r.strong,{children:["tar + xz (",(0,s.jsx)(r.code,{children:".tar.xz"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u5f88\u9ad8\u3002\u901a\u5e38\u80fd\u63d0\u4f9b\u6bd4 ",(0,s.jsx)(r.code,{children:"gzip"})," \u548c ",(0,s.jsx)(r.code,{children:"bzip2"})," \u66f4\u9ad8\u7684\u538b\u7f29\u7387\uff0c\u4f46\u538b\u7f29\u65f6\u95f4\u4e5f\u8f83\u957f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar -cJvf archive.tar.xz directory/\n"})}),"\n",(0,s.jsxs)(r.h5,{id:"4-tar--zstd-tarzst",children:["4. ",(0,s.jsxs)(r.strong,{children:["tar + zstd (",(0,s.jsx)(r.code,{children:".tar.zst"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u9ad8\u3002",(0,s.jsx)(r.code,{children:"zstd"})," \u662f\u4e00\u79cd\u73b0\u4ee3\u538b\u7f29\u7b97\u6cd5\uff0c\u901a\u5e38\u80fd\u5728\u538b\u7f29\u7387\u548c\u901f\u5ea6\u4e4b\u95f4\u53d6\u5f97\u8f83\u597d\u7684\u5e73\u8861\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar --use-compress-program=zstd -cvf archive.tar.zst directory/\n"})}),"\n",(0,s.jsxs)(r.h5,{id:"5-tar--lzma-tarlzma",children:["5. ",(0,s.jsxs)(r.strong,{children:["tar + lzma (",(0,s.jsx)(r.code,{children:".tar.lzma"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u5f88\u9ad8\u3002",(0,s.jsx)(r.code,{children:"lzma"})," \u662f ",(0,s.jsx)(r.code,{children:"xz"})," \u7684\u524d\u8eab\uff0c\u5177\u6709\u5f88\u9ad8\u7684\u538b\u7f29\u7387\uff0c\u4f46\u901f\u5ea6\u8f83\u6162\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar --lzma -cvf archive.tar.lzma directory/\n"})}),"\n",(0,s.jsxs)(r.h5,{id:"6-tar--7z-tar7z",children:["6. ",(0,s.jsxs)(r.strong,{children:["tar + 7z (",(0,s.jsx)(r.code,{children:".tar.7z"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u975e\u5e38\u9ad8\u3002",(0,s.jsx)(r.code,{children:"7z"})," \u662f ",(0,s.jsx)(r.code,{children:"7-Zip"})," \u7684\u538b\u7f29\u683c\u5f0f\uff0c\u5177\u6709\u6781\u9ad8\u7684\u538b\u7f29\u7387\uff0c\u4f46\u538b\u7f29\u901f\u5ea6\u4e5f\u8f83\u6162\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar -cvf - directory/ | 7z a -si archive.tar.7z\n"})}),"\n",(0,s.jsxs)(r.h5,{id:"7-tar--brotli-tarbr",children:["7. ",(0,s.jsxs)(r.strong,{children:["tar + brotli (",(0,s.jsx)(r.code,{children:".tar.br"}),")"]})]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\u538b\u7f29\u7387"}),": \u9ad8\u3002",(0,s.jsx)(r.code,{children:"brotli"})," \u662f\u4e00\u79cd\u7531 Google \u5f00\u53d1\u7684\u538b\u7f29\u7b97\u6cd5\uff0c\u538b\u7f29\u7387\u9ad8\u4e14\u89e3\u538b\u901f\u5ea6\u5feb\u3002"]}),"\n"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"tar --use-compress-program=pbzip2 -cvf archive.tar.br directory/\n# brotli\ntar --use-compress-program=brotli -cvf archive.tar.br directory/\n\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>l,a:()=>a});var s=n(67294);const t={},c=s.createContext(t);function a(e){const r=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(c.Provider,{value:r},e.children)}}}]);