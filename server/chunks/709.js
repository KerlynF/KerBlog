"use strict";
exports.id = 709;
exports.ids = [709];
exports.modules = {

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_SectionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(458);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);





const Post = ({ titulo , imagen , texto , comentarios  })=>{
    const [comentarioss, setComentarios] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Home_SectionComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            flexDirection: true,
            backGroundColor: "#336B90",
            isAuto: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    style: {
                        color: "white"
                    },
                    children: titulo
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                    src: imagen,
                    width: 100,
                    height: 100,
                    style: {
                        height: "400px",
                        objectFit: "fill",
                        width: "100%"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: {
                        display: "flex",
                        marginTop: 2,
                        flexDirection: "column",
                        gap: "2px",
                        marginBottom: "10px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                            style: {
                                color: "white",
                                fontSize: "10px"
                            },
                            children: "Kerlyn Frias"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                            style: {
                                color: "white",
                                fontSize: "10px"
                            },
                            children: "10/04/2023"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                height: "1px",
                                width: "98%",
                                backgroundColor: "white"
                            }
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                    style: {
                        color: "white",
                        marginBottom: "60px"
                    },
                    children: texto.map((ele)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: ele
                        }))
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: {
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        marginBottom: "20px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                            style: {
                                color: "white"
                            },
                            children: "Temas:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                color: "white",
                                borderRadius: "20px",
                                backgroundColor: "#4FA5CA",
                                padding: "8px"
                            },
                            children: "Economia"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                color: "white",
                                borderRadius: "20px",
                                backgroundColor: "#4FA5CA",
                                padding: "8px"
                            },
                            children: "Republica Dominicana"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                color: "white",
                                borderRadius: "20px",
                                backgroundColor: "#4FA5CA",
                                padding: "8px"
                            },
                            children: "Opinion"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            style: {
                                color: "white"
                            },
                            children: "Comentarios"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                height: "200px",
                                width: "400px",
                                backgroundColor: "white",
                                borderRadius: "20px",
                                display: "flex",
                                flexDirection: "column",
                                marginBottom: "20px",
                                overflow: "auto"
                            },
                            children: [
                                comentarios.map((element)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        sx: {
                                            width: "40%",
                                            display: "flex",
                                            gap: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                sx: {
                                                    borderRadius: "100%",
                                                    backgroundColor: "#D9D9D9",
                                                    width: "40px",
                                                    height: "40px",
                                                    marginLeft: "20px",
                                                    marginTop: "20px"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                sx: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    marginTop: "2px",
                                                    marginBottom: "4px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                        style: {
                                                            color: "black",
                                                            fontWeight: "normal",
                                                            fontSize: "10px"
                                                        },
                                                        children: "Usuario anonimo"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        style: {
                                                            color: "black",
                                                            fontWeight: "normal",
                                                            fontSize: "8px",
                                                            margin: 0,
                                                            paddingBottom: "10px"
                                                        },
                                                        children: element
                                                    })
                                                ]
                                            })
                                        ]
                                    })),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    sx: {
                                        width: "100%",
                                        backgroundColor: "#9CB9C6",
                                        flex: 1,
                                        borderBottomLeftRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                        overflow: "hidden",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "8px"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            id: "comentarioText",
                                            type: "text",
                                            onChange: (e)=>setComentarios(e.target.value),
                                            style: {
                                                width: "75%",
                                                height: "60%",
                                                borderRadius: "10px",
                                                paddingLeft: "10px"
                                            },
                                            placeholder: "Comenta algo..."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                comentarios.push(comentarioss);
                                                setComentarios("");
                                            },
                                            children: "Enviar"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ })

};
;