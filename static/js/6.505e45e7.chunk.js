(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{230:function(e,r,t){"use strict";t.d(r,"c",(function(){return l})),t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return p}));var n=t(239),a=t(0),o=t.n(a),c=t(231),m=t.n(c),i=t(112),u=function(e){e.input;var r=e.meta,t=Object(n.a)(e,["input","meta"]),a=r.touched&&r.error;return o.a.createElement("div",{className:a&&m.a.formControl+" "+m.a.error},t.children,a&&o.a.createElement("span",{className:m.a.formControl+" "+m.a.error},r.error))},l=function(e){var r=e.input,t=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},r,t)))},s=function(e){var r=e.input,t=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},r,t)))},p=function(e,r,t,n,a,c){return o.a.createElement("span",null," ",o.a.createElement(i.a,{placeholder:e,name:r,component:t,validate:n,type:a})," ",c)}},231:function(e,r,t){e.exports={formControl:"FormsControls_formControl__13IAy",error:"FormsControls_error__KVCLW",formSummaryError:"FormsControls_formSummaryError__3RxXw"}},232:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return a}));var n=function(e){if(!e)return"Filed is required"},a=function(e){return function(r){if(r.length>e)return"Max lenght is ".concat(e," symbols")}}},297:function(e,r,t){e.exports={formSummaryError:"Login_formSummaryError__3cy0x",parent:"Login_parent__2-j0C",inner:"Login_inner__19gUZ",block:"Login_block__3BMBA"}},304:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),o=t(113),c=t(230),m=t(232),i=t(15),u=t(38),l=t(21),s=t(231),p=t.n(s),f=t(297),b=t.n(f),E=Object(o.a)({form:"login"})((function(e){var r=e.handleSubmit,t=e.error,n=e.captchaUrl;return a.a.createElement("form",{className:b.a.parent,onSubmit:r},a.a.createElement("div",{className:b.a.inner},a.a.createElement("div",{className:b.a.block},a.a.createElement("h1",null,"LOGIN"),Object(c.a)("email","email",c.b,[m.b],""),Object(c.a)("password","password",c.b,[m.b],"password"),Object(c.a)("","rememberMe","input","","checkbox","remember me"),t&&a.a.createElement("div",{className:p.a.formSummaryError},t),a.a.createElement("div",null,n&&a.a.createElement("img",{src:n}),n&&Object(c.a)("Symbols from image","captcha",c.b,[m.b],"",""),a.a.createElement("button",null,"Login")))))}));r.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:u.b})((function(e){return!0===e.isAuth?a.a.createElement(l.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement(E,{onSubmit:function(r){e.login(r.email,r.password,r.rememberMe,r.captcha)},captchaUrl:e.captchaUrl}))}))}}]);
//# sourceMappingURL=6.505e45e7.chunk.js.map