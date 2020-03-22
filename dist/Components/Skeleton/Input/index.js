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

var InputSkeleton = function InputSkeleton(props) {
  var lines = new Array(props.lines || 1).fill('');
  return _react.default.createElement(_react.default.Fragment, null, lines.map(function (line) {
    return _react.default.createElement("div", {
      style: {
        width: '98%',
        padding: '12px',
        border: "solid 1px ".concat(_Colors.default['black-10']),
        borderRadius: "6px",
        margin: '12px 0'
      }
    }, _react.default.createElement(_Base.default, {
      radius: '9px',
      w: '100%',
      color: props.color,
      h: 10
    }));
  }));
};

InputSkeleton.defaultProps = {};
InputSkeleton.propTypes = {};
var _default = InputSkeleton;
exports.default = _default;