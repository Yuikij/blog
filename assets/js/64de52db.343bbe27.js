"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6663],{26438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>x,toc:()=>m});var r=n(85893),i=n(11151),o=n(33864),s=n(93425),l=n(67294),a=n(73379);function c(e){let{arr:t}=e;const n=(0,l.useRef)(null);return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.ZP,{onClick:function(){},children:"nextStep"}),(0,r.jsx)(o.ZP,{onClick:async function(){let e=t.length;n.current.init([...t]);for(let r=0;r<e;r++)for(let i=0;i<e-r-1;i++)if(t[i]>t[i+1]){console.log("before"),await(0,a.w)(500);let e=t[i];console.log("arr:"+t),await n.current.addIndex(t[i+1],i),t[i]=t[i+1],await n.current.addIndex(e,i+1),t[i+1]=e,console.log(n.current.getArr()),console.log(t),console.log("end")}},children:"doSort"}),(0,r.jsx)(s.Z,{arrayRef:n})]})}const d={},u=void 0,x={id:"algorithm/index",title:"index",description:"<BubbleSort arr={[7,2,5,4,1,6]}",source:"@site/docs/algorithm/index.mdx",sourceDirName:"algorithm",slug:"/algorithm/",permalink:"/kibou/docs/algorithm/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"algorithm",next:{title:"\u5806(Heap)",permalink:"/kibou/docs/algorithm/\u6570\u636e\u7ed3\u6784/Heap"}},g={},m=[];function f(e){return(0,r.jsx)(c,{arr:[7,2,5,4,1,6]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f()}},93425:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),i=n(37727),o=(n(54273),n(23320));const s={display:"flex",alignItems:"center",justifyContent:"center"};var l=n(73379),a=n(85893);function c(e){const[t,n]=(0,r.useState)(e.initialItems||[]);const c=e=>{n([...t,e])};async function d(e,r){console.log("item",e),console.log("index",r);const i=[...t],o=document.getElementById("arrayItem"+r);var s;(s=o).classList.add("blinking"),s.addEventListener("animationend",(function(){s.classList.remove("blinking")}),{once:!0}),i[r]=e,console.log("newItems",i),n([...i]),await(0,l.w)(500)}const u=e=>{const r=[...t];r.splice(e,1),n(r)},x=()=>t,g=()=>t.length,m=e=>{n(e)};r.useImperativeHandle(e.arrayRef,(()=>({add:c,remove:u,getLength:g,init:m,addIndex:d,getArr:x})));const f={width:"60px",height:"60px",textAlign:"center",...s};return(0,a.jsx)("div",{children:(0,a.jsx)(o.Z,{title:123,className:"scroll-box",style:{borderColor:"black",height:"70px",...s,overflowX:"inherit",overflowY:"hidden",margin:"20px 0"},bodyStyle:{padding:0,display:"flex",flexDirection:"row",width:"100%"},children:t.map(((e,t)=>(0,a.jsx)("div",{children:(0,a.jsx)(i.y_,{defaultStyle:{x:0},style:{x:(0,i.ST)(1)},children:n=>(0,a.jsx)(o.Z.Grid,{id:"arrayItem"+t,style:{...f,transform:`scale(${n.x})`},children:e})},t)})))})})}},54273:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(23320),i=n(85893);const o=function(e){let{value:t="node",transform:n}=e;const o={width:50,height:50,display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",margin:"0 6px"};return n&&(o.transform=n),(0,i.jsx)(r.Z,{style:o,children:t})}},73379:(e,t,n)=>{function r(e){return new Promise((t=>setTimeout(t,e)))}n.d(t,{w:()=>r})}}]);