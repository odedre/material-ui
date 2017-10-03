'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var cardText = context.muiTheme.cardText;


  return {
    root: {
      padding: 16,
      fontSize: 14,
      color: props.color || cardText.textColor
    }
  };
}

var CardText = function (_Component) {
  _inherits(CardText, _Component);

  function CardText() {
    _classCallCheck(this, CardText);

    return _possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }

  _createClass(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          actAsExpander = _props.actAsExpander,
          children = _props.children,
          color = _props.color,
          expandable = _props.expandable,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['actAsExpander', 'children', 'color', 'expandable', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var rootStyle = Object.assign(styles.root, style);

      return _react2.default.createElement(
        'div',
        Object.assign({}, other, { style: prepareStyles(rootStyle) }),
        children
      );
    }
  }]);

  return CardText;
}(_react.Component);

CardText.muiName = 'CardText';
CardText.propTypes = {
  /**
   * @property {PropTypes.bool} actAsExpander - If true, a click on this card component expands the card.
   */
  actAsExpander: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - Can be used to render elements inside the Card Text.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} color - Override the CardText color.
   */
  color: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} expandable - If true, this card component is expandable.
   */
  expandable: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
CardText.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = CardText;

//# sourceMappingURL=CardText.js.map