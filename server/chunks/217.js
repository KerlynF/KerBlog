"use strict";
exports.id = 217;
exports.ids = [217];
exports.modules = {

/***/ 310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Globals_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/loguito.png
/* harmony default export */ const loguito = ({"src":"/_next/static/media/loguito.fa8017f7.png","height":2639,"width":3239,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAiElEQVR42i3GoU5CAQAF0HOfb85JMBpsmKQ4P4FgMvpBJn/Hr3B2CAZNbs5GlbcxdiGQzsndw/KFvpFU78lHdFZusRnLPPKELXZ4llylVlgM+MLZyXW4bP3RX2Skr+UiMkUW5Rvv5AerkQgTYClu1Ax7/A8BBsAUzhPXYt7jR0AB69ZnmPAYNgdjUity6TY+mQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/icons-material/Menu"
var Menu_ = __webpack_require__(602);
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);
;// CONCATENATED MODULE: ./components/Globals/Header.js








const Header = ()=>{
    const goBackHome = ()=>{
        window.location.href = window.location.origin + "/main/Home";
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
        style: {
            margin: 0,
            padding: 0,
            backgroundColor: "white",
            height: "auto",
            width: "100% !important",
            marginBottom: 14
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginTop: 2,
                    flexDirection: "column",
                    gap: "10px"
                },
                onClick: goBackHome,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: loguito,
                    alt: "Logo",
                    height: 100,
                    width: 124,
                    style: {
                        objectFit: "cover"
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                size: "medium",
                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                    color: "#336B90"
                }),
                sx: {
                    padding: 0,
                    marginLeft: "calc(1% + 1px)",
                    color: "#336B90",
                    textTransform: "none"
                },
                children: "Menu"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    marginTop: 2,
                    flexDirection: "column",
                    gap: "10px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        height: "1px",
                        width: "98%",
                        backgroundColor: "#336B90"
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    display: "flex",
                    marginTop: 2,
                    gap: "25px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "medium",
                        sx: {
                            padding: 0,
                            marginLeft: "calc(1% + 1px)",
                            color: "#336B90",
                            textTransform: "none"
                        },
                        children: "Actualidad"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "medium",
                        sx: {
                            padding: 0,
                            color: "#336B90",
                            textTransform: "none"
                        },
                        children: "Economia"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "medium",
                        sx: {
                            padding: 0,
                            color: "#336B90",
                            textTransform: "none"
                        },
                        children: "Economia Domestica"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "medium",
                        sx: {
                            padding: 0,
                            color: "#336B90",
                            textTransform: "none"
                        },
                        children: "Opinion"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                        size: "medium",
                        sx: {
                            padding: 0,
                            color: "#336B90",
                            textTransform: "none"
                        },
                        children: "Republica Dominicana"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Globals_Header = (Header);


/***/ }),

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(475);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SectionComponent = ({ children , backGroundColor , flexDirection , isAuto  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Container__WEBPACK_IMPORTED_MODULE_1___default()), {
        style: {
            gap: "15px",
            width: "100%",
            backgroundColor: backGroundColor,
            height: isAuto ? "auto" : "350px",
            display: "flex",
            flexDirection: flexDirection ? "column" : "row"
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionComponent);


/***/ })

};
;