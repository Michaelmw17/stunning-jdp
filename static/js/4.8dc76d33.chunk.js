(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4,2],{204:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(206);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},206:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))},211:function(e,t,n){"use strict";function c(e,t){var n={};for(var c in e)t.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(e,c)&&(n[c]=e[c]);return n}function s(e,t){var n=t.left,c=t.right,s=t.up,a=t.down,i=t.top,l=t.bottom,r=t.big,d=t.mirror,j=t.opposite,b=(n?1:0)|(c?2:0)|(i||a?4:0)|(l||s?8:0)|(d?16:0)|(j?32:0)|(e?64:0)|(r?128:0);if(x.hasOwnProperty(b))return x[b];var h=n||c||s||a||i||l,m=void 0,O=void 0;if(h){if(!d!=!(e&&j)){var p=[c,n,l,i,a,s];n=p[0],c=p[1],i=p[2],l=p[3],s=p[4],a=p[5]}var u=r?"2000px":"100%";m=n?"-"+u:c?u:"0",O=a||i?"-"+u:s||l?u:"0"}return x[b]=(0,o.animation)((e?"to":"from")+" {"+(h?" transform: translate3d("+m+", "+O+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),x[b]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,i=e.duration,l=void 0===i?o.defaults.duration:i,r=e.delay,j=void 0===r?o.defaults.delay:r,x=e.count,b=void 0===x?o.defaults.count:x,h=c(e,["children","out","forever","timeout","duration","delay","count"]),m={make:s,duration:void 0===a?l:a,delay:j,forever:n,count:b,style:{animationFillMode:"both"},reverse:h.left};return(0,d.default)(h,m,m,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,l=n(7),r=n(139),d=(i=r)&&i.__esModule?i:{default:i},o=n(93),j={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},x={};a.propTypes=j,t.default=a,e.exports=t.default},217:function(e,t,n){"use strict";n.r(t);var c,s=n(5),a=n(4).d.button(c||(c=Object(s.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 100%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  max-width: 180px;\n\n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n    margin-left: 0rem;\n  }\n  \n"])),(function(e){return e.color||"rgb(209, 29, 50)"}),(function(e){return e.color?"rgb(209, 29, 50)":"#fff"}),(function(e){return e.color?"1px solid #687864":"0px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"})),i=n(1);t.default=function(e){var t=e.color,n=e.width,c=e.children,s=e.onClick;return Object(i.jsx)(a,{color:t,width:n,onClick:s,children:c})}},224:function(e,t,n){"use strict";var c=n(204),s=(n(0),n(1));t.a=function(e){return Object(s.jsxs)("svg",Object(c.a)(Object(c.a)({viewBox:"0 0 1441 783.5"},e),{},{children:[Object(s.jsx)("defs",{children:Object(s.jsx)("style",{children:".cls-1{fill:#feba91;}.cls-2,.cls-6{fill:#fff;}.cls-2,.cls-3,.cls-8{stroke:#2e186a;stroke-linejoin:round;stroke-width:6px;}.cls-2,.cls-3{stroke-linecap:round;}.cls-3,.cls-8{fill:none;}.cls-4{fill:#687864;}.cls-5{fill:#5d21d1;}.cls-7{fill:#fe7624;}"})}),Object(s.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(s.jsx)("g",{id:"solid",children:Object(s.jsxs)("g",{id:"Payment",children:[Object(s.jsx)("path",{id:"wallet_back","data-name":"wallet back",className:"cls-1",d:"M794,780.47H393.2a27.73,27.73,0,0,1-27.73-27.73V100.2A27.72,27.72,0,0,1,393.2,72.47H794a27.73,27.73,0,0,0-27.73,27.73V752.74A27.74,27.74,0,0,0,794,780.47Z"}),Object(s.jsxs)("g",{id:"banknotes",children:[Object(s.jsxs)("g",{id:"banknote_II","data-name":"banknote II",children:[Object(s.jsx)("path",{className:"cls-2",d:"M473.4,127.8,508.07,9a8.31,8.31,0,0,1,10.31-5.65L779.26,79.47V156.7"}),Object(s.jsx)("path",{className:"cls-3",d:"M770.94,102.82,553.43,39.34a26.45,26.45,0,0,1-32.8,18l-.81-.26-21.36,73.17"})]}),Object(s.jsxs)("g",{id:"banknote",children:[Object(s.jsx)("path",{className:"cls-2",d:"M430.18,302,445.24,133.7a8.3,8.3,0,0,1,9-7.54l314.58,27.7v137.3"}),Object(s.jsx)("path",{className:"cls-3",d:"M765.38,179.64,504.61,156.31c-1.39,15.54-16.39,26.89-33.51,25.35l-1-.11-10.78,120.6"})]}),Object(s.jsxs)("g",{id:"line",children:[Object(s.jsx)("line",{className:"cls-3",x1:401,y1:302.47,x2:546,y2:302.47}),Object(s.jsx)("circle",{className:"cls-4",cx:401,cy:302.47,r:7})]})]}),Object(s.jsxs)("g",{id:"purse",children:[Object(s.jsx)("path",{id:"sahpe_back","data-name":"sahpe back",className:"cls-4",d:"M565,223.47h20a18,18,0,0,1,18,18v539a0,0,0,0,1,0,0H565a18,18,0,0,1-18-18v-521a18,18,0,0,1,18-18Z"}),Object(s.jsx)("path",{id:"shape",className:"cls-5",d:"M1060,780.62H585.76a20,20,0,0,0,20-20V243.47a20,20,0,0,0-20-20H1060a20,20,0,0,1,20,20V760.62A20,20,0,0,1,1060,780.62Z"}),Object(s.jsx)("path",{id:"line-2","data-name":"line",className:"cls-3",d:"M585,226.46c9.94,0,18,7.53,18,16.82V778.89"}),Object(s.jsxs)("g",{id:"zipper",children:[Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:258.88,x2:518,y2:258.88}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:280.52,x2:518,y2:280.52}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:323.79,x2:518,y2:323.79}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:345.42,x2:518,y2:345.42}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:367.06,x2:518,y2:367.06}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:388.69,x2:518,y2:388.69}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:410.33,x2:518,y2:410.33}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:431.96,x2:518,y2:431.96}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:453.6,x2:518,y2:453.6}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:475.23,x2:518,y2:475.23}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:496.87,x2:518,y2:496.87}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:518.5,x2:518,y2:518.5}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:540.14,x2:518,y2:540.14}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:561.77,x2:518,y2:561.77}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:583.41,x2:518,y2:583.41}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:626.68,x2:518,y2:626.68}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:648.31,x2:518,y2:648.31}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:669.95,x2:518,y2:669.95}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:691.58,x2:518,y2:691.58}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:713.22,x2:518,y2:713.22}),Object(s.jsx)("line",{className:"cls-3",x1:546.84,y1:734.85,x2:518,y2:734.85})]}),Object(s.jsxs)("g",{id:"coin",children:[Object(s.jsx)("path",{id:"shape-2","data-name":"shape",className:"cls-6",d:"M603,588a97,97,0,1,0,0,189Z"}),Object(s.jsx)("path",{id:"dollar_sign","data-name":"dollar sign",className:"cls-5",d:"M603.16,678.66l-8.29,0q3.32-9.61,8.29-14.68V649.12a22,22,0,0,0-4.14,2.53,32.51,32.51,0,0,0-9.63,11.71,101.13,101.13,0,0,0-5.65,15.28H539.22q.84-9.79,7.56-14.87a24.19,24.19,0,0,1,14.87-5.07c2.21-.1,3.71-.6,4.48-1.49s1.16-2.38,1.16-4.48c0-2.33-.49-3.83-1.49-4.49s-2.88-1-5.65-1a28.45,28.45,0,0,0-14.62,4,32.26,32.26,0,0,0-11.21,11.13,37,37,0,0,0-5.23,16.28H514.47a2.34,2.34,0,0,0-1.83,1.08,4.38,4.38,0,0,0-.83,2.74,3.86,3.86,0,0,0,.91,2.57,2.68,2.68,0,0,0,2.08,1.09h14.29a42.89,42.89,0,0,0,4.73,17.19A30.89,30.89,0,0,0,545,715.44a30.46,30.46,0,0,0,16.28,4.4q10.47,0,16.78-5.57A34,34,0,0,0,587.23,702a145,145,0,0,0,5.48-16c2.68,0,6.17,0,10.45,0Zm-29.3,23.4q-4.58,5.66-12.55,5.65A20.18,20.18,0,0,1,546.53,702q-5.82-5.73-7-15.86,13.13-.17,39.87-.17h2.33Q578.42,696.42,573.86,702.06Z"})]}),Object(s.jsxs)("g",{id:"credit_cards","data-name":"credit cards",children:[Object(s.jsxs)("g",{id:"credit_card","data-name":"credit card",children:[Object(s.jsx)("path",{className:"cls-6",d:"M769,294.28H690.52c-10.48,0-19,7.09-19,15.83v63.46h97.27"}),Object(s.jsx)("rect",{className:"cls-4",x:671,y:321.47,width:98,height:18})]}),Object(s.jsxs)("g",{id:"credit_card-2","data-name":"credit card",children:[Object(s.jsx)("path",{className:"cls-6",d:"M769,498.14H690.52c-10.48,0-19,7.08-19,15.82v63.46h97.27"}),Object(s.jsx)("rect",{className:"cls-4",x:671,y:525.32,width:98,height:18})]}),Object(s.jsxs)("g",{id:"line-3","data-name":"line",children:[Object(s.jsx)("line",{className:"cls-3",x1:648,y1:373.47,x2:770.22,y2:373.47}),Object(s.jsx)("circle",{className:"cls-4",cx:648,cy:373.47,r:7})]}),Object(s.jsxs)("g",{id:"line-4","data-name":"line",children:[Object(s.jsx)("line",{className:"cls-3",x1:648,y1:577.32,x2:770.22,y2:577.32}),Object(s.jsx)("circle",{className:"cls-4",cx:648,cy:577.32,r:7})]})]})]}),Object(s.jsxs)("g",{id:"smartphone",children:[Object(s.jsx)("rect",{id:"shape-3","data-name":"shape",className:"cls-7",x:762,y:72.47,width:400,height:708,rx:20}),Object(s.jsx)("rect",{id:"screen",className:"cls-6",x:842,y:118.96,width:285.11,height:562.51,rx:28.52}),Object(s.jsx)("path",{id:"button",className:"cls-5",d:"M991,758.47a29,29,0,1,1,29-29A29,29,0,0,1,991,758.47Zm0-52a23,23,0,1,0,23,23A23,23,0,0,0,991,706.47Z"}),Object(s.jsx)("circle",{id:"shape-4","data-name":"shape",className:"cls-5",cx:934,cy:98.47,r:7}),Object(s.jsx)("rect",{id:"shape-5","data-name":"shape",className:"cls-5",x:953,y:92.47,width:85,height:12,rx:6}),Object(s.jsx)("path",{id:"line-5","data-name":"line",className:"cls-3",d:"M822.52,780.49A28.4,28.4,0,0,1,794,752.22V106.73a28.4,28.4,0,0,1,28.52-28.27"}),Object(s.jsx)("rect",{id:"shape-6","data-name":"shape",className:"cls-4",x:770.27,y:394.57,width:11.47,height:102.81,rx:5.73}),Object(s.jsx)("path",{id:"succes_icon","data-name":"succes icon",className:"cls-5",d:"M1067.7,314a9.5,9.5,0,0,0-13.08,3l-23.41,37.62a81.17,81.17,0,1,0,13.65,14l25.89-41.6A9.49,9.49,0,0,0,1067.7,314ZM1055.47,417.7a75.11,75.11,0,1,1-27.45-58l-42.4,68.12L961.08,395.2a9.5,9.5,0,1,0-15.19,11.41l32.88,43.74a9.5,9.5,0,0,0,7.59,3.79h.42a9.52,9.52,0,0,0,7.65-4.47l47-75.55A74.61,74.61,0,0,1,1055.47,417.7Z"})]}),Object(s.jsxs)("g",{id:"watet_stripe","data-name":"watet stripe",children:[Object(s.jsx)("path",{className:"cls-7",d:"M545.73,399.47H366.12v-307c0-11,15.48-20,26.53-20H316.94a20,20,0,0,0-20,20v668a20,20,0,0,0,20,20h69.18a20,20,0,0,1-20-20v-258H545.73a40.11,40.11,0,0,0,40.11-40.11V439.58A40.11,40.11,0,0,0,545.73,399.47Z"}),Object(s.jsx)("path",{id:"elipse",className:"cls-5",d:"M537.84,474.47a24,24,0,1,1,24-24A24,24,0,0,1,537.84,474.47Zm0-42a18,18,0,1,0,18,18A18,18,0,0,0,537.84,432.47Z"})]}),Object(s.jsx)("path",{id:"line-6","data-name":"line",className:"cls-8",d:"M364.6,399.16V101.25c0-15.61,12-26.53,27.76-26.53"}),Object(s.jsx)("path",{id:"line-7","data-name":"line",className:"cls-8",d:"M393.12,780.5a28.4,28.4,0,0,1-28.52-28.27V502.38"}),Object(s.jsx)("line",{id:"line-8","data-name":"line",className:"cls-3",x1:3,y1:780.47,x2:1438,y2:780.47})]})})})]}))}},228:function(e,t,n){"use strict";n(0),n(44);var c,s=n(5),a=n(4).d.button(c||(c=Object(s.a)(["\n  background: ",";\n  color: ",";\n  font-size: 1rem;\n  font-weight: 700;\n  width: 45%;\n  border: ",";\n  border-radius: 8px;\n  height: 60px;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0.625rem;\n  \n  @media only screen and (max-width: 1024px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    width: ",";\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: ",";\n    margin-left: 0rem;\n  }\n  \n"])),(function(e){return e.color||"#FFF"}),(function(e){return e.color?"rgb(209, 29, 50)":"#fff"}),(function(e){return e.color?"5px solid rgb(209, 29, 50)":"2px"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"}),(function(e){return e.width?"160px":"100%"})),i=n(1);t.a=function(e){var t=e.width,n=e.children;return Object(i.jsx)(a,{className:"btn btn-blue btn-radius children",width:t,onClick:function(){return e="Service",void document.getElementById(e).scrollIntoView({behavior:"smooth"});var e},children:n})}},389:function(e,t,n){"use strict";n.r(t);var c,s,a,i,l,r,d,o,j,x,b,h,m=n(204),O=n(197),p=n(200),u=n(199),f=n(211),y=n.n(f),g=n(224),w=n(5),v=n(4),N=v.d.section(c||(c=Object(w.a)(["\n  position: relative;\n  padding: 15rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 4rem 0 4rem;\n  }\n"]))),k=v.d.p(s||(s=Object(w.a)(["\n  margin: 1.5rem 0 2rem 0;\n  font-size: 20px\n  \n"]))),M=v.d.div(a||(a=Object(w.a)(["\n  position: relative;\n  max-width: 840px;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),A=v.d.div(i||(i=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n"]))),P=v.d.h6(l||(l=Object(w.a)(["\n  font-size: 1rem;\n  line-height: 1.2rem;\n  padding: 0.5rem 0;\n"]))),_=v.d.p(r||(r=Object(w.a)(["\n  font-size: 0.9rem;\n"]))),V=(Object(v.d)(p.a)(d||(d=Object(w.a)(["\n  margin: 2rem 0;\n  position: relative;\n"]))),n(1)),Z=Object(u.a)()((function(e){var t=e.icon,n=e.title,c=e.content,s=e.section,a=e.t,i=e.id;return Object(V.jsx)(N,{children:Object(V.jsxs)(O.a,{type:"flex",justify:"space-between",align:"middle",id:i,children:[Object(V.jsx)(p.a,{lg:11,md:11,sm:12,xs:24,children:Object(V.jsx)(y.a,{left:!0,children:Object(V.jsx)(g.a,{src:t,className:"about-block-image",width:"100%",height:"100%"})})}),Object(V.jsx)(p.a,{lg:11,md:11,sm:11,xs:24,children:Object(V.jsx)(y.a,{right:!0,children:Object(V.jsxs)(M,{children:[Object(V.jsx)("h3",{children:a(n)}),Object(V.jsx)(k,{children:a(c)}),Object(V.jsx)(A,{children:Object(V.jsx)(O.a,{type:"flex",justify:"space-between",children:s&&"object"===typeof s&&s.map((function(e,t){return Object(V.jsxs)(p.a,{span:11,children:[Object(V.jsx)(g.a,{src:e.icon,width:"60px",height:"60px"}),Object(V.jsx)(P,{children:a(e.title)}),Object(V.jsx)(_,{children:a(e.content)}),Object(V.jsx)(_,{children:a(e.contentTwo)})]},t)}))})})]})})})]})})})),H=n(0),F=n(103),z=n(216),I=n.n(z),B=n(228),q=n(217),C=v.d.section(o||(o=Object(w.a)(["\n  position: relative;\n  padding: 4rem 0 8rem;\n\n  @media only screen and (max-width: 768px) {\n    padding: 13rem 0 6rem;\n  }\n"]))),D=v.d.p(j||(j=Object(w.a)(["\n  margin: 1.5rem 0 2rem 0;\n  font-size: 20px\n"]))),S=v.d.p(x||(x=Object(w.a)(["\n  margin: -0.2rem 3rem 0rem -1rem;\n  font-size: 16px\n"]))),E=v.d.div(b||(b=Object(w.a)(["\n  position: relative;\n  max-width: 640px;\n  margin-left:1rem;\n\n  @media only screen and (max-width: 480px) {\n    margin: 2rem 0;\n  }\n"]))),L=v.d.div(h||(h=Object(w.a)(["\n  max-width: 400px;\n  min-width: 400px;\n  justify-content: space-between;\n"]))),T=Object(F.b)((function(){return n.e(18).then(n.bind(null,417))}),{fallback:Object(V.jsx)("div",{children:Object(V.jsx)(I.a,{type:"Rings",color:"#00BFFF",height:80,width:80})})}),J=Object(u.a)()((function(e){var t=e.title,n=e.content,c=(e.contentTwo,e.button),s=(e.icon,e.t),a=e.id;return Object(V.jsx)(C,{children:Object(V.jsxs)(O.a,{type:"flex",justify:"space-between",align:"middle",id:a,children:[Object(V.jsx)(p.a,{lg:11,md:11,sm:11,xs:24,children:Object(V.jsx)(y.a,{left:!0,children:Object(V.jsxs)(E,{children:[Object(V.jsx)("h3",{children:s(t)}),Object(V.jsx)(D,{children:s(n)}),Object(V.jsx)(D,{children:"Brothers Dominic and Joseph Panetta have built a reputable electrical contracting business specialising in all electrical installations and repairs for Residential and Commercial sectors. "}),Object(V.jsx)(D,{children:"We offer our expert advice and cost effective solutions, and provide options for lasting, efficient and practical lighting designs."}),Object(V.jsx)("div",{children:Object(V.jsx)("h6",{style:{color:"red",fontSize:29,textAlign:"center"},children:"\u201cOur approach is simple \u2013 we treat your home like our own.\u201d"})}),Object(V.jsx)(O.a,{children:Object(V.jsx)("div",{className:"row",children:Object(V.jsxs)("div",{className:"col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0",children:[Object(V.jsx)(L,{children:c&&"object"===typeof c&&c.map((function(e,t){return Object(V.jsx)(B.a,{children:Object(V.jsx)(S,{children:s(e.title1)})},t)}))}),Object(V.jsx)(L,{children:c&&"object"===typeof c&&c.map((function(e,t){return Object(V.jsx)(q.default,{color:e.color,width:"true",onClick:function(){return function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}("Team")},children:s(e.title)},t)}))})]})})})]})})}),Object(V.jsx)(p.a,{lg:8,md:11,sm:12,xs:24,children:Object(V.jsx)(y.a,{right:!0,children:Object(V.jsx)(H.Suspense,{fallback:Object(V.jsx)("div",{children:Object(V.jsx)(I.a,{type:"Rings",color:"#00BFFF",height:80,width:80})}),children:Object(V.jsx)(T,{})})})})]})})}));t.default=function(e){return"left"===e.type?Object(V.jsx)(Z,Object(m.a)({},e)):"right"===e.type?Object(V.jsx)(J,Object(m.a)({},e)):null}}}]);
//# sourceMappingURL=4.8dc76d33.chunk.js.map