define("ChuckPlugin",[],(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));const r='\n    <div style="display:flex;align-items:center;justify-content:center;flex:1;flex-direction:column;">\n        <div>\n            <h1 id="CHUCKNORRIS_JOKE">...</h1>\n        </div>\n        <br/>\n        \n        <button id="CHUCKNORRIS_BUTTON">More</button>\n        \n        <br/>\n        <hr/>\n        <br/>\n        \n        <div>\n            <p>Beware, Chuck knows your name: <span id="CHUCK_KNOWS_YOUR_NAME"></span></p>\n        </div>\n    </div>\n';class o{constructor(){this.root=null,this.jokeNode=null,this.button=null,this.name=null,this.api=window.OpsPortalApi||null}attachPlugin(t){this.root=document.querySelector(t),this.root&&this.init()}attachPluginToNode(t){this.root=t,this.root&&this.init()}init(){const t=document.createRange().createContextualFragment(r);this.jokeNode=t.querySelector("#CHUCKNORRIS_JOKE"),this.btn=t.querySelector("#CHUCKNORRIS_BUTTON"),this.btn.onclick=()=>this.moreJokes(),this.name=t.querySelector("#CHUCK_KNOWS_YOUR_NAME"),this.api&&this.api.getUserName?this.name.innerHTML=this.api.getUserName():this.name.innerHTML="CANT GET NAME O.o !!! ).",this.root.appendChild(t),this.moreJokes()}moreJokes(){this.getJoke().then(t=>{this.jokeNode.innerHTML=t})}async getJoke(){const t=await fetch("https://api.chucknorris.io/jokes/random");return(await t.json()).value}}}])}));
//# sourceMappingURL=ChuckPluginAMD.js.map