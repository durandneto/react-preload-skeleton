"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("./../../Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonAvatar = function VHSkeletonAvatar(props) {
  return _react.default.createElement(_Base.default, {
    radius: '50%',
    w: 32,
    color: props.color,
    h: 32
  });
};

VHSkeletonAvatar.defaultProps = {};
VHSkeletonAvatar.propTypes = {};
var _default = VHSkeletonAvatar;
exports.default = _default;