"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("./../../Base"));

var _Grid = require("./../../../Grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VHSkeletonAvatar = function VHSkeletonAvatar(props) {
  return _react.default.createElement(_Grid.Container, {
    style: {
      backgroundColor: "#fff",
      padding: "12px"
    }
  }, props.title && _react.default.createElement(_Grid.Row, {
    marginBottom: 12
  }, _react.default.createElement(_Base.default, {
    w: 218,
    color: "black-20",
    h: 24
  })), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_Base.default, {
    w: 220,
    h: 24
  })), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_Base.default, {
    w: 345,
    color: "black-10",
    h: 27
  })), _react.default.createElement(_Grid.Row, {
    marginBottom: 10
  }, _react.default.createElement(_Base.default, {
    w: 57,
    h: 15
  })), props.button && _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Base.default, {
    w: 150,
    color: "black-10",
    h: 40
  })));
};

VHSkeletonAvatar.defaultProps = {};
VHSkeletonAvatar.propTypes = {};
var _default = VHSkeletonAvatar;
exports.default = _default;