(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[15,2],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(223);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},223:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))},228:function(e,t,n){"use strict";function c(e,t){var n={};for(var c in e)t.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c]);return n}function a(e,t){var n=t.left,c=t.right,a=t.up,i=t.down,s=t.top,r=t.bottom,l=t.big,d=t.mirror,j=t.opposite,b=(n?1:0)|(c?2:0)|(s||i?4:0)|(r||a?8:0)|(d?16:0)|(j?32:0)|(e?64:0)|(l?128:0);if(x.hasOwnProperty(b))return x[b];var m=n||c||a||i||s||r,h=void 0,u=void 0;if(m){if(!d!=!(e&&j)){var O=[c,n,r,s,i,a];n=O[0],c=O[1],s=O[2],r=O[3],a=O[4],i=O[5]}var p=l?"2000px":"100%";h=n?"-"+p:c?p:"0",u=i||s?"-"+p:a||r?p:"0"}return x[b]=(0,o.animation)((e?"to":"from")+" {"+(m?" transform: translate3d("+h+", "+u+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),x[b]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.defaults,t=e.children,n=(e.out,e.forever),i=e.timeout,s=e.duration,r=void 0===s?o.defaults.duration:s,l=e.delay,j=void 0===l?o.defaults.delay:l,x=e.count,b=void 0===x?o.defaults.count:x,m=c(e,["children","out","forever","timeout","duration","delay","count"]),h={make:a,duration:void 0===i?r:i,delay:j,forever:n,count:b,style:{animationFillMode:"both"},reverse:m.left};return(0,d.default)(m,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var s,r=n(3),l=n(135),d=(s=l)&&s.__esModule?s:{default:s},o=n(88),j={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,delay:r.number,count:r.number,forever:r.bool},x={};i.propTypes=j,t.default=i,e.exports=t.default},233:function(e,t,n){"use strict";n.r(t);var c,a=n(7),i=n(5).d.button(c||(c=Object(a.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n    margin-left: 0rem;\n  }\n  \n"])),(function(e){return e.color||"rgb(209, 29, 50)"}),(function(e){return e.color?"rgb(209, 29, 50)":"#fff"}),(function(e){return e.color?"1px solid #687864":"0px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"})),s=n(1);t.default=function(e){var t=e.color,n=e.width,c=e.children,a=e.onClick;return Object(s.jsx)(i,{color:t,width:n,onClick:a,children:c})}},241:function(e,t,n){"use strict";var c=n(219),a=(n(0),n(1));t.a=function(e){return Object(a.jsxs)("svg",Object(c.a)(Object(c.a)({viewBox:"0 0 1441 783.5"},e),{},{children:[Object(a.jsx)("defs",{children:Object(a.jsx)("style",{children:".cls-1{fill:#feba91;}.cls-2,.cls-6{fill:#fff;}.cls-2,.cls-3,.cls-8{stroke:#2e186a;stroke-linejoin:round;stroke-width:6px;}.cls-2,.cls-3{stroke-linecap:round;}.cls-3,.cls-8{fill:none;}.cls-4{fill:#687864;}.cls-5{fill:#5d21d1;}.cls-7{fill:#fe7624;}"})}),Object(a.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(a.jsx)("g",{id:"solid",children:Object(a.jsxs)("g",{id:"Payment",children:[Object(a.jsx)("path",{id:"wallet_back","data-name":"wallet back",className:"cls-1",d:"M794,780.47H393.2a27.73,27.73,0,0,1-27.73-27.73V100.2A27.72,27.72,0,0,1,393.2,72.47H794a27.73,27.73,0,0,0-27.73,27.73V752.74A27.74,27.74,0,0,0,794,780.47Z"}),Object(a.jsxs)("g",{id:"banknotes",children:[Object(a.jsxs)("g",{id:"banknote_II","data-name":"banknote II",children:[Object(a.jsx)("path",{className:"cls-2",d:"M473.4,127.8,508.07,9a8.31,8.31,0,0,1,10.31-5.65L779.26,79.47V156.7"}),Object(a.jsx)("path",{className:"cls-3",d:"M770.94,102.82,553.43,39.34a26.45,26.45,0,0,1-32.8,18l-.81-.26-21.36,73.17"})]}),Object(a.jsxs)("g",{id:"banknote",children:[Object(a.jsx)("path",{className:"cls-2",d:"M430.18,302,445.24,133.7a8.3,8.3,0,0,1,9-7.54l314.58,27.7v137.3"}),Object(a.jsx)("path",{className:"cls-3",d:"M765.38,179.64,504.61,156.31c-1.39,15.54-16.39,26.89-33.51,25.35l-1-.11-10.78,120.6"})]}),Object(a.jsxs)("g",{id:"line",children:[Object(a.jsx)("line",{className:"cls-3",x1:401,y1:302.47,x2:546,y2:302.47}),Object(a.jsx)("circle",{className:"cls-4",cx:401,cy:302.47,r:7})]})]}),Object(a.jsxs)("g",{id:"purse",children:[Object(a.jsx)("path",{id:"sahpe_back","data-name":"sahpe back",className:"cls-4",d:"M565,223.47h20a18,18,0,0,1,18,18v539a0,0,0,0,1,0,0H565a18,18,0,0,1-18-18v-521a18,18,0,0,1,18-18Z"}),Object(a.jsx)("path",{id:"shape",className:"cls-5",d:"M1060,780.62H585.76a20,20,0,0,0,20-20V243.47a20,20,0,0,0-20-20H1060a20,20,0,0,1,20,20V760.62A20,20,0,0,1,1060,780.62Z"}),Object(a.jsx)("path",{id:"line-2","data-name":"line",className:"cls-3",d:"M585,226.46c9.94,0,18,7.53,18,16.82V778.89"}),Object(a.jsxs)("g",{id:"zipper",children:[Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:258.88,x2:518,y2:258.88}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:280.52,x2:518,y2:280.52}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:323.79,x2:518,y2:323.79}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:345.42,x2:518,y2:345.42}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:367.06,x2:518,y2:367.06}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:388.69,x2:518,y2:388.69}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:410.33,x2:518,y2:410.33}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:431.96,x2:518,y2:431.96}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:453.6,x2:518,y2:453.6}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:475.23,x2:518,y2:475.23}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:496.87,x2:518,y2:496.87}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:518.5,x2:518,y2:518.5}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:540.14,x2:518,y2:540.14}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:561.77,x2:518,y2:561.77}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:583.41,x2:518,y2:583.41}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:626.68,x2:518,y2:626.68}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:648.31,x2:518,y2:648.31}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:669.95,x2:518,y2:669.95}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:691.58,x2:518,y2:691.58}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:713.22,x2:518,y2:713.22}),Object(a.jsx)("line",{className:"cls-3",x1:546.84,y1:734.85,x2:518,y2:734.85})]}),Object(a.jsxs)("g",{id:"coin",children:[Object(a.jsx)("path",{id:"shape-2","data-name":"shape",className:"cls-6",d:"M603,588a97,97,0,1,0,0,189Z"}),Object(a.jsx)("path",{id:"dollar_sign","data-name":"dollar sign",className:"cls-5",d:"M603.16,678.66l-8.29,0q3.32-9.61,8.29-14.68V649.12a22,22,0,0,0-4.14,2.53,32.51,32.51,0,0,0-9.63,11.71,101.13,101.13,0,0,0-5.65,15.28H539.22q.84-9.79,7.56-14.87a24.19,24.19,0,0,1,14.87-5.07c2.21-.1,3.71-.6,4.48-1.49s1.16-2.38,1.16-4.48c0-2.33-.49-3.83-1.49-4.49s-2.88-1-5.65-1a28.45,28.45,0,0,0-14.62,4,32.26,32.26,0,0,0-11.21,11.13,37,37,0,0,0-5.23,16.28H514.47a2.34,2.34,0,0,0-1.83,1.08,4.38,4.38,0,0,0-.83,2.74,3.86,3.86,0,0,0,.91,2.57,2.68,2.68,0,0,0,2.08,1.09h14.29a42.89,42.89,0,0,0,4.73,17.19A30.89,30.89,0,0,0,545,715.44a30.46,30.46,0,0,0,16.28,4.4q10.47,0,16.78-5.57A34,34,0,0,0,587.23,702a145,145,0,0,0,5.48-16c2.68,0,6.17,0,10.45,0Zm-29.3,23.4q-4.58,5.66-12.55,5.65A20.18,20.18,0,0,1,546.53,702q-5.82-5.73-7-15.86,13.13-.17,39.87-.17h2.33Q578.42,696.42,573.86,702.06Z"})]}),Object(a.jsxs)("g",{id:"credit_cards","data-name":"credit cards",children:[Object(a.jsxs)("g",{id:"credit_card","data-name":"credit card",children:[Object(a.jsx)("path",{className:"cls-6",d:"M769,294.28H690.52c-10.48,0-19,7.09-19,15.83v63.46h97.27"}),Object(a.jsx)("rect",{className:"cls-4",x:671,y:321.47,width:98,height:18})]}),Object(a.jsxs)("g",{id:"credit_card-2","data-name":"credit card",children:[Object(a.jsx)("path",{className:"cls-6",d:"M769,498.14H690.52c-10.48,0-19,7.08-19,15.82v63.46h97.27"}),Object(a.jsx)("rect",{className:"cls-4",x:671,y:525.32,width:98,height:18})]}),Object(a.jsxs)("g",{id:"line-3","data-name":"line",children:[Object(a.jsx)("line",{className:"cls-3",x1:648,y1:373.47,x2:770.22,y2:373.47}),Object(a.jsx)("circle",{className:"cls-4",cx:648,cy:373.47,r:7})]}),Object(a.jsxs)("g",{id:"line-4","data-name":"line",children:[Object(a.jsx)("line",{className:"cls-3",x1:648,y1:577.32,x2:770.22,y2:577.32}),Object(a.jsx)("circle",{className:"cls-4",cx:648,cy:577.32,r:7})]})]})]}),Object(a.jsxs)("g",{id:"smartphone",children:[Object(a.jsx)("rect",{id:"shape-3","data-name":"shape",className:"cls-7",x:762,y:72.47,width:400,height:708,rx:20}),Object(a.jsx)("rect",{id:"screen",className:"cls-6",x:842,y:118.96,width:285.11,height:562.51,rx:28.52}),Object(a.jsx)("path",{id:"button",className:"cls-5",d:"M991,758.47a29,29,0,1,1,29-29A29,29,0,0,1,991,758.47Zm0-52a23,23,0,1,0,23,23A23,23,0,0,0,991,706.47Z"}),Object(a.jsx)("circle",{id:"shape-4","data-name":"shape",className:"cls-5",cx:934,cy:98.47,r:7}),Object(a.jsx)("rect",{id:"shape-5","data-name":"shape",className:"cls-5",x:953,y:92.47,width:85,height:12,rx:6}),Object(a.jsx)("path",{id:"line-5","data-name":"line",className:"cls-3",d:"M822.52,780.49A28.4,28.4,0,0,1,794,752.22V106.73a28.4,28.4,0,0,1,28.52-28.27"}),Object(a.jsx)("rect",{id:"shape-6","data-name":"shape",className:"cls-4",x:770.27,y:394.57,width:11.47,height:102.81,rx:5.73}),Object(a.jsx)("path",{id:"succes_icon","data-name":"succes icon",className:"cls-5",d:"M1067.7,314a9.5,9.5,0,0,0-13.08,3l-23.41,37.62a81.17,81.17,0,1,0,13.65,14l25.89-41.6A9.49,9.49,0,0,0,1067.7,314ZM1055.47,417.7a75.11,75.11,0,1,1-27.45-58l-42.4,68.12L961.08,395.2a9.5,9.5,0,1,0-15.19,11.41l32.88,43.74a9.5,9.5,0,0,0,7.59,3.79h.42a9.52,9.52,0,0,0,7.65-4.47l47-75.55A74.61,74.61,0,0,1,1055.47,417.7Z"})]}),Object(a.jsxs)("g",{id:"watet_stripe","data-name":"watet stripe",children:[Object(a.jsx)("path",{className:"cls-7",d:"M545.73,399.47H366.12v-307c0-11,15.48-20,26.53-20H316.94a20,20,0,0,0-20,20v668a20,20,0,0,0,20,20h69.18a20,20,0,0,1-20-20v-258H545.73a40.11,40.11,0,0,0,40.11-40.11V439.58A40.11,40.11,0,0,0,545.73,399.47Z"}),Object(a.jsx)("path",{id:"elipse",className:"cls-5",d:"M537.84,474.47a24,24,0,1,1,24-24A24,24,0,0,1,537.84,474.47Zm0-42a18,18,0,1,0,18,18A18,18,0,0,0,537.84,432.47Z"})]}),Object(a.jsx)("path",{id:"line-6","data-name":"line",className:"cls-8",d:"M364.6,399.16V101.25c0-15.61,12-26.53,27.76-26.53"}),Object(a.jsx)("path",{id:"line-7","data-name":"line",className:"cls-8",d:"M393.12,780.5a28.4,28.4,0,0,1-28.52-28.27V502.38"}),Object(a.jsx)("line",{id:"line-8","data-name":"line",className:"cls-3",x1:3,y1:780.47,x2:1438,y2:780.47})]})})})]}))}},249:function(e,t,n){"use strict";n(0),n(46);var c,a=n(7),i=n(5).d.button(c||(c=Object(a.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 45%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  \n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n    margin-left: 0rem;\n  }\n  \n"])),(function(e){return e.color||"#FFF"}),(function(e){return e.color?"rgb(209, 29, 50)":"#fff"}),(function(e){return e.color?"5px solid rgb(209, 29, 50)":"2px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"})),s=n(1);t.a=function(e){var t=e.width,n=e.children;return Object(s.jsx)(i,{className:"btn btn-blue btn-radius children",width:t,onClick:function(){return e="Service",void document.getElementById(e).scrollIntoView({behavior:"smooth"});var e},children:n})}},250:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},i=Object.keys(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return c}))},368:function(e,t,n){},369:function(e,t,n){},502:function(e,t,n){"use strict";n.r(t);var c,a,i,s,r,l,d,o,j,x=n(219),b=n(212),m=n(228),h=n.n(m),u=n(241),O=n(7),p=n(5),f=n(0),y=n.n(f),g=y.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.t.bind(null,496,7))})),w=p.d.section(c||(c=Object(O.a)(["\n  position: relative;\n  padding: 15rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),v=p.d.p(a||(a=Object(O.a)(["\n  margin: 1.5rem 0 2rem 0;\n  font-size: 20px\n  \n"]))),N=p.d.div(i||(i=Object(O.a)(["\n  position: relative;\n  max-width: 840px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),k=p.d.div(s||(s=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),M=p.d.h6(r||(r=Object(O.a)(["\n  font-size: 1rem;\n  line-height: 1.2rem;\n  padding: 0.5rem 0;\n"]))),P=p.d.p(l||(l=Object(O.a)(["\n  font-size: 0.9rem;\n"]))),z=(Object(p.d)(g)(d||(d=Object(O.a)(["\n  margin: 2rem 0;\n  position: relative;\n"]))),n(1)),_=y.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.t.bind(null,495,7))})),A=y.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.t.bind(null,496,7))})),V=Object(b.a)()((function(e){var t=e.icon,n=e.title,c=e.content,a=e.section,i=e.t,s=e.id;return Object(z.jsx)(w,{children:Object(z.jsxs)(_,{type:"flex",justify:"space-between",align:"middle",id:s,children:[Object(z.jsx)(A,{lg:11,md:11,sm:12,xs:24,children:Object(z.jsx)(h.a,{left:!0,children:Object(z.jsx)(u.a,{src:t,className:"about-block-image",width:"100%",height:"100%"})})}),Object(z.jsx)(A,{lg:11,md:11,sm:11,xs:24,children:Object(z.jsx)(h.a,{right:!0,children:Object(z.jsxs)(N,{children:[Object(z.jsx)("h3",{children:i(n)}),Object(z.jsx)(v,{children:i(c)}),Object(z.jsx)(k,{children:Object(z.jsx)(_,{type:"flex",justify:"space-between",children:a&&"object"===typeof a&&a.map((function(e,t){return Object(z.jsxs)(A,{span:11,children:[Object(z.jsx)(u.a,{src:e.icon,width:"60px",height:"60px"}),Object(z.jsx)(M,{children:i(e.title)}),Object(z.jsx)(P,{children:i(e.content)}),Object(z.jsx)(P,{children:i(e.contentTwo)})]},t)}))})})]})})})]})})})),Z=n(249),H=(n(368),n(27)),I=n(250),F=p.d.div(o||(o=Object(O.a)(["\n  overflow: hidden;\n background-color: transparent !important;\n"]))),S=p.d.div(j||(j=Object(O.a)(["\n  width: 100%;\n  height: 0;\n  transition: 0.3s filter ease-in-out;\n  /* Blur Effect */\n  /* filter: ","; */\n  /*  */\n  /* Pixelated Effect */\n  image-rendering: ",";\n  image-rendering: ",";\n  /* filter: grayscale(100%); */\n  /*  */\n  padding-top: ","%;\n  background-image: url(",");\n  background-position: 100% auto;\n  background-origin: border-box;\n  background-size: contain;\n"])),(function(e){return e.loaded?"unset":"blur(15px)"}),(function(e){return e.loaded?"unset":"pixelated"}),(function(e){return e.loaded?"unset":"crisp-edges"}),(function(e){return e.ratio}),(function(e){return e.src})),E=function(e){var t=e.placeholder,n=e.image,c=Object(I.a)(e,["placeholder","image"]),a=Object(f.useState)({src:t,loaded:!1}),i=Object(H.a)(a,2),s=i[0],r=i[1];return Object(f.useEffect)((function(){var e=new Image;e.onload=function(){r({src:e.src,loaded:!0})},e.src=n}),[n,!0]),Object(z.jsx)(F,{children:Object(z.jsx)(S,Object(x.a)(Object(x.a)({},c),s))})},T=n.p+"static/media/light3_.c5aee54a.webp",q=n.p+"static/media/light3.1806b022.webp";var B,C,D,L,J,Q=function(){return Object(z.jsx)("div",{className:"ImageDiv",children:Object(z.jsx)(E,{className:"img",image:q,placeholder:T,width:2992,height:2134,ratio:71.323529411})})},R=(n(369),n(233)),G=n(107),K=n.n(G),U=n(106),W=n.n(U),X=n(55),Y=n.n(X),$=p.d.section(B||(B=Object(O.a)(["\n  position: relative;\n  padding: 12rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 5rem 0 6rem;\n  }\n"]))),ee=p.d.p(C||(C=Object(O.a)(["\n  margin: 1.5rem 0 2rem 0;\n  font-size: 20px\n"]))),te=p.d.p(D||(D=Object(O.a)(["\n  margin: 0.4rem -5rem 0rem -6rem;\n  font-size: 16px\n"]))),ne=p.d.div(L||(L=Object(O.a)(["\n  position: relative;\n  max-width: 640px;\n  margin-left:1rem;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),ce=p.d.div(J||(J=Object(O.a)(["\n  max-width: 400px;\n  min-width: 400px;\n  justify-content: space-between;\n"]))),ae=y.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.t.bind(null,495,7))})),ie=y.a.lazy((function(){return Promise.all([n.e(1),n.e(12)]).then(n.t.bind(null,496,7))})),se=Object(b.a)()((function(e){var t=e.title,n=e.content,c=(e.contentTwo,e.button),a=(e.icon,e.t),i=e.id;return Object(z.jsx)($,{children:Object(z.jsxs)(ae,{type:"flex",justify:"space-between",align:"middle",id:i,children:[Object(z.jsx)(ie,{lg:11,md:11,sm:11,xs:24,children:Object(z.jsx)(h.a,{left:!0,children:Object(z.jsxs)(ne,{children:[Object(z.jsx)("h3",{children:a(t)}),Object(z.jsx)(ee,{children:a(n)}),Object(z.jsx)(ae,{children:Object(z.jsxs)(ae,{children:[Object(z.jsx)(ie,{xs:12,sm:24,md:24,lg:12,xl:12,children:Object(z.jsx)(ce,{children:c&&"object"===typeof c&&c.map((function(e,t){return Object(z.jsx)(Z.a,{children:Object(z.jsxs)(te,{children:[a(e.title1),Object(z.jsx)(W.a,{className:"icon",style:{fontSize:20,paddingTop:4}})]})},t)}))})}),Object(z.jsx)(ie,{xs:24,sm:24,md:24,lg:12,xl:12,children:Object(z.jsx)(ce,{children:c&&"object"===typeof c&&c.map((function(e,t){return Object(z.jsxs)(R.default,{color:e.color,width:"true",onClick:function(){return function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}("Team")},children:[a(e.title),Object(z.jsx)(K.a,{style:{color:"#FFF",fontSize:25,paddingTop:6,paddingLeft:6}})]},t)}))})})]})})]})})}),Object(z.jsx)(ie,{lg:12,md:12,sm:12,xs:24,children:Object(z.jsx)(h.a,{right:!0,children:Object(z.jsx)(f.Suspense,{fallback:Object(z.jsx)("div",{children:Object(z.jsx)(Y.a,{type:"Rings",color:"#00BFFF",height:100,width:100,timeout:3e3})}),children:Object(z.jsx)(Q,{id:"ImageComp"})})})})]})})}));t.default=function(e){return"left"===e.type?Object(z.jsx)(V,Object(x.a)({},e)):"right"===e.type?Object(z.jsx)(se,Object(x.a)({},e)):null}}}]);
//# sourceMappingURL=15.ec11337d.chunk.js.map