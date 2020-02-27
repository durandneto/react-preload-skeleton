"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skeleton = function Skeleton(props) {
  return _react.default.createElement(_styles.default, {
    color: props.color,
    radius: props.radius,
    w: props.w,
    h: props.h,
    shineColor: props.shineColor
  });
};

Skeleton.defaultProps = {};
Skeleton.propTypes = {};
var _default = Skeleton;
exports.default = _default;