(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["opsapiIframe"] = factory();
	else
		root["opsapiIframe"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return _provider__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["default"] = (_client__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Provider; });
/* harmony import */ var _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

class Provider {
  constructor(window, api, bundleUrl = null) {
    this.sock = null;
    this.window = window;
    this.api = api;
    this.clientOrigin = this.parseOriginFromPluginUrl(bundleUrl || '');

    this.window.top.onmessage = e => {
      if (e.origin !== this.clientOrigin) {
        return;
      }

      try {
        const msg = JSON.parse(e.data);

        if (msg.action === _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_0__["ISOCK_ACTION_CONNECT"] && e.ports.length && e.ports[0]) {
          const pluginPort = e.ports[0];
          this.sock = new _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_0__["default"](pluginPort, 'PROVIDER');
          this.setup(this.sock);
          this.sock.send(Object.assign(Object.assign({}, msg), {
            action: _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_0__["ISOCK_ACTION_READY"],
            payload: _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_0__["ISOCK_ACTION_READY"],
            status: 200
          }));
        }
      } catch (e) {
        console.log("Unable to establish client connection: " + e.message);
      }
    };
  }

  setup(socket) {
    const syncApiHandler = (msg, reply) => {
      reply(Object.assign(Object.assign({}, msg), {
        payload: this.makeSyncCall(msg)
      }));
    };

    socket.on("getUserName", syncApiHandler);
    socket.on("getUser", syncApiHandler);
    socket.on("getPlugins", syncApiHandler);
    socket.on("getAccessToken", syncApiHandler);
    socket.on("call", (msg, reply) => {
      this.makeProxyCall(msg).then(result => reply(Object.assign(Object.assign({}, msg), {
        payload: result
      }))).catch(e => reply(Object.assign(Object.assign({}, msg), {
        payload: e.message,
        status: 500
      })));
    });
  }

  destroy() {
    var _a;

    (_a = this.sock) === null || _a === void 0 ? void 0 : _a.destroy();
  }

  makeProxyCall(m) {
    const p = m.payload;
    return this.api.call(p.url, p.data || {}, p.method, p.headers || {});
  }

  makeSyncCall(m) {
    let result = null;

    switch (m.action) {
      case 'getUserName':
        result = this.api.getUserName();
        break;

      case 'getUser':
        result = this.api.getUser();
        break;

      case 'getPlugins':
        result = this.api.getPlugins();
        break;

      case 'getAccessToken':
        result = this.api.getAccessToken();
        break;
    }

    return result;
  }

  parseOriginFromPluginUrl(bundleUrl) {
    const parts = bundleUrl.split('/');

    if (parts.length >= 3) {
      return parts[0] + '//' + parts[2];
    }

    return '';
  }

}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISOCK_ACTION_READY", function() { return ISOCK_ACTION_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISOCK_ACTION_CONNECT", function() { return ISOCK_ACTION_CONNECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISOCK_ACTION_MESSAGE_RECEIVED", function() { return ISOCK_ACTION_MESSAGE_RECEIVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IframeSocket; });
const ISOCK_ACTION_READY = "IframeSocket::ACTION::READY";
const ISOCK_ACTION_CONNECT = "IframeSocket::ACTION::CONNECT";
const ISOCK_ACTION_MESSAGE_RECEIVED = "IframeSocket::ACTION::MESSAGE_RECEIVED";
class IframeSocket {
  constructor(port, name = 'default') {
    this.name = 'default';
    this.name = name;
    this.port = port;
    this.messageHandlers = {};
    this.port.onmessage = this.onMessage.bind(this);
  }

  on(action, handler) {
    if (!this.messageHandlers.hasOwnProperty(action)) {
      this.messageHandlers[action] = [];
    }

    this.messageHandlers[action].push(handler);
  }

  off(action, handler) {
    if (this.messageHandlers.hasOwnProperty(action) && undefined === handler) {
      this.messageHandlers[action] = [];
    } else if (this.messageHandlers.hasOwnProperty(action)) {
      this.messageHandlers[action] = this.messageHandlers[action].filter(handlerFn => handlerFn !== handler);
    }
  }

  send(msg) {
    this.port.postMessage(JSON.stringify(msg));
  }

  destroy() {
    this.messageHandlers = {};
    this.port.close();
  }

  onMessage(e) {
    try {
      const msg = JSON.parse(e.data);
      this.trigger(msg.action, msg);
    } catch (e) {
      console.log(this.name + " received invalid message:" + e.message, e);
      return;
    }
  }

  trigger(action, msg) {
    //handle the possible IPM_ACTION_MESSAGE_RECEIVED hooks for any message
    if (this.messageHandlers.hasOwnProperty(ISOCK_ACTION_MESSAGE_RECEIVED) && this.messageHandlers[ISOCK_ACTION_MESSAGE_RECEIVED].length) {
      this.messageHandlers[ISOCK_ACTION_MESSAGE_RECEIVED].forEach(handler => {
        handler(msg, m => this.send(m));
      });
    } //handle the action hooks


    if (this.messageHandlers.hasOwnProperty(action) && this.messageHandlers[action].length) {
      this.messageHandlers[action].forEach(handler => {
        handler(msg, m => this.send(m));
      });
    }
  }

}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


const TIMEOUT_LIMIT = 15000;
class Client {
  constructor(portalUrl) {
    this.portalUrl = portalUrl;
    this.promiseQueue = {};
    this.channel = new MessageChannel();
    this.port = this.channel.port1;
    this.sock = new _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_1__["default"](this.port, 'CLIENT');
  }

  init() {
    this.sock.on(_iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_1__["ISOCK_ACTION_MESSAGE_RECEIVED"], this.onMessageReturn.bind(this));
    return new Promise((resolve, reject) => {
      this.sock.on(_iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_1__["ISOCK_ACTION_READY"], () => resolve(this.getSdk()));
      window.top.postMessage(JSON.stringify({
        action: _iframe_sock_iframeSocket__WEBPACK_IMPORTED_MODULE_1__["ISOCK_ACTION_CONNECT"]
      }), this.portalUrl, [this.channel.port2]);
      setTimeout(() => reject("CLIENT TIMED OUT WHILE ESTABLISHING CONNECTION"), TIMEOUT_LIMIT);
    });
  }

  onMessageReturn(msg) {
    if (this.promiseQueue.hasOwnProperty(msg.id)) {
      this.promiseQueue[msg.id].resolve(msg);
      delete this.promiseQueue[msg.id];
    }
  }

  send(action, payload = null) {
    const id = uuid__WEBPACK_IMPORTED_MODULE_0___default()();
    const message = {
      id,
      action,
      payload,
      created: new Date()
    };
    return new Promise((resolveFn, rejectFn) => {
      this.promiseQueue[id] = {
        resolve: resolveFn,
        reject: rejectFn
      };
      this.port.postMessage(JSON.stringify(message));
      setTimeout(() => rejectFn(new Error('CLIENT TIMED OUT FOR MSG ID: ' + id)), TIMEOUT_LIMIT);
    });
  }

  getSdk() {
    return {
      getUserName: () => this.send('getUserName'),
      getUser: () => this.send('getUser'),
      getPlugins: () => this.send('getPlugins'),
      getAccessToken: () => this.send('getAccessToken'),
      call: (url, data, headers, method) => {
        const message = {
          url,
          data,
          headers: headers || {},
          method: method || "GET"
        };
        return this.send('call', message);
      }
    };
  }

}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(5);

var v4 = __webpack_require__(8);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(6);

var bytesToUuid = __webpack_require__(7); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html


var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = rng();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

module.exports = bytesToUuid;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(6);

var bytesToUuid = __webpack_require__(7);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

/***/ })
/******/ ]);
});