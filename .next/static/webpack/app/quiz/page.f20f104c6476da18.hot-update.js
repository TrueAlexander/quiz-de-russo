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

/***/ "(app-client)/./app/quiz/Quiz.tsx":
/*!***************************!*\
  !*** ./app/quiz/Quiz.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Button/Button */ \"(app-client)/./components/Button/Button.tsx\");\n/* harmony import */ var _components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/QuestionCard/QuestionCard */ \"(app-client)/./components/QuestionCard/QuestionCard.tsx\");\n/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading/Loading */ \"(app-client)/./components/Loading/Loading.tsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n//Components\n\n\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnAnswerClick = (answer, currentQuestionIndex)=>{\n        //if user has already answered, do nothing\n        if (isQuestionAnswered) return;\n        //check answer against correct answer\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        //add score if answer is correct\n        if (isCorrect) setScore((prev)=>prev + 1);\n        //save the answer in the object for user answer\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) {\n            return;\n        }\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        currentQuestionIndex !== 0 ? setVisible(true) : setVisible(false);\n    }, [\n        currentQuestionIndex\n    ]);\n    const handleClickForward = ()=>{\n        if (currentQuestionIndex === totalQuestions - 1) {\n            // const queryParams: resultProps = { result: score }\n            console.dir(router);\n            router.push(\"/result?res=\".concat(score, \"&total=\").concat(totalQuestions));\n        } else {\n            handleChangeQuestion(1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n            lineNumber: 67,\n            columnNumber: 20\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-white text-center mt-5 flex-auto flex flex-col justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[#9f50ac] font-bold pb-2 text-[18px]\",\n                    children: [\n                        \"Pergunta \",\n                        currentQuestionIndex + 1,\n                        \" de \",\n                        totalQuestions\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionCard_QuestionCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentQuestionIndex: currentQuestionIndex,\n                    question: questions[currentQuestionIndex].question,\n                    answers: questions[currentQuestionIndex].answers,\n                    userAnswer: userAnswers[currentQuestionIndex],\n                    correctAnswer: questions[currentQuestionIndex].correct_answer,\n                    onClick: handleOnAnswerClick\n                }, void 0, false, {\n                    fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-9\",\n                    children: [\n                        visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            text: \"Anterior\",\n                            disabled: false,\n                            onClick: ()=>handleChangeQuestion(-1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 23\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            disabled: false,\n                            text: currentQuestionIndex === totalQuestions - 1 ? \"Fim\" : \"Pr\\xf3xima\",\n                            onClick: handleClickForward\n                        }, void 0, false, {\n                            fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\AllDocuments\\\\Alexander\\\\Программирование\\\\Projects\\\\2023\\\\quiz-next-typescript-tutorial\\\\react-quiz-2023\\\\quiz-de-russo\\\\app\\\\quiz\\\\Quiz.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Quiz, \"tW4W4iK+2l+GHdvenpbC3rGeiss=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNYOzs7Ozs7Ozs7Ozs7Ozs7OztxQkFHVDs7QUFRWjtHQW5GTXZCOztRQVVXSixzREFBU0E7OztLQVZwQkk7QUFxRk4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3F1aXovUXVpei50c3g/N2YyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9CdXR0b24vQnV0dG9uXCJcclxuaW1wb3J0IFF1ZXN0aW9uQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1F1ZXN0aW9uQ2FyZC9RdWVzdGlvbkNhcmRcIlxyXG5cclxuLy9UeXBlc1xyXG5pbXBvcnQgeyBRdWVzdGlvbnNTdGF0ZSB9IGZyb20gXCJAL3R5cGVzL3F1aXpcIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZ1wiXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHF1ZXN0aW9uczogUXVlc3Rpb25zU3RhdGVcclxuICB0b3RhbFF1ZXN0aW9uczogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IFF1aXogPSAoe3F1ZXN0aW9ucywgdG90YWxRdWVzdGlvbnN9IDogUHJvcHMpID0+IHtcclxuICBjb25zdCBbY3VycmVudFF1ZXN0aW9uSW5kZXgsIHNldEN1cnJlbnRRdWVzdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt1c2VyQW5zd2Vycywgc2V0VXNlckFuc3dlcnNdID0gdXNlU3RhdGU8UmVjb3JkPG51bWJlciwgc3RyaW5nPj4oe30pXHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgaXNRdWVzdGlvbkFuc3dlcmVkID0gdXNlckFuc3dlcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdID8gdHJ1ZSA6IGZhbHNlXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQW5zd2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIC8vaWYgdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZCwgZG8gbm90aGluZ1xyXG4gICAgaWYgKGlzUXVlc3Rpb25BbnN3ZXJlZCkgcmV0dXJuXHJcbiAgICAvL2NoZWNrIGFuc3dlciBhZ2FpbnN0IGNvcnJlY3QgYW5zd2VyXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyID09PSBhbnN3ZXJcclxuICAgIC8vYWRkIHNjb3JlIGlmIGFuc3dlciBpcyBjb3JyZWN0XHJcbiAgICBpZiAoaXNDb3JyZWN0KSBzZXRTY29yZShwcmV2ID0+IHByZXYgKyAxKVxyXG4gICAgLy9zYXZlIHRoZSBhbnN3ZXIgaW4gdGhlIG9iamVjdCBmb3IgdXNlciBhbnN3ZXJcclxuICAgIHNldFVzZXJBbnN3ZXJzKHByZXYgPT4gKHsuLi5wcmV2LCBbY3VycmVudFF1ZXN0aW9uSW5kZXhdOiBhbnN3ZXJ9KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVF1ZXN0aW9uID0gKHN0ZXA6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3UXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbkluZGV4ICsgc3RlcFxyXG4gICAgaWYgKG5ld1F1ZXN0aW9uSW5kZXggPCAwIHx8IG5ld1F1ZXN0aW9uSW5kZXggPj0gdG90YWxRdWVzdGlvbnMpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50UXVlc3Rpb25JbmRleChuZXdRdWVzdGlvbkluZGV4KSBcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjdXJyZW50UXVlc3Rpb25JbmRleCAhPT0gMCA/IHNldFZpc2libGUodHJ1ZSkgOiBzZXRWaXNpYmxlKGZhbHNlKVxyXG4gIH0sIFtjdXJyZW50UXVlc3Rpb25JbmRleF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrRm9yd2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBpZihjdXJyZW50UXVlc3Rpb25JbmRleCA9PT0gdG90YWxRdWVzdGlvbnMgLSAxKSB7XHJcbiAgICAgIC8vIGNvbnN0IHF1ZXJ5UGFyYW1zOiByZXN1bHRQcm9wcyA9IHsgcmVzdWx0OiBzY29yZSB9XHJcbiAgICAgIGNvbnNvbGUuZGlyKHJvdXRlcilcclxuICAgICAgcm91dGVyLnB1c2goYC9yZXN1bHQ/cmVzPSR7c2NvcmV9JnRvdGFsPSR7dG90YWxRdWVzdGlvbnN9YClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhhbmRsZUNoYW5nZVF1ZXN0aW9uKDEpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2lzTG9hZGluZyA/IDxMb2FkaW5nLz4gOiBcclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBtdC01IGZsZXgtYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInAtNiBwYi00IGZvbnQtYm9sZCB0ZXh0LVsyMHB4XVwiPlJlc3VsdGFkbzoge3Njb3JlfTwvcD4gKi99XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzlmNTBhY10gZm9udC1ib2xkIHBiLTIgdGV4dC1bMThweF1cIj5cclxuICAgICAgICAgIFBlcmd1bnRhIHtjdXJyZW50UXVlc3Rpb25JbmRleCArIDF9IGRlIHt0b3RhbFF1ZXN0aW9uc31cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPFF1ZXN0aW9uQ2FyZCBcclxuICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbkluZGV4PXtjdXJyZW50UXVlc3Rpb25JbmRleH1cclxuICAgICAgICAgIHF1ZXN0aW9uPXtxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9ufVxyXG4gICAgICAgICAgYW5zd2Vycz17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5hbnN3ZXJzfVxyXG4gICAgICAgICAgdXNlckFuc3dlcj17dXNlckFuc3dlcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdfVxyXG4gICAgICAgICAgY29ycmVjdEFuc3dlcj17cXVlc3Rpb25zW2N1cnJlbnRRdWVzdGlvbkluZGV4XS5jb3JyZWN0X2Fuc3dlcn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9uQW5zd2VyQ2xpY2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtOVwiPlxyXG4gICAgICAgICAge3Zpc2libGUgJiYgPEJ1dHRvbiBcclxuICAgICAgICAgICAgdGV4dD1cIkFudGVyaW9yXCJcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VRdWVzdGlvbigtMSl9IFxyXG4gICAgICAgICAgLz59XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICAgICAgdGV4dD17Y3VycmVudFF1ZXN0aW9uSW5kZXggPT09IHRvdGFsUXVlc3Rpb25zIC0gMSA/ICdGaW0nIDogJ1Byw7N4aW1hJ31cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tGb3J3YXJkfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgfVxyXG4gICAgPC8+XHJcbiAgICBcclxuICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBRdWl6Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJRdWVzdGlvbkNhcmQiLCJMb2FkaW5nIiwiUXVpeiIsInF1ZXN0aW9ucyIsInRvdGFsUXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJzZXRDdXJyZW50UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJpc1F1ZXN0aW9uQW5zd2VyZWQiLCJyb3V0ZXIiLCJoYW5kbGVPbkFuc3dlckNsaWNrIiwiYW5zd2VyIiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJwcmV2IiwiaGFuZGxlQ2hhbmdlUXVlc3Rpb24iLCJzdGVwIiwibmV3UXVlc3Rpb25JbmRleCIsImhhbmRsZUNsaWNrRm9yd2FyZCIsImNvbnNvbGUiLCJkaXIiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInF1ZXN0aW9uIiwiYW5zd2VycyIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwib25DbGljayIsInRleHQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/Quiz.tsx\n"));

/***/ })

});