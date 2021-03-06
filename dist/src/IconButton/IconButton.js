'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _EnhancedButton = require('../internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _FontIcon = require('../FontIcon');

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Tooltip = require('../internal/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _childUtils = require('../utils/childUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      boxSizing: 'border-box',
      overflow: 'visible',
      transition: _transitions2.default.easeOut(),
      padding: baseTheme.spacing.iconSize / 2,
      width: baseTheme.spacing.iconSize * 2,
      height: baseTheme.spacing.iconSize * 2,
      fontSize: 0
    },
    tooltip: {
      boxSizing: 'border-box'
    },
    disabled: {
      color: baseTheme.palette.disabledColor,
      fill: baseTheme.palette.disabledColor,
      cursor: 'default'
    }
  };
}

/**
 * 
 * @description
 * 
 * An Icon Button generates a button element around an icon. Also, focus styles will happen on tab but not on click. There are three ways to add an icon:
 * 
 * 1. For icon font stylesheets: Set the prop iconClassName to the classname for your icon. Certain icon fonts support ligatures, allowing the icon to be specified as a string. Refer to this [article](#) to learn more about including font icons in your project.
 * 2. For SVG icons: Insert the SVG component as a child of icon buttons.
 * 3. Alternative: You can also insert a [FontIcon](#) component as a child of IconButton. This is similar to how the iconClassName prop from method 1 is handled.
 * 
 * Also see http://www.material-ui.com/#/components/icon-button
 * 
 * @example 
 * 
 * // An Icon Button using an icon specified with the iconClassName property, and a disabled example.
 *
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * 
 * const IconButtonExampleSimple = () => (
 *   <div>
 *     <IconButton iconClassName="muidocs-icon-custom-github" />
 *     <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
 *   </div>
 * );
 * 
 * export default IconButtonExampleSimple;
 * 
 * 
 * @example 
 * 
 * // An Icon Button using a nested [Font Icon](#), a nested [SVG Icon](#) and an icon font ligature.
 * 
 * import React from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import IconButton from 'material-ui/IconButton';
 * import ActionHome from 'material-ui/svg-icons/action/home';
 * 
 * const IconButtonExampleComplex = () => (
 *   <div>
 *     <IconButton tooltip="Font Icon">
 *       <FontIcon className="muidocs-icon-action-home" />
 *     </IconButton>
 * 
 *     <IconButton tooltip="SVG Icon">
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconClassName="material-icons"
 *       tooltip="Ligature"
 *     >
 *       home
 *     </IconButton>
 *   </div>
 * );
 * 
 * export default IconButtonExampleComplex;
 * 
 * @example 
 * 
 * // Examples of Icon Button in different sizes.
 * 
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * import ActionHome from 'material-ui/svg-icons/action/home';
 * 
 * const styles = {
 *   smallIcon: {
 *     width: 36,
 *     height: 36,
 *   },
 *   mediumIcon: {
 *     width: 48,
 *     height: 48,
 *   },
 *   largeIcon: {
 *     width: 60,
 *     height: 60,
 *   },
 *   small: {
 *     width: 72,
 *     height: 72,
 *     padding: 16,
 *   },
 *   medium: {
 *     width: 96,
 *     height: 96,
 *     padding: 24,
 *   },
 *   large: {
 *     width: 120,
 *     height: 120,
 *     padding: 30,
 *   },
 * };
 * 
 * const IconButtonExampleSize = () => (
 *   <div>
 *     <IconButton>
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconStyle={styles.smallIcon}
 *       style={styles.small}
 *     >
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconStyle={styles.mediumIcon}
 *       style={styles.medium}
 *     >
 *       <ActionHome />
 *     </IconButton>
 * 
 *     <IconButton
 *       iconStyle={styles.largeIcon}
 *       style={styles.large}
 *     >
 *       <ActionHome />
 *     </IconButton>
 *   </div>
 * );
 * 
 * export default IconButtonExampleSize;
 * 
 * 
 * @example 
 * 
 * // Icon Buttons showing the available tooltip positions.
 * 
 * 
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * 
 * const IconButtonExampleTooltip = () => (
 *   <div>
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="bottom-right"
 *       tooltipPosition="bottom-right"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="bottom-center"
 *       tooltipPosition="bottom-center"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="bottom-left"
 *       tooltipPosition="bottom-left"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="top-right"
 *       tooltipPosition="top-right"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="top-center"
 *       tooltipPosition="top-center"
 *     />
 *     <IconButton
 *       iconClassName="muidocs-icon-custom-github" tooltip="top-left"
 *       tooltipPosition="top-left"
 *     />
 *   </div>
 * );
 * 
 * export default IconButtonExampleTooltip;
 * 
 * 
 * @example 
 * 
 * // The touch property adjusts the tooltip size for better visibility on mobile devices.
 * 
 * import React from 'react';
 * import IconButton from 'material-ui/IconButton';
 * import ActionGrade from 'material-ui/svg-icons/action/grade';
 * 
 * const IconButtonExampleTouch = () => (
 *   <div>
 *     <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="bottom-center" touch={true} tooltipPosition="bottom-center">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="bottom-left" touch={true} tooltipPosition="bottom-left">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="top-right" touch={true} tooltipPosition="top-right">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="top-center" touch={true} tooltipPosition="top-center">
 *       <ActionGrade />
 *     </IconButton>
 *     <IconButton tooltip="top-left" touch={true} tooltipPosition="top-left">
 *       <ActionGrade />
 *     </IconButton>
 *   </div>
 * );
 * 
 * export default IconButtonExampleTouch;
 * 
 */

var IconButton = function (_Component) {
  _inherits(IconButton, _Component);

  function IconButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconButton.__proto__ || Object.getPrototypeOf(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      // Not to be confonded with the touch property.
      // This state is to determined if it's a mobile device.
      touch: false,
      tooltipShown: false
    }, _this.handleBlur = function (event) {
      _this.hideTooltip();
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      _this.showTooltip();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.button.isKeyboardFocused()) {
        _this.hideTooltip();
      }
      _this.setState({ hovered: false });
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseOut = function (event) {
      if (_this.props.disabled) _this.hideTooltip();
      if (_this.props.onMouseOut) _this.props.onMouseOut(event);
    }, _this.handleMouseEnter = function (event) {
      _this.showTooltip();

      // Cancel hover styles for touch devices
      if (!_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onKeyboardFocus = _this$props.onKeyboardFocus;

      if (isKeyboardFocused && !disabled) {
        _this.showTooltip();
        if (onFocus) {
          onFocus(event);
        }
      } else {
        _this.hideTooltip();
        if (onBlur) {
          onBlur(event);
        }
      }

      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      if (onKeyboardFocus) {
        onKeyboardFocus(event, isKeyboardFocused);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({ hovered: false });
      }
    }
  }, {
    key: 'setKeyboardFocus',
    value: function setKeyboardFocus() {
      this.button.setKeyboardFocus();
    }
  }, {
    key: 'showTooltip',
    value: function showTooltip() {
      if (this.props.tooltip) {
        this.setState({ tooltipShown: true });
      }
    }
  }, {
    key: 'hideTooltip',
    value: function hideTooltip() {
      if (this.props.tooltip) this.setState({ tooltipShown: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          disabled = _props.disabled,
          hoveredStyle = _props.hoveredStyle,
          disableTouchRipple = _props.disableTouchRipple,
          children = _props.children,
          iconClassName = _props.iconClassName,
          style = _props.style,
          tooltip = _props.tooltip,
          tooltipPositionProp = _props.tooltipPosition,
          tooltipStyles = _props.tooltipStyles,
          touch = _props.touch,
          iconStyle = _props.iconStyle,
          other = _objectWithoutProperties(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

      var fonticon = void 0;

      var styles = getStyles(this.props, this.context);
      var tooltipPosition = tooltipPositionProp.split('-');

      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = Object.assign(styles.root, style, hovered ? hoveredStyle : {});

      var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
        label: tooltip,
        show: this.state.tooltipShown,
        touch: touch,
        style: Object.assign(styles.tooltip, tooltipStyles),
        verticalPosition: tooltipPosition[0],
        horizontalPosition: tooltipPosition[1]
      }) : null;

      if (iconClassName) {
        var iconHoverColor = iconStyle.iconHoverColor,
            iconStyleFontIcon = _objectWithoutProperties(iconStyle, ['iconHoverColor']);

        fonticon = _react2.default.createElement(
          _FontIcon2.default,
          {
            className: iconClassName,
            hoverColor: disabled ? null : iconHoverColor,
            style: Object.assign({}, disabled && styles.disabled, iconStyleFontIcon),
            color: this.context.muiTheme.baseTheme.palette.textColor
          },
          children
        );
      }

      var childrenStyle = disabled ? Object.assign({}, iconStyle, styles.disabled) : iconStyle;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        Object.assign({
          ref: function ref(_ref2) {
            return _this2.button = _ref2;
          }
        }, other, {
          centerRipple: true,
          disabled: disabled,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          disableTouchRipple: disableTouchRipple,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onMouseOut: this.handleMouseOut,
          onKeyboardFocus: this.handleKeyboardFocus
        }),
        tooltipElement,
        fonticon,
        (0, _childUtils.extendChildren)(children, {
          style: childrenStyle
        })
      );
    }
  }]);

  return IconButton;
}(_react.Component);

IconButton.muiName = 'IconButton';
IconButton.propTypes = {
  /**
   * @property {PropTypes.node} children - Can be used to pass a `FontIcon` element as the icon for the button.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} disableTouchRipple - If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} disabled - If true, the element will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} hoveredStyle - Override the inline-styles of the root element when the component is hovered.
   */
  hoveredStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} href - The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} iconClassName - The CSS class name of the icon. Used for setting the icon with a stylesheet.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} iconStyle - Override the inline-styles of the icon element.
   * Note: you can specify iconHoverColor as a String inside this object.
   */
  iconStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onClick - Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onKeyboardFocus - Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} keyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseOut: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} tooltip - The text to supply to the element's tooltip.
   */
  tooltip: _propTypes2.default.node,
  /**
   * @property {PropTypes.custom} tooltipPosition - The vertical and horizontal positions, respectively, of the element's tooltip.
   * Possible values are: "bottom-center", "top-center", "bottom-right", "top-right",
   * "bottom-left", and "top-left".
   */
  tooltipPosition: _propTypes4.default.cornersAndCenter,
  /**
   * @property {PropTypes.object} tooltipStyles - Override the inline-styles of the tooltip element.
   */
  tooltipStyles: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} touch - If true, increase the tooltip element's size. Useful for increasing tooltip
   * readability on mobile devices.
   */
  touch: _propTypes2.default.bool
};
IconButton.defaultProps = {
  disabled: false,
  disableTouchRipple: false,
  iconStyle: {},
  tooltipPosition: 'bottom-center',
  touch: false
};
IconButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = IconButton;

//# sourceMappingURL=IconButton.js.map