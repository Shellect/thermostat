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

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./src/Circle.js\");\n\n\nclass Button {\n    constructor(config) {\n        Object.assign(this, config)\n        this.bg = new _Circle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            fillColor: \"rgba(255, 255, 255, 0.5)\",\n            strokeColor: \"white\",\n            x: this.x,\n            y: this.y,\n            r: this.r,\n        });\n        this.handleClick(this.regulator);\n    }\n\n    draw(ctx) {\n        this.bg.draw(ctx);\n        ctx.fillStyle = \"#000\";\n        ctx.font = \"30px serif\";\n        ctx.textAlign = \"center\";\n        ctx.textBaseline = \"middle\";\n        ctx.fillText(this.text, this.x, this.y)\n    }\n\n    handleClick(regulator) {\n        let {collisionDetect, progressBar, direction, ctx} = this;\n        collisionDetect = collisionDetect.bind(this);\n        document.addEventListener('click', function (event) {\n            if (collisionDetect(event.pageX, event.pageY)) {\n                progressBar.move(ctx, direction);\n                regulator.draw();\n            }\n        })\n    }\n\n    collisionDetect(x, y) {\n        const dx = this.x - x;\n        const dy = this.y - y;\n        const distance = Math.sqrt(dx * dx + dy * dy);\n      \n        return distance < this.r;\n    }\n\n\n}\n\n//# sourceURL=webpack://thermo/./src/Button.js?");

/***/ }),

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Circle)\n/* harmony export */ });\nclass Circle {\n    constructor(config) {\n        Object.assign(this, config)\n    }\n\n    circle(ctx, x, y, r, color) {\n        ctx.beginPath();\n        ctx.arc(x, y, r, 0, 2 * Math.PI);\n        ctx.fillStyle = color;\n        ctx.fill();\n    }\n\n    draw(ctx) {\n        this.circle(ctx, this.x, this.y, this.r + Math.ceil(this.r / 10), this.strokeColor);\n        this.circle(ctx, this.x, this.y, this.r, this.fillColor);\n    }\n}\n\n//# sourceURL=webpack://thermo/./src/Circle.js?");

/***/ }),

/***/ "./src/Progressbar.js":
/*!****************************!*\
  !*** ./src/Progressbar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProgressBar)\n/* harmony export */ });\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./src/Circle.js\");\n\n\nclass ProgressBar {\n    constructor(config) {\n        Object.assign(this, config);\n        this.progress = 0;\n    }\n\n    draw(ctx) {\n        let x = this.x + Math.cos(this.progress * Math.PI / 180) * 110;\n        let y = this.y + Math.sin(this.progress * Math.PI / 180) * 110;\n        let bg = new _Circle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            strokeColor: \"white\",\n            fillColor: this.color,\n            x: x,\n            y: y,\n            r: this.r,\n        });\n        bg.draw(ctx);\n    }\n\n    move(ctx, direction) {\n        if (direction == this.direction) {\n            this.progress = Math.min(this.progress + 36, 360);\n        } else {\n            this.progress = Math.max(this.progress - 36, 0);\n        }\n    }\n}\n\n//# sourceURL=webpack://thermo/./src/Progressbar.js?");

/***/ }),

/***/ "./src/Regulator.js":
/*!**************************!*\
  !*** ./src/Regulator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Regulator)\n/* harmony export */ });\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ \"./src/Circle.js\");\n/* harmony import */ var _Progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Progressbar */ \"./src/Progressbar.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./src/Button.js\");\n\n\n\n\nclass Regulator {\n    constructor(config) {\n        Object.assign(this, config);\n        this.bg = new _Circle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            fillColor: this.fillColor,\n            strokeColor: this.strokeColor,\n            x: this.x,\n            y: this.y,\n            r: this.r,\n        });\n        // this.coolValve = new ProgressBar({\n        //     x: this.x,\n        //     y: this.y,\n        //     r: 5,\n        //     color: \"blue\",\n        //     direction: \"left\"\n        // });\n        this.heatValve = new _Progressbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            x: this.x,\n            y: this.y,\n            r: 5,\n            color: \"red\",\n            direction: \"right\"\n        });\n        this.minusBtn = new _Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            x: 100,\n            y: 350,\n            r: 30,\n            text: \"-\",\n            direction: \"left\",\n            progressBar: this.heatValve,\n            ctx: this.ctx,\n            regulator: this\n        });\n        this.plusBtn = new _Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n            x: 300,\n            y: 350,\n            r: 30,\n            text: \"+\",\n            direction: \"right\",\n            progressBar: this.heatValve,\n            ctx: this.ctx,\n            regulator: this\n        });\n    }\n\n    draw() {\n        this.ctx.rect(0, 0, 600, 600);\n        this.ctx.fillStyle = \"orange\";\n        this.ctx.fill();\n        this.bg.draw(this.ctx);\n        this.heatValve.draw(this.ctx);\n        this.minusBtn.draw(this.ctx);\n        this.plusBtn.draw(this.ctx);\n    }\n}\n\n//# sourceURL=webpack://thermo/./src/Regulator.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Regulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Regulator */ \"./src/Regulator.js\");\n\n\nlet canvas = document.querySelector(\"#c\");\nlet ctx = canvas.getContext(\"2d\");\n\nlet regulator = new _Regulator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    ctx: ctx,\n    x: 200,\n    y: 150,\n    r: 100,\n    fillColor: \"white\",\n    strokeColor: \"rgb(252, 186, 3)\"\n});\n\nregulator.draw();\n\n\n//# sourceURL=webpack://thermo/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;