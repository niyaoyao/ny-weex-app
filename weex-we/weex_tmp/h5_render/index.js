/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/f5e1c456d74a6374b2c0129d79c108e1', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/f5e1c456d74a6374b2c0129d79c108e1',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroller",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "eleme-header"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "eleme-location"
	          ],
	          "attr": {
	            "value": "当前地理位置"
	          }
	        },
	        {
	          "type": "input",
	          "classList": [
	            "eleme-input"
	          ],
	          "attr": {
	            "placeholder": "搜索商家、商品名称"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "eleme-slider-panel"
	      ],
	      "children": [
	        {
	          "type": "slider",
	          "attr": {
	            "autoPlay": "false"
	          },
	          "classList": [
	            "eleme-slider"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "repeat": function () {return this.imageList},
	              "attr": {
	                "src": function () {return this.src}
	              },
	              "classList": [
	                "eleme-slider-image"
	              ]
	            },
	            {
	              "type": "text",
	              "repeat": function () {return this.imageList},
	              "attr": {
	                "value": function () {return this.name}
	              }
	            },
	            {
	              "type": "indicator"
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "classList": [
	            "eleme-image"
	          ],
	          "attr": {
	            "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg"
	          }
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "classList": [
	        "eleme-list"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.imageList},
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.src}
	              },
	              "classList": [
	                "eleme-slider-image"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return 'image:' + (this.src)}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "cell": {
	    "marginTop": 10,
	    "marginLeft": 10,
	    "flexDirection": "row"
	  },
	  "thumb": {
	    "width": 200,
	    "height": 200
	  },
	  "title": {
	    "textAlign": "center",
	    "flex": 1,
	    "color": "#808080",
	    "fontSize": 50
	  },
	  "eleme-header": {
	    "backgroundColor": "#3190e8",
	    "color": "#ffffff",
	    "fontSize": 16
	  },
	  "eleme-location": {
	    "marginTop": 10,
	    "marginBottom": 10,
	    "marginLeft": 10
	  },
	  "eleme-input": {
	    "backgroundColor": "#ffffff",
	    "color": "#333333",
	    "height": 50,
	    "fontSize": 20,
	    "textAlign": "center",
	    "marginRight": 40,
	    "marginLeft": 40,
	    "borderRadius": 25,
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "eleme-slider-panel": {
	    "height": 360
	  },
	  "eleme-slider": {
	    "height": 360,
	    "backgroundColor": "#eeeeee"
	  },
	  "eleme-slider-image": {
	    "width": 80,
	    "height": 80
	  },
	  "eleme-list": {
	    "backgroundColor": "#eeeeee",
	    "height": 100
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
		data: function () {return {
			list: [{ 'name': 'n1', price: 12 }, { 'name': 'n2', price: 12 }, { 'name': 'n3', price: 12 }, { 'name': 'n4', price: 12 }, { 'name': 'n5', price: 12 }, { 'name': 'n6', price: 12 }],
			imageList: [{ src: 'https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg', name: 'a' }, { src: 'https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg', name: 'b' }, { src: 'https://fuss10.elemecdn.com/1/c6/8edcaeb8cd35845946db6673660fcjpeg.jpeg', name: 'c' }, { src: 'https://fuss10.elemecdn.com/8/c4/f04e5364ac5a539c691ea57c9b2bajpeg.jpeg', name: 'd' }, { src: 'https://fuss10.elemecdn.com/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg', name: 'e' }]

		}}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);