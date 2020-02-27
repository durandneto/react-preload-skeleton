"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Components|Skeleton/Base", module).add("Default", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement(_.default, null));
}).add("different size", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    w: 99,
    h: 16
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    w: 100,
    h: 160
  })));
}).add("diferent colors", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    color: "red-light"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    color: "blue-light"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    color: "primary-light"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    color: "green-light"
  })));
}).add("diferent radius", function () {
  return _react.default.createElement("div", {
    style: {
      backgroundColor: "#f2f2f2",
      height: "100vh"
    }
  }, _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    radius: "10%"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    radius: "20%",
    color: "primary-light"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    radius: "30%",
    color: "primary-light"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    radius: "40%"
  })), _react.default.createElement("div", {
    style: {
      margin: '10px'
    }
  }, _react.default.createElement(_.default, {
    radius: "50%"
  })));
});