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

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = require('../svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = require('../internal/ClearFix');

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = require('../Popover/PopoverAnimationVertical');

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var disabled = props.disabled;

  var spacing = context.muiTheme.baseTheme.spacing;
  var palette = context.muiTheme.baseTheme.palette;
  var accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
    },
    iconChildren: {
      fill: 'inherit'
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: spacing.desktopToolbarHeight + 'px',
      lineHeight: spacing.desktopToolbarHeight + 'px',
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap'
    },
    labelWhenOpen: {
      opacity: 0,
      top: spacing.desktopToolbarHeight / 8
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },
    rootWhenOpen: {
      opacity: 1
    },
    underline: {
      borderTop: 'solid 1px ' + accentColor,
      bottom: 1,
      left: 0,
      margin: '-1px ' + spacing.desktopGutter + 'px',
      right: 0,
      position: 'absolute'
    }
  };
}

/**
 * @description 
 * The DropDownMenu component is Material-UI's implementation of the Textfield dropdown.
 * Also see http://www.material-ui.com/#/components/dropdown-menu
 * 
 * 
 * @example 
 * // DropDownMenu is implemented as a controlled component, with the current selection set through the value property.
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const styles = {
 *   customWidth: {
 *     width: 200,
 *   },
 * };
 * 
 * export default class DropDownMenuSimpleExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 1};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <div>
 *         <DropDownMenu value={this.state.value} onChange={this.handleChange}>
 *           <MenuItem value={1} primaryText="Never" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </DropDownMenu>
 *         <br />
 *         <DropDownMenu
 *           value={this.state.value}
 *           onChange={this.handleChange}
 *           style={styles.customWidth}
 *           autoWidth={false}
 *         >
 *           <MenuItem value={1} primaryText="Custom width" />
 *           <MenuItem value={2} primaryText="Every Night" />
 *           <MenuItem value={3} primaryText="Weeknights" />
 *           <MenuItem value={4} primaryText="Weekends" />
 *           <MenuItem value={5} primaryText="Weekly" />
 *         </DropDownMenu>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // With openImmediately property set, the menu will open on mount.
 * 
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class DropDownMenuOpenImmediateExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 2};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true}>
 *         <MenuItem value={1} primaryText="Never" />
 *         <MenuItem value={2} primaryText="Every Night" />
 *         <MenuItem value={3} primaryText="Weeknights" />
 *         <MenuItem value={4} primaryText="Weekends" />
 *         <MenuItem value={5} primaryText="Weekly" />
 *       </DropDownMenu>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // With the maxHeight property set, the menu will be scrollable if the number of items causes the height to exceed this limit.
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const items = [];
 * for (let i = 0; i < 100; i++ ) {
 *   items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
 * }
 * 
 * export default class DropDownMenuLongMenuExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 10};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <DropDownMenu maxHeight={300} value={this.state.value} onChange={this.handleChange}>
 *         {items}
 *       </DropDownMenu>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * import React from 'react';
 * import DropDownMenu from 'material-ui/DropDownMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class DropDownMenuLabeledExample extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {value: 2};
 *   }
 * 
 *   handleChange = (event, index, value) => this.setState({value});
 * 
 *   render() {
 *     return (
 *       <DropDownMenu value={this.state.value} onChange={this.handleChange}>
 *         <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
 *         <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
 *         <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
 *         <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
 *       </DropDownMenu>
 *     );
 *   }
 * }
 * 
 */

var DropDownMenu = function (_Component) {
  _inherits(DropDownMenu, _Component);

  function DropDownMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDownMenu.__proto__ || Object.getPrototypeOf(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.setState({
          open: !_this.state.open,
          anchorEl: _this.rootNode
        });
      }
    }, _this.handleRequestCloseMenu = function () {
      _this.close(false);
    }, _this.handleEscKeyDownMenu = function () {
      _this.close(true);
    }, _this.handleKeyDown = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'up':
        case 'down':
        case 'space':
        case 'enter':
          event.preventDefault();
          _this.setState({
            open: true,
            anchorEl: _this.rootNode
          });
          break;
      }
    }, _this.handleItemTouchTap = function (event, child, index) {
      if (_this.props.multiple) {
        if (!_this.state.open) {
          _this.setState({ open: true });
        }
      } else {
        event.persist();
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onChange) {
            _this.props.onChange(event, index, child.props.value);
          }

          _this.close(_events2.default.isKeyboard(event));
        });
      }
    }, _this.handleChange = function (event, value) {
      if (_this.props.multiple && _this.props.onChange) {
        _this.props.onChange(event, undefined, value);
      }
    }, _this.close = function (isKeyboard) {
      _this.setState({
        open: false
      }, function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }

        if (isKeyboard) {
          var dropArrow = _this.arrowNode;
          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
          dropNode.focus();
          dropArrow.setKeyboardFocus(true);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.


  _createClass(DropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoWidth) {
        this.setWidth();
      }
      if (this.props.openImmediately) {
        // TODO: Temporary fix to make openImmediately work with popover.
        /* eslint-disable react/no-did-mount-set-state */
        setTimeout(function () {
          return _this2.setState({
            open: true,
            anchorEl: _this2.rootNode
          });
        }, 0);
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
    }
  }, {
    key: 'getInputNode',


    /**
     * This method is deprecated but still here because the TextField
     * need it in order to work. TODO: That will be addressed later.
     */
    value: function getInputNode() {
      var _this3 = this;

      var rootNode = this.rootNode;

      rootNode.focus = function () {
        if (!_this3.props.disabled) {
          _this3.setState({
            open: !_this3.state.open,
            anchorEl: _this3.rootNode
          });
        }
      };

      return rootNode;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = this.rootNode;
      if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
        el.style.width = 'auto';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          animated = _props.animated,
          animation = _props.animation,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyleProp = _props.menuStyle,
          selectionRenderer = _props.selectionRenderer,
          onClose = _props.onClose,
          openImmediately = _props.openImmediately,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          style = _props.style,
          underlineStyle = _props.underlineStyle,
          value = _props.value,
          iconButton = _props.iconButton,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          other = _objectWithoutProperties(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);

      var _state = this.state,
          anchorEl = _state.anchorEl,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var displayValue = '';
      if (!multiple) {
        _react2.default.Children.forEach(children, function (child) {
          if (child && value === child.props.value) {
            if (selectionRenderer) {
              displayValue = selectionRenderer(value, child);
            } else {
              // This will need to be improved (in case primaryText is a node)
              displayValue = child.props.label || child.props.primaryText;
            }
          }
        });
      } else {
        var values = [];
        var selectionRendererChildren = [];
        _react2.default.Children.forEach(children, function (child) {
          if (child && value && value.indexOf(child.props.value) > -1) {
            if (selectionRenderer) {
              values.push(child.props.value);
              selectionRendererChildren.push(child);
            } else {
              values.push(child.props.label || child.props.primaryText);
            }
          }
        });

        displayValue = [];
        if (selectionRenderer) {
          displayValue = selectionRenderer(values, selectionRendererChildren);
        } else {
          displayValue = values.join(', ');
        }
      }

      var menuStyle = void 0;
      if (anchorEl && !autoWidth) {
        menuStyle = Object.assign({
          width: anchorEl.clientWidth
        }, menuStyleProp);
      } else {
        menuStyle = menuStyleProp;
      }

      return _react2.default.createElement(
        'div',
        Object.assign({}, other, {
          ref: function ref(node) {
            _this4.rootNode = node;
          },
          className: className,
          style: prepareStyles(Object.assign({}, styles.root, open && styles.rootWhenOpen, style))
        }),
        _react2.default.createElement(
          _ClearFix2.default,
          { style: styles.control, onClick: this.handleTouchTapControl },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(Object.assign({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
            displayValue
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: disabled,
              onKeyDown: this.handleKeyDown,
              ref: function ref(node) {
                _this4.arrowNode = node;
              },
              style: Object.assign({}, styles.icon, iconStyle),
              iconStyle: styles.iconChildren
            },
            iconButton
          ),
          _react2.default.createElement('div', { style: prepareStyles(Object.assign({}, styles.underline, underlineStyle)) })
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            anchorEl: anchorEl,
            animation: animation || _PopoverAnimationVertical2.default,
            open: open,
            animated: animated,
            onRequestClose: this.handleRequestCloseMenu
          },
          _react2.default.createElement(
            _Menu2.default,
            {
              multiple: multiple,
              maxHeight: maxHeight,
              desktop: true,
              value: value,
              onEscKeyDown: this.handleEscKeyDownMenu,
              style: menuStyle,
              listStyle: listStyle,
              onItemTouchTap: this.handleItemTouchTap,
              onChange: this.handleChange,
              menuItemStyle: menuItemStyle,
              selectedMenuItemStyle: selectedMenuItemStyle,
              autoWidth: autoWidth,
              width: !autoWidth && menuStyle ? menuStyle.width : null
            },
            children
          )
        )
      );
    }
  }]);

  return DropDownMenu;
}(_react.Component);

DropDownMenu.muiName = 'DropDownMenu';
DropDownMenu.propTypes = {
  /**
   * @property {PropTypes.origin} anchorOrigin - This is the point on the anchor that the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.bool} animated - If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} animation - Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} autoWidth - The width will automatically be set according to the items inside the menu.
   * To control this width in css instead, set this prop to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
   * prop `label` that value will be used to render the representation of that
   * item within the field.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} disabled - Disables the menu.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} iconButton - Overrides default `SvgIcon` dropdown arrow component.
   */
  iconButton: _propTypes2.default.node,
  /**
   * @property {PropTypes.object} iconStyle - Overrides the styles of icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} labelStyle - Overrides the styles of label when the `DropDownMenu` is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} listStyle - The style object to use to override underlying list style.
   */
  listStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.number} maxHeight - The maximum height of the `Menu` when it is displayed.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} menuItemStyle - Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} menuStyle - Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} multiple - If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onChange - Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {object} event TouchTap event targeting the menu item that was clicked.
   * @param {number} key The index of the clicked menu item in the `children` collection.
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onClose - Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} openImmediately - Set to true to have the `DropDownMenu` automatically open on mount.
   */
  openImmediately: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} selectedMenuItemStyle - Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} selectionRenderer - Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.origin} targetOrigin - This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.object} underlineStyle - Overrides the inline-styles of the underline.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.any} value - If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
};
DropDownMenu.defaultProps = {
  animated: true,
  autoWidth: true,
  disabled: false,
  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
  openImmediately: false,
  maxHeight: 500,
  multiple: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
DropDownMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = DropDownMenu;

//# sourceMappingURL=DropDownMenu.js.map