/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/pizza-background.jpg */ "./src/img/pizza-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Andika:ital,wght@1,400;1,700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes slideInLeft {\r\n  from {\r\n    transform: translateX(-20dvw);\r\n  }\r\n\r\n  to {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translateX(20dvw);\r\n  }\r\n\r\n  to {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n\r\nhtml {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n  color: whitesmoke;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n/* Home */\r\n\r\n\r\n.animate-left {\r\n  animation: slideInLeft 1s ease-out;\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.animate-rigth{\r\n  animation: slideInRight 1s ease-out;\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\nheader{\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\nspan{\r\n  color: red;\r\n}\r\n\r\n.phone-img{\r\n width: 1.5rem;\r\n height: 1.5rem;\r\n margin-right: 1rem;\r\n}\r\n\r\n.home{\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.phone-number {\r\n flex: 1;\r\n margin-right: 20vh;\r\n display: flex;\r\n justify-content: flex-end;\r\n align-items: center;\r\n margin-right: 20vh;\r\n}\r\n\r\n.header {\r\n  font-size: 5rem;\r\n  font-family: 'Londrina Solid', cursive;\r\n  margin-top: 23.6px;\r\n  margin-bottom: 23.6px;\r\n  cursor: default;\r\n  text-align: center;\r\n}\r\n\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\nnav > ul > li {\r\n  flex: 1;\r\n  padding: 3px;\r\n  margin: 15px;\r\n  transition: all 0.3s ease;\r\n  border-bottom: 2px solid transparent;\r\n}\r\n\r\nul > li:hover {\r\n  cursor: pointer;\r\n  transform: translateY(-5px);\r\n  border-color: #fff;\r\n}\r\n\r\n.active{\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.text-content {\r\n  margin: 3px;\r\n  font-size: 1.5rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  width: 100%;\r\n}\r\n\r\n.quote {\r\n  text-align: end;\r\n  margin-bottom: 0;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.quote-author {\r\n  margin-top: 5px;\r\n  text-align: end;\r\n}\r\n\r\n/* Menu */\r\n\r\n\r\n.menu{\r\n  background: rgba(0, 0, 0, 0.8);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 30px;\r\n  padding: 1rem 8rem;\r\n  margin-top: 1rem;\r\n\r\n}\r\n\r\n.menu-header{\r\n  text-align: center;\r\n  font-family: 'Andika', sans-serif;\r\n  margin: 0 auto ;\r\n}\r\n\r\n.menu-options {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100vh;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n}\r\n\r\n.option {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 0fr 1fr;\r\n  padding: 1rem;\r\n  width: inherit;\r\n  height: 2.5rem;\r\n  cursor: default;\r\n}\r\n\r\n.option-name{\r\n  font-size: 25px;\r\n}\r\n\r\n.option-desc{\r\n  grid-column: 1/2;\r\n  font-family: 'Lobster', cursive;\r\n}\r\n\r\n.price {\r\n  grid-row: 1/2;\r\n  grid-column: 2/3;\r\n  justify-self: end;\r\n  align-self: center;\r\n  font-size: 17px;\r\n}\r\n\r\n  /* About */\r\n\r\n  .about-container{\r\n    background: rgba(0, 0, 0, 0.8);\r\n    backdrop-filter: blur(10px);\r\n    border-radius: 30px;\r\n    padding: 3rem 2rem;\r\n    margin: 2rem 15rem 0 15rem;\r\n    font-size: 20px;\r\n  }\r\n\r\n  p {\r\n    margin: 15px;\r\n    font-family: 'Lobster', cursive;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAMA;EACE;IACE,6BAA6B;EAC/B;;EAEA;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE;IACE,4BAA4B;EAC9B;;EAEA;IACE,uBAAuB;EACzB;AACF;;;AAGA;EACE,yDAAiD;EACjD,4BAA4B;EAC5B,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA,SAAS;;;AAGT;EACE,kCAAkC;EAClC,wBAAwB;AAC1B;;AAEA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,2BAA2B;AAC7B;;;AAGA;EACE,UAAU;AACZ;;AAEA;CACC,aAAa;CACb,cAAc;CACd,kBAAkB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;;AAExB;;AAEA;CACC,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,yBAAyB;CACzB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;EACE,eAAe;EACf,sCAAsC;EACtC,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;;AAGA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iCAAiC;EACjC,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA,SAAS;;;AAGT;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;;AAElB;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;EAC3B,aAAa;EACb,cAAc;EACd,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB;;EAEE,UAAU;;EAEV;IACE,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;IACnB,kBAAkB;IAClB,0BAA0B;IAC1B,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,+BAA+B;EACjC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,300&display=swap\");\r\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Andika:ital,wght@1,400;1,700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&display=swap');\r\n\r\n@keyframes slideInLeft {\r\n  from {\r\n    transform: translateX(-20dvw);\r\n  }\r\n\r\n  to {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    transform: translateX(20dvw);\r\n  }\r\n\r\n  to {\r\n    transform: translate(0);\r\n  }\r\n}\r\n\r\n\r\nhtml {\r\n  background-image: url(\"img/pizza-background.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 100vh;\r\n  color: whitesmoke;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n/* Home */\r\n\r\n\r\n.animate-left {\r\n  animation: slideInLeft 1s ease-out;\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.animate-rigth{\r\n  animation: slideInRight 1s ease-out;\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\nheader{\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n}\r\n\r\n\r\nspan{\r\n  color: red;\r\n}\r\n\r\n.phone-img{\r\n width: 1.5rem;\r\n height: 1.5rem;\r\n margin-right: 1rem;\r\n}\r\n\r\n.home{\r\n  display: flex;\r\n  flex-direction: column;\r\n  \r\n}\r\n\r\n.phone-number {\r\n flex: 1;\r\n margin-right: 20vh;\r\n display: flex;\r\n justify-content: flex-end;\r\n align-items: center;\r\n margin-right: 20vh;\r\n}\r\n\r\n.header {\r\n  font-size: 5rem;\r\n  font-family: 'Londrina Solid', cursive;\r\n  margin-top: 23.6px;\r\n  margin-bottom: 23.6px;\r\n  cursor: default;\r\n  text-align: center;\r\n}\r\n\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  text-align: center;\r\n}\r\n\r\nnav > ul > li {\r\n  flex: 1;\r\n  padding: 3px;\r\n  margin: 15px;\r\n  transition: all 0.3s ease;\r\n  border-bottom: 2px solid transparent;\r\n}\r\n\r\nul > li:hover {\r\n  cursor: pointer;\r\n  transform: translateY(-5px);\r\n  border-color: #fff;\r\n}\r\n\r\n.active{\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.text-content {\r\n  margin: 3px;\r\n  font-size: 1.5rem;\r\n  font-family: \"Roboto\", sans-serif;\r\n  width: 100%;\r\n}\r\n\r\n.quote {\r\n  text-align: end;\r\n  margin-bottom: 0;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.quote-author {\r\n  margin-top: 5px;\r\n  text-align: end;\r\n}\r\n\r\n/* Menu */\r\n\r\n\r\n.menu{\r\n  background: rgba(0, 0, 0, 0.8);\r\n  backdrop-filter: blur(10px);\r\n  border-radius: 30px;\r\n  padding: 1rem 8rem;\r\n  margin-top: 1rem;\r\n\r\n}\r\n\r\n.menu-header{\r\n  text-align: center;\r\n  font-family: 'Andika', sans-serif;\r\n  margin: 0 auto ;\r\n}\r\n\r\n.menu-options {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100vh;\r\n  flex-direction: column;\r\n  font-size: 12px;\r\n}\r\n\r\n.option {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 0fr 1fr;\r\n  padding: 1rem;\r\n  width: inherit;\r\n  height: 2.5rem;\r\n  cursor: default;\r\n}\r\n\r\n.option-name{\r\n  font-size: 25px;\r\n}\r\n\r\n.option-desc{\r\n  grid-column: 1/2;\r\n  font-family: 'Lobster', cursive;\r\n}\r\n\r\n.price {\r\n  grid-row: 1/2;\r\n  grid-column: 2/3;\r\n  justify-self: end;\r\n  align-self: center;\r\n  font-size: 17px;\r\n}\r\n\r\n  /* About */\r\n\r\n  .about-container{\r\n    background: rgba(0, 0, 0, 0.8);\r\n    backdrop-filter: blur(10px);\r\n    border-radius: 30px;\r\n    padding: 3rem 2rem;\r\n    margin: 2rem 15rem 0 15rem;\r\n    font-size: 20px;\r\n  }\r\n\r\n  p {\r\n    margin: 15px;\r\n    font-family: 'Lobster', cursive;\r\n  }"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAbout(){
    const about = document.createElement('div')
    about.classList.add('about-container')
    
    const p1 = document.createElement('p')
    p1.textContent = "Welcome to our pizza restaurant, where we specialize in crafting delicious, authentic pizzas that are sure to satisfy your cravings. Our restaurant is dedicated to providing the highest quality ingredients, expertly prepared to create a taste experience that you won't soon forget."
    const p2 = document.createElement('p')
    p2.textContent = "We take pride in using only the freshest ingredients in our pizzas, from our homemade pizza dough to our signature tomato sauce and premium cheese blends. We also offer a wide range of toppings, including classic favorites like pepperoni and mushrooms, as well as unique combinations like goat cheese and caramelized onions."
    const p3 = document.createElement('p')
    p3.textContent = "At our pizza restaurant, we believe that pizza is more than just a meal – it's an experience. That's why we strive to create a warm and welcoming atmosphere for our customers, whether you're stopping in for a quick slice or settling in for a full meal with friends and family."
    const p4 = document.createElement('p')
    p4.textContent = "So whether you're a die-hard pizza lover or simply looking for a delicious meal, come visit us at our pizza restaurant and discover the perfect slice for you!"

    about.appendChild(p1)
    about.appendChild(p2)
    about.appendChild(p3)
    about.appendChild(p4)

    return about
}

function loadAbout(){
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createAbout());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");



function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  const name = document.createElement("h1");
  name.innerHTML  = " <span>MORE</span> THAN";
  name.classList.add("header");
  name.classList.add("animate-rigth")

  const name2 = document.createElement('h1')
  name2.innerHTML = ' JUST PIZZA'
  name2.classList.add('header')
  name2.classList.add('animate-left')

  const p1 = document.createElement("div");
  p1.classList.add("text-content");
  p1.innerHTML = "Our menu has something for everyone, stop <br> for a quick bite or get your favorites delivered <br> rigth to your door. ";


  const p2 = document.createElement('p')
  p2.classList.add('quote')
  p2.innerHTML = 'The best pizza I have ever had'
  const p3 = document.createElement('p')
  p3.classList.add('quote-author')
  p3.innerHTML = '— Some random guy'

  home.appendChild(name);
  home.appendChild(name2)
  home.appendChild(p1);
  home.appendChild(p2);
  home.appendChild(p3);
  return home;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const menuHeader = document.createElement('h1')
    menuHeader.classList.add('menu-header')
    menuHeader.textContent = 'PIZZA MENU'

    const menuOptions = document.createElement('div')
    menuOptions.classList.add('menu-options')

    menu.appendChild(menuHeader)
    menu.appendChild(menuOptions)
    
    menuOptions.appendChild(createOption("Mexican Hot", "double pepperoni, mince beef, red onions, jalapenos,  tomatoes", '10$'))
    menuOptions.appendChild(createOption("Supreme", "pepperoni, minced beff, mushrooms, mixed peppers, red onions, grated cheese", '15$'))
    menuOptions.appendChild(createOption("Seafood Pizza", "tomatoes, salad mix, seafood mix, olive oil, cheese, pepper", '20$'))
    menuOptions.appendChild(createOption("Margherita", "tomatoe sauce, extra mozzerella cheese, fresh basil", '20$'))
    menuOptions.appendChild(createOption("Pepperoni", "double pepperoni, extra mozzerella, tomatoe sauce, spice, olive oil", '20$'))
    menuOptions.appendChild(createOption("The Chicken One", "chicken, mushrooms, tomatoes, peppers", '30$'))
    return menu

}

function createOption(name, descp, cost){
    const option = document.createElement('div')
    option.classList.add('option')

    const optionName = document.createElement('div') 
    optionName.textContent = name
    optionName.classList.add('option-name')


    const optiondesc = document.createElement('div')
    optiondesc.textContent = descp
    optiondesc.classList.add('option-desc')
    
    const price = document.createElement('div')
    price.classList.add('price')
    price.textContent = cost

    option.appendChild(optionName)
    option.appendChild(optiondesc)
    option.appendChild(price)

    return option
}


function loadMenu(){
    const main = document.querySelector(".main");
    main.textContent = "";
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);


/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setActive": () => (/* binding */ setActive)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _img_phone_call_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/phone-call.png */ "./src/img/phone-call.png");






function createHeader() {
  const header = document.createElement("header");
  const phone = document.createElement('div')
  phone.classList.add('phone-number')
  
  const myIcon = new Image()
  myIcon.src = _img_phone_call_png__WEBPACK_IMPORTED_MODULE_3__
  myIcon.classList.add("phone-img")
  const phoneText = document.createElement('div')
  phoneText.innerHTML = '(305) 123-4567'

  phone.appendChild(myIcon)
  phone.appendChild(phoneText)
  header.appendChild(createNav());
  header.appendChild(phone)
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const home = document.createElement("li");
  home.classList.add("nav-li");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(home);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menu = document.createElement("li");
  menu.classList.add("nav-li");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(menu);
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  const about = document.createElement("li");
  about.classList.add("nav-li");
  about.textContent = "About";
  about.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(about);
    (0,_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });

  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(about);

  return nav;
}

function setActive(elm) {
  const li = document.querySelectorAll(".nav-li");

  li.forEach((li) => {
    if (elm !== li) {
      li.classList.remove("active");
    }
  });

  elm.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function startWebsite() {
  const content = document.querySelector("#content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  setActive(document.querySelector("li"));
  (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startWebsite);




/***/ }),

/***/ "./src/img/phone-call.png":
/*!********************************!*\
  !*** ./src/img/phone-call.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d89c137bd12eedda21a8.png";

/***/ }),

/***/ "./src/img/pizza-background.jpg":
/*!**************************************!*\
  !*** ./src/img/pizza-background.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "210a54b737a15b2b3686.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website */ "./src/website.js");




(0,_website__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmU7QUFDRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RE87QUFDQTtBQUNFO0FBQ1M7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFTO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpREFBUTtBQUNWO0FBQ0E7QUFDQSxpRUFBZSxZQUFZLEVBQUM7QUFDNUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNyQjtBQUNxQztBQUNyQztBQUNBLG9EQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZy9waXp6YS1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDcwMDsxLDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFuZGlrYTppdGFsLHdnaHRAMSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9yYTppdGFsLHdnaHRAMSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9uZHJpbmErU29saWQ6d2dodEA5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBkdncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMGR2dyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgKi9cXHJcXG5cXHJcXG5cXHJcXG4uYW5pbWF0ZS1sZWZ0IHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgMXMgZWFzZS1vdXQ7XFxyXFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlLXJpZ3Roe1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZUluUmlnaHQgMXMgZWFzZS1vdXQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuc3BhbntcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5waG9uZS1pbWd7XFxyXFxuIHdpZHRoOiAxLjVyZW07XFxyXFxuIGhlaWdodDogMS41cmVtO1xcclxcbiBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21le1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLnBob25lLW51bWJlciB7XFxyXFxuIGZsZXg6IDE7XFxyXFxuIG1hcmdpbi1yaWdodDogMjB2aDtcXHJcXG4gZGlzcGxheTogZmxleDtcXHJcXG4ganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gbWFyZ2luLXJpZ2h0OiAyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTG9uZHJpbmEgU29saWQnLCBjdXJzaXZlO1xcclxcbiAgbWFyZ2luLXRvcDogMjMuNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjMuNnB4O1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IHVsID4gbGkge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbnVsID4gbGk6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZle1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250ZW50IHtcXHJcXG4gIG1hcmdpbjogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnF1b3RlIHtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVvdGUtYXV0aG9yIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSAqL1xcclxcblxcclxcblxcclxcbi5tZW51e1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gOHJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tZW51LWhlYWRlcntcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQW5kaWthJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtb3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDB2aDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb24ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICB3aWR0aDogaW5oZXJpdDtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uLW5hbWV7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb24tZGVzY3tcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuICAvKiBBYm91dCAqL1xcclxcblxcclxcbiAgLmFib3V0LWNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDE1cmVtIDAgMTVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHAge1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFNQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGOzs7QUFHQTtFQUNFLHlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBLFNBQVM7OztBQUdUO0VBQ0Usa0NBQWtDO0VBQ2xDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLGtCQUFrQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0FBRXhCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOzs7QUFHVDtFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7RUFFRSxVQUFVOztFQUVWO0lBQ0UsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLCtCQUErQjtFQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNzAwOzEsMzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QW5kaWthOml0YWwsd2dodEAxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb3JhOml0YWwsd2dodEAxLDcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb25kcmluYStTb2xpZDp3Z2h0QDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwZHZ3KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBkdncpO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltZy9waXp6YS1iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lICovXFxyXFxuXFxyXFxuXFxyXFxuLmFuaW1hdGUtbGVmdCB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlSW5MZWZ0IDFzIGVhc2Utb3V0O1xcclxcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYW5pbWF0ZS1yaWd0aHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGVJblJpZ2h0IDFzIGVhc2Utb3V0O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbnNwYW57XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUtaW1ne1xcclxcbiB3aWR0aDogMS41cmVtO1xcclxcbiBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZXtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5waG9uZS1udW1iZXIge1xcclxcbiBmbGV4OiAxO1xcclxcbiBtYXJnaW4tcmlnaHQ6IDIwdmg7XFxyXFxuIGRpc3BsYXk6IGZsZXg7XFxyXFxuIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuIG1hcmdpbi1yaWdodDogMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBmb250LWZhbWlseTogJ0xvbmRyaW5hIFNvbGlkJywgY3Vyc2l2ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDIzLjZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIzLjZweDtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgPiB1bCA+IGxpIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBtYXJnaW46IDE1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG51bCA+IGxpOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZXtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5xdW90ZSB7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnF1b3RlLWF1dGhvciB7XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgKi9cXHJcXG5cXHJcXG5cXHJcXG4ubWVudXtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDhyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1oZWFkZXJ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ0FuZGlrYScsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDAgYXV0byA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LW9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwdmg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmciAxZnI7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbi1uYW1le1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9uLWRlc2N7XFxyXFxuICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlIHtcXHJcXG4gIGdyaWQtcm93OiAxLzI7XFxyXFxuICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbiAgLyogQWJvdXQgKi9cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XFxyXFxuICAgIG1hcmdpbjogMnJlbSAxNXJlbSAwIDE1cmVtO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwIHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQWJvdXQoKXtcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpXHJcbiAgICBcclxuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBvdXIgcGl6emEgcmVzdGF1cmFudCwgd2hlcmUgd2Ugc3BlY2lhbGl6ZSBpbiBjcmFmdGluZyBkZWxpY2lvdXMsIGF1dGhlbnRpYyBwaXp6YXMgdGhhdCBhcmUgc3VyZSB0byBzYXRpc2Z5IHlvdXIgY3JhdmluZ3MuIE91ciByZXN0YXVyYW50IGlzIGRlZGljYXRlZCB0byBwcm92aWRpbmcgdGhlIGhpZ2hlc3QgcXVhbGl0eSBpbmdyZWRpZW50cywgZXhwZXJ0bHkgcHJlcGFyZWQgdG8gY3JlYXRlIGEgdGFzdGUgZXhwZXJpZW5jZSB0aGF0IHlvdSB3b24ndCBzb29uIGZvcmdldC5cIlxyXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAyLnRleHRDb250ZW50ID0gXCJXZSB0YWtlIHByaWRlIGluIHVzaW5nIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIGluIG91ciBwaXp6YXMsIGZyb20gb3VyIGhvbWVtYWRlIHBpenphIGRvdWdoIHRvIG91ciBzaWduYXR1cmUgdG9tYXRvIHNhdWNlIGFuZCBwcmVtaXVtIGNoZWVzZSBibGVuZHMuIFdlIGFsc28gb2ZmZXIgYSB3aWRlIHJhbmdlIG9mIHRvcHBpbmdzLCBpbmNsdWRpbmcgY2xhc3NpYyBmYXZvcml0ZXMgbGlrZSBwZXBwZXJvbmkgYW5kIG11c2hyb29tcywgYXMgd2VsbCBhcyB1bmlxdWUgY29tYmluYXRpb25zIGxpa2UgZ29hdCBjaGVlc2UgYW5kIGNhcmFtZWxpemVkIG9uaW9ucy5cIlxyXG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAzLnRleHRDb250ZW50ID0gXCJBdCBvdXIgcGl6emEgcmVzdGF1cmFudCwgd2UgYmVsaWV2ZSB0aGF0IHBpenphIGlzIG1vcmUgdGhhbiBqdXN0IGEgbWVhbCDigJMgaXQncyBhbiBleHBlcmllbmNlLiBUaGF0J3Mgd2h5IHdlIHN0cml2ZSB0byBjcmVhdGUgYSB3YXJtIGFuZCB3ZWxjb21pbmcgYXRtb3NwaGVyZSBmb3Igb3VyIGN1c3RvbWVycywgd2hldGhlciB5b3UncmUgc3RvcHBpbmcgaW4gZm9yIGEgcXVpY2sgc2xpY2Ugb3Igc2V0dGxpbmcgaW4gZm9yIGEgZnVsbCBtZWFsIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LlwiXHJcbiAgICBjb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcDQudGV4dENvbnRlbnQgPSBcIlNvIHdoZXRoZXIgeW91J3JlIGEgZGllLWhhcmQgcGl6emEgbG92ZXIgb3Igc2ltcGx5IGxvb2tpbmcgZm9yIGEgZGVsaWNpb3VzIG1lYWwsIGNvbWUgdmlzaXQgdXMgYXQgb3VyIHBpenphIHJlc3RhdXJhbnQgYW5kIGRpc2NvdmVyIHRoZSBwZXJmZWN0IHNsaWNlIGZvciB5b3UhXCJcclxuXHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChwMSlcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHAyKVxyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQocDMpXHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChwNClcclxuXHJcbiAgICByZXR1cm4gYWJvdXRcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEFib3V0KCl7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkQWJvdXQiLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuYW1lLmlubmVySFRNTCAgPSBcIiA8c3Bhbj5NT1JFPC9zcGFuPiBUSEFOXCI7XHJcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG4gIG5hbWUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtcmlndGhcIilcclxuXHJcbiAgY29uc3QgbmFtZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgbmFtZTIuaW5uZXJIVE1MID0gJyBKVVNUIFBJWlpBJ1xyXG4gIG5hbWUyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXHJcbiAgbmFtZTIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1sZWZ0JylcclxuXHJcbiAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHAxLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRlbnRcIik7XHJcbiAgcDEuaW5uZXJIVE1MID0gXCJPdXIgbWVudSBoYXMgc29tZXRoaW5nIGZvciBldmVyeW9uZSwgc3RvcCA8YnI+IGZvciBhIHF1aWNrIGJpdGUgb3IgZ2V0IHlvdXIgZmF2b3JpdGVzIGRlbGl2ZXJlZCA8YnI+IHJpZ3RoIHRvIHlvdXIgZG9vci4gXCI7XHJcblxyXG5cclxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gIHAyLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJylcclxuICBwMi5pbm5lckhUTUwgPSAnVGhlIGJlc3QgcGl6emEgSSBoYXZlIGV2ZXIgaGFkJ1xyXG4gIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgcDMuY2xhc3NMaXN0LmFkZCgncXVvdGUtYXV0aG9yJylcclxuICBwMy5pbm5lckhUTUwgPSAn4oCUIFNvbWUgcmFuZG9tIGd1eSdcclxuXHJcbiAgaG9tZS5hcHBlbmRDaGlsZChuYW1lKTtcclxuICBob21lLmFwcGVuZENoaWxkKG5hbWUyKVxyXG4gIGhvbWUuYXBwZW5kQ2hpbGQocDEpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQocDIpO1xyXG4gIGhvbWUuYXBwZW5kQ2hpbGQocDMpO1xyXG4gIHJldHVybiBob21lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVNZW51KCl7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcblxyXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKVxyXG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9ICdQSVpaQSBNRU5VJ1xyXG5cclxuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIG1lbnVPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ21lbnUtb3B0aW9ucycpXHJcblxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SGVhZGVyKVxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51T3B0aW9ucylcclxuICAgIFxyXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKFwiTWV4aWNhbiBIb3RcIiwgXCJkb3VibGUgcGVwcGVyb25pLCBtaW5jZSBiZWVmLCByZWQgb25pb25zLCBqYWxhcGVub3MsICB0b21hdG9lc1wiLCAnMTAkJykpXHJcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24oXCJTdXByZW1lXCIsIFwicGVwcGVyb25pLCBtaW5jZWQgYmVmZiwgbXVzaHJvb21zLCBtaXhlZCBwZXBwZXJzLCByZWQgb25pb25zLCBncmF0ZWQgY2hlZXNlXCIsICcxNSQnKSlcclxuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihcIlNlYWZvb2QgUGl6emFcIiwgXCJ0b21hdG9lcywgc2FsYWQgbWl4LCBzZWFmb29kIG1peCwgb2xpdmUgb2lsLCBjaGVlc2UsIHBlcHBlclwiLCAnMjAkJykpXHJcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb24oXCJNYXJnaGVyaXRhXCIsIFwidG9tYXRvZSBzYXVjZSwgZXh0cmEgbW96emVyZWxsYSBjaGVlc2UsIGZyZXNoIGJhc2lsXCIsICcyMCQnKSlcclxuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbihcIlBlcHBlcm9uaVwiLCBcImRvdWJsZSBwZXBwZXJvbmksIGV4dHJhIG1venplcmVsbGEsIHRvbWF0b2Ugc2F1Y2UsIHNwaWNlLCBvbGl2ZSBvaWxcIiwgJzIwJCcpKVxyXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlT3B0aW9uKFwiVGhlIENoaWNrZW4gT25lXCIsIFwiY2hpY2tlbiwgbXVzaHJvb21zLCB0b21hdG9lcywgcGVwcGVyc1wiLCAnMzAkJykpXHJcbiAgICByZXR1cm4gbWVudVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKG5hbWUsIGRlc2NwLCBjb3N0KXtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnb3B0aW9uJylcclxuXHJcbiAgICBjb25zdCBvcHRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXHJcbiAgICBvcHRpb25OYW1lLnRleHRDb250ZW50ID0gbmFtZVxyXG4gICAgb3B0aW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdvcHRpb24tbmFtZScpXHJcblxyXG5cclxuICAgIGNvbnN0IG9wdGlvbmRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgb3B0aW9uZGVzYy50ZXh0Q29udGVudCA9IGRlc2NwXHJcbiAgICBvcHRpb25kZXNjLmNsYXNzTGlzdC5hZGQoJ29wdGlvbi1kZXNjJylcclxuICAgIFxyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKVxyXG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBjb3N0XHJcblxyXG4gICAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvbk5hbWUpXHJcbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uZGVzYylcclxuICAgIG9wdGlvbi5hcHBlbmRDaGlsZChwcmljZSlcclxuXHJcbiAgICByZXR1cm4gb3B0aW9uXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpe1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVxyXG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgbG9hZEFib3V0IGZyb20gXCIuL2Fib3V0XCI7XHJcbmltcG9ydCBJY29uICBmcm9tICcuL2ltZy9waG9uZS1jYWxsLnBuZyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIHBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lLW51bWJlcicpXHJcbiAgXHJcbiAgY29uc3QgbXlJY29uID0gbmV3IEltYWdlKClcclxuICBteUljb24uc3JjID0gSWNvblxyXG4gIG15SWNvbi5jbGFzc0xpc3QuYWRkKFwicGhvbmUtaW1nXCIpXHJcbiAgY29uc3QgcGhvbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBwaG9uZVRleHQuaW5uZXJIVE1MID0gJygzMDUpIDEyMy00NTY3J1xyXG5cclxuICBwaG9uZS5hcHBlbmRDaGlsZChteUljb24pXHJcbiAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVUZXh0KVxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHBob25lKVxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG5cclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdi1saVwiKTtcclxuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgIHNldEFjdGl2ZShob21lKTtcclxuICAgIGxvYWRIb21lKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpXCIpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gICAgc2V0QWN0aXZlKG1lbnUpO1xyXG4gICAgbG9hZE1lbnUoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcIm5hdi1saVwiKTtcclxuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuICBhYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICAgIHNldEFjdGl2ZShhYm91dCk7XHJcbiAgICBsb2FkQWJvdXQoKTtcclxuICB9KTtcclxuXHJcbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuICB1bC5hcHBlbmRDaGlsZChob21lKTtcclxuICB1bC5hcHBlbmRDaGlsZChtZW51KTtcclxuICB1bC5hcHBlbmRDaGlsZChhYm91dCk7XHJcblxyXG4gIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmUoZWxtKSB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1saVwiKTtcclxuXHJcbiAgbGkuZm9yRWFjaCgobGkpID0+IHtcclxuICAgIGlmIChlbG0gIT09IGxpKSB7XHJcbiAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGVsbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XHJcbiAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0V2Vic2l0ZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XHJcbiAgc2V0QWN0aXZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKSk7XHJcbiAgbG9hZEhvbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RhcnRXZWJzaXRlO1xyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBzdGFydFdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xyXG5cclxuc3RhcnRXZWJzaXRlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==