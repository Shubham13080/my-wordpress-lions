/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./src-frontend/frontend.scss":
/*!************************************!*\
  !*** ./src-frontend/frontend.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src-frontend/frontend/EnquiryCartIcon.js":
/*!**************************************************!*\
  !*** ./src-frontend/frontend/EnquiryCartIcon.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// components/EnquiryCartIcon.js


const EnquiryCartIcon = ({
  width = 24,
  height = 24,
  fill = "currentColor"
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: width,
  height: height,
  viewBox: "0 0 24 24",
  fill: fill,
  "aria-hidden": "true",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10\r 10-4.48 10-10S17.52 2 12 2zm0 \r 17c-.55 0-1-.45-1-1s.45-1 1-1\r 1 .45 1 1-.45 1-1 1zm1.07-7.75l-.9.92C11.45 \r 12.9 11.25 13.5 11.25 14h-1.5v-.25c0-.83.34-1.63.93-2.21l1.24-1.26a1.49 \r 1.49 0 10-2.12-2.1l-.14.15-1.06-1.06.14-.15a3 3 0 114.24 4.23z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnquiryCartIcon);

/***/ }),

/***/ "./src-frontend/frontend/EnquiryForm.js":
/*!**********************************************!*\
  !*** ./src-frontend/frontend/EnquiryForm.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField */ "./src-frontend/frontend/FormField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // optional

const EnquiryForm = ({
  formFields,
  setSuccessMessage
}) => {
  const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const errorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (error) {
      setTimeout(() => {
        errorRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 0);
    }
  }, [error]);
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsSubmitting(true);
    let isSuccess = false;
    let result = null;
    try {
      const response = await fetch(window.gmpqcw_wp_ajax.enquiry, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": window.gmpqcw_wp_ajax.nonce
        },
        body: JSON.stringify(formData)
      });
      result = await response.json();
      if (result.msg === "success") {
        isSuccess = true;
        setSuccessMessage("Enquiry successfully submitted!");
        //console.log(result);
        if (result.redirect === "yes") {
          window.location.href = result.redirect_to;
        }
      } else {
        const errorHtml = result.returnhtml || "An error occurred while submitting the enquiry.";
        setError(errorHtml);
      }
    } catch (error) {
      setError("Error submitting enquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
      // Dispatch custom event regardless of success/failure
      const event = new CustomEvent("Gm_quote_cart_submitted", {
        detail: {
          success: isSuccess,
          formData,
          result
        }
      });
      window.dispatchEvent(event);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "gmpqcw-form",
    children: [window.gmpqcw_wp_ajax.gmpqcw_content_beforeform && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gmpqcw-form-before-content",
      children: window.gmpqcw_wp_ajax.gmpqcw_content_beforeform
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [formFields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
        field: field,
        value: formData[field.name],
        onChange: handleChange
      }, field.name)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        className: "gmpqcw-submit-btn",
        type: "submit",
        disabled: isSubmitting,
        children: isSubmitting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "gmpqcw-loader",
          children: "Submitting..."
        }) : window.gmpqcw_wp_ajax.gmpqcw_translation?.gmpqcw_trasnlation_button_label?.val || "Submit"
      })]
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ref: errorRef,
      className: "gmpqcw-error",
      dangerouslySetInnerHTML: {
        __html: error
      }
    }), window.gmpqcw_wp_ajax.gmpqcw_content_afterform && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gmpqcw-form-after-content",
      children: window.gmpqcw_wp_ajax.gmpqcw_content_afterform
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnquiryForm);

/***/ }),

/***/ "./src-frontend/frontend/FormField.js":
/*!********************************************!*\
  !*** ./src-frontend/frontend/FormField.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FormField = ({
  field,
  value,
  onChange
}) => {
  if (!field) return null;
  const commonProps = {
    name: field.name,
    onChange,
    required: field.required,
    value: value || ""
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "gmpqcw-form-group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
      className: "gmpqcw-label",
      children: field.label
    }), ["text", "email"].includes(field.type) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      className: "gmpqcw-input",
      type: field.type,
      ...commonProps
    }), field.type === "textarea" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
      className: "gmpqcw-textarea",
      ...commonProps
    }), field.type === "select" && field.options && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", {
      className: "gmpqcw-select",
      ...commonProps,
      children: field.options.map((option, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", {
        value: option,
        children: option
      }, idx))
    }), ["radio", "checkbox"].includes(field.type) && field.options && field.options.map((option, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
      className: field.type === "radio" ? "gmpqcw-radio-container" : "gmpqcw-checkbox-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: field.type,
        name: field.name,
        value: option,
        onChange: onChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {}), " ", option]
    }, idx))]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormField);

/***/ }),

/***/ "./src-frontend/frontend/PopupCart.js":
/*!********************************************!*\
  !*** ./src-frontend/frontend/PopupCart.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EnquiryForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnquiryForm */ "./src-frontend/frontend/EnquiryForm.js");
/* harmony import */ var _EnquiryCartIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnquiryCartIcon */ "./src-frontend/frontend/EnquiryCartIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const PopupCart = () => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [formFields, setFormFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loadingItemId, setLoadingItemId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (cartItems.length === 0) {
      setIsOpen(false);
    }
  }, [cartItems]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen === true) {
      fetchCartItems();
    }
  }, [isOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchCartItems();
    if (window.gmpqcw_wp_ajax && window.gmpqcw_wp_ajax.gmpqcw_fields) {
      parseFormFields(window.gmpqcw_wp_ajax.gmpqcw_fields);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleCartUpdate = () => {
      fetchCartItems(); // Reload the cart when item is added
      setIsOpen(true);
    };
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);
  const parseFormFields = fieldsObj => {
    const fieldsArray = Object.keys(fieldsObj).map(key => ({
      name: key,
      ...fieldsObj[key]
    }));
    setFormFields(fieldsArray);
  };
  const fetchCartItems = async () => {
    try {
      const response = await fetch(window.gmpqcw_wp_ajax.cart_items);
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error loading floating cart:", error);
    }
  };
  const handleRemove = async productId => {
    setLoadingItemId(productId);
    try {
      const response = await fetch(window.gmpqcw_wp_ajax.remove_from_cart, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": window.gmpqcw_wp_ajax.nonce
        },
        body: JSON.stringify({
          product_id: productId
        })
      });
      const result = await response.json();
      if (result.msg === "success") {
        setCartItems(cartItems.filter(item => item.id !== productId));
      } else {
        alert("Error: " + result.returnhtml);
      }
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setLoadingItemId(null);
    }
  };
  const closeCartPopup = () => {
    setIsOpen(false);
    setSuccessMessage(null);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [cartItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
      href: "#",
      className: "floating-cart-button",
      onClick: () => setIsOpen(true),
      "aria-label": "Toggle Enquiry Cart",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_EnquiryCartIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "floating-cart-overlay",
      onClick: closeCartPopup
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: `floating-cart-panel open`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          className: "close-button",
          onClick: closeCartPopup
        })
      }), successMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gmpqcw-success",
        children: successMessage
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "cart-header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
            children: [" ", window.gmpqcw_wp_ajax?.gmpqcw_translation?.gmpqcw_trasnlation_popup_title?.val || "Your Enquiry Cart"]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "floating-cart-panel-inner",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "cart-content",
            children: cartItems.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "gmpqcw-loader",
              children: "Loading your cart..."
            }) : cartItems.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "gmpqcw-cart-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                src: item.image || "/placeholder.png",
                alt: item.name,
                className: "gmpqcw-cart-img"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "gmpqcw-cart-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                  children: item.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                  className: "gmpqcw-remove-btn",
                  onClick: () => handleRemove(item.id),
                  disabled: loadingItemId === item.id,
                  children: loadingItemId === item.id ? "Removing..." : "Remove"
                })]
              })]
            }, item.id))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_EnquiryForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
            formFields: formFields,
            setSuccessMessage: setSuccessMessage
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupCart);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src-frontend/frontend.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _frontend_PopupCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend/PopupCart */ "./src-frontend/frontend/PopupCart.js");
/* harmony import */ var _frontend_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontend.scss */ "./src-frontend/frontend.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Wait for the DOM to be ready and mount React

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(wrapper).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_frontend_PopupCart__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
});
})();

/******/ })()
;
//# sourceMappingURL=frontend.js.map