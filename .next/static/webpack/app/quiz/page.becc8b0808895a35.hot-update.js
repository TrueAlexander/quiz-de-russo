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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"(app-client)/./components/QuestionCard/helpers.ts\");\n//helpers\n\n\nconst QuestionCard = (param)=>{\n    let { currentQuestionIndex , question , answers , userAnswer , correctAnswer , onClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-auto flex flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[20px] mt-3 max-w-[400px]\",\n                dangerouslySetInnerHTML: {\n                    __html: question\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center pt-3\",\n                children: answers.map((answer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>onClick(answer, currentQuestionIndex),\n                        className: \"\".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getBGColor)(userAnswer, correctAnswer, answer), \" cursor-pointer flex items-center justify-center select-none font-bold h-[30px] max-w-[400px]  w-[250px]  px-3 my-2 rounded-[10px] overflow-hidden\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"truncate\",\n                            dangerouslySetInnerHTML: {\n                                __html: answer\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined)\n                    }, answer, false, {\n                        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\components\\\\QuestionCard\\\\QuestionCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, undefined);\n};\n_c = QuestionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCard);\nvar _c;\n$RefreshReg$(_c, \"QuestionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFTOztBQUM2QjtBQVd0QyxNQUFNQyxlQUFlLFNBQTRGO1FBQTNGLEVBQUVDLHFCQUFvQixFQUFFQyxTQUFRLEVBQUVDLFFBQU8sRUFBRUMsV0FBVSxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBUztJQUUxRyxxQkFDQSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFFRCxXQUFVO2dCQUFpQ0UseUJBQXlCO29CQUFDQyxRQUFRVDtnQkFBUTs7Ozs7OzBCQUN4Riw4REFBQ0s7Z0JBQUlDLFdBQVU7MEJBQ1pMLFFBQVFTLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1gsOERBQUNOO3dCQUVDRCxTQUFTLElBQU1BLFFBQVFPLFFBQVFaO3dCQUMvQk8sV0FBVyxHQUFpRCxPQUE5Q1Qsb0RBQVVBLENBQUNLLFlBQVlDLGVBQWVRLFNBQVE7a0NBRTVELDRFQUFDQzs0QkFBS04sV0FBVTs0QkFBV0UseUJBQXlCO2dDQUFDQyxRQUFRRTs0QkFBTTs7Ozs7O3VCQUo5REE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZDtLQWpCS2I7QUFtQk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWVzdGlvbkNhcmQvUXVlc3Rpb25DYXJkLnRzeD9hZTFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaGVscGVyc1xyXG5pbXBvcnQgeyBnZXRCR0NvbG9yIH0gZnJvbSBcIi4vaGVscGVyc1wiXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXJcclxuICBxdWVzdGlvbjogc3RyaW5nXHJcbiAgYW5zd2VyczogQXJyYXk8c3RyaW5nPlxyXG4gIHVzZXJBbnN3ZXI6IHN0cmluZyB8IHVuZGVmaW5lZFxyXG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZ1xyXG4gIG9uQ2xpY2s6IChhbnN3ZXI6IHN0cmluZywgY3VycmVudFF1ZXN0aW9uSW5kZXg6IG51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBRdWVzdGlvbkNhcmQgPSAoeyBjdXJyZW50UXVlc3Rpb25JbmRleCwgcXVlc3Rpb24sIGFuc3dlcnMsIHVzZXJBbnN3ZXIsIGNvcnJlY3RBbnN3ZXIsIG9uQ2xpY2t9IDogUHJvcHMpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XSBtdC0zIG1heC13LVs0MDBweF1cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcXVlc3Rpb259fT48L3A+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB0LTNcIj5cclxuICAgICAge2Fuc3dlcnMubWFwKGFuc3dlciA9PiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXthbnN3ZXJ9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGFuc3dlciwgY3VycmVudFF1ZXN0aW9uSW5kZXgpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtnZXRCR0NvbG9yKHVzZXJBbnN3ZXIsIGNvcnJlY3RBbnN3ZXIsIGFuc3dlcil9IGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNlbGVjdC1ub25lIGZvbnQtYm9sZCBoLVszMHB4XSBtYXgtdy1bNDAwcHhdICB3LVsyNTBweF0gIHB4LTMgbXktMiByb3VuZGVkLVsxMHB4XSBvdmVyZmxvdy1oaWRkZW5gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRydW5jYXRlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGFuc3dlcn19IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbkNhcmRcclxuIl0sIm5hbWVzIjpbImdldEJHQ29sb3IiLCJRdWVzdGlvbkNhcmQiLCJjdXJyZW50UXVlc3Rpb25JbmRleCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIm1hcCIsImFuc3dlciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/QuestionCard/QuestionCard.tsx\n"));

/***/ })

});