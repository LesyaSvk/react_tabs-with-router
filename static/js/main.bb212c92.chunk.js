(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{17:function(t,e,c){"use strict";c.r(e);var a=c(9),s=c.n(a),n=c(4),b=c(1),i=(c(0),c(6)),j=c.n(i),r=(c(14),c(15),c(2)),l=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},d=function(t){var e=t.tabs,c=Object(b.h)().tabId,a=e.find((function(t){return c===t.id}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"tab",children:Object(r.jsx)(n.b,{to:"/tabs/".concat(t.id),className:j()({"is-active":a}),children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"tab-content",children:(null===a||void 0===a?void 0:a.content)||"Please select a tab"})]})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var t=function(t){return j()("navbar-item",{"is--active":t.isActive})};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-fixed-top has-background-light","data-cy":"nav",children:Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"navbar-start",children:[Object(r.jsx)(n.b,{to:"/",className:t,children:"Home"}),Object(r.jsx)(n.b,{to:"/tabs",className:t,children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{path:"/",element:Object(r.jsx)(l,{})}),Object(r.jsxs)(b.b,{path:"/tabs",children:[Object(r.jsx)(b.b,{index:!0,element:Object(r.jsx)(d,{tabs:o})}),Object(r.jsx)(b.b,{path:":tabId",element:Object(r.jsx)(d,{tabs:o})})]}),Object(r.jsx)(b.b,{path:"/home",element:Object(r.jsx)(b.a,{to:"/",replace:!0})}),Object(r.jsx)(b.b,{path:"*",element:Object(r.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bb212c92.chunk.js.map