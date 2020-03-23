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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(1);
exports.Client = client_1.default;
var provider_1 = __webpack_require__(5);
exports.Provider = provider_1.default;
var types_1 = __webpack_require__(6);
exports.EV_COUNTRY_CHANGE = types_1.EV_COUNTRY_CHANGE;
exports.EV_PLUGIN_SWITCH = types_1.EV_PLUGIN_SWITCH;
var bus_1 = __webpack_require__(4);
exports.Bus = bus_1.default;
exports.SDK_WINDOW_GLOBAL_NAME = 'OpsPortalApi';
exports.getOpsSdkGlobal = function (win) {
    if (win === void 0) { win = window; }
    if (win[exports.SDK_WINDOW_GLOBAL_NAME]) {
        return win[exports.SDK_WINDOW_GLOBAL_NAME];
    }
    throw new Error('Cannot get instance of OPS Portal Api from the window');
};
exports.default = client_1.default;
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uid_1 = __webpack_require__(2);
var iframeSocket_1 = __webpack_require__(3);
var iframeSocket_2 = __webpack_require__(3);
var bus_1 = __webpack_require__(4);
var TIMEOUT_LIMIT = 15000;
var Client = /** @class */ (function () {
    function Client(portalUrl, win, channel) {
        if (win === void 0) { win = window.top; }
        if (channel === void 0) { channel = new MessageChannel(); }
        this.bus = new bus_1.default();
        this.topWindow = win;
        this.portalUrl = portalUrl;
        this.promiseQueue = {};
        this.channel = channel;
        this.port = this.channel.port1;
        this.sock = new iframeSocket_2.default(this.port, 'CLIENT');
    }
    Client.prototype.init = function (cb) {
        var _this = this;
        this.sock.on(iframeSocket_2.ISOCK_ACTION_MESSAGE_RECEIVED, this.onMessageReturn.bind(this));
        this.sock.on(iframeSocket_1.ISOCK_ACTION_EVENT_RECEIVED, this.onEventReceived.bind(this));
        var p = new Promise(function (resolve, reject) {
            //once we get the READY back from the Provider resolve the promise with the IOpsSdkAsync sdk object
            _this.sock.on(iframeSocket_2.ISOCK_ACTION_READY, function () { return resolve(_this.getSdk()); });
            //initiate a connection with the provider, and transfer the other port of the message channel to the Provider in the main window
            _this.topWindow.postMessage(JSON.stringify({ action: iframeSocket_2.ISOCK_ACTION_CONNECT }), _this.portalUrl, [_this.channel.port2]);
            //reject promise if not resolved before timing out
            setTimeout(function () { return reject("CLIENT TIMED OUT WHILE ESTABLISHING CONNECTION"); }, TIMEOUT_LIMIT);
        });
        if (cb) {
            p.then(function (sdk) { return cb(null, sdk); }).catch(function (e) { return cb(e); });
        }
        else {
            return p;
        }
    };
    Client.prototype.onMessageReturn = function (msg) {
        if (this.promiseQueue.hasOwnProperty(msg.id)) {
            this.promiseQueue[msg.id].resolve(msg.payload);
            delete this.promiseQueue[msg.id];
        }
    };
    Client.prototype.onEventReceived = function (msg) {
        var ev = msg.payload.event;
        this.bus.trigger(ev.type, ev);
    };
    Client.prototype.send = function (action, payload, cb) {
        var _this = this;
        if (payload === void 0) { payload = null; }
        var id = uid_1.default();
        var message = { id: id, action: action, payload: payload, created: new Date() };
        var p = new Promise(function (resolveFn, rejectFn) {
            _this.promiseQueue[id] = {
                resolve: resolveFn,
                reject: rejectFn
            };
            _this.port.postMessage(JSON.stringify(message));
            setTimeout(function () { return rejectFn(new Error('CLIENT TIMED OUT FOR MSG ID: ' + id)); }, TIMEOUT_LIMIT);
        });
        if (cb) {
            p.then(function (result) { return cb(null, result); }).catch(function (e) { return cb(e); });
        }
        else {
            return p;
        }
    };
    Client.prototype.getSdk = function () {
        var _this = this;
        return {
            getUserName: function (cb) { return _this.send('getUserName', null, cb); },
            getUser: function (cb) { return _this.send('getUser', null, cb); },
            getPlugins: function (cb) { return _this.send('getPlugins', null, cb); },
            getCountries: function (cb) { return _this.send('getCountries', null, cb); },
            getAccessToken: function (cb) { return _this.send('getAccessToken', null, cb); },
            getMuiTheme: function (cb) { return _this.send('getMuiTheme', null, cb); },
            getCountry: function (cb) { return _this.send('getCountry', null, cb); },
            getEntityId: function (cb) { return _this.send('getEntityId', null, cb); },
            call: function (opt, cb) {
                var message = {
                    url: opt.url,
                    data: opt.data,
                    headers: opt.headers || {},
                    method: opt.method || "GET"
                };
                return _this.send('call', message, cb);
            },
            portal: {
                switchPlugin: function (id, cb) { return _this.send('switchPlugin', { pluginId: id }, cb); }
            },
            addEventListener: function (eventType, listener, cb) {
                // If we have more listeners for this event, no need to notify the provider to start sending this event
                if (listener && _this.bus.listenerCount(eventType) > 0) {
                    _this.bus.on(eventType, listener);
                    if (cb) {
                        cb(null, true);
                        return;
                    }
                    return Promise.resolve(true);
                }
                // if we need to use a callback instead of a promise
                var confirmationCb = function (isEventListenerSet) {
                    if (isEventListenerSet) {
                        _this.bus.on(eventType, listener);
                        cb(null, isEventListenerSet);
                    }
                    else {
                        cb(new Error("Unable to set event listener on Provider"), isEventListenerSet);
                    }
                };
                var confirmationPromise = _this.send('addEventListener', { eventType: eventType }, cb ? confirmationCb : undefined);
                if (confirmationPromise) {
                    return confirmationPromise.then(function (isEventListenerSet) {
                        _this.bus.on(eventType, listener);
                        return isEventListenerSet;
                    });
                }
            },
            removeEventListener: function (eventType, listener, cb) {
                var _this = this;
                // If we have more listeners for this event (and are not clearing them all),
                // no need to notify the provider to stop sending this event
                if (listener && this.bus.listenerCount(eventType) > 1) {
                    this.bus.off(eventType, listener);
                    if (cb) {
                        cb(null, true);
                        return;
                    }
                    return Promise.resolve(true);
                }
                // if we need to use a callback instead of a promise
                var confirmationCb = function (isEventListenerRemoved) {
                    if (isEventListenerRemoved) {
                        _this.bus.off(eventType, listener);
                        cb(null, isEventListenerRemoved);
                    }
                    else {
                        cb(new Error("Unable to remove event listener on Provider"), isEventListenerRemoved);
                    }
                };
                var confirmationPromise = this.send('removeEventListener', { eventType: eventType, removeAll: listener === undefined }, cb ? confirmationCb : undefined);
                if (confirmationPromise) {
                    return confirmationPromise.then(function (isEventListenerRemoved) {
                        _this.bus.off(eventType, listener);
                        return isEventListenerRemoved;
                    });
                }
            }
        };
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=client.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var uid = function () {
    return 'uid' + Date.now().toString(36) + Math.random().toString(36).substr(2);
};
exports.default = uid;
//# sourceMappingURL=uid.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bus_1 = __webpack_require__(4);
exports.ISOCK_ACTION_READY = "IframeSocket::ACTION::READY";
exports.ISOCK_ACTION_CONNECT = "IframeSocket::ACTION::CONNECT";
exports.ISOCK_ACTION_MESSAGE_RECEIVED = "IframeSocket::ACTION::MESSAGE_RECEIVED";
exports.ISOCK_ACTION_EVENT_RECEIVED = "IframeSocket::ACTION::EVENT_RECEIVED";
var IframeSocket = /** @class */ (function () {
    function IframeSocket(port, name) {
        if (name === void 0) { name = 'default'; }
        this.name = 'default';
        this.name = name;
        this.port = port;
        this.bus = new bus_1.default();
        this.port.onmessage = this.onMessage.bind(this);
    }
    IframeSocket.prototype.on = function (action, handler) {
        this.bus.on(action, handler);
    };
    IframeSocket.prototype.off = function (action, handler) {
        this.bus.off(action, handler);
    };
    IframeSocket.prototype.send = function (msg) {
        this.port.postMessage(JSON.stringify(msg));
    };
    IframeSocket.prototype.destroy = function () {
        this.bus.clear();
        this.port.close();
    };
    IframeSocket.prototype.onMessage = function (e) {
        try {
            var msg = JSON.parse(e.data);
            this.trigger(msg.action, msg);
        }
        catch (e) {
            console.log(this.name + " received invalid message:" + e.message, e);
            return;
        }
    };
    IframeSocket.prototype.trigger = function (action, msg) {
        //handle the possible IPM_ACTION_MESSAGE_RECEIVED hooks for any message
        this.bus.trigger(exports.ISOCK_ACTION_MESSAGE_RECEIVED, msg);
        this.bus.trigger(action, msg);
    };
    return IframeSocket;
}());
exports.default = IframeSocket;
//# sourceMappingURL=iframeSocket.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bus = /** @class */ (function () {
    function Bus() {
        this.handlers = {};
    }
    Bus.prototype.on = function (eventName, handler) {
        if (!this.handlers.hasOwnProperty(eventName)) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    };
    Bus.prototype.off = function (eventName, handler) {
        if (this.handlers.hasOwnProperty(eventName) && undefined === handler) {
            this.handlers[eventName] = [];
        }
        else if (this.handlers.hasOwnProperty(eventName)) {
            this.handlers[eventName] = this.handlers[eventName].filter(function (handlerFn) { return handlerFn !== handler; });
        }
    };
    Bus.prototype.trigger = function (eventName, msg) {
        if (this.handlers.hasOwnProperty(eventName) && this.handlers[eventName].length) {
            this.handlers[eventName].forEach(function (handler) {
                handler(msg);
            });
        }
    };
    Bus.prototype.clear = function () {
        this.handlers = {};
    };
    Bus.prototype.listenerCount = function (eventName) {
        if (!this.handlers.hasOwnProperty(eventName)) {
            return 0;
        }
        return this.handlers[eventName].length;
    };
    return Bus;
}());
exports.default = Bus;
//# sourceMappingURL=bus.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uid_1 = __webpack_require__(2);
var iframeSocket_1 = __webpack_require__(3);
var iframeSocket_2 = __webpack_require__(3);
var Provider = /** @class */ (function () {
    function Provider(window, api, bundleUrl) {
        var _this = this;
        if (bundleUrl === void 0) { bundleUrl = null; }
        this.sock = null;
        this.eventProxy = function (ev) {
            _this.sock.send({
                id: uid_1.default(),
                action: iframeSocket_1.ISOCK_ACTION_EVENT_RECEIVED,
                payload: {
                    event: ev
                },
                created: new Date()
            });
        };
        this.window = window;
        this.api = api;
        this.clientOrigin = this.parseOriginFromPluginUrl(bundleUrl || '');
        this.window.top.onmessage = function (e) {
            if (e.origin !== _this.clientOrigin) {
                return;
            }
            try {
                var msg = JSON.parse(e.data);
                if (msg.action === iframeSocket_2.ISOCK_ACTION_CONNECT && e.ports.length && e.ports[0]) {
                    var pluginPort = e.ports[0];
                    _this.sock = new iframeSocket_2.default(pluginPort, 'PROVIDER');
                    _this.setup(_this.sock);
                    _this.sock.send(__assign(__assign({}, msg), { action: iframeSocket_2.ISOCK_ACTION_READY, payload: iframeSocket_2.ISOCK_ACTION_READY, status: 200 }));
                }
            }
            catch (e) {
                console.log("Unable to establish client connection: " + e.message);
            }
        };
    }
    Provider.prototype.setup = function (socket) {
        var _this = this;
        var syncApiHandler = function (msg) {
            _this.sock.send(__assign(__assign({}, msg), { payload: _this.makeSyncCall(msg) }));
        };
        socket.on("getUserName", syncApiHandler);
        socket.on("getUser", syncApiHandler);
        socket.on("getPlugins", syncApiHandler);
        socket.on("getCountries", syncApiHandler);
        socket.on("getAccessToken", syncApiHandler);
        socket.on("getCountry", syncApiHandler);
        socket.on("getEntityId", syncApiHandler);
        socket.on("getMuiTheme", syncApiHandler);
        socket.on("switchPlugin", syncApiHandler);
        socket.on("call", function (msg) {
            _this.makeProxyCall(msg).then(function (result) { return _this.sock.send(__assign(__assign({}, msg), { payload: result })); }).catch(function (e) { return _this.sock.send(__assign(__assign({}, msg), { payload: e.message, status: 500 })); });
        });
        socket.on("addEventListener", function (msg) {
            _this.api.addEventListener(msg.payload.eventType, _this.eventProxy);
            _this.sock.send(__assign(__assign({}, msg), { payload: true }));
        });
        socket.on("removeEventListener", function (msg) {
            _this.api.removeEventListener(msg.payload.eventType, _this.eventProxy);
            _this.sock.send(__assign(__assign({}, msg), { payload: true }));
        });
    };
    Provider.prototype.destroy = function () {
        var _a;
        (_a = this.sock) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    Provider.prototype.makeProxyCall = function (m) {
        var p = m.payload;
        return this.api.call(p.url, p.data || {}, p.method, p.headers || {});
    };
    Provider.prototype.makeSyncCall = function (m) {
        var result = null;
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
            case 'getCountries':
                result = this.api.getCountries();
                break;
            case 'getAccessToken':
                result = this.api.getAccessToken();
                break;
            case 'getCountry':
                result = this.api.getCountry();
                break;
            case 'getEntityId':
                result = this.api.getEntityId();
                break;
            case 'getMuiTheme':
                result = this.api.getMuiTheme();
                break;
            case 'switchPlugin':
                result = this.api.portal.switchPlugin(m.payload.pluginId);
                break;
        }
        return result;
    };
    Provider.prototype.parseOriginFromPluginUrl = function (bundleUrl) {
        var parts = bundleUrl.split('/');
        if (parts.length >= 3) {
            return parts[0] + '//' + parts[2];
        }
        return '';
    };
    return Provider;
}());
exports.default = Provider;
//# sourceMappingURL=provider.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EV_COUNTRY_CHANGE = 'countryChange';
exports.EV_PLUGIN_SWITCH = 'pluginSwitch';
//# sourceMappingURL=types.js.map

/***/ })
/******/ ])["default"];
});