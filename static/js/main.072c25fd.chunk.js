(this.webpackJsonpdictionary=this.webpackJsonpdictionary||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(6),r=n.n(c),i=(n(11),n(0));function l(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.theme," bg-").concat(e.theme),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})})})]})})})}l.defaultProps={title:"Dictionary",theme:"light"};var o=n(2),d=n.n(o),u=n(3),p=n(5);n(14);function h(e){var t=e.data,n=function(e){try{return e.charAt(0).toUpperCase()+e.slice(1)}catch(t){}return e},a=function(){var e=Object(u.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("speakBUTTON").innerHTML='<div class="spinner-grow spinner-grow-sm" role="status">\n        <span class="visually-hidden">Loading...</span>\n      </div>',(a=new Audio(t.phonetics[0].audio)).type="audio/wav",e.prev=3,e.next=6,a.play();case 6:document.getElementById("speakBUTTON").innerHTML='Speak <span className="py-2 px-2"><svg style={{ backgroundColor: "transparent" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">\n            <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />\n            <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />\n            <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />\n            <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />\n            </svg></span>',e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("Failed to play..."+e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)(i.Fragment,{children:void 0!==t.word?Object(i.jsxs)("div",{className:"card my-3",children:[Object(i.jsxs)("div",{className:"card-body position-relative",children:[Object(i.jsx)("h5",{className:"card-title",children:n(t.word)}),Object(i.jsxs)("p",{className:"card-text",children:[" ",Object(i.jsx)("strong",{children:"ORIGIN : "})," ",Object(i.jsx)("u",{children:void 0===t.origin?"No Origin":n(t.origin)})]}),Object(i.jsxs)("button",{disabled:0===t.phonetics.filter((function(e){return!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)})).length||void 0===t.phonetics,type:"button",onClick:a,className:"btn btn-primary position-absolute top-0 my-2 mx-2",id:"speakBUTTON",style:{right:"0"},children:["Speak ",Object(i.jsx)("span",{className:"py-2 px-2",children:Object(i.jsxs)("svg",{style:{backgroundColor:"transparent"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-music-note-list",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"}),Object(i.jsx)("path",{fillRule:"evenodd",d:"M12 3v10h-1V3h1z"}),Object(i.jsx)("path",{d:"M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"}),Object(i.jsx)("path",{fillRule:"evenodd",d:"M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"})]})})]})]}),Object(i.jsx)("ul",{className:"list-group list-group-flush",children:t.meanings&&t.meanings.map((function(e){return Object(i.jsx)("li",{className:"list-group-item",children:Object(i.jsx)("div",{className:"list-group",children:Object(i.jsxs)("div",{className:"list-group-item list-group-item-action","aria-current":"true",children:[Object(i.jsx)("div",{className:"d-flex w-100 justify-content-between",children:Object(i.jsx)("h5",{className:"mb-1",children:e.partOfSpeech})}),Object(i.jsx)("ol",{className:"list-group list-group-numbered",children:e.definitions.map((function(e){return void 0!==e.definition||void 0!==e.example?Object(i.jsx)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:Object(i.jsxs)("div",{className:"ms-2 me-auto",children:[Object(i.jsxs)("div",{className:"fw-bold",children:["Defination : ",n(e.definition)]}),Object(i.jsx)("p",{className:"border px-2 py-1 my-2 rounded",style:{display:e.example?"block":"none"},children:e.example?"Example : ".concat(n(e.example)):""})]})},e.definition):null}))})]})})},e.partOfSpeech)}))})]}):Object(i.jsx)("div",{className:"card my-3",children:Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("h5",{className:"card-title text-center",children:"No data found"})})})})}function b(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(null),r=Object(p.a)(c,2),l=r[0],o=r[1],b=0,j=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log("Form submited"),""===n.trim()){e.next=15;break}return o(null),document.getElementById("searchIcon").innerHTML='<div class="spinner-border spinner-border-sm" role="status">\n            <span class="visually-hidden">Loading...</span>\n          </div>',e.next=7,fetch("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(n));case 7:return a=e.sent,e.next=10,a.json();case 10:void 0===(s=e.sent)[0]?o([s]):o(s),document.getElementById("searchIcon").innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>',e.next=16;break;case 15:alert("Can not be empty");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("form",{onSubmit:j,children:Object(i.jsxs)("div",{className:"inputMainContainer input-group mt-4 ",children:[Object(i.jsx)("input",{type:"text",placeholder:"Search word here...",className:"form-control text-center",value:n,onChange:function(e){s(e.target.value),""===e.target.value.trim()&&o(null)}}),Object(i.jsx)("span",{className:"input-group-text",id:"searchIcon",onClick:j,children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-search",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})})})]})}),l&&l.map((function(e){return Object(i.jsx)(h,{data:e},b++)}))]})}var j=function(){return Object(a.useEffect)((function(){document.querySelector("input").focus()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{theme:"dark"}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(b,{})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.072c25fd.chunk.js.map