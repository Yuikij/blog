"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6401],{12053:(e,r,o)=>{o.d(r,{Z:()=>m});var n=o(67294),t=o(23320),l=o(6277),s=o(6226),a=o(56616),i=o(78045),c=o(43400),d=o(33864),p=o(17381),u=o(90420),g=o(99611),h=o(85893);const m=function(e){let{question:r,options:o,correctAnswers:m,image:x,explanation:b,optionExplanations:f}=e;const[y,C]=(0,n.useState)([]),[v,j]=(0,n.useState)(null),[k,S]=(0,n.useState)(null),[$,A]=(0,n.useState)(!1),[w,O]=(0,n.useState)(!0);return(0,h.jsxs)(t.Z,{style:{marginBottom:"30px",marginTop:"10px"},children:[r&&(0,h.jsx)("p",{style:{fontWeight:"bold",marginBottom:"20px"},children:r}),(0,h.jsxs)(l.Z,{gutter:16,children:[(0,h.jsx)(s.Z,{span:w&&x?14:24,children:m.length>1?(0,h.jsx)(a.Z.Group,{style:{width:"100%",display:"flex",flexFlow:"column"},onChange:e=>{C(e)},value:y,children:o.map(((e,r)=>(0,h.jsx)("div",{style:{marginBottom:"30px"},children:(0,h.jsx)(a.Z,{value:e,children:(0,h.jsxs)(l.Z,{children:[(0,h.jsxs)("span",{children:[" ",e]}),$&&f&&f[r]&&(0,h.jsxs)("span",{style:{display:"block",fontStyle:"italic",marginLeft:"25px"},children:["---",f[r]]})]})})},r)))}):(0,h.jsx)(i.ZP.Group,{onChange:e=>{C([e.target.value]),j(e.target.value)},value:v,children:o.map(((e,r)=>(0,h.jsx)("div",{style:{marginBottom:"30px"},children:(0,h.jsx)(i.ZP,{value:e,children:(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,h.jsxs)("span",{children:[" ",e]}),$&&f&&f[r]&&(0,h.jsxs)("span",{style:{display:"block",fontStyle:"italic",marginLeft:"25px"},children:["---",f[r]]})]})})},r)))})}),w&&x&&(0,h.jsx)(s.Z,{span:10,children:(0,h.jsx)(c.Z,{src:x,width:"50%",alt:"Quiz"})})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(d.ZP,{type:"primary",onClick:()=>{const e=y.every((e=>m.includes(e)))&&y.length===m.length;S(e),A(!1)},style:{marginRight:"15px"},children:"\u63d0\u4ea4"}),b&&(0,h.jsx)(d.ZP,{style:{marginRight:"15px",width:"150px"},onClick:()=>A(!$),children:$?"\u9690\u85cf\u89e3\u6790":"\u5c55\u5f00\u89e3\u6790"}),x&&(0,h.jsx)(d.ZP,{icon:w?(0,h.jsx)(u.Z,{}):(0,h.jsx)(g.Z,{}),onClick:()=>O(!w),children:w?"\u9690\u85cf\u56fe\u7247":"\u5c55\u5f00\u56fe\u7247"})]}),null!==k&&(0,h.jsx)("div",{style:{marginTop:"20px"},children:(0,h.jsx)(p.Z,{message:k?"Correct!":"Incorrect.",description:$&&b,type:k?"success":"error"})})]})}},42519:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>D,contentTitle:()=>B,default:()=>z,frontMatter:()=>P,metadata:()=>T,toc:()=>I});var n=o(85893),t=o(11151),l=o(12053),s=o(67294),a=o(97937),i=o(94184),c=o.n(i),d=o(74902);const p=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"],u=p.map((e=>`${e}-inverse`)),g=["success","processing","error","default","warning"];var h=o(11015),m=o(53124),x=o(14747),b=o(45503),f=o(76915);const y=e=>{const{lineWidth:r,fontSizeIcon:o}=e,n=e.fontSizeSM,t=e.lineHeightSM*n+"px";return(0,b.TS)(e,{tagFontSize:n,tagLineHeight:t,tagIconSize:o-2*r,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary})},C=e=>({defaultBg:e.colorFillQuaternary,defaultColor:e.colorText}),v=(0,f.Z)("Tag",(e=>(e=>{const{paddingXXS:r,lineWidth:o,tagPaddingHorizontal:n,componentCls:t}=e,l=n-o,s=r-o;return{[t]:Object.assign(Object.assign({},(0,x.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${t}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${t}-close-icon`]:{marginInlineStart:s,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${t}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${t}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${t}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(y(e))),C);var j=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o};const k=s.forwardRef(((e,r)=>{const{prefixCls:o,style:n,className:t,checked:l,onChange:a,onClick:i}=e,d=j(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:p,tag:u}=s.useContext(m.E_),g=p("tag",o),[h,x]=v(g),b=c()(g,`${g}-checkable`,{[`${g}-checkable-checked`]:l},null==u?void 0:u.className,t,x);return h(s.createElement("span",Object.assign({},d,{ref:r,style:Object.assign(Object.assign({},n),null==u?void 0:u.style),className:b,onClick:e=>{null==a||a(!l),null==i||i(e)}})))})),S=k;const $=e=>function(e,r){return p.reduce(((o,n)=>{const t=e[`${n}1`],l=e[`${n}3`],s=e[`${n}6`],a=e[`${n}7`];return Object.assign(Object.assign({},o),r(n,{lightColor:t,lightBorderColor:l,darkColor:s,textColor:a}))}),{})}(e,((r,o)=>{let{textColor:n,lightBorderColor:t,lightColor:l,darkColor:s}=o;return{[`${e.componentCls}-${r}`]:{color:n,background:l,borderColor:t,"&-inverse":{color:e.colorTextLightSolid,background:s,borderColor:s},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})),A=(0,f.b)(["Tag","preset"],(e=>{const r=y(e);return $(r)}),C);const w=(e,r,o)=>{const n="string"!=typeof(t=o)?t:t.charAt(0).toUpperCase()+t.slice(1);var t;return{[`${e.componentCls}-${r}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},O=(0,f.b)(["Tag","status"],(e=>{const r=y(e);return[w(r,"success","Success"),w(r,"processing","Info"),w(r,"error","Error"),w(r,"warning","Warning")]}),C);var E=function(e,r){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o};const M=(e,r)=>{const{prefixCls:o,className:n,rootClassName:t,style:l,children:i,icon:x,color:b,onClose:f,closeIcon:y,closable:C,bordered:j=!0}=e,k=E(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:S,direction:$,tag:w}=s.useContext(m.E_),[M,Z]=s.useState(!0);s.useEffect((()=>{"visible"in k&&Z(k.visible)}),[k.visible]);const R=function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?p.includes(e):[].concat((0,d.Z)(u),(0,d.Z)(p)).includes(e)}(b),P=function(e){return g.includes(e)}(b),B=R||P,T=Object.assign(Object.assign({backgroundColor:b&&!B?b:void 0},null==w?void 0:w.style),l),D=S("tag",o),[I,N]=v(D),z=c()(D,null==w?void 0:w.className,{[`${D}-${b}`]:B,[`${D}-has-color`]:b&&!B,[`${D}-hidden`]:!M,[`${D}-rtl`]:"rtl"===$,[`${D}-borderless`]:!j},n,t,N),F=e=>{e.stopPropagation(),null==f||f(e),e.defaultPrevented||Z(!1)},[,H]=function(e,r,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s.createElement(a.Z,null);const t=function(e,r,o){return"boolean"==typeof e?e:void 0===r?!!o:!1!==r&&null!==r}(e,r,arguments.length>4&&void 0!==arguments[4]&&arguments[4]);if(!t)return[!1,null];const l="boolean"==typeof r||null==r?n:r;return[!0,o?o(l):l]}(C,y,(e=>null===e?s.createElement(a.Z,{className:`${D}-close-icon`,onClick:F}):s.createElement("span",{className:`${D}-close-icon`,onClick:F},e)),null,!1),L="function"==typeof k.onClick||i&&"a"===i.type,W=x||null,_=W?s.createElement(s.Fragment,null,W,i&&s.createElement("span",null,i)):i,X=s.createElement("span",Object.assign({},k,{ref:r,className:z,style:T}),_,H,R&&s.createElement(A,{key:"preset",prefixCls:D}),P&&s.createElement(O,{key:"status",prefixCls:D}));return I(L?s.createElement(h.Z,{component:"Tag"},X):X)},Z=s.forwardRef(M);Z.CheckableTag=S;const R=Z,P={title:"A doc with tags",tags:["\u8f6f\u8003"]},B=void 0,T={id:"prepareExam/\u8f6f\u8003/\u9519\u9898\u96c6/\u771f\u9898",title:"A doc with tags",description:'[//]: # (import proimg from  "@site/static/img/docusaurus.png";)',source:"@site/docs/prepareExam/\u8f6f\u8003/\u9519\u9898\u96c6/\u771f\u9898.mdx",sourceDirName:"prepareExam/\u8f6f\u8003/\u9519\u9898\u96c6",slug:"/prepareExam/\u8f6f\u8003/\u9519\u9898\u96c6/\u771f\u9898",permalink:"/kibou/docs/prepareExam/\u8f6f\u8003/\u9519\u9898\u96c6/\u771f\u9898",draft:!1,unlisted:!1,tags:[{inline:!0,label:"\u8f6f\u8003",permalink:"/kibou/docs/tags/\u8f6f\u8003"}],version:"current",frontMatter:{title:"A doc with tags",tags:["\u8f6f\u8003"]},sidebar:"prepareExam",previous:{title:"index",permalink:"/kibou/docs/prepareExam/"}},D={},I=[{value:"\u4ee5\u4e0b\u5173\u4e8e\u51af\u8bfa\u4f9d\u66fc\u8ba1\u7b97\u673a\u7684\u53d9\u8ff0\u4e2d\uff0c\u4e0d\u6b63\u786e\u7684\u662f\uff08\uff09\u3002",id:"\u4ee5\u4e0b\u5173\u4e8e\u51af\u8bfa\u4f9d\u66fc\u8ba1\u7b97\u673a\u7684\u53d9\u8ff0\u4e2d\u4e0d\u6b63\u786e\u7684\u662f",level:4},{value:"\u4ee5\u4e0b\u5173\u4e8eSRAM\u548cDRAM\u50a8\u5b58\u5668\u7684\u53d9\u8ff0\u4e2d\u6b63\u786e\u7684\u662f\uff08\uff09",id:"\u4ee5\u4e0b\u5173\u4e8esram\u548cdram\u50a8\u5b58\u5668\u7684\u53d9\u8ff0\u4e2d\u6b63\u786e\u7684\u662f",level:4}];function N(e){const r={h4:"h4",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h4,{id:"\u4ee5\u4e0b\u5173\u4e8e\u51af\u8bfa\u4f9d\u66fc\u8ba1\u7b97\u673a\u7684\u53d9\u8ff0\u4e2d\u4e0d\u6b63\u786e\u7684\u662f",children:"\u4ee5\u4e0b\u5173\u4e8e\u51af\u8bfa\u4f9d\u66fc\u8ba1\u7b97\u673a\u7684\u53d9\u8ff0\u4e2d\uff0c\u4e0d\u6b63\u786e\u7684\u662f\uff08\uff09\u3002"}),"\n",(0,n.jsx)(R,{color:"orange",children:"\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784"}),"\n",(0,n.jsx)(l.Z,{options:["A.\u7a0b\u5e8f\u6307\u4ee4\u548c\u6570\u636e\u90fd\u91c7\u7528\u4e8c\u8fdb\u5236\u8868\u793a","B.\u7a0b\u5e8f\u6307\u4ee4\u603b\u662f\u5b58\u50a8\u5728\u4e3b\u5b58\u4e2d\uff0c\u800c\u6570\u636e\u5219\u5b58\u50a8\u5728\u9ad8\u901f\u7f13\u5b58\u4e2d","C.\u7a0b\u5e8f\u7684\u529f\u80fd\u90fd\u7531\u4e2d\u592e\u5904\u7406\u5668(CPU)","D.\u7a0b\u5e8f\u7684\u6267\u884c\u5de5\u4f5c\u7531\u6307\u4ee4\u8fdb\u884c\u81ea\u52a8\u63a7\u5236"],correctAnswers:["B.\u7a0b\u5e8f\u6307\u4ee4\u603b\u662f\u5b58\u50a8\u5728\u4e3b\u5b58\u4e2d\uff0c\u800c\u6570\u636e\u5219\u5b58\u50a8\u5728\u9ad8\u901f\u7f13\u5b58\u4e2d"],explanation:"\u51af\u8bfa\u4f9d\u66fc\u7ed3\u6784\u4e2d\uff0c\u7a0b\u5e8f\u6307\u4ee4\u548c\u6570\u636e\u5b58\u5728\u540c\u4e00\u4e2a\u5b58\u50a8\u5668\u4e2d",optionExplanations:["","\u4e3b\u5b58\uff08RAM\uff09\u57fa\u672c\u7b49\u540c\u5185\u5b58\uff0c\u548ccpu\u901a\u8fc7\u603b\u7ebf\u4f20\u8f93\u3002\u9ad8\u901f\u7f13\u5b58\uff08Cache\uff09\uff0c\u5728cpu\u6216\u8005\u4e3b\u677f","",""]}),"\n",(0,n.jsx)(r.h4,{id:"\u4ee5\u4e0b\u5173\u4e8esram\u548cdram\u50a8\u5b58\u5668\u7684\u53d9\u8ff0\u4e2d\u6b63\u786e\u7684\u662f",children:"\u4ee5\u4e0b\u5173\u4e8eSRAM\u548cDRAM\u50a8\u5b58\u5668\u7684\u53d9\u8ff0\u4e2d\u6b63\u786e\u7684\u662f\uff08\uff09"}),"\n",(0,n.jsx)(R,{color:"orange",children:"\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784"}),"\n",(0,n.jsx)(l.Z,{options:["A.\u4e0eDRAM\u76f8\u6bd4\uff0cSRAM\u96c6\u6210\u7387\u4f4e\uff0c\u529f\u7387\u5927\u3001\u4e0d\u9700\u8981\u52a8\u6001\u5237\u65b0","B.\u4e0eDRAM\u76f8\u6bd4\uff0cSRAM\u96c6\u6210\u7387\u9ad8\uff0c\u529f\u7387\u5c0f\u3001\u9700\u8981\u52a8\u6001\u5237\u65b0","C.\u4e0eSRAM\u76f8\u6bd4\uff0cDRAM\u96c6\u6210\u7387\u9ad8\uff0c\u529f\u7387\u5927\u3001\u4e0d\u9700\u8981\u52a8\u6001\u5237\u65b0","D.\u4e0eSRAM\u76f8\u6bd4\uff0cDRAM\u96c6\u6210\u7387\u4f4e\uff0c\u529f\u7387\u5927\u3001\u9700\u8981\u52a8\u6001\u5237\u65b0"],correctAnswers:["D.\u4e0eSRAM\u76f8\u6bd4\uff0cDRAM\u96c6\u6210\u7387\u4f4e\uff0c\u529f\u7387\u5927\u3001\u9700\u8981\u52a8\u6001\u5237\u65b0"],explanation:"SRAM\uff08Static ...\uff09\uff1a\u9759\u6001\u5b58\u50a8\uff0c\u56e0\u6b64\u8bbf\u95ee\u901f\u5ea6\u66f4\u5feb\u3002DRAM\uff08\uff08Dynamic Random-Access Memory\uff09\uff09"})]})}function z(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}}}]);