'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = muiThemeable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getMuiTheme = require('./getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THEME = void 0;

function getDefaultTheme() {
  if (!DEFAULT_THEME) {
    DEFAULT_THEME = (0, _getMuiTheme2.default)();
  }
  return DEFAULT_THEME;
}

function muiThemeable() {
  return function (Component) {
    var MuiComponent = function MuiComponent(props, context) {
      var _context$muiTheme = context.muiTheme,
          muiTheme = _context$muiTheme === undefined ? getDefaultTheme() : _context$muiTheme;


      return _react2.default.createElement(Component, Object.assign({ muiTheme: muiTheme }, props));
    };

    MuiComponent.contextTypes = {
      muiTheme: _propTypes2.default.object.isRequired
    };

    return MuiComponent;
  };
}

//# sourceMappingURL=muiThemeable.js.map