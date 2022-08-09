/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/moudle1.js":
/*!***********************!*\
  !*** ./js/moudle1.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add)
/* harmony export */ });

const add = function (a,b) {
  return a + b
}

/***/ }),

/***/ "./js/moudle2.js":
/*!***********************!*\
  !*** ./js/moudle2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
const sub = (a,b) => {
  return a - b
}



/***/ }),

/***/ "./js/moudle3.js":
/*!***********************!*\
  !*** ./js/moudle3.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mul = (a, b) => {
  return a * b
}

const div = (a, b) => {
  return a/b
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mul,
  div
});

/***/ }),

/***/ "./json/index.json":
/*!*************************!*\
  !*** ./json/index.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"zjp","age":17}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moudle1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moudle1 */ "./js/moudle1.js");
/* harmony import */ var _moudle2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moudle2 */ "./js/moudle2.js");
/* harmony import */ var _moudle3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moudle3 */ "./js/moudle3.js");
/* harmony import */ var _json_index_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/index.json */ "./json/index.json");





console.log((0,_moudle1__WEBPACK_IMPORTED_MODULE_0__.add)(1,2))
console.log((0,_moudle2__WEBPACK_IMPORTED_MODULE_1__.sub)(1,2))
console.log(_moudle3__WEBPACK_IMPORTED_MODULE_2__["default"].div(1,2), _moudle3__WEBPACK_IMPORTED_MODULE_2__["default"].mul(1,2))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWM7QUFDZDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0E7QUFDRTtBQUNHOztBQUVuQyxZQUFZLDZDQUFHO0FBQ2YsWUFBWSw2Q0FBRztBQUNmLFlBQVksb0RBQVcsT0FBTyxvREFBVyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjazIvLi9qcy9tb3VkbGUxLmpzIiwid2VicGFjazovL3dlYnBhY2syLy4vanMvbW91ZGxlMi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrMi8uL2pzL21vdWRsZTMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjazIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2syL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjazIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrMi8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGFkZCA9IGZ1bmN0aW9uIChhLGIpIHtcbiAgcmV0dXJuIGEgKyBiXG59IiwiY29uc3Qgc3ViID0gKGEsYikgPT4ge1xuICByZXR1cm4gYSAtIGJcbn1cblxuZXhwb3J0e3N1Yn0iLCJjb25zdCBtdWwgPSAoYSwgYikgPT4ge1xuICByZXR1cm4gYSAqIGJcbn1cblxuY29uc3QgZGl2ID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGEvYlxufVxuXG5leHBvcnQgZGVmYXVsdHtcbiAgbXVsLFxuICBkaXZcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7YWRkfSBmcm9tICcuL21vdWRsZTEnO1xuaW1wb3J0IHtzdWJ9IGZyb20gJy4vbW91ZGxlMic7XG5pbXBvcnQgbW91ZGxlMyBmcm9tICcuL21vdWRsZTMnO1xuaW1wb3J0IGEgZnJvbSAnLi4vanNvbi9pbmRleC5qc29uJztcblxuY29uc29sZS5sb2coYWRkKDEsMikpXG5jb25zb2xlLmxvZyhzdWIoMSwyKSlcbmNvbnNvbGUubG9nKG1vdWRsZTMuZGl2KDEsMiksIG1vdWRsZTMubXVsKDEsMikpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9