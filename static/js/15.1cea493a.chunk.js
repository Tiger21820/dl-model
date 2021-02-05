(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[15],{133:function(e,t,a){"use strict";var o=a(83),r=a(84);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,o(a(85)).default)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=i},135:function(e,t,a){"use strict";a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return v})),a.d(t,"a",(function(){return y}));var o=a(11),r=a(57),n=a(26),i=a(156),c=a(157),l=a(158),s=a(139),d=a(149),p=a(133),u=a.n(p),b=a(137),h=a.n(b),m={dialogRoot:{margin:0,padding:0},closeButton:{position:"absolute",right:"0.25rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},dockButton:{position:"absolute",right:"2.3rem",top:"0.5rem",color:"rgba(0,0,0,0.8)"},titleRoot:{margin:0,padding:"1rem",paddingBottom:0,display:"flex",justifyContent:"center"}},g=a(9),f=Object(n.a)(m)((function(e){var t=e.children,a=e.classes,n=(e.onClose,Object(r.a)(e,["children","classes","onClose"]));return Object(g.jsx)(i.a,Object(o.a)(Object(o.a)({disableTypography:!0,className:a.dialogRoot},n),{},{children:t}))})),v=Object(n.a)(m)((function(e){var t=e.children,a=e.classes,n=e.onClose,c=e.showDockBtn,l=void 0!==c&&c,p=e.onDock,b=Object(r.a)(e,["children","classes","onClose","showDockBtn","onDock"]);return Object(g.jsxs)(i.a,Object(o.a)(Object(o.a)({disableTypography:!0,className:a.titleRoot},b),{},{children:[Object(g.jsx)(d.a,{variant:"h6",className:a.titleText,children:t}),l&&Object(g.jsx)(s.a,{"aria-label":"dock",className:a.dockButton,onClick:p,children:Object(g.jsx)(h.a,{})}),Object(g.jsx)(s.a,{"aria-label":"close",className:a.closeButton,onClick:n,children:Object(g.jsx)(u.a,{})})]}))})),y=Object(n.a)((function(e){return{root:{padding:e.spacing(2)}}}))(c.a);Object(n.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(l.a)},137:function(e,t,a){"use strict";var o=a(83),r=a(84);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),i=(0,o(a(85)).default)(n.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos");t.default=i},139:function(e,t,a){"use strict";var o=a(2),r=a(12),n=a(0),i=(a(15),a(17)),c=a(26),l=a(22),s=a(108),d=a(24),p=n.forwardRef((function(e,t){var a=e.edge,c=void 0!==a&&a,l=e.children,p=e.classes,u=e.className,b=e.color,h=void 0===b?"default":b,m=e.disabled,g=void 0!==m&&m,f=e.disableFocusRipple,v=void 0!==f&&f,y=e.size,j=void 0===y?"medium":y,O=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return n.createElement(s.a,Object(o.a)({className:Object(i.a)(p.root,u,"default"!==h&&p["color".concat(Object(d.a)(h))],g&&p.disabled,"small"===j&&p["size".concat(Object(d.a)(j))],{start:p.edgeStart,end:p.edgeEnd}[c]),centerRipple:!0,focusRipple:!v,disabled:g,ref:t},O),n.createElement("span",{className:p.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(p)},149:function(e,t,a){"use strict";var o=a(2),r=a(12),n=a(0),i=(a(15),a(17)),c=a(26),l=a(24),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=n.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,d=e.classes,p=e.className,u=e.color,b=void 0===u?"initial":u,h=e.component,m=e.display,g=void 0===m?"initial":m,f=e.gutterBottom,v=void 0!==f&&f,y=e.noWrap,j=void 0!==y&&y,O=e.paragraph,x=void 0!==O&&O,k=e.variant,C=void 0===k?"body1":k,N=e.variantMapping,w=void 0===N?s:N,R=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=h||(x?"p":w[C]||s[C])||"span";return n.createElement(S,Object(o.a)({className:Object(i.a)(d.root,p,"inherit"!==C&&d[C],"initial"!==b&&d["color".concat(Object(l.a)(b))],j&&d.noWrap,v&&d.gutterBottom,x&&d.paragraph,"inherit"!==c&&d["align".concat(Object(l.a)(c))],"initial"!==g&&d["display".concat(Object(l.a)(g))]),ref:t},R))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},150:function(e,t,a){"use strict";a(159);var o=a(9);t.a=function(e){var t=e.value,a=e.options,r=e.onClick,n=e.texts,i=void 0===n?null:n,c=function(e){e.stopPropagation();var t=e.currentTarget.dataset.value;r(t)},l=a.map((function(e,a){return Object(o.jsx)("div",{"data-value":e,onClick:c,className:"Selector-Item ".concat(t===e?"selected":""),children:i?i[a]:e},e)}));return Object(o.jsx)("div",{className:"Selector",children:l})}},156:function(e,t,a){"use strict";var o=a(2),r=a(12),n=a(0),i=(a(15),a(17)),c=a(26),l=a(149),s=n.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.disableTypography,p=void 0!==d&&d,u=Object(r.a)(e,["children","classes","className","disableTypography"]);return n.createElement("div",Object(o.a)({className:Object(i.a)(c.root,s),ref:t},u),p?a:n.createElement(l.a,{component:"h2",variant:"h6"},a))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},157:function(e,t,a){"use strict";var o=a(2),r=a(12),n=a(0),i=(a(15),a(17)),c=a(26),l=n.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,d=Object(r.a)(e,["classes","className","dividers"]);return n.createElement("div",Object(o.a)({className:Object(i.a)(a.root,c,s&&a.dividers),ref:t},d))}));t.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},158:function(e,t,a){"use strict";var o=a(2),r=a(12),n=a(0),i=(a(15),a(17)),c=a(26),l=n.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,l=e.classes,s=e.className,d=Object(r.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(o.a)({className:Object(i.a)(l.root,s,!c&&l.spacing),ref:t},d))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)},159:function(e,t,a){},197:function(e,t,a){"use strict";t.a=[{format:"stl",name:"STL",options:["binary"]}]},267:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var o=a(0),r=a(30),n=a(135),i=a(150),c=a(197),l=a(9);var s=function(e){var t=e.value,a=e.onClick,o=c.a.map((function(e){return e.format})),r=c.a.map((function(e){return e.name}));return Object(l.jsx)(i.a,{value:t,options:o,texts:r,onClick:a})},d=a(89);a(299);var p=function(e){var t=e.close,a=Object(o.useContext)(r.b).export,c=Object(o.useContext)(r.a),p=function(e){return c({type:"update",key:"export",value:e})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(n.c,{children:Object(l.jsx)(n.b,{onClose:t,children:"Export (Experiment)"})}),Object(l.jsxs)(n.a,{dividers:!0,children:[Object(l.jsxs)("div",{className:"Export-options",children:[Object(l.jsx)("div",{children:"Format"}),Object(l.jsx)(s,{value:a.format,onClick:function(e){return p({format:e})}}),Object(l.jsx)("div",{children:"Type"}),Object(l.jsx)(i.a,{value:"".concat(a.binary),onClick:function(e){return p({binary:"true"===e})},options:["true","false"],texts:["Binary","ASCII"]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"Export-btn",children:Object(l.jsx)(d.a,{variant:"contained",onClick:function(){return c({type:"toggle",key:"export",value:"enable"})},children:"Export"})})]})]})}},299:function(e,t,a){}}]);
//# sourceMappingURL=15.1cea493a.chunk.js.map