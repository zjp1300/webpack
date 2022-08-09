/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);


var _moudle = require("./moudle1.js");

var _moudle2 = require("./moudle2.js");

var _moudle3 = _interopRequireDefault(require("./moudle3.js"));

var _index = _interopRequireDefault(require("../../json/index.json"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log((0, _moudle.add)(1, 2));
console.log((0, _moudle2.sub)(1, 2));
console.log(_index["default"]);
console.log(_moudle3["default"].div(1, 2), _moudle3["default"].mul(1, 2));
var ab = 12;
var ba = 14;

var foo = function foo() {
  console.log(123123);
};

foo();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBQUMsV0FBQSxFQUFJLENBQUosRUFBTSxDQUFOLENBQVo7QUFDQUYsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBQUUsWUFBQSxFQUFJLENBQUosRUFBTSxDQUFOLENBQVo7QUFDQUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGlCQUFaO0FBQ0FKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxtQkFBQSxDQUFRQyxHQUFSLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBWixFQUE4QkQsbUJBQUEsQ0FBUUUsR0FBUixDQUFZLENBQVosRUFBYyxDQUFkLENBQTlCO0FBQ0EsSUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFDQSxJQUFNQyxFQUFFLEdBQUcsRUFBWDs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0VBQ2hCVixPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0QsQ0FGRDs7QUFHQVMsR0FBRyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjazIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjazIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrMi8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHthZGR9IGZyb20gJy4vbW91ZGxlMS5qcyc7XHJcbmltcG9ydCB7c3VifSBmcm9tICcuL21vdWRsZTIuanMnO1xyXG5pbXBvcnQgbW91ZGxlMyBmcm9tICcuL21vdWRsZTMuanMnO1xyXG5pbXBvcnQgYSBmcm9tICcuLi8uLi9qc29uL2luZGV4Lmpzb24nO1xyXG5pbXBvcnQgICcuL2luZGV4Lmxlc3MnO1xyXG5cclxuY29uc29sZS5sb2coYWRkKDEsMikpXHJcbmNvbnNvbGUubG9nKHN1YigxLDIpKVxyXG5jb25zb2xlLmxvZyhhKVxyXG5jb25zb2xlLmxvZyhtb3VkbGUzLmRpdigxLDIpLCBtb3VkbGUzLm11bCgxLDIpKVxyXG5sZXQgYWIgPSAxMlxyXG5jb25zdCBiYSA9IDE0XHJcblxyXG5jb25zdCBmb28gPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coMTIzMTIzKVxyXG59XHJcbmZvbygpIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJhZGQiLCJzdWIiLCJhIiwibW91ZGxlMyIsImRpdiIsIm11bCIsImFiIiwiYmEiLCJmb28iXSwic291cmNlUm9vdCI6IiJ9