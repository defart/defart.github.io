!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ChuckPlugin=t():e.ChuckPlugin=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));const o='\n    <div style="display:flex;align-items:center;justify-content:center;flex:1;flex-direction:column;">\n        <div>\n            <h1 id="CHUCKNORRIS_JOKE">...</h1>\n        </div>\n        <br/>\n        \n        <button id="CHUCKNORRIS_BUTTON">More</button>\n        \n        <br/>\n        <hr/>\n        <br/>\n        \n        <div>\n            <p>Beware, Chuck knows your name: <span id="CHUCK_KNOWS_YOUR_NAME"></span></p>\n        </div>\n    </div>\n';class r{constructor(){this.root=null,this.jokeNode=null,this.button=null,this.name=null,this.api=window.OpsPortalApi||null}attachPlugin(e){this.root=document.querySelector(e),this.root&&this.init()}attachPluginToNode(e){this.root=e,this.root&&this.init()}init(){const e=document.createRange().createContextualFragment(o);this.jokeNode=e.querySelector("#CHUCKNORRIS_JOKE"),this.btn=e.querySelector("#CHUCKNORRIS_BUTTON"),this.btn.onclick=()=>this.moreJokes(),this.name=e.querySelector("#CHUCK_KNOWS_YOUR_NAME"),this.api&&this.api.getUserName?this.name.innerHTML=this.api.getUserName():this.name.innerHTML="CANT GET NAME O.o !!! ).",this.root.appendChild(e),this.moreJokes()}moreJokes(){this.getJoke().then(e=>{this.jokeNode.innerHTML=e})}async getJoke(){const e=await fetch("https://api.chucknorris.io/jokes/random");return(await e.json()).value}}}])}));
//# sourceMappingURL=pluginBundle.js.map