"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Base = _interopRequireDefault(require("../../Base"));

var _Grid = require("../../../Grid");

var _TitleDescription = _interopRequireDefault(require("../TitleDescription"));

var _Description = _interopRequireDefault(require("../Description"));

var _Chip = _interopRequireDefault(require("../Chip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostDescription = function PostDescription(props) {
  return _react.default.createElement(_Grid.Row, {
    style: {
      width: 'calc(100% - 18px)'
    }
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_TitleDescription.default, null)), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_Description.default, null)), _react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom3: true
  }, _react.default.createElement(_Grid.Row, {
    autoWidth: true,
    paddingRight8: true
  }, _react.default.createElement(_Chip.default, null)), _react.default.createElement(_Grid.Row, {
    autoWidth: true,
    paddingRight8: true
  }, _react.default.createElement(_Chip.default, {
    color: "black-20"
  })), _react.default.createElement(_Grid.Row, {
    autoWidth: true
  }, _react.default.createElement(_Chip.default, null))));
};

PostDescription.defaultProps = {};
PostDescription.propTypes = {};
var _default = PostDescription;
exports.default = _default;