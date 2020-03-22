"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("./../../Base"));

var _Colors = _interopRequireDefault(require("../../../Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChipSkeleton = function ChipSkeleton(props) {
  return _react.default.createElement("div", {
    style: {
      width: '69px',
      padding: '9px',
      border: "solid 1px ".concat(_Colors.default['black-10']),
      borderRadius: "6px"
    }
  }, _react.default.createElement(_Base.default, {
    radius: '9px',
    w: '100%',
    color: props.color,
    h: 6
  }));
};

ChipSkeleton.defaultProps = {};
ChipSkeleton.propTypes = {};
var _default = ChipSkeleton;
exports.default = _default;