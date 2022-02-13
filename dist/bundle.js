/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/images/chicken.jpg */ \"./src/images/chicken.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../src/images/map.png */ \"./src/images/map.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Carter+One&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*CSS Resets*/\\n\\n*,\\n*::before,\\n*::after {\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\n/*\\nhtml,\\nbody,\\n#wrapper {\\n    height: 100%;\\n    width: 100%;\\n}\\n*/\\n\\n/*Fonts*/\\n\\n/*Variables*/\\n\\n:root {\\n    --background: #2b2b2b;\\n    --menu-background: rgba(20 20 20 / 0.65);\\n    --white-font: hsl(30, 35%, 95%);\\n    --orange-font: hsl(40, 100%, 65%);\\n}\\n\\n/*Content*/\\n\\n#wrapper {\\n    display: flex;\\n    flex-direction: column;\\n    /*grid-template-rows: 20% 68% 12%;*/\\n    align-items: space-between;\\n    justify-content: center;\\n    height: 100vh;\\n}\\n\\n/*Header*/\\n\\n.header {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    height: 25%;\\n    min-height: 15vh;\\n    width: 100%;\\n    padding: 2rem 0 0.5rem 0;\\n    font-family: 'Architects Daughter', sans-serif;\\n    font-size: 1.25rem;\\n    color: var(--white-font);\\n    background: var(--background);\\n    border-bottom: 3px dashed var(--white-font);\\n}\\n\\n.logo-wrapper {\\n    height: auto;\\n    width: 70%;\\n    max-width: 400px;\\n    padding: 0.5rem 0 0.5rem 0;\\n    font-family: 'Carter One', sans-serif;\\n    font-size: 1.75rem;\\n    line-height: 1.75rem;\\n    color: var(--orange-font);\\n    text-align: center;\\n    background: var(--background);\\n    border: 3px dashed var(--white-font);\\n    border-radius: 8px;\\n}\\n\\n.nav {\\n    display: flex;\\n    justify-content: space-around;\\n    width: 100%;\\n    max-width: 500px;\\n    padding: 1rem 0 1.25rem 0;\\n}\\n\\n.nav-link {\\n    font-family: 'Architects Daughter', sans-serif;\\n    font-size: 1rem;\\n    color: var(--white-font);\\n    background: transparent;\\n    border: none;\\n    border-bottom: 2px solid transparent;\\n    outline: none;\\n    transition: all 200ms;\\n}\\n\\n.nav-link:hover {\\n    border-bottom: 2px solid var(--white-font);\\n}\\n\\n.active {\\n    border-bottom: 2px solid var(--white-font);\\n}\\n\\n.nav-link:visited {\\n    color: var(--white-font);\\n}\\n\\n/*Content Wrapper*/\\n\\n.content-wrapper {\\n    display: flex;\\n    justify-content: center;\\n    height: 90%;\\n    width: 100%;\\n    font-family: 'Architects Daughter', sans-serif;\\n    color: var(--white-font);\\n    \\n    overflow-y: scroll;\\n    \\n}\\n\\n/*Home Page*/\\n\\n.background-image {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\n.home-page-div {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    align-self: center;\\n    height: auto;\\n    min-height: 40vh;\\n    width: 80%;\\n    max-width: 400px;\\n    margin: 0 auto;\\n    padding: 1rem;\\n    background: rgba(20, 20, 20, 0.45);\\n    border: 3px dashed var(--white-font);\\n    border-radius: 10%;\\n}\\n\\n.home-page-heading {\\n    font-family: 'Architects Daughter', sans-serif;\\n    font-size: 1.75rem;\\n    color: var(--white-font);\\n}\\n\\n.home-page-subheading {\\n    margin-top: 2rem;\\n    font-family: 'Hammersmith One', sans-serif;\\n    font-size: 1.25rem;\\n    color: var(--orange-font);\\n}\\n\\n/*Menu*/\\n\\n.menu {\\n    display: grid;\\n    grid-gap: 1rem;\\n    padding: 1rem;\\n}\\n\\n.chicken-menu-section,\\n.menu-section {\\n    width: 100%;\\n    max-width: 300px;\\n    margin: 0 auto;\\n    padding: 1rem;\\n    background: var(--menu-background);\\n    border: 2px solid var(--orange-font);\\n    border-radius: 10px;\\n\\n}\\n\\n.menu-section h2,\\n.chicken-menu-section h2 {\\n    font-family: 'Hammersmith One', sans-serif;\\n    color: var(--orange-font);\\n}\\n\\nh2,\\nh3,\\np {\\n    text-align: center;\\n}\\n\\nh3 {\\n    padding-top: 1rem;\\n}\\n\\n.category-description-text {\\n    color: var(--orange-font);\\n}\\n\\n.menu-description-text {\\n    font-size: 0.75rem;\\n\\n}\\n\\n.menu-list-wrapper {\\n    display: grid;\\n    grid-template-columns: 80% 1fr;\\n    grid-column-gap: 0.5rem;\\n    width: 100%;\\n    min-width: 195px;\\n    max-width: 280px;\\n}\\n\\n.menu-list-item {\\n    padding-left: 0.75rem;\\n}\\n\\n.menu-list-price {\\n    font-family: 'Hammersmith One', sans-serif;\\n    font-weight: 500;\\n}\\n\\n.menu-section .menu-list-price {\\n    text-align: center;\\n}\\n\\n/*Contact*/\\n\\n.contact-page-div {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-evenly;\\n    align-self: center;\\n    height: auto;\\n    width: 90%;\\n    max-width: 400px;\\n    margin: 0 auto;\\n    padding: 1rem;\\n    background: rgba(20, 20, 20, 0.45);\\n    border: 3px dashed var(--white-font);\\n    border-radius: 3%;\\n}\\n\\n.contact-page-heading,\\n.contact-page-subheading {\\n    padding: 0;\\n}\\n\\n.contact-page-heading {\\n    font-family: 'Architects Daughter', sans-serif;\\n    color: var(--white-font);\\n}\\n\\n.map-div {\\n    height: 10rem;\\n    width: 90%;\\n    margin: 0 auto;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-size: cover;\\n    border-radius: 4px;\\n}\\n\\n.bold {\\n    font-weight: 700;\\n    font-size: 1.5rem;\\n}\\n\\n/*Footer*/\\n\\n.footer {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    height: 15%;\\n    min-height: 5rem;\\n    width: 100%;\\n    min-width: 100vw;\\n    margin-top: 1rem;\\n    padding: 1rem;\\n    border-top: 3px dashed var(--white-font);\\n    background: var(--background);\\n    font-family: 'Architects Daughter', sans-serif;\\n    color: var(--white-font);\\n    text-align: center;\\n}\\n\\n@media only screen and (min-width: 700px) {\\n\\n    .header {\\n        justify-content: space-evenly;\\n    }\\n\\n    .nav {\\n        max-width: 800px;\\n    }\\n\\n    .nav-link {\\n        font-size: 1.5rem;\\n    }\\n\\n    .logo-wrapper {\\n        max-width: 600px;\\n        font-size: 3rem;\\n        line-height: 4rem;\\n    }\\n\\n    .home-page-div {\\n        max-width: 600px;\\n    }\\n\\n    .home-page-heading {\\n        font-size: 3.5rem;\\n    }\\n\\n    .home-page-subheading {\\n        font-size: 2rem;\\n    }\\n\\n    .menu {\\n        grid-template-columns: 1fr 1fr;\\n        grid-gap: 1rem;\\n    }\\n\\n    .contact-page-div {\\n        height: 80%;\\n        max-width: 600px;\\n    }\\n\\n    .contact-page-heading {\\n        font-size: 2rem;\\n    }\\n\\n    .contact-page-subheading {\\n        font-size: 1.5rem;\\n    }\\n\\n    .bold {\\n        font-size: 2.25rem;\\n    }\\n\\n    .map-div {\\n        height: 60%;\\n    }\\n\\n    .footer-text {\\n        font-size: 1.5rem;\\n    }\\n\\n}\\n\\n@media only screen and (min-width: 1000px) {\\n\\n    .menu {\\n        grid-template-columns: 1fr 1fr 1fr;\\n    }\\n\\n    .chicken-menu-section,\\n    .menu-section {\\n    max-width: 333px;\\n    font-size: 1.25rem;\\n    }\\n\\n    .menu-description-text {\\n        font-size: 1rem;\\n    }\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst generateContactPageDiv = () => {\n\n    const contactPageDiv = document.createElement('div');\n    contactPageDiv.classList.add('contact-page-div');\n\n    contactPageDiv.appendChild(generateContactHeading('Open for Dine-in and Take-out!'));\n\n    contactPageDiv.appendChild(generatePhone('Call us at</br><span class=\"bold\">250-777-8888</span>'));\n\n    contactPageDiv.appendChild(generateAddress('Or find us at</br><span class=\"bold\">477 Wallace St A, Nanaimo, BC</span>'));\n\n    contactPageDiv.appendChild(generateMap());\n\n    return contactPageDiv;\n\n}\n\nconst generateContactHeading = (string) => {\n\n    const contactPageHeading = document.createElement('h2');\n    contactPageHeading.classList.add('contact-page-heading');\n    \n    contactPageHeading.textContent = string;\n\n    return contactPageHeading;\n\n}\n\nconst generatePhone = (string) => {\n\n    const contactPhone = document.createElement('h3');\n    contactPhone.classList.add('contact-page-subheading');\n    contactPhone.innerHTML = string;\n\n    return contactPhone;\n\n}\n\nconst generateAddress = (string) => {\n\n    const contactAddress = document.createElement('h3');\n    contactAddress.classList.add('contact-page-subheading');\n    contactAddress.innerHTML = string;\n\n    return contactAddress;\n\n}\n\nconst generateMap = () => {\n\n    const mapDiv = document.createElement('div');\n    mapDiv.classList.add('map-div');\n\n    return mapDiv;\n\n}\n\n\nconst loadContact = () => {\n\n    const contentWrapper = document.getElementById('content-wrapper');\n    contentWrapper.textContent = \"\";\n    contentWrapper.appendChild(generateContactPageDiv());\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n/*\n\nOn refactor:\n\n- add google map link or embedded google map\n\n*/\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst generateHomePageDiv = () => {\n\n    const homePageDiv = document.createElement('div');\n    homePageDiv.classList.add('home-page-div');\n\n    homePageDiv.appendChild(generateHeading(\"AUTHENTIC KOREAN FRIED CHICKEN IN THE HEART OF NANAIMO!\"));\n    homePageDiv.appendChild(generateSubheading(\"Come get your crunch on!\"));\n\n    return homePageDiv;\n\n}\n\nconst generateHeading = (string) => {\n\n    const heading = document.createElement('h2');\n    heading.classList.add('home-page-heading');\n\n    heading.textContent = string;\n\n    return heading;\n\n}\n\nconst generateSubheading = (string) => {\n\n    const subheading = document.createElement('h3');\n    subheading.classList.add('home-page-subheading');\n\n    subheading.textContent = string;\n\n    return subheading;\n\n}\n\nconst loadHome = () => {\n\n    const contentWrapper = document.getElementById('content-wrapper');\n    contentWrapper.textContent = \"\";\n    contentWrapper.appendChild(generateHomePageDiv());\n    //connect to content wrapper, clear content wrapper, create and append home to it\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site */ \"./src/site.js\");\n\n\n\n(0,_site__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\nclass Menu {\n    constructor(menuItems) {\n        //placeholder parameters and key:value until structure is more fleshed out\n        this.menuItems = menuItems\n    }\n}\n*/\n\nconst generateMenu = () => {\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.appendChild(generateOriginalChickenMenu());\n    menu.appendChild(generateCrispyChickenMenu());\n    menu.appendChild(generateYangChickenMenu());\n    menu.appendChild(generateSpecialsMenu());\n    menu.appendChild(generateSidesMenu());\n    menu.appendChild(generateSaladMenu());\n    menu.appendChild(generateDessertMenu());\n    \n\n    return menu;\n\n};\n\n\nconst generateOriginalChickenMenu = () => {\n\n    const originalChickenMenu = [\n        {\n            category: 'Original Chicken',\n            option: 'Whole',\n            name: 'Half',\n            price: '13'\n        },\n        {\n            category: 'Original Chicken',\n            option: 'Whole',\n            name: 'Full',\n            price: '25.5'\n        },\n        {\n            category: 'Original Chicken',\n            option: 'Thigh',\n            name: '4pcs',\n            price: '13'\n        },\n        {\n            category: 'Original Chicken',\n            option: 'Thigh',\n            name: '8pcs',\n            price: '25.5'\n        }\n    ];\n\n    const originalChickenMenuDiv = document.createElement('div');\n    originalChickenMenuDiv.classList.add('chicken-menu-section');\n\n    originalChickenMenuDiv.appendChild(generateMenuHeading('ORIGINAL CHICKEN'));\n\n    const categoryDescription = document.createElement('p');\n    categoryDescription.classList.add('category-description-text', 'menu-description-text');\n    categoryDescription.innerHTML = 'Gluten Friendly</br>Housemade rice flour batter fried chicken';\n    originalChickenMenuDiv.appendChild(categoryDescription);\n\n    originalChickenMenuDiv.appendChild(generateMenuSubheading('WHOLE'));\n\n    const optionDescription = document.createElement('p');\n    optionDescription.classList.add('menu-description-text');\n    optionDescription.textContent = 'Breast, wing, leg, thigh, comes with individual pieces';\n    originalChickenMenuDiv.appendChild(optionDescription);\n\n    const wholeWrapper = document.createElement('div');\n    wholeWrapper.classList.add('menu-list-wrapper');\n    originalChickenMenuDiv.appendChild(wholeWrapper);\n\n    originalChickenMenuDiv.appendChild(generateMenuSubheading('THIGH'));\n\n    const thighWrapper = document.createElement('div');\n    thighWrapper.classList.add('menu-list-wrapper');\n    originalChickenMenuDiv.appendChild(thighWrapper);\n\n    for (let i = 0; i < originalChickenMenu.length; i++) {\n\n        let item = originalChickenMenu[i].name;\n        let price = originalChickenMenu[i].price;\n\n        let itemElement = document.createElement('div');\n        itemElement.classList.add('menu-list-item');\n        itemElement.textContent = item;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        if (originalChickenMenu[i].option === 'Whole') {\n            wholeWrapper.appendChild(itemElement);\n            wholeWrapper.appendChild(priceElement);\n        } else if (originalChickenMenu[i].option === 'Thigh') {\n            thighWrapper.appendChild(itemElement);\n            thighWrapper.appendChild(priceElement);\n        }\n\n    }\n\n    return originalChickenMenuDiv;\n\n}\n\n\n\nconst generateCrispyChickenMenu = () => {\n\n    const crispyChickenMenu = [\n        {\n            category: 'Crispy Chicken',\n            option: 'Whole',\n            name: 'Half',\n            price: '13.5'\n        },\n        {\n            category: 'Crispy Chicken',\n            option: 'Whole',\n            name: 'Full',\n            price: '26.5'\n        },\n        {\n            category: 'Crispy Chicken',\n            option: 'Thigh',\n            name: '4pcs',\n            price: '13.5'\n        },\n        {\n            category: 'Crispy Chicken',\n            option: 'Thigh',\n            name: '8pcs',\n            price: '26.5'\n        }\n    ];\n\n    const crispyChickenMenuDiv = document.createElement('div');\n    crispyChickenMenuDiv.classList.add('chicken-menu-section');\n\n    crispyChickenMenuDiv.appendChild(generateMenuHeading('CRISPY CHICKEN'));\n\n    const categoryDescription = document.createElement('p');\n    categoryDescription.classList.add('category-description-text', 'menu-description-text');\n    categoryDescription.innerHTML = 'Over 16 herbs and spices in our house-made batter fried chicken';\n    crispyChickenMenuDiv.appendChild(categoryDescription);\n\n    crispyChickenMenuDiv.appendChild(generateMenuSubheading('WHOLE'));\n\n    const optionDescription = document.createElement('p');\n    optionDescription.classList.add('menu-description-text');\n    optionDescription.textContent = 'Breast, wing, leg, thigh, comes with individual pieces';\n    crispyChickenMenuDiv.appendChild(optionDescription);\n\n    const wholeWrapper = document.createElement('div');\n    wholeWrapper.classList.add('menu-list-wrapper');\n    crispyChickenMenuDiv.appendChild(wholeWrapper);\n\n    crispyChickenMenuDiv.appendChild(generateMenuSubheading('THIGH'));\n\n    const thighWrapper = document.createElement('div');\n    thighWrapper.classList.add('menu-list-wrapper');\n    crispyChickenMenuDiv.appendChild(thighWrapper);\n\n    for (let i = 0; i < crispyChickenMenu.length; i++) {\n\n        let item = crispyChickenMenu[i].name;\n        let price = crispyChickenMenu[i].price;\n\n        let itemElement = document.createElement('div');\n        itemElement.classList.add('menu-list-item');\n        itemElement.textContent = item;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        if (crispyChickenMenu[i].option === 'Whole') {\n            wholeWrapper.appendChild(itemElement);\n            wholeWrapper.appendChild(priceElement);\n        } else if (crispyChickenMenu[i].option === 'Thigh') {\n            thighWrapper.appendChild(itemElement);\n            thighWrapper.appendChild(priceElement);\n        }\n\n    }\n\n    return crispyChickenMenuDiv;\n\n};\n\nconst generateYangChickenMenu = () => {\n\n    const yangChickenMenu = [\n        {\n            category: 'Yangnyeom Chicken',\n            option: 'Whole',\n            name: 'Half',\n            price: '14'\n        },\n        {\n            category: 'Yangnyeom Chicken',\n            option: 'Whole',\n            name: 'Full',\n            price: '27.5'\n        },\n        {\n            category: 'Yangnyeom Chicken',\n            option: 'Thigh',\n            name: '4pcs',\n            price: '14'\n        },\n        {\n            category: 'Yangnyeom Chicken',\n            option: 'Thigh',\n            name: '8pcs',\n            price: '27.5'\n        }\n    ];\n\n    const yangChickenMenuDiv = document.createElement('div');\n    yangChickenMenuDiv.classList.add('chicken-menu-section');\n\n    yangChickenMenuDiv.appendChild(generateMenuHeading('YANGNYEOM CHICKEN'));\n\n    const categoryDescription = document.createElement('p');\n    categoryDescription.classList.add('category-description-text', 'menu-description-text');\n    categoryDescription.innerHTML = 'Our Crispy Chicken coated in sweet & spicy sauce';\n    yangChickenMenuDiv.appendChild(categoryDescription);\n\n    yangChickenMenuDiv.appendChild(generateMenuSubheading('WHOLE'));\n\n    const optionDescription = document.createElement('p');\n    optionDescription.classList.add('menu-description-text');\n    optionDescription.textContent = 'Breast, wing, leg, thigh, comes with individual pieces';\n    yangChickenMenuDiv.appendChild(optionDescription);\n\n    const wholeWrapper = document.createElement('div');\n    wholeWrapper.classList.add('menu-list-wrapper');\n    yangChickenMenuDiv.appendChild(wholeWrapper);\n\n    yangChickenMenuDiv.appendChild(generateMenuSubheading('THIGH'));\n\n    const thighWrapper = document.createElement('div');\n    thighWrapper.classList.add('menu-list-wrapper');\n    yangChickenMenuDiv.appendChild(thighWrapper);\n\n    for (let i = 0; i < yangChickenMenu.length; i++) {\n\n        let item = yangChickenMenu[i].name;\n        let price = yangChickenMenu[i].price;\n\n        let itemElement = document.createElement('div');\n        itemElement.classList.add('menu-list-item');\n        itemElement.textContent = item;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        if (yangChickenMenu[i].option === 'Whole') {\n            wholeWrapper.appendChild(itemElement);\n            wholeWrapper.appendChild(priceElement);\n        } else if (yangChickenMenu[i].option === 'Thigh') {\n            thighWrapper.appendChild(itemElement);\n            thighWrapper.appendChild(priceElement);\n        }\n\n    }\n\n    return yangChickenMenuDiv;\n\n};\n\nconst generateSpecialsMenu = () => {\n\n    const specialsMenu = [\n        {\n            category: 'Special',\n            name: 'Ganjang Chicken',\n            description: 'Boneless fried chicken glazed with sweet soy sauce',\n            price: '14'\n        },\n        {\n            category: 'Special',\n            name: 'Gangsta Sandwich',\n            description: 'Italian bun, spicy chicken, bacon, cheese, cabbage, pickles',\n            price: '9.75'\n        },\n        {\n            category: 'Special',\n            name: 'Veggie Chicken',\n            description: 'Soy protein isolate, wheat gluten, spicy sauce mix (NO MEAT)',\n            price: '12.50'\n        }\n    ];\n\n    const specialsMenuDiv = document.createElement('div');\n    specialsMenuDiv.classList.add('menu-section');\n\n    specialsMenuDiv.appendChild(generateMenuHeading('HOUSE SPECIALS'));\n\n    for (let i = 0; i < specialsMenu.length; i++) {\n\n        let item = specialsMenu[i].name;\n        let description = specialsMenu[i].description;\n        let price = specialsMenu[i].price;\n\n        let itemElement = document.createElement('h3');\n        itemElement.classList.add('chicken-menu-option');\n        itemElement.textContent = item;\n\n        let descriptionElement = document.createElement('p');\n        descriptionElement.classList.add('menu-description-text');\n        descriptionElement.textContent = description;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        specialsMenuDiv.appendChild(itemElement);\n        specialsMenuDiv.appendChild(descriptionElement);\n        specialsMenuDiv.appendChild(priceElement);\n\n    }\n\n    return specialsMenuDiv;\n\n};\n\n\nconst generateSidesMenu = () => {\n\n    const sidesMenu = [\n        {\n            category: 'Sides',\n            name: 'Wedged Potatoes',\n            price: '6'\n        },\n        {\n            category: 'Sides',\n            name: 'Yam Fries',\n            price: '6'\n        },\n        {\n            category: 'Sides',\n            name: 'Cauliflower Fries',\n            price: '6.5'\n        },\n        {\n            category: 'Sides',\n            name: 'Onion Rings',\n            price: '6.5'\n        },\n        {\n            category: 'Sides',\n            name: 'Mozzarella Sticks',\n            price: '7'\n        },\n        {\n            category: 'Sides',\n            name: 'Truffle Fries',\n            price: '7.5'\n        }\n    ];\n\n    const sidesMenuDiv = document.createElement('div');\n    sidesMenuDiv.classList.add('menu-section');\n\n    const sidesMenuWrapper = document.createElement('div');\n    sidesMenuWrapper.classList.add('menu-list-wrapper');\n\n    sidesMenuDiv.appendChild(generateMenuHeading('SIDES'));\n    sidesMenuDiv.appendChild(sidesMenuWrapper);\n\n    for (let i = 0; i < sidesMenu.length; i++) {\n\n        let item = sidesMenu[i].name;\n        let price = sidesMenu[i].price;\n\n        let itemElement = document.createElement('div');\n        itemElement.classList.add('menu-list-item');\n        itemElement.textContent = item;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        sidesMenuWrapper.appendChild(itemElement);\n        sidesMenuWrapper.appendChild(priceElement);\n\n    }\n\n    return sidesMenuDiv;\n\n};\n\nconst generateSaladMenu = () => {\n\n    const saladMenu = [\n        {\n            category: 'Salad',\n            name: 'Green Salad',\n            description: 'Spinach, spring mix, carrot, paprika',\n            price: '7.50'\n        },\n        {\n            category: 'Salad',\n            name: 'Super Food Salad',\n            description: 'Spinach, spring mix, carrot, paprika, tomato, mixed seeds, pecan, egg, avocado, dried berries, grana padano cheese',\n            price: '10.50'\n        },\n    ];\n\n    const saladMenuDiv = document.createElement('div');\n    saladMenuDiv.classList.add('menu-section');\n\n    saladMenuDiv.appendChild(generateMenuHeading('SALADS'));\n\n    for (let i = 0; i < saladMenu.length; i++) {\n\n        let item = saladMenu[i].name;\n        let description = saladMenu[i].description;\n        let price = saladMenu[i].price;\n\n        let itemElement = document.createElement('h3');\n        itemElement.classList.add('chicken-menu-option');\n        itemElement.textContent = item;\n\n        let descriptionElement = document.createElement('p');\n        descriptionElement.classList.add('menu-description-text');\n        descriptionElement.textContent = description;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        saladMenuDiv.appendChild(itemElement);\n        saladMenuDiv.appendChild(descriptionElement);\n        saladMenuDiv.appendChild(priceElement);\n\n    }\n\n    return saladMenuDiv;\n\n}\n\n\nconst generateDessertMenu = () => {\n\n    const dessertMenu = [\n        {\n            category: 'Dessert',\n            name: 'Tiramisu Pie',\n            price: '7'\n        },\n        {\n            category: 'Dessert',\n            name: 'Raspberry Cheesecake',\n            price: '7'\n        }\n    ];\n\n    const dessertMenuDiv = document.createElement('div');\n    dessertMenuDiv.classList.add('menu-section');\n\n    const dessertMenuWrapper = document.createElement('div');\n    dessertMenuWrapper.classList.add('menu-list-wrapper');\n\n    dessertMenuDiv.appendChild(generateMenuHeading('DESSERTS'));\n    dessertMenuDiv.appendChild(dessertMenuWrapper);\n\n    for (let i = 0; i < dessertMenu.length; i++) {\n\n        let item = dessertMenu[i].name;\n        let price = dessertMenu[i].price;\n\n        let itemElement = document.createElement('div');\n        itemElement.classList.add('menu-list-item');\n        itemElement.textContent = item;\n\n        let priceElement = document.createElement('div');\n        priceElement.classList.add('menu-list-price');\n        priceElement.textContent = price;\n\n        dessertMenuWrapper.appendChild(itemElement);\n        dessertMenuWrapper.appendChild(priceElement);\n\n    }\n\n    return dessertMenuDiv;\n\n}\n\nconst generateMenuHeading = (string) => {\n\n    const menuHeading = document.createElement('h2');\n    menuHeading.classList.add('chicken-menu-heading');\n    menuHeading.textContent = string;\n\n    return menuHeading;\n\n}\n\nconst generateMenuSubheading = (string) => {\n\n    const menuSubheading = document.createElement('h3');\n    menuSubheading.classList.add('chicken-menu-option');\n    menuSubheading.textContent = string;\n\n    return menuSubheading;\n\n}\n\n\n\n\n\n\n\n\nconst drinksMenu = [\n    {\n        category: 'Drinks',\n        name: 'Pop',\n        price: '2'\n    },\n    {\n        category: 'Drinks',\n        name: 'Juice',\n        price: '3'\n    },\n    {\n        category: 'Drinks',\n        name: 'Sparkling Water',\n        price: '3.50'\n    }\n];\n\nconst beerSojuMenu = [\n    {\n        category: 'Beer & Soju',\n        name: 'Makgeolli 750mL',\n        description: 'Korean rice wine',\n        price: '12.95'\n    },\n    {\n        category: 'Beer & Soju',\n        name: 'Korean Beer',\n        description: 'Cass, Kloud',\n        price: '5.95'\n    },\n    {\n        category: 'Beer & Soju',\n        name: 'Kloud',\n        description: 'Korean beer',\n        price: '5.95'\n    },\n    {\n        category: 'Beer & Soju',\n        name: 'Soju 360mL',\n        description: 'Korean vodka',\n        price: '5.95'\n    },\n    {\n        category: 'Beer & Soju',\n        name: 'Domestic Beer',\n        description: 'Molson Canadian, Kokanee, Coors Light',\n        price: '5.5'\n    }\n];\n\n\n\n\nconst loadMenu = () => {\n\n    //connect to main content wrapper and create and append the menu to it\n    const contentWrapper = document.getElementById('content-wrapper');\n    contentWrapper.textContent = '';\n    contentWrapper.appendChild(generateMenu());\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst wrapper = document.querySelector('#wrapper');\nwrapper.classList.add('background-image');\n\nconst generateHeader = () => {\n\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    header.appendChild(generateTextLogo('LAMBDA CHICKEN'));\n    header.appendChild(generateNav(generateNavLinks()));\n\n    wrapper.appendChild(header);\n\n};\n\nconst generateTextLogo = (string) => {\n\n    const logo = document.createElement('div');\n    logo.classList.add('logo-wrapper');\n\n    logo.textContent = string;\n\n    return logo;\n\n};\n\nconst generateNav = (navLinkArray) => {\n\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n\n    const navHome = document.createElement('div');\n    navHome.classList.add('nav-link-wrapper');\n    navHome.setAttribute('id', 'nav-home');\n    navHome.appendChild(navLinkArray[0]);\n\n\n    const navMenu = document.createElement('div');\n    navMenu.classList.add('nav-link-wrapper');\n    navMenu.setAttribute('id', 'nav-menu');\n    navMenu.appendChild(navLinkArray[1]);\n\n    const navContact = document.createElement('div');\n    navContact.classList.add('nav-link-wrapper');\n    navContact.setAttribute('id', 'nav-contact');\n    navContact.appendChild(navLinkArray[2]);\n\n    nav.appendChild(navHome);\n    nav.appendChild(navMenu);\n    nav.appendChild(navContact);\n\n    return nav;\n\n};\n\nconst generateNavLinks = () => {\n\n    const navHomeLink = document.createElement('button');\n    navHomeLink.classList.add('nav-link');\n    navHomeLink.classList.add('active');\n    navHomeLink.textContent = 'HOME';\n    navHomeLink.addEventListener('click', () => {\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        navHomeLink.classList.add('active');\n        navMenuLink.classList.remove('active');\n        navContactLink.classList.remove('active');\n    })\n\n    const navMenuLink = document.createElement('button');\n    navMenuLink.classList.add('nav-link');\n    navMenuLink.textContent = 'MENU';\n    navMenuLink.addEventListener('click', () => {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        navMenuLink.classList.add('active');\n        navHomeLink.classList.remove('active');\n        navContactLink.classList.remove('active');\n    })\n\n    const navContactLink = document.createElement('button');\n    navContactLink.classList.add('nav-link');\n    navContactLink.textContent = \"CONTACT\";\n    navContactLink.addEventListener('click', () => {\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        navContactLink.classList.add('active');\n        navHomeLink.classList.remove('active');\n        navMenuLink.classList.remove('active');\n    })\n\n    let navLinkArray = [navHomeLink, navMenuLink, navContactLink]\n\n    return navLinkArray;\n\n};\n\nconst generateContentWrapper = () => {\n\n    const contentWrapper = document.createElement('div');\n    contentWrapper.classList.add('content-wrapper');\n    contentWrapper.setAttribute('id', 'content-wrapper');\n\n    wrapper.appendChild(contentWrapper);\n\n};\n\nconst generateFooter = () => {\n\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    const footerContentWrapper = document.createElement('div');\n    footerContentWrapper.classList.add('footer-content-wrapper');\n\n    const footerText = document.createElement('p');\n    footerText.classList.add('footer-text');\n    footerText.textContent = 'Designed by jojawhi for The Odin Project';\n\n    wrapper.appendChild(footer);\n    footer.appendChild(footerContentWrapper);\n    footerContentWrapper.appendChild(footerText);\n\n};\n\nconst generateSite = () => {\n\n    generateHeader();\n    generateContentWrapper();\n    generateFooter();\n    \n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateSite);\n\n\n\n//# sourceURL=webpack://restaurant/./src/site.js?");

/***/ }),

/***/ "./src/images/chicken.jpg":
/*!********************************!*\
  !*** ./src/images/chicken.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9987255ea72ebf1ed84.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/chicken.jpg?");

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a36a998b3c66e8366a58.png\";\n\n//# sourceURL=webpack://restaurant/./src/images/map.png?");

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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;