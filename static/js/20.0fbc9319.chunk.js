(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[20],{304:function(e,t,i){},306:function(e,t,i){},307:function(e,t,i){},308:function(e,t,i){},489:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(87),r=i(88),s=i(95),c=i(93),o=i(169),d=i.n(o),l=i(71),p=i.n(l),h=i(3),m=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).handleFlip=function(){n.setState((function(e){return{isFlipped:!e.isFlipped}}))},n.handleLevitate=function(){n.setState((function(e){return{isLevitated:!e.isLevitated}}))},n.handleMouseEvent=function(){return"hover"===n.state.behavior?n.handleFlip():"click"===n.state.behavior&&n.state.levitate?n.handleLevitate():void n.state.behavior},n.state={isFlipped:!1,isLevitated:!1,behavior:n.props.behavior?n.props.behavior:"click",levitate:!!n.props.levitate&&n.props.levitate},n}return Object(r.a)(i,[{key:"render",value:function(){var e=this,t={width:this.props.width,height:this.props.height},i=this.props,n=i.classes,a=i.innerCardClass,r=i.className,s=this.state,c=s.isFlipped,o=s.isLevitated;return Object(h.jsx)("div",{className:p()(n.rcfContainer,c?n.rcfActive:null,o?n.rcfLevitate:null,r),style:t,onClick:function(){"click"===e.state.behavior&&e.handleFlip()},onMouseEnter:function(){e.handleMouseEvent()},onMouseLeave:function(){e.handleMouseEvent()},children:Object(h.jsxs)("div",{className:n.rcfFlipper,children:[Object(h.jsx)("div",{className:p()(a,n.rcfFront),style:t,children:this.props.children[0]}),Object(h.jsx)("div",{className:p()(a,n.rcfBack),style:t,children:this.props.children[1]})]})})}}]),i}(n.Component),j=d()({rcfContainer:{position:"relative",perspective:"1000px",transformStyle:"preserve-3d",width:"auto",height:"auto",transition:"transform 500ms cubic-bezier(.18,.45,.11,.91)"},rcfFront:{width:"auto",height:"auto",backfaceVisibility:"hidden",transformStyle:"preserve-3d",position:"absolute",top:0,left:0,zIndex:"2"},rcfBack:{width:"auto",height:"auto",backfaceVisibility:"hidden",transformStyle:"preserve-3d",position:"absolute",top:0,left:0,transform:"rotateY(180deg)"},rcfFlipper:{transition:"0.6s",transformStyle:"preserve-3d",position:"relative"},rcfActive:{"& $rcfFlipper":{transform:"rotateY(180deg) translateX(-20px)"}},rcfLevitate:{transform:"translateY(-15px)",transition:"transform 500ms cubic-bezier(.18,.45,.11,.91)"},"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{rcfActive:{"& $rcfBack":{transform:"rotateY(0deg)"},"& > div":{transform:"rotateY(0deg)"},"& $rcfFront":{transform:"rotateY(180deg)"}},rcfFront:{transform:"rotateY(0deg)"},rcfBack:{transform:"rotateY(-180deg)"}}})(m),b=i(472),u=i(305),x=(i(304),["Repairs & Maintenance"," Renovations & New Builds","Renovations & New Builds"," Switchboard Upgrades","Safety Switch protection","  Smoke Detectors","General Power Outlets","LED Lighting upgrade","Security & Garden Lighting","Ceiling Sweep Fans","Smoke detectors","Appliance installations & Repairs","TV \u2013 DATA \u2013 Communications"].map((function(e,t){return Object(h.jsx)("li",{children:e},t)}))),g=Object(b.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:"rgb(209, 29, 50)",position:"relative",maxHeight:300,color:"#FFF"},listSection:{backgroundColor:"rgb(209, 29, 50)"},ul:{backgroundColor:"rgb(209, 29, 50)",padding:0,paddingRight:50}}}));function f(){var e=g();return Object(h.jsx)(u.a,{className:e.root,subheader:Object(h.jsx)("li",{}),children:Object(h.jsx)("ul",{className:e.ul,children:Object(h.jsx)("ul",{className:"list-unstyled",children:x})})})}i(306);var v=["Maintenance and repairs","Lighting and power ","Testing and tagging ","Data points  ","Smoke detectors","Emergency lighting"].map((function(e,t){return Object(h.jsx)("li",{children:e},t)})),O=Object(b.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:"RGB(209, 29, 50)",position:"relative",maxHeight:300,color:"#FFF"},listSection:{backgroundColor:"RGB(209, 29, 50)"},ul:{backgroundColor:"RGB(209, 29, 50)",padding:0,paddingRight:50}}}));function w(){var e=O();return Object(h.jsx)(u.a,{className:e.root,subheader:Object(h.jsx)("li",{}),children:Object(h.jsx)("ul",{className:e.ul,children:Object(h.jsx)("ul",{className:"list-unstyled",children:v})})})}i(307);var F=["Maintenance and repairs","General power outlets","Lighting control systems","Main switchboards upgrades","Switches and circuit breakers ","Light and power points ","Appliance installations and repairs  ","Hot water repairs "," Preventative maintenance"].map((function(e,t){return Object(h.jsx)("li",{children:e},t)})),y=Object(b.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:"RGB(209, 29, 50)",position:"relative",maxHeight:300,color:"#FFF"},listSection:{backgroundColor:"RGB(209, 29, 50)"},ul:{backgroundColor:"RGB(209, 29, 50)",padding:0,paddingRight:30}}}));function N(){var e=y();return Object(h.jsx)(u.a,{className:e.root,subheader:Object(h.jsx)("li",{}),children:Object(h.jsx)("ul",{className:e.ul,children:Object(h.jsx)("ul",{className:"list-unstyled",children:F})})})}var S,k=i(478),C=i(70),L=i(161),R=i.n(L),B=i(310),z=i.n(B),T=i(309),M=i.n(T),G=(i(308),i(21)),Y=i(20).d.div(S||(S=Object(G.a)(["\n  position: relative;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  padding: ",";\n  overflow: hidden;\n  border-top: ",";\n  @media only screen and (min-width: 1024px) {\n    max-width: 1550px;\n    max-height: 2550px;\n  }\n  @media only screen and (max-width: 768px) {\n    max-width: 530px;\n  }\n  @media only screen and (max-width: 414px) {\n    max-width: 670px;\n    padding: ",";\n  }\n \n"])),(function(e){return e.padding?"2.9rem":"1rem 1rem 1rem 5rem "}),(function(e){return e.border?"1px solid #CDD1D4":""}),(function(e){return e.padding?"2.9rem":"0rem 0rem 1rem 0.5rem "})),A=function(e){var t=e.padding,i=e.border,n=e.children;return Object(h.jsx)(Y,{padding:t,border:i,children:n})},D=d()({root:{display:"block",margin:"50px",position:"relative"},card:{border:"1px solid #ccc",borderRadius:"29px",padding:"10px",marginBottom:"50px",background:" RGB(209, 29, 50)","-webkit-box-shadow":"0 7px 8px rgba(0, 0, 0, 0.12)","-moz-box-shadow":"0 7px 8px rgba(0, 0, 0, 0.12)","box-shadow":" 0 7px 8px rgba(0, 0, 0, 0.12)",color:"white"}})((function(e){var t=e.classes;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(A,{children:Object(h.jsx)("div",{className:t.container,children:Object(h.jsx)("div",{id:"main",className:"containerS",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"Services-section",children:Object(h.jsx)("div",{className:"inner-width-services",children:Object(h.jsxs)(k.a,{container:!0,spacing:8,justify:"flex-start",children:[Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(h.jsxs)(j,{width:"300px",height:"380px",behavior:"hover",className:t.root,innerCardClass:t.card,children:[Object(h.jsx)("div",{className:"text-left",children:Object(h.jsx)("div",{className:"Services",children:Object(h.jsxs)("div",{className:"pie",children:[Object(h.jsx)("div",{className:"p-naming",style:{fontSize:20,paddingRight:"20px",paddingBottom:40},children:"Residential"}),Object(h.jsx)(R.a,{style:{fontSize:230,paddingTop:10,paddingLeft:20}})]})})}),Object(h.jsxs)("div",{className:"text-left",children:[Object(h.jsx)("p",{style:{marginLeft:80,fontSize:20,color:"#FFF",textTransform:"uppercase",listStyleType:"none"},children:"Residential"}),Object(h.jsx)(f,{})]})]})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(h.jsxs)(j,{width:"300px",height:"380px",behavior:"hover",className:t.root,innerCardClass:t.card,children:[Object(h.jsx)("div",{className:"text-left",children:Object(h.jsx)("div",{className:"Services",children:Object(h.jsxs)("div",{className:"pie",children:[Object(h.jsx)("div",{className:"p-naming",style:{fontSize:20,paddingRight:35,marginTop:-5},children:"Strata / Property Maintenance"}),Object(h.jsx)(M.a,{style:{fontSize:230,paddingTop:0,color:"#FFF",paddingLeft:45}})]})})}),Object(h.jsxs)("div",{className:"text-left",children:[Object(h.jsx)("p",{style:{marginLeft:60,fontSize:20,color:"#FFF",textTransform:"uppercase"},children:"Strata / Property Maintenance"}),Object(h.jsx)(N,{})]})]})}),Object(h.jsx)(k.a,{item:!0,xs:12,sm:12,md:12,lg:4,children:Object(h.jsxs)(j,{width:"300px",height:"380px",behavior:"hover",className:t.root,innerCardClass:t.card,children:[Object(h.jsx)("div",{className:"text-left",children:Object(h.jsx)("div",{className:"Services",children:Object(h.jsxs)("div",{className:"pie",children:[Object(h.jsx)("div",{className:"p-naming",style:{fontSize:20,paddingLeft:0,paddingBottom:15},children:"Commercial"}),Object(h.jsx)(z.a,{style:{fontSize:220,paddingTop:50,color:"#FFF",paddingLeft:30}})]})})}),Object(h.jsxs)("div",{className:"text-left",children:[Object(h.jsx)("p",{style:{marginLeft:80,fontSize:20,color:"#FFF",textTransform:"uppercase",listStyleType:"none"},children:"Commercial"}),Object(h.jsx)(w,{})]})]})})]})})})})})})})})}));t.default=Object(C.a)({root:{},container:{marginRight:"auto",marginLeft:"auto",transition:".5s all ease",transform:"rotateX(10deg) scale(1)",perspective:"900px"}})(D)}}]);
//# sourceMappingURL=20.0fbc9319.chunk.js.map