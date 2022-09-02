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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactFunction\": () => (/* binding */ contactFunction)\n/* harmony export */ });\nconst contactFunction = () => {\n    const oldBodyDiv = document.querySelector('.body-div');\n    oldBodyDiv.remove();\n    \n    const mainDiv = document.querySelector('#content');\n    const bodyDiv = document.createElement('div');\n    bodyDiv.className = 'body-div';\n    bodyDiv.textContent = 'Contact';\n    mainDiv.append(bodyDiv);\n}\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeFunction\": () => (/* binding */ homeFunction)\n/* harmony export */ });\nconst homeFunction = () => {\n    // const oldBodyDiv = document.querySelector('.body-div');\n    // oldBodyDiv.remove();\n\n    const mainDiv = document.querySelector('#content');\n    const bodyDiv = document.createElement('div');\n    bodyDiv.className = 'body-div';\n    bodyDiv.textContent = 'Home';\n    mainDiv.append(bodyDiv);\n}\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_nav__WEBPACK_IMPORTED_MODULE_0__.navFunction)();\n\nconst homeBtn = document.querySelector('.home');\nhomeBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.homeFunction)();\n})\n\nconst menuBtn = document.querySelector('.menu');\nmenuBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuFunction)();\n})\n\nconst contactBtn = document.querySelector('.contact');\ncontactBtn.addEventListener('click', (e) => {\n    e.preventDefault();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_3__.contactFunction)();\n})\n\n//# sourceURL=webpack://restaurant-app/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuFunction\": () => (/* binding */ menuFunction)\n/* harmony export */ });\nconst menuFunction = () => {\n    const oldBodyDiv = document.querySelector('.body-div');\n    oldBodyDiv.remove();\n    \n    const mainDiv = document.querySelector('#content');\n    const bodyDiv = document.createElement('div');\n    bodyDiv.className = 'body-div';\n    bodyDiv.textContent = 'Menu';\n    mainDiv.append(bodyDiv);\n}\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navFunction\": () => (/* binding */ navFunction)\n/* harmony export */ });\nconst navFunction = () => {\n    const mainDiv = document.querySelector('#content');\n    const navDiv = document.createElement('div');\n    navDiv.className = \"nav\";\n    const navList = document.createElement('ul');\n    navDiv.append(navList);\n\n    //list item one\n    const listOne = document.createElement('li');\n    const linkOne = document.createElement('a');\n    linkOne.setAttribute('href', '');\n    listOne.className = 'home';\n    linkOne.textContent = 'Home';\n    listOne.append(linkOne);\n    navList.append(listOne);\n\n     //list item two\n     const listTwo = document.createElement('li');\n     const linkTwo = document.createElement('a');\n     linkTwo.setAttribute('href', '');\n     listTwo.className = 'menu';\n     linkTwo.textContent = 'Menu';\n     listTwo.append(linkTwo);\n     navList.append(listTwo);\n\n      //list item three\n    const listThree = document.createElement('li');\n    const linkThree = document.createElement('a');\n    linkThree.setAttribute('href', '');\n    listThree.className = 'contact';\n    linkThree.textContent = 'Contact';\n    listThree.append(linkThree);\n    navList.append(listThree);\n\n\n    mainDiv.append(navDiv);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-app/./src/nav.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;