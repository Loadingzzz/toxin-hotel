(()=>{var e={91:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},158:()=>{const e=document.querySelectorAll([".counter__button"]);e.forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.direction,t=this.parentElement.querySelector(".counter__value"),r=+t.value;let o;o="plus"===e?r+1:r-1>0?r-1:0,t.value=o}))})),e.forEach((e=>{e.addEventListener("click",(function(){const e=this.dataset.direction,t=this.parentElement.querySelector(".counter__value"),r=+t.innerText;let o;o="plus"===e?r+1:r-1>0?r-1:0,t.innerText=o}))})),window.addEventListener("click",(function(e){if(e.target.hasAttribute("data-cart")){console.log("Click");const e=document.querySelector(".counter-one");console.log(e);const t=document.querySelector(".counter-two");console.log(t);const r=document.querySelector(".counter-three");console.log(r);const o=this.document.querySelector(".selcted");console.log(o.textContent)}}))},510:()=>{document.querySelectorAll(".dropdown").forEach((e=>{const t=document.querySelector(".select"),r=document.querySelector(".caret"),o=document.querySelector(".menu"),c=document.querySelector(".menu li"),n=document.querySelector(".selected");t.addEventListener("click",(()=>{t.classList.toggle("select-cliked"),r.classList.toggle("caret-rotate"),o.classList.toggle("menu-open")})),c.forEach((e=>{e.addEventListener("click",(()=>{n.innerText=e.innerText,t.classList.remove("select-cliked"),r.classList.remove("caret-rotate"),o.classList.remove("menu-open"),e.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")}))}))}))},216:(e,t,r)=>{"use strict";e.exports=r.p+"asset/c2a93d6ae04f381031de.svg"}},t={};function r(o){var c=t[o];if(void 0!==c)return c.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{"use strict";var e=r(91),t=r.n(e),o=new URL(r(216),r.b);t()(o),r(158),r(510)})()})();
//# sourceMappingURL=main.0666e5d711628caffb0f.js.map