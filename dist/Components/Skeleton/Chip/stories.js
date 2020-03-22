"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Skeleton/Chips", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, null));
}).add("red", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    color: "red-light"
  }));
}).add("green", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    color: "green-light"
  }));
}).add("blue", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    color: "blue-light"
  }));
}).add("primary", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, {
    color: "primary-light"
  }));
});