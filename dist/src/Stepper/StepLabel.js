'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkCircle = require('../svg-icons/action/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _SvgIcon = require('../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var getStyles = function getStyles(_ref, _ref2) {
  var active = _ref.active,
      completed = _ref.completed,
      disabled = _ref.disabled;
  var muiTheme = _ref2.muiTheme,
      stepper = _ref2.stepper;
  var _muiTheme$stepper = muiTheme.stepper,
      textColor = _muiTheme$stepper.textColor,
      disabledTextColor = _muiTheme$stepper.disabledTextColor,
      iconColor = _muiTheme$stepper.iconColor,
      inactiveIconColor = _muiTheme$stepper.inactiveIconColor;
  var baseTheme = muiTheme.baseTheme;
  var orientation = stepper.orientation;


  var styles = {
    root: {
      height: orientation === 'horizontal' ? 72 : 64,
      color: textColor,
      display: 'flex',
      alignItems: 'center',
      fontFamily: baseTheme.fontFamily,
      fontSize: 14,
      paddingLeft: 14,
      paddingRight: 14
    },
    icon: {
      color: iconColor,
      display: 'block',
      fontSize: 24,
      width: 24,
      height: 24
    },
    iconContainer: {
      paddingRight: 8
    }
  };

  if (active) {
    styles.root.fontWeight = 500;
  }

  if (!completed && !active) {
    styles.icon.color = inactiveIconColor;
  }

  if (disabled) {
    styles.icon.color = inactiveIconColor;
    styles.root.color = disabledTextColor;
    styles.root.cursor = 'default';
  }

  return styles;
};

var renderIcon = function renderIcon(completed, icon, styles) {
  var iconType = typeof icon === 'undefined' ? 'undefined' : _typeof(icon);

  if (iconType === 'number' || iconType === 'string') {
    if (completed) {
      return _react2.default.createElement(_checkCircle2.default, {
        color: styles.icon.color,
        style: styles.icon
      });
    }

    return _react2.default.createElement(
      _SvgIcon2.default,
      { color: styles.icon.color, style: styles.icon },
      _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      _react2.default.createElement(
        'text',
        {
          x: '12',
          y: '16',
          textAnchor: 'middle',
          fontSize: '12',
          fill: '#fff'
        },
        icon
      )
    );
  }

  return icon;
};

var StepLabel = function StepLabel(props, context) {
  var active = props.active,
      children = props.children,
      completed = props.completed,
      userIcon = props.icon,
      iconContainerStyle = props.iconContainerStyle,
      last = props.last,
      style = props.style,
      other = _objectWithoutProperties(props, ['active', 'children', 'completed', 'icon', 'iconContainerStyle', 'last', 'style']);

  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);
  var icon = renderIcon(completed, userIcon, styles);

  return _react2.default.createElement(
    'span',
    Object.assign({ style: prepareStyles(Object.assign(styles.root, style)) }, other),
    icon && _react2.default.createElement(
      'span',
      { style: prepareStyles(Object.assign(styles.iconContainer, iconContainerStyle)) },
      icon
    ),
    children
  );
};

StepLabel.muiName = 'StepLabel';

StepLabel.propTypes = {
  /**
   * @property {PropTypes.bool} active - Sets active styling. Overrides disabled coloring.
   */
  active: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - The label text node
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} completed - Sets completed styling. Overrides disabled coloring.
   */
  completed: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} disabled - Sets disabled styling.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {element|string|number} icon - The icon displayed by the step label.
   */
  icon: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.number]),
  /**
   * @property {PropTypes.object} iconContainerStyle - Override the inline-styles of the icon container element.
   */
  iconContainerStyle: _propTypes2.default.object,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-style of the root element.
   */
  style: _propTypes2.default.object
};

StepLabel.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired,
  stepper: _propTypes2.default.object
};

exports.default = StepLabel;

//# sourceMappingURL=StepLabel.js.map