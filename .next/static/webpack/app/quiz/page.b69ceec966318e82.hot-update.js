"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-client)/./components/QuestionCard/QuestionCard.tsx":
/*!**************************************************!*\
  !*** ./components/QuestionCard/QuestionCard.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"(app-client)/./components/QuestionCard/helpers.ts\");\n//helpers\n\n\nconst QuestionCard = (param)=>/*#__PURE__*/ {\n    let { currentQuestionIndex , question , answers , userAnswer , correctAnswer , onClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] mt-3 max-w-[400px]\",\n                dangerouslySetInnerHTML: {\n                    __html: question\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pt-8\",\n                children: answers.map((answer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>onClick(answer, currentQuestionIndex),\n                        className: \"\".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getBGColor)(userAnswer, correctAnswer, answer), \" cursor-pointer flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400px] w-full my-2 rounded-[10px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"truncate\",\n                            dangerouslySetInnerHTML: {\n                                __html: answer\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, answer, false, {\n                        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n_c = QuestionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCard);\nvar _c;\n$RefreshReg$(_c, \"QuestionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFTOztBQUM2QjtBQVd0QyxNQUFNQyxlQUFlLHVCQUVuQjtRQUZvQixFQUFFQyxxQkFBb0IsRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQUVDLFdBQVUsRUFBRUMsY0FBYSxFQUFFQyxRQUFPLEVBQVM7V0FFMUcsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQUVDLFdBQVU7Z0JBQWlDQyx5QkFBeUI7b0JBQUNDLFFBQVFUO2dCQUFROzs7Ozs7MEJBQ3hGLDhEQUFDSztnQkFBSUUsV0FBVTswQkFDWk4sUUFBUVMsR0FBRyxDQUFDQyxDQUFBQSx1QkFDWCw4REFBQ047d0JBRUNELFNBQVMsSUFBTUEsUUFBUU8sUUFBUVo7d0JBQy9CUSxXQUFXLEdBQWlELE9BQTlDVixvREFBVUEsQ0FBQ0ssWUFBWUMsZUFBZVEsU0FBUTtrQ0FFNUQsNEVBQUNDOzRCQUFLTCxXQUFVOzRCQUFXQyx5QkFBeUI7Z0NBQUNDLFFBQVFFOzRCQUFNOzs7Ozs7dUJBSjlEQTs7Ozs7Ozs7Ozs7Ozs7OztBQVFSO0tBZkRiO0FBa0JOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVlc3Rpb25DYXJkL1F1ZXN0aW9uQ2FyZC50c3g/YWUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2hlbHBlcnNcclxuaW1wb3J0IHsgZ2V0QkdDb2xvciB9IGZyb20gXCIuL2hlbHBlcnNcIlxyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjdXJyZW50UXVlc3Rpb25JbmRleDogbnVtYmVyXHJcbiAgcXVlc3Rpb246IHN0cmluZ1xyXG4gIGFuc3dlcnM6IEFycmF5PHN0cmluZz5cclxuICB1c2VyQW5zd2VyOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuICBjb3JyZWN0QW5zd2VyOiBzdHJpbmdcclxuICBvbkNsaWNrOiAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgUXVlc3Rpb25DYXJkID0gKHsgY3VycmVudFF1ZXN0aW9uSW5kZXgsIHF1ZXN0aW9uLCBhbnN3ZXJzLCB1c2VyQW5zd2VyLCBjb3JyZWN0QW5zd2VyLCBvbkNsaWNrfSA6IFByb3BzKSA9PiAoXHJcblxyXG4gIDxkaXY+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBtdC0zIG1heC13LVs0MDBweF1cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcXVlc3Rpb259fT48L3A+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB0LThcIj5cclxuICAgICAge2Fuc3dlcnMubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXthbnN3ZXJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGFuc3dlciwgY3VycmVudFF1ZXN0aW9uSW5kZXgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtnZXRCR0NvbG9yKHVzZXJBbnN3ZXIsIGNvcnJlY3RBbnN3ZXIsIGFuc3dlcil9IGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNlbGVjdC1ub25lIGZvbnQtYm9sZCBtaW4taC1bNDVweF0gbWF4LXctWzQwMHB4XSB3LWZ1bGwgbXktMiByb3VuZGVkLVsxMHB4XWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGVcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYW5zd2VyfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25DYXJkXHJcbiJdLCJuYW1lcyI6WyJnZXRCR0NvbG9yIiwiUXVlc3Rpb25DYXJkIiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJ1c2VyQW5zd2VyIiwiY29ycmVjdEFuc3dlciIsIm9uQ2xpY2siLCJkaXYiLCJwIiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJtYXAiLCJhbnN3ZXIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/QuestionCard/QuestionCard.tsx\n"));

/***/ })

});