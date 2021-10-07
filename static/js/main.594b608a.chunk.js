(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),l=(n(9),n(2)),i=(n(10),n(0));function o(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link ","aria-current":"page",href:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/about",children:"About"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable Dark mode":"Enable light mode"})]})]})]})})})}function b(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),b=o[0],d=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h1",{className:"my-3",children:e.heading}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("textarea",{className:"form-control",id:"mybox",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"light"===e.mode?"black":"white"},value:b,onChange:function(e){d(e.target.value)},rows:"8"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=b.toUpperCase();d(e)},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=b.slice(0,1).toUpperCase()+b.slice(1,b.length).toLowerCase();d(e)},children:"Convert to First letter to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=b.toLowerCase();d(e)},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){d("")},children:"Clear text "}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=b.split(/[ ]+/);d(e.join(" "))},children:" Remove Extra Space "}),Object(i.jsx)("button",{className:"btn btn-primary ",onClick:function(){for(var e=b.split(" "),t=[],n=0;n<e.length;n++)e.indexOf(e[n])!==e.lastIndexOf(e[n])&&(t.includes(e[n])||(t.push(e[n]),t.push(a))),r(t.join(" "))},children:"Repeated words"})]})]}),Object(i.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"Here is your Text Summary: "}),Object(i.jsxs)("p",{children:[" The number of Words: ",b.split(" ").filter((function(e){return 0!==e.length})).length,"  "]}),Object(i.jsxs)("p",{children:[" The number of Characters:  ",b.replace(/ /g,"").length," "]}),Object(i.jsxs)("p",{children:[" The number of Sentences:  ",b.split(".").filter((function(e){return 0!==e.length})).length," "]}),Object(i.jsxs)("p",{children:[" The number of Repeated Words: ",a.split(" ").filter((function(e){return 0!==e.length})).length,"  "]}),Object(i.jsxs)("p",{children:["The Repeated words are : ",a]}),Object(i.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){r("")},children:"Clear repeated words"}),Object(i.jsx)("h2",{children:"Preview :"}),Object(i.jsx)("p",{children:b.length>0?b:"Please enter some text in textarea to preview here. "})]})]})}function d(e){return e.Alert&&Object(i.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(i.jsx)("strong",{children:e.Alert.type})," : ",e.Alert.msg]})}var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),j=s[0],h=s[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1500)},u=function(){"light"===n?(a("dark"),document.body.style.backgroundColor="grey",m("Dark mode is Enable","success")):(a("light"),document.body.style.backgroundColor="white",m("Light  mode is Enable","success"))};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{title:"Textilyzer",mode:n,toggleMode:u}),Object(i.jsx)(d,{Alert:j}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(b,{heading:"Enter your text here:",mode:n,toggleMode:u})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.594b608a.chunk.js.map