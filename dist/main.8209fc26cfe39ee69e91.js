/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0;\n  padding: 0;\n  font-family: \"Montserrat\", sans-serif;\n}\n\ninput {\n  padding: 0;\n  margin: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\np, h1, h2, h3 {\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 29px;\n}\n\nh2 {\n  font-weight: 700;\n  font-size: 19px;\n  line-height: 23px;\n}\n\nh3 {\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 15px;\n  text-transform: uppercase;\n}\n\np {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n}\n\nul, li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nh3 {\n  color: rgb(31, 32, 65);\n}\n\n.container {\n  margin: auto;\n  max-width: 1200px;\n}\n\n.pageLogo {\n  position: absolute;\n  left: 30px;\n  top: 30px;\n}\n\n.colorAndTextTypes {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 150px;\n  padding-bottom: 150px;\n}\n\n.color__item-box {\n  border-radius: 6px;\n  width: 70px;\n  height: 70px;\n  margin-right: 40px;\n}\n\n.ds100 {\n  background-color: rgb(31, 32, 65);\n}\n\n.ds75 {\n  background-color: rgba(31, 32, 65, 0.75);\n}\n\n.ds50 {\n  background-color: rgba(31, 32, 65, 0.5);\n}\n\n.ds25 {\n  background-color: rgba(31, 32, 65, 0.25);\n}\n\n.ds5 {\n  background-color: rgba(31, 32, 65, 0.05);\n}\n\n.prpl {\n  background-color: rgb(188, 156, 255);\n}\n\n.grn {\n  background-color: rgb(111, 207, 151);\n}\n\n.color__item {\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.color__item-id {\n  font-weight: 400;\n}\n\n.textTypes {\n  max-width: 436px;\n}\n\n.textTypes__item {\n  display: flex;\n  margin-bottom: 51px;\n}\n\n.title__h1,\n.title__h2,\n.title__h3,\n.title__p {\n  color: rgba(31, 32, 65, 0.25);\n  font-weight: 400;\n}\n\n.textTypes__item-title {\n  margin-right: 30px;\n  width: 37px;\n  text-align: right;\n}\n\n.textTypes__item-text {\n  text-align: left;\n}\n\n.select {\n  width: 320px;\n  height: 44px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-radius: 4px;\n  text-align-last: left;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: border 0.3s;\n}\n\n.selected {\n  color: rgba(31, 32, 65, 0.75);\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  user-select: none;\n  padding-left: 15px;\n}\n\n.select-clicked {\n  border-bottom-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-color: rgba(31, 32, 65, 0.5);\n}\n\n.select:hover {\n  border: 1px solid rgba(31, 32, 65, 0.5);\n}\n\n.caret {\n  color: rgba(31, 32, 65, 0.5);\n  user-select: none;\n  margin-right: 13px;\n  font-family: \"Material Icons\";\n}\n\n.caret-rotate {\n  color: rgba(31, 32, 65, 0.75);\n  transform: rotate(180deg);\n}\n\n.menu {\n  width: 320px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding-top: 13px;\n  display: none;\n}\n\n.menu__item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 22px;\n  padding-left: 15px;\n}\n\n.menu-open {\n  display: block;\n  border: 1px solid rgba(31, 32, 65, 0.5);\n  border-top: none;\n}\n\n.counter {\n  padding-right: 7px;\n  display: flex;\n  align-items: center;\n  max-width: 92px;\n}\n\n.counter__button {\n  cursor: pointer;\n  user-select: none;\n  background-color: #fff;\n  width: 30px;\n  height: 30px;\n  border: 1px solid rgba(31, 32, 65, 0.5);\n  color: rgba(31, 32, 65, 0.5);\n  border-radius: 50%;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 22px;\n  text-align: center;\n}\n\n.counter__value {\n  border: none;\n  text-align: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 15px;\n  text-transform: uppercase;\n  width: 32px;\n}\n\n.counter__button-minus {\n  color: rgba(31, 32, 65, 0.25);\n  border: 1px solid rgba(31, 32, 65, 0.25);\n}\n\n.menu__buttons {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.menu__buttons-rToClean {\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu__button-apply {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  margin-right: 7px;\n  margin-bottom: 13px;\n  padding: 0;\n  color: rgb(188, 156, 255);\n  border: none;\n  background-color: #fff;\n}\n\n.menu__button-clean {\n  display: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  margin-left: 14px;\n  margin-bottom: 13px;\n  padding: 0;\n  color: rgb(188, 156, 255);\n  border: none;\n  background-color: #fff;\n}\n\n.menu__button-clean_active {\n  display: block;\n}\n\n.customDropdown .select,\n.customDropdown .menu {\n  max-width: 266px;\n}\n\n.dropdown__item__title-apply {\n  text-transform: lowercase;\n}\n\n.customDropdown .selected {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.form__input-textfield {\n  position: relative;\n}\n\n.form__input-email {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  width: 305px;\n  height: 44px;\n  padding-left: 15px;\n  border: 1px solid rgba(31, 32, 65, 0.25);\n  border-radius: 4px;\n  color: rgba(31, 32, 65, 0.75);\n  text-transform: capitalize;\n}\n\n.form__label-textfield {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: rgba(31, 32, 65, 0.25);\n  position: absolute;\n  top: 15px;\n  bottom: 8px;\n  left: 14px;\n}\n\n.button-clickme {\n  position: relative;\n  width: 99px;\n  height: 44px;\n  border: none;\n  background-image: linear-gradient(180deg, rgb(188, 156, 255), rgb(139, 164, 249));\n  border-radius: 22px;\n  text-align: center;\n}\n\n.button-clickme::before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  bottom: -1px;\n  left: -1px;\n  right: -1px;\n  background: linear-gradient(180deg, rgb(188, 156, 255), rgb(139, 164, 249));\n  border-radius: 22px;\n  z-index: -1;\n}\n\n.button__title-clickme {\n  text-align: center;\n  color: #fff;\n}", "",{"version":3,"sources":["webpack://./src/styles/_global.scss","webpack://./src/styles/index.scss"],"names":[],"mappings":"AAAA;EACI,qCAAA;EACA,SAAA;EACA,UAAA;EACA,qCAAA;ACCJ;;ADEA;EACI,UAAA;EACA,SAAA;ACCJ;;ADIA;EACI,SAAA;EACA,UAAA;EACA,eAAA;ACDJ;;ADKA;EACI,SAAA;EACA,UAAA;ACFJ;;ADKA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;ACFJ;;ADKA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;ACFJ;;ADKA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;ACFJ;;ADKA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;ACFJ;;ADMA;EACI,SAAA;EACA,UAAA;EACA,gBAAA;ACHJ;;AAnCA;EACI,sBAdG;AAoDP;;AAjCA;EACI,YAAA;EACA,iBAAA;AAoCJ;;AAjCA;EACI,kBAAA;EACA,UAAA;EACA,SAAA;AAoCJ;;AAhCA;EACI,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,qBAAA;AAmCJ;;AA7BA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AAgCJ;;AA7BA;EACI,iCAjDG;AAiFP;;AA7BA;EACI,wCApDE;AAoFN;;AA7BA;EACI,uCAvDE;AAuFN;;AA7BA;EACI,wCA1DE;AA0FN;;AA7BA;EACI,wCA7DC;AA6FL;;AA9BA;EACI,oCA/DK;AAgGT;;AA/BA;EACI,oCAjEI;AAmGR;;AA/BA;EACI,mBAAA;EACA,aAAA;EACA,mBAAA;AAkCJ;;AA/BA;EACI,gBAAA;AAkCJ;;AA/BA;EACI,gBAAA;AAkCJ;;AA/BA;EACI,aAAA;EACA,mBAAA;AAkCJ;;AA/BA;;;;EAII,6BA9FE;EA+FF,gBAAA;AAkCJ;;AA9BA;EACI,kBAAA;EACA,WAAA;EACA,iBAAA;AAiCJ;;AA9BA;EACI,gBAAA;AAiCJ;;AA5BA;EACI,YAAA;EACA,YAAA;EACA,wCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,uBAAA;AA8BJ;;AA1BA;EACI,6BAhIE;EAiIF,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AA6BJ;;AA1BA;EACI,+BAAA;EACA,8BAAA;EACA,mCA1IE;AAuKN;;AA1BA;EACI,uCAAA;AA6BJ;;AA1BA;EACI,4BAlJE;EAmJF,iBAAA;EACA,kBAAA;EACA,6BAAA;AA6BJ;;AAzBA;EACI,6BA3JE;EA4JF,yBAAA;AA4BJ;;AAxBA;EACI,YAAA;EACA,wCAAA;EACA,8BAAA;EACA,+BAAA;EACA,iBAAA;EAEA,aAAA;AA0BJ;;AAvBA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;EACA,kBAAA;AA0BJ;;AAtBA;EACI,cAAA;EACA,uCAAA;EACA,gBAAA;AAyBJ;;AAtBA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AAyBJ;;AAtBA;EACI,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,uCAAA;EACA,4BAtME;EAuMF,kBAAA;EACA,qCA/LE;EAgMF,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;AAyBJ;;AAtBA;EACI,YAAA;EACA,kBAAA;EACA,qCAzME;EA0MF,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,WAAA;AAyBJ;;AAtBA;EACI,6BA1NE;EA2NF,wCAAA;AAyBJ;;AAjBA;EACI,aAAA;EACA,yBAAA;AAoBJ;;AAjBA;EACI,aAAA;EACA,8BAAA;AAoBJ;;AAjBA;EACI,eAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCA3OE;EA4OF,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,yBArPK;EAsPL,YAAA;EACA,sBAAA;AAoBJ;;AAjBA;EACI,aAAA;EACA,eAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qCA3PE;EA4PF,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,yBArQK;EAsQL,YAAA;EACA,sBAAA;AAoBJ;;AAjBA;EACI,cAAA;AAoBJ;;AAjBA;;EAEI,gBAAA;AAoBJ;;AAjBA;EACI,yBAAA;AAoBJ;;AAhBA;EACI,mBAAA;EACA,gBAAA;EACA,uBAAA;AAmBJ;;AAfA;EACI,kBAAA;AAkBJ;;AAbA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,wCAAA;EACA,kBAAA;EACA,6BAlTE;EAmTF,0BAAA;AAgBJ;;AAbA;EACI,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,6BAxTE;EAyTF,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;AAgBJ;;AAZA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,iFAjUM;EAkUN,mBAAA;EACA,kBAAA;AAeJ;;AAZA;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,2EA7UM;EA8UN,mBAAA;EACA,WAAA;AAeJ;;AAXA;EACI,kBAAA;EACA,WAAA;AAcJ","sourcesContent":["body {\r\n    font-family: 'Montserrat', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\ninput {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\nbutton {\r\n    margin: 0;  \r\n    padding: 0; \r\n    cursor: pointer;\r\n}\r\n\r\n\r\np, h1, h2 ,h3 {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nh1 {\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n}\r\n\r\nh2 {\r\n    font-weight: 700;\r\n    font-size: 19px;\r\n    line-height: 23px;\r\n}\r\n\r\nh3 {\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    text-transform: uppercase;\r\n}\r\n\r\np {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n}\r\n\r\n\r\nul , li {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n","@use '_global';\r\n\r\n\r\n\r\n$ds100:rgba(31, 32, 65, 1);\r\n$ds75:rgba(31, 32, 65, 0.75);\r\n$ds50:rgba(31, 32, 65, 0.5);\r\n$ds25:rgba(31, 32, 65, 0.25);\r\n$ds5:rgba(31, 32, 65, 0.05);\r\n$purple: rgba(188, 156, 255, 1);\r\n$green: rgba(111, 207, 151, 1);\r\n$linear1: linear-gradient(180deg, rgba(188, 156, 255, 1),rgba(139, 164, 249, 1));\r\n$linear2: linear-gradient(180deg, rgba(188, 156, 255, 0.5),rgba(139, 164, 249, 0.5));\r\n\r\n\r\n$ffm: 'Montserrat', sans-serif;\r\n\r\nh3 {\r\n    color:$ds100;\r\n}\r\n\r\n\r\n\r\n.container {\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n.pageLogo {\r\n    position: absolute;\r\n    left: 30px;\r\n    top: 30px;\r\n\r\n}\r\n\r\n.colorAndTextTypes {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-top: 150px;\r\n    padding-bottom: 150px;\r\n}\r\n\r\n\r\n\r\n\r\n.color__item-box {\r\n    border-radius: 6px;\r\n    width: 70px;\r\n    height: 70px;\r\n    margin-right: 40px;\r\n}\r\n\r\n.ds100 {\r\n    background-color: $ds100;\r\n}\r\n\r\n.ds75 {\r\n    background-color: $ds75;\r\n}\r\n\r\n.ds50 {\r\n    background-color: $ds50;\r\n}\r\n\r\n.ds25 {\r\n    background-color: $ds25;\r\n}\r\n\r\n.ds5 {\r\n    background-color: $ds5;\r\n}\r\n.prpl {\r\n    background-color: $purple;\r\n}\r\n.grn {\r\n    background-color: $green;\r\n}\r\n\r\n.color__item {\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.color__item-id {\r\n    font-weight: 400;\r\n}\r\n\r\n.textTypes {\r\n    max-width: 436px;\r\n}\r\n\r\n.textTypes__item {\r\n    display: flex;\r\n    margin-bottom: 51px;\r\n}\r\n\r\n.title__h1,\r\n.title__h2,\r\n.title__h3,\r\n.title__p {\r\n    color:$ds25;\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n.textTypes__item-title {\r\n    margin-right: 30px;\r\n    width: 37px;\r\n    text-align: right;\r\n}\r\n\r\n.textTypes__item-text {\r\n    text-align: left;\r\n}\r\n\r\n\r\n\r\n.select {\r\n    width: 320px;\r\n    height: 44px;\r\n    border: 1px solid $ds25;\r\n    border-radius: 4px;\r\n    text-align-last: left;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    \r\n    transition: border .3s;\r\n}\r\n\r\n\r\n.selected {\r\n    color:$ds75;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    font-weight: 400;\r\n    user-select: none;\r\n    padding-left: 15px;\r\n}\r\n\r\n.select-clicked {\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-left-radius: 0px;\r\n    border-color: $ds50;\r\n}\r\n\r\n.select:hover {\r\n    border: 1px solid $ds50;\r\n}\r\n\r\n.caret {\r\n    color: $ds50;\r\n    user-select: none;\r\n    margin-right: 13px;\r\n    font-family: 'Material Icons';\r\n    // transition: all .05s;\r\n}\r\n\r\n.caret-rotate {\r\n    color: $ds75;\r\n    transform: rotate(180deg);\r\n    // padding-right: 13px;\r\n}\r\n\r\n.menu {\r\n    width: 320px;\r\n    border:1px solid $ds25;\r\n    border-bottom-left-radius: 4px;\r\n    border-bottom-right-radius: 4px;\r\n    padding-top: 13px;\r\n    // padding-bottom: 57px;\r\n    display: none;\r\n}\r\n\r\n.menu__item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 22px;\r\n    padding-left: 15px;\r\n}\r\n\r\n\r\n.menu-open {\r\n    display: block;\r\n    border: 1px solid $ds50;\r\n    border-top: none;\r\n}\r\n\r\n.counter {\r\n    padding-right: 7px;\r\n    display: flex;\r\n    align-items: center;\r\n    max-width: 92px;\r\n}\r\n\r\n.counter__button {\r\n    cursor: pointer;\r\n    user-select: none;\r\n    background-color: #fff;\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid $ds50;\r\n    color: $ds50;\r\n    border-radius:50%;\r\n    font-family: $ffm;\r\n    font-weight: 400;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    text-align: center;\r\n}\r\n\r\n.counter__value {\r\n    border:none;\r\n    text-align: center;\r\n    font-family: $ffm;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    text-transform: uppercase;\r\n    width: 32px;\r\n}\r\n\r\n.counter__button-minus {\r\n    color: $ds25;\r\n    border: 1px solid $ds25;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.menu__buttons {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.menu__buttons-rToClean {\r\n    display: flex;\r\n    justify-content: space-between;   \r\n}\r\n\r\n.menu__button-apply {\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    font-family: $ffm;\r\n    margin-right: 7px;\r\n    margin-bottom: 13px;\r\n    padding: 0;\r\n    color: $purple;\r\n    border: none;\r\n    background-color: #fff;\r\n}\r\n\r\n.menu__button-clean {\r\n    display: none;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    font-family: $ffm;\r\n    margin-left: 14px;\r\n    margin-bottom: 13px;\r\n    padding: 0;\r\n    color: $purple;\r\n    border: none;\r\n    background-color: #fff;\r\n}\r\n\r\n.menu__button-clean_active {\r\n    display: block;\r\n}\r\n\r\n.customDropdown .select,\r\n.customDropdown .menu {\r\n    max-width: 266px;\r\n}\r\n\r\n.dropdown__item__title-apply {\r\n    text-transform: lowercase;\r\n}\r\n\r\n\r\n.customDropdown .selected {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n\r\n.form__input-textfield {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.form__input-email {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n    width: 305px;\r\n    height: 44px;\r\n    padding-left: 15px;\r\n    border: 1px solid $ds25;\r\n    border-radius: 4px;\r\n    color: $ds75;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.form__label-textfield {\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    color: $ds25;\r\n    position: absolute;\r\n    top: 15px;\r\n    bottom: 8px;\r\n    left: 14px;\r\n}\r\n\r\n\r\n.button-clickme {\r\n    position: relative;\r\n    width: 99px;\r\n    height: 44px;\r\n    border: none;\r\n    background-image: $linear1;\r\n    border-radius: 22px;\r\n    text-align: center;\r\n}\r\n\r\n.button-clickme::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -1px;\r\n    bottom: -1px;\r\n    left: -1px;\r\n    right: -1px;\r\n    background: $linear1;\r\n    border-radius: 22px;\r\n    z-index: -1;\r\n}\r\n\r\n\r\n.button__title-clickme {\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// .form__input-email:hover ~ .form__label-textfield {\r\n\r\n// }\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/color-and-types.html":
/*!**********************************!*\
  !*** ./src/color-and-types.html ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/page-logo.svg */ "./src/images/page-logo.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>colorAndTypest</title>\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" class=\"pageLogo\" alt=\"\" />\r\n    <div class=\"container\">\r\n      <div class=\"colorAndTextTypes\">\r\n        <div class=\"color\">\r\n          <ul class=\"color__list\">\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box ds100\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Dark Shade 100%</h3>\r\n                <h3 class=\"color__item-id\">#1F2041</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box ds75\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Dark Shade 75%</h3>\r\n                <h3 class=\"color__item-id\">#1F2041</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box ds50\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Dark Shade 50%</h3>\r\n                <h3 class=\"color__item-id\">#1F2041</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box ds25\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Dark Shade 25%</h3>\r\n                <h3 class=\"color__item-id\">#1F2041</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box ds5\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Dark Shade 5%</h3>\r\n                <h3 class=\"color__item-id\">#1F2041</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box prpl\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Purple</h3>\r\n                <h3 class=\"color__item-id\">#BC9CFF</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"color__item\">\r\n              <div class=\"color__item-box grn\"></div>\r\n              <div class=\"color__item-text\">\r\n                <h3 class=\"color__item-title\">Green</h3>\r\n                <h3 class=\"color__item-id\">#6FCF97</h3>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"textTypes\">\r\n          <ul class=\"textTypes__list\">\r\n            <li class=\"textTypes__item\">\r\n              <div class=\"textTypes__item-title\"><h1 class=\"textTypes__item-title title__h1\">H1</h1></div>\r\n              <div class=\"textTypes__item-text\">\r\n                <h1>This one is the sub-section or\r\n                  widget title</h1>\r\n              </div>\r\n            </li>\r\n            <li class=\"textTypes__item\">\r\n              <div class=\"textTypes__item-title\"><h2 class=\"textTypes__item-title title__h2\">H2</h2></div>\r\n              <div class=\"textTypes__item-text\">\r\n                <h2>Next one is the item title inside\r\n                  widgets</h2>\r\n              </div>\r\n            </li>\r\n            <li class=\"textTypes__item\">\r\n              <div class=\"textTypes__item-title\"><h3 class=\"textTypes__item-title title__h3\">H3</h3></div>\r\n              <div class=\"textTypes__item-text\">\r\n                <h3>This is a label or CTA text</h3>\r\n              </div>\r\n            </li>\r\n            <li class=\"textTypes__item\">\r\n              <div class=\"textTypes__item-title\"><p class=\"textTypes__item-title title__p\">Body</p></div>\r\n              <div class=\"textTypes__item-text\">\r\n                <p>This is the body text which is used for most\r\n                  of the design, like paragraphs, lists, etc.</p>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/form-elements.html":
/*!********************************!*\
  !*** ./src/form-elements.html ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>formElements</title>\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\"\r\n    />\r\n  </head>\r\n  <body>\r\n    <div class=\"container\">\r\n      <div class=\"dropdown-test\">\r\n        <h3>dropdown</h3>\r\n        <div class=\"dropdown\">\r\n          <div class=\"select\">\r\n            <div class=\"selected guestQuantity\">\r\n            Сколько гостей\r\n            </div>\r\n            <div class=\"caret\">\r\n              <span class=\"material-icons-outlined\"> expand_more </span>\r\n            </div>\r\n          </div>\r\n          <ul class=\"menu\">\r\n            <li class=\"menu__item\" data-value=\"old\">\r\n              <h3>взрослые</h3>\r\n              <div class=\"counter counter-one\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-one\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-one\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <li class=\"menu__item\" data-value=\"baby\">\r\n              <h3>дети</h3>\r\n              <div class=\"counter counter-two\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-two\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-two\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <li class=\"menu__item\" data-value=\"born\">\r\n              <h3>младенцы</h3>\r\n              <div class=\"counter counter-three\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-three\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-three\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <div class=\"menu__buttons\">\r\n              <button class=\"menu__button-clean\" data-dropDownClean>очистить</button>\r\n              <button class=\"menu__button-apply\" data-dropDownCart>применить</button>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n        <div class=\"dropdown\">\r\n          <div class=\"select\">\r\n            <div class=\"selected guestQuantity\">\r\n              <p>Сколько гостей</p>\r\n            </div>\r\n            <div class=\"caret\">\r\n              <span class=\"material-icons-outlined\"> expand_more </span>\r\n            </div>\r\n          </div>\r\n          <ul class=\"menu\">\r\n            <li class=\"menu__item\" data-value=\"old\">\r\n              <h3>взрослые</h3>\r\n              <div class=\"counter counter-one\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-one\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-one\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <li class=\"menu__item\" data-value=\"baby\">\r\n              <h3>дети</h3>\r\n              <div class=\"counter counter-two\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-two\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-two\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <li class=\"menu__item\" data-value=\"born\">\r\n              <h3>младенцы</h3>\r\n              <div class=\"counter counter-three\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-three\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-three\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <div class=\"menu__buttons\">\r\n              <button class=\"menu__button-clean\" data-dropDownClean>очистить</button>\r\n              <button class=\"menu__button-apply\" data-dropDownCart>применить</button>\r\n            </div>\r\n          </ul>\r\n        </div>\r\n        <div class=\"customDropdown\">\r\n          <div class=\"select\">\r\n            <div class=\"selected guestQuantity\">\r\n              <p class=\"customDropdown_text\">Сколько помещений</p>\r\n            </div>\r\n            <div class=\"caret\">\r\n              <span class=\"material-icons-outlined\"> expand_more </span>\r\n            </div>\r\n          </div>\r\n          <ul class=\"menu\">\r\n            <li class=\"menu__item menu__item-one\" data-value=\"old\">\r\n              <h3 class=\"dropdown__item__title-one\">спальни</h3>\r\n              <div class=\"counter counter-one\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-one\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-one\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus counter__button-plus-one\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <li class=\"menu__item menu__item-two\" data-value=\"baby\">\r\n              <h3 class=\"dropdown__item__title-two\">кровати</h3>\r\n              <div class=\"counter counter-two\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-two\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-two\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus counter__button-plus-two\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <li class=\"menu__item menu__item-three\" data-value=\"born\">\r\n              <h3 class=\"dropdown__item__title-three\">ванные комнаты</h3>\r\n              <div class=\"counter counter-three\">\r\n                <button\r\n                  class=\"counter__button counter__button-minus counter__button-minus-three\"\r\n                  data-direction=\"minus\"\r\n                >\r\n                  -\r\n                </button>\r\n                <div class=\"counter__value counter__value-three\">0</div>\r\n                <button\r\n                  class=\"counter__button counter__button-plus counter__button-plus-three\"\r\n                  data-direction=\"plus\"\r\n                >\r\n                  +\r\n                </button>\r\n              </div>\r\n            </li>\r\n            <!-- <div class=\"menu__buttons\">\r\n              <button class=\"menu__button-clean\" data-clean>очистить</button>\r\n              <button class=\"menu__button-apply\" data-apply>применить</button>\r\n            </div> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"form\">\r\n        \r\n        <div class=\"form__input\">\r\n          <h3>Text Field</h3>\r\n          <div class=\"form__input-textfield\">\r\n            <input id=\"inputemail\" type=\"email\" class=\"form__input-email\" value=\"0\">\r\n            <label for=\"inputemail\" class=\"form__label-textfield\">Email</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"buttons-test\">\r\n        <div class=\"button\">\r\n          <button class=\"button-clickme\"><h3 class=\"button__title-clickme\">CLICK ME</h3></button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./pug/_head.pug */ "./src/pug/_head.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cbody\u003E\u003Cdiv class=\"container\"\u003E\u003Ch1\u003Epestrunko\u003C\u002Fh1\u003E\u003Ch2\u003Epedro\u003C\u002Fh2\u003E\u003Ch3\u003Epidodsd\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/pug/_head.pug":
/*!***************************!*\
  !*** ./src/pug/_head.pug ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.googleapis.com\"\u003E\u003Clink rel=\"preconnect\" href=\"https:\u002F\u002Ffonts.gstatic.com\" crossorigin=\"\"\u003E\u003Clink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap\" rel=\"stylesheet\"\u003E\u003Cink href=\"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons\" rel=\"stylesheet\"\u003E\u003C\u002Fink\u003E\u003Ctitle\u003EVlagalishe\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/_counter.js":
/*!*********************************!*\
  !*** ./src/scripts/_counter.js ***!
  \*********************************/
/***/ (() => {

const globalCounter = document.querySelectorAll('.dropdown').forEach(function (counterWrapper) {






    const myCounter = counterWrapper.querySelectorAll(['.counter__button']);

    const counterBtnMinusOne = counterWrapper.querySelector('.counter__button-minus-one');
    const counterBtnMinusTwo = counterWrapper.querySelector('.counter__button-minus-two');
    const counterBtnMinusThree = counterWrapper.querySelector('.counter__button-minus-three');

    const counterInnerApply = counterWrapper.querySelector('.menu__button-apply');
    console.log(counterInnerApply);
    const counterInnerClean = counterWrapper.querySelector('.menu__button-clean');
    console.log(counterInnerClean);


    const counterOne = counterWrapper.querySelector('.counter__value-one');
    const counterTwo = counterWrapper.querySelector('.counter__value-two');
    const counterThree = counterWrapper.querySelector('.counter__value-three');
    const guestQuantity = counterWrapper.querySelector('.guestQuantity');
    const counterMenu = counterWrapper.querySelector('.menu__buttons');
    
    // const dropDownList = counterWrapper.querySelector('.menu');
    // const dropDowmTittleInnerOne = dropDownList.querySelector('.dropdown__item__title-one');
    // const dropDowmTittleInnerTwo = dropDownList.querySelector('.dropdown__item__title-two');
    // const dropDowmTittleInnerThree = dropDownList.querySelector('.dropdown__item__title-three');



      
            


    myCounter.forEach (btn => {
        btn.addEventListener('click', function(){
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.innerText;
            let newValue;

          if (direction === 'plus') {
                newValue = currentValue +1;
               
           }
           else {
                newValue = currentValue -1 > 0 ? currentValue -1 : 0;

          }
          inp.innerText = newValue;

            let innerTextOne = +counterOne.innerText;
            let innerTextTwo = +counterTwo.innerText;
            let innerTextThree = +counterThree.innerText;

            if (innerTextOne>=1) {
                counterBtnMinusOne.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusOne.classList.add('counter__button-minus');
            }
            if (innerTextTwo>=1) {
                counterBtnMinusTwo.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusTwo.classList.add('counter__button-minus');
            }
            if (innerTextThree>=1) {
                counterBtnMinusThree.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusThree.classList.add('counter__button-minus');
            }
            
            });
    });

    
    const activeMinusButton = () => {
        
        let innerTextOne = +counterOne.innerText;
        let innerTextTwo = +counterTwo.innerText;
        let innerTextThree = +counterThree.innerText;
    
        if (innerTextOne>=1) {
            counterBtnMinusOne.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusOne.classList.remove('counter__button-minus_active');
        };
        if (innerTextTwo>=1) {
            counterBtnMinusTwo.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusTwo.classList.remove('counter__button-minus_active');
        };
        if (innerTextThree>=1) {
            counterBtnMinusThree.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusThree.classList.remove('counter__button-minus_active');
        };
    }

    activeMinusButton();


    counterInnerApply.addEventListener('click', function(){
        let innerTextOne = +counterOne.innerText;
        let innerTextTwo = +counterTwo.innerText;
        let innerTextThree = +counterThree.innerText;
        
        
        getSum = innerTextOne+innerTextTwo+innerTextThree;

         if (getSum>=1) {
            guestQuantity.innerText = getSum + " гостя";
            counterMenu.classList.add('menu__buttons-rToClean');
            counterMenu.querySelector('.menu__button-clean').classList.add('menu__button-clean_active');
              
        }
        if (getSum>=5) {
            guestQuantity.innerText = getSum + " гостей";
        }
        if (getSum<=1) {
            guestQuantity.innerText = getSum +  " гость";
        }
        if (getSum<1) {
            guestQuantity.innerText = "Сколько гостей";
            counterMenu.classList.remove('menu__buttons-rToClean');
            counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
        }
    });

    counterInnerClean.addEventListener('click', function() {
        const guestQuantity = counterWrapper.querySelector('.guestQuantity');
        activeMinusButton();

        counterOne.innerText = "0"
        counterTwo.innerText = "0"
        counterThree.innerText ="0"

        if (counterOne.innerText<1) {
            counterBtnMinusOne.classList.add('counter__button-minus');
        }
        if (counterTwo.innerText<1) {
            counterBtnMinusTwo.classList.add('counter__button-minus');
        }
        if (counterThree.innerText<1) {
            counterBtnMinusThree.classList.add('counter__button-minus');
        }
        counterMenu.classList.remove('menu__buttons-rToClean');
        counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
        guestQuantity.innerText = "Сколько гостей"
    });

});








/***/ }),

/***/ "./src/scripts/_custom-counter.js":
/*!****************************************!*\
  !*** ./src/scripts/_custom-counter.js ***!
  \****************************************/
/***/ (() => {

const globalCounter = document.querySelectorAll('.customDropdown').forEach(function (counterWrapper) {






    const myCounter = counterWrapper.querySelectorAll(['.counter__button']);

    

    const counterBtnMinusOne = counterWrapper.querySelector('.counter__button-minus-one');
    const counterBtnMinusTwo = counterWrapper.querySelector('.counter__button-minus-two');
    const counterBtnMinusThree = counterWrapper.querySelector('.counter__button-minus-three');

    const counterInnerApply = counterWrapper.querySelector('.menu__button-apply');
    const counterInnerClean = counterWrapper.querySelector('.menu__button-clean');

    const counterOne = counterWrapper.querySelector('.counter__value-one');
    const counterTwo = counterWrapper.querySelector('.counter__value-two');
    const counterThree = counterWrapper.querySelector('.counter__value-three');
    const guestQuantity = counterWrapper.querySelector('.guestQuantity');
    const counterMenu = counterWrapper.querySelector('.menu__buttons');
    
    const dropDownList = counterWrapper.querySelector('.menu');
    const dropDowmTittleInnerOne = dropDownList.querySelector('.dropdown__item__title-one');
    const dropDowmTittleInnerTwo = dropDownList.querySelector('.dropdown__item__title-two');
    const dropDowmTittleInnerThree = dropDownList.querySelector('.dropdown__item__title-three');
    const dropDownListItem = dropDownList.querySelector('.menu__item');
    const counterButtonPlusOne = dropDownList.querySelector('.counter__button-plus-one');
    const counterButtonPlusTwo = dropDownList.querySelector('.counter__button-plus-two');
    const counterButtonPlusThree = dropDownList.querySelector('.counter__button-plus-three');


      
            


    myCounter.forEach (btn => {
        btn.addEventListener('click', function(){
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.innerText;
            let newValue;

          if (direction === 'plus') {
                newValue = currentValue +1;
                
           }
           else {
                newValue = currentValue -1 > 0 ? currentValue -1 : 0;

          }
          inp.innerText = newValue;

            let innerTextOne = +counterOne.innerText;
            let innerTextTwo = +counterTwo.innerText;
            let innerTextThree = +counterThree.innerText;

            if (innerTextOne>=1) {
                counterBtnMinusOne.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusOne.classList.add('counter__button-minus');
            }
            if (innerTextTwo>=1) {
                counterBtnMinusTwo.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusTwo.classList.add('counter__button-minus');
            }
            if (innerTextThree>=1) {
                counterBtnMinusThree.classList.remove('counter__button-minus');
            } else {
                counterBtnMinusThree.classList.add('counter__button-minus');
            }
            
            });

            
    });

    const activeMinusButton = () => {
        
        let innerTextOne = +counterOne.innerText;
        let innerTextTwo = +counterTwo.innerText;
        let innerTextThree = +counterThree.innerText;
    
        if (innerTextOne>=1) {
            counterBtnMinusOne.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusOne.classList.remove('counter__button-minus_active');
        };
        if (innerTextTwo>=1) {
            counterBtnMinusTwo.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusTwo.classList.remove('counter__button-minus_active');
        };
        if (innerTextThree>=1) {
            counterBtnMinusThree.classList.toggle('counter__button-minus_active');
        } else {
            counterBtnMinusThree.classList.remove('counter__button-minus_active');
        };
    }

    activeMinusButton();


    counterButtonPlusOne.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        // if (innerNumOne=1) {
        //     guestQuantity.innerHTML = innerHtmlOne;
        //     guestQuantity.classList.add('dropdown__item__title-apply');
        // } 


        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 && innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 && innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 && innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 && innerNumTwo>=1 &&  innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 && innerNumTwo<1 && innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterButtonPlusTwo.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterButtonPlusThree.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    });

    counterBtnMinusOne.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }


        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterBtnMinusTwo.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    })
    counterBtnMinusThree.addEventListener('click', function (){
        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }
    });



    counterInnerApply.addEventListener('click', function(){


        let innerTitleOne = dropDowmTittleInnerOne.innerText;
        let innerTitleTwo = dropDowmTittleInnerTwo.innerText;
        let innerTitleThree = dropDowmTittleInnerThree.innerText;

        let innerNumOne = +counterOne.innerText;
        let innerNumTwo = +counterTwo.innerText;
        let innerNumThree = +counterThree.innerText;

        let innerHtmlOne = innerNumOne + " " + innerTitleOne;
        let innerHtmlTwo = innerNumTwo + " " + innerTitleTwo;
        let innerHtmlThree = innerNumThree + " " + innerTitleThree;

        if (innerNumOne>=1) {
            guestQuantity.innerHTML = innerHtmlOne;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlTwo + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlThree;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne>=1 & innerNumTwo>=1 & innerNumThree>=1) {
            guestQuantity.innerHTML = innerHtmlOne + ", " +innerHtmlTwo + ", " + innerHtmlThree ;
            guestQuantity.classList.add('dropdown__item__title-apply');
        }

        if (innerNumOne<1 & innerNumTwo<1 & innerNumThree<1) {
            guestQuantity.innerHTML = "Сколько помещений";
            guestQuantity.classList.remove('dropdown__item__title-apply');
        }    
    });

    counterInnerClean.addEventListener('click', function() {
        const guestQuantity = counterWrapper.querySelector('.guestQuantity');

        counterOne.innerText = "0"
        counterTwo.innerText = "0"
        counterThree.innerText ="0"

        counterMenu.classList.remove('menu__buttons-rToClean');
        counterMenu.querySelector('.menu__button-clean').classList.remove('menu__button-clean_active');
        guestQuantity.innerText = "Сколько гостей"
    });

    });








/***/ }),

/***/ "./src/scripts/_custom-dropdown.js":
/*!*****************************************!*\
  !*** ./src/scripts/_custom-dropdown.js ***!
  \*****************************************/
/***/ (() => {

const dropDown = document.querySelectorAll('.customDropdown').forEach(function (dropDownWrapper) {



    

    const dropDownBtn = dropDownWrapper.querySelector('.select');
    
    const dropDownList = dropDownWrapper.querySelector('.menu');
    const dropDownItem = dropDownList.querySelectorAll('.menu__item');
    const dropDownCaret = dropDownWrapper.querySelector('.caret');


    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('menu-open');
        this.classList.toggle('select-clicked');
        dropDownCaret.classList.toggle('caret-rotate');
    })

    dropDownItem.forEach(function(listItem){
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })




    document.addEventListener('click', function (e) {
    //   console.log('document click')
      const dropDownButtonText = dropDownBtn.querySelector('.selected')
      const dropDownCaretInner = dropDownBtn.querySelector('.material-icons-outlined')
      const dropDownClean = dropDownWrapper.querySelector('.menu__button-clean_active')
      if (e.target !== dropDownBtn & e.target !== dropDownButtonText & e.target !==  dropDownCaretInner & e.target !==  dropDownClean) {
        dropDownList.classList.remove('menu-open');
        dropDownBtn.classList.remove('select-clicked');
        dropDownCaret.classList.remove('caret-rotate');
      }
    })
          

    document.addEventListener('keydown', function (e) {
        
       if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownList.classList.remove('menu-open');
          dropDownBtn.classList.remove('select-clicked');
          dropDownCaret.classList.remove('caret-rotate');

       }
    })
});

/***/ }),

/***/ "./src/scripts/_dropdown.js":
/*!**********************************!*\
  !*** ./src/scripts/_dropdown.js ***!
  \**********************************/
/***/ (() => {

const dropDown = document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {



    

    const dropDownBtn = dropDownWrapper.querySelector('.select');
    
    const dropDownList = dropDownWrapper.querySelector('.menu');
    const dropDownItem = dropDownList.querySelectorAll('.menu__item');
    const dropDownCaret = dropDownWrapper.querySelector('.caret');


    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('menu-open');
        this.classList.toggle('select-clicked');
        dropDownCaret.classList.toggle('caret-rotate');
    })

    dropDownItem.forEach(function(listItem){
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })




    document.addEventListener('click', function (e) {
      // console.log('document click')
      const dropDownButtonText = dropDownBtn.querySelector('.selected')
      const dropDownCaretInner = dropDownBtn.querySelector('.material-icons-outlined')
      const dropDownClean = dropDownWrapper.querySelector('.menu__button-clean_active')
      if (e.target !== dropDownBtn & e.target !== dropDownButtonText & e.target !==  dropDownCaretInner & e.target !==  dropDownClean) {
        dropDownList.classList.remove('menu-open');
        dropDownBtn.classList.remove('select-clicked');
        dropDownCaret.classList.remove('caret-rotate');
      }
    })
          

    document.addEventListener('keydown', function (e) {
        
       if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownList.classList.remove('menu-open');
          dropDownBtn.classList.remove('select-clicked');
          dropDownCaret.classList.remove('caret-rotate');

       }
    })
});






/***/ }),

/***/ "./src/scripts/_input-email.js":
/*!*************************************!*\
  !*** ./src/scripts/_input-email.js ***!
  \*************************************/
/***/ (() => {


const inputEmailLine = document.querySelector('.form__input-email')
const inputInner = inputEmailLine.value;

inputEmailLine.addEventListener('click', () => {
    inputInner = 'test';
    console.log(Test);
})

console.log('inputInner');



/***/ }),

/***/ "./src/images/page-logo.svg":
/*!**********************************!*\
  !*** ./src/images/page-logo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "asset/c2a93d6ae04f381031de.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.pug */ "./src/index.pug");
/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pug_head_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pug/_head.pug */ "./src/pug/_head.pug");
/* harmony import */ var _pug_head_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pug_head_pug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_input_email_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/_input-email.js */ "./src/scripts/_input-email.js");
/* harmony import */ var _scripts_input_email_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_input_email_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _color_and_types_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-and-types.html */ "./src/color-and-types.html");
/* harmony import */ var _form_elements_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-elements.html */ "./src/form-elements.html");
/* harmony import */ var _scripts_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/_counter.js */ "./src/scripts/_counter.js");
/* harmony import */ var _scripts_counter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_counter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/_dropdown.js */ "./src/scripts/_dropdown.js");
/* harmony import */ var _scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scripts_dropdown_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _scripts_custom_dropdown_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/_custom-dropdown.js */ "./src/scripts/_custom-dropdown.js");
/* harmony import */ var _scripts_custom_dropdown_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_custom_dropdown_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_custom_counter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/_custom-counter.js */ "./src/scripts/_custom-counter.js");
/* harmony import */ var _scripts_custom_counter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_custom_counter_js__WEBPACK_IMPORTED_MODULE_9__);
















})();

/******/ })()
;
//# sourceMappingURL=main.8209fc26cfe39ee69e91.js.map