(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[51],{147:function(e,t,n){},150:function(e,t,n){"use strict";var a=n(10),i=n(70),c=n(177),s=n(148),l=n(152),r=n.n(l),d=n(151),o=n.n(d),j=(n(147),n(9));t.a=function(e){var t=e.children,n=e.openAtStart,l=void 0!==n&&n,d=e.title,u=e.titleButton,p=Object(i.a)(l),b=Object(a.a)(p,2),v=b[0],O=b[1];return Object(j.jsxs)("div",{className:"AdvancedSettingsGroup",children:[Object(j.jsxs)("div",{className:"AdvancedSettingsGroup-header",onClick:O,children:[Object(j.jsx)(s.a,{size:"small",children:v?Object(j.jsx)(o.a,{}):Object(j.jsx)(r.a,{})}),Object(j.jsx)("div",{className:"AdvancedSettingsGroup-title",children:d}),u&&Object(j.jsx)("div",{className:"AdvancedSettingsGroup-titleBtn",children:u})]}),Object(j.jsx)(c.a,{in:v,timeout:"auto",unmountOnExit:!0,children:t})]})}},484:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(92),c=n(511),s=n(206),l=n(150),r=n(32),d=(n(147),n(14)),o=n(9),j=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(63)]).then(n.bind(null,304))}));t.default=function(e){var t=e.openModal,n=e.openAtStart,u=void 0!==n&&n,p=Object(a.useContext)(r.b).material.type,b=Object(a.useContext)(r.a),v=d.g.map((function(e){return Object(o.jsx)(s.a,{value:e,children:e},e)})),O=Object(o.jsx)(i.a,{variant:"contained",onClick:function(e){e.stopPropagation();b({type:"reset",key:"material"})},children:"Reset"});return Object(o.jsx)(l.a,{title:"Material",titleButton:O,openAtStart:u,children:Object(o.jsxs)("div",{className:"AdvancedSettingsGroup-options",children:[Object(o.jsx)("div",{className:"AdvancedSettingsGroup-optionName",children:"Type"}),Object(o.jsx)("div",{children:Object(o.jsx)(c.a,{fullWidth:!0,onChange:function(e){var t=e.target.value;b({type:"update",key:"material",value:{type:t}})},value:p,children:v})}),Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading"}),children:Object(o.jsx)(j,{materialType:p,openModal:t})})]})})}}}]);
//# sourceMappingURL=51.ae2afde3.chunk.js.map