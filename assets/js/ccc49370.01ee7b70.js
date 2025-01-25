"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3249],{82907:(e,t,a)=>{a.d(t,{A:()=>L});a(96540);var r=a(18215),s=a(44096),n=a(74848);function o(e){let{children:t,className:a}=e;return(0,n.jsx)("article",{className:a,children:t})}var l=a(28774);const i={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:o}=(0,s.e7)(),{permalink:c,title:d}=a,m=o?"h1":"h2";return(0,n.jsx)(m,{className:(0,r.A)(i.title,t),children:o?d:(0,n.jsx)(l.A,{to:c,children:d})})}var d=a(21312),m=a(53465),u=a(36266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,m.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,n.jsx)(n.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,children:a})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,s.e7)(),{date:o,readingTime:l}=a,i=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,r.A)(g.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:o,formattedDate:(c=o,i.format(new Date(c)))}),void 0!==l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(h,{readingTime:l})]})]});var c}var b=a(56913);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,s.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),i=1===a.length;return(0,n.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,n.jsx)("div",{className:(0,r.A)(!l&&(i?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,n.jsx)(b.A,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(c,{}),(0,n.jsx)(j,{}),(0,n.jsx)(v,{})]})}var y=a(70440),N=a(88343);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:o}=(0,s.e7)();return(0,n.jsx)("div",{id:o?y.LU:void 0,className:(0,r.A)("markdown",a),children:(0,n.jsx)(N.A,{children:t})})}var T=a(17559),_=a(4336),k=a(62053);function P(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,n.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,n.jsx)(P,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:o,editUrl:l,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&i,u=a.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,r.A)("row","margin-top--sm",T.G.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(k.A,{tags:a})})}),e&&(0,n.jsx)(_.A,{className:(0,r.A)("margin-top--sm",T.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,r.A)("col",{"col--9":m}),children:(0,n.jsx)(k.A,{tags:a})}),m&&(0,n.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":u}),children:(0,n.jsx)(R,{blogPostTitle:o,to:e.permalink})})]})}function L(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(o,{className:(0,r.A)(l,a),children:[(0,n.jsx)(A,{}),(0,n.jsx)(w,{children:t}),(0,n.jsx)(U,{})]})}},10416:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});a(96540);var r=a(18215),s=a(61213),n=a(17559),o=a(44096),l=a(28027),i=a(82907),c=a(21312),d=a(39022),m=a(74848);function u(e){const{nextItem:t,prevItem:a}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[a&&(0,m.jsx)(d.A,{...a,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.A,{...t,subLabel:(0,m.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}var g=a(78005);function h(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{...e}),(0,m.jsx)(g.L,{serverURL:"https://waline-sigma-rose.vercel.app/"})]})}function p(){const{assets:e,metadata:t}=(0,o.e7)(),{title:a,description:r,date:n,tags:l,authors:i,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:a,description:r,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:n}),i.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:i.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var x=a(5260);function j(){const e=(0,o.J_)();return(0,m.jsx)(x.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var b=a(67763),f=a(41689);function v(e){let{sidebar:t,children:a}=e;const{metadata:r,toc:s}=(0,o.e7)(),{nextItem:n,prevItem:c,frontMatter:d}=r,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:p}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!u&&s.length>0?(0,m.jsx)(b.A,{toc:s,minHeadingLevel:g,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(f.A,{metadata:r}),(0,m.jsx)(i.A,{children:a}),(n||c)&&(0,m.jsx)(h,{nextItem:n,prevItem:c})]})}function A(e){const t=e.content;return(0,m.jsx)(o.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,r.A)(n.G.wrapper.blogPages,n.G.page.blogPostPage),children:[(0,m.jsx)(p,{}),(0,m.jsx)(j,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},78005:(e,t,a)=>{a.d(t,{L:()=>l});var r=a(96540),s=a(4138),n=a(95293),o=a(74848);const l=e=>{const t=(0,r.useRef)(null),a=(0,r.useRef)(null),{colorMode:l,setColorMode:i}=(0,n.G)();return(0,r.useEffect)((()=>(t.current=(0,s.Ts)({...e,dark:"dark"===l?'html[data-theme="dark"]':void 0,reaction:[],el:a.current}),()=>{})),[]),(0,r.useEffect)((()=>{t.current?.update({...e,dark:"dark"===l?'html[data-theme="dark"]':void 0})}),[e,l]),(0,o.jsx)("div",{style:{marginTop:50},ref:a})}}}]);