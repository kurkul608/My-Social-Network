(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[7],{228:function(e,t,r){e.exports={formControl:"FormsControls_formControl__13IAy",error:"FormsControls_error__KVCLW",formSummaryError:"FormsControls_formSummaryError__3RxXw"}},229:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return f}));var n=r(238),a=r(0),o=r.n(a),u=r(228),c=r.n(u),i=r(111),m=function(e){e.input;var t=e.meta,r=Object(n.a)(e,["input","meta"]),a=t.touched&&t.error;return o.a.createElement("div",{className:a&&c.a.formControl+" "+c.a.error},r.children,a&&o.a.createElement("span",{className:c.a.formControl+" "+c.a.error},t.error))},l=function(e){var t=e.input,r=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(m,e,o.a.createElement("textarea",Object.assign({},t,r)))},s=function(e){var t=e.input,r=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(m,e,o.a.createElement("input",Object.assign({},t,r)))},f=function(e,t,r,n,a,u){return o.a.createElement("span",null," ",o.a.createElement(i.a,{placeholder:e,name:t,component:r,validate:n,type:a})," ",u)}},230:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Filed is required"},a=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols")}}},302:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(112),u=r(229),c=r(230),i=r(15),m=r(36),l=r(21),s=r(228),f=r.n(s),b=Object(o.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error;return a.a.createElement("form",{onSubmit:t},Object(u.a)("email","email",u.b,[c.b],""),Object(u.a)("password","password",u.b,[c.b],"password"),Object(u.a)("","rememberMe","input","","checkbox","remember me"),r&&a.a.createElement("div",{className:f.a.formSummaryError},r),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}));t.default=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:m.b})((function(e){return!0===e.isAuth?a.a.createElement(l.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"LOGIN"),a.a.createElement(b,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.474d09e2.chunk.js.map