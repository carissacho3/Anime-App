(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4081)}])},4081:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return u}});var a=s(5893),i=s(682),l=s(4051),t=s(1555),d=s(9179),n=s(3052),c=s(7486),o=s(6714),m=s(6518),h=s(1330),f=s(1664),j=s.n(f),x=s(9734);function u(){let{data:e,error:r}=(0,x.ZP)("https://api.jikan.moe/v4/top/anime?filter=airing&limit=5"),{data:s,error:f}=(0,x.ZP)("https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5"),{data:u,error:p}=(0,x.ZP)("https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=5");return r||f||p?(0,a.jsx)("div",{children:"Error loading"}):e&&s&&u?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("br",{}),(0,a.jsx)(i.Z,{children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(t.Z,{children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)("h2",{children:"Top Airing Anime"})}),(0,a.jsx)(j(),{href:"/AiringAnime",passHref:!0,children:"View More"}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Z,{children:e.data.map((e,r)=>(0,a.jsx)(m.Z,{children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(t.Z,{md:1,children:(0,a.jsx)("span",{children:r+1})}),(0,a.jsx)(t.Z,{md:2,children:(0,a.jsx)(h.Z,{src:e.images.jpg.small_image_url,alt:e.title,width:50,height:75})}),(0,a.jsxs)(t.Z,{md:9,children:[(0,a.jsx)(j(),{href:"/animeDetail/".concat(e.mal_id),passHref:!0,children:e.title}),(0,a.jsxs)("div",{className:"row-md-1",children:[e.type,", ",e.episodes," ep, scored ",e.score]})]})]})},e.mal_id))})]})})}),(0,a.jsx)(t.Z,{children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)("h2",{children:"Upcoming Anime"})}),(0,a.jsx)(j(),{href:"/UpcomingAnime",passHref:!0,children:"View More"}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Z,{children:s.data.map((e,r)=>(0,a.jsx)(m.Z,{children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(t.Z,{md:1,children:(0,a.jsx)("span",{children:r+1})}),(0,a.jsx)(t.Z,{md:2,children:(0,a.jsx)(h.Z,{src:e.images.jpg.small_image_url,alt:e.title,width:50,height:75})}),(0,a.jsxs)(t.Z,{md:9,children:[(0,a.jsx)(j(),{href:"/animeDetail/".concat(e.mal_id),passHref:!0,children:e.title}),(0,a.jsxs)("div",{className:"row-md-1",children:[e.type,", ",e.episodes," ep, scored ",e.score]})]})]})},e.mal_id))})]})})}),(0,a.jsx)(t.Z,{children:(0,a.jsx)(d.Z,{children:(0,a.jsxs)(n.Z,{children:[(0,a.jsx)(c.Z,{children:(0,a.jsx)("h2",{children:"Most Popular Anime"})}),(0,a.jsx)(j(),{href:"/PopularAnime",passHref:!0,children:"View More"}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Z,{children:u.data.map((e,r)=>(0,a.jsx)(m.Z,{children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(t.Z,{md:1,children:(0,a.jsx)("span",{children:r+1})}),(0,a.jsx)(t.Z,{md:2,children:(0,a.jsx)(h.Z,{src:e.images.jpg.small_image_url,alt:e.title,width:50,height:75})}),(0,a.jsxs)(t.Z,{md:9,children:[(0,a.jsx)(j(),{href:"/animeDetail/".concat(e.mal_id),passHref:!0,children:e.title}),(0,a.jsxs)("div",{className:"row-md-1",children:[e.type,", ",e.episodes," ep, scored"," ",e.score]})]})]})},e.mal_id))})]})})})]})})]}):(0,a.jsx)("div",{children:"loading"})}},9179:function(e,r,s){"use strict";s.d(r,{Z:function(){return g}});var a=s(4184),i=s.n(a),l=s(7294),t=s(6792),d=s(3052),n=s(5893);let c=l.forwardRef(({className:e,bsPrefix:r,as:s="div",...a},l)=>(r=(0,t.vE)(r,"card-footer"),(0,n.jsx)(s,{ref:l,className:i()(e,r),...a})));c.displayName="CardFooter";var o=s(9059);let m=l.forwardRef(({bsPrefix:e,className:r,as:s="div",...a},d)=>{let c=(0,t.vE)(e,"card-header"),m=(0,l.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,n.jsx)(o.Z.Provider,{value:m,children:(0,n.jsx)(s,{ref:d,...a,className:i()(r,c)})})});m.displayName="CardHeader";let h=l.forwardRef(({bsPrefix:e,className:r,variant:s,as:a="img",...l},d)=>{let c=(0,t.vE)(e,"card-img");return(0,n.jsx)(a,{ref:d,className:i()(s?`${c}-${s}`:c,r),...l})});h.displayName="CardImg";let f=l.forwardRef(({className:e,bsPrefix:r,as:s="div",...a},l)=>(r=(0,t.vE)(r,"card-img-overlay"),(0,n.jsx)(s,{ref:l,className:i()(e,r),...a})));f.displayName="CardImgOverlay";let j=l.forwardRef(({className:e,bsPrefix:r,as:s="a",...a},l)=>(r=(0,t.vE)(r,"card-link"),(0,n.jsx)(s,{ref:l,className:i()(e,r),...a})));j.displayName="CardLink";let x=(0,s(9602).Z)("h6"),u=l.forwardRef(({className:e,bsPrefix:r,as:s=x,...a},l)=>(r=(0,t.vE)(r,"card-subtitle"),(0,n.jsx)(s,{ref:l,className:i()(e,r),...a})));u.displayName="CardSubtitle";let p=l.forwardRef(({className:e,bsPrefix:r,as:s="p",...a},l)=>(r=(0,t.vE)(r,"card-text"),(0,n.jsx)(s,{ref:l,className:i()(e,r),...a})));p.displayName="CardText";var v=s(7486);let Z=l.forwardRef(({bsPrefix:e,className:r,bg:s,text:a,border:l,body:c=!1,children:o,as:m="div",...h},f)=>{let j=(0,t.vE)(e,"card");return(0,n.jsx)(m,{ref:f,...h,className:i()(r,j,s&&`bg-${s}`,a&&`text-${a}`,l&&`border-${l}`),children:c?(0,n.jsx)(d.Z,{children:o}):o})});Z.displayName="Card";var g=Object.assign(Z,{Img:h,Title:v.Z,Subtitle:u,Body:d.Z,Link:j,Text:p,Header:m,Footer:c,ImgOverlay:f})},3052:function(e,r,s){"use strict";var a=s(7294),i=s(4184),l=s.n(i),t=s(6792),d=s(5893);let n=a.forwardRef(({className:e,bsPrefix:r,as:s="div",...a},i)=>(r=(0,t.vE)(r,"card-body"),(0,d.jsx)(s,{ref:i,className:l()(e,r),...a})));n.displayName="CardBody",r.Z=n},7486:function(e,r,s){"use strict";var a=s(7294),i=s(4184),l=s.n(i),t=s(6792),d=s(9602),n=s(5893);let c=(0,d.Z)("h5"),o=a.forwardRef(({className:e,bsPrefix:r,as:s=c,...a},i)=>(r=(0,t.vE)(r,"card-title"),(0,n.jsx)(s,{ref:i,className:l()(e,r),...a})));o.displayName="CardTitle",r.Z=o},1555:function(e,r,s){"use strict";var a=s(4184),i=s.n(a),l=s(7294),t=s(6792),d=s(5893);let n=l.forwardRef((e,r)=>{let[{className:s,...a},{as:l="div",bsPrefix:n,spans:c}]=function({as:e,bsPrefix:r,className:s,...a}){r=(0,t.vE)(r,"col");let l=(0,t.pi)(),d=(0,t.zG)(),n=[],c=[];return l.forEach(e=>{let s,i,l;let t=a[e];delete a[e],"object"==typeof t&&null!=t?{span:s,offset:i,order:l}=t:s=t;let o=e!==d?`-${e}`:"";s&&n.push(!0===s?`${r}${o}`:`${r}${o}-${s}`),null!=l&&c.push(`order${o}-${l}`),null!=i&&c.push(`offset${o}-${i}`)}),[{...a,className:i()(s,...n,...c)},{as:e,bsPrefix:r,spans:n}]}(e);return(0,d.jsx)(l,{...a,ref:r,className:i()(s,!c.length&&n)})});n.displayName="Col",r.Z=n},1330:function(e,r,s){"use strict";var a=s(4184),i=s.n(a),l=s(7294),t=s(5697),d=s.n(t),n=s(6792),c=s(5893);d().string,d().bool,d().bool,d().bool,d().bool;let o=l.forwardRef(({bsPrefix:e,className:r,fluid:s=!1,rounded:a=!1,roundedCircle:l=!1,thumbnail:t=!1,...d},o)=>(e=(0,n.vE)(e,"img"),(0,c.jsx)("img",{ref:o,...d,className:i()(r,s&&`${e}-fluid`,a&&"rounded",l&&"rounded-circle",t&&`${e}-thumbnail`)})));o.displayName="Image",r.Z=o},6714:function(e,r,s){"use strict";var a=s(4184),i=s.n(a),l=s(7294);s(2473);var t=s(5446),d=s(5115),n=s(6792),c=s(6518),o=s(5893);let m=l.forwardRef((e,r)=>{let s;let{className:a,bsPrefix:l,variant:c,horizontal:m,numbered:h,as:f="div",...j}=(0,t.Ch)(e,{activeKey:"onSelect"}),x=(0,n.vE)(l,"list-group");return m&&(s=!0===m?"horizontal":`horizontal-${m}`),(0,o.jsx)(d.Z,{ref:r,...j,as:f,className:i()(a,x,c&&`${x}-${c}`,s&&`${x}-${s}`,h&&`${x}-numbered`)})});m.displayName="ListGroup",r.Z=Object.assign(m,{Item:c.Z})},6518:function(e,r,s){"use strict";var a=s(4184),i=s.n(a),l=s(7294);s(2473);var t=s(8146),d=s(3716),n=s(7126),c=s(6792),o=s(5893);let m=l.forwardRef(({bsPrefix:e,active:r,disabled:s,eventKey:a,className:l,variant:m,action:h,as:f,...j},x)=>{e=(0,c.vE)(e,"list-group-item");let[u,p]=(0,d.v)({key:(0,n.h)(a,j.href),active:r,...j}),v=(0,t.Z)(e=>{if(s){e.preventDefault(),e.stopPropagation();return}u.onClick(e)});s&&void 0===j.tabIndex&&(j.tabIndex=-1,j["aria-disabled"]=!0);let Z=f||(h?j.href?"a":"button":"div");return(0,o.jsx)(Z,{ref:x,...j,...u,onClick:v,className:i()(l,e,p.isActive&&"active",s&&"disabled",m&&`${e}-${m}`,h&&`${e}-action`)})});m.displayName="ListGroupItem",r.Z=m},4051:function(e,r,s){"use strict";var a=s(4184),i=s.n(a),l=s(7294),t=s(6792),d=s(5893);let n=l.forwardRef(({bsPrefix:e,className:r,as:s="div",...a},l)=>{let n=(0,t.vE)(e,"row"),c=(0,t.pi)(),o=(0,t.zG)(),m=`${n}-cols`,h=[];return c.forEach(e=>{let r;let s=a[e];delete a[e],null!=s&&"object"==typeof s?{cols:r}=s:r=s;let i=e!==o?`-${e}`:"";null!=r&&h.push(`${m}${i}-${r}`)}),(0,d.jsx)(s,{ref:l,...a,className:i()(r,n,...h)})});n.displayName="Row",r.Z=n}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);