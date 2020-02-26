(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myLib"] = factory(require("vue"));
	else
		root["myLib"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "d538");
/******/ })
/************************************************************************/
/******/ ({

/***/ "034f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("311a");
/* harmony import */ var _config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "11c1":
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__("c437");
var v4 = __webpack_require__("c64e");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "2366":
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
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "311a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9119");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("79cd").default
var update = add("222e9024", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4805":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b86f");
/* harmony import */ var _config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_config_yarn_global_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_config_yarn_global_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_config_yarn_global_node_modules_vue_loader_lib_loaders_stylePostLoader_js_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_config_yarn_global_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_config_yarn_global_node_modules_cache_loader_dist_cjs_js_ref_0_0_config_yarn_global_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_b9167eee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5d0a":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "79cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "9119":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("d92c");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b86f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f7d8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("79cd").default
var update = add("552c0858", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "c437":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("e1f4");
var bytesToUuid = __webpack_require__("2366");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "c64e":
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__("e1f4");
var bytesToUuid = __webpack_require__("2366");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "cf05":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.82b9c7a5.png";

/***/ }),

/***/ "d538":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("5d0a")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ae498a4-vue-loader-template"}!../.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!../.config/yarn/global/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=6b4398e6&
var Appvue_type_template_id_6b4398e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('img',{attrs:{"alt":"Vue logo","src":__webpack_require__("cf05")}}),_c('HelloWorld',{on:{"msg":function($event){return _vm.sdk.getUserName()}}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=6b4398e6&

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4ae498a4-vue-loader-template"}!../.config/yarn/global/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!../.config/yarn/global/node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true&
var HelloWorldvue_type_template_id_b9167eee_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._m(0),_c('h3',[_vm._v("Installed CLI Plugins")]),_vm._m(1),_c('h3',[_vm._v("Essential Links")]),_vm._m(2),_c('h3',[_vm._v("Ecosystem")]),_vm._m(3)])}
var HelloWorldvue_type_template_id_b9167eee_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(" For a guide and recipes on how to configure / customize this project,"),_c('br'),_vm._v(" check out the "),_c('a',{attrs:{"href":"https://cli.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-cli documentation")]),_vm._v(". ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel","target":"_blank","rel":"noopener"}},[_vm._v("babel")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint","target":"_blank","rel":"noopener"}},[_vm._v("eslint")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Core Docs")])]),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Forum")])]),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("Community Chat")])]),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank","rel":"noopener"}},[_vm._v("Twitter")])]),_c('li',[_c('a',{attrs:{"href":"https://news.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("News")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://router.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-router")])]),_c('li',[_c('a',{attrs:{"href":"https://vuex.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vuex")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/vue-devtools#vue-devtools","target":"_blank","rel":"noopener"}},[_vm._v("vue-devtools")])]),_c('li',[_c('a',{attrs:{"href":"https://vue-loader.vuejs.org","target":"_blank","rel":"noopener"}},[_vm._v("vue-loader")])]),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank","rel":"noopener"}},[_vm._v("awesome-vue")])])])}]


// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=b9167eee&scoped=true&

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/thread-loader/dist/cjs.js!../.config/yarn/global/node_modules/babel-loader/lib??ref--12-1!../.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!../.config/yarn/global/node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
  name: 'HelloWorld',
  props: {
    msg: String
  }
});
// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&id=b9167eee&scoped=true&lang=css&
var HelloWorldvue_type_style_index_0_id_b9167eee_scoped_true_lang_css_ = __webpack_require__("4805");

// CONCATENATED MODULE: ../.config/yarn/global/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/HelloWorld.vue






/* normalize component */

var component = normalizeComponent(
  components_HelloWorldvue_type_script_lang_js_,
  HelloWorldvue_type_template_id_b9167eee_scoped_true_render,
  HelloWorldvue_type_template_id_b9167eee_scoped_true_staticRenderFns,
  false,
  null,
  "b9167eee",
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
// CONCATENATED MODULE: ../.config/yarn/global/node_modules/thread-loader/dist/cjs.js!../.config/yarn/global/node_modules/babel-loader/lib??ref--12-1!../.config/yarn/global/node_modules/cache-loader/dist/cjs.js??ref--0-0!../.config/yarn/global/node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  props: {
    sdk: {
      type: Object,
      required: true
    }
  },
  components: {
    HelloWorld: HelloWorld
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&
var Appvue_type_style_index_0_lang_css_ = __webpack_require__("034f");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_6b4398e6_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/@deliveryhero/opsportal/dist/esm/iframe-sock/iframeSocket.js
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
        }
        else if (this.messageHandlers.hasOwnProperty(action)) {
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
        }
        catch (e) {
            console.log(this.name + " received invalid message:" + e.message, e);
            return;
        }
    }
    trigger(action, msg) {
        //handle the possible IPM_ACTION_MESSAGE_RECEIVED hooks for any message
        if (this.messageHandlers.hasOwnProperty(ISOCK_ACTION_MESSAGE_RECEIVED) && this.messageHandlers[ISOCK_ACTION_MESSAGE_RECEIVED].length) {
            this.messageHandlers[ISOCK_ACTION_MESSAGE_RECEIVED].forEach(handler => {
                handler(msg, (m) => this.send(m));
            });
        }
        //handle the action hooks
        if (this.messageHandlers.hasOwnProperty(action) && this.messageHandlers[action].length) {
            this.messageHandlers[action].forEach(handler => {
                handler(msg, (m) => this.send(m));
            });
        }
    }
}
//# sourceMappingURL=iframeSocket.js.map
// CONCATENATED MODULE: ./node_modules/@deliveryhero/opsportal/dist/esm/iframe/provider.js

class provider_Provider {
    constructor(window, api, bundleUrl = null) {
        this.sock = null;
        this.window = window;
        this.api = api;
        this.clientOrigin = this.parseOriginFromPluginUrl(bundleUrl || '');
        this.window.top.onmessage = (e) => {
            if (e.origin !== this.clientOrigin) {
                return;
            }
            try {
                const msg = JSON.parse(e.data);
                if (msg.action === ISOCK_ACTION_CONNECT && e.ports.length && e.ports[0]) {
                    const pluginPort = e.ports[0];
                    this.sock = new IframeSocket(pluginPort, 'PROVIDER');
                    this.setup(this.sock);
                    this.sock.send(Object.assign(Object.assign({}, msg), { action: ISOCK_ACTION_READY, payload: ISOCK_ACTION_READY, status: 200 }));
                }
            }
            catch (e) {
                console.log("Unable to establish client connection: " + e.message);
            }
        };
    }
    setup(socket) {
        const syncApiHandler = (msg, reply) => {
            reply(Object.assign(Object.assign({}, msg), { payload: this.makeSyncCall(msg) }));
        };
        socket.on("getUserName", syncApiHandler);
        socket.on("getUser", syncApiHandler);
        socket.on("getPlugins", syncApiHandler);
        socket.on("getCountries", syncApiHandler);
        socket.on("getAccessToken", syncApiHandler);
        socket.on("switchPlugin", syncApiHandler);
        socket.on("call", (msg, reply) => {
            this.makeProxyCall(msg).then(result => reply(Object.assign(Object.assign({}, msg), { payload: result }))).catch((e) => reply(Object.assign(Object.assign({}, msg), { payload: e.message, status: 500 })));
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
            case 'getCountries':
                result = this.api.getCountries();
                break;
            case 'getAccessToken':
                result = this.api.getAccessToken();
                break;
            case 'switchPlugin':
                result = this.api.portal.switchPlugin(m.payload.pluginId);
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
//# sourceMappingURL=provider.js.map
// EXTERNAL MODULE: ./node_modules/uuid/index.js
var uuid = __webpack_require__("11c1");
var uuid_default = /*#__PURE__*/__webpack_require__.n(uuid);

// CONCATENATED MODULE: ./node_modules/@deliveryhero/opsportal/dist/esm/iframe/client.js


const TIMEOUT_LIMIT = 15000;
class client_Client {
    constructor(portalUrl, win = window.top, channel = new MessageChannel()) {
        this.topWindow = win;
        this.portalUrl = portalUrl;
        this.promiseQueue = {};
        this.channel = channel;
        this.port = this.channel.port1;
        this.sock = new IframeSocket(this.port, 'CLIENT');
    }
    init(cb) {
        this.sock.on(ISOCK_ACTION_MESSAGE_RECEIVED, this.onMessageReturn.bind(this));
        const p = new Promise((resolve, reject) => {
            //once we get the READY back from the Provider resolve the promise with the IOpsSdkAsync sdk object
            this.sock.on(ISOCK_ACTION_READY, () => resolve(this.getSdk()));
            //initiate a connection with the provider, and transfer the other port of the message channel to the Provider in the main window
            this.topWindow.postMessage(JSON.stringify({ action: ISOCK_ACTION_CONNECT }), this.portalUrl, [this.channel.port2]);
            //reject promise if not resolved before timing out
            setTimeout(() => reject("CLIENT TIMED OUT WHILE ESTABLISHING CONNECTION"), TIMEOUT_LIMIT);
        });
        if (cb) {
            p.then((sdk) => cb(null, sdk)).catch(e => cb(e));
        }
        else {
            return p;
        }
    }
    onMessageReturn(msg) {
        if (this.promiseQueue.hasOwnProperty(msg.id)) {
            this.promiseQueue[msg.id].resolve(msg.payload);
            delete this.promiseQueue[msg.id];
        }
    }
    send(action, payload = null, cb) {
        const id = uuid_default()();
        const message = { id, action, payload, created: new Date() };
        const p = new Promise((resolveFn, rejectFn) => {
            this.promiseQueue[id] = {
                resolve: resolveFn,
                reject: rejectFn
            };
            this.port.postMessage(JSON.stringify(message));
            setTimeout(() => rejectFn(new Error('CLIENT TIMED OUT FOR MSG ID: ' + id)), TIMEOUT_LIMIT);
        });
        if (cb) {
            p.then((result) => cb(null, result)).catch(e => cb(e));
        }
        else {
            return p;
        }
    }
    getSdk() {
        return {
            getUserName: (cb) => this.send('getUserName', null, cb),
            getUser: (cb) => this.send('getUser', null, cb),
            getPlugins: (cb) => this.send('getPlugins', null, cb),
            getCountries: (cb) => this.send('getCountries', null, cb),
            getAccessToken: (cb) => this.send('getAccessToken', null, cb),
            call: (opt, cb) => {
                const message = {
                    url: opt.url,
                    data: opt.data,
                    headers: opt.headers || {},
                    method: opt.method || "GET"
                };
                return this.send('call', message, cb);
            },
            portal: {
                switchPlugin: (id, cb) => this.send('switchPlugin', { pluginId: id }, cb)
            }
        };
    }
}
//# sourceMappingURL=client.js.map
// CONCATENATED MODULE: ./node_modules/@deliveryhero/opsportal/dist/esm/index.js


const SDK_WINDOW_GLOBAL_NAME = 'OpsPortalApi';
const getOpsSdkGlobal = function (win = window) {
    if (win[SDK_WINDOW_GLOBAL_NAME]) {
        return win[SDK_WINDOW_GLOBAL_NAME];
    }
    throw new Error('Cannot get instance of OPS Portal Api from the window');
};

/* harmony default export */ var esm = (client_Client);
//# sourceMappingURL=index.js.map
// CONCATENATED MODULE: ./src/main.js




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;


var main_StandaloneVuePlugin =
/*#__PURE__*/
function () {
  function StandaloneVuePlugin() {
    _classCallCheck(this, StandaloneVuePlugin);
  }

  _createClass(StandaloneVuePlugin, [{
    key: "getPluginId",
    value: function getPluginId() {
      return 'standalone-vue';
    }
    /**
     * getPluginComponent() - for plugins of type `internal`
     */

  }, {
    key: "getPluginComponent",
    value: function getPluginComponent() {
      return null;
    }
    /**
     * attachPluginToNode() - for plugins of type `standalone`
     */

  }, {
    key: "attachPluginToNode",
    value: function attachPluginToNode(node) {
      var sdk = getOpsSdkGlobal();
      console.log("SDK", sdk);
      new external_commonjs_vue_commonjs2_vue_root_Vue_default.a({
        render: function render(h) {
          return h(App);
        },
        propsData: {
          sdk: sdk
        }
      }).$mount(node);
    }
  }]);

  return StandaloneVuePlugin;
}();


// CONCATENATED MODULE: ../.config/yarn/global/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main_StandaloneVuePlugin);



/***/ }),

/***/ "d92c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "e1f4":
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

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

/***/ "f7d8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("d92c");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "h3[data-v-b9167eee]{margin:40px 0 0}ul[data-v-b9167eee]{list-style-type:none;padding:0}li[data-v-b9167eee]{display:inline-block;margin:0 10px}a[data-v-b9167eee]{color:#42b983}", ""]);
// Exports
module.exports = exports;


/***/ })

/******/ });
});
//# sourceMappingURL=myLib.umd.js.map