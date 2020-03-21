"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 96%;\n\n\n    @media only screen and (max-width: 768px) {\n        width: 93%;\n    }\n\n    padding: 0;\n    margin: 0 auto;\n    flex-direction: column;\n\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n    ", "\n    ", "\n\n    ", "\n\n    ", "\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var cover = _ref.cover;
  return cover && "\n        background-image: url(".concat(cover, ");\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n    ");
}, function (_ref2) {
  var md = _ref2.md;
  return md && "\n        max-width: 980px;\n    ";
}, function (_ref3) {
  var lg = _ref3.lg;
  return lg && "\n        max-width: 1200px;\n    ";
}, function (_ref4) {
  var sm = _ref4.sm;
  return sm && "\n        max-width: 330px;\n    ";
}, function (_ref5) {
  var alignItemsCenter = _ref5.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref6) {
  var fullHeight = _ref6.fullHeight;
  return fullHeight && "\n        height: 100vh;\n    ";
}, function (_ref7) {
  var justifyCenter = _ref7.justifyCenter;
  return justifyCenter && "\n        justify-content: center;\n    ";
}, function (_ref8) {
  var fullWidth = _ref8.fullWidth;
  return fullWidth && "\n        width: 100% !important;\n    ";
}, function (_ref9) {
  var fixed = _ref9.fixed;
  return fixed && "\n        position: fixed;\n    ";
});

exports.Container = Container;

var Row = _styledComponents.default.div(_templateObject2(), function (_ref10) {
  var row = _ref10.row;
  return row && "\n        flex-direction: row;\n    ";
}, function (_ref11) {
  var column = _ref11.column;
  return column && "\n        flex-direction: column;\n    ";
}, function (_ref12) {
  var justifySpaceAround = _ref12.justifySpaceAround;
  return justifySpaceAround && "\n        justify-content: space-around;\n    ";
}, function (_ref13) {
  var justifySpaceBetween = _ref13.justifySpaceBetween;
  return justifySpaceBetween && "\n        justify-content: space-between;\n    ";
}, function (_ref14) {
  var justifyBottom = _ref14.justifyBottom;
  return justifyBottom && "\n        justify-content: flex-end;\n    ";
}, function (_ref15) {
  var alignItemsRight = _ref15.alignItemsRight;
  return alignItemsRight && "\n        align-items: flex-end;\n    ";
}, function (_ref16) {
  var alignItemsLeft = _ref16.alignItemsLeft;
  return alignItemsLeft && "\n        align-items: flex-start;\n    ";
}, function (_ref17) {
  var alignItemsCenter = _ref17.alignItemsCenter;
  return alignItemsCenter && "\n        align-items: center;\n    ";
}, function (_ref18) {
  var responsive = _ref18.responsive;
  return responsive && "\n        @media only screen and (max-width: 768px) {\n            flex-direction: column;\n        }\n    ";
}, function (_ref19) {
  var autoWidth = _ref19.autoWidth;
  return autoWidth && "\n       width: auto;\n    ";
}, function (_ref20) {
  var paddingRight8 = _ref20.paddingRight8;
  return paddingRight8 && "\n       padding-right: 24px;\n    ";
}, function (_ref21) {
  var paddingRight2 = _ref21.paddingRight2;
  return paddingRight2 && "\n       padding-right: 6px;\n    ";
}, function (_ref22) {
  var margin = _ref22.margin;
  return margin && "\n       margin: 3px 0;\n    ";
}, function (_ref23) {
  var marginBottom3 = _ref23.marginBottom3;
  return marginBottom3 && "\n       margin-bottom: 9px;\n    ";
}, function (_ref24) {
  var marginBottom4 = _ref24.marginBottom4;
  return marginBottom4 && "\n       margin-bottom: 12px;\n    ";
}, function (_ref25) {
  var marginBottom5 = _ref25.marginBottom5;
  return marginBottom5 && "\n       margin-bottom: 15px;\n    ";
}, function (_ref26) {
  var marginBottom = _ref26.marginBottom;
  return marginBottom && "\n       margin-bottom: ".concat(marginBottom * 3, "px;\n    ");
}, function (_ref27) {
  var marginTop = _ref27.marginTop;
  return marginTop && "\n       margin-top: ".concat(marginTop, "px;\n    ");
}, function (_ref28) {
  var height = _ref28.height;
  return height && "\n       height: ".concat(height, "px;\n    ");
}, function (_ref29) {
  var overflowY = _ref29.overflowY;
  return overflowY && "\n       overflow-y: ".concat(overflowY, ";\n    ");
}, function (_ref30) {
  var width = _ref30.width;
  return width && "\n       width: ".concat(width, ";\n    ");
}, function (_ref31) {
  var fixed = _ref31.fixed;
  return fixed && "\n       position: fixed;\n    ";
});

exports.Row = Row;