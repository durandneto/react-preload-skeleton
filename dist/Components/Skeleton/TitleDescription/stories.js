"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Skeleton/Title Description", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      padding: '5%',
      height: "100vh"
    }
  }, _react.default.createElement(_.default, null));
}).add("reverse", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      padding: '5%',
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    reverse: true
  }));
}).add("extraLine", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      padding: '5%',
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    extraLine: true
  }));
});