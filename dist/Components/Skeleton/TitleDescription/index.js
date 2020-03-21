"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../../Base"));

var _Grid = require("../../../Grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonAvatar = function VHSkeletonAvatar(props) {
  return _react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#fff"
    }
  }, _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_Base.default, {
    w: 220,
    h: 24
  })), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_Base.default, {
    w: "100%",
    color: "black-10",
    h: 27
  })));
};

VHSkeletonAvatar.defaultProps = {};
VHSkeletonAvatar.propTypes = {};
var _default = VHSkeletonAvatar;
exports.default = _default;