"use strict";
(self["webpackChunktodo_project"] = self["webpackChunktodo_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-family: 'Roboto', sans-serif;
}

.form-container, .container{
    display: flex; 
    justify-content: center; 
    margin-top: 3rem
}

.container {
    flex-direction: column;
    align-items: center;
}

.project-titles-ul {
    list-style: none;
    margin-top: 3rem;
    max-width: 800px;
    width: 80%;
}

.project-titles-ul li {
    border: 1px solid black;
    margin-bottom: 1rem;
    padding: 12px;
    border-radius: 7px;
    box-shadow: 2px 2px 13px -2px rgba(0,0,0,0.42) ;
    background: rgb(255,255,255);
    background: linear-gradient(45deg, rgb(255,255,255) 0%, rgb(0,255,230) 26%, rgb(0,203,202) 100%);
    transition: all 300ms;
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    gap: 16px;
}

.project-titles-ul li span {
    overflow: hidden;
}

.project-titles-ul li:hover {
    transform: scale(1.06);
    cursor: pointer;
}

.forms {
    display: flex; 
    flex-direction: column; 
    background-color: white; 
    gap: 1.2rem; 
    flex-basis: 800px; 
    flex-grow: 0; 
    max-width: 80%
}

.fields {
    display: flex; 
    flex-direction: column; 
    gap: 12px
}

.btn {
    width: max-content;
    align-self: center;
    padding: 10px 8px;
    background-color: rgb(87, 87, 255);
    border-radius: 3px;
    border: none;
    font-weight: bold;
    font-size: medium;
    color: white;
}

.form-btn {
    /* background-color: rgb(0, 255, 0); */
    color: white;
    box-shadow: 8px 10px 25px 0px rgba(0,0,0,0.37);
}

.btn-project-create {
    padding: 20px;
    font-size: larger;
    background-color: green;
    box-shadow: 6px 9px 19px 0px rgba(0,0,0,0.32);
    transition: all 200ms;
}

.btn:hover {
    background-color: rgb(67, 67, 255);
    cursor: pointer;
}

.btn-project-create:hover {
    background-color: rgb(0, 114, 0);
}

.hidden {
    visibility: hidden;
    position: absolute;
}

input {
    height: 2.3rem;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.204);
}

input:focus {
    outline: 2px solid blue;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB;AACJ;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,+CAA+C;IAC/C,4BAA4B;IAC5B,gGAAgG;IAChG,qBAAqB;IACrB,aAAa;IACb,kDAAkD;IAClD,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,kCAAkC;IAClC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,6CAA6C;IAC7C,qBAAqB;AACzB;;AAEA;IACI,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,6CAA6C;AACjD;;AAEA;IACI,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@100;300;400;500;700;900&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.form-container, .container{\r\n    display: flex; \r\n    justify-content: center; \r\n    margin-top: 3rem\r\n}\r\n\r\n.container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.project-titles-ul {\r\n    list-style: none;\r\n    margin-top: 3rem;\r\n    max-width: 800px;\r\n    width: 80%;\r\n}\r\n\r\n.project-titles-ul li {\r\n    border: 1px solid black;\r\n    margin-bottom: 1rem;\r\n    padding: 12px;\r\n    border-radius: 7px;\r\n    box-shadow: 2px 2px 13px -2px rgba(0,0,0,0.42) ;\r\n    background: rgb(255,255,255);\r\n    background: linear-gradient(45deg, rgb(255,255,255) 0%, rgb(0,255,230) 26%, rgb(0,203,202) 100%);\r\n    transition: all 300ms;\r\n    display: grid;\r\n    grid-template-columns: 1fr max-content max-content;\r\n    gap: 16px;\r\n}\r\n\r\n.project-titles-ul li span {\r\n    overflow: hidden;\r\n}\r\n\r\n.project-titles-ul li:hover {\r\n    transform: scale(1.06);\r\n    cursor: pointer;\r\n}\r\n\r\n.forms {\r\n    display: flex; \r\n    flex-direction: column; \r\n    background-color: white; \r\n    gap: 1.2rem; \r\n    flex-basis: 800px; \r\n    flex-grow: 0; \r\n    max-width: 80%\r\n}\r\n\r\n.fields {\r\n    display: flex; \r\n    flex-direction: column; \r\n    gap: 12px\r\n}\r\n\r\n.btn {\r\n    width: max-content;\r\n    align-self: center;\r\n    padding: 10px 8px;\r\n    background-color: rgb(87, 87, 255);\r\n    border-radius: 3px;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    color: white;\r\n}\r\n\r\n.form-btn {\r\n    /* background-color: rgb(0, 255, 0); */\r\n    color: white;\r\n    box-shadow: 8px 10px 25px 0px rgba(0,0,0,0.37);\r\n}\r\n\r\n.btn-project-create {\r\n    padding: 20px;\r\n    font-size: larger;\r\n    background-color: green;\r\n    box-shadow: 6px 9px 19px 0px rgba(0,0,0,0.32);\r\n    transition: all 200ms;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(67, 67, 255);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-project-create:hover {\r\n    background-color: rgb(0, 114, 0);\r\n}\r\n\r\n.hidden {\r\n    visibility: hidden;\r\n    position: absolute;\r\n}\r\n\r\ninput {\r\n    height: 2.3rem;\r\n    font-size: 1.5rem;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.204);\r\n}\r\n\r\ninput:focus {\r\n    outline: 2px solid blue;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Datet.js":
/*!**********************!*\
  !*** ./src/Datet.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurrentDate: () => (/* binding */ getCurrentDate),
/* harmony export */   getCurrentDateAndTime: () => (/* binding */ getCurrentDateAndTime)
/* harmony export */ });
const getDate = () => {
    let date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    return {date_ob, date, month, year}
}

const getCurrentDateAndTime = () => {
    const { date_ob, date, month, year } = getDate()
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    let hours = date_ob.getHours();

    return year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
}

const getCurrentDate = () => {
    const { date, month, year } = getDate()
    return year + "-" + month + "-" + date
}



/***/ }),

/***/ "./src/From.js":
/*!*********************!*\
  !*** ./src/From.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formContainer: () => (/* reexport safe */ _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.formContainer)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/Projects.js");
/* harmony import */ var _ToggleClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleClass */ "./src/ToggleClass.js");



const From = () => {
    const container_div = _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.formContainer.container_div

    const project_from = document.createElement("form")
    project_from.setAttribute('action', '#')
    project_from.classList += "forms"

    createFormElement(project_from, 'Enter title of the project: ', 'title', 'text', true)
    createFormElement(project_from, 'Description of the project: ', 'desc', 'text')
    createFormElement(project_from, 'Last date before submission: ', 'date', 'date', true)

    const submit_button = document.createElement("button")
    submit_button.type = 'submit'
    submit_button.textContent = 'Create project'
    submit_button.classList += "form-btn btn"

    project_from.addEventListener('submit', (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.desc.value
        const dueDate = e.target.date.value
        _Projects__WEBPACK_IMPORTED_MODULE_0__.ProjectList.createAProject({ title, description, dueDate })
        _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.formContainer.toggleForm()
        _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.loadContainer.toggleLoad()
    })

    project_from.appendChild(submit_button)
    container_div.appendChild(project_from)
    document.body.appendChild(container_div)
}

const createFormElement = (form, label_text, label_for, type, required = false) => {
    const field_div = document.createElement('div')
    field_div.classList += `form ${label_for} fields`

    const title_label = document.createElement('label')
    title_label.setAttribute('for', label_for)
    title_label.textContent = label_text
    const title_input = document.createElement('input')
    title_input.autocomplete = 'off'
    title_input.type = type
    title_input.name = label_for
    title_input.id = label_for
    title_input.required = required
    
    field_div.appendChild(title_label)
    field_div.appendChild(title_input)

    form.appendChild(field_div)
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (From);


/***/ }),

/***/ "./src/Icons.js":
/*!**********************!*\
  !*** ./src/Icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_plus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/plus.png */ "./src/icons/plus.png");
/* harmony import */ var _icons_trash_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/trash.png */ "./src/icons/trash.png");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({add_btn: _icons_plus_png__WEBPACK_IMPORTED_MODULE_0__, delete_btn: _icons_trash_png__WEBPACK_IMPORTED_MODULE_1__});

/***/ }),

/***/ "./src/Loadpage.js":
/*!*************************!*\
  !*** ./src/Loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./src/Projects.js");
/* harmony import */ var _ToggleClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleClass */ "./src/ToggleClass.js");
/* harmony import */ var _ProjectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectPage */ "./src/ProjectPage.js");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons */ "./src/Icons.js");





const Loadpage = () => {
    const containerDiv = _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.loadContainer.containerDiv

    const createProjectButton = document.createElement("button")
    createProjectButton.classList += "btn-project-create btn"
    createProjectButton.textContent = "Add a Project"

    const projectsUl = document.createElement("ul")
    projectsUl.classList += "project-titles-ul"
    _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.loadContainer.LoadPorj(ProjectListDom, projectsUl)
    ProjectListDom(projectsUl)
    
    createProjectButton.onclick = () => {
        _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.loadContainer.toggleLoad()
        _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.formContainer.toggleForm()
        ProjectListDom(projectsUl)
    }

    appendChildren(containerDiv, [createProjectButton, projectsUl])
    document.body.appendChild(containerDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

const ProjectListDom = (ul) => {
    ul.innerHTML = ""
    _Projects__WEBPACK_IMPORTED_MODULE_0__.ProjectList.getProjectList().forEach((proj, index) => {
        if (!proj.project.deleted) {
            const element = document.createElement('li')

            const plus_add = document.createElement('img')
            plus_add.src = _Icons__WEBPACK_IMPORTED_MODULE_3__["default"].add_btn
            plus_add.width = 15

            const delete_btn = document.createElement('img')
            delete_btn.src = _Icons__WEBPACK_IMPORTED_MODULE_3__["default"].delete_btn
            delete_btn.width = 15

            const title = document.createElement('span')
            title.innerText = proj.project.title

            element.classList += "project-title-list"
            element.id = proj.project.id

            appendChildren(element, [title, plus_add, delete_btn])
            ul.appendChild(element)

            element.addEventListener('click', (e) => {
                if (e.target === plus_add) {
                    console.log("add")
                }
                
                (0,_ProjectPage__WEBPACK_IMPORTED_MODULE_2__["default"])({ projObj: proj.project, proj })
                _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.singleProjectDisplay.toggleSingleProject()
                _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.loadContainer.toggleLoad()
            })
        }
    })

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loadpage);

/***/ }),

/***/ "./src/ProjectPage.js":
/*!****************************!*\
  !*** ./src/ProjectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ToggleClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleClass */ "./src/ToggleClass.js");


const ProjectPage = ({ projObj, proj }) => {
    const container_div = _ToggleClass__WEBPACK_IMPORTED_MODULE_0__.singleProjectDisplay.container_div
    container_div.innerHTML = ""

    const title = document.createElement('div')
    title.innerText = projObj.title

    const back_btn = document.createElement('button')
    back_btn.type = 'button'
    back_btn.innerText = 'Back'

    const creatTaskBtn = document.createElement('button')
    creatTaskBtn.innerText = 'Add'

    const taskUl = document.createElement('ul')
    showAllTask(projObj, taskUl)

    creatTaskBtn.onclick = () => {
            proj.createTask()
            showAllTask(projObj, taskUl)
    }

    back_btn.onclick = () => {
        _ToggleClass__WEBPACK_IMPORTED_MODULE_0__.singleProjectDisplay.toggleSingleProject()
        _ToggleClass__WEBPACK_IMPORTED_MODULE_0__.loadContainer.toggleLoad()
    }

    appendChildren(container_div, [title, creatTaskBtn, back_btn, taskUl])
    document.body.appendChild(container_div)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

const showAllTask = (proj, ul) => {
    ul.innerHTML = ""
    proj.tasks.forEach((task, index) => {
        const taskLi = document.createElement('li')
        taskLi.innerText = task.getTitle()
        taskLi.id = index
        ul.appendChild(taskLi)
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectPage);

/***/ }),

/***/ "./src/Projects.js":
/*!*************************!*\
  !*** ./src/Projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectList: () => (/* binding */ ProjectList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


const Projects = ({id, title, description, dueDate, deleted = false}) => {
    let project = {
        id: id,
        title: title,
        description: description,
        tasks: [],
        dueDate: dueDate,
        deleted: deleted
    }

    const createTask = () => {
        const taskTitle = prompt("Title of the task")
        const taskDescription = prompt("Descripition of the task")
        const taskPriority = prompt("Priority")
        const task = (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])({ taskTitle, taskDescription, taskPriority })
        project.tasks.push(task)
    }

    return {
        project,
        createTask
    }
}

const ProjectList = (() => {
    let projs = []
    projs.push(Projects({ id: projs.length + 1, title: 'One', description: 'One description', dueDate: '23-4-2023' }))
    projs.push(Projects({ id: projs.length + 1, title: 'Two', description: 'Two description', dueDate: '23-4-2023'}))

    const createAProject = (proj) => {
        const p1 = Projects({ ...proj, id: projs.length + 1 })
        projs.push(p1)
    }

    const getProjectList = () => {
        return projs
    }

    return {
        createAProject,
        getProjectList
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Datet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Datet */ "./src/Datet.js");


const Task = ({ taskTitle, taskDescription, taskPriority }) => {
    
    let task = {
        title: taskTitle,
        description: taskDescription,
        duedate: (0,_Datet__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateAndTime)(),
        priority: taskPriority,
        isComplete: false
    }
    const setTitle = (txt) => {
        task.title = txt
    }

    const getTitle = () => {
        return task.title
    }

    const setDescription = (txt) => {
        task.description = txt
    }

    const getDescription = () => {
        return task.description 
    }

    const getTimeCreated = () => {
        return task.duedate
    }

    const setComplete = () => {
        if (task.isComplete) task.isComplete = false
        else task.isComplete = true
    }

    const getTaskObject = () => {
        return task
    }
    return {
        setTitle,
        getTitle,
        setDescription,
        getDescription,
        getTimeCreated,
        setComplete,
        getTaskObject
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/ToggleClass.js":
/*!****************************!*\
  !*** ./src/ToggleClass.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formContainer: () => (/* binding */ formContainer),
/* harmony export */   loadContainer: () => (/* binding */ loadContainer),
/* harmony export */   singleProjectDisplay: () => (/* binding */ singleProjectDisplay)
/* harmony export */ });
const formContainer = (() => {
    const container_div = document.createElement("div")
    container_div.classList += "form-container hidden"

    const toggleForm = () => {
        container_div.classList.toggle("hidden")
    }

    return {
        container_div,
        toggleForm
    }
})()

const loadContainer = (() => {
    const containerDiv = document.createElement("div")
    containerDiv.classList += "container"
    let loadproj, projectUl

    const LoadPorj = (l, projectUlParam) => {
        loadproj = l
        projectUl = projectUlParam
    }

    const toggleLoad = () => {
        containerDiv.classList.toggle("hidden")
        loadproj(projectUl)
    }

    return {
        containerDiv,
        toggleLoad,
        LoadPorj
    }
})()

const singleProjectDisplay = (() => {
    const container_div = document.createElement("div")
    container_div.classList += "hidden"

    const toggleSingleProject = () => {
        container_div.classList.toggle("hidden")
    }

    return {
        container_div,
        toggleSingleProject
    }
})()



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects */ "./src/Projects.js");
/* harmony import */ var _Loadpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loadpage */ "./src/Loadpage.js");
/* harmony import */ var _From__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./From */ "./src/From.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const index = () => {
    (0,_Loadpage__WEBPACK_IMPORTED_MODULE_2__["default"])()
    ;(0,_From__WEBPACK_IMPORTED_MODULE_3__["default"])()
}

index()



/***/ }),

/***/ "./src/icons/plus.png":
/*!****************************!*\
  !*** ./src/icons/plus.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "475deb18e75637a67601.png";

/***/ }),

/***/ "./src/icons/trash.png":
/*!*****************************!*\
  !*** ./src/icons/trash.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "978f05115d90b3b95d55.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDbERmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR5QjtBQUNRO0FBQ0E7QUFDUjtBQUNMO0FBQ3BCO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1osSUFBSSxrREFBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9EYXRldC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvRnJvbS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvSWNvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL0xvYWRwYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Qcm9qZWN0UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL1RvZ2dsZUNsYXNzLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hcmNlbGx1cyZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyLCAuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZXMtdWwgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTNweCAtMnB4IHJnYmEoMCwwLDAsMC40MikgO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI1NSwyNTUsMjU1KSAwJSwgcmdiKDAsMjU1LDIzMCkgMjYlLCByZ2IoMCwyMDMsMjAyKSAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGVzLXVsIGxpIHNwYW4ge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGVzLXVsIGxpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gICAgZ2FwOiAxLjJyZW07IFxyXG4gICAgZmxleC1iYXNpczogODAwcHg7IFxyXG4gICAgZmxleC1ncm93OiAwOyBcclxuICAgIG1heC13aWR0aDogODAlXHJcbn1cclxuXHJcbi5maWVsZHMge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGdhcDogMTJweFxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWJ0biB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAwKTsgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDI1cHggMHB4IHJnYmEoMCwwLDAsMC4zNyk7XHJcbn1cclxuXHJcbi5idG4tcHJvamVjdC1jcmVhdGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3gtc2hhZG93OiA2cHggOXB4IDE5cHggMHB4IHJnYmEoMCwwLDAsMC4zMik7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NywgMjU1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ0bi1wcm9qZWN0LWNyZWF0ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTE0LCAwKTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGhlaWdodDogMi4zcmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIwNCk7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCBibHVlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyw0QkFBNEI7SUFDNUIsZ0dBQWdHO0lBQ2hHLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hcmNlbGx1cyZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyLCAuY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZXMtdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZXMtdWwgbGkge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMTJweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEzcHggLTJweCByZ2JhKDAsMCwwLDAuNDIpIDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoMjU1LDI1NSwyNTUpIDAlLCByZ2IoMCwyNTUsMjMwKSAyNiUsIHJnYigwLDIwMywyMDIpIDEwMCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IG1heC1jb250ZW50O1xcclxcbiAgICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlcy11bCBsaSBzcGFuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGVzLXVsIGxpOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXHJcXG4gICAgZ2FwOiAxLjJyZW07IFxcclxcbiAgICBmbGV4LWJhc2lzOiA4MDBweDsgXFxyXFxuICAgIGZsZXgtZ3JvdzogMDsgXFxyXFxuICAgIG1heC13aWR0aDogODAlXFxyXFxufVxcclxcblxcclxcbi5maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGdhcDogMTJweFxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDg3LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ0biB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDApOyAqL1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDI1cHggMHB4IHJnYmEoMCwwLDAsMC4zNyk7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJvamVjdC1jcmVhdGUge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDZweCA5cHggMTlweCAwcHggcmdiYSgwLDAsMCwwLjMyKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NywgMjU1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByb2plY3QtY3JlYXRlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExNCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjA0KTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmx1ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0ZV9vYiA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXRlID0gKFwiMFwiICsgZGF0ZV9vYi5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChkYXRlX29iLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlX29iLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIHtkYXRlX29iLCBkYXRlLCBtb250aCwgeWVhcn1cclxufVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudERhdGVBbmRUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlX29iLCBkYXRlLCBtb250aCwgeWVhciB9ID0gZ2V0RGF0ZSgpXHJcbiAgICBsZXQgbWludXRlcyA9IGRhdGVfb2IuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBkYXRlX29iLmdldFNlY29uZHMoKTtcclxuICAgIGxldCBob3VycyA9IGRhdGVfb2IuZ2V0SG91cnMoKTtcclxuXHJcbiAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGUgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzXHJcbn1cclxuXHJcbmNvbnN0IGdldEN1cnJlbnREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlLCBtb250aCwgeWVhciB9ID0gZ2V0RGF0ZSgpXHJcbiAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGVcclxufVxyXG5cclxuZXhwb3J0IHtnZXRDdXJyZW50RGF0ZSwgZ2V0Q3VycmVudERhdGVBbmRUaW1lfSIsImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9Qcm9qZWN0cydcclxuaW1wb3J0IHsgZm9ybUNvbnRhaW5lciwgbG9hZENvbnRhaW5lciB9IGZyb20gJy4vVG9nZ2xlQ2xhc3MnXHJcblxyXG5jb25zdCBGcm9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyX2RpdiA9IGZvcm1Db250YWluZXIuY29udGFpbmVyX2RpdlxyXG5cclxuICAgIGNvbnN0IHByb2plY3RfZnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBwcm9qZWN0X2Zyb20uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpXHJcbiAgICBwcm9qZWN0X2Zyb20uY2xhc3NMaXN0ICs9IFwiZm9ybXNcIlxyXG5cclxuICAgIGNyZWF0ZUZvcm1FbGVtZW50KHByb2plY3RfZnJvbSwgJ0VudGVyIHRpdGxlIG9mIHRoZSBwcm9qZWN0OiAnLCAndGl0bGUnLCAndGV4dCcsIHRydWUpXHJcbiAgICBjcmVhdGVGb3JtRWxlbWVudChwcm9qZWN0X2Zyb20sICdEZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdDogJywgJ2Rlc2MnLCAndGV4dCcpXHJcbiAgICBjcmVhdGVGb3JtRWxlbWVudChwcm9qZWN0X2Zyb20sICdMYXN0IGRhdGUgYmVmb3JlIHN1Ym1pc3Npb246ICcsICdkYXRlJywgJ2RhdGUnLCB0cnVlKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBzdWJtaXRfYnV0dG9uLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgc3VibWl0X2J1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgcHJvamVjdCdcclxuICAgIHN1Ym1pdF9idXR0b24uY2xhc3NMaXN0ICs9IFwiZm9ybS1idG4gYnRuXCJcclxuXHJcbiAgICBwcm9qZWN0X2Zyb20uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnRpdGxlLnZhbHVlXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlLnRhcmdldC5kZXNjLnZhbHVlXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGUudGFyZ2V0LmRhdGUudmFsdWVcclxuICAgICAgICBQcm9qZWN0TGlzdC5jcmVhdGVBUHJvamVjdCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9KVxyXG4gICAgICAgIGZvcm1Db250YWluZXIudG9nZ2xlRm9ybSgpXHJcbiAgICAgICAgbG9hZENvbnRhaW5lci50b2dnbGVMb2FkKClcclxuICAgIH0pXHJcblxyXG4gICAgcHJvamVjdF9mcm9tLmFwcGVuZENoaWxkKHN1Ym1pdF9idXR0b24pXHJcbiAgICBjb250YWluZXJfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfZnJvbSlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyX2RpdilcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRm9ybUVsZW1lbnQgPSAoZm9ybSwgbGFiZWxfdGV4dCwgbGFiZWxfZm9yLCB0eXBlLCByZXF1aXJlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZmllbGRfZGl2LmNsYXNzTGlzdCArPSBgZm9ybSAke2xhYmVsX2Zvcn0gZmllbGRzYFxyXG5cclxuICAgIGNvbnN0IHRpdGxlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgdGl0bGVfbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBsYWJlbF9mb3IpXHJcbiAgICB0aXRsZV9sYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsX3RleHRcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGl0bGVfaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZidcclxuICAgIHRpdGxlX2lucHV0LnR5cGUgPSB0eXBlXHJcbiAgICB0aXRsZV9pbnB1dC5uYW1lID0gbGFiZWxfZm9yXHJcbiAgICB0aXRsZV9pbnB1dC5pZCA9IGxhYmVsX2ZvclxyXG4gICAgdGl0bGVfaW5wdXQucmVxdWlyZWQgPSByZXF1aXJlZFxyXG4gICAgXHJcbiAgICBmaWVsZF9kaXYuYXBwZW5kQ2hpbGQodGl0bGVfbGFiZWwpXHJcbiAgICBmaWVsZF9kaXYuYXBwZW5kQ2hpbGQodGl0bGVfaW5wdXQpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZF9kaXYpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcm9tXHJcbmV4cG9ydCB7Zm9ybUNvbnRhaW5lcn0iLCJpbXBvcnQgYWRkX2J0biBmcm9tICcuL2ljb25zL3BsdXMucG5nJ1xyXG5pbXBvcnQgZGVsZXRlX2J0biBmcm9tICcuL2ljb25zL3RyYXNoLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHthZGRfYnRuLCBkZWxldGVfYnRufSIsImltcG9ydCB7IFByb2plY3RzLCBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL1Byb2plY3RzXCJcclxuaW1wb3J0IHsgZm9ybUNvbnRhaW5lciwgbG9hZENvbnRhaW5lciwgc2luZ2xlUHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9Ub2dnbGVDbGFzc1wiXHJcbmltcG9ydCBQcm9qZWN0UGFnZSBmcm9tIFwiLi9Qcm9qZWN0UGFnZVwiXHJcbmltcG9ydCBJY29ucyBmcm9tICcuL0ljb25zJ1xyXG5cclxuY29uc3QgTG9hZHBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBsb2FkQ29udGFpbmVyLmNvbnRhaW5lckRpdlxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdCArPSBcImJ0bi1wcm9qZWN0LWNyZWF0ZSBidG5cIlxyXG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGEgUHJvamVjdFwiXHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG4gICAgcHJvamVjdHNVbC5jbGFzc0xpc3QgKz0gXCJwcm9qZWN0LXRpdGxlcy11bFwiXHJcbiAgICBsb2FkQ29udGFpbmVyLkxvYWRQb3JqKFByb2plY3RMaXN0RG9tLCBwcm9qZWN0c1VsKVxyXG4gICAgUHJvamVjdExpc3REb20ocHJvamVjdHNVbClcclxuICAgIFxyXG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxvYWRDb250YWluZXIudG9nZ2xlTG9hZCgpXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci50b2dnbGVGb3JtKClcclxuICAgICAgICBQcm9qZWN0TGlzdERvbShwcm9qZWN0c1VsKVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lckRpdiwgW2NyZWF0ZVByb2plY3RCdXR0b24sIHByb2plY3RzVWxdKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpXHJcbn1cclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudERvbSwgY2hpbGREb21zKSA9PiB7XHJcbiAgICBjaGlsZERvbXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGNoaWxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RMaXN0RG9tID0gKHVsKSA9PiB7XHJcbiAgICB1bC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBQcm9qZWN0TGlzdC5nZXRQcm9qZWN0TGlzdCgpLmZvckVhY2goKHByb2osIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9qLnByb2plY3QuZGVsZXRlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGx1c19hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBwbHVzX2FkZC5zcmMgPSBJY29ucy5hZGRfYnRuXHJcbiAgICAgICAgICAgIHBsdXNfYWRkLndpZHRoID0gMTVcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBkZWxldGVfYnRuLnNyYyA9IEljb25zLmRlbGV0ZV9idG5cclxuICAgICAgICAgICAgZGVsZXRlX2J0bi53aWR0aCA9IDE1XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qLnByb2plY3QudGl0bGVcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICs9IFwicHJvamVjdC10aXRsZS1saXN0XCJcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IHByb2oucHJvamVjdC5pZFxyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCwgW3RpdGxlLCBwbHVzX2FkZCwgZGVsZXRlX2J0bl0pXHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcGx1c19hZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0UGFnZSh7IHByb2pPYmo6IHByb2oucHJvamVjdCwgcHJvaiB9KVxyXG4gICAgICAgICAgICAgICAgc2luZ2xlUHJvamVjdERpc3BsYXkudG9nZ2xlU2luZ2xlUHJvamVjdCgpXHJcbiAgICAgICAgICAgICAgICBsb2FkQ29udGFpbmVyLnRvZ2dsZUxvYWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkcGFnZSIsImltcG9ydCB7IGxvYWRDb250YWluZXIsIHNpbmdsZVByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vVG9nZ2xlQ2xhc3NcIlxyXG5cclxuY29uc3QgUHJvamVjdFBhZ2UgPSAoeyBwcm9qT2JqLCBwcm9qIH0pID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcl9kaXYgPSBzaW5nbGVQcm9qZWN0RGlzcGxheS5jb250YWluZXJfZGl2XHJcbiAgICBjb250YWluZXJfZGl2LmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qT2JqLnRpdGxlXHJcblxyXG4gICAgY29uc3QgYmFja19idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgYmFja19idG4udHlwZSA9ICdidXR0b24nXHJcbiAgICBiYWNrX2J0bi5pbm5lclRleHQgPSAnQmFjaydcclxuXHJcbiAgICBjb25zdCBjcmVhdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY3JlYXRUYXNrQnRuLmlubmVyVGV4dCA9ICdBZGQnXHJcblxyXG4gICAgY29uc3QgdGFza1VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgc2hvd0FsbFRhc2socHJvak9iaiwgdGFza1VsKVxyXG5cclxuICAgIGNyZWF0VGFza0J0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qLmNyZWF0ZVRhc2soKVxyXG4gICAgICAgICAgICBzaG93QWxsVGFzayhwcm9qT2JqLCB0YXNrVWwpXHJcbiAgICB9XHJcblxyXG4gICAgYmFja19idG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaW5nbGVQcm9qZWN0RGlzcGxheS50b2dnbGVTaW5nbGVQcm9qZWN0KClcclxuICAgICAgICBsb2FkQ29udGFpbmVyLnRvZ2dsZUxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lcl9kaXYsIFt0aXRsZSwgY3JlYXRUYXNrQnRuLCBiYWNrX2J0biwgdGFza1VsXSlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyX2RpdilcclxufVxyXG5cclxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50RG9tLCBjaGlsZERvbXMpID0+IHtcclxuICAgIGNoaWxkRG9tcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBwYXJlbnREb20uYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3Qgc2hvd0FsbFRhc2sgPSAocHJvaiwgdWwpID0+IHtcclxuICAgIHVsLmlubmVySFRNTCA9IFwiXCJcclxuICAgIHByb2oudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgdGFza0xpLmlubmVyVGV4dCA9IHRhc2suZ2V0VGl0bGUoKVxyXG4gICAgICAgIHRhc2tMaS5pZCA9IGluZGV4XHJcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQodGFza0xpKVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhZ2UiLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICh7aWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZGVsZXRlZCA9IGZhbHNlfSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3QgPSB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgdGFza3M6IFtdLFxyXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXHJcbiAgICAgICAgZGVsZXRlZDogZGVsZXRlZFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gcHJvbXB0KFwiVGl0bGUgb2YgdGhlIHRhc2tcIilcclxuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBwcm9tcHQoXCJEZXNjcmlwaXRpb24gb2YgdGhlIHRhc2tcIilcclxuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBwcm9tcHQoXCJQcmlvcml0eVwiKVxyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrKHsgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tQcmlvcml0eSB9KVxyXG4gICAgICAgIHByb2plY3QudGFza3MucHVzaCh0YXNrKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvamVjdCxcclxuICAgICAgICBjcmVhdGVUYXNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RMaXN0ID0gKCgpID0+IHtcclxuICAgIGxldCBwcm9qcyA9IFtdXHJcbiAgICBwcm9qcy5wdXNoKFByb2plY3RzKHsgaWQ6IHByb2pzLmxlbmd0aCArIDEsIHRpdGxlOiAnT25lJywgZGVzY3JpcHRpb246ICdPbmUgZGVzY3JpcHRpb24nLCBkdWVEYXRlOiAnMjMtNC0yMDIzJyB9KSlcclxuICAgIHByb2pzLnB1c2goUHJvamVjdHMoeyBpZDogcHJvanMubGVuZ3RoICsgMSwgdGl0bGU6ICdUd28nLCBkZXNjcmlwdGlvbjogJ1R3byBkZXNjcmlwdGlvbicsIGR1ZURhdGU6ICcyMy00LTIwMjMnfSkpXHJcblxyXG4gICAgY29uc3QgY3JlYXRlQVByb2plY3QgPSAocHJvaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHAxID0gUHJvamVjdHMoeyAuLi5wcm9qLCBpZDogcHJvanMubGVuZ3RoICsgMSB9KVxyXG4gICAgICAgIHByb2pzLnB1c2gocDEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2pzXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVBUHJvamVjdCxcclxuICAgICAgICBnZXRQcm9qZWN0TGlzdFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xyXG5leHBvcnQge1Byb2plY3RMaXN0fSIsImltcG9ydCB7IGdldEN1cnJlbnREYXRlLCBnZXRDdXJyZW50RGF0ZUFuZFRpbWUgfSBmcm9tIFwiLi9EYXRldFwiXHJcblxyXG5jb25zdCBUYXNrID0gKHsgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tQcmlvcml0eSB9KSA9PiB7XHJcbiAgICBcclxuICAgIGxldCB0YXNrID0ge1xyXG4gICAgICAgIHRpdGxlOiB0YXNrVGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcclxuICAgICAgICBkdWVkYXRlOiBnZXRDdXJyZW50RGF0ZUFuZFRpbWUoKSxcclxuICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LFxyXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRUaXRsZSA9ICh0eHQpID0+IHtcclxuICAgICAgICB0YXNrLnRpdGxlID0gdHh0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sudGl0bGVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9ICh0eHQpID0+IHtcclxuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gdHh0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2suZGVzY3JpcHRpb24gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGltZUNyZWF0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2suZHVlZGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUpIHRhc2suaXNDb21wbGV0ZSA9IGZhbHNlXHJcbiAgICAgICAgZWxzZSB0YXNrLmlzQ29tcGxldGUgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGFza09iamVjdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFza1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRUaXRsZSxcclxuICAgICAgICBnZXRUaXRsZSxcclxuICAgICAgICBzZXREZXNjcmlwdGlvbixcclxuICAgICAgICBnZXREZXNjcmlwdGlvbixcclxuICAgICAgICBnZXRUaW1lQ3JlYXRlZCxcclxuICAgICAgICBzZXRDb21wbGV0ZSxcclxuICAgICAgICBnZXRUYXNrT2JqZWN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2siLCJjb25zdCBmb3JtQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdCArPSBcImZvcm0tY29udGFpbmVyIGhpZGRlblwiXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRhaW5lcl9kaXYsXHJcbiAgICAgICAgdG9nZ2xlRm9ybVxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5jb25zdCBsb2FkQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QgKz0gXCJjb250YWluZXJcIlxyXG4gICAgbGV0IGxvYWRwcm9qLCBwcm9qZWN0VWxcclxuXHJcbiAgICBjb25zdCBMb2FkUG9yaiA9IChsLCBwcm9qZWN0VWxQYXJhbSkgPT4ge1xyXG4gICAgICAgIGxvYWRwcm9qID0gbFxyXG4gICAgICAgIHByb2plY3RVbCA9IHByb2plY3RVbFBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxyXG4gICAgICAgIGxvYWRwcm9qKHByb2plY3RVbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRhaW5lckRpdixcclxuICAgICAgICB0b2dnbGVMb2FkLFxyXG4gICAgICAgIExvYWRQb3JqXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmNvbnN0IHNpbmdsZVByb2plY3REaXNwbGF5ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdCArPSBcImhpZGRlblwiXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU2luZ2xlUHJvamVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRhaW5lcl9kaXYsXHJcbiAgICAgICAgdG9nZ2xlU2luZ2xlUHJvamVjdFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQge2Zvcm1Db250YWluZXIsIGxvYWRDb250YWluZXIsIHNpbmdsZVByb2plY3REaXNwbGF5fSIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4vUHJvamVjdHMnXHJcbmltcG9ydCBMb2FkcGFnZSBmcm9tICcuL0xvYWRwYWdlJ1xyXG5pbXBvcnQgRnJvbSBmcm9tICcuL0Zyb20nXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICAgIExvYWRwYWdlKClcclxuICAgIEZyb20oKVxyXG59XHJcblxyXG5pbmRleCgpXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=