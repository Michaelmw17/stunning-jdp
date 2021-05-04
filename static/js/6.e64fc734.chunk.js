(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{177:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(197),s=t(200),r=t(352),c=t.n(r),b=t(199),l=t(353),u=t.n(l),d=t(216),j=t.n(d),m=t(206),h=t(204),o=t(27),p=t(388),O=t(356),x=t.n(O),g=function(e){var n=Object(a.useState)({}),t=Object(o.a)(n,2),i=t[0],s=t[1],r=Object(a.useState)({}),c=Object(o.a)(r,2),b=c[0],l=c[1],u=Object(a.useState)(!1),d=Object(o.a)(u,2),j=d[0],O=d[1];Object(a.useEffect)((function(){var e;0===Object.keys(b).length&&j&&(s(""),e="success",p.a[e]({message:"Success",description:"Your message has been sent!"}))}),[b,j]);return{handleChange:function(e){e.persist(),s((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(m.a)({},e.target.name,e.target.value))})),l((function(n){return Object(h.a)(Object(h.a)({},n),{},Object(m.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),l(e(i));3===Object.keys(i).length&&x.a.post("",Object(h.a)({},i)).then((function(){O(!0)}))},values:i,errors:b}};function f(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.number?/^\d{10}$/.test(e.email)&&(n.number="Number is invalid"):n.number="Number is required",e.suburb||(n.suburb="Suburb is required"),e.message||(n.message="Message is required"),n}var v,y,S,q,w,k,N=t(423),C=(t(382),t(5)),L=t(4),z=L.d.div(v||(v=Object(C.a)(["\n  padding: 7rem 0;\n  padding-left:80px;\n  padding-right:30px;\n\n"]))),E=L.d.section(y||(y=Object(C.a)(["\n  position: relative;\n  width: 100%;\n"]))),D=(L.d.div(S||(S=Object(C.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),L.d.form(q||(q=Object(C.a)(["\n  width: 100%;\n  max-width: 520px;\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])))),F=L.d.span(w||(w=Object(C.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),M=L.d.div(k||(k=Object(C.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),P=t(1),Y=Object(a.lazy)((function(){return Promise.resolve().then(t.bind(null,64))})),_=Object(a.lazy)((function(){return t.e(23).then(t.bind(null,421))})),J=Object(a.lazy)((function(){return t.e(2).then(t.bind(null,217))})),B=Object(a.lazy)((function(){return t.e(22).then(t.bind(null,422))})),K=Object(a.lazy)((function(){return Promise.all([t.e(16),t.e(20)]).then(t.bind(null,411))}));n.default=Object(b.a)()((function(e){var n=e.title,t=e.content,r=e.id,b=e.t,l=(e.e,e.handleSubmit);var d=g(f),m=d.values,h=d.errors,o=d.handleChange,p=function(e){var n=e.type,t=h[n];return h[n]?Object(P.jsx)(c.a,{cascade:!0,children:Object(P.jsx)(F,{children:t})}):Object(P.jsx)(F,{})};return Object(P.jsx)(z,{id:r,children:Object(P.jsx)(E,{children:Object(P.jsxs)(i.a,{type:"flex",justify:"space-between",align:"middle",children:[Object(P.jsxs)(s.a,{lg:12,md:12,sm:24,children:[Object(P.jsx)(_,{padding:!0,title:n,content:t}),Object(P.jsxs)(s.a,{children:[Object(P.jsx)("div",{className:"formText",children:Object(P.jsx)("a",{href:"tel:02-9419-7947",children:"Ph: (02) 9419 7947"})}),Object(P.jsx)("div",{className:"formText",children:Object(P.jsx)("a",{href:"https://goo.gl/maps/mXiGinRH8xiEgDN6A",children:" Unit 17, 4-6 Chaplin Drive Lane Cove West NSW 2066"})})]}),Object(P.jsxs)(D,{autoComplete:"off",onSubmit:function(e){e.preventDefault({passive:!0}),u.a.sendForm("service_a9ktqlp","template_l0mglga",e.target,"user_yw3a8DYtaKOIm8KcBtk2L").then((function(e){alert(e.text)||window.location.reload()}),(function(e){alert(e.text)}))}||l,onsubmit:"return false",children:[Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(N.a,{shrink:!0,id:"nameLabel",children:"Full Name  *"}),Object(P.jsx)("input",{minLength:"1",required:"required",type:"text",name:"name",id:"firstName",label:"services",placeholder:"Name *",value:m.name||"",onChange:o}),Object(P.jsx)(p,{type:"name"})]}),Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(N.a,{shrink:!0,id:"EmailLabel",children:"Email *"}),Object(P.jsx)("input",{id:"input",type:"email",name:"email",required:"required",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",placeholder:"JohnSmith@email.com *"}),Object(P.jsx)(p,{type:"email"})]}),Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(N.a,{shrink:!0,id:"phoneLabel",children:"Phone Number *"}),Object(P.jsx)("input",{placeholder:"Phone Number*",value:m.number||"",name:"number",required:"required",id:"number",onChange:o}),Object(P.jsx)(p,{type:"Number"})]}),Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(N.a,{shrink:!0,id:"suburbLabel",children:"Your Suburb *"}),Object(P.jsx)("input",{placeholder:"Suburb Name*",value:m.suburb||"",name:"suburb",required:"required",id:"suburb",onChange:o}),Object(P.jsx)(p,{type:"Suburb"})]}),Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(K,{placeholder:"menu",value:m.message||"",name:"menu",required:"required",id:"menu",onChange:o}),Object(P.jsx)(p,{type:"message"})]}),Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(N.a,{shrink:!0,id:"subjectLabel",children:"Your Subject *"}),Object(P.jsx)("input",{required:"required",type:"text",name:"subject",id:"subject",placeholder:"Subject *",title:"Subject *",value:m.subject||"",onChange:o}),Object(P.jsx)(p,{type:"subject"})]}),Object(P.jsxs)(s.a,{span:24,children:[Object(P.jsx)(N.a,{shrink:!0,id:"MessageLabel",children:"Your Message"}),Object(P.jsx)(B,{placeholder:"Message",value:m.message||"",name:"message",id:"Message",minLength:"5",onChange:o}),Object(P.jsx)(p,{type:"message"})]}),Object(P.jsx)(M,{children:Object(P.jsx)(J,{name:"submit",type:"submit",children:b("Submit")})})]})]}),Object(P.jsx)(s.a,{lg:12,md:11,sm:24,children:Object(P.jsx)(a.Suspense,{fallback:Object(P.jsx)("div",{children:Object(P.jsx)(j.a,{type:"Rings",color:"#00BFFF",height:80,width:80})}),children:Object(P.jsx)(Y,{})})})]})})})}))},382:function(e,n,t){}}]);
//# sourceMappingURL=6.e64fc734.chunk.js.map