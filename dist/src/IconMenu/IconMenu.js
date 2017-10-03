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

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Menu = require('../Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description 
 * 
 * Icon Menus are menus that open from icons. They can give options related to the icon and use a minimal space.
 * Also see http://www.material-ui.com/#/components/icon-menu
 * 
 * @example
 *
 * // Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and `targetOrigin` properties. 
 * 
 * import React from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * 
 * const IconMenuExampleSimple = () => (
 *   <div>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 *       targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *       targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
 *       targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *     <IconMenu
 *       iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *       anchorOrigin={{horizontal: 'right', vertical: 'top'}}
 *       targetOrigin={{horizontal: 'right', vertical: 'top'}}
 *     >
 *       <MenuItem primaryText="Refresh" />
 *       <MenuItem primaryText="Send feedback" />
 *       <MenuItem primaryText="Settings" />
 *       <MenuItem primaryText="Help" />
 *       <MenuItem primaryText="Sign out" />
 *     </IconMenu>
 *   </div>
 * );
 * 
 * export default IconMenuExampleSimple;
 * 
 * 
 * @example 
 * // Three controlled examples, the first allowing a single selection, the second multiple selections, the third using internal state.
 * 
 * import React, {Component} from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * import ContentFilter from 'material-ui/svg-icons/content/filter-list';
 * import FileFileDownload from 'material-ui/svg-icons/file/file-download';
 * 
 * export default class IconMenuExampleControlled extends Component {
 *   state = {
 *     valueSingle: '3',
 *     valueMultiple: ['3', '5'],
 *   };
 * 
 *   handleChangeSingle = (event, value) => {
 *     this.setState({
 *       valueSingle: value,
 *     });
 *   };
 * 
 *   handleChangeMultiple = (event, value) => {
 *     this.setState({
 *       valueMultiple: value,
 *     });
 *   };
 * 
 *   handleOpenMenu = () => {
 *     this.setState({
 *       openMenu: true,
 *     });
 *   }
 * 
 *   handleOnRequestChange = (value) => {
 *     this.setState({
 *       openMenu: value,
 *     });
 *   }
 * 
 *   render() {
 *     return (
 *       <div>
 *         <IconMenu
 *           iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *           onChange={this.handleChangeSingle}
 *           value={this.state.valueSingle}
 *         >
 *           <MenuItem value="1" primaryText="Refresh" />
 *           <MenuItem value="2" primaryText="Send feedback" />
 *           <MenuItem value="3" primaryText="Settings" />
 *           <MenuItem value="4" primaryText="Help" />
 *           <MenuItem value="5" primaryText="Sign out" />
 *         </IconMenu>
 *         <IconMenu
 *           iconButtonElement={<IconButton><ContentFilter /></IconButton>}
 *           onChange={this.handleChangeMultiple}
 *           value={this.state.valueMultiple}
 *           multiple={true}
 *         >
 *           <MenuItem value="1" primaryText="Blu-ray" />
 *           <MenuItem value="2" primaryText="Cassette" />
 *           <MenuItem value="3" primaryText="CD" />
 *           <MenuItem value="4" primaryText="DVD Audio" />
 *           <MenuItem value="5" primaryText="Hybrid SACD" />
 *           <MenuItem value="6" primaryText="Vinyl" />
 *         </IconMenu>
 *         <IconMenu
 *           iconButtonElement={<IconButton><FileFileDownload /></IconButton>}
 *           open={this.state.openMenu}
 *           onRequestChange={this.handleOnRequestChange}
 *         >
 *           <MenuItem value="1" primaryText="Windows App" />
 *           <MenuItem value="2" primaryText="Mac App" />
 *           <MenuItem value="3" primaryText="Android App" />
 *           <MenuItem value="4" primaryText="iOS App" />
 *         </IconMenu>
 *         <RaisedButton onClick={this.handleOpenMenu} label="Downloads" />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The `maxHeight` property limits the height of the menu, above which it will be scrollable.
 * 
 * import React from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import MapsPlace from 'material-ui/svg-icons/maps/place';
 * 
 * const IconMenuExampleScrollable = () => (
 *   <IconMenu
 *     iconButtonElement={<IconButton><MapsPlace /></IconButton>}
 *     anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 *     targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *     maxHeight={272}
 *   >
 *     <MenuItem value="AL" primaryText="Alabama" />
 *     <MenuItem value="AK" primaryText="Alaska" />
 *     <MenuItem value="AZ" primaryText="Arizona" />
 *     <MenuItem value="AR" primaryText="Arkansas" />
 *     <MenuItem value="CA" primaryText="California" />
 *     <MenuItem value="CO" primaryText="Colorado" />
 *     <MenuItem value="CT" primaryText="Connecticut" />
 *     <MenuItem value="DE" primaryText="Delaware" />
 *     <MenuItem value="DC" primaryText="District Of Columbia" />
 *     <MenuItem value="FL" primaryText="Florida" />
 *     <MenuItem value="GA" primaryText="Georgia" />
 *     <MenuItem value="HI" primaryText="Hawaii" />
 *     <MenuItem value="ID" primaryText="Idaho" />
 *     <MenuItem value="IL" primaryText="Illinois" />
 *     <MenuItem value="IN" primaryText="Indiana" />
 *     <MenuItem value="IA" primaryText="Iowa" />
 *     <MenuItem value="KS" primaryText="Kansas" />
 *     <MenuItem value="KY" primaryText="Kentucky" />
 *     <MenuItem value="LA" primaryText="Louisiana" />
 *     <MenuItem value="ME" primaryText="Maine" />
 *     <MenuItem value="MD" primaryText="Maryland" />
 *     <MenuItem value="MA" primaryText="Massachusetts" />
 *     <MenuItem value="MI" primaryText="Michigan" />
 *     <MenuItem value="MN" primaryText="Minnesota" />
 *     <MenuItem value="MS" primaryText="Mississippi" />
 *     <MenuItem value="MO" primaryText="Missouri" />
 *     <MenuItem value="MT" primaryText="Montana" />
 *     <MenuItem value="NE" primaryText="Nebraska" />
 *     <MenuItem value="NV" primaryText="Nevada" />
 *     <MenuItem value="NH" primaryText="New Hampshire" />
 *     <MenuItem value="NJ" primaryText="New Jersey" />
 *     <MenuItem value="NM" primaryText="New Mexico" />
 *     <MenuItem value="NY" primaryText="New York" />
 *     <MenuItem value="NC" primaryText="North Carolina" />
 *     <MenuItem value="ND" primaryText="North Dakota" />
 *     <MenuItem value="OH" primaryText="Ohio" />
 *     <MenuItem value="OK" primaryText="Oklahoma" />
 *     <MenuItem value="OR" primaryText="Oregon" />
 *     <MenuItem value="PA" primaryText="Pennsylvania" />
 *     <MenuItem value="RI" primaryText="Rhode Island" />
 *     <MenuItem value="SC" primaryText="South Carolina" />
 *     <MenuItem value="SD" primaryText="South Dakota" />
 *     <MenuItem value="TN" primaryText="Tennessee" />
 *     <MenuItem value="TX" primaryText="Texas" />
 *     <MenuItem value="UT" primaryText="Utah" />
 *     <MenuItem value="VT" primaryText="Vermont" />
 *     <MenuItem value="VA" primaryText="Virginia" />
 *     <MenuItem value="WA" primaryText="Washington" />
 *     <MenuItem value="WV" primaryText="West Virginia" />
 *     <MenuItem value="WI" primaryText="Wisconsin" />
 *     <MenuItem value="WY" primaryText="Wyoming" />
 *   </IconMenu>
 * );
 * 
 * export default IconMenuExampleScrollable;
 * 
 * 
 * 
 * @example 
 * // Example of nested menus within an IconMenu.
 * 
 * import React from 'react';
 * import IconMenu from 'material-ui/IconMenu';
 * import MenuItem from 'material-ui/MenuItem';
 * import IconButton from 'material-ui/IconButton';
 * import Divider from 'material-ui/Divider';
 * import Download from 'material-ui/svg-icons/file/file-download';
 * import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
 * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
 * 
 * const IconMenuExampleNested = () => (
 *   <IconMenu
 *     iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
 *     anchorOrigin={{horizontal: 'left', vertical: 'top'}}
 *     targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *   >
 *     <MenuItem
 *       primaryText="Copy & Paste"
 *       rightIcon={<ArrowDropRight />}
 *       menuItems={[
 *         <MenuItem primaryText="Cut" />,
 *         <MenuItem primaryText="Copy" />,
 *         <Divider />,
 *         <MenuItem primaryText="Paste" />,
 *       ]}
 *     />
 * 
 *     <MenuItem
 *       primaryText="Case Tools"
 *       rightIcon={<ArrowDropRight />}
 *       menuItems={[
 *         <MenuItem primaryText="UPPERCASE" />,
 *         <MenuItem primaryText="lowercase" />,
 *         <MenuItem primaryText="CamelCase" />,
 *         <MenuItem primaryText="Propercase" />,
 *       ]}
 *     />
 *     <Divider />
 *     <MenuItem primaryText="Download" leftIcon={<Download />} />
 *     <Divider />
 *     <MenuItem value="Del" primaryText="Delete" />
 * 
 *   </IconMenu>
 * );
 * 
 * export default IconMenuExampleNested;
 * 
 */

var IconMenu = function (_Component) {
  _inherits(IconMenu, _Component);

  function IconMenu() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconMenu.__proto__ || Object.getPrototypeOf(IconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuInitiallyKeyboardFocused: false,
      open: false
    }, _this.handleItemTouchTap = function (event, child) {
      if (_this.props.touchTapCloseDelay !== 0 && !child.props.hasOwnProperty('menuItems')) {
        var isKeyboard = _events2.default.isKeyboard(event);
        _this.timerCloseId = setTimeout(function () {
          _this.close(isKeyboard ? 'enter' : 'itemTap', isKeyboard);
        }, _this.props.touchTapCloseDelay);
      }

      _this.props.onItemTouchTap(event, child);
    }, _this.handleRequestClose = function (reason) {
      _this.close(reason);
    }, _this.handleEscKeyDownMenu = function (event) {
      _this.close('escape', event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open != null) {
        this.setState({
          open: nextProps.open,
          anchorEl: this.refs.iconMenuContainer
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerCloseId);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.state.open;
    }
  }, {
    key: 'close',
    value: function close(reason, isKeyboard) {
      var _this2 = this;

      if (!this.state.open) {
        return;
      }

      if (this.props.open !== null) {
        this.props.onRequestChange(false, reason);
      } else {
        this.setState({ open: false }, function () {
          // Set focus on the icon button when the menu close
          if (isKeyboard) {
            var iconButton = _this2.refs.iconButton;
            _reactDom2.default.findDOMNode(iconButton).focus();
            iconButton.setKeyboardFocus();
          }
        });
      }
    }
  }, {
    key: 'open',
    value: function open(reason, event) {
      if (this.props.open !== null) {
        this.props.onRequestChange(true, reason);

        return this.setState({
          menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
          anchorEl: event.currentTarget
        });
      }

      this.setState({
        open: true,
        menuInitiallyKeyboardFocused: _events2.default.isKeyboard(event),
        anchorEl: event.currentTarget
      });

      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          anchorOrigin = _props.anchorOrigin,
          className = _props.className,
          animated = _props.animated,
          animation = _props.animation,
          iconButtonElement = _props.iconButtonElement,
          iconStyle = _props.iconStyle,
          onItemTouchTap = _props.onItemTouchTap,
          onKeyboardFocus = _props.onKeyboardFocus,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          onMouseUp = _props.onMouseUp,
          onRequestChange = _props.onRequestChange,
          onClick = _props.onClick,
          listStyle = _props.listStyle,
          menuStyle = _props.menuStyle,
          style = _props.style,
          targetOrigin = _props.targetOrigin,
          touchTapCloseDelay = _props.touchTapCloseDelay,
          useLayerForClickAway = _props.useLayerForClickAway,
          other = _objectWithoutProperties(_props, ['anchorOrigin', 'className', 'animated', 'animation', 'iconButtonElement', 'iconStyle', 'onItemTouchTap', 'onKeyboardFocus', 'onMouseDown', 'onMouseLeave', 'onMouseEnter', 'onMouseUp', 'onRequestChange', 'onClick', 'listStyle', 'menuStyle', 'style', 'targetOrigin', 'touchTapCloseDelay', 'useLayerForClickAway']);

      var prepareStyles = this.context.muiTheme.prepareStyles;
      var _state = this.state,
          open = _state.open,
          anchorEl = _state.anchorEl;


      var styles = {
        root: {
          display: 'inline-block',
          position: 'relative'
        },
        menu: {
          position: 'relative'
        }
      };

      var mergedRootStyles = Object.assign(styles.root, style);
      var mergedMenuStyles = Object.assign(styles.menu, menuStyle);

      (0, _warning2.default)(iconButtonElement.type.muiName !== 'SvgIcon', 'Material-UI: You shoud not provide an <SvgIcon /> to the \'iconButtonElement\' property of <IconMenu />.\nYou should wrapped it with an <IconButton />.');

      var iconButtonProps = {
        onKeyboardFocus: onKeyboardFocus,
        onClick: function onClick(event) {
          _this3.open(_events2.default.isKeyboard(event) ? 'keyboard' : 'iconTap', event);
          if (iconButtonElement.props.onClick) {
            iconButtonElement.props.onClick(event);
          }
        },
        ref: 'iconButton'
      };
      if (iconStyle || iconButtonElement.props.iconStyle) {
        iconButtonProps.iconStyle = iconStyle ? Object.assign({}, iconStyle, iconButtonElement.props.iconStyle) : iconButtonElement.props.iconStyle;
      }
      var iconButton = _react2.default.cloneElement(iconButtonElement, iconButtonProps);

      var menu = _react2.default.createElement(
        _Menu2.default,
        Object.assign({}, other, {
          initiallyKeyboardFocused: this.state.menuInitiallyKeyboardFocused,
          onEscKeyDown: this.handleEscKeyDownMenu,
          onItemTouchTap: this.handleItemTouchTap,
          style: mergedMenuStyles,
          listStyle: listStyle
        }),
        this.props.children
      );

      return _react2.default.createElement(
        'div',
        {
          ref: 'iconMenuContainer',
          className: className,
          onMouseDown: onMouseDown,
          onMouseLeave: onMouseLeave,
          onMouseEnter: onMouseEnter,
          onMouseUp: onMouseUp,
          onClick: onClick,
          style: prepareStyles(mergedRootStyles)
        },
        iconButton,
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            open: open,
            anchorEl: anchorEl,
            childContextTypes: this.constructor.childContextTypes,
            useLayerForClickAway: useLayerForClickAway,
            onRequestClose: this.handleRequestClose,
            animated: animated,
            animation: animation,
            context: this.context
          },
          menu
        )
      );
    }
  }]);

  return IconMenu;
}(_react.Component);

IconMenu.muiName = 'IconMenu';
IconMenu.propTypes = {
  /**
   * @property {PropTypes.custom} anchorOrigin - This is the point on the icon where the menu
   * `targetOrigin` will attach.
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
   * @property {PropTypes.node} children - Should be used to pass `MenuItem` components.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.element} iconButtonElement - This is the `IconButton` to render. This button will open the menu.
   */
  iconButtonElement: _propTypes2.default.element.isRequired,
  /**
   * @property {PropTypes.object} iconStyle - Override the inline-styles of the underlying icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} listStyle - Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} menuStyle - Override the inline-styles of the menu element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} multiple - If true, the value can an be array and allow the menu to be a multi-select.
   */
  multiple: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onClick - Callback function fired when the `IconButton` element is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the `IconButton` element.
   */
  onClick: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onItemTouchTap - Callback function fired when a menu item is selected with a touch-tap.
   *
   * @param {object} event TouchTap event targeting the selected menu item element.
   * @param {object} child The selected element.
   */
  onItemTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onKeyboardFocus - Callback function fired when the `IconButton` element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the `IconButton` element.
   * @param {boolean} keyboardFocused If true, the `IconButton` element is focused.
   */
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
   * @property {PropTypes.func} onRequestChange - Callback function fired when the `open` state of the menu is requested to be changed.
   *
   * @param {boolean} open If true, the menu was requested to be opened.
   * @param {string} reason The reason for the open or close request. Possible values are
   * 'keyboard' and 'iconTap' for open requests; 'enter', 'escape', 'itemTap', and 'clickAway'
   * for close requests.
   */
  onRequestChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} open - If true, the `IconMenu` is opened.
   */
  open: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.custom} targetOrigin - This is the point on the menu which will stick to the menu
   * origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.number} touchTapCloseDelay - Sets the delay in milliseconds before closing the
   * menu when an item is clicked.
   * If set to 0 then the auto close functionality
   * will be disabled.
   */
  touchTapCloseDelay: _propTypes2.default.number,
  /**
   * @property {PropTypes.bool} useLayerForClickAway - If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying elements.
   */
  useLayerForClickAway: _propTypes2.default.bool
};
IconMenu.defaultProps = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  animated: true,
  multiple: false,
  open: null,
  onItemTouchTap: function onItemTouchTap() {},
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseDown: function onMouseDown() {},
  onMouseLeave: function onMouseLeave() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseUp: function onMouseUp() {},
  onRequestChange: function onRequestChange() {},
  onClick: function onClick() {},
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  touchTapCloseDelay: 200,
  useLayerForClickAway: false
};
IconMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = IconMenu;

//# sourceMappingURL=IconMenu.js.map