(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[51],{193:function(e,t,c){"use strict";var a=c(10),n=c(127),o="512px 512px";t.a=function(e,t){for(var c=Array(9).fill().map((function(e,t){return t+1})).map((function(e){return 1===e?[-280,-170]:[-(24+128*((e-2)%4)),-(298+128*Math.floor(e/6))]})),r=Object(a.a)(e,2),i=r[0],d=r[1],u=128*i,s=128*d,l=function(e){var t=Object(a.a)(c[e-1],2),n=t[0],o=t[1];return"".concat(n-u,"px ").concat(o+s,"px")},m=Object(a.a)(t,2),x=m[0],b=m[1],h=128*x,p=128*b,g=function(e){var t=Object(a.a)(c[e-1],2),n=t[0],o=t[1];return"".concat(n-h,"px ").concat(o+p-32,"px")},j={root:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"0.5rem",margin:"0.5rem"},faceBox:{display:"flex",flexDirection:"column",cursor:"pointer"},eyeBox:{width:"".concat(64,"px"),height:"".concat(32,"px"),backgroundSize:o,borderRadius:"0.5rem 0.5rem 0 0"},mouthBox:{width:"".concat(64,"px"),height:"".concat(32,"px"),backgroundSize:o,borderRadius:"0 0 0.5rem 0.5rem"}},f=1;f<=9;f++)j["eye".concat(f)]={backgroundPosition:l(f)},j["mouth".concat(f)]={backgroundPosition:g(f)};return Object(n.a)(j)()}},472:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c(0),o=c(15),r=c(193),i=c(479),d=c(133),u=c.n(d),s=c(33),l=c(60);t.default=function(e){var t=e.change,c=t.id,d=t.time,m=t.eyeIdx,x=t.mouthIdx,b=e.deleteFaceChange,h=e.handleChange,p=e.handleClick,g=Object(n.useContext)(o.b).model,j=g.eyeTexture,f=g.mouthTexture,O="".concat(s.b,"/fbx/").concat(j,"/").concat(j,".png"),y="".concat(s.b,"/fbx/").concat(f,"/").concat(f,".png"),k=l.a[j]||[0,0],v=l.a[f]||[0,0],C=Object(r.a)(k,v),B=m?Object(a.jsx)("div",{className:"".concat(C["eye".concat(m)]," ").concat(C.eyeBox),style:{backgroundImage:"url(".concat(O,")")}}):"Set",w=x?Object(a.jsx)("div",{className:"".concat(C["mouth".concat(x)]," ").concat(C.mouthBox),style:{backgroundImage:"url(".concat(y,")")}}):"Set";return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"ChainAniFace-delete",onClick:b,id:c,children:Object(a.jsx)(u.a,{})}),Object(a.jsx)(i.a,{onChange:h,inputProps:{type:"number",min:0,max:100,step:1,"data-name":"time","data-id":c},value:d}),Object(a.jsx)("div",{onClick:p,"data-target":"eye","data-id":c,children:B}),Object(a.jsx)("div",{onClick:p,"data-target":"mouth","data-id":c,children:w})]})}}}]);
//# sourceMappingURL=51.19db81c0.chunk.js.map