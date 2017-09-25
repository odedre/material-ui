'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EnhancedSwitch = require('../internal/EnhancedSwitch');

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _checkBoxOutlineBlank = require('../svg-icons/toggle/check-box-outline-blank');

var _checkBoxOutlineBlank2 = _interopRequireDefault(_checkBoxOutlineBlank);

var _checkBox = require('../svg-icons/toggle/check-box');

var _checkBox2 = _interopRequireDefault(_checkBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var checkbox = context.muiTheme.checkbox;

  var checkboxSize = 24;

  return {
    icon: {
      height: checkboxSize,
      width: checkboxSize
    },
    check: {
      position: 'absolute',
      opacity: 0,
      transform: 'scale(0)',
      transitionOrigin: '50% 50%',
      transition: _transitions2.default.easeOut('450ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('0ms', 'transform', '450ms'),
      fill: checkbox.checkedColor
    },
    checkWhenSwitched: {
      opacity: 1,
      transform: 'scale(1)',
      transition: _transitions2.default.easeOut('0ms', 'opacity', '0ms') + ', ' + _transitions2.default.easeOut('800ms', 'transform', '0ms')
    },
    checkWhenDisabled: {
      fill: checkbox.disabledColor
    },
    box: {
      position: 'absolute',
      opacity: 1,
      fill: checkbox.boxColor,
      transition: _transitions2.default.easeOut('1000ms', 'opacity', '200ms')
    },
    boxWhenSwitched: {
      opacity: 0,
      transition: _transitions2.default.easeOut('650ms', 'opacity', '150ms'),
      fill: checkbox.checkedColor
    },
    boxWhenDisabled: {
      fill: props.checked ? 'transparent' : checkbox.disabledColor
    },
    label: {
      color: props.disabled ? checkbox.labelDisabledColor : checkbox.labelColor
    }
  };
}

/**
 * @description A checkbox is used to verify which options you want selected from a group.
 * Also see https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox
 * 
 * @example 
 * // The second example is selected by default using the `defaultChecked` property. The third example is disabled using the `disabled` property. The fourth example uses custom icons through the `checkedIcon` and `uncheckedIcon` properties. The final example uses the `labelPosition` property to position the label on the left.
 * 
 * import React from 'react';
 * import Checkbox from 'material-ui/Checkbox';
 * import ActionFavorite from 'material-ui/svg-icons/action/favorite';
 * import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
 * import Visibility from 'material-ui/svg-icons/action/visibility';
 * import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
 * 
 * const styles = {
 *   block: {
 *     maxWidth: 250,
 *   },
 *   checkbox: {
 *     marginBottom: 16,
 *   },
 * };
 * 
 * class CheckboxExampleSimple extends React.Component {
 *   state = {
 *     checked: false,
 *   }
 * 
 *   updateCheck() {
 *     this.setState((oldState) => {
 *       return {
 *         checked: !oldState.checked,
 *       };
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <div style={styles.block}>
 *         <Checkbox
 *           label="Simple"
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Simple with controlled value"
 *           checked={this.state.checked}
 *           onCheck={this.updateCheck.bind(this)}
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           checkedIcon={<ActionFavorite />}
 *           uncheckedIcon={<ActionFavoriteBorder />}
 *           label="Custom icon"
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           checkedIcon={<Visibility />}
 *           uncheckedIcon={<VisibilityOff />}
 *           label="Custom icon of different shapes"
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Disabled unchecked"
 *           disabled={true}
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Disabled checked"
 *           checked={true}
 *           disabled={true}
 *           style={styles.checkbox}
 *         />
 *         <Checkbox
 *           label="Label on the left"
 *           labelPosition="left"
 *           style={styles.checkbox}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * export default CheckboxExampleSimple;
 * 
 */

var Checkbox = function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switched: false
    }, _this.handleStateChange = function (newSwitched) {
      _this.setState({
        switched: newSwitched
      });
    }, _this.handleCheck = function (event, isInputChecked) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, isInputChecked);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          valueLink = _props.valueLink;


      if (checked || defaultChecked || valueLink && valueLink.value) {
        this.setState({
          switched: true
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.checked !== nextProps.checked) {
        this.setState({
          switched: nextProps.checked
        });
      }
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }
  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          iconStyle = _props2.iconStyle,
          onCheck = _props2.onCheck,
          checkedIcon = _props2.checkedIcon,
          uncheckedIcon = _props2.uncheckedIcon,
          other = _objectWithoutProperties(_props2, ['iconStyle', 'onCheck', 'checkedIcon', 'uncheckedIcon']);

      var styles = getStyles(this.props, this.context);
      var boxStyles = Object.assign(styles.box, this.state.switched && styles.boxWhenSwitched, iconStyle, this.props.disabled && styles.boxWhenDisabled);
      var checkStyles = Object.assign(styles.check, this.state.switched && styles.checkWhenSwitched, iconStyle, this.props.disabled && styles.checkWhenDisabled);

      var checkedElement = checkedIcon ? _react2.default.cloneElement(checkedIcon, {
        style: Object.assign(checkStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_checkBox2.default, {
        style: checkStyles
      });

      var unCheckedElement = uncheckedIcon ? _react2.default.cloneElement(uncheckedIcon, {
        style: Object.assign(boxStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_checkBoxOutlineBlank2.default, {
        style: boxStyles
      });

      var checkboxElement = _react2.default.createElement(
        'div',
        null,
        unCheckedElement,
        checkedElement
      );

      var rippleColor = this.state.switched ? checkStyles.fill : boxStyles.fill;
      var mergedIconStyle = Object.assign(styles.icon, iconStyle);

      var labelStyle = Object.assign(styles.label, this.props.labelStyle);

      var enhancedSwitchProps = {
        ref: 'enhancedSwitch',
        inputType: 'checkbox',
        switched: this.state.switched,
        switchElement: checkboxElement,
        rippleColor: rippleColor,
        iconStyle: mergedIconStyle,
        onSwitch: this.handleCheck,
        labelStyle: labelStyle,
        onParentShouldUpdate: this.handleStateChange,
        labelPosition: this.props.labelPosition
      };

      return _react2.default.createElement(_EnhancedSwitch2.default, Object.assign({}, other, enhancedSwitchProps));
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
  /**
   * @property {PropTypes.bool} checked - Checkbox is checked if true.
   */
  checked: _propTypes2.default.bool,
  /**
   * @property {PropTypes.element} checkedIcon - The SvgIcon to use for the checked state.
   * This is useful to create icon toggles.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * @property {PropTypes.bool} defaultChecked - The default state of our checkbox component.
   * **Warning:** This cannot be used in conjunction with `checked`.
   * Decide between using a controlled or uncontrolled input element and remove one of these props.
   * More info: https://fb.me/react-controlled-components
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} disabled - Disabled if true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} iconStyle - Overrides the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} inputStyle - Overrides the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.oneOf(['left', 'right'])} labelPosition - Where the label will be placed next to the checkbox.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * @property {PropTypes.object} labelStyle - Overrides the inline-styles of the Checkbox element label.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} onCheck - Callback function that is fired when the checkbox is checked.
   *
   * @param {object} event `change` event targeting the underlying checkbox `input`.
   * @param {boolean} isInputChecked The `checked` value of the underlying checkbox `input`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.element} uncheckedIcon - The SvgIcon to use for the unchecked state.
   * This is useful to create icon toggles.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * @property {PropTypes.object} valueLink - ValueLink for when using controlled checkbox.
   */
  valueLink: _propTypes2.default.object
};
Checkbox.defaultProps = {
  labelPosition: 'right',
  disabled: false
};
Checkbox.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Checkbox;

//# sourceMappingURL=Checkbox.js.map