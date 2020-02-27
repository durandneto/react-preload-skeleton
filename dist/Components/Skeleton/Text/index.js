"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("./../../Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionSkeleton = function DescriptionSkeleton(props) {
  return _react.default.createElement(_Base.default, {
    radius: '3px',
    w: '100%',
    color: props.color,
    h: 12
  });
};

DescriptionSkeleton.defaultProps = {};
DescriptionSkeleton.propTypes = {};
var _default = DescriptionSkeleton;
exports.default = _default;