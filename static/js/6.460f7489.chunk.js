(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{140:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(158),c=t(160),s=t(200),r=t.n(s),l=t(159),d=t(165),j=t(164),b=t(13),m=t(228),u=t(201),o=t.n(u),O=function(e){var n=Object(a.useState)({}),t=Object(b.a)(n,2),i=t[0],c=t[1],s=Object(a.useState)({}),r=Object(b.a)(s,2),l=r[0],u=r[1],O=Object(a.useState)(!1),h=Object(b.a)(O,2),p=h[0],x=h[1];Object(a.useEffect)((function(){var e;0===Object.keys(l).length&&p&&(c(""),e="success",m.a[e]({message:"Success",description:"Your message has been sent!"}))}),[l,p]);return{handleChange:function(e){e.persist(),c((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},e.target.name,e.target.value))})),u((function(n){return Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},e.target.name,""))}))},handleSubmit:function(n){n.preventDefault(),u(e(i));3===Object.keys(i).length&&o.a.post("",Object(j.a)({},i)).then((function(){x(!0)}))},values:i,errors:l}};function h(e){var n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var p,x,g,f,y,v,w=t(4),S=t(3),C=S.c.div(p||(p=Object(w.a)(["\n  padding: 5rem 0;\n"]))),k=S.c.section(x||(x=Object(w.a)(["\n  position: relative;\n  width: 100%;\n  max-width: 1280px;\n"]))),E=(S.c.div(g||(g=Object(w.a)(["\n  @media only screen and (min-width: 980px) {\n    padding: 10rem 7rem;\n  }\n"]))),S.c.form(f||(f=Object(w.a)(["\n  width: 100%;\n  max-width: 520px;\n  @media only screen and (max-width: 1045px) {\n    max-width: 100%;\n    margin-top: 2rem;\n  }\n"])))),z=S.c.span(y||(y=Object(w.a)(["\n  display: block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: 600;\n  color: rgb(255, 130, 92);\n  height: 0.775rem;\n  padding: 0 0.675rem;\n"]))),Y=S.c.div(v||(v=Object(w.a)(["\n  text-align: end;\n  position: relative;\n  @media only screen and (max-width: 414px) {\n    padding-top: 0.75rem;\n  }\n"]))),q=t(1),M=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,233))})),N=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,234))})),J=Object(a.lazy)((function(){return t.e(5).then(t.bind(null,178))})),D=Object(a.lazy)((function(){return t.e(13).then(t.bind(null,235))}));n.default=Object(l.a)()((function(e){var n=e.title,t=e.content,a=e.id,s=e.t,l=O(h),d=l.values,j=l.errors,b=l.handleChange,m=l.handleSubmit,u=function(e){var n=e.type,t=j[n];return j[n]?Object(q.jsx)(r.a,{cascade:!0,children:Object(q.jsx)(z,{children:t})}):Object(q.jsx)(z,{})};return Object(q.jsx)(C,{id:a,children:Object(q.jsx)(k,{children:Object(q.jsxs)(i.a,{type:"flex",justify:"space-between",align:"middle",children:[Object(q.jsx)(c.a,{lg:12,md:11,sm:24,children:Object(q.jsx)(M,{padding:!0,title:n,content:t})}),Object(q.jsx)(c.a,{lg:12,md:12,sm:24,children:Object(q.jsxs)(E,{autoComplete:"off",onSubmit:m,children:[Object(q.jsxs)(c.a,{span:24,children:[Object(q.jsx)(N,{type:"text",name:"name",id:"Name",placeholder:"Your Name",value:d.name||"",onChange:b}),Object(q.jsx)(u,{type:"name"})]}),Object(q.jsxs)(c.a,{span:24,children:[Object(q.jsx)(N,{type:"text",name:"email",id:"Email",placeholder:"Your Email",value:d.email||"",onChange:b}),Object(q.jsx)(u,{type:"email"})]}),Object(q.jsxs)(c.a,{span:24,children:[Object(q.jsx)(D,{placeholder:"Your Message",value:d.message||"",name:"message",id:"Message",onChange:b}),Object(q.jsx)(u,{type:"message"})]}),Object(q.jsx)(Y,{children:Object(q.jsx)(J,{name:"submit",type:"submit",children:s("Submit")})})]})})]})})})}))}}]);
//# sourceMappingURL=6.460f7489.chunk.js.map