"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../../Base"));

var _Grid = require("../../../Grid");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TitleDescription = function TitleDescription(props) {
  return _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Row, {
    marginBottom3: true,
    width: "50%"
  }, _react.default.createElement(_Base.default, {
    w: "100%",
    h: 24,
    color: props.reverse ? "black-10" : null
  })), _react.default.createElement(_Grid.Row, {
    marginBottom3: true,
    width: "100%"
  }, _react.default.createElement(_Base.default, {
    w: "100%",
    color: props.reverse ? null : "black-10",
    h: 27
  })), props.extraLine && _react.default.createElement(_Grid.Row, {
    marginBottom3: true,
    width: "25%"
  }, _react.default.createElement(_Text.default, null)));
};

TitleDescription.defaultProps = {};
TitleDescription.propTypes = {};
var _default = TitleDescription;
exports.default = _default;