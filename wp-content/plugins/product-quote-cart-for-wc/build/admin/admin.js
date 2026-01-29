/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src-admin/admin.scss":
/*!******************************!*\
  !*** ./src-admin/admin.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src-admin/admin/EmailCustomizerTab.js":
/*!***********************************************!*\
  !*** ./src-admin/admin/EmailCustomizerTab.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const EmailCustomizerTab = ({
  openPopup
}) => {
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [modifiedFields, setModifiedFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmpqcw_wp_ajax.getsettings, gmpqcw_wp_ajax.nonce).then(fetchedData => {
      setData(fetchedData);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  const updateField = (field, value) => {
    setData(prevData => ({
      ...prevData,
      [field]: value
    }));
    setModifiedFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };
  const saveSettings = () => {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmpqcw_wp_ajax.savedata, gmpqcw_wp_ajax.nonce, modifiedFields).then(responseData => {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({}); // Clear modified fields after saving
      } else {
        openPopup('Failed to save settings.');
      }
    }).catch(error => {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
        className: "GMadminTable",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              children: "Recipient Email"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              onChange: value => updateField('gmpqcw_reci_email', value),
              value: data.gmpqcw_reci_email
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              children: "Email Subject"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              onChange: value => updateField('gmpqcw_email_sub', value),
              value: data.gmpqcw_email_sub
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              children: "Send Enquiry Email to Customer As Well"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
              checked: data.gmpqcw_send_enquiry_email_cutomer === 'yes',
              onChange: () => updateField('gmpqcw_send_enquiry_email_cutomer', data.gmpqcw_send_enquiry_email_cutomer === 'yes' ? 'no' : 'yes')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              children: "Customer Email Subject"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
              onChange: value => updateField('gmpqcw_customer_email_subject', value),
              value: data.gmpqcw_customer_email_subject
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
              children: "Email Body"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
              value: data.gmpqcw_email_body,
              onChange: value => updateField('gmpqcw_email_body', value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              children: [data.gmpqcw_field_customizer_enble && Object.entries(data.gmpqcw_field_customizer_enble).map(([key]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("code", {
                children: ["[", key, "]"]
              }, key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                children: "[product]"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: saveSettings,
        disabled: isSaving,
        children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : 'Save Settings'
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailCustomizerTab);

/***/ }),

/***/ "./src-admin/admin/EnquiryButtonTab.js":
/*!*********************************************!*\
  !*** ./src-admin/admin/EnquiryButtonTab.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const EnquiryButtonTab = ({
  openPopup
}) => {
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [modifiedFields, setModifiedFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(gmpqcw_wp_ajax.getsettings, gmpqcw_wp_ajax.nonce).then(fetchedData => {
      setData(fetchedData);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  const updateField = (field, value) => {
    setData(prevData => ({
      ...prevData,
      [field]: value
    }));
    setModifiedFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };
  const toggleCheckbox = (fieldName, key) => {
    setData(prevData => {
      const currentValues = prevData[fieldName] || [];
      const updatedValues = currentValues.includes(key) ? currentValues.filter(item => item !== key) // Remove key if already present
      : [...currentValues, key]; // Add key if not present

      return {
        ...prevData,
        [fieldName]: updatedValues
      };
    });
    setModifiedFields(prevFields => ({
      ...prevFields,
      [fieldName]: data[fieldName]?.includes(key) ? data[fieldName].filter(item => item !== key) : [...(data[fieldName] || []), key]
    }));
  };
  const saveSettings = () => {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    console.log(modifiedFields);
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmpqcw_wp_ajax.savedata, gmpqcw_wp_ajax.nonce, modifiedFields).then(responseData => {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({}); // Clear modified fields after saving
      } else {
        openPopup('Failed to save settings.');
      }
    }).catch(error => {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        className: "GMadminTable",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              children: "Enable"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
              checked: data.gmpqcw_cart_enable_setting === 'yes',
              onChange: () => updateField('gmpqcw_cart_enable_setting', data.gmpqcw_cart_enable_setting === 'yes' ? 'no' : 'yes')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
              children: "Enquiry Cart Display Page"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
              selected: data.gmpqcw_cart_display,
              options: [{
                label: 'Shop and Single Product Page',
                value: 'all'
              }, {
                label: 'Single Product Page',
                value: 'single'
              }, {
                label: 'Custom Location',
                value: 'custom'
              }],
              onChange: value => updateField('gmpqcw_cart_display', value)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
              children: ["Note: Custom Location requires using the shortcode", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
                children: "[gmpqcw_enquiry_single_product]"
              }), " or", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
                children: "[gmpqcw_enquiry_single_product id=\"product_id\"]"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: saveSettings,
        disabled: isSaving,
        children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : 'Save Settings'
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnquiryButtonTab);

/***/ }),

/***/ "./src-admin/admin/EnquiryListTab.js":
/*!*******************************************!*\
  !*** ./src-admin/admin/EnquiryListTab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



 // Assuming deleteData is your helper function to handle DELETE requests

const EnquiryListTab = ({
  openPopup
}) => {
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [headers, setHeaders] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchEnquiries(currentPage);
  }, [currentPage]);
  const fetchEnquiries = page => {
    setLoading(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(`${gmpqcw_wp_ajax.getenquirys}?page=${page}&per_page=10`, gmpqcw_wp_ajax.nonce).then(response => {
      setData(response.enquiry || []);
      setHeaders(response.header ? Object.entries(response.header) : []);
      setTotalPages(response.pagination?.total_pages || 1);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching enquiries:', error);
    });
  };

  // Function to delete all enquiries
  const deleteAllEnquiries = () => {
    if (window.confirm("Are you sure you want to delete all enquiries?")) {
      setLoading(true);
      (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmpqcw_wp_ajax.deleteallenquirys, gmpqcw_wp_ajax.nonce) // Assuming deleteData handles the DELETE API call
      .then(response => {
        setLoading(false);
        if (response.success) {
          openPopup('All enquiries have been deleted!');
          fetchEnquiries(currentPage); // Re-fetch the enquiries after deletion
        } else {
          openPopup('Failed to delete enquiries.');
        }
      }).catch(error => {
        setLoading(false);
        console.error('Error deleting enquiries:', error);
        openPopup('Failed to delete enquiries.');
      });
    }
  };
  const deleteEnquiry = id => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      setLoading(true);
      (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmpqcw_wp_ajax.deleteallenquirys, gmpqcw_wp_ajax.nonce, {
        id
      }) // Assuming the API takes the ID of the enquiry to delete
      .then(response => {
        setLoading(false);
        if (response.success) {
          openPopup('Enquiry deleted successfully!');
          fetchEnquiries(currentPage); // Re-fetch the enquiries after deletion
        } else {
          openPopup('Failed to delete enquiry.');
        }
      }).catch(error => {
        setLoading(false);
        console.error('Error deleting enquiry:', error);
        openPopup('Failed to delete enquiry.');
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isPrimary: true,
          onClick: deleteAllEnquiries,
          className: "mb-10",
          children: "Delete All Enquiries"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isPrimary: true,
          onClick: () => window.open(`${gmpqcw_wp_ajax.site_url}/?action=download_enquiery_data_cart`, '_blank'),
          className: "ml-10",
          children: "Download All Enquiries"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "cfcblist",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
          className: "wp-list-table widefat fixed striped table-view-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [headers.map(([key, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: value
              }, key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
                children: "Actions"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
            children: data.length > 0 ? data.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              children: [headers.map(([key]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: item[key] || 'N/A'
              }, key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  isPrimary: true,
                  onClick: () => deleteEnquiry(item.id),
                  children: "Delete"
                })
              })]
            }, item.id)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                colSpan: headers.length + 1,
                style: {
                  textAlign: 'center'
                },
                children: "No enquiries found."
              })
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          marginTop: '10px',
          textAlign: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isSecondary: true,
          disabled: currentPage <= 1,
          onClick: () => setCurrentPage(currentPage - 1),
          children: "Previous"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          style: {
            margin: '0 10px'
          },
          children: [" Page ", currentPage, " of ", totalPages, " "]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isSecondary: true,
          disabled: currentPage >= totalPages,
          onClick: () => setCurrentPage(currentPage + 1),
          children: "Next"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnquiryListTab);

/***/ }),

/***/ "./src-admin/admin/FormCustomizerTab.js":
/*!**********************************************!*\
  !*** ./src-admin/admin/FormCustomizerTab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const FormCustomizerTab = ({
  openPopup
}) => {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fields, setFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // Store existing fields
  const [editingFieldId, setEditingFieldId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // For editing
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [isDeleting, setIsDeleting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fieldName, setFieldName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [orderNumber, setOrderNumber] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [fieldType, setFieldType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('text'); // Field type state
  const [fieldLabel, setFieldLabel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // Field label state
  const [fieldRequired, setFieldRequired] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // Field required state
  const [fieldEnable, setFieldEnable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [fieldOptions, setFieldOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // For options like select, radio

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchFields(); // Fetch existing fields on mount
  }, []);
  const fetchFields = () => {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmpqcw_wp_ajax.getsettings, gmpqcw_wp_ajax.nonce).then(fetchedData => {
      setFields(fetchedData.custom_fields);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  };
  const openModal = (field = null) => {
    setIsOpen(true);
    if (field) {
      console.log(field.options);
      setFieldName(field.name);
      setFieldLabel(field.label); // Label is being used as title
      setOrderNumber(field.order);
      setFieldType(field.type);
      setFieldRequired(field.required);
      setFieldEnable(field.enable);
      setFieldOptions(field.options.join('\n')); // Assuming options are stored as an array
    } else {
      resetForm(); // Reset for new field
    }
  };
  const closeModal = () => {
    setIsOpen(false);
    resetForm(); // Reset the form on close
  };
  const resetForm = () => {
    setFieldName('');
    setFieldLabel('');
    setOrderNumber('');
    setFieldType('text');
    setFieldRequired('');
    setFieldEnable('');
    setFieldOptions('');
    setEditingFieldId(null);
    setError("");
  };
  const saveField = () => {
    const data = {
      name: fieldName,
      label: fieldLabel,
      order: orderNumber,
      type: fieldType,
      required: fieldRequired,
      enable: fieldEnable,
      options: fieldOptions
    };
    console.log(data);
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmpqcw_wp_ajax.savecustomfield, gmpqcw_wp_ajax.nonce, data).then(responseData => {
      setIsSaving(false);
      if (responseData.success) {
        fetchFields();
        openPopup('Settings saved!');
      } else {
        setError(responseData.message);
      }
    }).catch(error => {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  const deleteField = fieldId => {
    if (confirm('Are you sure you want to delete this field?')) {
      setIsDeleting(true);
      const data = {
        name: fieldId
      };
      (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmpqcw_wp_ajax.deletecustomfield, gmpqcw_wp_ajax.nonce, data).then(responseData => {
        setIsDeleting(false);
        if (responseData.success) {
          fetchFields();
          openPopup(responseData.message);
        } else {
          openPopup(responseData.message);
        }
      }).catch(error => {
        setIsDeleting(false);
        console.error('Error deleting field:', error);
        openPopup('Failed to delete field.');
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: () => openModal(),
        className: "mb-10",
        children: "Add Field"
      })
    }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "cfcblist",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
          className: "wp-list-table widefat fixed striped table-view-list",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Enable / Disable"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Label"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Required"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Order"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Options"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Action"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
            children: fields.length > 0 ? fields.map(field => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: field.enable === 'yes' ? 'Yes' : 'No'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: field.label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: field.required === 'yes' ? 'Yes' : 'No'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: field.type
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: field.order
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: Array.isArray(field.options) ? field.options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: [option, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {})]
                }, index)) : field.options?.split('\n').map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: [option, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {})]
                }, index))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  isPrimary: true,
                  onClick: () => openModal(field),
                  children: "Edit"
                }), !['name', 'email', 'subject', 'mobile', 'enquiry'].includes(field.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  isDestructive: true,
                  onClick: () => deleteField(field.name),
                  disabled: isDeleting,
                  children: isDeleting ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
                    size: "small"
                  }) : 'Delete'
                })]
              })]
            }, field.name)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                colSpan: "7",
                style: {
                  textAlign: 'center'
                },
                children: "No fields available."
              })
            })
          })]
        })
      })
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      title: "Custom Field Add/Edit",
      onRequestClose: closeModal,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [!['name', 'email', 'subject', 'mobile', 'enquiry'].includes(fieldName) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mb-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: "Field Type",
            value: fieldType,
            onChange: setFieldType,
            options: [{
              label: 'Text',
              value: 'text'
            }, {
              label: 'Textarea',
              value: 'textarea'
            }, {
              label: 'Select',
              value: 'select'
            }, {
              label: 'Radio',
              value: 'radio'
            }, {
              label: 'Checkbox',
              value: 'checkbox'
            }]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Field Label",
          value: fieldLabel,
          onChange: value => setFieldLabel(value),
          placeholder: "Enter Field Label"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl, {
          label: "Field Order Number",
          value: orderNumber,
          onChange: value => setOrderNumber(value),
          placeholder: "Enter Field Order Number",
          className: "mb-10"
        }), ['select', 'radio', 'checkbox'].includes(fieldType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mb-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
            label: "Field Options",
            value: fieldOptions,
            onChange: setFieldOptions,
            placeholder: `Option 1\nOption 2\nOption 3`
          })
        }), !['name', 'email'].includes(fieldName) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "mb-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
            label: "Field Enabled",
            selected: fieldEnable,
            options: [{
              label: 'Yes',
              value: 'yes'
            }, {
              label: 'No',
              value: 'no'
            }],
            onChange: value => setFieldEnable(value)
          })
        }), !['name', 'email'].includes(fieldName) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
            label: "Field Required",
            selected: fieldRequired,
            options: [{
              label: 'Yes',
              value: 'yes'
            }, {
              label: 'No',
              value: 'no'
            }],
            onChange: value => setFieldRequired(value)
          })
        })]
      }), error != '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "mt-10 errormsg",
        children: error
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isPrimary: true,
          onClick: saveField,
          disabled: isSaving,
          children: isSaving ? 'Saving...' : 'Save Field'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isSecondary: true,
          onClick: closeModal,
          children: "Cancel"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCustomizerTab);

/***/ }),

/***/ "./src-admin/admin/GeneralSettingTab.js":
/*!**********************************************!*\
  !*** ./src-admin/admin/GeneralSettingTab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const GeneralSettingTab = ({
  openPopup
}) => {
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [modifiedFields, setModifiedFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [redirectPages, setRedirectPages] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch settings from the REST API
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.fetchData)(gmpqcw_wp_ajax.getsettings, gmpqcw_wp_ajax.nonce).then(fetchedData => {
      setData(fetchedData);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  const updateField = (field, value) => {
    setData(prevData => ({
      ...prevData,
      [field]: value
    }));
    setModifiedFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };
  const toggleCheckbox = (fieldName, key) => {
    setData(prevData => {
      const currentValues = prevData[fieldName] || [];
      const updatedValues = currentValues.includes(key) ? currentValues.filter(item => item !== key) // Remove key if already present
      : [...currentValues, key]; // Add key if not present
      return {
        ...prevData,
        [fieldName]: updatedValues
      };
    });
    setModifiedFields(prevFields => ({
      ...prevFields,
      [fieldName]: data[fieldName]?.includes(key) ? data[fieldName].filter(item => item !== key) : [...(data[fieldName] || []), key]
    }));
  };
  const saveSettings = () => {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_3__.saveData)(gmpqcw_wp_ajax.savedata, gmpqcw_wp_ajax.nonce, modifiedFields).then(responseData => {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
      } else {
        openPopup('Failed to save settings.');
      }
    }).catch(error => {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Setting",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
          className: "GMadminTable",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Users Show"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
                selected: data.gmpqcw_usershow,
                options: [{
                  label: 'All Users',
                  value: 'all'
                }, {
                  label: 'Only Logged in Users',
                  value: 'logged_user'
                }, {
                  label: 'Only Logged out Users',
                  value: 'logged_out'
                }],
                onChange: value => updateField('gmpqcw_usershow', value)
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Show Enquiry Button When Product is out of stock"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
                checked: data.gmpqcw_show_product_outofstock === 'yes',
                onChange: () => updateField('gmpqcw_show_product_outofstock', data.gmpqcw_show_product_outofstock === 'yes' ? 'no' : 'yes')
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Remove Price From Product"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
                checked: data.gmpqcw_remove_price === 'yes',
                onChange: () => updateField('gmpqcw_remove_price', data.gmpqcw_remove_price === 'yes' ? 'no' : 'yes')
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Hide Add to Cart Button"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
                checked: data.gmpqcw_hide_add_to_cart === 'yes',
                onChange: () => updateField('gmpqcw_hide_add_to_cart', data.gmpqcw_hide_add_to_cart === 'yes' ? 'no' : 'yes')
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Form Setting",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
          className: "GMadminTable",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Button Background Color"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                onChange: value => updateField('gmpqcw_enquiry_btn_bg_color', value),
                value: data.gmpqcw_enquiry_btn_bg_color
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Button Text Color"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                onChange: value => updateField('gmpqcw_enquiry_btn_text_color', value),
                value: data.gmpqcw_enquiry_btn_text_color
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Button Background Hover Color"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                onChange: value => updateField('gmpqcw_enquiry_btn_bg_hover_color', value),
                value: data.gmpqcw_enquiry_btn_bg_hover_color
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Button Text Hover Color"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
                onChange: value => updateField('gmpqcw_enquiry_btn_text_hover_color', value),
                value: data.gmpqcw_enquiry_btn_text_hover_color
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Content Before Enquiry From"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
                onChange: value => updateField('gmpqcw_content_beforeform', value),
                value: data.gmpqcw_content_beforeform
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Content After Enquiry From"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
                onChange: value => updateField('gmpqcw_content_afterform', value),
                value: data.gmpqcw_content_afterform
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Dom Event After Form Event"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
                  children: `<script>
window.addEventListener('Gm_quote_cart_submitted', (event) => {
    const { success, formData, result } = event.detail;
    if (success) {
        console.log("Enquiry submitted successfully:", result);
    } else {
        console.error("Enquiry submission failed:", result);
    }
});
</script>`
                })
              }), "You can also trigger custom tracking pixels, marketing tags, or webhooks within this event handler after the form submission."]
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Redirection Setting",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
          className: "GMadminTable",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Redirect after Enquiry form Submission"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
                checked: data.gmpqcw_redirect_form_sub === 'yes',
                onChange: () => updateField('gmpqcw_redirect_form_sub', data.gmpqcw_redirect_form_sub === 'yes' ? 'no' : 'yes')
              })
            })]
          }), data.gmpqcw_redirect_form_sub === 'yes' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Redirect Page"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                value: data.gmpqcw_redirect_form_sub_page,
                onChange: value => updateField('gmpqcw_redirect_form_sub_page', value),
                options: [{
                  disabled: true,
                  label: 'Select an Option',
                  value: ''
                }, ...gmpqcw_wp_ajax.gmpqcwpages.map(page => ({
                  label: page.post_title,
                  // Assuming `page.title` is the name of the page
                  value: page.ID // Assuming `page.id` is the unique identifier for the page
                }))]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Disable Woocommerce Cart and Checkout Page?"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
                checked: data.gmpqcw_disable_cart_checkout_page === 'yes',
                onChange: () => updateField('gmpqcw_disable_cart_checkout_page', data.gmpqcw_disable_cart_checkout_page === 'yes' ? 'no' : 'yes')
              })
            })]
          }), data.gmpqcw_disable_cart_checkout_page === 'yes' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                children: "Redirect Page"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
                value: data.gmpqcw_redirect_page,
                onChange: value => updateField('gmpqcw_redirect_disable_cart_checkout_page', value),
                options: [{
                  disabled: true,
                  label: 'Select an Option',
                  value: ''
                }, ...gmpqcw_wp_ajax.gmpqcwpages.map(page => ({
                  label: page.post_title,
                  // Assuming `page.title` is the name of the page
                  value: page.ID // Assuming `page.id` is the unique identifier for the page
                }))]
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          isPrimary: true,
          onClick: saveSettings,
          disabled: isSaving,
          children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : 'Save Settings'
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettingTab);

/***/ }),

/***/ "./src-admin/admin/IncludeExcludeTab.js":
/*!**********************************************!*\
  !*** ./src-admin/admin/IncludeExcludeTab.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const IncludeExcludeTab = ({
  openPopup,
  setActiveTab
}) => {
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [modifiedFields, setModifiedFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmpqcw_wp_ajax.getsettings, gmpqcw_wp_ajax.nonce).then(fetchedData => {
      setData(fetchedData);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  const updateField = (field, value) => {
    setData(prevData => ({
      ...prevData,
      [field]: value
    }));
    setModifiedFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };
  const toggleCheckbox = (fieldName, key) => {
    setData(prevData => {
      const currentValues = prevData[fieldName] || [];
      const updatedValues = currentValues.includes(key) ? currentValues.filter(item => item !== key) : [...currentValues, key];
      return {
        ...prevData,
        [fieldName]: updatedValues
      };
    });
    setModifiedFields(prevFields => ({
      ...prevFields,
      [fieldName]: data[fieldName]?.includes(key) ? data[fieldName].filter(item => item !== key) : [...(data[fieldName] || []), key]
    }));
  };
  const saveSettings = () => {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmpqcw_wp_ajax.savedata, gmpqcw_wp_ajax.nonce, modifiedFields).then(responseData => {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({});
      } else {
        openPopup('Failed to save settings.');
      }
    }).catch(error => {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("table", {
        className: "GMadminTable",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tbody", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                children: "Include/Exclude Based On Category"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RadioControl, {
                selected: data.gmpqcw_include_exclude,
                options: [{
                  label: 'All',
                  value: 'all'
                }, {
                  label: 'Include',
                  value: 'include'
                }, {
                  label: 'Exclude',
                  value: 'exclude'
                }],
                onChange: value => updateField('gmpqcw_include_exclude', value)
              })
            })]
          }), data.gmpqcw_include_exclude === 'include' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                children: "Include From Category"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalScrollable, {
                scrollDirection: "y",
                style: {
                  height: 300
                },
                children: gmpqcw_wp_ajax.gmpqcwcategory.map(catdata => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
                  label: catdata.name,
                  checked: data.gmpqcw_include_category?.includes(String(catdata.term_id)),
                  onChange: () => toggleCheckbox('gmpqcw_include_category', String(catdata.term_id))
                }, String(catdata.term_id)))
              })
            })]
          }), data.gmpqcw_include_exclude === 'exclude' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                children: "Exclude From Category"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalScrollable, {
                scrollDirection: "y",
                style: {
                  height: 300
                },
                children: gmpqcw_wp_ajax.gmpqcwcategory.map(catdata => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
                  label: catdata.name,
                  checked: data.gmpqcw_exclude_category?.includes(String(catdata.term_id)),
                  onChange: () => toggleCheckbox('gmpqcw_exclude_category', String(catdata.term_id))
                }, String(catdata.term_id)))
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: saveSettings,
        disabled: isSaving,
        children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : 'Save Settings'
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IncludeExcludeTab);

/***/ }),

/***/ "./src-admin/admin/TranslationTab.js":
/*!*******************************************!*\
  !*** ./src-admin/admin/TranslationTab.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./src-admin/admin/api.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const TranslationTab = ({
  openPopup,
  setActiveTab
}) => {
  const [isSaving, setIsSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [modifiedFields, setModifiedFields] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchData)(gmpqcw_wp_ajax.getsettings, gmpqcw_wp_ajax.nonce).then(fetchedData => {
      setData(fetchedData);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
      console.error('Error fetching settings:', error);
    });
  }, []);
  const updateField = (field, value) => {
    setData(prevData => ({
      ...prevData,
      [field]: value
    }));
    setModifiedFields(prevFields => ({
      ...prevFields,
      [field]: value
    }));
  };
  const saveSettings = () => {
    if (Object.keys(modifiedFields).length === 0) {
      openPopup('No changes to save.');
      return;
    }
    setIsSaving(true);
    (0,_api__WEBPACK_IMPORTED_MODULE_2__.saveData)(gmpqcw_wp_ajax.savedata, gmpqcw_wp_ajax.nonce, modifiedFields).then(responseData => {
      setIsSaving(false);
      if (responseData.success) {
        openPopup('Settings saved!');
        setModifiedFields({});
      } else {
        openPopup('Failed to save settings.');
      }
    }).catch(error => {
      setIsSaving(false);
      console.error('Error saving settings:', error);
      openPopup('Failed to save settings.');
    });
  };
  const translationArr = gmpqcw_wp_ajax.gmpqcw_translation || {};
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("table", {
        className: "GMadminTable",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
          children: Object.entries(translationArr).map(([key, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                children: value.label
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                onChange: value => updateField(key, value),
                value: data[key] || ''
              })
            })]
          }, key))
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
        isPrimary: true,
        onClick: saveSettings,
        disabled: isSaving,
        children: isSaving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, {}) : 'Save Settings'
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TranslationTab);

/***/ }),

/***/ "./src-admin/admin/api.js":
/*!********************************!*\
  !*** ./src-admin/admin/api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData),
/* harmony export */   saveData: () => (/* binding */ saveData)
/* harmony export */ });
// api.js
const fetchData = async (endpoint, nonce) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-WP-Nonce': nonce
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
const saveData = async (endpoint, nonce, payload) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': nonce
      },
      body: JSON.stringify({
        settings: payload
      })
    });
    if (!response.ok) {
      return response.json();
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
    console.error('Error saving data:', error);
    throw error;
  }
};

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/*!****************************!*\
  !*** ./src-admin/admin.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.scss */ "./src-admin/admin.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _admin_EnquiryButtonTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/EnquiryButtonTab */ "./src-admin/admin/EnquiryButtonTab.js");
/* harmony import */ var _admin_EnquiryListTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/EnquiryListTab */ "./src-admin/admin/EnquiryListTab.js");
/* harmony import */ var _admin_GeneralSettingTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/GeneralSettingTab */ "./src-admin/admin/GeneralSettingTab.js");
/* harmony import */ var _admin_IncludeExcludeTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/IncludeExcludeTab */ "./src-admin/admin/IncludeExcludeTab.js");
/* harmony import */ var _admin_FormCustomizerTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/FormCustomizerTab */ "./src-admin/admin/FormCustomizerTab.js");
/* harmony import */ var _admin_EmailCustomizerTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/EmailCustomizerTab */ "./src-admin/admin/EmailCustomizerTab.js");
/* harmony import */ var _admin_TranslationTab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/TranslationTab */ "./src-admin/admin/TranslationTab.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);













const AdminApp = () => {
  const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // State for popup visibility
  const [popupMessage, setPopupMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // State for popup message

  const openPopup = message => {
    setPopupMessage(message);
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupMessage('');
  };
  const tabs = [{
    name: 'EnquiryButtonTab',
    title: 'Enquiry Button Settings',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_EnquiryButtonTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'EnquiryListTab',
    title: 'Enquiry List',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_EnquiryListTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'GeneralSettingTab',
    title: 'General Setting',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_GeneralSettingTab__WEBPACK_IMPORTED_MODULE_7__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'IncludeExcludeTab',
    title: 'Include/Exclude',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_IncludeExcludeTab__WEBPACK_IMPORTED_MODULE_8__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'FormCustomizerTab',
    title: 'Form Customizer',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_FormCustomizerTab__WEBPACK_IMPORTED_MODULE_9__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'EmailCustomizerTab',
    title: 'Email Customizer',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_EmailCustomizerTab__WEBPACK_IMPORTED_MODULE_10__["default"], {
      openPopup: openPopup
    })
  }, {
    name: 'TranslationTab',
    title: 'Translate',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_admin_TranslationTab__WEBPACK_IMPORTED_MODULE_11__["default"], {
      openPopup: openPopup
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Panel, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TabPanel, {
        className: "",
        activeClass: "active-tab",
        tabs: tabs,
        children: (tab, selected) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: `tab-content ${tab.name === selected ? 'active-tab' : ''}`,
          children: tab.content
        })
      })
    }), isPopupOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
      title: popupMessage,
      onRequestClose: closePopup
    })]
  });
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot)(document.getElementById('GMPQCW-admin-root'));
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AdminApp, {}));
});
})();

/******/ })()
;
//# sourceMappingURL=admin.js.map