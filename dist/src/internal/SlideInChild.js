'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideInChild = function (_Component) {
  _inherits(SlideInChild, _Component);

  function SlideInChild() {
    _classCallCheck(this, SlideInChild);

    return _possibleConstructorReturn(this, (SlideInChild.__proto__ || Object.getPrototypeOf(SlideInChild)).apply(this, arguments));
  }

  _createClass(SlideInChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      var x = this.props.direction === 'left' ? '100%' : this.props.direction === 'right' ? '-100%' : '0';
      var y = this.props.direction === 'up' ? '100%' : this.props.direction === 'down' ? '-100%' : '0';

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');

      this.enterTimer = setTimeout(callback, this.props.enterDelay);
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      var style = _reactDom2.default.findDOMNode(this).style;
      style.opacity = '1';
      _autoPrefix2.default.set(style, 'transform', 'translate(0,0)');
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      var style = _reactDom2.default.findDOMNode(this).style;
      var direction = this.props.getLeaveDirection();
      var x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0';
      var y = direction === 'up' ? '-100%' : direction === 'down' ? '100%' : '0';

      style.opacity = '0';
      _autoPrefix2.default.set(style, 'transform', 'translate(' + x + ', ' + y + ')');

      this.leaveTimer = setTimeout(callback, 450);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          enterDelay = _props.enterDelay,
          getLeaveDirection = _props.getLeaveDirection,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['children', 'enterDelay', 'getLeaveDirection', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;


      var mergedRootStyles = Object.assign({}, {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
      }, style);

      return _react2.default.createElement(
        'div',
        Object.assign({}, other, { style: prepareStyles(mergedRootStyles) }),
        children
      );
    }
  }]);

  return SlideInChild;
}(_react.Component);

SlideInChild.propTypes = {
  children: _propTypes2.default.node,
  direction: _propTypes2.default.string,
  enterDelay: _propTypes2.default.number,
  // This callback is needed bacause the direction could change when leaving the DOM
  getLeaveDirection: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object
};
SlideInChild.defaultProps = {
  enterDelay: 0
};
SlideInChild.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = SlideInChild;

//# sourceMappingURL=SlideInChild.js.map