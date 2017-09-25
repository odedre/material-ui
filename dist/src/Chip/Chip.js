'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _colorManipulator = require('../utils/colorManipulator');

var _EnhancedButton = require('../internal/EnhancedButton');

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _cancel = require('../svg-icons/navigation/cancel');

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context, state) {
  var chip = context.muiTheme.chip;


  var backgroundColor = props.backgroundColor || chip.backgroundColor;
  var focusColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.08);
  var pressedColor = (0, _colorManipulator.emphasize)(backgroundColor, 0.12);

  return {
    avatar: {
      marginRight: -4
    },
    deleteIcon: {
      color: state.deleteHovered ? (0, _colorManipulator.fade)(chip.deleteIconColor, 0.4) : chip.deleteIconColor,
      cursor: 'pointer',
      margin: '4px 4px 0px -8px'
    },
    label: {
      color: props.labelColor || chip.textColor,
      fontSize: chip.fontSize,
      fontWeight: chip.fontWeight,
      lineHeight: '32px',
      paddingLeft: 12,
      paddingRight: 12,
      userSelect: 'none',
      whiteSpace: 'nowrap'
    },
    root: {
      backgroundColor: state.clicked ? pressedColor : state.focused || state.hovered ? focusColor : backgroundColor,
      borderRadius: 16,
      boxShadow: state.clicked ? chip.shadow : null,
      cursor: props.onClick ? 'pointer' : 'default',
      display: 'flex',
      whiteSpace: 'nowrap',
      width: 'fit-content'
    }
  };
}

/**
 * @description Chips represent complex entities in small blocks, such as a contact.
 * Also see https://www.google.com/design/spec/components/chips.html
 * 
 * While included here as a standalone component, the most common use will be in some form of input, so some of the behaviour demonstrated is not shown in context.
 *
 * @example
 * 
 * // Examples of Chips, using an image Avatar, Font Icon Avatar, SVG Icon Avatar, "Letter" (string) Avatar, and with custom colors.
 * // For more info on Avatar, go to https://bitsrc.io/materialui/react-material-ui/misc/avatar
 * // For more info on Font Icon, go to https://bitsrc.io/materialui/react-material-ui/icons/font-icon
 * // For more info on SVG Icon, go to https://bitsrc.io/materialui/react-material-ui/icons/svg-icon
 * 
 * // Chips with the `onRequestDelete` property defined will display a delete icon.
 * 
 * import React from 'react';
 * import Avatar from 'material-ui/Avatar';
 * import Chip from 'material-ui/Chip';
 * import FontIcon from 'material-ui/FontIcon';
 * import SvgIconFace from 'material-ui/svg-icons/action/face';
 * import {blue300, indigo900} from 'material-ui/styles/colors';
 * 
 * const styles = {
 *   chip: {
 *     margin: 4,
 *   },
 *   wrapper: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *   },
 * };
 * 
 * function handleRequestDelete() {
 *   alert('You clicked the delete button.');
 * }
 * 
 * function handleTouchTap() {
 *   alert('You clicked the Chip.');
 * }
 * export default class ChipExampleSimple extends React.Component {
 *   
 *     render() {
 *       return (
 *         <div style={styles.wrapper}>
 *   
 *           <Chip
 *             style={styles.chip}
 *           >
 *             Text Chip
 *           </Chip>
 *   
 *           <Chip
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             Deletable Text Chip
 *           </Chip>
 *   
 *           <Chip
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar src="images/uxceo-128.jpg" />
 *             Image Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar src="images/ok-128.jpg" />
 *             Deletable Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
 *             FontIcon Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar color="#444" icon={<SvgIconFace />} />
 *             SvgIcon Avatar Chip
 *           </Chip>
 *   
 *           <Chip onClick={handleTouchTap} style={styles.chip}>
 *             <Avatar size={32}>A</Avatar>
 *             Text Avatar Chip
 *           </Chip>
 *   
 *           <Chip
 *             backgroundColor={blue300}
 *             onRequestDelete={handleRequestDelete}
 *             onClick={handleTouchTap}
 *             style={styles.chip}
 *           >
 *             <Avatar size={32} color={blue300} backgroundColor={indigo900}>
 *               MB
 *             </Avatar>
 *             Colored Chip
 *           </Chip>
 *         </div>
 *       );
 *     }
 *   }
 * 
 * 
 * @example 
 * 
 * // An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * // Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth while clicked or touched.
 * 
 * import React from 'react';
 * import Chip from 'material-ui/Chip';
 * 
 * export default class ChipExampleArray extends React.Component {
 *   
 *     constructor(props) {
 *       super(props);
 *       this.state = {chipData: [
 *         {key: 0, label: 'Angular'},
 *         {key: 1, label: 'JQuery'},
 *         {key: 2, label: 'Polymer'},
 *         {key: 3, label: 'ReactJS'},
 *       ]};
 *       this.styles = {
 *         chip: {
 *           margin: 4,
 *         },
 *         wrapper: {
 *           display: 'flex',
 *           flexWrap: 'wrap',
 *         },
 *       };
 *     }
 *   
 *     handleRequestDelete = (key) => {
 *       if (key === 3) {
 *         alert('Why would you want to delete React?! :)');
 *         return;
 *       }
 *   
 *       this.chipData = this.state.chipData;
 *       const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
 *       this.chipData.splice(chipToDelete, 1);
 *       this.setState({chipData: this.chipData});
 *     };
 *   
 *     renderChip(data) {
 *       return (
 *         <Chip
 *           key={data.key}
 *           onRequestDelete={() => this.handleRequestDelete(data.key)}
 *           style={this.styles.chip}
 *         >
 *           {data.label}
 *         </Chip>
 *       );
 *     }
 *   
 *     render() {
 *       return (
 *         <div style={this.styles.wrapper}>
 *           {this.state.chipData.map(this.renderChip, this)}
 *         </div>
 *       );
 *     }
 *   }
 * 
 */

var Chip = function (_Component) {
  _inherits(Chip, _Component);

  function Chip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chip.__proto__ || Object.getPrototypeOf(Chip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      clicked: false,
      deleteHovered: false,
      focused: false,
      hovered: false
    }, _this.handleBlur = function (event) {
      _this.setState({ clicked: false, focused: false });
      _this.props.onBlur(event);
    }, _this.handleFocus = function (event) {
      if (_this.props.onClick || _this.props.onRequestDelete) {
        _this.setState({ focused: true });
      }
      _this.props.onFocus(event);
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (keyboardFocused) {
        _this.handleFocus();
        _this.props.onFocus(event);
      } else {
        _this.handleBlur();
      }

      _this.props.onKeyboardFocus(event, keyboardFocused);
    }, _this.handleKeyDown = function (event) {
      if ((0, _keycode2.default)(event) === 'backspace') {
        event.preventDefault();
        if (_this.props.onRequestDelete) {
          _this.props.onRequestDelete(event);
        }
      }
      _this.props.onKeyDown(event);
    }, _this.handleMouseDown = function (event) {
      // Only listen to left clicks
      if (event.button === 0) {
        event.stopPropagation();
        if (_this.props.onClick) {
          _this.setState({ clicked: true });
        }
      }
      _this.props.onMouseDown(event);
    }, _this.handleMouseEnter = function (event) {
      if (_this.props.onClick) {
        _this.setState({ hovered: true });
      }
      _this.props.onMouseEnter(event);
    }, _this.handleMouseEnterDeleteIcon = function () {
      _this.setState({ deleteHovered: true });
    }, _this.handleMouseLeave = function (event) {
      _this.setState({
        clicked: false,
        hovered: false
      });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseLeaveDeleteIcon = function () {
      _this.setState({ deleteHovered: false });
    }, _this.handleMouseUp = function (event) {
      _this.setState({ clicked: false });
      _this.props.onMouseUp(event);
    }, _this.handleTouchTapDeleteIcon = function (event) {
      // Stop the event from bubbling up to the `Chip`
      event.stopPropagation();
      _this.props.onRequestDelete(event);
    }, _this.handleTouchEnd = function (event) {
      _this.setState({ clicked: false });
      _this.props.onTouchEnd(event);
    }, _this.handleTouchStart = function (event) {
      event.stopPropagation();
      if (_this.props.onClick) {
        _this.setState({ clicked: true });
      }
      _this.props.onTouchStart(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Chip, [{
    key: 'render',
    value: function render() {
      var buttonEventHandlers = {
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMouseDown,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchStart: this.handleTouchStart,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var _props = this.props,
          childrenProp = _props.children,
          containerElement = _props.containerElement,
          style = _props.style,
          className = _props.className,
          deleteIconStyle = _props.deleteIconStyle,
          labelStyle = _props.labelStyle,
          labelColor = _props.labelColor,
          backgroundColor = _props.backgroundColor,
          onRequestDelete = _props.onRequestDelete,
          other = _objectWithoutProperties(_props, ['children', 'containerElement', 'style', 'className', 'deleteIconStyle', 'labelStyle', 'labelColor', 'backgroundColor', 'onRequestDelete']);

      var deletable = this.props.onRequestDelete;
      var avatar = null;

      var deleteIcon = deletable ? _react2.default.createElement(_cancel2.default, {
        color: styles.deleteIcon.color,
        style: Object.assign(styles.deleteIcon, deleteIconStyle),
        onClick: this.handleTouchTapDeleteIcon,
        onMouseEnter: this.handleMouseEnterDeleteIcon,
        onMouseLeave: this.handleMouseLeaveDeleteIcon
      }) : null;

      var children = childrenProp;
      var childCount = _react2.default.Children.count(children);

      // If the first child is an avatar, extract it and style it
      if (childCount > 1) {
        children = _react2.default.Children.toArray(children);

        if (_react2.default.isValidElement(children[0]) && children[0].type.muiName === 'Avatar') {
          avatar = children.shift();

          avatar = _react2.default.cloneElement(avatar, {
            style: Object.assign(styles.avatar, avatar.props.style),
            size: 32
          });
        }
      }

      return _react2.default.createElement(
        _EnhancedButton2.default,
        Object.assign({}, other, buttonEventHandlers, {
          className: className,
          containerElement: containerElement,
          disableTouchRipple: true,
          disableFocusRipple: true,
          style: Object.assign(styles.root, style)
        }),
        avatar,
        _react2.default.createElement(
          'span',
          { style: prepareStyles(Object.assign(styles.label, labelStyle)) },
          children
        ),
        deleteIcon
      );
    }
  }]);

  return Chip;
}(_react.Component);

Chip.propTypes = {
  /**
   * @property {PropTypes.string} backgroundColor - Override the background color of the chip.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * @property {PropTypes.node} children - Used to render elements inside the Chip.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.node} className - CSS `className` of the root element.
   */
  className: _propTypes2.default.node,
  /**
   * @property {PropTypes.oneOfType([PropTypes.string|PropTypes.element])} containerElement - The element to use as the container for the Chip. Either a string to
   * use a DOM element or a ReactElement.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * @property {PropTypes.object} deleteIconStyle - Override the inline-styles of the delete icon.
   */
  deleteIconStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} labelColor - Override the label color.
   */
  labelColor: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} labelStyle - Override the inline-styles of the label.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /** @ignore */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRequestDelete - Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
   * @param {object} event `touchTap` event targeting the element.
   */
  onRequestDelete: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onTouchTap - Callback function fired when the `Chip` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the element.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
Chip.defaultProps = {
  containerElement: 'div', // Firefox doesn't support nested buttons
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseUp: function onMouseUp() {},
  onTouchEnd: function onTouchEnd() {},
  onTouchStart: function onTouchStart() {}
};
Chip.contextTypes = { muiTheme: _propTypes2.default.object.isRequired };
exports.default = Chip;

//# sourceMappingURL=Chip.js.map