(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[22],{100:function(e,t,n){},107:function(e,t,n){},109:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var r=n(37),a=n.n(r),c=(n(100),n(38)),i=n(61);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(10);a.a.render(Object(u.jsx)(i.a,{children:Object(u.jsx)(c.a,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},13:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"l",(function(){return f})),n.d(t,"w",(function(){return d})),n.d(t,"b",(function(){return l})),n.d(t,"i",(function(){return p})),n.d(t,"v",(function(){return m})),n.d(t,"s",(function(){return b})),n.d(t,"x",(function(){return j})),n.d(t,"n",(function(){return y})),n.d(t,"k",(function(){return _})),n.d(t,"o",(function(){return g})),n.d(t,"q",(function(){return O})),n.d(t,"r",(function(){return k})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return M})),n.d(t,"t",(function(){return C})),n.d(t,"u",(function(){return E})),n.d(t,"y",(function(){return I})),n.d(t,"p",(function(){return N})),n.d(t,"m",(function(){return P})),n.d(t,"a",(function(){return T})),n.d(t,"j",(function(){return A})),n.d(t,"z",(function(){return B}));var r=n(12),a=n(11),c=n(46),i="16rem",u="#330000",o="c100001_01",s=2,f="https://dgk3593.github.io/dl-model/#",d="".concat("/dl-model","/img/matcap"),l="CMN_MWM_03",p=["Sword","Blade","Dagger","Axe","Lance","Bow","Wand","Staff","Manacaster"],m={wireframe:{name:"Wireframe",type:"boolean",default:!1},useTexture:{name:"Texture",type:"boolean",default:!0},transparent:{name:"Transparent",type:"boolean",default:!1},flatShading:{name:"Flat Shading",type:"boolean",default:!1},color:{name:"Color",type:"color",default:"#ffffff"},emissive:{name:"Emissive",type:"color",default:"#000000"},opacity:{name:"Opacity",type:"percentage",default:1,min:0,max:1,step:.05},emissiveIntensity:{name:"Emissive Intensity",type:"percentage",default:1,min:0,max:1,step:.05},specular:{name:"Specular",type:"color",default:"#111111"},metalness:{name:"Metalness",type:"percentage",default:0,min:0,max:1,step:.05},roughness:{name:"Roughness",type:"percentage",default:1,min:0,max:1,step:.05},shininess:{name:"Shininess",type:"number",default:30,min:1,max:100,step:1},gradientMap:{name:"Gradient Map",type:"select",default:"none",options:["none","2 Tones","3 Tones","4 Tones","5 Tones"]},matcap:{name:"Matcap",type:"select",default:c.a[0].name,options:c.a.map((function(e){return e.name}))}},b=["color","emissive","specular"],v=Object.entries(m),h=Object.fromEntries(v.map((function(e){var t=Object(a.a)(e,2);return[t[0],t[1].default]}))),j=["gradientMap","flatShading","useTexture","matcap"],y=[{id:"0",type:"Ambient",color:"#444444",enable:!0,intensity:1},{id:"1",type:"Directional",color:"#ffffff",enable:!0,position:[50,0,100],intensity:.8}],_=[" .:-=+*#%@"," .'`^\",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"],g={model:{id:"",texture:"",eyeTexture:"",eyeIdx:NaN,mouthTexture:"",mouthIdx:NaN,weaponRight:"",weaponLeft:""},material:Object(r.a)({type:"Basic"},h),scene:{rotateSpeed:0,background:"#cccccc",initCameraPosition:null},lights:y,animation:{code:"",timeScale:1},chainMaker:{chain:null},app:{sidebarContent:"settings",showSettings:!0,showAniControl:!0,antiAliasing:!1,pixelRatio:1,viewerType:""},outline:{enable:!0,size:5,color:"#000000",opacity:1},capture:{enable:!1,supportedCodecs:[],codec:"",format:""},export:{enable:!1,format:"stl",binary:!0},ascii:{enable:!1,charSet:_[1],invert:!1,color:"#00ff00",bgColor:"#000000"}},O={id:{group:"model",key:"id",type:"string"},modName:{group:"model",key:"modName",type:"string"},tx:{group:"model",key:"texture",type:"string"},et:{group:"model",key:"eyeTexture",type:"string"},ei:{group:"model",key:"eyeIdx",type:"int"},mt:{group:"model",key:"mouthTexture",type:"string"},mi:{group:"model",key:"mouthIdx",type:"int"},wr:{group:"model",key:"weaponRight",type:"string"},wl:{group:"model",key:"weaponLeft",type:"string"},bg:{group:"scene",key:"background",type:"bg"},cam:{group:"scene",key:"initCameraPosition",type:"xyz"},showAC:{group:"app",key:"showAniControl",type:"boolean"},showSettings:{group:"app",key:"showSettings",type:"boolean"},showOutline:{group:"outline",key:"enable",type:"boolean"},AA:{group:"app",key:"antiAliasing",type:"boolean"},rot:{group:"scene",key:"rotateSpeed",type:"float"},ts:{group:"animation",key:"timeScale",type:"float"},cc:{group:"animation",key:"code",type:"string"}},x=["id","modName","bg","cam","showOutline","AA","rot"],w=["ts","cc"],k={adv:["et","ei","mt","mi","wr","wl"].concat(x,w),dragon:["ei","mi"].concat(x,w),ani:[].concat(x,w),basic:[].concat(x)},S=["Basic","Toon","Lambert","Phong","Standard","Matcap"],M=["Basic","Matcap"],C=["transparent","opacity","wireframe","useTexture","color"],E={Basic:[],Toon:["emissive","emissiveIntensity","gradientMap"],Lambert:["emissive","emissiveIntensity"],Phong:["emissive","emissiveIntensity","specular","shininess","flatShading"],Standard:["emissive","emissiveIntensity","metalness","roughness","flatShading"],Matcap:["flatShading","matcap"]},I={c110300_01:"ec110300_01"},N=new Set(["c100007_01","c100007_05","c100007_09","c100034_01","c100036_01","c100037_01","c100041_01"]),P={green:"#00ff00",black:"#000000",grey:"#cccccc",white:"#ffffff"},T={angle:45,far:100,near:.01},A={ts:{key:"timeScale",defaultValue:1},r:{key:"repetitions",defaultValue:1}},B=["video/mp4;codecs=h264","video/webm;codecs=h264","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"]},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return f})),n.d(t,"h",(function(){return d})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"i",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"n",(function(){return x})),n.d(t,"m",(function(){return w}));var r=n(11),a=n(34),c=n(94),i=n(13),u=n(10),o=function(e){var t=Object(a.a)(e),n=t[0],r=t.slice(1);return"".concat(n.toUpperCase()).concat(r.join(""))},s=function(e){return e.match(/_[0-9]{2}/)?e:"".concat(e,"_01")},f=function(e,t){var n=Object.entries(e).filter((function(e){var n=Object(r.a)(e,2),a=n[0];n[1];return t.includes(a)}));return Object.fromEntries(n)},d=function(e,t){return Object.entries(t).filter((function(t){var n=Object(r.a)(t,2),a=n[0];return n[1]!==e[a]}))},l=function(e){return e.startsWith("w302")},p=function(e){return e.startsWith("c")&&!e.endsWith("_h")&&!i.p.has(e)},m=function(e){return e.startsWith("d")||"smith"===e},b=function(e){return m(e)?"dragon":e.startsWith("h")||i.p.has(e)?"ani":p(e)?"adv":"basic"},v=function(e){return m(e)?1:2},h=function(e,t){Array.isArray(e)?e.forEach((function(e){return t(e)})):t(e)},j=function(e){return e.map(y).join(">")},y=function(e){var t=e.aniName,n=e.faceChanges,r=_(e),a=g(n);return"".concat(t).concat(r).concat(a)},_=function(e){var t=[];return Object.keys(i.j).forEach((function(n){var r=i.j[n],a=r.key,c=r.defaultValue;e[a]!==c&&t.push("&".concat(n,"=").concat(e[a]))})),t.join("")},g=function(e){if(!e)return"";var t=[];return e.forEach((function(e){var n=e.time,r=e.eyeIdx,a=e.mouthIdx;n&&(r&&t.push("&e-".concat(n,"=").concat(r)),a&&t.push("&m-".concat(n,"=").concat(a)))})),t.join("")},O=function(e){return Object.entries(e).map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return[n,Object.keys(a).filter((function(e){return a[e]}))]})).filter((function(e){return Object(r.a)(e,2)[1].length}))},x=function(e,t){return e.filter((function(e){return t.every((function(t){var n=Object(r.a)(t,2),a=n[0];return n[1].includes(e[a])}))}))},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(e){var r={maxWidth:"13.5rem"};return e.map((function(e){var a=e.name,i=e.code;return Object(u.jsx)(c.a,{variant:"contained","data-value":i,"data-name":"".concat(n?"".concat(n," "):"").concat(a),onClick:t,style:r,children:a},a)}))}}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return m}));var r=n(11),a=n(12),c=n(1),i=n(9),u=n(13),o=n(18),s=function(e,t){var n=t.type,r=t.key,c=t.value;switch(n){case"toggle":var s=e[r][c];return Object(a.a)(Object(a.a)({},e),{},Object(i.a)({},r,Object(a.a)(Object(a.a)({},e[r]),{},Object(i.a)({},c,!s))));case"reset":var f=u.o[r],d=c?Object(o.d)(f,c):Object(a.a)({},f);return Object(a.a)(Object(a.a)({},e),{},Object(i.a)({},r,Object(a.a)(Object(a.a)({},e[r]),d)));case"update":return Object(a.a)(Object(a.a)({},e),{},Object(i.a)({},r,Object(a.a)(Object(a.a)({},e[r]),c)));case"overwrite":return Object(a.a)(Object(a.a)({},e),{},Object(i.a)({},r,c));default:return e}},f=n(10),d=Object(c.createContext)(null),l=Object(c.createContext)(null),p={};function m(e){var t=Object(c.useReducer)(s,p),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(f.jsx)(d.Provider,{value:a,children:Object(f.jsx)(l.Provider,{value:i,children:e.children})})}Object.keys(u.o).forEach((function(e){return p[e]=Object(a.a)({},u.o[e])})),p.lights=u.o.lights.map((function(e){return Object(a.a)({},e)}))},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return H}));var r=n(12),a=n(32),c=n(61),i=n(16),u=n(8),o=n.n(u),s=n(15),f=n(11),d=n(1),l=n(72),p=n(84),m=n.n(p),b=n(137),v=n(136),h=Object(v.a)((function(e){return{root:{display:"block",width:"100vw",height:"100vh"},content:{width:"100vw",height:"100vh",padding:0},openSidebarButton:{position:"absolute",top:0,left:0,margin:"2rem",opacity:"0.5",borderRadius:"0.25rem",transition:"0.5s all ease-in-out",backgroundColor:"#cccccc",cursor:"pointer","&:hover":{opacity:"1"}},loadingMsg:{position:"absolute",zIndex:9999,width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:"x-large",backgroundColor:"rgba(0,0,0,0.5)"}}})),j=(n(107),n(76)),y=n(67),_={c:[0,.5,0],d:[0,1.5,0],w:[0,0,0],b:[0,1,0],e:[0,.5,0],h:[0,1,0],o:[0,0,0],r:[0,3,0],d200017_01:[0,1,0],d210001_01:[0,1,0],d210002_01:[0,1,0],d210003_01:[0,1,0],d210004_01:[0,1,0],d210005_01:[0,1,0],d210020_01:[0,2.5,0],d210038_01:[0,1,0],d210039_01:[0,1,0],d210040_01:[0,1,0],d210041_01:[0,1,0],d210042_01:[0,1,0],d210048_01:[0,2.5,0],d210052_01:[0,2.5,0],d210054_01:[0,2,0],d210072_01:[0,1,0],d210076_01:[0,2.5,0],d210077_01:[0,2.5,0],d210078_01:[0,6,0],d210079_01:[0,2.5,0],d210081_01:[0,2.5,0],d210082_01:[0,2,0],d210087_01:[0,2.5,0],d210093_01:[0,1,0],d210094_01:[0,2,0],d210095_01:[0,1,0],d210102_01:[0,2.5,0],d210103_01:[0,2.5,0],d210104_01:[0,1,0],d210109_01:[0,1,0],d210111_01:[0,.5,0],d210112_01:[0,2.5,0],d210113_01:[0,1,0],d210114_01:[0,6,0],d210115_01:[0,2,0],d210116_01:[0,2,0],d210117_01:[0,2,0],d210118_01:[0,1,0],d210123_01:[0,3,0],d210125_01:[0,2,0],d210126_01:[0,2.5,0],d210127_01:[0,.5,0],d210128_01:[0,.5,0],d210133_01:[0,.5,0],d210146_01:[0,.5,0],d210136_01:[0,6,0],h0010001_02:[0,3,0],r0070401:[0,20,0],r0070501:[0,20,0],r0080401:[0,2,0],smith:[0,.5,0]},g=n(10),O=Object(d.lazy)((function(){return Promise.all([n.e(2),n.e(51)]).then(n.bind(null,477))})),x={basic:Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(67)]).then(n.bind(null,237))})),ani:Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,240))})),adv:Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(6),n.e(66)]).then(n.bind(null,478))})),dragon:Object(d.lazy)((function(){return Promise.all([n.e(3),n.e(6),n.e(68)]).then(n.bind(null,479))}))};var w=function(e){var t=e.viewport,n=Object(d.useContext)(a.b),r=n.model.id,c=n.scene,i=c.rotateSpeed,u=c.background,o=c.initCameraPosition,s=n.app,f=s.showAniControl,l=s.antiAliasing,p=s.pixelRatio,m=s.viewerType,b=Object(d.useContext)(a.a),v=Object(d.useCallback)((function(e,t){return b({type:"toggle",key:e,value:t})}),[b]),h=Object(d.useCallback)((function(){return v("capture","enable")}),[v]),w=Object(d.useCallback)((function(){return v("export","enable")}),[v]),k=r[0],S=y.default[r]||y.default[k],M=o?o.map((function(e,t){return isNaN(e)?S[t]:e})):S,C=_[r]||_[k],E=x[m];return Object(g.jsxs)("div",{className:"Display",children:[f&&Object(g.jsx)("div",{className:"Display-AniControl",style:{color:Object(j.a)(u)},children:Object(g.jsx)(d.Suspense,{fallback:null,children:Object(g.jsx)(O,{value:n.animation.timeScale})})}),Object(g.jsx)(d.Suspense,{fallback:null,children:Object(g.jsx)(E,{setLoadingMsg:e.setLoadingMsg,capture:n.capture,onCaptureFinish:h,export:n.export,onExportFinish:w,model:n.model,material:n.material,outline:n.outline,animation:n.animation,lights:n.lights,ascii:n.ascii,antiAliasing:l,pixelRatio:p,background:u,viewport:t,cameraPosition:M,controlsPosition:C,rotateSpeed:i})})]})},k=n(18),S=n(55),M=n(28),C=n(34),E=n(13),I=n(49),N=n(44),P=function(e){return Boolean("true"===e)},T=function(e){var t=e.split(","),n=Object(f.a)(t,3);return[n[0],n[1],n[2]].map(parseFloat)},A=function(e){switch(e){case"transparent":return e;case"camera":return"#cccccc";default:return"#".concat(e)}},B=function(e,t){return"string"===t?e:{bg:A,xyz:T,float:parseFloat,int:parseInt,boolean:P}[t](e)},z=function(e){return e.split("/").reduce((function(e,t){return[].concat(Object(M.a)(e),Object(M.a)(function(e){if(!e)return[];var t=e.split("="),n=Object(C.a)(t),r=n[0],a=n.slice(1);if(!E.q[r]||!a[0])return[];var c=a.join("="),i=E.q[r].type;return[[r,B(c,i)]]}(t)))}),[])},L=function(e,t){return e.reduce((function(e,n){var r=Object(f.a)(n,2),a=r[0],c=r[1],i=E.q[a],u=i.group,o=i.key;return u!==t?e:[].concat(Object(M.a)(e),[[o,c]])}),[])},D=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L(t,"model"),(c=Object.fromEntries(a)).id=null!==(r=c.id)&&void 0!==r?r:E.d,i=c.id,["mouth","eye"].forEach((function(e){var t,n;c["".concat(e,"Texture")]=null!==(t=c["".concat(e,"Texture")])&&void 0!==t?t:i,c["".concat(e,"Idx")]=null!==(n=c["".concat(e,"Idx")])&&void 0!==n?n:Object(k.f)(i)})),n({type:"update",key:"model",value:c}),n({type:"update",key:"app",value:{viewerType:Object(k.i)(i)}}),e.next=9,W(c,n);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,e.next=3,Object(N.a)(r);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return");case 6:if(c={},!t.modName){e.next=15;break}return e.next=10,Object(N.b)(r,t.modName);case 10:i=e.sent,c.mod=i.code,c.modName=i.name,e.next=17;break;case 15:c.mod=a.code,c.modName=a.name;case 17:n({type:"update",key:"model",value:c});case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,a,c,i,u,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=L(t,"animation"),i=Object.fromEntries(c),u=(null===(r=t.find((function(e){return"id"===Object(f.a)(e,1)[0]})))||void 0===r?void 0:r[1])||E.d,null===(a=i.code)||void 0===a){e.next=7;break}e.t0=a,e.next=10;break;case 7:return e.next=9,Object(S.a)(u);case 9:e.t0=e.sent;case 10:i.code=e.t0,n({type:"update",key:"animation",value:i}),s=i.code,n({type:"update",key:"chainMaker",value:{chain:Object(I.k)(s,"init")}});case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(e,t,n){var r=L(e,n);t({type:"update",key:n,value:Object.fromEntries(r)})},q=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,a,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=z(t),(a=new Set(r.map((function(e){var t=Object(f.a)(e,1)[0];return E.q[t].group})))).delete("model"),a.delete("animation"),e.next=6,D(r,n);case 6:return c=Object(M.a)(a),i=c.map((function(e){return R(r,n,e)})),e.next=10,Promise.all([F(r,n)].concat(Object(M.a)(i)));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=Object(d.lazy)((function(){return Promise.all([n.e(11),n.e(49),n.e(20)]).then(n.bind(null,508))})),G=Object(d.lazy)((function(){return Promise.all([n.e(11),n.e(15)]).then(n.bind(null,517))}));var U=function(e){var t=e.location,n=h(),r=Object(l.a)(!0),c=Object(f.a)(r,2),i=c[0],u=c[1],p=Object(d.useState)("Loading..."),v=Object(f.a)(p,2),j=v[0],y=v[1],_=Object(d.useState)(!1),O=Object(f.a)(_,2),x=O[0],M=O[1],C=Object(d.useState)({width:window.innerWidth,height:window.innerHeight}),E=Object(f.a)(C,2),P=E[0],T=E[1],A=Object(d.useState)(""),B=Object(f.a)(A,2),z=B[0],L=B[1],D=Object(d.useRef)(),W=Object(d.useContext)(a.b),F=W.model,R=W.app,U=R.showSettings,H=R.viewerType,X=Object(d.useContext)(a.a),Y=Object(d.useRef)(),V=Object(d.useRef)(""),$=function(){var e=Y.current.clientWidth,t=Y.current.clientHeight;T({width:e,height:t})},Q=Object(d.useCallback)((function(e){return function(t){return X({type:"update",key:e,value:t})}}),[X]);return Object(d.useEffect)((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y("Loading..."),e.next=3,q(t.pathname,X);case 3:y(""),M(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.pathname,X]),Object(d.useEffect)((function(){var e=F.id;if(V.current){if(e!==V.current){var t=Object(k.i)(e),n=t!==H;Q("app")({viewerType:t});var r="adv"===t&&n;r&&Q("model")({eyeIdx:2,mouthIdx:2}),n&&"dragon"===t&&Q("model")({eyeIdx:1,mouthIdx:1});var a=["dragon","ani"].includes(t)||r,c=function(){var t=Object(s.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.a)(e);case 2:n=t.sent,Q("animation")({code:n}),Q("chainMaker")({chain:Object(I.k)(n,"init")});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=Object(s.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.a)(e);case 2:(n=t.sent)&&Q("model")({mod:null===n||void 0===n?void 0:n.code,modName:null===n||void 0===n?void 0:n.name});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Promise.all([i(),a&&c()]),V.current=e}}else V.current=e}),[F,Q,H]),Object(d.useEffect)((function(){return window.addEventListener("resize",$),function(){window.removeEventListener("resize",$)}}),[]),Object(g.jsxs)(g.Fragment,{children:[j&&Object(g.jsx)("div",{className:n.loadingMsg,children:j}),x&&Object(g.jsxs)("div",{className:n.root,children:[U&&Object(g.jsxs)(d.Suspense,{fallback:null,children:[Object(g.jsx)(b.a,{}),Object(g.jsx)("button",{onClick:u,className:n.openSidebarButton,children:Object(g.jsx)(m.a,{})}),Object(g.jsx)(J,{toggleSidebar:u,open:i,setDock:function(e,t){L(e),D.current=t}})]}),Object(g.jsx)("main",{ref:Y,className:n.content,children:Object(g.jsx)(w,{setLoadingMsg:y,viewport:P})}),z&&Object(g.jsx)(d.Suspense,{fallback:null,children:Object(g.jsx)(G,{mode:z,handleSelect:D.current,close:function(){return L("")}})})]})]})};n(109);var H="/dl-model";t.a=function(){return Object(g.jsx)(a.c,{children:Object(g.jsx)(c.b,{children:Object(g.jsx)(i.a,{render:function(e){return Object(g.jsx)(U,Object(r.a)({},e))}})})})}},43:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));t.a={c110385_01:[.05,-.08],c100003_10:[.05,-.08],c110386_01:[.043,.05],c110387_01:[.05,-.08],c100031_03:[.05,-.08],c100007_07:[.05,-.08],c110384_01:[.05,-.08],c110383_01:[.05,-.08],c110382_01:[.05,-.08],c110381_01:[.05,-.08],c110342_03:[.05,-.08],c110377_01:[.043,-.08],c110378_01:[.043,-.08],c110379_01:[.075,-.08],c110380_01:[.043,-.2],c100015_05:[.05,-.08],c100006_11:[.043,-.0625],c110376_01:[.043,-.0625],c110375_01:[.043,-.0625],c110374_01:[.043,-.0625],c110307_02:[.043,0],c110252_02:[.043,-.0625],c110296_02:[.043,-.0625],c100004_17:[.043,-.0625],c110371_01:[.043,-.0625],c110350_02:[.043,-.0625],c110340_02:[.043,-.0625],c110018_02:[.043,-.0625],c110370_01:[.043,-.0625],c100015_04:[.05,-.08],c110342_01:[0,-.02],c110267_01:[.08,-.03],c110050_02:[.07,.13],c110291_01:[.07,.14],c110354_01:[.07,.01],c110345_01:[.08,.15],c110266_01:[.01,.03],c110365_01:[.043,-.0625],c110346_01:[.07,.08],c110366_01:[.043,-.0625],c110299_02:[.07,.08],c110360_01:[.07,.14],c110307_01:[.08,-.03],c110322_01:[.043,.08],c110356_01:[.07,.08],c110300_01:[.07,-.1],c110344_01:[.07,-.02],c110053_03:[.043,-.0625],c110368_01:[.043,-.0625],c110367_01:[.043,-.0625],c110003_02:[.043,-.0625],c110270_02:[.043,-.0625],c110341_03:[.043,-.0625]};var r={face1:[2,1],face2:[0,0],face3:[1,0],face4:[2,0],face5:[3,0],face6:[0,-1],face7:[1,-1],face8:[2,-1],face9:[3,-1]}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(8),a=n.n(r),c=n(15),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(17).then(n.bind(null,93));case 2:return c=e.sent,i=c.default,e.abrupt("return",null===(r=i[t])||void 0===r?void 0:r[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var c,i,u,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(17).then(n.bind(null,93));case 2:return i=e.sent,u=i.default,o=null===(c=u[t])||void 0===c?void 0:c.find((function(e){return e.name.replace(" ","")===r})),e.abrupt("return",o||{name:"",code:""});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},46:function(e,t,n){"use strict";t.a=[{name:"Black Stone",path:"matcap_black_stone.jpg"},{name:"Chrome 1",path:"matcap_chrome_1.jpg"},{name:"Chrome 2",path:"matcap_chrome_2.jpg"},{name:"Brown Clay",path:"matcap_clay_brown.jpg"},{name:"Dark Brown Clay",path:"matcap_clay_dark_brown.jpg"},{name:"Flesh Clay",path:"matcap_clay_flesh_6.jpg"},{name:"Gray Clay",path:"matcap_clay_gray.jpg"},{name:"Metal Putty",path:"matcap_metal_putty.jpg"},{name:"Obsidian",path:"matcap_obsidian.jpg"},{name:"Pearl",path:"matcap_pearl.jpg"},{name:"Yellow Plastic",path:"matcap_plastic_yellow.jpg"},{name:"Sci-fi Plastic",path:"matcap_scifi_plastic.jpg"},{name:"Rim Lit",path:"matcap_rim_lit.jpg"},{name:"Slick Mud",path:"matcap_slick_mud.jpg"},{name:"Shiny Metal",path:"metal_shiny.jpg"}]},49:function(e,t,n){"use strict";n.d(t,"x",(function(){return y})),n.d(t,"w",(function(){return x})),n.d(t,"m",(function(){return w})),n.d(t,"u",(function(){return M})),n.d(t,"b",(function(){return E})),n.d(t,"q",(function(){return I})),n.d(t,"v",(function(){return N})),n.d(t,"r",(function(){return P})),n.d(t,"s",(function(){return T})),n.d(t,"z",(function(){return A})),n.d(t,"p",(function(){return B})),n.d(t,"l",(function(){return L})),n.d(t,"o",(function(){return D})),n.d(t,"h",(function(){return J})),n.d(t,"j",(function(){return U})),n.d(t,"i",(function(){return H})),n.d(t,"c",(function(){return Y})),n.d(t,"f",(function(){return V})),n.d(t,"d",(function(){return Q})),n.d(t,"g",(function(){return Z})),n.d(t,"a",(function(){return ee})),n.d(t,"t",(function(){return ne})),n.d(t,"k",(function(){return re})),n.d(t,"B",(function(){return ce})),n.d(t,"n",(function(){return ie})),n.d(t,"A",(function(){return ue})),n.d(t,"e",(function(){return oe})),n.d(t,"y",(function(){return se}));var r=n(63),a=n(12),c=n(34),i=n(11),u=n(8),o=n.n(u),s=n(15),f=n(28),d=n(3),l=n(38),p=n(62),m=n(43),b=n(46),v=n(85),h=n(18),j=n(13),y=function(e){return e&&new Promise((function(t){(new v.a).load(e,t)}))},_=function(e){return e&&new Promise((function(t){(new d.TextureLoader).load(e,t)}))},g=function(e){var t=function(e){var t=b.a.find((function(t){return t.name===e}));return(null===t||void 0===t?void 0:t.path)?"".concat(j.w,"/").concat(t.path):null}(e);return t?_(t):null},O=function(e){var t,n=e.aniName,r=(t=n,"".concat(l.b,"/animations/").concat(t,".json"));return new Promise((function(e){return fetch(r).then((function(e){return e.json()})).then((function(e){return d.AnimationClip.parse(e)})).then(e)}))},x=function(e){return Promise.all(e.map(O))},w=function(){var e=new d.PlaneBufferGeometry(.1,.1);e.rotateX(Math.PI/2);var t=new d.MeshBasicMaterial;return t.visible=!1,new d.Mesh(e,t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)return[];var n=[];return e.traverse((function(e){e.isMesh&&(t||"outline"!==e.name)&&n.unshift(e)})),n},S=function(e){return e?k(e).flatMap((function(e){return e.material})):[]},M=function(e){return"".concat(l.b,"/fbx/").concat(e,"/").concat(e,".fbx")},C=function(e){return"".concat(l.b,"/fbx/").concat(e,"/").concat(e,".png")},E=function(e){if(!e)return null;var t=e.endsWith("b"),n=e.substring(0,e.length-1);return{modelPath:M(n),texturePath:C(n),flipped:t}},I=function(e){if(e){var t=new Set,n=function(e){return e&&function(e){return!t.has(e.uuid)}(e)},r=function(e){n(e)&&function(e){t.add(e.uuid),e.dispose()}(e)};k(e,!0).forEach((function(e){!function(e){Object(h.a)(e.material,(function(e){r(e.map),r(e.userData.backupMap),r(e)}))}(e),r(e.geometry)}))}},N=function(e){return[].concat(Object(f.a)(j.t),Object(f.a)(j.u[e]))},P=function(e){var t=[],n=/mEye_[0-9]/m;return e.traverse((function(e){if(e.isMesh){var r=e.name;n.test(r)&&t.push(e)}})),t},T=function(e){var t=[],n=/mMouth_[0-9]/m;return e.traverse((function(e){if(e.isMesh){var r=e.name;n.test(r)&&t.push(e)}})),t},A=function(e){k(e).forEach((function(e){return e.visible=!e.name.includes("Eff")}))},B=function(e){e.traverse((function(e){e.isMesh&&(e.frustumCulled=!1)}))},z=function(e,t){var n="Mesh".concat(e,"Material");return new d[n](t)},L=function(e,t){var n=t.materialType,r=t.texturePath,a=void 0===r?"":r,c=t.forced,i=void 0!==c&&c;e&&k(e).forEach((function(e){var t=[e.material].flat(),r=Array.isArray(e.material);if(!i&&!a){var c="isMesh".concat(n,"Material");if(!t.some((function(e){return!e[c]})))return}t.forEach((function(c,i){var u=a?(new d.TextureLoader).load(a):t[i].map;a&&(u.encoding=d.sRGBEncoding);var o,s,f,l,p=z(n,{map:u,skinning:!0});(p.name=c.name,c.userData.backupMap&&(p.userData.backupMap=c.userData.backupMap),a)&&(null===(o=c.map)||void 0===o||null===(s=o.dispose)||void 0===s||s.call(o),null===(f=c.userData.backupMap)||void 0===f||null===(l=f.dispose)||void 0===l||l.call(f));c.dispose(),r?e.material[i]=p:e.material=p}))}))},D=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=[],e.next=5,q(n);case 5:return a=e.sent,c=["Eff","Extension"],k(t).forEach((function(e){var t=e.name;if(!c.some((function(e){return t.includes(e)}))){var i=e.clone();G(i,a),i.visible=n.enable,i.name="outline",e.isSkinnedMesh&&i.bind(e.skeleton,e.bindMatrix),e.add(i),r.push(i)}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){fetch(t).then((function(e){return e.text()})).then(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=["".concat(t,"/").concat(n,".vert"),"".concat(t,"/").concat(n,".frag")],e.abrupt("return",Promise.all(r.map(W)));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat("/dl-model","/shaders/").concat(t),e.abrupt("return",F(n,t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.a)(o.a.mark((function e(t){var n,r,a,c,u,s,f,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.size,r=t.color,a=t.opacity,c={size:{value:n},color:{value:new d.Color(r)},opacity:{value:a}},e.next=4,R("outline");case 4:return u=e.sent,s=Object(i.a)(u,2),f=s[0],l=s[1],p=new d.ShaderMaterial({skinning:!0,side:d.BackSide,transparent:!0,depthFunc:d.LessDepth,vertexShader:f,fragmentShader:l,uniforms:c}),e.abrupt("return",p);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e,t){if(e&&t){var n=e.material;t.forEach((function(t,r){switch(r){case"enable":e.visible=t;break;case"color":Object(h.a)(n,(function(e){return e.uniforms.color.value=new d.Color(t)}));break;default:Object(h.a)(n,(function(e){return e.uniforms[r].value=t}))}}))}},G=function(e,t){var n=e.material;Object(h.a)(n,(function(e){var t,n,r,a;null===(t=e.map)||void 0===t||null===(n=t.dispose)||void 0===n||n.call(t),null===(r=e.userData.backupMap)||void 0===r||null===(a=r.dispose)||void 0===a||a.call(r),e.dispose()}));var r=Array.isArray(e.material);e.material=r?new Array(e.material.length).fill(t):t},U=function(e,t){var n={x:0,y:0};if(e!==t){var r=m.a[t]||[0,0],a=Object(i.a)(r,2),c=a[0],u=a[1],o=m.a[e]||[0,0],s=Object(i.a)(o,2),f=s[0],d=s[1];n.x=f-c,n.y=d-u}return[n.x,n.y]},H=function(e,t){var n={x:0,y:0};if(e!==t){var r=Object(i.a)(m.b["face".concat(t)],2),a=r[0],c=r[1],u=Object(i.a)(m.b["face".concat(e)],2),o=u[0],s=u[1];n.x=o-a,n.y=s-c}return[n.x,n.y]},X=function(e){return function(t,n){var r=Object(i.a)(n,2),a=r[0],c=r[1];t.traverse((function(t){var n;if(t.isMesh){var r=null===(n=t.geometry.groups)||void 0===n?void 0:n.find((function(n){var r;return(null===(r=t.material[n.materialIndex])||void 0===r?void 0:r.name)==="mt".concat(e,"CH")}));if(r){for(var i=r.start,u=i+r.count,o=t.geometry.attributes.uv,s=i;s<u;s++){var f=o.getX(s)+.25*a,d=o.getY(s)+.25*c;o.setXY(s,f,d)}o.needsUpdate=!0}}}))}},Y=X("Eye"),V=X("Mouth"),$=function(e){return function(t,n){var r=n.materialType,a=n.textureId,c=C(a),i=(new d.TextureLoader).load(c);i.encoding=d.sRGBEncoding;var u=z(r,{map:i,skinning:!0});t.traverse((function(t){if("mBodyAll"===t.name&&3===t.geometry.groups.length){var n=t.geometry.groups.find((function(n){return t.material[n.materialIndex].name==="mt".concat(e,"CH")}));if(n){var r=n.materialIndex,a=t.material[r];u.name=a.name,t.material[r]=u}}}))}},Q=$("Eye"),Z=$("Mouth"),K=function(e){var t=e.split("&"),n=Object(c.a)(t),r=n[0],u=function(e){var t=[],n=1,r=1;return e.forEach((function(e){var a=e.split("="),c=Object(i.a)(a,2),u=c[0],o=c[1];if("ts"===u&&(n=parseFloat(o)),"r"===u&&(r=parseInt(o)),u.includes("-")){var s=u.split("-"),f=Object(i.a)(s,2),d=f[0],l=f[1],p={time:parseFloat(l)};p["".concat("e"===d?"eye":"mouth","Idx")]=o,t.push(p)}})),{timeScale:n,repetitions:r,faceChanges:te(t)}}(n.slice(1));return Object(a.a)({aniName:r},u)},ee=function(e){return e?e.split(">").map(K):[]},te=function(e){if(!e.length)return e;var t=e.sort((function(e,t){return e.time-t.time})),n=new Set(e.map((function(e){return e.time})));if(e.length===n.size)return t.forEach((function(e){e.id=Object(p.a)()})),t;var r=[];return n.forEach((function(e){var n={time:e,id:Object(p.a)(),eyeIdx:NaN,mouthIdx:NaN};t.filter((function(t){return t.time===e})).forEach((function(e){return n=Object.assign(n,e)})),r.push(n)})),r},ne=function(e,t){if(!e)return[];if(1===t)return Object(f.a)(e);return new Array(t).fill().map((function(e,t){return 100*t})).flatMap((function(t){return e.map((function(e){var n=e.time,c=(e.id,Object(r.a)(e,["time","id"]));return Object(a.a)(Object(a.a)({},c),{},{time:n+t})}))}))},re=function(e,t){var n=ee(e),r=n.length;return n.map((function(e,n){var a=e.aniName,c=e.timeScale,i=e.repetitions,u=e.faceChanges;return{name:t.concat(r>1?"#".concat(n+1):""),id:Object(p.a)(),aniName:a,timeScale:c,repetitions:i,faceChanges:u}}))},ae=function(e,t){var n,r=Object(i.a)(t,2),a=r[0],c=r[1],u=j.x.includes(a);switch(a){case"gradientMap":var o=parseInt(c),s=o?function(e){var t=new Uint8Array(e).map((function(t,n){return 256*n/e})),n=new d.DataTexture(t,e,1,d.LuminanceFormat);return n.minFilter=d.NearestFilter,n.magFilter=d.NearestFilter,n.generateMipmaps=!1,n}(o):null;n=function(e){return e.gradientMap=s};break;case"useTexture":n=c?function(e){e.map=e.userData.backupMap,e.userData.backupMap=null}:function(e){e.map&&(e.userData.backupMap=e.map),e.map=null};break;case"matcap":var f=g(c);n=function(e){f.then((function(t){e.matcap=t,e.needsUpdate=!0}))};break;default:var l=j.s.includes(a);n=function(e){return e[a]=l?new d.Color(c):c}}e.forEach((function(e){n(e),e.needsUpdate=u}))},ce=function(e,t){var n=t.prevParams,r=void 0===n?{}:n,a=t.params,c=S(e);Object(h.h)(r,a).forEach((function(e){return ae(c,e)}))},ie=function(e){for(var t=e.type,n=e.color,a=e.intensity,c=Object(r.a)(e,["type","color","intensity"]),u="".concat(t,"Light"),o=new d[u](n,a),s=0,l=Object.entries(c);s<l.length;s++){var p=Object(i.a)(l[s],2),m=p[0],b=p[1];if("position"!==m)o[m]=b;else{var v,h=b.map((function(e){return e||0}));(v=o.position).set.apply(v,Object(f.a)(h))}}return o},ue=function(){var e=Object(s.a)(o.a.mark((function e(t,n){var r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.oldTexture,a=n.texturePath,e.next=3,_(a);case 3:(c=e.sent).encoding=d.sRGBEncoding,S(t).forEach((function(e){var t,n,a,i=null===(t=e.map)||void 0===t?void 0:t.name;(null===i||void 0===i?void 0:i.includes(r))&&(null===(n=e.map)||void 0===n||null===(a=n.dispose)||void 0===a||a.call(n),e.map=c)}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),oe=function(e,t){if(t){var n=k(e),r=function(e){var t={};return e.split(";").map((function(e){return e.trim()})).forEach((function(e){var n=e.split(" "),r=Object(c.a)(n),a=r[0],i=r.slice(1).join("").split(",");t[a]=i})),t}(t),a=r.show,i=r.hide;n.forEach((function(e){(null===i||void 0===i?void 0:i.includes(e.name))&&(e.visible=!1),(null===a||void 0===a?void 0:a.includes(e.name))&&(e.visible=!0)}))}},se=function(e,t){Object(h.h)(e,t).forEach((function(t){var n=Object(i.a)(t,2),r=n[0],a=n[1],c=e[r],u=Object.keys(a);0===u.length||"string"===typeof a?console.log("".concat(r,": ").concat(JSON.stringify(c)," to ").concat(JSON.stringify(a))):u.forEach((function(e){c[e]!==a[e]&&console.log("".concat(r,".").concat(e,": ").concat(JSON.stringify(c[e])," to ").concat(JSON.stringify(a[e])))}))}))}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(8),a=n.n(r),c=n(15),i=n(18),u=n(13),o=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(i.l)(t)){e.next=2;break}return e.abrupt("return",s(t));case 2:if(!t.startsWith("h")){e.next=4;break}return e.abrupt("return",f(t));case 4:if(!Object(i.k)(t)){e.next=6;break}return e.abrupt("return",u.b);case 6:return e.abrupt("return","");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8).then(n.bind(null,124));case 2:return c=e.sent,i=c.default,e.abrupt("return",null===(r=i[t])||void 0===r?void 0:r[0].code);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(9).then(n.bind(null,125));case 2:return c=e.sent,i=c.default,e.abrupt("return",null===(r=i[t])||void 0===r?void 0:r[0].code);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},67:function(e,t,n){"use strict";n.r(t),n.d(t,"cameraPositions",(function(){return r}));var r={c:[0,.5,1.5],d:[0,1.5,6],w:[2,0,0],b:[1,.5,6],e:[1,1,4],h:[0,1,4],o:[0,.5,8],r:[3,3,20],c100034_01:[0,.5,1.75],c110379_01:[0,.75,2],d200017_01:[0,1,4],d210001_01:[0,1,4],d210002_01:[0,1,4],d210003_01:[0,1,4],d210004_01:[0,1,4],d210005_01:[0,1,4],d210020_01:[0,2,6],d210038_01:[0,1,4],d210039_01:[0,1,4],d210040_01:[0,1,4],d210041_01:[0,1,4],d210042_01:[0,1,4],d210048_01:[0,2,8],d210052_01:[0,2,8],d210054_01:[0,1.5,6],d210072_01:[0,1,4],d210076_01:[0,2,6],d210077_01:[0,2,6],d210078_01:[0,6,20],d210079_01:[0,2,6],d210081_01:[0,2,6],d210082_01:[0,1.5,4],d210087_01:[0,2,6],d210093_01:[0,1,3],d210094_01:[0,1.5,6],d210095_01:[0,1,4],d210102_01:[0,2,6],d210103_01:[0,4,8],d210104_01:[0,1,4],d210109_01:[0,1,4],d210111_01:[0,.5,1.5],d210112_01:[0,4,8],d210113_01:[0,1,4],d210114_01:[0,6,20],d210115_01:[0,2,4],d210116_01:[0,2,6],d210117_01:[0,2,6],d210118_01:[0,1,2],d210123_01:[0,3,9],d210125_01:[0,1.5,5],d210126_01:[0,2,8],d210127_01:[0,.5,1.5],d210128_01:[0,.5,1.5],d210133_01:[0,.5,1.5],d210146_01:[0,.5,1.5],d210136_01:[0,6,20],d210142_01:[0,2,4],h0010001:[6,.5,8],h0010001_02:[2,0,0],h0040101:[1,.5,4],h0080501:[0,2,5],h0090501:[0,2,5],r0070401:[30,30,100],r0070501:[30,30,100],r0080401:[1,2,5],smith:[1,1,2]};t.default=r},72:function(e,t,n){"use strict";var r=n(11),a=n(1);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(r.a)(t,2),c=n[0],i=n[1],u=Object(a.useCallback)((function(){i((function(e){return!e}))}),[i]);return[c,u]}},76:function(e,t,n){"use strict";t.a=function(e){if("camera"===e)return"#ffffff";var t,n=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(e);return(299*(t=n).r+587*t.g+114*t.b)/1e3>128?"#000000":"#ffffff"}}},[[113,23,25]]]);
//# sourceMappingURL=main.ea510065.chunk.js.map