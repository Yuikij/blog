"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4264],{71892:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=c(74848),l=c(28453);const o={},t=void 0,s={id:"basicKnowledge/network/\u534f\u8bae/WebSocket",title:"WebSocket",description:"WebSocket\u662f\u4e00\u79cd\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u53ef\u5728\u5355\u4e2aTCP\u8fde\u63a5\u4e0a\u8fdb\u884c\u5168\u53cc\u5de5\u901a\u4fe1\uff0c\u4f4d\u4e8eOSI\u6a21\u578b\u7684\u5e94\u7528\u5c42\u3002\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u53ea\u9700\u8981\u5b8c\u6210\u4e00\u6b21\u63e1\u624b\uff0c\u4e24\u8005\u4e4b\u95f4\u5c31\u53ef\u4ee5\u5efa\u7acb\u6301\u4e45\u6027\u7684\u8fde\u63a5\uff0c\u5e76\u8fdb\u884c\u53cc\u5411\u6570\u636e\u4f20\u8f93\u3002",source:"@site/docs/basicKnowledge/network/\u534f\u8bae/WebSocket.md",sourceDirName:"basicKnowledge/network/\u534f\u8bae",slug:"/basicKnowledge/network/\u534f\u8bae/WebSocket",permalink:"/kibou/docs/basicKnowledge/network/\u534f\u8bae/WebSocket",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"network",previous:{title:"MQTT",permalink:"/kibou/docs/basicKnowledge/network/\u534f\u8bae/MQTT"},next:{title:"\u8eab\u4efd\u9a8c\u8bc1",permalink:"/kibou/docs/basicKnowledge/network/\u9047\u5230\u7684\u95ee\u9898/\u8eab\u4efd\u9a8c\u8bc1"}},r={},d=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u63e1\u624b\u534f\u8bae",id:"\u63e1\u624b\u534f\u8bae",level:2},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",level:3},{value:"\u6570\u636e\u5e27\u683c\u5f0f\uff1a",id:"\u6570\u636e\u5e27\u683c\u5f0f",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"WebSocket\u662f\u4e00\u79cd\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\uff0c\u53ef\u5728\u5355\u4e2aTCP\u8fde\u63a5\u4e0a\u8fdb\u884c\u5168\u53cc\u5de5\u901a\u4fe1\uff0c\u4f4d\u4e8eOSI\u6a21\u578b\u7684\u5e94\u7528\u5c42\u3002\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u53ea\u9700\u8981\u5b8c\u6210\u4e00\u6b21\u63e1\u624b\uff0c\u4e24\u8005\u4e4b\u95f4\u5c31\u53ef\u4ee5\u5efa\u7acb\u6301\u4e45\u6027\u7684\u8fde\u63a5\uff0c\u5e76\u8fdb\u884c\u53cc\u5411\u6570\u636e\u4f20\u8f93\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5168\u53cc\u5de5\uff0c\u4e92\u76f8\u53d1\u9001\u6d88\u606f\uff0c\u800c\u65e0\u9700\u5ba2\u6237\u7aef\u8f6e\u8be2"}),"\n",(0,i.jsx)(n.li,{children:"\u957f\u8fde\u63a5\uff0c\u4e00\u6b21\u63e1\u624b\uff0c\u957f\u671f\u6709\u6548"}),"\n",(0,i.jsx)(n.li,{children:"\u4f4e\u5f00\u9500\uff1a\u76f8\u6bd4 HTTP\uff0cWebSocket \u7684\u5934\u90e8\u4fe1\u606f\u66f4\u5c0f\uff0c\u7279\u522b\u9002\u5408\u9891\u7e41\u7684\u6570\u636e\u4ea4\u4e92\u573a\u666f\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63e1\u624b\u534f\u8bae",children:"\u63e1\u624b\u534f\u8bae"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5ba2\u6237\u7aef\u901a\u8fc7 HTTP \u7684 Upgrade \u5934\u90e8\u5411\u670d\u52a1\u5668\u53d1\u8d77\u534f\u8bae\u5347\u7ea7\u8bf7\u6c42"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"GET /chat HTTP/1.1\nHost: server.example.com\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\nSec-WebSocket-Version: 13\nOrigin: http://example.com\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u670d\u52a1\u5668\u54cd\u5e94"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-http",children:"HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b57\u6bb5\u8bf4\u660e",children:"\u5b57\u6bb5\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Connection\u5fc5\u987b\u8bbe\u7f6eUpgrade\uff0c\u8868\u793a\u5ba2\u6237\u7aef\u5e0c\u671b\u8fde\u63a5\u5347\u7ea7"}),"\n",(0,i.jsx)(n.li,{children:"Upgrade\u5b57\u6bb5\u5fc5\u987b\u8bbe\u7f6eWebsocket\uff0c\u8868\u793a\u5e0c\u671b\u5347\u7ea7\u5230Websocket\u534f\u8bae"}),"\n",(0,i.jsx)(n.li,{children:"Sec-WebSocket-Key\u662f\u968f\u673a\u7684\u5b57\u7b26\u4e32\uff0c\u670d\u52a1\u5668\u7aef\u4f1a\u7528\u8fd9\u4e9b\u6570\u636e\u6765\u6784\u9020\u51fa\u4e00\u4e2aSHA-1\u7684\u4fe1\u606f\u6458\u8981\u3002\u628a\u201cSec-WebSocket-Key\u201d\u52a0\u4e0a\u4e00\u4e2a\u7279\u6b8a\u5b57\u7b26\u4e32\u201c258EAFA5-E914-47DA-95CA-C5AB0DC85B11\u201d\uff0c\u7136\u540e\u8ba1\u7b97SHA-1\u6458\u8981\uff0c\u4e4b\u540e\u8fdb\u884cBase64\u7f16\u7801\uff0c\u5c06\u7ed3\u679c\u505a\u4e3a\u201cSec-WebSocket-Accept\u201d\u5934\u7684\u503c\uff0c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002\u5982\u6b64\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5c3d\u91cf\u907f\u514d\u666e\u901aHTTP\u8bf7\u6c42\u88ab\u8bef\u8ba4\u4e3aWebsocket\u534f\u8bae"}),"\n",(0,i.jsx)(n.li,{children:"Sec-WebSocket-Version \u8868\u793a\u652f\u6301\u7684Websocket\u7248\u672c\u3002RFC6455\u8981\u6c42\u4f7f\u7528\u7684\u7248\u672c\u662f13\uff0c\u4e4b\u524d\u8349\u6848\u7684\u7248\u672c\u5747\u5e94\u5f53\u5f03\u7528"}),"\n",(0,i.jsx)(n.li,{children:"Origin\u5b57\u6bb5\u662f\u5fc5\u987b\u7684\u3002\u5982\u679c\u7f3a\u5c11origin\u5b57\u6bb5\uff0cWebSocket\u670d\u52a1\u5668\u9700\u8981\u56de\u590dHTTP 403 \u72b6\u6001\u7801\uff08\u7981\u6b62\u8bbf\u95ee\uff09"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e\u5e27\u683c\u5f0f",children:"\u6570\u636e\u5e27\u683c\u5f0f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"WebSocket \u6570\u636e\u901a\u8fc7\u5e27\uff08frame\uff09\u4f20\u8f93\u3002\u6bcf\u4e2a\u5e27\u90fd\u6709\u56fa\u5b9a\u683c\u5f0f\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"FIN\uff1a\u8868\u793a\u662f\u5426\u662f\u6d88\u606f\u7684\u6700\u540e\u4e00\u5e27\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Opcode\uff1a\u8868\u793a\u6570\u636e\u7c7b\u578b\uff08\u6587\u672c\u3001\u4e8c\u8fdb\u5236\u3001\u5173\u95ed\u3001Ping\u3001Pong\uff09\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Mask\uff1a\u662f\u5426\u5bf9\u6d88\u606f\u8fdb\u884c\u63a9\u7801\uff08\u5ba2\u6237\u7aef\u53d1\u9001\u7684\u5e27\u5fc5\u987b\u52a0\u63a9\u7801\uff09\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Payload\uff1a\u5b9e\u9645\u7684\u6d88\u606f\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5373\u65f6\u804a\u5929\u5e94\u7528\uff08\u5982\u5fae\u4fe1 Web\u3001Slack \u7b49\uff09\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9e\u65f6\u66f4\u65b0\u754c\u9762\uff08\u5982\u80a1\u7968\u884c\u60c5\u3001\u4f53\u80b2\u6bd4\u5206\uff09\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u7ebf\u534f\u4f5c\u5de5\u5177\uff08\u5982 Google Docs \u591a\u4eba\u534f\u4f5c\u7f16\u8f91\uff09\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9e\u65f6\u901a\u77e5\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5728\u7ebf\u6e38\u620f\uff08\u5982\u591a\u4eba\u5bf9\u6218\u6e38\u620f\uff09\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>t,x:()=>s});var i=c(96540);const l={},o=i.createContext(l);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);