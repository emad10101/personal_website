"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/homepage/blogpost.js":
/*!*****************************************!*\
  !*** ./components/homepage/blogpost.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPost; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/next/dist/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction BlogPost(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/posts/\" + props.id,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                position: \"relative\"\n            },\n            className: \"jsx-f7b373b0b7cf0f7b\" + \" \" + \"Blog\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: props.bg_image,\n                    layout: \"fill\"\n                }, void 0, false, {\n                    fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostDetails, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, props), void 0, false, {\n                    fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n                    lineNumber: 13,\n                    columnNumber: 11\n                }, this),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"f7b373b0b7cf0f7b\",\n                    children: \"@media(min-width:700px){.Blog.jsx-f7b373b0b7cf0f7b{height:50vh;margin-left:5vh;margin-bottom:5vh}}@media(max-width:700px){.Blog.jsx-f7b373b0b7cf0f7b{height:40vh;margin-bottom:5vh}}\"\n                }, void 0, false, void 0, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, this);\n};\n_c = BlogPost;\nfunction PostDetails(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ea677b4f65bb10d4\" + \" \" + \"PostDetails\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jsx-ea677b4f65bb10d4\" + \" \" + \"postTitle\",\n                children: [\n                    \" \",\n                    props.title.slice(0, 50),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-ea677b4f65bb10d4\" + \" \" + \"postDate\",\n                children: props.date\n            }, void 0, false, {\n                fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ea677b4f65bb10d4\",\n                children: \"@media(min-width:700px){.PostDetails.jsx-ea677b4f65bb10d4{position:absolute;bottom:0;left:0;color:white;background-color:rgba(45,45,45,.7);width:95%;padding-left:5%;height:10vh;padding-bottom:1%;overflow:hidden}.postTitle.jsx-ea677b4f65bb10d4{font-size:24px;color:white;font-weight:600;margin-bottom:-1vh}.postDate.jsx-ea677b4f65bb10d4{font-weight:400;font-size:16px;margin-left:.25vw}}@media(max-width:700px){.PostDetails.jsx-ea677b4f65bb10d4{position:absolute;bottom:0;left:0;color:white;background-color:rgb(0,0,0,.8);width:95%;padding-left:5%;height:30%;line-height:60%;overflow:hidden}.PostDetails.jsx-ea677b4f65bb10d4>h1.jsx-ea677b4f65bb10d4{font-size:2.6vh;font-weight:500}.PostDetails.jsx-ea677b4f65bb10d4>p.jsx-ea677b4f65bb10d4{font-size:2vh;font-weight:400}}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emadsiddiq/Projects/personal_website/components/homepage/blogpost.js\",\n        lineNumber: 46,\n        columnNumber: 7\n    }, this);\n}\n_c1 = PostDetails;\nvar _c, _c1;\n$RefreshReg$(_c, \"BlogPost\");\n$RefreshReg$(_c1, \"PostDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL2Jsb2dwb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQStCO0FBQ0Y7QUFHZCxTQUFTRSxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUNwQyxxQkFDRSw4REFBQ0Ysa0RBQUk7UUFBQ0csSUFBSSxFQUFFLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxFQUFFO2tCQUM5Qiw0RUFBQ0MsS0FBRztZQUVGQyxLQUFLLEVBQUU7Z0JBQUVDLEtBQUssRUFBRSxNQUFNO2dCQUFFQyxRQUFRLEVBQUUsVUFBVTthQUFFO3NEQURwQyxNQUFNOzs4QkFHaEIsOERBQUNULG1EQUFLO29CQUFDVSxHQUFHLEVBQUVQLEtBQUssQ0FBQ1EsUUFBUTtvQkFBRUMsTUFBTSxFQUFDLE1BQU07Ozs7O3dCQUFHOzhCQUM1Qyw4REFBQ0MsV0FBVyxxRkFBS1YsS0FBSzs7Ozt3QkFBSTs7Ozs7Ozs7OztnQkF5QnRCOzs7OztZQUNELENBQ1A7Q0FDSDtBQXBDcUJELEtBQUFBLFFBQVE7QUF1Q2hDLFNBQVNXLFdBQVcsQ0FBQ1YsS0FBSyxFQUFFO0lBQ3hCLHFCQUNFLDhEQUFDRyxLQUFHO2tEQUFXLGFBQWE7OzBCQUMxQiw4REFBQ1EsSUFBRTswREFBVyxXQUFXOztvQkFBQyxHQUFDO29CQUFDWCxLQUFLLENBQUNZLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQUMsR0FBQzs7Ozs7O29CQUFLOzBCQUMzRCw4REFBQ0MsR0FBQzswREFBVyxVQUFVOzBCQUFFZCxLQUFLLENBQUNlLElBQUk7Ozs7O29CQUFLOzs7Ozs7Ozs7O1lBaUVwQyxDQUNOO0NBQ0g7QUF2RU1MLE1BQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lcGFnZS9ibG9ncG9zdC5qcz9iMDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0KHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGhyZWY9e1wiL3Bvc3RzL1wiICsgcHJvcHMuaWR9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiQmxvZ1wiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5iZ19pbWFnZX0gbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgICAgPFBvc3REZXRhaWxzIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuXG4gICAgICAgICAgICAgIC5CbG9nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NTB2aDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG5cbiAgICAgICAgICAgICAgLkJsb2cge1xuICAgICAgICAgICAgICAgIGhlaWdodDo0MHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cblxuZnVuY3Rpb24gUG9zdERldGFpbHMocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQb3N0RGV0YWlsc1wiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwicG9zdFRpdGxlXCI+IHtwcm9wcy50aXRsZS5zbGljZSgwLCA1MCl9IDwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3REYXRlXCI+e3Byb3BzLmRhdGV9PC9wPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYFxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAgIC5Qb3N0RGV0YWlscyB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCA0NSwgNDUsIDAuNyk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToxJTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvc3RUaXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xdmg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvc3REYXRlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXZ3O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuUG9zdERldGFpbHMge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MCU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5Qb3N0RGV0YWlscyA+IGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNnZoO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLlBvc3REZXRhaWxzID4gcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAydmg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIFxuICBcbiAgIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkJsb2dQb3N0IiwicHJvcHMiLCJocmVmIiwiaWQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwicG9zaXRpb24iLCJzcmMiLCJiZ19pbWFnZSIsImxheW91dCIsIlBvc3REZXRhaWxzIiwiaDEiLCJ0aXRsZSIsInNsaWNlIiwicCIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/homepage/blogpost.js\n"));

/***/ })

});