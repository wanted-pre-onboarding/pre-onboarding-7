(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{211:function(e,n,t){"use strict";t.r(n);var o=t(7),c=t(0),r=t.n(c),i=t(14),a=t.n(i),d=t(8),s=t(18);t(98);var l,j=t(217),u=t(213),b=t(216),x=t(58),O=t(59),p=t(4);function f(e){return Object(p.jsx)(O.a,{style:Object(x.a)({fontSize:"large"===e.size?48:24},e.style),spin:!0})}function g(e){var n=e.tip,t=e.size,o=e.delay,c=e.style,r=e.mask,i=void 0!==r&&r;return Object(p.jsx)(v,{className:"spinner-wrap",justify:"center",align:"middle",style:c,"data-mask":i,children:Object(p.jsx)(j.a,{children:Object(p.jsx)(u.a,{indicator:Object(p.jsx)(f,{size:t}),delay:o,tip:n,size:t})})})}g.defaultProps={tip:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4.",size:"large",delay:0,style:{},mask:!1};var h,m,v=Object(d.c)(b.a)(l||(l=Object(o.a)(["\n  background-color: ",";\n  height: 100vh;\n"])),(function(e){return e["data-mask"]?"rgba(0, 0, 0, 0.1)":"transparent"})),y=g,S=t(86);function w(e){return Object(p.jsx)(P,{children:Object(p.jsx)(U,{children:e.children})})}var T,k,z,I,E,D,_,C,N,F,J,R,L,A,M,Q,B,H,P=d.c.div(h||(h=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n"]))),U=d.c.div(m||(m=Object(o.a)(["\n  width: 70%;\n  height: 80%;\n\n  min-width: 360px;\n  max-width: 700px;\n\n  position: relative;\n  background: white;\n  border-radius: 30px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n"]))),W=r.a.memo(w),q=function(){var e=function(){var e=Object(c.useState)((new Date).toLocaleString()),n=Object(s.a)(e,2),t=n[0],o=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return o((new Date).toLocaleString())}),1e3);return function(){return clearInterval(e)}}),[]),t}();return Object(p.jsx)(G,{children:Object(p.jsx)(K,{children:e})})},G=d.c.div(T||(T=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 52px;\n  padding-bottom: 24px;\n  border-bottom: 3px solid #33bb77;\n"]))),K=d.c.div(k||(k=Object(o.a)(["\n  font-size: 26px;\n  color: #119955;\n  padding-left: 10px;\n"]))),V=r.a.memo(q),X=t(218),Y=t(219),Z=function(e){var n=e.toggleTodo,t=e.removeTodo,o=e.todo,c=o.id,r=o.text,i=o.dueDate,a=o.done;return Object(p.jsxs)(ee,{children:[Object(p.jsx)(ne,{done:a,onClick:function(){return function(e){return n(e)}(c)},children:a&&Object(p.jsx)(X.a,{})}),Object(p.jsx)(te,{done:a,children:r}),Object(p.jsxs)(oe,{done:a,children:["Due Date ",i]}),Object(p.jsx)($,{onClick:function(){return function(e){return t(e)}(c)},children:Object(p.jsx)(Y.a,{})})]})},$=d.c.div(z||(z=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #119955;\n  font-size: 16px;\n"]))),ee=d.c.div(I||(I=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),$),ne=d.c.div(E||(E=Object(o.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 16px;\n  border: 1px solid #33bb77;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(e){return e.done&&Object(d.b)(D||(D=Object(o.a)(["\n      border: 1px solid #dddddd;\n      color: #dddddd;\n    "])))})),te=d.c.div(_||(_=Object(o.a)(["\n  flex: 1;\n  font-size: 16px;\n  color: #119955;\n  ","\n"])),(function(e){return e.done&&Object(d.b)(C||(C=Object(o.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),oe=d.c.div(N||(N=Object(o.a)(["\n  flex: 1;\n  font-size: 16px;\n  color: #119955;\n  ","\n"])),(function(e){return e.done&&Object(d.b)(F||(F=Object(o.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),ce=r.a.memo(Z),re=function(e){var n=e.toggleTodo,t=e.removeTodo,o=e.todos;return Object(p.jsx)(ie,{children:o&&o.map((function(e,o){return Object(p.jsx)(ce,{toggleTodo:n,removeTodo:t,todo:e},o)}))})},ie=d.c.div(J||(J=Object(o.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]))),ae=r.a.memo(re),de=t(220),se=t(215),le=t(214),je=t(29),ue=t.n(je),be=function(e){var n=e.nextId,t=e.validateInput,o=e.createTodo,r=Object(c.useState)(!1),i=Object(s.a)(r,2),a=i[0],d=i[1],l=Object(c.useState)(""),j=Object(s.a)(l,2),u=j[0],b=j[1],x=Object(c.useState)(""),O=Object(s.a)(x,2),f=O[0],g=O[1],h=Object(c.useState)(!1),m=Object(s.a)(h,2),v=m[0],y=m[1],S=Object(c.useState)(""),w=Object(s.a)(S,2),T=w[0],k=w[1],z=function(){return y(!v)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Oe,{children:Object(p.jsxs)(pe,{onSubmit:function(e){if(e.preventDefault(),!t(u,f))return k("".concat(u?"\ub0a0\uc9dc\ub97c":"\uac12\uc744"," \uc785\ub825\ud574\uc8fc\uc138\uc694")),void z();o({id:n,text:u,done:!1,dueDate:f}),b(""),g(""),d(!1)},children:[Object(p.jsx)(fe,{autoFocus:!0,placeholder:"What's need to be done?",onChange:function(e){return b(e.target.value)},value:u,maxLength:20}),Object(p.jsx)(xe,{onClick:function(){return d(!a)},open:a,children:Object(p.jsx)(de.a,{})})]})}),Object(p.jsx)(ge,{onChange:function(e,n){return g(n)},value:""!==f?ue()(f):null}),Object(p.jsx)(se.a,{visible:v,onOk:z,onCancel:z,closable:!0,children:T})]})},xe=d.c.button(R||(R=Object(o.a)(["\n  background: #33bb77;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  left: 50%;\n  transform: translate(50%, 0%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Oe=d.c.div(L||(L=Object(o.a)(["\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n"]))),pe=d.c.form(A||(A=Object(o.a)(["\n  display: flex;\n  background: #eeeeee;\n  padding-left: 40px;\n  padding-top: 36px;\n  padding-right: 60px;\n  padding-bottom: 36px;\n"]))),fe=d.c.input(M||(M=Object(o.a)(["\n  padding: 12px;\n  border: 1px solid #dddddd;\n  width: 100%;\n  outline: none;\n  font-size: 21px;\n  box-sizing: border-box;\n  color: #119955;\n  &::placeholder {\n    color: #dddddd;\n    font-size: 16px;\n  }\n"]))),ge=Object(d.c)(le.a)(Q||(Q=Object(o.a)(["\n  padding: 24px 8px;\n"]))),he=r.a.memo(be),me=function(e){var n=e.todos.filter((function(e){return!e.done}));return Object(p.jsx)(ve,{children:Object(p.jsxs)(ye,{className:"tasks-left",children:[null===n||void 0===n?void 0:n.length," items left"]})})},ve=d.c.div(B||(B=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n"]))),ye=d.c.div(H||(H=Object(o.a)(["\n  color: #33bb77;\n  font-size: 18px;\n"]))),Se=r.a.memo(me),we=function(){var e=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(1),i=Object(s.a)(r,2),a=i[0],d=i[1];return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("todos");if(null!==e&&"[]"!==e){var n=JSON.parse(e);o(n),d(n[n.length-1].id+1)}}()}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(t))}),[t]),{nextId:a,todoState:t,validateInput:function(e,n){return!(!e||!n)},toggleTodo:function(e){t.map((function(n){return n.id===e&&(n.done=!n.done),n})),o(Object(S.a)(t))},removeTodo:function(e){var n=Object(S.a)(t);n.forEach((function(t,o){return t.id===e&&n.splice(o,1)})),o(n)},createTodo:function(e){d((function(e){return e+1})),o((function(n){return[].concat(Object(S.a)(n),[Object(x.a)(Object(x.a)({},e),{},{id:a})])}))}}}(),n=e.nextId,t=e.todoState,o=e.validateInput,r=e.toggleTodo,i=e.removeTodo,a=e.createTodo;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(W,{children:[Object(p.jsx)(V,{}),Object(p.jsx)(he,{validateInput:o,createTodo:a,nextId:n}),Object(p.jsx)(ae,{toggleTodo:r,removeTodo:i,todos:t}),Object(p.jsx)(Se,{todos:t})]})})};var Te,ke=function(){var e=Object(c.useState)(!1),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(function(e){var n;try{n=window[e];var t="__storage_test__";return n.setItem(t,t),n.removeItem(t),!0}catch(o){return o instanceof DOMException&&(22===o.code||1014===o.code||"QuotaExceededError"===o.name||"NS_ERROR_DOM_QUOTA_REACHED"===o.name)&&n&&0!==n.length}}("localStorage")),i=Object(s.a)(r,1)[0];return setTimeout((function(){o(!0)}),1500),i?t?Object(p.jsx)(we,{}):Object(p.jsx)(y,{mask:!0}):Object(p.jsx)("h1",{children:"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ube0c\ub77c\uc6b0\uc800\uc785\ub2c8\ub2e4"})},ze=Object(d.a)(Te||(Te=Object(o.a)(["\n  body {\n    background: #eeeeee;\n  }\n"])));a.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ze,{}),Object(p.jsx)(ke,{})]}),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.36f2e89b.chunk.js.map