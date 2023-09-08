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

.task-ul .task-li:hover {
    cursor: pointer;
    transform: scale(1.01);
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
}

.task-btn {
    margin-bottom: 12px;
}

.back-btn {
    background-color: grey;
}

.back-btn:hover {
    background-color: rgb(111, 111, 111);
}

.task-ul .completed {
    background: #8BFF8B;
    background: -moz-linear-gradient(top, #8BFF8B 0%, #F3FFF1 100%);
    background: -webkit-linear-gradient(top, #8BFF8B 0%, #F3FFF1 100%);
    background: linear-gradient(to bottom, #8BFF8B 0%, #F3FFF1 100%);
}

.task-form {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 5px;
}

.task-form:first-child {
    margin-top: 0.5rem;
}

.task-form:last-child {
    margin-bottom: 0.6rem;
}

.task-modal {
    height: auto;
}

.task-modal .btn {
    justify-self: flex-end;
}

/* .delete-proj {
    background-color: red;
    height: 100%;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Roboto:wght@100;300;400;500;700;900&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.form-container, .container{\r\n    display: flex; \r\n    justify-content: center; \r\n    margin-top: 3rem\r\n}\r\n\r\n.container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.project-titles-ul, ul {\r\n    list-style: none;\r\n    margin-top: 3rem;\r\n    max-width: 800px;\r\n    width: 80%;\r\n}\r\n\r\n.project-titles-ul li, li {\r\n    border: 1px solid black;\r\n    margin-bottom: 1rem;\r\n    padding: 12px;\r\n    border-radius: 7px;\r\n    box-shadow: 2px 2px 13px -2px rgba(0,0,0,0.42) ;\r\n    background: rgb(255,255,255);\r\n    background: linear-gradient(45deg, rgb(255,255,255) 0%, rgb(0,255,230) 26%, rgb(0,203,202) 100%);\r\n    transition: all 300ms;\r\n    display: grid;\r\n    grid-template-columns: 1fr max-content max-content;\r\n    gap: 16px;\r\n}\r\n\r\n.task-ul .task-li {\r\n    background: white;\r\n}\r\n\r\n.task-ul .task-li:hover {\r\n    cursor: pointer;\r\n    transform: scale(1.01);\r\n}\r\n\r\n.project-titles-ul li span {\r\n    overflow: hidden;\r\n}\r\n\r\n.project-titles-ul li:hover {\r\n    transform: scale(1.06);\r\n    cursor: pointer;\r\n}\r\n\r\n.header {\r\n    font-size: xx-large;\r\n    align-self: flex-start;\r\n    margin-left: 2rem;\r\n    border-bottom: 2px solid black;\r\n    width: calc(100% - 4rem);\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n}\r\n\r\n.date {\r\n    font-size: large;\r\n}\r\n\r\n.forms {\r\n    display: flex; \r\n    flex-direction: column; \r\n    background-color: white; \r\n    gap: 1.2rem; \r\n    flex-basis: 800px; \r\n    flex-grow: 0; \r\n    max-width: 80%\r\n}\r\n\r\n.fields {\r\n    display: flex; \r\n    flex-direction: column; \r\n    gap: 12px\r\n}\r\n\r\n.btn {\r\n    width: max-content;\r\n    align-self: center;\r\n    padding: 10px 8px;\r\n    background-color: rgb(87, 87, 255);\r\n    border-radius: 3px;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: medium;\r\n    color: white;\r\n}\r\n\r\n.form-btn {\r\n    /* background-color: rgb(0, 255, 0); */\r\n    color: white;\r\n    box-shadow: 8px 10px 25px 0px rgba(0,0,0,0.37);\r\n}\r\n\r\n.btn-project-create {\r\n    padding: 20px;\r\n    font-size: larger;\r\n    background-color: green;\r\n    box-shadow: 6px 9px 19px 0px rgba(0,0,0,0.32);\r\n    transition: all 200ms;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: rgb(67, 67, 255);\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-project-create:hover {\r\n    background-color: rgb(0, 114, 0);\r\n}\r\n\r\n.hidden {\r\n    visibility: hidden;\r\n    position: absolute;\r\n}\r\n\r\ninput {\r\n    height: 2.3rem;\r\n    font-size: 1.5rem;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.204);\r\n}\r\n\r\ninput:focus {\r\n    outline: 2px solid blue;\r\n}\r\n\r\n.modal {\r\n    width: 500px;\r\n    height: 500px;\r\n    background-color: white;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: calc(50% - 250px);\r\n    border-radius: 15px;\r\n    padding: 1rem;\r\n    display: grid;\r\n    grid-template-columns: 1;\r\n    grid-template-rows: max-content 1fr max-content;\r\n}\r\n\r\n.close-modal {\r\n    width: 2rem;\r\n    border-radius: 15px;\r\n}\r\n\r\n.back {\r\n    position: fixed;\r\n    background-color: rgba(0, 0, 0, 0.34);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.task-head {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid black;\r\n    padding-bottom: 12px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.task-main {\r\n    padding: 0 15px;\r\n    border-bottom: 1px solid black;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.task-main p {\r\n    font-style: italic;\r\n}\r\n\r\n.task-main .description-task {\r\n    font-size: larger;\r\n    font-style: normal;\r\n}\r\n\r\n.complete-btn {\r\n    background-color: rgb(0, 219, 0);\r\n}\r\n\r\n.complete-btn:hover {\r\n    background-color: rgb(0, 195, 0);\r\n}\r\n\r\n.close-modal {\r\n    background-color: red;\r\n}\r\n\r\n.close-modal:hover {\r\n    background-color: rgb(206, 0, 0);\r\n}\r\n\r\n.task-btn {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.back-btn {\r\n    background-color: grey;\r\n}\r\n\r\n.back-btn:hover {\r\n    background-color: rgb(111, 111, 111);\r\n}\r\n\r\n.task-ul .completed {\r\n    background: #8BFF8B;\r\n    background: -moz-linear-gradient(top, #8BFF8B 0%, #F3FFF1 100%);\r\n    background: -webkit-linear-gradient(top, #8BFF8B 0%, #F3FFF1 100%);\r\n    background: linear-gradient(to bottom, #8BFF8B 0%, #F3FFF1 100%);\r\n}\r\n\r\n.task-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 1rem;\r\n    gap: 5px;\r\n}\r\n\r\n.task-form:first-child {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n.task-form:last-child {\r\n    margin-bottom: 0.6rem;\r\n}\r\n\r\n.task-modal {\r\n    height: auto;\r\n}\r\n\r\n.task-modal .btn {\r\n    justify-self: flex-end;\r\n}\r\n\r\n/* .delete-proj {\r\n    background-color: red;\r\n    height: 100%;\r\n} */"],"sourceRoot":""}]);
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
    _Projects__WEBPACK_IMPORTED_MODULE_0__.ProjectList.setProjectList()
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

            const deleteDiv = document.createElement('div')
            deleteDiv.className = 'delete-proj'

            const delete_btn = document.createElement('img')
            delete_btn.src = _Icons__WEBPACK_IMPORTED_MODULE_3__["default"].delete_btn
            delete_btn.width = 15
            deleteDiv.appendChild(delete_btn)

            const title = document.createElement('span')
            title.innerText = proj.project.title

            element.classList += "project-title-list"
            element.id = proj.project.id

            appendChildren(element, [title, plus_add, deleteDiv])
            ul.appendChild(element)

            element.addEventListener('click', (e) => {
                if (e.target === plus_add) {
                    console.log("add")
                }
                
                if (e.target === delete_btn) {
                    _Projects__WEBPACK_IMPORTED_MODULE_0__.ProjectList.deleteProject(index)
                    ProjectListDom(ul)
                } else {
                    (0,_ProjectPage__WEBPACK_IMPORTED_MODULE_2__["default"])({ projObj: proj.project, proj })
                    _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.singleProjectDisplay.toggleSingleProject()
                    _ToggleClass__WEBPACK_IMPORTED_MODULE_1__.loadContainer.toggleLoad()
                }

                
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
/* harmony import */ var _TaskCreateFormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskCreateFormModal */ "./src/TaskCreateFormModal.js");




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
    back_btn.classList += 'btn back-btn'

    const creatTaskBtn = document.createElement('button')
    creatTaskBtn.innerText = 'Add a Task'
    creatTaskBtn.classList += 'btn task-btn'

    const taskUl = document.createElement('ul')
    taskUl.classList += "task-ul"
    showAllTask(projObj, taskUl)

    creatTaskBtn.onclick = () => {
            // proj.createTask()
            ;(0,_TaskCreateFormModal__WEBPACK_IMPORTED_MODULE_2__["default"])({show: showAllTask, projObj, ul: taskUl, proj})
            // showAllTask(projObj, taskUl)
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
        if (task.getTaskObject().isComplete) {
            taskLi.classList += ' completed'
        }
        taskLi.id = index
        ul.appendChild(taskLi)

        taskLi.onclick = (e) => {
            if (e.target === taskLi) {
                (0,_TaskModal__WEBPACK_IMPORTED_MODULE_1__["default"])(task, showAllTask, proj, ul)
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
        ProjectList.updateProjectList()
    }

    return {
        project,
        createTask,
        createTaskInPlace
    }
}

const ProjectList = (() => {
    let projs = []
    // projs.push(Projects({ id: projs.length + 1, title: 'One', description: 'One description', dueDate: '23-4-2023' }))
    // projs[0].createTaskInPlace({taskTitle: "Task for number 1", taskDescription: "Do somethings", taskPriority: 2})
    // projs.push(Projects({ id: projs.length + 1, title: 'Two', description: 'Two description', dueDate: '23-4-2023'}))

    const createAProject = (proj) => {
        const p1 = Projects({ ...proj, id: projs.length + 1 })
        projs.push(p1)
        localStorage.setItem("projs", JSON.stringify(projs))
    }

    const getProjectList = () => {
        return projs
    }

    const setProjectList = () => {
        if (!localStorage.getItem("projs")) {
            localStorage.setItem("projs", JSON.stringify(projs))
        } else {
            const storedProjs = JSON.parse(localStorage.getItem("projs"))

            projs = storedProjs.map(proj => {
                const recreatedProj = Projects(proj.project)
                recreatedProj.project.tasks = proj.project.tasks.map(task => (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(task.task))
                return recreatedProj
            })
        }
    }

    const deleteProject = (index) => {
        projs.splice(index, 1)
        localStorage.setItem("projs", JSON.stringify(projs))
    }

    const updateProjectList = () => {
        localStorage.setItem("projs", JSON.stringify(projs))
    }

    return {
        createAProject,
        getProjectList,
        setProjectList,
        updateProjectList,
        deleteProject,
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
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        created: (0,_Datet__WEBPACK_IMPORTED_MODULE_0__.getCurrentDateAndTime)(),
        taskPriority: taskPriority,
        isComplete: false
    }
    const setTitle = (txt) => {
        task.title = txt
    }

    const getTitle = () => {
        return task.taskTitle
    }

    const setDescription = (txt) => {
        task.description = txt
    }

    const getDescription = () => {
        return task.taskDescription 
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
        task,
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

/***/ "./src/TaskCreateFormModal.js":
/*!************************************!*\
  !*** ./src/TaskCreateFormModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TaskCreateFormModal = ({show, projObj, ul, proj}) => {
    const modalBackDiv = document.createElement('div')
    modalBackDiv.className = "back"

    const modalDiv = document.createElement('div')
    modalDiv.className = "modal task-modal"

    const closeBtn = document.createElement('button')
    closeBtn.className = "btn close-modal"
    closeBtn.innerText = "X"

    const taskCreateForm = document.createElement('form')
    taskCreateForm.id = 'taskForm'

    // Title div
    const titleDiv = document.createElement('div')
    titleDiv.className = 'task-title-form task-form'

    const titleLabel = document.createElement('label')
    titleLabel.innerText = 'Title of the Task: '
    titleLabel.setAttribute('for', 'title-name')

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.name = 'titleName'
    titleInput.id = 'title-name'
    titleInput.required = true
    // //

    // Description Div
    const descriptionDiv = document.createElement('div')
    descriptionDiv.className = 'task-desc-form task-form'

    const descriptionLabel = document.createElement('label')
    descriptionLabel.textContent = 'Description: '
    descriptionLabel.setAttribute('for', 'desc')

    const descriptionInput = document.createElement('input')
    descriptionInput.type = 'textarea'
    descriptionInput.name = 'desc'
    descriptionInput.id = 'desc'
    // //

    // Priority Div
    const prioriyDiv = document.createElement('div')
    prioriyDiv.className += 'task-priority-form task-form'

    const priorityLabel = document.createElement('label')
    priorityLabel.textContent = 'Priority: '
    priorityLabel.setAttribute('for', 'priority')

    const priorityInput = document.createElement('input')
    priorityInput.type = 'number'
    priorityInput.name = 'priority'
    priorityInput.id = 'priority'
    // // 

    const formSubmit = document.createElement('button')
    formSubmit.innerText = 'Create'
    formSubmit.classList += 'btn form-btn'
    formSubmit.type = 'submit'
    formSubmit.setAttribute('form', 'taskForm')

    taskCreateForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const taskTitle = e.target.titleName.value
        const taskDescription = e.target.desc.value
        const taskPriority = e.target.priority.value
        proj.createTaskInPlace({ taskTitle, taskDescription, taskPriority })
        closeBtn.click()
        show(projObj, ul)
    })

    closeBtn.onclick = () => {
        document.body.removeChild(modalBackDiv)
    }

    appendChildren(prioriyDiv, [priorityLabel, priorityInput])
    appendChildren(descriptionDiv, [descriptionLabel, descriptionInput])
    appendChildren(titleDiv, [titleLabel, titleInput])
    appendChildren(taskCreateForm, [titleDiv, descriptionDiv, prioriyDiv])
    appendChildren(modalDiv, [closeBtn, taskCreateForm, formSubmit])
    modalBackDiv.appendChild(modalDiv)
    document.body.appendChild(modalBackDiv)
}

const appendChildren = (parentDom, childDoms) => {
    childDoms.forEach(child => {
        parentDom.appendChild(child)
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskCreateFormModal);

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
const TaskModal = (task, show, proj, ul) => {
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

    const created = document.createElement('p')
    created.textContent = 'Created on: ' + task.getTaskObject().created

    completeBtn.onclick = () => {
        task.setComplete()
        show(proj, ul)
        document.body.removeChild(modalBackDiv)
    }

    closeBtn.onclick = () => {
        document.body.removeChild(modalBackDiv)
    }

    appendChildren(footDiv, [completeBtn, created])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0lBQWdJLElBQUksSUFBSSxJQUFJLElBQUksa0JBQWtCO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDBDQUEwQztBQUMzRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzVGZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRHlCO0FBQ1E7QUFDQTtBQUNSO0FBQ0w7QUFDcEI7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWixJQUFJLGtEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL0RhdGV0LmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Gcm9tLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9JY29ucy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvTG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1wcm9qZWN0Ly4vc3JjL1Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Qcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvVGFza0NyZWF0ZUZvcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvVGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tcHJvamVjdC8uL3NyYy9Ub2dnbGVDbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXJjZWxsdXMmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciwgLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLXRvcDogM3JlbVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZXMtdWwsIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCBsaSwgbGkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTNweCAtMnB4IHJnYmEoMCwwLDAsMC40MikgO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI1NSwyNTUsMjU1KSAwJSwgcmdiKDAsMjU1LDIzMCkgMjYlLCByZ2IoMCwyMDMsMjAyKSAxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgIGdhcDogMTZweDtcclxufVxyXG5cclxuLnRhc2stdWwgLnRhc2stbGkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi50YXNrLXVsIC50YXNrLWxpOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCBsaSBzcGFuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlcy11bCBsaTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNHJlbSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uZm9ybXMge1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcclxuICAgIGdhcDogMS4ycmVtOyBcclxuICAgIGZsZXgtYmFzaXM6IDgwMHB4OyBcclxuICAgIGZsZXgtZ3JvdzogMDsgXHJcbiAgICBtYXgtd2lkdGg6IDgwJVxyXG59XHJcblxyXG4uZmllbGRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICBnYXA6IDEycHhcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDI1NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1idG4ge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDI1NSwgMCk7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA4cHggMTBweCAyNXB4IDBweCByZ2JhKDAsMCwwLDAuMzcpO1xyXG59XHJcblxyXG4uYnRuLXByb2plY3QtY3JlYXRlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm94LXNoYWRvdzogNnB4IDlweCAxOXB4IDBweCByZ2JhKDAsMCwwLDAuMzIpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgNjcsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tcHJvamVjdC1jcmVhdGU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExNCwgMCk7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDIuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMDQpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmx1ZTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWwge1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzQpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi50YXNrLWhlYWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi50YXNrLW1haW4ge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnRhc2stbWFpbiBwIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnRhc2stbWFpbiAuZGVzY3JpcHRpb24tdGFzayB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuLmNvbXBsZXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjE5LCAwKTtcclxufVxyXG5cclxuLmNvbXBsZXRlLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTk1LCAwKTtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDAsIDApO1xyXG59XHJcblxyXG4udGFzay1idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmJhY2stYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5iYWNrLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDExMSk7XHJcbn1cclxuXHJcbi50YXNrLXVsIC5jb21wbGV0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogIzhCRkY4QjtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzhCRkY4QiAwJSwgI0YzRkZGMSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzhCRkY4QiAwJSwgI0YzRkZGMSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4QkZGOEIgMCUsICNGM0ZGRjEgMTAwJSk7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrLWZvcm06Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4udGFzay1mb3JtOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xyXG59XHJcblxyXG4udGFzay1tb2RhbCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50YXNrLW1vZGFsIC5idG4ge1xyXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLyogLmRlbGV0ZS1wcm9qIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsNEJBQTRCO0lBQzVCLGdHQUFnRztJQUNoRyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osYUFBYTtJQUNiLE1BQU07SUFDTixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiwrREFBK0Q7SUFDL0Qsa0VBQWtFO0lBQ2xFLGdFQUFnRTtBQUNwRTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7OztHQUdHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hcmNlbGx1cyZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udGFpbmVyLCAuY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtXFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZXMtdWwsIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGVzLXVsIGxpLCBsaSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTNweCAtMnB4IHJnYmEoMCwwLDAsMC40MikgO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigyNTUsMjU1LDI1NSkgMCUsIHJnYigwLDI1NSwyMzApIDI2JSwgcmdiKDAsMjAzLDIwMikgMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdWwgLnRhc2stbGkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdWwgLnRhc2stbGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRpdGxlcy11bCBsaSBzcGFuIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGVzLXVsIGxpOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGUge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXHJcXG4gICAgZ2FwOiAxLjJyZW07IFxcclxcbiAgICBmbGV4LWJhc2lzOiA4MDBweDsgXFxyXFxuICAgIGZsZXgtZ3JvdzogMDsgXFxyXFxuICAgIG1heC13aWR0aDogODAlXFxyXFxufVxcclxcblxcclxcbi5maWVsZHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxyXFxuICAgIGdhcDogMTJweFxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDg3LCAyNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWJ0biB7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDApOyAqL1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDI1cHggMHB4IHJnYmEoMCwwLDAsMC4zNyk7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJvamVjdC1jcmVhdGUge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDZweCA5cHggMTlweCAwcHggcmdiYSgwLDAsMCwwLjMyKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY3LCA2NywgMjU1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByb2plY3QtY3JlYXRlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExNCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDIuM3JlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjA0KTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAycHggc29saWQgYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbW9kYWwge1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2sge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNCk7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1tYWluIHtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW1haW4gcCB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbWFpbiAuZGVzY3JpcHRpb24tdGFzayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5jb21wbGV0ZS1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMjE5LCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxOTUsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtbW9kYWwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1tb2RhbDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1idG4ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjay1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMTEsIDExMSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXVsIC5jb21wbGV0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOEJGRjhCO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICM4QkZGOEIgMCUsICNGM0ZGRjEgMTAwJSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzhCRkY4QiAwJSwgI0YzRkZGMSAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhCRkY4QiAwJSwgI0YzRkZGMSAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1mb3JtOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLW1vZGFsIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1tb2RhbCAuYnRuIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLmRlbGV0ZS1wcm9qIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXREYXRlID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGVfb2IgPSBuZXcgRGF0ZSgpXHJcbiAgICBsZXQgZGF0ZSA9IChcIjBcIiArIGRhdGVfb2IuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XHJcbiAgICBsZXQgbW9udGggPSAoXCIwXCIgKyAoZGF0ZV9vYi5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcclxuICAgIGxldCB5ZWFyID0gZGF0ZV9vYi5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHJldHVybiB7ZGF0ZV9vYiwgZGF0ZSwgbW9udGgsIHllYXJ9XHJcbn1cclxuXHJcbmNvbnN0IGdldEN1cnJlbnREYXRlQW5kVGltZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZV9vYiwgZGF0ZSwgbW9udGgsIHllYXIgfSA9IGdldERhdGUoKVxyXG4gICAgbGV0IG1pbnV0ZXMgPSBkYXRlX29iLmdldE1pbnV0ZXMoKTtcclxuICAgIGxldCBzZWNvbmRzID0gZGF0ZV9vYi5nZXRTZWNvbmRzKCk7XHJcbiAgICBsZXQgaG91cnMgPSBkYXRlX29iLmdldEhvdXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXRlICsgXCIgXCIgKyBob3VycyArIFwiOlwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kc1xyXG59XHJcblxyXG5jb25zdCBnZXRDdXJyZW50RGF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0ZSwgbW9udGgsIHllYXIgfSA9IGdldERhdGUoKVxyXG4gICAgcmV0dXJuIHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXRlXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0Q3VycmVudERhdGUsIGdldEN1cnJlbnREYXRlQW5kVGltZX0iLCJpbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vUHJvamVjdHMnXHJcbmltcG9ydCB7IGZvcm1Db250YWluZXIsIGxvYWRDb250YWluZXIgfSBmcm9tICcuL1RvZ2dsZUNsYXNzJ1xyXG5cclxuY29uc3QgRnJvbSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcl9kaXYgPSBmb3JtQ29udGFpbmVyLmNvbnRhaW5lcl9kaXZcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0X2Zyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxyXG4gICAgcHJvamVjdF9mcm9tLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKVxyXG4gICAgcHJvamVjdF9mcm9tLmNsYXNzTGlzdCArPSBcImZvcm1zXCJcclxuXHJcbiAgICBjcmVhdGVGb3JtRWxlbWVudChwcm9qZWN0X2Zyb20sICdFbnRlciB0aXRsZSBvZiB0aGUgcHJvamVjdDogJywgJ3RpdGxlJywgJ3RleHQnLCB0cnVlKVxyXG4gICAgY3JlYXRlRm9ybUVsZW1lbnQocHJvamVjdF9mcm9tLCAnRGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3Q6ICcsICdkZXNjJywgJ3RleHQnKVxyXG4gICAgY3JlYXRlRm9ybUVsZW1lbnQocHJvamVjdF9mcm9tLCAnTGFzdCBkYXRlIGJlZm9yZSBzdWJtaXNzaW9uOiAnLCAnZGF0ZScsICdkYXRlJywgdHJ1ZSlcclxuXHJcbiAgICBjb25zdCBzdWJtaXRfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgc3VibWl0X2J1dHRvbi50eXBlID0gJ3N1Ym1pdCdcclxuICAgIHN1Ym1pdF9idXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIHByb2plY3QnXHJcbiAgICBzdWJtaXRfYnV0dG9uLmNsYXNzTGlzdCArPSBcImZvcm0tYnRuIGJ0blwiXHJcblxyXG4gICAgcHJvamVjdF9mcm9tLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBlLnRhcmdldC50aXRsZS52YWx1ZVxyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZS50YXJnZXQuZGVzYy52YWx1ZVxyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBlLnRhcmdldC5kYXRlLnZhbHVlXHJcbiAgICAgICAgUHJvamVjdExpc3QuY3JlYXRlQVByb2plY3QoeyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUgfSlcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnRvZ2dsZUZvcm0oKVxyXG4gICAgICAgIGxvYWRDb250YWluZXIudG9nZ2xlTG9hZCgpXHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RfZnJvbS5hcHBlbmRDaGlsZChzdWJtaXRfYnV0dG9uKVxyXG4gICAgY29udGFpbmVyX2Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0X2Zyb20pXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcl9kaXYpXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUZvcm1FbGVtZW50ID0gKGZvcm0sIGxhYmVsX3RleHQsIGxhYmVsX2ZvciwgdHlwZSwgcmVxdWlyZWQgPSBmYWxzZSkgPT4ge1xyXG4gICAgY29uc3QgZmllbGRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGZpZWxkX2Rpdi5jbGFzc0xpc3QgKz0gYGZvcm0gJHtsYWJlbF9mb3J9IGZpZWxkc2BcclxuXHJcbiAgICBjb25zdCB0aXRsZV9sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHRpdGxlX2xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgbGFiZWxfZm9yKVxyXG4gICAgdGl0bGVfbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbF90ZXh0XHJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHRpdGxlX2lucHV0LmF1dG9jb21wbGV0ZSA9ICdvZmYnXHJcbiAgICB0aXRsZV9pbnB1dC50eXBlID0gdHlwZVxyXG4gICAgdGl0bGVfaW5wdXQubmFtZSA9IGxhYmVsX2ZvclxyXG4gICAgdGl0bGVfaW5wdXQuaWQgPSBsYWJlbF9mb3JcclxuICAgIHRpdGxlX2lucHV0LnJlcXVpcmVkID0gcmVxdWlyZWRcclxuICAgIFxyXG4gICAgZmllbGRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2xhYmVsKVxyXG4gICAgZmllbGRfZGl2LmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KVxyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRfZGl2KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnJvbVxyXG5leHBvcnQge2Zvcm1Db250YWluZXJ9IiwiaW1wb3J0IGFkZF9idG4gZnJvbSAnLi9pY29ucy9wbHVzLnBuZydcclxuaW1wb3J0IGRlbGV0ZV9idG4gZnJvbSAnLi9pY29ucy90cmFzaC5wbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7YWRkX2J0biwgZGVsZXRlX2J0bn0iLCJpbXBvcnQgeyBQcm9qZWN0cywgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9Qcm9qZWN0c1wiXHJcbmltcG9ydCB7IGZvcm1Db250YWluZXIsIGxvYWRDb250YWluZXIsIHNpbmdsZVByb2plY3REaXNwbGF5IH0gZnJvbSBcIi4vVG9nZ2xlQ2xhc3NcIlxyXG5pbXBvcnQgUHJvamVjdFBhZ2UgZnJvbSBcIi4vUHJvamVjdFBhZ2VcIlxyXG5pbXBvcnQgSWNvbnMgZnJvbSAnLi9JY29ucydcclxuXHJcbmNvbnN0IExvYWRwYWdlID0gKCkgPT4ge1xyXG4gICAgUHJvamVjdExpc3Quc2V0UHJvamVjdExpc3QoKVxyXG4gICAgY29uc3QgY29udGFpbmVyRGl2ID0gbG9hZENvbnRhaW5lci5jb250YWluZXJEaXZcclxuXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QgKz0gXCJidG4tcHJvamVjdC1jcmVhdGUgYnRuXCJcclxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBhIFByb2plY3RcIlxyXG5cclxuICAgIGNvbnN0IHByb2plY3RzVWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcclxuICAgIHByb2plY3RzVWwuY2xhc3NMaXN0ICs9IFwicHJvamVjdC10aXRsZXMtdWxcIlxyXG4gICAgbG9hZENvbnRhaW5lci5Mb2FkUG9yaihQcm9qZWN0TGlzdERvbSwgcHJvamVjdHNVbClcclxuICAgIFByb2plY3RMaXN0RG9tKHByb2plY3RzVWwpXHJcbiAgICBcclxuICAgIGNyZWF0ZVByb2plY3RCdXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBsb2FkQ29udGFpbmVyLnRvZ2dsZUxvYWQoKVxyXG4gICAgICAgIGZvcm1Db250YWluZXIudG9nZ2xlRm9ybSgpXHJcbiAgICAgICAgUHJvamVjdExpc3REb20ocHJvamVjdHNVbClcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZHJlbihjb250YWluZXJEaXYsIFtjcmVhdGVQcm9qZWN0QnV0dG9uLCBwcm9qZWN0c1VsXSlcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyRGl2KVxyXG59XHJcblxyXG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnREb20sIGNoaWxkRG9tcykgPT4ge1xyXG4gICAgY2hpbGREb21zLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0TGlzdERvbSA9ICh1bCkgPT4ge1xyXG4gICAgdWwuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgUHJvamVjdExpc3QuZ2V0UHJvamVjdExpc3QoKS5mb3JFYWNoKChwcm9qLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICghcHJvai5wcm9qZWN0LmRlbGV0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBsdXNfYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAgICAgcGx1c19hZGQuc3JjID0gSWNvbnMuYWRkX2J0blxyXG4gICAgICAgICAgICBwbHVzX2FkZC53aWR0aCA9IDE1XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBkZWxldGVEaXYuY2xhc3NOYW1lID0gJ2RlbGV0ZS1wcm9qJ1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlX2J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIGRlbGV0ZV9idG4uc3JjID0gSWNvbnMuZGVsZXRlX2J0blxyXG4gICAgICAgICAgICBkZWxldGVfYnRuLndpZHRoID0gMTVcclxuICAgICAgICAgICAgZGVsZXRlRGl2LmFwcGVuZENoaWxkKGRlbGV0ZV9idG4pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qLnByb2plY3QudGl0bGVcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICs9IFwicHJvamVjdC10aXRsZS1saXN0XCJcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IHByb2oucHJvamVjdC5pZFxyXG5cclxuICAgICAgICAgICAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCwgW3RpdGxlLCBwbHVzX2FkZCwgZGVsZXRlRGl2XSlcclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwbHVzX2FkZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZGVsZXRlX2J0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RMaXN0LmRlbGV0ZVByb2plY3QoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdExpc3REb20odWwpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RQYWdlKHsgcHJvak9iajogcHJvai5wcm9qZWN0LCBwcm9qIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlUHJvamVjdERpc3BsYXkudG9nZ2xlU2luZ2xlUHJvamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZENvbnRhaW5lci50b2dnbGVMb2FkKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZHBhZ2UiLCJpbXBvcnQgeyBsb2FkQ29udGFpbmVyLCBzaW5nbGVQcm9qZWN0RGlzcGxheSB9IGZyb20gXCIuL1RvZ2dsZUNsYXNzXCJcclxuaW1wb3J0IFRhc2tNb2RhbCBmcm9tIFwiLi9UYXNrTW9kYWxcIlxyXG5pbXBvcnQgVGFza0NyZWF0ZUZvcm1Nb2RhbCBmcm9tIFwiLi9UYXNrQ3JlYXRlRm9ybU1vZGFsXCJcclxuXHJcbmNvbnN0IFByb2plY3RQYWdlID0gKHsgcHJvak9iaiwgcHJvaiB9KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJfZGl2ID0gc2luZ2xlUHJvamVjdERpc3BsYXkuY29udGFpbmVyX2RpdlxyXG4gICAgY29udGFpbmVyX2Rpdi5pbm5lckhUTUwgPSBcIlwiXHJcblxyXG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhlYWRlckRpdi5jbGFzc0xpc3QgKz0gXCJoZWFkZXIgdGl0bGVcIlxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvak9iai50aXRsZSArIFwiOiBcIlxyXG4gICAgdGl0bGUuY2xhc3NMaXN0ICs9IFwicHJvamVjdC10aXRsZVwiXHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGR1ZURhdGVQLmlubmVyVGV4dCA9IGBEdWUgRGF0ZTogJHtwcm9qT2JqLmR1ZURhdGV9YFxyXG4gICAgZHVlRGF0ZVAuY2xhc3NMaXN0ICs9IFwicHJvamVjdC10aXRsZSBkYXRlXCJcclxuXHJcbiAgICBhcHBlbmRDaGlsZHJlbihoZWFkZXJEaXYsIFt0aXRsZSwgZHVlRGF0ZVBdKVxyXG5cclxuICAgIGNvbnN0IGJhY2tfYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGJhY2tfYnRuLnR5cGUgPSAnYnV0dG9uJ1xyXG4gICAgYmFja19idG4uaW5uZXJUZXh0ID0gJ0JhY2snXHJcbiAgICBiYWNrX2J0bi5jbGFzc0xpc3QgKz0gJ2J0biBiYWNrLWJ0bidcclxuXHJcbiAgICBjb25zdCBjcmVhdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgY3JlYXRUYXNrQnRuLmlubmVyVGV4dCA9ICdBZGQgYSBUYXNrJ1xyXG4gICAgY3JlYXRUYXNrQnRuLmNsYXNzTGlzdCArPSAnYnRuIHRhc2stYnRuJ1xyXG5cclxuICAgIGNvbnN0IHRhc2tVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgIHRhc2tVbC5jbGFzc0xpc3QgKz0gXCJ0YXNrLXVsXCJcclxuICAgIHNob3dBbGxUYXNrKHByb2pPYmosIHRhc2tVbClcclxuXHJcbiAgICBjcmVhdFRhc2tCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcHJvai5jcmVhdGVUYXNrKClcclxuICAgICAgICAgICAgVGFza0NyZWF0ZUZvcm1Nb2RhbCh7c2hvdzogc2hvd0FsbFRhc2ssIHByb2pPYmosIHVsOiB0YXNrVWwsIHByb2p9KVxyXG4gICAgICAgICAgICAvLyBzaG93QWxsVGFzayhwcm9qT2JqLCB0YXNrVWwpXHJcbiAgICB9XHJcblxyXG4gICAgYmFja19idG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaW5nbGVQcm9qZWN0RGlzcGxheS50b2dnbGVTaW5nbGVQcm9qZWN0KClcclxuICAgICAgICBsb2FkQ29udGFpbmVyLnRvZ2dsZUxvYWQoKVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkcmVuKGNvbnRhaW5lcl9kaXYsIFtoZWFkZXJEaXYsIHRhc2tVbCwgY3JlYXRUYXNrQnRuLCBiYWNrX2J0bl0pXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcl9kaXYpXHJcbn1cclxuXHJcbmNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudERvbSwgY2hpbGREb21zKSA9PiB7XHJcbiAgICBjaGlsZERvbXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGNoaWxkKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHNob3dBbGxUYXNrID0gKHByb2osIHVsKSA9PiB7XHJcbiAgICB1bC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBwcm9qLnRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIHRhc2tMaS5pbm5lclRleHQgPSB0YXNrLmdldFRpdGxlKClcclxuICAgICAgICB0YXNrTGkuY2xhc3NMaXN0ICs9IFwidGFzay1saVwiXHJcbiAgICAgICAgaWYgKHRhc2suZ2V0VGFza09iamVjdCgpLmlzQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgdGFza0xpLmNsYXNzTGlzdCArPSAnIGNvbXBsZXRlZCdcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFza0xpLmlkID0gaW5kZXhcclxuICAgICAgICB1bC5hcHBlbmRDaGlsZCh0YXNrTGkpXHJcblxyXG4gICAgICAgIHRhc2tMaS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0YXNrTGkpIHtcclxuICAgICAgICAgICAgICAgIFRhc2tNb2RhbCh0YXNrLCBzaG93QWxsVGFzaywgcHJvaiwgdWwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0UGFnZSIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkZWxldGVkID0gZmFsc2V9KSA9PiB7XHJcbiAgICBsZXQgcHJvamVjdCA9IHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICB0YXNrczogW10sXHJcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcclxuICAgICAgICBkZWxldGVkOiBkZWxldGVkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBwcm9tcHQoXCJUaXRsZSBvZiB0aGUgdGFza1wiKVxyXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IHByb21wdChcIkRlc2NyaXBpdGlvbiBvZiB0aGUgdGFza1wiKVxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHByb21wdChcIlByaW9yaXR5XCIpXHJcbiAgICAgICAgY29uc3QgdGFzayA9IFRhc2soeyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5IH0pXHJcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKHRhc2spXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlVGFza0luUGxhY2UgPSAoeyB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza1ByaW9yaXR5IH0pID0+IHtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2goVGFzayh7IHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHkgfSkpXHJcbiAgICAgICAgUHJvamVjdExpc3QudXBkYXRlUHJvamVjdExpc3QoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvamVjdCxcclxuICAgICAgICBjcmVhdGVUYXNrLFxyXG4gICAgICAgIGNyZWF0ZVRhc2tJblBsYWNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RMaXN0ID0gKCgpID0+IHtcclxuICAgIGxldCBwcm9qcyA9IFtdXHJcbiAgICAvLyBwcm9qcy5wdXNoKFByb2plY3RzKHsgaWQ6IHByb2pzLmxlbmd0aCArIDEsIHRpdGxlOiAnT25lJywgZGVzY3JpcHRpb246ICdPbmUgZGVzY3JpcHRpb24nLCBkdWVEYXRlOiAnMjMtNC0yMDIzJyB9KSlcclxuICAgIC8vIHByb2pzWzBdLmNyZWF0ZVRhc2tJblBsYWNlKHt0YXNrVGl0bGU6IFwiVGFzayBmb3IgbnVtYmVyIDFcIiwgdGFza0Rlc2NyaXB0aW9uOiBcIkRvIHNvbWV0aGluZ3NcIiwgdGFza1ByaW9yaXR5OiAyfSlcclxuICAgIC8vIHByb2pzLnB1c2goUHJvamVjdHMoeyBpZDogcHJvanMubGVuZ3RoICsgMSwgdGl0bGU6ICdUd28nLCBkZXNjcmlwdGlvbjogJ1R3byBkZXNjcmlwdGlvbicsIGR1ZURhdGU6ICcyMy00LTIwMjMnfSkpXHJcblxyXG4gICAgY29uc3QgY3JlYXRlQVByb2plY3QgPSAocHJvaikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHAxID0gUHJvamVjdHMoeyAuLi5wcm9qLCBpZDogcHJvanMubGVuZ3RoICsgMSB9KVxyXG4gICAgICAgIHByb2pzLnB1c2gocDEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qcykpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2pzXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2pzXCIpKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvanNcIiwgSlNPTi5zdHJpbmdpZnkocHJvanMpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFByb2pzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2pzXCIpKVxyXG5cclxuICAgICAgICAgICAgcHJvanMgPSBzdG9yZWRQcm9qcy5tYXAocHJvaiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWNyZWF0ZWRQcm9qID0gUHJvamVjdHMocHJvai5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgcmVjcmVhdGVkUHJvai5wcm9qZWN0LnRhc2tzID0gcHJvai5wcm9qZWN0LnRhc2tzLm1hcCh0YXNrID0+IFRhc2sodGFzay50YXNrKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWNyZWF0ZWRQcm9qXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBwcm9qcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qcykpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qcykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVBUHJvamVjdCxcclxuICAgICAgICBnZXRQcm9qZWN0TGlzdCxcclxuICAgICAgICBzZXRQcm9qZWN0TGlzdCxcclxuICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCxcclxuICAgICAgICBkZWxldGVQcm9qZWN0LFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xyXG5leHBvcnQge1Byb2plY3RMaXN0fSIsImltcG9ydCB7IGdldEN1cnJlbnREYXRlLCBnZXRDdXJyZW50RGF0ZUFuZFRpbWUgfSBmcm9tIFwiLi9EYXRldFwiXHJcblxyXG5jb25zdCBUYXNrID0gKHsgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tQcmlvcml0eSB9KSA9PiB7XHJcbiAgICBcclxuICAgIGxldCB0YXNrID0ge1xyXG4gICAgICAgIHRhc2tUaXRsZTogdGFza1RpdGxlLFxyXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLFxyXG4gICAgICAgIGNyZWF0ZWQ6IGdldEN1cnJlbnREYXRlQW5kVGltZSgpLFxyXG4gICAgICAgIHRhc2tQcmlvcml0eTogdGFza1ByaW9yaXR5LFxyXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRUaXRsZSA9ICh0eHQpID0+IHtcclxuICAgICAgICB0YXNrLnRpdGxlID0gdHh0XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2sudGFza1RpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAodHh0KSA9PiB7XHJcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHR4dFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YXNrLnRhc2tEZXNjcmlwdGlvbiBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaW1lQ3JlYXRlZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFzay5kdWVkYXRlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkgdGFzay5pc0NvbXBsZXRlID0gZmFsc2VcclxuICAgICAgICBlbHNlIHRhc2suaXNDb21wbGV0ZSA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUYXNrT2JqZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0YXNrXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRhc2ssXHJcbiAgICAgICAgc2V0VGl0bGUsXHJcbiAgICAgICAgZ2V0VGl0bGUsXHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXHJcbiAgICAgICAgZ2V0VGltZUNyZWF0ZWQsXHJcbiAgICAgICAgc2V0Q29tcGxldGUsXHJcbiAgICAgICAgZ2V0VGFza09iamVjdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrIiwiY29uc3QgVGFza0NyZWF0ZUZvcm1Nb2RhbCA9ICh7c2hvdywgcHJvak9iaiwgdWwsIHByb2p9KSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbW9kYWxCYWNrRGl2LmNsYXNzTmFtZSA9IFwiYmFja1wiXHJcblxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbW9kYWxEaXYuY2xhc3NOYW1lID0gXCJtb2RhbCB0YXNrLW1vZGFsXCJcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBjbG9zZS1tb2RhbFwiXHJcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlhcIlxyXG5cclxuICAgIGNvbnN0IHRhc2tDcmVhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICB0YXNrQ3JlYXRlRm9ybS5pZCA9ICd0YXNrRm9ybSdcclxuXHJcbiAgICAvLyBUaXRsZSBkaXZcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpdGxlRGl2LmNsYXNzTmFtZSA9ICd0YXNrLXRpdGxlLWZvcm0gdGFzay1mb3JtJ1xyXG5cclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSBvZiB0aGUgVGFzazogJ1xyXG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZS1uYW1lJylcclxuXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnXHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGVOYW1lJ1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZS1uYW1lJ1xyXG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWVcclxuICAgIC8vIC8vXHJcblxyXG4gICAgLy8gRGVzY3JpcHRpb24gRGl2XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc05hbWUgPSAndGFzay1kZXNjLWZvcm0gdGFzay1mb3JtJ1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnXHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2MnKVxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dGFyZWEnXHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzYydcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzYydcclxuICAgIC8vIC8vXHJcblxyXG4gICAgLy8gUHJpb3JpdHkgRGl2XHJcbiAgICBjb25zdCBwcmlvcml5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByaW9yaXlEaXYuY2xhc3NOYW1lICs9ICd0YXNrLXByaW9yaXR5LWZvcm0gdGFzay1mb3JtJ1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAnXHJcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5JylcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ251bWJlcidcclxuICAgIHByaW9yaXR5SW5wdXQubmFtZSA9ICdwcmlvcml0eSdcclxuICAgIHByaW9yaXR5SW5wdXQuaWQgPSAncHJpb3JpdHknXHJcbiAgICAvLyAvLyBcclxuXHJcbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGZvcm1TdWJtaXQuaW5uZXJUZXh0ID0gJ0NyZWF0ZSdcclxuICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0ICs9ICdidG4gZm9ybS1idG4nXHJcbiAgICBmb3JtU3VibWl0LnR5cGUgPSAnc3VibWl0J1xyXG4gICAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2Zvcm0nLCAndGFza0Zvcm0nKVxyXG5cclxuICAgIHRhc2tDcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZS50YXJnZXQudGl0bGVOYW1lLnZhbHVlXHJcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZS50YXJnZXQuZGVzYy52YWx1ZVxyXG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGUudGFyZ2V0LnByaW9yaXR5LnZhbHVlXHJcbiAgICAgICAgcHJvai5jcmVhdGVUYXNrSW5QbGFjZSh7IHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrUHJpb3JpdHkgfSlcclxuICAgICAgICBjbG9zZUJ0bi5jbGljaygpXHJcbiAgICAgICAgc2hvdyhwcm9qT2JqLCB1bClcclxuICAgIH0pXHJcblxyXG4gICAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQmFja0RpdilcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZHJlbihwcmlvcml5RGl2LCBbcHJpb3JpdHlMYWJlbCwgcHJpb3JpdHlJbnB1dF0pXHJcbiAgICBhcHBlbmRDaGlsZHJlbihkZXNjcmlwdGlvbkRpdiwgW2Rlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXRdKVxyXG4gICAgYXBwZW5kQ2hpbGRyZW4odGl0bGVEaXYsIFt0aXRsZUxhYmVsLCB0aXRsZUlucHV0XSlcclxuICAgIGFwcGVuZENoaWxkcmVuKHRhc2tDcmVhdGVGb3JtLCBbdGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBwcmlvcml5RGl2XSlcclxuICAgIGFwcGVuZENoaWxkcmVuKG1vZGFsRGl2LCBbY2xvc2VCdG4sIHRhc2tDcmVhdGVGb3JtLCBmb3JtU3VibWl0XSlcclxuICAgIG1vZGFsQmFja0Rpdi5hcHBlbmRDaGlsZChtb2RhbERpdilcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCYWNrRGl2KVxyXG59XHJcblxyXG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnREb20sIGNoaWxkRG9tcykgPT4ge1xyXG4gICAgY2hpbGREb21zLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrQ3JlYXRlRm9ybU1vZGFsIiwiY29uc3QgVGFza01vZGFsID0gKHRhc2ssIHNob3csIHByb2osIHVsKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbEJhY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbW9kYWxCYWNrRGl2LmNsYXNzTmFtZSA9IFwiYmFja1wiXHJcbiAgICBcclxuICAgIC8vSW5zaWRlIE1vZGFsXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtb2RhbERpdi5jbGFzc05hbWUgPSBcIm1vZGFsXCJcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjbG9zZUJ0bi5jbGFzc05hbWUgPSBcImJ0biBjbG9zZS1tb2RhbFwiXHJcbiAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlhcIlxyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGhlYWREaXYuY2xhc3NOYW1lID0gXCJ0YXNrLWhlYWRcIlxyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9IFwidGFzay1tYWluXCJcclxuICAgIGNvbnN0IGZvb3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZm9vdERpdi5jbGFzc05hbWUgPSBcInRhc2stZm9vdFwiXHJcblxyXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxyXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay5nZXRUaXRsZSgpXHJcblxyXG4gICAgY29uc3QgZGVzY1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGRlc2NQLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIlxyXG4gICAgZGVzY1AuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi10aXRsZVwiXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UYXNrUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZGVzY3JpcHRpb25UYXNrUC50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGVzY3JpcHRpb24oKVxyXG4gICAgZGVzY3JpcHRpb25UYXNrUC5jbGFzc05hbWUgPSBcImRlc2NyaXB0aW9uLXRhc2tcIlxyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbXBsZXRlQnRuLmlubmVyVGV4dCA9IFwiQ29tcGxldGVcIlxyXG4gICAgY29tcGxldGVCdG4uY2xhc3NMaXN0ICs9IFwiYnRuIGNvbXBsZXRlLWJ0blwiXHJcblxyXG4gICAgY29uc3QgY3JlYXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY3JlYXRlZC50ZXh0Q29udGVudCA9ICdDcmVhdGVkIG9uOiAnICsgdGFzay5nZXRUYXNrT2JqZWN0KCkuY3JlYXRlZFxyXG5cclxuICAgIGNvbXBsZXRlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGFzay5zZXRDb21wbGV0ZSgpXHJcbiAgICAgICAgc2hvdyhwcm9qLCB1bClcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsQmFja0RpdilcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWxCYWNrRGl2KVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkcmVuKGZvb3REaXYsIFtjb21wbGV0ZUJ0biwgY3JlYXRlZF0pXHJcbiAgICBhcHBlbmRDaGlsZHJlbihtYWluRGl2LCBbZGVzY1AsIGRlc2NyaXB0aW9uVGFza1BdKVxyXG4gICAgYXBwZW5kQ2hpbGRyZW4oaGVhZERpdiwgW3Rhc2tUaXRsZSwgY2xvc2VCdG5dKVxyXG4gICAgYXBwZW5kQ2hpbGRyZW4obW9kYWxEaXYsIFtoZWFkRGl2LCBtYWluRGl2LCBmb290RGl2XSlcclxuICAgIG1vZGFsQmFja0Rpdi5hcHBlbmRDaGlsZChtb2RhbERpdilcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWxCYWNrRGl2KVxyXG59XHJcblxyXG5jb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnREb20sIGNoaWxkRG9tcykgPT4ge1xyXG4gICAgY2hpbGREb21zLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChjaGlsZClcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrTW9kYWwiLCJjb25zdCBmb3JtQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdCArPSBcImZvcm0tY29udGFpbmVyIGhpZGRlblwiXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRhaW5lcl9kaXYsXHJcbiAgICAgICAgdG9nZ2xlRm9ybVxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5jb25zdCBsb2FkQ29udGFpbmVyID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnRhaW5lckRpdi5jbGFzc0xpc3QgKz0gXCJjb250YWluZXJcIlxyXG4gICAgbGV0IGxvYWRwcm9qLCBwcm9qZWN0VWxcclxuXHJcbiAgICBjb25zdCBMb2FkUG9yaiA9IChsLCBwcm9qZWN0VWxQYXJhbSkgPT4ge1xyXG4gICAgICAgIGxvYWRwcm9qID0gbFxyXG4gICAgICAgIHByb2plY3RVbCA9IHByb2plY3RVbFBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBjb250YWluZXJEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxyXG4gICAgICAgIGxvYWRwcm9qKHByb2plY3RVbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbnRhaW5lckRpdixcclxuICAgICAgICB0b2dnbGVMb2FkLFxyXG4gICAgICAgIExvYWRQb3JqXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmNvbnN0IHNpbmdsZVByb2plY3REaXNwbGF5ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb250YWluZXJfZGl2LmNsYXNzTGlzdCArPSBcImNvbnRhaW5lciBoaWRkZW5cIlxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVNpbmdsZVByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyX2Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb250YWluZXJfZGl2LFxyXG4gICAgICAgIHRvZ2dsZVNpbmdsZVByb2plY3RcclxuICAgIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IHtmb3JtQ29udGFpbmVyLCBsb2FkQ29udGFpbmVyLCBzaW5nbGVQcm9qZWN0RGlzcGxheX0iLCJpbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snXHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuL1Byb2plY3RzJ1xyXG5pbXBvcnQgTG9hZHBhZ2UgZnJvbSAnLi9Mb2FkcGFnZSdcclxuaW1wb3J0IEZyb20gZnJvbSAnLi9Gcm9tJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgICBMb2FkcGFnZSgpXHJcbiAgICBGcm9tKClcclxufVxyXG5cclxuaW5kZXgoKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9