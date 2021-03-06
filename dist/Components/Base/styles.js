"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n    background-color: #ccc;\n    border-radius:  ", ";\n    background-image: linear-gradient(90deg,\n        ", " 0px,\n        ", " 40px,\n        ", "  80px);\n    animation: ", " 12s  infinite linear;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0%   {\n        background-position: -100px;\n    }\n    40% { background-position: 200px}\n    100% { background-position: 1000px}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0%   {\n        background-position: -", "px;\n    }\n    40% { background-position: ", "px;}\n    100% { background-position: ", "px;}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var baseOffset = 24;

var shineAvatarFixed = function shineAvatarFixed(w) {
  return (0, _styledComponents.keyframes)(_templateObject(), w, w, w + 100);
};

var shineAvatar100 = (0, _styledComponents.keyframes)(_templateObject2());

var shineAvatar = function shineAvatar(w) {
  return w && w.toString().indexOf('%') !== -1 ? shineAvatar100 : shineAvatarFixed(w);
};

var _default = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.w ? "".concat(props.w).concat(props.w.toString().indexOf('px') === -1 && props.w.toString().indexOf('%') === -1 ? "px" : '') : "".concat(baseOffset, "px");
}, function (props) {
  return props.h ? "".concat(props.h).concat(props.h.toString().indexOf('px') === -1 && props.h.toString().indexOf('%') ? "px" : '') : "".concat(baseOffset, "px");
}, function (props) {
  return props.radius ? props.radius : "0%";
}, function (props) {
  return _Colors.default[props.color] ? _Colors.default[props.color] : _Colors.default['gray-10'];
}, function (props) {
  return _Colors.default[props.shineColor] ? _Colors.default[props.shineColor] : _Colors.default["gray-20"];
}, function (props) {
  return _Colors.default[props.color] ? _Colors.default[props.color] : _Colors.default['gray-10'];
}, function (props) {
  return props.w ? shineAvatar(props.w) : shineAvatar(baseOffset);
});

exports.default = _default;