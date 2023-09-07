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

.project-titles-ul, ul {
    list-style: none;
    margin-top: 3rem;
    max-width: 800px;
    width: 80%;
}

.project-titles-ul li, li {
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

.task-ul .task-li {
    background: white;
}

.project-titles-ul li span {
    overflow: hidden;
}

.project-titles-ul li:hover {
    transform: scale(1.06);
    cursor: pointer;
}

.header {
    font-size: xx-large;
    align-self: flex-start;
    margin-left: 2rem;
    border-bottom: 2px solid black;
    width: calc(100% - 4rem);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.date {
    font-size: large;
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
}

.modal {
    width: 500px;
    height: 500px;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    top: 20%;
    left: calc(50% - 250px);
    border-radius: 15px;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: max-content 1fr max-content;
}

.close-modal {
    width: 2rem;
    border-radius: 15px;
}

.back {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.34);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}

.task-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 12px;
    margin-bottom: 12px;
}

.task-main {
    padding: 0 15px;
    border-bottom: 1px solid black;
    margin-bottom: 12px;
}

.task-main p {
    font-style: italic;
}

.task-main .description-task {
    font-size: larger;
    font-style: normal;
}

.complete-btn {
    background-color: rgb(0, 219, 0);
}

.complete-btn:hover {
    background-color: rgb(0, 195, 0);
}

.close-modal {
    background-color: red;
}

.close-modal:hover {
    background-color: rgb(206, 0, 0);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB;AACJ;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,+CAA+C;IAC/C,4BAA4B;IAC5B,gGAAgG;IAChG,qBAAqB;IACrB,aAAa;IACb,kDAAkD;IAClD,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,iBAAiB;IACjB,8BAA8B;IAC9B,wBAAwB;IACxB,aAAa;IACb,qBAAqB;IACrB,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB;AACJ;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,kCAAkC;IAClC,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,6CAA6C;IAC7C,qBAAqB;AACzB;;AAEA;IACI,kCAAkC;IAClC,eAAe;AACnB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,6CAA6C;AACjD;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,wBAAwB;IACxB,+CAA+C;AACnD;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,qCAAqC;IACrC,YAAY;IACZ,aAAa;IACb,MAAM;IACN,OAAO;AACX;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,8BAA8B;IAC9B,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@100;300;400;500;700;900&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.form-container, .container{\r\n    display: flex; \r\n    justify-content: center; \r\n    margin-top: 3rem\r\n}\r\n\r\n.container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.project-titles-ul, ul {\r\n    list-style: none;\r\n    margin-top: 3rem;\r\n    max-width: 800px;\r\n    width: 80%;\r\n}\r\n\r\n.project-titles-ul li, li {\r\n    border: 1px solid black;\r\n    margin-bottom: 1rem;\r\n    padding: 12px;\r\n    border-radius: 7px;\r\n    box-shadow: 2px 2px 13px -2px rgba(0,0,0,0.42) ;\r\n    background: rgb(255,255,255);\r\n    background: linear-gradient(45deg, rgb(255,255,255) 0%, rgb(0,255,230) 26%, rgb(0,203,202) 100%);\r\n    transition: all 300ms;\r\n    display: grid;\r\n    grid-template-columns: 1fr max-content max-content;\r\n    gap: 16px;\r\n}\r\n\r\n.task-ul .task-li {\r\n    background: white;\r\n}\r\n\r\n.project-titles-ul li span {\r\n    overflow: hidden;\r\n}\r\n\r\n.project-titles-ul li:hover {\r\n    transform: scale(1.06);\r\n    cursor: pointer;\r\n}\r\n\r\n.header {\r\n    font-size: xx-large;\r\n    align-self: flex-start;\r\n    margin-left: 2rem;\r\n    border-bottom: 2px solid black;\r\n    width: calc(100% - 4rem);\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n}\r\n\r\n.date {\r\n    font-size: large;\r\n}\r\n\r\n.forms {\r\n    display: flex; \r\n    flex-direction: column; \r\n    background-color: white; \r\n    gap: 1.2rem; \r\n    flex-basis: 800px; \r\n    flex-grow: 0; \r\n    max-width: 80%\r\n}\r\n\r\n.fields {\r\n    display: flex; \r\n    flex-direction: column; \r\n    gap: 12px\r\n}\r\n\r\n.btn {\r\n    width: max-content;\r\n    align-self: center;\r\n    padding: 10px 8px;\r\n    background-color: rgb(87, 87, 255);\r\n    border-radius: 3px;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    color: white;\r\n}\r\n\r\n.form-btn {\r\n    /* background-color: rgb(0, 255, 0); */\r\n    color: white;\r\n    box-shadow: 8px 10px 25px 0px rgba(0,0,0,0.37);\r\n}\r\n\r\n.btn-project-create {\r\n    padding: 20px;\r\n    font-size: larger;\r\n    background-color: green;\r\n    box-shadow: 6px 9px 19px 0px rgba(0,0,0,0.32);\r\n    transition: all 200ms;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(67, 67, 255);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-project-create:hover {\r\n    background-color: rgb(0, 114, 0);\r\n}\r\n\r\n.hidden {\r\n    visibility: hidden;\r\n    position: absolute;\r\n}\r\n\r\ninput {\r\n    height: 2.3rem;\r\n    font-size: 1.5rem;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.204);\r\n}\r\n\r\ninput:focus {\r\n    outline: 2px solid blue;\r\n}\r\n\r\n.modal {\r\n    width: 500px;\r\n    height: 500px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: calc(50% - 250px);\r\n    border-radius: 15px;\r\n    padding: 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1;\r\n    grid-template-rows: max-content 1fr max-content;\r\n}\r\n\r\n.close-modal {\r\n    width: 2rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n.back {\r\n    position: fixed;\r\n    background-color: rgba(0, 0, 0, 0.34);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid black;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.task-main {\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid black;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.task-main p {\r\n    font-style: italic;\r\n}\r\n\r\n.task-main .description-task {\r\n    font-size: larger;\r\n    font-style: normal;\r\n}\r\n\r\n.complete-btn {\r\n    background-color: rgb(0, 219, 0);\r\n}\r\n\r\n.complete-btn:hover {\r\n    background-color: rgb(0, 195, 0);\r\n}\r\n\r\n.close-modal {\r\n    background-color: red;\r\n}\r\n\r\n.close-modal:hover {\r\n    background-color: rgb(206, 0, 0);\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _TaskModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskModal */ "./src/TaskModal.js");



const ProjectPage = ({ projObj, proj }) => {
    const container_div = _ToggleClass__WEBPACK_IMPORTED_MODULE_0__.singleProjectDisplay.container_div
    container_div.innerHTML = ""

    const headerDiv = document.createElement('div')
    headerDiv.classList += "header title"

    const title = document.createElement('h2')
    title.innerText = projObj.title + ": "
    title.classList += "project-title"

    const dueDateP = document.createElement('p')
    dueDateP.innerText = `Due Date: ${projObj.dueDate}`
    dueDateP.classList += "project-title date"

    appendChildren(headerDiv, [title, dueDateP])

    const back_btn = document.createElement('button')
    back_btn.type = 'button'
    back_btn.innerText = 'Back'

    const creatTaskBtn = document.createElement('button')
    creatTaskBtn.innerText = 'Add'

    const taskUl = document.createElement('ul')
    taskUl.classList += "task-ul"
    showAllTask(projObj, taskUl)

    creatTaskBtn.onclick = () => {
            proj.createTask()
            showAllTask(projObj, taskUl)
    }

    back_btn.onclick = () => {
        _ToggleClass__WEBPACK_IMPORTED_MODULE_0__.singleProjectDisplay.toggleSingleProject()
        _ToggleClass__WEBPACK_IMPORTED_MODULE_0__.loadContainer.toggleLoad()
    }

    appendChildren(container_div, [headerDiv, taskUl, creatTaskBtn, back_btn])
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
        taskLi.classList += "task-li"
        taskLi.id = index
        ul.appendChild(taskLi)

        taskLi.onclick = (e) => {
            if (e.target === taskLi) {
                (0,_TaskModal__WEBPACK_IMPORTED_MODULE_1__["default"])(task)
            }
        }
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

    const createTaskInPlace = ({ taskTitle, taskDescription, taskPriority }) => {
        project.tasks.push((0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])({ taskTitle, taskDescription, taskPriority }))
    }

    return {
        project,
        createTask,
        createTaskInPlace
    }
}

const ProjectList = (() => {
    let projs = []
    projs.push(Projects({ id: projs.length + 1, title: 'One', description: 'One description', dueDate: '23-4-2023' }))
    projs[0].createTaskInPlace({taskTitle: "Task for number 1", taskDescription: "Do somethings", taskPriority: 2})
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
        created: (0,_Datet__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateAndTime)(),
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

/***/ "./src/TaskModal.js":
/*!**************************!*\
  !*** ./src/TaskModal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TaskModal = (task) => {
    const modalBackDiv = document.createElement('div')
    modalBackDiv.className = "back"
    
    //Inside Modal
    const modalDiv = document.createElement('div')
    modalDiv.className = "modal"

    const closeBtn = document.createElement('button')
    closeBtn.className = "btn close-modal"
    closeBtn.innerText = "X"
    
    const headDiv = document.createElement('div')
    headDiv.className = "task-head"
    const mainDiv = document.createElement('div')
    mainDiv.className = "task-main"
    const footDiv = document.createElement('div')
    footDiv.className = "task-foot"

    const taskTitle = document.createElement('h4')
    taskTitle.textContent = task.getTitle()

    const descP = document.createElement('p')
    descP.textContent = "Description:"
    descP.className = "description-title"

    const descriptionTaskP = document.createElement('p')
    descriptionTaskP.textContent = task.getDescription()
    descriptionTaskP.className = "description-task"

    const completeBtn = document.createElement('button')
    completeBtn.innerText = "Complete"
    completeBtn.classList += "btn complete-btn"

    closeBtn.onclick = () => {
        document.body.removeChild(modalBackDiv)
    }

    appendChildren(footDiv, [completeBtn])
    appendChildren(mainDiv, [descP, descriptionTaskP])
    appendChildren(headDiv, [taskTitle, closeBtn])
    appendChildren(modalDiv, [headDiv, mainDiv, footDiv])
    modalBackDiv.appendChild(modalDiv)
    document.body.appendChild(modalBackDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskModal);

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
    container_div.classList += "container hidden"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0lBQWdJLElBQUksSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxL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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHlCO0FBQ1E7QUFDQTtBQUNSO0FBQ0w7QUFDcEI7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWixJQUFJLGtEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL0RhdGV0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Gcm9tLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9JY29ucy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvTG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL1Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvVGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Ub2dnbGVDbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXJjZWxsdXMmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciwgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLXRvcDogM3JlbVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZXMtdWwsIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCBsaSwgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTNweCAtMnB4IHJnYmEoMCwwLDAsMC40MikgO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI1NSwyNTUsMjU1KSAwJSwgcmdiKDAsMjU1LDIzMCkgMjYlLCByZ2IoMCwyMDMsMjAyKSAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuLnRhc2stdWwgLnRhc2stbGkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCBsaSBzcGFuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCBsaTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZm9ybXMge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgIGdhcDogMS4ycmVtOyBcclxuICAgIGZsZXgtYmFzaXM6IDgwMHB4OyBcclxuICAgIGZsZXgtZ3JvdzogMDsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJVxyXG59XHJcblxyXG4uZmllbGRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBnYXA6IDEycHhcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMCk7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA4cHggMTBweCAyNXB4IDBweCByZ2JhKDAsMCwwLDAuMzcpO1xyXG59XHJcblxyXG4uYnRuLXByb2plY3QtY3JlYXRlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDlweCAxOXB4IDBweCByZ2JhKDAsMCwwLDAuMzIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjcsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcHJvamVjdC1jcmVhdGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExNCwgMCk7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDIuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMDQpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmx1ZTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWwge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi50YXNrLWhlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi50YXNrLW1haW4ge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnRhc2stbWFpbiBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRhc2stbWFpbiAuZGVzY3JpcHRpb24tdGFzayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmNvbXBsZXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjE5LCAwKTtcclxufVxyXG5cclxuLmNvbXBsZXRlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTk1LCAwKTtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDAsIDApO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyw0QkFBNEI7SUFDNUIsZ0dBQWdHO0lBQ2hHLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0RBQWtEO0lBQ2xELFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGFBQWE7SUFDYixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWFyY2VsbHVzJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIsIC5jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxyXFxuICAgIG1hcmdpbi10b3A6IDNyZW1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlcy11bCwgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZXMtdWwgbGksIGxpIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEycHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxM3B4IC0ycHggcmdiYSgwLDAsMCwwLjQyKSA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI1NSwyNTUsMjU1KSAwJSwgcmdiKDAsMjU1LDIzMCkgMjYlLCByZ2IoMCwyMDMsMjAyKSAxMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay11bCAudGFzay1saSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZXMtdWwgbGkgc3BhbiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlcy11bCBsaTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0cmVtKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXFxyXFxuICAgIGdhcDogMS4ycmVtOyBcXHJcXG4gICAgZmxleC1iYXNpczogODAwcHg7IFxcclxcbiAgICBmbGV4LWdyb3c6IDA7IFxcclxcbiAgICBtYXgtd2lkdGg6IDgwJVxcclxcbn1cXHJcXG5cXHJcXG4uZmllbGRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcclxcbiAgICBnYXA6IDEycHhcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgMjU1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1idG4ge1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjU1LCAwKTsgKi9cXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiA4cHggMTBweCAyNXB4IDBweCByZ2JhKDAsMCwwLDAuMzcpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByb2plY3QtY3JlYXRlIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICBib3gtc2hhZG93OiA2cHggOXB4IDE5cHggMHB4IHJnYmEoMCwwLDAsMC4zMik7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjcsIDI1NSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcm9qZWN0LWNyZWF0ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMTQsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAyLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIwNCk7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLW1vZGFsIHtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5iYWNrIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQpO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbWFpbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1tYWluIHAge1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW1haW4gLmRlc2NyaXB0aW9uLXRhc2sge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tcGxldGUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDIxOSwgMCk7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTk1LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLW1vZGFsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbW9kYWw6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAwLCAwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldERhdGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0ZV9vYiA9IG5ldyBEYXRlKClcclxuICAgIGxldCBkYXRlID0gKFwiMFwiICsgZGF0ZV9vYi5nZXREYXRlKCkpLnNsaWNlKC0yKTtcclxuICAgIGxldCBtb250aCA9IChcIjBcIiArIChkYXRlX29iLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xyXG4gICAgbGV0IHllYXIgPSBkYXRlX29iLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIHtkYXRlX29iLCBkYXRlLCBtb250aCwgeWVhcn1cclxufVxyXG5cclxuY29uc3QgZ2V0Q3VycmVudERhdGVBbmRUaW1lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlX29iLCBkYXRlLCBtb250aCwgeWVhciB9ID0gZ2V0RGF0ZSgpXHJcbiAgICBsZXQgbWludXRlcyA9IGRhdGVfb2IuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBkYXRlX29iLmdldFNlY29uZHMoKTtcclxuICAgIGxldCBob3VycyA9IGRhdGVfb2IuZ2V0SG91cnMoKTtcclxuXHJcbiAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGUgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBtaW51dGVzICsgXCI6XCIgKyBzZWNvbmRzXHJcbn1cclxuXHJcbmNvbnN0IGdldEN1cnJlbnREYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRlLCBtb250aCwgeWVhciB9ID0gZ2V0RGF0ZSgpXHJcbiAgICByZXR1cm4geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRhdGVcclxufVxyXG5cclxuZXhwb3J0IHtnZXRDdXJyZW50RGF0ZSwgZ2V0Q3VycmVudERhdGVBbmRUaW1lfSIsImltcG9ydCB7IFByb2plY3RMaXN0IH0gZnJvbSAnLi9Qcm9qZWN0cydcclxuaW1wb3J0IHsgZm9ybUNvbnRhaW5lciwgbG9hZENvbnRhaW5lciB9IGZyb20gJy4vVG9nZ2xlQ2xhc3MnXHJcblxyXG5jb25zdCBGcm9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyX2RpdiA9IGZvcm1Db250YWluZXIuY29udGFpbmVyX2RpdlxyXG5cclxuICAgIGNvbnN0IHByb2plY3RfZnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXHJcbiAgICBwcm9qZWN0X2Zyb20uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpXHJcbiAgICBwcm9qZWN0X2Zyb20uY2xhc3NMaXN0ICs9IFwiZm9ybXNcIlxyXG5cclxuICAgIGNyZWF0ZUZvcm1FbGVtZW50KHByb2plY3RfZnJvbSwgJ0VudGVyIHRpdGxlIG9mIHRoZSBwcm9qZWN0OiAnLCAndGl0bGUnLCAndGV4dCcsIHRydWUpXHJcbiAgICBjcmVhdGVGb3JtRWxlbWVudChwcm9qZWN0X2Zyb20sICdEZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdDogJywgJ2Rlc2MnLCAndGV4dCcpXHJcbiAgICBjcmVhdGVGb3JtRWxlbWVudChwcm9qZWN0X2Zyb20sICdMYXN0IGRhdGUgYmVmb3JlIHN1Ym1pc3Npb246ICcsICdkYXRlJywgJ2RhdGUnLCB0cnVlKVxyXG5cclxuICAgIGNvbnN0IHN1Ym1pdF9idXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBzdWJtaXRfYnV0dG9uLnR5cGUgPSAnc3VibWl0J1xyXG4gICAgc3VibWl0X2J1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgcHJvamVjdCdcclxuICAgIHN1Ym1pdF9idXR0b24uY2xhc3NMaXN0ICs9IFwiZm9ybS1idG4gYnRuXCJcclxuXHJcbiAgICBwcm9qZWN0X2Zyb20uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGUudGFyZ2V0LnRpdGxlLnZhbHVlXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBlLnRhcmdldC5kZXNjLnZhbHVlXHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGUudGFyZ2V0LmRhdGUudmFsdWVcclxuICAgICAgICBQcm9qZWN0TGlzdC5jcmVhdGVBUHJvamVjdCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSB9KVxyXG4gICAgICAgIGZvcm1Db250YWluZXIudG9nZ2xlRm9ybSgpXHJcbiAgICAgICAgbG9hZENvbnRhaW5lci50b2dnbGVMb2FkKClcclxuICAgIH0pXHJcblxyXG4gICAgcHJvamVjdF9mcm9tLmFwcGVuZENoaWxkKHN1Ym1pdF9idXR0b24pXHJcbiAgICBjb250YWluZXJfZGl2LmFwcGVuZENoaWxkKHByb2plY3RfZnJvbSlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyX2RpdilcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRm9ybUVsZW1lbnQgPSAoZm9ybSwgbGFiZWxfdGV4dCwgbGFiZWxfZm9yLCB0eXBlLCByZXF1aXJlZCA9IGZhbHNlKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZmllbGRfZGl2LmNsYXNzTGlzdCArPSBgZm9ybSAke2xhYmVsX2Zvcn0gZmllbGRzYFxyXG5cclxuICAgIGNvbnN0IHRpdGxlX2xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgdGl0bGVfbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBsYWJlbF9mb3IpXHJcbiAgICB0aXRsZV9sYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsX3RleHRcclxuICAgIGNvbnN0IHRpdGxlX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGl0bGVfaW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZidcclxuICAgIHRpdGxlX2lucHV0LnR5cGUgPSB0eXBlXHJcbiAgICB0aXRsZV9pbnB1dC5uYW1lID0gbGFiZWxfZm9yXHJcbiAgICB0aXRsZV9pbnB1dC5pZCA9IGxhYmVsX2ZvclxyXG4gICAgdGl0bGVfaW5wdXQucmVxdWlyZWQgPSByZXF1aXJlZFxyXG4gICAgXHJcbiAgICBmaWVsZF9kaXYuYXBwZW5kQ2hpbGQodGl0bGVfbGFiZWwpXHJcbiAgICBmaWVsZF9kaXYuYXBwZW5kQ2hpbGQodGl0bGVfaW5wdXQpXHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZF9kaXYpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGcm9tXHJcbmV4cG9ydCB7Zm9ybUNvbnRhaW5lcn0iLCJpbXBvcnQgYWRkX2J0biBmcm9tICcuL2ljb25zL3BsdXMucG5nJ1xyXG5pbXBvcnQgZGVsZXRlX2J0biBmcm9tICcuL2ljb25zL3RyYXNoLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHthZGRfYnRuLCBkZWxldGVfYnRufSIsImltcG9ydCB7IFByb2plY3RzLCBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL1Byb2plY3RzXCJcclxuaW1wb3J0IHsgZm9ybUNvbnRhaW5lciwgbG9hZENvbnRhaW5lciwgc2luZ2xlUHJvamVjdERpc3BsYXkgfSBmcm9tIFwiLi9Ub2dnbGVDbGFzc1wiXHJcbmltcG9ydCBQcm9qZWN0UGFnZSBmcm9tIFwiLi9Qcm9qZWN0UGFnZVwiXHJcbmltcG9ydCBJY29ucyBmcm9tICcuL0ljb25zJ1xyXG5cclxuY29uc3QgTG9hZHBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBsb2FkQ29udGFpbmVyLmNvbnRhaW5lckRpdlxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdCArPSBcImJ0bi1wcm9qZWN0LWNyZWF0ZSBidG5cIlxyXG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGEgUHJvamVjdFwiXHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxyXG4gICAgcHJvamVjdHNVbC5jbGFzc0xpc3QgKz0gXCJwcm9qZWN0LXRpdGxlcy11bFwiXHJcbiAgICBsb2FkQ29udGFpbmVyLkxvYWRQb3JqKFByb2plY3RMaXN0RG9tLCBwcm9qZWN0c1VsKVxyXG4gICAgUHJvamVjdExpc3REb20ocHJvamVjdHNVbClcclxuICAgIFxyXG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxvYWRDb250YWluZXIudG9nZ2xlTG9hZCgpXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci50b2dnbGVGb3JtKClcclxuICAgICAgICBQcm9qZWN0TGlzdERvbShwcm9qZWN0c1VsKVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lckRpdiwgW2NyZWF0ZVByb2plY3RCdXR0b24sIHByb2plY3RzVWxdKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpXHJcbn1cclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudERvbSwgY2hpbGREb21zKSA9PiB7XHJcbiAgICBjaGlsZERvbXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGNoaWxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RMaXN0RG9tID0gKHVsKSA9PiB7XHJcbiAgICB1bC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBQcm9qZWN0TGlzdC5nZXRQcm9qZWN0TGlzdCgpLmZvckVhY2goKHByb2osIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKCFwcm9qLnByb2plY3QuZGVsZXRlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGx1c19hZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBwbHVzX2FkZC5zcmMgPSBJY29ucy5hZGRfYnRuXHJcbiAgICAgICAgICAgIHBsdXNfYWRkLndpZHRoID0gMTVcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZV9idG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBkZWxldGVfYnRuLnNyYyA9IEljb25zLmRlbGV0ZV9idG5cclxuICAgICAgICAgICAgZGVsZXRlX2J0bi53aWR0aCA9IDE1XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qLnByb2plY3QudGl0bGVcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICs9IFwicHJvamVjdC10aXRsZS1saXN0XCJcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IHByb2oucHJvamVjdC5pZFxyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCwgW3RpdGxlLCBwbHVzX2FkZCwgZGVsZXRlX2J0bl0pXHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gcGx1c19hZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZFwiKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0UGFnZSh7IHByb2pPYmo6IHByb2oucHJvamVjdCwgcHJvaiB9KVxyXG4gICAgICAgICAgICAgICAgc2luZ2xlUHJvamVjdERpc3BsYXkudG9nZ2xlU2luZ2xlUHJvamVjdCgpXHJcbiAgICAgICAgICAgICAgICBsb2FkQ29udGFpbmVyLnRvZ2dsZUxvYWQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkcGFnZSIsImltcG9ydCB7IGxvYWRDb250YWluZXIsIHNpbmdsZVByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vVG9nZ2xlQ2xhc3NcIlxyXG5pbXBvcnQgVGFza01vZGFsIGZyb20gXCIuL1Rhc2tNb2RhbFwiXHJcblxyXG5jb25zdCBQcm9qZWN0UGFnZSA9ICh7IHByb2pPYmosIHByb2ogfSkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyX2RpdiA9IHNpbmdsZVByb2plY3REaXNwbGF5LmNvbnRhaW5lcl9kaXZcclxuICAgIGNvbnRhaW5lcl9kaXYuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBoZWFkZXJEaXYuY2xhc3NMaXN0ICs9IFwiaGVhZGVyIHRpdGxlXCJcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2pPYmoudGl0bGUgKyBcIjogXCJcclxuICAgIHRpdGxlLmNsYXNzTGlzdCArPSBcInByb2plY3QtdGl0bGVcIlxyXG5cclxuICAgIGNvbnN0IGR1ZURhdGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBkdWVEYXRlUC5pbm5lclRleHQgPSBgRHVlIERhdGU6ICR7cHJvak9iai5kdWVEYXRlfWBcclxuICAgIGR1ZURhdGVQLmNsYXNzTGlzdCArPSBcInByb2plY3QtdGl0bGUgZGF0ZVwiXHJcblxyXG4gICAgYXBwZW5kQ2hpbGRyZW4oaGVhZGVyRGl2LCBbdGl0bGUsIGR1ZURhdGVQXSlcclxuXHJcbiAgICBjb25zdCBiYWNrX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBiYWNrX2J0bi50eXBlID0gJ2J1dHRvbidcclxuICAgIGJhY2tfYnRuLmlubmVyVGV4dCA9ICdCYWNrJ1xyXG5cclxuICAgIGNvbnN0IGNyZWF0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjcmVhdFRhc2tCdG4uaW5uZXJUZXh0ID0gJ0FkZCdcclxuXHJcbiAgICBjb25zdCB0YXNrVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpXHJcbiAgICB0YXNrVWwuY2xhc3NMaXN0ICs9IFwidGFzay11bFwiXHJcbiAgICBzaG93QWxsVGFzayhwcm9qT2JqLCB0YXNrVWwpXHJcblxyXG4gICAgY3JlYXRUYXNrQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2ouY3JlYXRlVGFzaygpXHJcbiAgICAgICAgICAgIHNob3dBbGxUYXNrKHByb2pPYmosIHRhc2tVbClcclxuICAgIH1cclxuXHJcbiAgICBiYWNrX2J0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNpbmdsZVByb2plY3REaXNwbGF5LnRvZ2dsZVNpbmdsZVByb2plY3QoKVxyXG4gICAgICAgIGxvYWRDb250YWluZXIudG9nZ2xlTG9hZCgpXHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGRyZW4oY29udGFpbmVyX2RpdiwgW2hlYWRlckRpdiwgdGFza1VsLCBjcmVhdFRhc2tCdG4sIGJhY2tfYnRuXSlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyX2RpdilcclxufVxyXG5cclxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50RG9tLCBjaGlsZERvbXMpID0+IHtcclxuICAgIGNoaWxkRG9tcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBwYXJlbnREb20uYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3Qgc2hvd0FsbFRhc2sgPSAocHJvaiwgdWwpID0+IHtcclxuICAgIHVsLmlubmVySFRNTCA9IFwiXCJcclxuICAgIHByb2oudGFza3MuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgdGFza0xpLmlubmVyVGV4dCA9IHRhc2suZ2V0VGl0bGUoKVxyXG4gICAgICAgIHRhc2tMaS5jbGFzc0xpc3QgKz0gXCJ0YXNrLWxpXCJcclxuICAgICAgICB0YXNrTGkuaWQgPSBpbmRleFxyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKHRhc2tMaSlcclxuXHJcbiAgICAgICAgdGFza0xpLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRhc2tMaSkge1xyXG4gICAgICAgICAgICAgICAgVGFza01vZGFsKHRhc2spXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZSIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkZWxldGVkID0gZmFsc2V9KSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICB0YXNrczogW10sXHJcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcclxuICAgICAgICBkZWxldGVkOiBkZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBwcm9tcHQoXCJUaXRsZSBvZiB0aGUgdGFza1wiKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcIkRlc2NyaXBpdGlvbiBvZiB0aGUgdGFza1wiKVxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHByb21wdChcIlByaW9yaXR5XCIpXHJcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2soeyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5IH0pXHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFza0luUGxhY2UgPSAoeyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5IH0pID0+IHtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2goVGFzayh7IHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHkgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9qZWN0LFxyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgY3JlYXRlVGFza0luUGxhY2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgUHJvamVjdExpc3QgPSAoKCkgPT4ge1xyXG4gICAgbGV0IHByb2pzID0gW11cclxuICAgIHByb2pzLnB1c2goUHJvamVjdHMoeyBpZDogcHJvanMubGVuZ3RoICsgMSwgdGl0bGU6ICdPbmUnLCBkZXNjcmlwdGlvbjogJ09uZSBkZXNjcmlwdGlvbicsIGR1ZURhdGU6ICcyMy00LTIwMjMnIH0pKVxyXG4gICAgcHJvanNbMF0uY3JlYXRlVGFza0luUGxhY2Uoe3Rhc2tUaXRsZTogXCJUYXNrIGZvciBudW1iZXIgMVwiLCB0YXNrRGVzY3JpcHRpb246IFwiRG8gc29tZXRoaW5nc1wiLCB0YXNrUHJpb3JpdHk6IDJ9KVxyXG4gICAgcHJvanMucHVzaChQcm9qZWN0cyh7IGlkOiBwcm9qcy5sZW5ndGggKyAxLCB0aXRsZTogJ1R3bycsIGRlc2NyaXB0aW9uOiAnVHdvIGRlc2NyaXB0aW9uJywgZHVlRGF0ZTogJzIzLTQtMjAyMyd9KSlcclxuXHJcbiAgICBjb25zdCBjcmVhdGVBUHJvamVjdCA9IChwcm9qKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcDEgPSBQcm9qZWN0cyh7IC4uLnByb2osIGlkOiBwcm9qcy5sZW5ndGggKyAxIH0pXHJcbiAgICAgICAgcHJvanMucHVzaChwMSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvanNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUFQcm9qZWN0LFxyXG4gICAgICAgIGdldFByb2plY3RMaXN0XHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzXHJcbmV4cG9ydCB7UHJvamVjdExpc3R9IiwiaW1wb3J0IHsgZ2V0Q3VycmVudERhdGUsIGdldEN1cnJlbnREYXRlQW5kVGltZSB9IGZyb20gXCIuL0RhdGV0XCJcclxuXHJcbmNvbnN0IFRhc2sgPSAoeyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5IH0pID0+IHtcclxuICAgIFxyXG4gICAgbGV0IHRhc2sgPSB7XHJcbiAgICAgICAgdGl0bGU6IHRhc2tUaXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNyZWF0ZWQ6IGdldEN1cnJlbnREYXRlQW5kVGltZSgpLFxyXG4gICAgICAgIHByaW9yaXR5OiB0YXNrUHJpb3JpdHksXHJcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2VcclxuICAgIH1cclxuICAgIGNvbnN0IHNldFRpdGxlID0gKHR4dCkgPT4ge1xyXG4gICAgICAgIHRhc2sudGl0bGUgPSB0eHRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFzay50aXRsZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKHR4dCkgPT4ge1xyXG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB0eHRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFzay5kZXNjcmlwdGlvbiBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaW1lQ3JlYXRlZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFzay5kdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkgdGFzay5pc0NvbXBsZXRlID0gZmFsc2VcclxuICAgICAgICBlbHNlIHRhc2suaXNDb21wbGV0ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUYXNrT2JqZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YXNrXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFRpdGxlLFxyXG4gICAgICAgIGdldFRpdGxlLFxyXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxyXG4gICAgICAgIGdldFRpbWVDcmVhdGVkLFxyXG4gICAgICAgIHNldENvbXBsZXRlLFxyXG4gICAgICAgIGdldFRhc2tPYmplY3RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzayIsImNvbnN0IFRhc2tNb2RhbCA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbW9kYWxCYWNrRGl2LmNsYXNzTmFtZSA9IFwiYmFja1wiXHJcbiAgICBcclxuICAgIC8vSW5zaWRlIE1vZGFsXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtb2RhbERpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCJcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBjbG9zZS1tb2RhbFwiXHJcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlhcIlxyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhlYWREaXYuY2xhc3NOYW1lID0gXCJ0YXNrLWhlYWRcIlxyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9IFwidGFzay1tYWluXCJcclxuICAgIGNvbnN0IGZvb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vdERpdi5jbGFzc05hbWUgPSBcInRhc2stZm9vdFwiXHJcblxyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXHJcblxyXG4gICAgY29uc3QgZGVzY1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGRlc2NQLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIlxyXG4gICAgZGVzY1AuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi10aXRsZVwiXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UYXNrUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZGVzY3JpcHRpb25UYXNrUC50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxyXG4gICAgZGVzY3JpcHRpb25UYXNrUC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLXRhc2tcIlxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbXBsZXRlQnRuLmlubmVyVGV4dCA9IFwiQ29tcGxldGVcIlxyXG4gICAgY29tcGxldGVCdG4uY2xhc3NMaXN0ICs9IFwiYnRuIGNvbXBsZXRlLWJ0blwiXHJcblxyXG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQmFja0RpdilcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZHJlbihmb290RGl2LCBbY29tcGxldGVCdG5dKVxyXG4gICAgYXBwZW5kQ2hpbGRyZW4obWFpbkRpdiwgW2Rlc2NQLCBkZXNjcmlwdGlvblRhc2tQXSlcclxuICAgIGFwcGVuZENoaWxkcmVuKGhlYWREaXYsIFt0YXNrVGl0bGUsIGNsb3NlQnRuXSlcclxuICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGl2LCBbaGVhZERpdiwgbWFpbkRpdiwgZm9vdERpdl0pXHJcbiAgICBtb2RhbEJhY2tEaXYuYXBwZW5kQ2hpbGQobW9kYWxEaXYpXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsQmFja0RpdilcclxufVxyXG5cclxuY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50RG9tLCBjaGlsZERvbXMpID0+IHtcclxuICAgIGNoaWxkRG9tcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBwYXJlbnREb20uYXBwZW5kQ2hpbGQoY2hpbGQpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFza01vZGFsIiwiY29uc3QgZm9ybUNvbnRhaW5lciA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyX2Rpdi5jbGFzc0xpc3QgKz0gXCJmb3JtLWNvbnRhaW5lciBoaWRkZW5cIlxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyX2Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250YWluZXJfZGl2LFxyXG4gICAgICAgIHRvZ2dsZUZvcm1cclxuICAgIH1cclxufSkoKVxyXG5cclxuY29uc3QgbG9hZENvbnRhaW5lciA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0ICs9IFwiY29udGFpbmVyXCJcclxuICAgIGxldCBsb2FkcHJvaiwgcHJvamVjdFVsXHJcblxyXG4gICAgY29uc3QgTG9hZFBvcmogPSAobCwgcHJvamVjdFVsUGFyYW0pID0+IHtcclxuICAgICAgICBsb2FkcHJvaiA9IGxcclxuICAgICAgICBwcm9qZWN0VWwgPSBwcm9qZWN0VWxQYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyRGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcclxuICAgICAgICBsb2FkcHJvaihwcm9qZWN0VWwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250YWluZXJEaXYsXHJcbiAgICAgICAgdG9nZ2xlTG9hZCxcclxuICAgICAgICBMb2FkUG9yalxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5jb25zdCBzaW5nbGVQcm9qZWN0RGlzcGxheSA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29udGFpbmVyX2Rpdi5jbGFzc0xpc3QgKz0gXCJjb250YWluZXIgaGlkZGVuXCJcclxuXHJcbiAgICBjb25zdCB0b2dnbGVTaW5nbGVQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnRhaW5lcl9kaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29udGFpbmVyX2RpdixcclxuICAgICAgICB0b2dnbGVTaW5nbGVQcm9qZWN0XHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7Zm9ybUNvbnRhaW5lciwgbG9hZENvbnRhaW5lciwgc2luZ2xlUHJvamVjdERpc3BsYXl9IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJ1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi9Qcm9qZWN0cydcclxuaW1wb3J0IExvYWRwYWdlIGZyb20gJy4vTG9hZHBhZ2UnXHJcbmltcG9ydCBGcm9tIGZyb20gJy4vRnJvbSdcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgTG9hZHBhZ2UoKVxyXG4gICAgRnJvbSgpXHJcbn1cclxuXHJcbmluZGV4KClcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==