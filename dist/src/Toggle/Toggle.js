'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Toggle$propTypes;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _EnhancedSwitch = require('../internal/EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A toggle switch is used as an on/off control.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Also see http://www.material-ui.com/#/components/toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // The second example is selected by default using the defaultToggled property. The third example is disabled using the disabled property. The final example uses the labelPosition property to position the label on the right.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import Toggle from 'material-ui/Toggle';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const styles = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   block: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     maxWidth: 250,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   toggle: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     marginBottom: 16,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   thumbOff: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     backgroundColor: '#ffcccc',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   trackOff: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     backgroundColor: '#ff9d9d',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   thumbSwitched: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     backgroundColor: 'red',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   trackSwitched: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     backgroundColor: '#ff9d9d',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   labelStyle: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     color: 'red',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const ToggleExampleSimple = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   <div style={styles.block}>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <Toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       label="Simple"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       style={styles.toggle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <Toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       label="Toggled by default"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       defaultToggled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       style={styles.toggle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <Toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       label="Disabled"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       disabled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       style={styles.toggle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <Toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       label="Label on the right"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       labelPosition="right"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       style={styles.toggle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <Toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       label="Styling"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       thumbStyle={styles.thumbOff}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       trackStyle={styles.trackOff}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       thumbSwitchedStyle={styles.thumbSwitched}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       trackSwitchedStyle={styles.trackSwitched}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       labelStyle={styles.labelStyle}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default ToggleExampleSimple;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function getStyles(props, context, state) {
  var disabled = props.disabled,
      elementStyle = props.elementStyle,
      trackSwitchedStyle = props.trackSwitchedStyle,
      thumbSwitchedStyle = props.thumbSwitchedStyle,
      trackStyle = props.trackStyle,
      thumbStyle = props.thumbStyle,
      iconStyle = props.iconStyle,
      rippleStyle = props.rippleStyle,
      labelStyle = props.labelStyle;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      toggle = _context$muiTheme.toggle;


  var toggleSize = 20;
  var toggleTrackWidth = 36;
  var styles = {
    icon: {
      width: 36,
      padding: '4px 0px 6px 2px'
    },
    ripple: {
      top: -10,
      left: -10,
      color: state.switched ? toggle.thumbOnColor : baseTheme.palette.textColor
    },
    toggleElement: {
      width: toggleTrackWidth
    },
    track: {
      transition: _transitions2.default.easeOut(),
      width: '100%',
      height: 14,
      borderRadius: 30,
      backgroundColor: toggle.trackOffColor
    },
    thumb: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      top: 1,
      left: 0,
      width: toggleSize,
      height: toggleSize,
      lineHeight: '24px',
      borderRadius: '50%',
      backgroundColor: toggle.thumbOffColor
    },
    trackWhenSwitched: {
      backgroundColor: toggle.trackOnColor
    },
    thumbWhenSwitched: {
      backgroundColor: toggle.thumbOnColor,
      left: '100%'
    },
    trackWhenDisabled: {
      backgroundColor: toggle.trackDisabledColor
    },
    thumbWhenDisabled: {
      backgroundColor: toggle.thumbDisabledColor
    },
    label: {
      color: disabled ? toggle.labelDisabledColor : toggle.labelColor,
      width: 'calc(100% - ' + (toggleTrackWidth + 10) + 'px)'
    }
  };

  Object.assign(styles.track, trackStyle, state.switched && styles.trackWhenSwitched, state.switched && trackSwitchedStyle, disabled && styles.trackWhenDisabled);

  Object.assign(styles.thumb, thumbStyle, state.switched && styles.thumbWhenSwitched, state.switched && thumbSwitchedStyle, disabled && styles.thumbWhenDisabled);

  if (state.switched) {
    styles.thumb.marginLeft = 0 - styles.thumb.width;
  }

  Object.assign(styles.icon, iconStyle);

  Object.assign(styles.ripple, rippleStyle);

  Object.assign(styles.label, labelStyle);

  Object.assign(styles.toggleElement, elementStyle);

  return styles;
}

var Toggle = function (_Component) {
  _inherits(Toggle, _Component);

  function Toggle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Toggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleToggle = function (event, isInputChecked) {
      if (_this.props.onToggle) {
        _this.props.onToggle(event, isInputChecked);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Toggle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          toggled = _props.toggled,
          defaultToggled = _props.defaultToggled,
          valueLink = _props.valueLink;


      if (toggled || defaultToggled || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'isToggled',
    value: function isToggled() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setToggled',
    value: function setToggled(newToggledValue) {
      this.refs.enhancedSwitch.setSwitched(newToggledValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          defaultToggled = _props2.defaultToggled,
          elementStyle = _props2.elementStyle,
          onToggle = _props2.onToggle,
          trackSwitchedStyle = _props2.trackSwitchedStyle,
          thumbSwitchedStyle = _props2.thumbSwitchedStyle,
          toggled = _props2.toggled,
          other = _objectWithoutProperties(_props2, ['defaultToggled', 'elementStyle', 'onToggle', 'trackSwitchedStyle', 'thumbSwitchedStyle', 'toggled']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var toggleElement = _react2.default.createElement(
        'div',
        { style: prepareStyles(Object.assign({}, styles.toggleElement)) },
        _react2.default.createElement('div', { style: prepareStyles(Object.assign({}, styles.track)) }),
        _react2.default.createElement(_Paper2.default, { style: styles.thumb, circle: true, zDepth: 1 })
      );

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switchElement: toggleElement,
        rippleStyle: styles.ripple,
        rippleColor: styles.ripple.color,
        iconStyle: styles.icon,
        trackStyle: styles.track,
        thumbStyle: styles.thumb,
        labelStyle: styles.label,
        switched: this.state.switched,
        onSwitch: this.handleToggle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      if (this.props.hasOwnProperty('toggled')) {
        enhancedSwitchProps.checked = toggled;
      } else if (this.props.hasOwnProperty('defaultToggled')) {
        enhancedSwitchProps.defaultChecked = defaultToggled;
      }

      return _react2.default.createElement(_EnhancedSwitch2.default, Object.assign({}, other, enhancedSwitchProps));
    }
  }]);

  return Toggle;
}(_react.Component);

Toggle.propTypes = (_Toggle$propTypes = {
  /**
   * @property {PropTypes.bool} defaultToggled - Determines whether the Toggle is initially turned on.
   * **Warning:** This cannot be used in conjunction with `toggled`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultToggled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} disabled - Will disable the toggle if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} elementStyle - Overrides the inline-styles of the Toggle element.
   */
  elementStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} iconStyle - Overrides the inline-styles of the Icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} inputStyle - Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} label - Label for toggle.
   */
  label: _propTypes2.default.node,
  /**
   * @property {left|right} labelPosition - Where the label will be placed next to the toggle.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * @property {PropTypes.object} labelStyle - Overrides the inline-styles of the Toggle element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} onToggle - Callback function that is fired when the toggle switch is toggled.
   *
   * @param {object} event Change event targeting the toggle.
   * @param {bool} isInputChecked The new value of the toggle.
   */
  onToggle: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} rippleStyle - Override style of ripple.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} thumbStyle - Override style for thumb.
   */
  thumbStyle: _propTypes2.default.object,
  /**
  * @property {PropTypes.object} thumbSwitchedStyle - Override the inline styles for thumb when the toggle switch is toggled on.
  */
  thumbSwitchedStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} toggled - Toggled if set to true.
   */
  toggled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} trackStyle - Override style for track.
   */
  trackStyle: _propTypes2.default.object
}, _defineProperty(_Toggle$propTypes, 'defaultToggled', _propTypes2.default.bool), _defineProperty(_Toggle$propTypes, 'trackSwitchedStyle', _propTypes2.default.object), _defineProperty(_Toggle$propTypes, 'valueLink', _propTypes2.default.object), _Toggle$propTypes);
Toggle.defaultProps = {
  defaultToggled: false,
  disabled: false,
  labelPosition: 'left'
};
Toggle.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Toggle;

//# sourceMappingURL=Toggle.js.map