!function(e){var t={};function n(d){if(t[d])return t[d].exports;var o=t[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,d){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:d})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(n.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(d,o,function(t){return e[t]}.bind(null,o));return d},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"projectList",(function(){return r}));function d(){for(var e=document.getElementById("projectContainer");e.hasChildNodes();)e.removeChild(e.firstChild);let t=document.createElement("h1"),n=document.createElement("button");t.innerHTML="Projects",n.innerHTML="+",n.classList.add("a"),n.setAttribute("id","btn"),n.addEventListener("click",o,{once:!0}),t.appendChild(n),document.getElementById("projectContainer").appendChild(t),r.forEach((function(e,t){let n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("h3");o.classList.add("projectList"),i.classList.add("d"),i.innerHTML="🗑",i.addEventListener("click",(function(){r.splice(t,1),d()})),c.innerHTML=e.name,c.addEventListener("click",(function(){!function(e){for(var t=document.getElementById("todoContainer");t.hasChildNodes();)t.removeChild(t.firstChild);let n=document.createElement("h1"),d=document.createElement("button");n.innerHTML="List Items",d.innerHTML="+",d.classList.add("b"),d.setAttribute("id","btn2"),n.appendChild(d),document.getElementById("todoContainer").appendChild(n),console.log(r),r[e].todoList.forEach((function(e){}))}(t)})),n.appendChild(o),o.appendChild(c),document.getElementById("projectContainer").appendChild(n),document.getElementById("projectContainer").appendChild(i)}))}function o(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("button"),o=document.createElement("input");t.classList.add("projectList"),n.classList.add("a"),o.setAttribute("id","projectInput"),n.innerHTML="✔",n.addEventListener("click",(function(){let e=document.getElementById("projectInput").value,t={name:e,todoList:[]};r.push(t),d()})),e.appendChild(t),t.appendChild(o),document.getElementById("projectContainer").appendChild(e),document.getElementById("projectContainer").appendChild(n)}let r=[{name:"Default Projecy",todoList:[{title:"todo1",description:"default",date:"01/10/20",priority:"high"}]}];document.getElementById("btn").addEventListener("click",o,{once:!0})}]);