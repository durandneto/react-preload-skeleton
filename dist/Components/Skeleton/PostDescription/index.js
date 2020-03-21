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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostDescription = function PostDescription(props) {
  return _react.default.createElement(_Grid.Row, {
    style: {
      backgroundColor: "#fff",
      padding: "12px"
    }
  }, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_TitleDescription.default, null)), _react.default.createElement(_Grid.Row, {
    marginBottom3: true
  }, _react.default.createElement(_Description.default, null)), _react.default.createElement(_Grid.Row, {
    row: true,
    marginBottom3: true
  }, _react.default.createElement(_Grid.Row, {
    autoWidth: true,
    paddingRight8: true
  }, _react.default.createElement(_Base.default, {
    w: 57,
    h: 15,
    round: "25%"
  })), _react.default.createElement(_Grid.Row, {
    autoWidth: true,
    paddingRight8: true
  }, _react.default.createElement(_Base.default, {
    w: 57,
    h: 15,
    round: "25%",
    color: "black-20"
  })), _react.default.createElement(_Grid.Row, {
    autoWidth: true
  }, _react.default.createElement(_Base.default, {
    w: 57,
    h: 15,
    round: "25%"
  }))));
};

PostDescription.defaultProps = {};
PostDescription.propTypes = {};
var _default = PostDescription;
exports.default = _default;