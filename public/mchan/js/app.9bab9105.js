!function(e){function t(t){for(var r,i,a=t[0],u=t[1],c=t[2],h=0,d=[];h<a.length;h++)i=a[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={0:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;o.push([83,1]),n()}({83:function(e,t,n){"use strict";n.r(t);n(46),n(48),n(53),n(80);var r=n(45),s=n.n(r);var o=function(){function e(e,t){void 0===t&&(t="default"),this.name="default",this.name=t,this.port=e,this.messageHandlers={},this.port.onmessage=this.onMessage.bind(this)}var t=e.prototype;return t.on=function(e,t){this.messageHandlers.hasOwnProperty(e)||(this.messageHandlers[e]=[]),this.messageHandlers[e].push(t)},t.off=function(e,t){this.messageHandlers.hasOwnProperty(e)&&void 0===t?this.messageHandlers[e]=[]:this.messageHandlers.hasOwnProperty(e)&&(this.messageHandlers[e]=this.messageHandlers[e].filter((function(e){return e!==t})))},t.send=function(e){this.port.postMessage(JSON.stringify(e))},t.destroy=function(){this.messageHandlers={}},t.onMessage=function(e){try{var t=JSON.parse(e.data);this.trigger(t.action,t)}catch(e){return void console.log(this.name+"On message throw",e)}},t.trigger=function(e,t){var n=this;this.messageHandlers.hasOwnProperty("IPM::ACTION::MESSAGE_RECEIVED")&&this.messageHandlers["IPM::ACTION::MESSAGE_RECEIVED"].length&&this.messageHandlers["IPM::ACTION::MESSAGE_RECEIVED"].forEach((function(e){e(t,(function(e){return n.send(e)}))})),this.messageHandlers.hasOwnProperty(e)&&this.messageHandlers[e].length&&this.messageHandlers[e].forEach((function(e){e(t,(function(e){return n.send(e)}))}))},e}();new(function(){function e(e){this.portalUrl=e,this.promiseQueue={},this.channel=new MessageChannel,this.port=this.channel.port1,this.ipm=new o(this.port,"CLIENT")}var t=e.prototype;return t.init=function(){var e=this;return console.log("SENDING CONNECT REQ FROM CLIENT"),this.ipm.on("IPM::ACTION::MESSAGE_RECEIVED",this.onMessageReturn.bind(this)),new Promise((function(t,n){e.ipm.on("IPM::ACTION::READY",(function(){return t(e.getSdk())})),window.top.postMessage(JSON.stringify({action:"IPM::ACTION::CONNECT",id:999}),e.portalUrl,[e.channel.port2]),setTimeout((function(){return n("CLIENT TIMED OUT after 15 secs!")}),15e3)}))},t.onMessageReturn=function(e){this.promiseQueue.hasOwnProperty(e.id)&&(this.promiseQueue[e.id].resolve(e),delete this.promiseQueue[e.id])},t.send=function(e,t){var n=this;void 0===t&&(t=null);var r=s()(),o={id:r,action:e,payload:t,created:new Date};return new Promise((function(e,t){n.promiseQueue[r]={resolve:e,reject:t},n.port.postMessage(JSON.stringify(o)),setTimeout((function(){return t(new Error("OPS CLIENT TIMED OUT FOR MSG ID: "+r))}),15e3)}))},t.getSdk=function(){var e=this;return{getUserName:function(){return e.send("getUserName")},getUser:function(){return e.send("getUser")},getPlugins:function(){return e.send("getPlugins")},getAccessToken:function(){return e.send("getAccessToken")},call:function(t,n,r,s){var o={url:t,data:n,headers:r||{},method:s||"GET"};return e.send("call",o)}}},e}())("http://localhost:3000").init().then((function(e){e.getUserName().then((function(e){return document.querySelector("#name").innerText="Hello, ".concat(e.payload)})),e.getAccessToken().then((function(e){return document.querySelector("#token").innerText="".concat(e.payload)})),document.querySelector("#getBrew").addEventListener("click",(function(){document.querySelector("#getBrew").innerText="....",e.call("https://api.openbrewerydb.org/breweries/"+Math.ceil(300*Math.random()),null,{},"GET").then((function(e){var t=e.payload.data;document.querySelector("#brew").innerText=t.name+" "+t.street+","+t.city+" "+t.state+t.country})).finally((function(){return document.querySelector("#getBrew").innerText="Get Brewery (make call trough sdk)"}))}))})).catch((function(e){return console.log("client connect send failed",e)}))}});
//# sourceMappingURL=app.9bab9105.js.map