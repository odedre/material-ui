'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor,
      show = props.show;


  return {
    root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }
  };
}

var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles,
      style = props.style,
      text = props.text;


  var styles = getStyles(props);

  return _react2.default.createElement(
    'div',
    { style: prepareStyles(Object.assign(styles.root, style)) },
    text
  );
};

TextFieldHint.propTypes = {
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * @property {PropTypes.bool} show - True if the hint text should be visible.
   */
  show: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} text - The hint text displayed.
   */
  text: _propTypes2.default.node
};

TextFieldHint.defaultProps = {
  show: true
};

exports.default = TextFieldHint;

//# sourceMappingURL=TextFieldHint.js.map