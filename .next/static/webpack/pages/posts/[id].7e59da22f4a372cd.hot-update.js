"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./blogs/Blog_11_27_2023.js":
/*!**********************************!*\
  !*** ./blogs/Blog_11_27_2023.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Blog_11_27_2023\": function() { return /* binding */ Blog_11_27_2023; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/post */ \"./components/post.js\");\n/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/code */ \"./components/code.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/background */ \"./components/background.js\");\n\n\n\n\n\nfunction Blog_11_27_2023(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_post__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        bg_image: props.postData.bg_image,\n        bg_title: \"Water Lillies - Claude Monet\",\n        bg_url: \"https://www.artic.edu/artworks/16568/water-lilies\",\n        heading: \"Running a bitcoin node\",\n        date: \"19th December 2023\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Today, we are going to run a bitcoin node (a.k.a bitcoin client).\"\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 14,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" It does have some \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://bitcoin.org/en/bitcoin-core/features/requirements\",\n                        target: \"_blank\",\n                        children: \"hefty requirements\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 17,\n                        columnNumber: 34\n                    }, this),\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 17,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/static/blog_11_27_2023/bitcoin_core_reqs.png\",\n                width: \"500\",\n                height: \"400\"\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" I am going to compile it from source but you could use the\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://bitcoin.org/en/download\",\n                        children: \" graphical installer \"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 23,\n                        columnNumber: 14\n                    }, this),\n                    \"and we'll end up in the same place in a few paragraphs.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 22,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Clone the repo:\"\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 26,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"language-bash\",\n                children: \"$ git clone https://github.com/bitcoin/bitcoin.git \"\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"language-bash\",\n                children: \"./configure\"\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" Go through \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        children: \"doc/build-your-os.sh\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 34,\n                        columnNumber: 25\n                    }, this),\n                    \" and install any prereqs. Then run:\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"language-bash\",\n                children: \"./autogen.sh\"\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" Followed by:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"language-bash\",\n                        children: \"./configure.sh\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            autoPlay: true,\n                            muted: true,\n                            loop: true,\n                            style: {\n                                width: \"80vw\",\n                                height: \"40vh\",\n                                marginTop: \"5%\",\n                                marginBottom: \"5%\",\n                                alignContent: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"/static/blog_11_27_2023/configure.mov\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                            lineNumber: 42,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 41,\n                        columnNumber: 10\n                    }, this),\n                    \"       which will set the default configs (see ./configure --help) and generate the build script.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 39,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"We can now compile bitcoind with the command:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"make\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 47,\n                        columnNumber: 49\n                    }, this),\n                    \"You can also \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://github.com/bitcoin/bitcoin/blob/master/doc/build-osx.md#running-bitcoin-core\",\n                        children: \"create a conf file and monitor download progress\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 48,\n                        columnNumber: 14\n                    }, this),\n                    \" after running bitcoind available at \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        children: \"./src/bitcoind\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 48,\n                        columnNumber: 198\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            autoPlay: true,\n                            muted: true,\n                            loop: true,\n                            style: {\n                                width: \"100%\",\n                                height: \"50vh\",\n                                marginTop: \"5%\",\n                                marginBottom: \"5%\",\n                                alignContent: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: \"/static/blog_11_27_2023/bitcoind.mov\",\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                            lineNumber: 51,\n                            columnNumber: 10\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                        lineNumber: 50,\n                        columnNumber: 1\n                    }, this),\n                    \"This is supposed to take a few days to sync, given that it needs to download about ~350 GB of data at the time of writing.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n                lineNumber: 47,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emadsiddiq/Projects/personal_website/blogs/Blog_11_27_2023.js\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, this);\n}\n_c = Blog_11_27_2023;\n\nvar _c;\n$RefreshReg$(_c, \"Blog_11_27_2023\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ncy9CbG9nXzExXzI3XzIwMjMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFxQztBQUNBO0FBQ047QUFDbUI7QUFFbEQsU0FBU0ksZUFBZSxDQUFDQyxLQUFLLEVBQUU7SUFDMUIscUJBQ0EsOERBQUNMLHdEQUFJO1FBQUNNLFFBQVEsRUFBRUQsS0FBSyxDQUFDRSxRQUFRLENBQUNELFFBQVE7UUFDckNFLFFBQVEsRUFBQyw4QkFBOEI7UUFDdkNDLE1BQU0sRUFBQyxtREFBbUQ7UUFDMURDLE9BQU8sRUFBQyx3QkFBd0I7UUFDaENDLElBQUksRUFBQyxvQkFBb0I7OzBCQUVqQyw4REFBQ0MsR0FBQzswQkFBQyxtRUFFTzs7Ozs7b0JBQUk7MEJBQ0gsOERBQUNBLEdBQUM7O29CQUFDLHFCQUFtQjtrQ0FBQSw4REFBQ0MsR0FBQzt3QkFBQ0MsSUFBSSxFQUFDLDJEQUEyRDt3QkFBQ0MsTUFBTSxFQUFDLFFBQVE7a0NBQUMsb0JBQWtCOzs7Ozs0QkFBSTtvQkFBQSxHQUFDOzs7Ozs7b0JBQUk7MEJBSXRJLDhEQUFDYixtREFBSztnQkFBQ2MsR0FBRyxFQUFDLCtDQUErQztnQkFBQ0MsS0FBSyxFQUFDLEtBQUs7Z0JBQUNDLE1BQU0sRUFBQyxLQUFLOzs7OztvQkFBRzswQkFDdEYsOERBQUNOLEdBQUM7O29CQUFDLDZEQUNBO2tDQUFBLDhEQUFDQyxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsaUNBQWlDO2tDQUFDLHVCQUFxQjs7Ozs7NEJBQUk7b0JBQUEseURBQ1g7Ozs7OztvQkFBSTswQkFFaEUsOERBQUNGLEdBQUM7MEJBQUMsaUJBQWU7Ozs7O29CQUFJOzBCQUVuQiw4REFBQ1gsd0RBQUk7Z0JBQUNrQixTQUFTLEVBQUMsZUFBZTswQkFBQyxxREFBbUQ7Ozs7O29CQUFPOzBCQUcxRiw4REFBQ2xCLHdEQUFJO2dCQUFDa0IsU0FBUyxFQUFDLGVBQWU7MEJBQUMsYUFBVzs7Ozs7b0JBQU87MEJBR3JELDhEQUFDUCxHQUFDOztvQkFBQyxjQUFZO2tDQUFBLDhEQUFDUSxNQUFJO2tDQUFDLHNCQUFvQjs7Ozs7NEJBQU87b0JBQUEscUNBQW1DOzs7Ozs7b0JBQUk7MEJBR3RGLDhEQUFDbkIsd0RBQUk7Z0JBQUNrQixTQUFTLEVBQUMsZUFBZTswQkFBQyxjQUFZOzs7OztvQkFBTzswQkFFN0QsOERBQUNQLEdBQUM7O29CQUFDLGVBQ0g7a0NBQUEsOERBQUNYLHdEQUFJO3dCQUFDa0IsU0FBUyxFQUFDLGVBQWU7a0NBQUMsZ0JBQWM7Ozs7OzRCQUFPO2tDQUM1Qyw4REFBQ0UsUUFBTTtrQ0FDUCw0RUFBQ0MsT0FBSzs0QkFBQ0MsUUFBUTs0QkFBQ0MsS0FBSzs0QkFBQ0MsSUFBSTs0QkFBQ0MsS0FBSyxFQUFFO2dDQUFFVCxLQUFLLEVBQUUsTUFBTTtnQ0FBRUMsTUFBTSxFQUFFLE1BQU07Z0NBQUVTLFNBQVMsRUFBQyxJQUFJO2dDQUFFQyxZQUFZLEVBQUMsSUFBSTtnQ0FBRUMsWUFBWSxFQUFFLFFBQVE7NkJBQUM7c0NBQzlILDRFQUFDQyxRQUFNO2dDQUFDZCxHQUFHLEVBQUMsdUNBQXVDO2dDQUFDZSxJQUFJLEVBQUMsV0FBVzs7Ozs7b0NBQUU7Ozs7O2dDQUNoRTs7Ozs7NEJBQVM7b0JBQUEsbUdBQ3ZCOzs7Ozs7b0JBQUk7MEJBRUosOERBQUNuQixHQUFDOztvQkFBQywrQ0FBNkM7a0NBQUEsOERBQUNYLHdEQUFJO2tDQUFDLE1BQUk7Ozs7OzRCQUFPO29CQUFBLGVBQ3BEO2tDQUFBLDhEQUFDWSxHQUFDO3dCQUFDQyxJQUFJLEVBQUMsc0ZBQXNGO2tDQUFDLGtEQUFnRDs7Ozs7NEJBQUk7b0JBQUEsdUNBQXFDO2tDQUFBLDhEQUFDYix3REFBSTtrQ0FBQyxnQkFBYzs7Ozs7NEJBQU87a0NBRWhPLDhEQUFDb0IsUUFBTTtrQ0FDRSw0RUFBQ0MsT0FBSzs0QkFBQ0MsUUFBUTs0QkFBQ0MsS0FBSzs0QkFBQ0MsSUFBSTs0QkFBQ0MsS0FBSyxFQUFFO2dDQUFFVCxLQUFLLEVBQUUsTUFBTTtnQ0FBRUMsTUFBTSxFQUFFLE1BQU07Z0NBQUNTLFNBQVMsRUFBQyxJQUFJO2dDQUFFQyxZQUFZLEVBQUMsSUFBSTtnQ0FBRUMsWUFBWSxFQUFFLFFBQVE7NkJBQUM7c0NBQzdILDRFQUFDQyxRQUFNO2dDQUFDZCxHQUFHLEVBQUMsc0NBQXNDO2dDQUFDZSxJQUFJLEVBQUMsV0FBVzs7Ozs7b0NBQUU7Ozs7O2dDQUMvRDs7Ozs7NEJBRUM7b0JBQUEsNEhBR2Q7Ozs7OztvQkFBSTs7Ozs7O1lBSVEsQ0FFVDtDQUNIO0FBM0RRM0IsS0FBQUEsZUFBZTtBQTZERyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ibG9ncy9CbG9nXzExXzI3XzIwMjMuanM/M2MxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9wb3N0XCJcbmltcG9ydCBDb2RlIGZyb20gXCIuLi9jb21wb25lbnRzL2NvZGVcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi4vY29tcG9uZW50cy9iYWNrZ3JvdW5kXCI7XG5cbmZ1bmN0aW9uIEJsb2dfMTFfMjdfMjAyMyhwcm9wcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgIDxQb3N0IGJnX2ltYWdlPXtwcm9wcy5wb3N0RGF0YS5iZ19pbWFnZX1cbiAgICAgICAgYmdfdGl0bGU9XCJXYXRlciBMaWxsaWVzIC0gQ2xhdWRlIE1vbmV0XCJcbiAgICAgICAgYmdfdXJsPVwiaHR0cHM6Ly93d3cuYXJ0aWMuZWR1L2FydHdvcmtzLzE2NTY4L3dhdGVyLWxpbGllc1wiXG4gICAgICAgIGhlYWRpbmc9XCJSdW5uaW5nIGEgYml0Y29pbiBub2RlXCJcbiAgICAgICAgZGF0ZT1cIjE5dGggRGVjZW1iZXIgMjAyM1wiPlxuXG48cD5cbiAgICAgICAgICAgIFRvZGF5LCB3ZSBhcmUgZ29pbmcgdG8gcnVuIGEgYml0Y29pbiBub2RlIChhLmsuYSBiaXRjb2luIGNsaWVudCkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgICA8cD4gSXQgZG9lcyBoYXZlIHNvbWUgPGEgaHJlZj1cImh0dHBzOi8vYml0Y29pbi5vcmcvZW4vYml0Y29pbi1jb3JlL2ZlYXR1cmVzL3JlcXVpcmVtZW50c1wiIHRhcmdldD1cIl9ibGFua1wiPmhlZnR5IHJlcXVpcmVtZW50czwvYT46PC9wPlxuXG5cbiAgXG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvYmxvZ18xMV8yN18yMDIzL2JpdGNvaW5fY29yZV9yZXFzLnBuZ1wiIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNDAwXCIgLz5cbiAgICAgICAgICA8cD4gSSBhbSBnb2luZyB0byBjb21waWxlIGl0IGZyb20gc291cmNlIGJ1dCB5b3UgY291bGQgdXNlIHRoZVxuICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JpdGNvaW4ub3JnL2VuL2Rvd25sb2FkXCI+IGdyYXBoaWNhbCBpbnN0YWxsZXIgPC9hPiBcbiAgICAgICAgICAgICAgYW5kIHdlJ2xsIGVuZCB1cCBpbiB0aGUgc2FtZSBwbGFjZSBpbiBhIGZldyBwYXJhZ3JhcGhzLjwvcD5cbiAgICAgICAgICBcbiAgICAgICAgIDxwPkNsb25lIHRoZSByZXBvOjwvcD5cblxuICAgICAgICAgICAgPENvZGUgY2xhc3NOYW1lPVwibGFuZ3VhZ2UtYmFzaFwiPiQgZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRjb2luL2JpdGNvaW4uZ2l0IDwvQ29kZT5cblxuXG4gICAgICAgICAgICA8Q29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1iYXNoXCI+Li9jb25maWd1cmU8L0NvZGU+XG5cbiAgICAgICAgIFxuICAgICAgICAgPHA+IEdvIHRocm91Z2ggPGNvZGU+ZG9jL2J1aWxkLXlvdXItb3Muc2g8L2NvZGU+IGFuZCBpbnN0YWxsIGFueSBwcmVyZXFzLiBUaGVuIHJ1bjo8L3A+XG5cblxuICAgICAgICAgIDxDb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWJhc2hcIj4uL2F1dG9nZW4uc2g8L0NvZGU+XG5cbjxwPiBGb2xsb3dlZCBieTpcbjxDb2RlIGNsYXNzTmFtZT1cImxhbmd1YWdlLWJhc2hcIj4uL2NvbmZpZ3VyZS5zaDwvQ29kZT5cbiAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICA8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcCBzdHlsZT17eyB3aWR0aDogJzgwdncnLCBoZWlnaHQ6ICc0MHZoJywgbWFyZ2luVG9wOic1JScsIG1hcmdpbkJvdHRvbTonNSUnLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInfX0+XG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL3N0YXRpYy9ibG9nXzExXzI3XzIwMjMvY29uZmlndXJlLm1vdlwiIHR5cGU9XCJ2aWRlby9tcDRcIi8+XG4gICAgICA8L3ZpZGVvPjwvY2VudGVyPiAgICAgICB3aGljaCB3aWxsIHNldCB0aGUgZGVmYXVsdCBjb25maWdzIChzZWUgLi9jb25maWd1cmUgLS1oZWxwKSBhbmQgZ2VuZXJhdGUgdGhlIGJ1aWxkIHNjcmlwdC4gXG48L3A+XG5cbjxwPldlIGNhbiBub3cgY29tcGlsZSBiaXRjb2luZCB3aXRoIHRoZSBjb21tYW5kOjxDb2RlPm1ha2U8L0NvZGU+XG5Zb3UgY2FuIGFsc28gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9iaXRjb2luL2JpdGNvaW4vYmxvYi9tYXN0ZXIvZG9jL2J1aWxkLW9zeC5tZCNydW5uaW5nLWJpdGNvaW4tY29yZVwiPmNyZWF0ZSBhIGNvbmYgZmlsZSBhbmQgbW9uaXRvciBkb3dubG9hZCBwcm9ncmVzczwvYT4gYWZ0ZXIgcnVubmluZyBiaXRjb2luZCBhdmFpbGFibGUgYXQgPENvZGU+Li9zcmMvYml0Y29pbmQ8L0NvZGU+XG5cbjxjZW50ZXI+XG4gICAgICAgICA8dmlkZW8gYXV0b1BsYXkgbXV0ZWQgbG9vcCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc1MHZoJyxtYXJnaW5Ub3A6JzUlJywgbWFyZ2luQm90dG9tOic1JScsIGFsaWduQ29udGVudDogJ2NlbnRlcid9fT5cbiAgICAgICAgPHNvdXJjZSBzcmM9XCIvc3RhdGljL2Jsb2dfMTFfMjdfMjAyMy9iaXRjb2luZC5tb3ZcIiB0eXBlPVwidmlkZW8vbXA0XCIvPlxuICAgICAgPC92aWRlbz5cbiAgICAgIFxuICAgICAgPC9jZW50ZXI+IFxuXG5UaGlzIGlzIHN1cHBvc2VkIHRvIHRha2UgYSBmZXcgZGF5cyB0byBzeW5jLCBnaXZlbiB0aGF0IGl0IG5lZWRzIHRvIGRvd25sb2FkIGFib3V0IH4zNTAgR0Igb2YgZGF0YSBhdCB0aGUgdGltZSBvZiB3cml0aW5nLiBcbiA8L3A+XG5cblxuXG4gICAgICA8L1Bvc3Q+XG5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQmxvZ18xMV8yN18yMDIzIH07XG4iXSwibmFtZXMiOlsiUG9zdCIsIkNvZGUiLCJJbWFnZSIsIkJhY2tncm91bmQiLCJCbG9nXzExXzI3XzIwMjMiLCJwcm9wcyIsImJnX2ltYWdlIiwicG9zdERhdGEiLCJiZ190aXRsZSIsImJnX3VybCIsImhlYWRpbmciLCJkYXRlIiwicCIsImEiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJjb2RlIiwiY2VudGVyIiwidmlkZW8iLCJhdXRvUGxheSIsIm11dGVkIiwibG9vcCIsInN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYWxpZ25Db250ZW50Iiwic291cmNlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./blogs/Blog_11_27_2023.js\n"));

/***/ })

});