(this["webpackJsonpstop-watch"]=this["webpackJsonpstop-watch"]||[]).push([[0],{26:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n(0),r=n.n(o),i=n(14),u=n.n(i),s=n(5),j=n(2),h=function(){return Object(c.jsx)("div",{children:"countdown"})},a=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.b,{to:"/stopwatch",children:"Stopwatch"}),Object(c.jsx)(s.b,{to:"/countdown",children:"CountDown"})]})},b=n(12),d=function(){var t=Object(o.useState)(0),e=Object(b.a)(t,2),n=e[0],r=e[1],i=Object(o.useState)(!1),u=Object(b.a)(i,2),j=u[0],h=u[1];Object(o.useEffect)((function(){j&&setTimeout((function(){return r(n+10)}),10)}),[j,n]);var a=function(t){var e=36e5,n=6e4,c=1e3,o={hour:0,minute:0,second:0,milisecond:0};return o.hour=Math.floor(t/e),o.minute=Math.floor((t-o.hour*e)/n),o.second=Math.floor((t-o.hour*e-o.minute*n)/c),o.milisecond=Math.floor(t-o.hour*e-o.minute*n-o.second*c),o};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:a(n).hour}),Object(c.jsx)("h1",{children:a(n).minute}),Object(c.jsx)("h1",{children:a(n).second}),Object(c.jsx)("p",{children:a(n).milisecond}),Object(c.jsx)("button",{onClick:function(){return h(!0)},children:"Iniciar"}),Object(c.jsx)("button",{onClick:function(){return h(!1)},children:"Parar"}),Object(c.jsx)(s.b,{to:"/",children:"Voltar"})]})},l=function(){return Object(c.jsx)(d,{})},O=function(){return Object(c.jsx)(s.a,{basename:"/stopWatchReact",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",component:a}),Object(c.jsx)(j.a,{path:"/stopwatch",component:l}),Object(c.jsx)(j.a,{path:"/countdown",component:h})]})})};var x=function(){return Object(c.jsx)(O,{})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[26,1,2]]]);
//# sourceMappingURL=main.d16f40f3.chunk.js.map