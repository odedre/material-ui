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

var _shallowEqual = require('recompose/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _ClickAwayListener = require('../internal/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _List = require('../List/List');

var _List2 = _interopRequireDefault(_List);

var _menuUtils = require('./menuUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var desktop = props.desktop,
      maxHeight = props.maxHeight,
      width = props.width;
  var muiTheme = context.muiTheme;


  var styles = {
    root: {
      // Nested div because the List scales x faster than it scales y
      zIndex: muiTheme.zIndex.menu,
      maxHeight: maxHeight,
      overflowY: maxHeight ? 'auto' : null
    },
    divider: {
      marginTop: 7,
      marginBottom: 8
    },
    list: {
      display: 'table-cell',
      paddingBottom: desktop ? 16 : 8,
      paddingTop: desktop ? 16 : 8,
      userSelect: 'none',
      width: width
    },
    selectedMenuItem: {
      color: muiTheme.menuItem.selectedTextColor
    }
  };

  return styles;
}

/**
 * 
 * @description 
 * Menus allow you to take an action by selecting from a list revealed upon opening a temporary, new sheet of material. A Menu is typically used in a [Popover](#).
 * 
 * 
 * @example 
 * // Two simple examples. The menu widths adjusts to accommodate the content in keyline increments.
 * 
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * const style = {
 *   display: 'inline-block',
 *   margin: '16px 32px 16px 0',
 * };
 * 
 * const MenuExampleSimple = () => (
 *   <div>
 *     <Paper style={style}>
 *       <Menu>
 *         <MenuItem primaryText="Maps" />
 *         <MenuItem primaryText="Books" />
 *         <MenuItem primaryText="Flights" />
 *         <MenuItem primaryText="Apps" />
 *       </Menu>
 *     </Paper>
 *     <Paper style={style}>
 *       <Menu>
 *         <MenuItem primaryText="Refresh" />
 *         <MenuItem primaryText="Help &amp; feedback" />
 *         <MenuItem primaryText="Settings" />
 *         <MenuItem primaryText="Sign out" />
 *       </Menu>
 *     </Paper>
 *   </div>
 * );
 * 
 * export default MenuExampleSimple;
 * 
 * 
 * @example 
 * 
 * // The disabled property disables a MenuItem. Menu supports a more compact vertical spacing using the desktop property. The Divider can be used to separate MenuItems.
 *
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * import Divider from 'material-ui/Divider';
 * 
 * const style = {
 *   display: 'inline-block',
 *   margin: '16px 32px 16px 0',
 * };
 * 
 * const MenuExampleDisable = () => (
 *   <div>
 *     <Paper style={style}>
 *       <Menu desktop={true}>
 *         <MenuItem primaryText="Back" />
 *         <MenuItem primaryText="Forward" disabled={true} />
 *         <Divider />
 *         <MenuItem primaryText="Recently closed" disabled={true} />
 *         <MenuItem primaryText="Google" disabled={true} />
 *         <MenuItem primaryText="YouTube" />
 *       </Menu>
 *     </Paper>
 *     <Paper style={style}>
 *       <Menu desktop={true}>
 *         <MenuItem primaryText="Undo" />
 *         <MenuItem primaryText="Redo" disabled={true} />
 *         <Divider />
 *         <MenuItem primaryText="Cut" disabled={true} />
 *         <MenuItem primaryText="Copy" disabled={true} />
 *         <MenuItem primaryText="Paste" />
 *       </Menu>
 *     </Paper>
 *   </div>
 * );
 * 
 * export default MenuExampleDisable;
 * 
 * 
 * 
 * @example 
 * 
 * // MenuItem supports icons through the leftIcon and rightIcon properties.
 * 
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
 * import PersonAdd from 'material-ui/svg-icons/social/person-add';
 * import ContentLink from 'material-ui/svg-icons/content/link';
 * import Divider from 'material-ui/Divider';
 * import ContentCopy from 'material-ui/svg-icons/content/content-copy';
 * import Download from 'material-ui/svg-icons/file/file-download';
 * import Delete from 'material-ui/svg-icons/action/delete';
 * import FontIcon from 'material-ui/FontIcon';
 * 
 * const style = {
 *   paper: {
 *     display: 'inline-block',
 *     float: 'left',
 *     margin: '16px 32px 16px 0',
 *   },
 *   rightIcon: {
 *     textAlign: 'center',
 *     lineHeight: '24px',
 *   },
 * };
 * 
 * const MenuExampleIcons = () => (
 *   <div>
 *     <Paper style={style.paper}>
 *       <Menu>
 *         <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
 *         <MenuItem primaryText="Share" leftIcon={<PersonAdd />} />
 *         <MenuItem primaryText="Get links" leftIcon={<ContentLink />} />
 *         <Divider />
 *         <MenuItem primaryText="Make a copy" leftIcon={<ContentCopy />} />
 *         <MenuItem primaryText="Download" leftIcon={<Download />} />
 *         <Divider />
 *         <MenuItem primaryText="Remove" leftIcon={<Delete />} />
 *       </Menu>
 *     </Paper>
 *     <Paper style={style.paper}>
 *       <Menu>
 *         <MenuItem primaryText="Clear Config" />
 *         <MenuItem primaryText="New Config" rightIcon={<PersonAdd />} />
 *         <MenuItem primaryText="Project" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
 *         <MenuItem
 *           primaryText="Workspace"
 *           rightIcon={
 *             <FontIcon className="material-icons" style={{color: '#559'}}>settings</FontIcon>
 *           }
 *         />
 *         <MenuItem primaryText="Paragraph" rightIcon={<b style={style.rightIcon}>¶</b>} />
 *         <MenuItem primaryText="Section" rightIcon={<b style={style.rightIcon}>§</b>} />
 *       </Menu>
 *     </Paper>
 *   </div>
 * );
 * 
 * export default MenuExampleIcons;
 * 
 * 
 * @example 
 * // MenuItem supports a secondaryText property.
 * 
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * import Divider from 'material-ui/Divider';
 * import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
 * 
 * const style = {
 *   display: 'inline-block',
 *   float: 'left',
 *   margin: '16px 32px 16px 0',
 * };
 * 
 * const MenuExampleSecondary = () => (
 *   <div>
 *     <Paper style={style}>
 *       <Menu desktop={true} width={256}>
 *         <MenuItem primaryText="Bold" secondaryText="&#8984;B" />
 *         <MenuItem primaryText="Italic" secondaryText="&#8984;I" />
 *         <MenuItem primaryText="Underline" secondaryText="&#8984;U" />
 *         <MenuItem primaryText="Strikethrough" secondaryText="Alt+Shift+5" />
 *         <MenuItem primaryText="Superscript" secondaryText="&#8984;." />
 *         <MenuItem primaryText="Subscript" secondaryText="&#8984;," />
 *         <Divider />
 *         <MenuItem primaryText="Paragraph styles" rightIcon={<ArrowDropRight />} />
 *         <MenuItem primaryText="Align" rightIcon={<ArrowDropRight />} />
 *         <MenuItem primaryText="Line spacing" rightIcon={<ArrowDropRight />} />
 *         <MenuItem primaryText="Numbered list" rightIcon={<ArrowDropRight />} />
 *         <MenuItem primaryText="List options" rightIcon={<ArrowDropRight />} />
 *         <Divider />
 *         <MenuItem primaryText="Clear formatting" secondaryText="&#8984;/" />
 *       </Menu>
 *     </Paper>
 *     <Paper style={style}>
 *       <Menu desktop={true} width={256}>
 *         <MenuItem primaryText="Open" secondaryText="Cmd + O" />
 *         <MenuItem primaryText="Paste in place" secondaryText="Shift + V" />
 *         <MenuItem primaryText="Research" secondaryText="Opt + Shift + Cmd + I" />
 *       </Menu>
 *     </Paper>
 *     <Paper style={style}>
 *       <Menu desktop={true} width={256}>
 *         <MenuItem primaryText="Open" secondaryText="&#8984;O" />
 *         <MenuItem primaryText="Paste in place" secondaryText="&#8679;&#8984;V" />
 *         <MenuItem primaryText="Research" secondaryText="&#8997;&#8679;&#8984;I" />
 *       </Menu>
 *     </Paper>
 *   </div>
 * );
 * 
 * export default MenuExampleSecondary;
 * 
 * 
 * @example 
 * 
 * // Cascading menus can be configured using the menuItems property of the MenuItem component.
 * 
 *
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * import Divider from 'material-ui/Divider';
 * import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
 * 
 * const style = {
 *   display: 'inline-block',
 *   margin: '16px 32px 16px 0',
 * };
 * 
 * const MenuExampleNested = () => (
 *   <div>
 *     <Paper style={style}>
 *       <Menu desktop={true} width={320}>
 *         <MenuItem primaryText="Single" insetChildren={true} />
 *         <MenuItem primaryText="1.15" insetChildren={true} />
 *         <MenuItem primaryText="Double" insetChildren={true} />
 *         <MenuItem
 *           primaryText="Custom: 1.2"
 *           checked={true}
 *           rightIcon={<ArrowDropRight />}
 *           menuItems={[
 *             <MenuItem
 *               primaryText="Show"
 *               rightIcon={<ArrowDropRight />}
 *               menuItems={[
 *                 <MenuItem primaryText="Show Level 2" />,
 *                 <MenuItem primaryText="Grid lines" checked={true} />,
 *                 <MenuItem primaryText="Page breaks" insetChildren={true} />,
 *                 <MenuItem primaryText="Rules" checked={true} />,
 *               ]}
 *             />,
 *             <MenuItem primaryText="Grid lines" checked={true} />,
 *             <MenuItem primaryText="Page breaks" insetChildren={true} />,
 *             <MenuItem primaryText="Rules" checked={true} />,
 *           ]}
 *         />
 *         <Divider />
 *         <MenuItem primaryText="Add space before paragraph" />
 *         <MenuItem primaryText="Add space after paragraph" />
 *         <Divider />
 *         <MenuItem primaryText="Custom spacing..." />
 *       </Menu>
 *     </Paper>
 *   </div>
 * );
 * 
 * export default MenuExampleNested;
 * 
 */

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu(props, context) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));

    _initialiseProps.call(_this);

    var filteredChildren = _this.getFilteredChildren(props.children);
    var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);

    var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
    if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
      props.onMenuItemFocusChange(null, newFocusIndex);
    }
    _this.state = {
      focusIndex: newFocusIndex,
      isKeyboardFocused: props.initiallyKeyboardFocused,
      keyWidth: props.desktop ? 64 : 56
    };

    _this.hotKeyHolder = new _menuUtils.HotKeyHolder();
    return _this;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
      this.setScollPosition();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var selectedIndex = void 0;
      var filteredChildren = this.getFilteredChildren(nextProps.children);

      if (this.props.multiple !== true) {
        selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
      } else {
        selectedIndex = this.state.focusIndex;
      }

      var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
      if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
        this.props.onMenuItemFocusChange(null, newFocusIndex);
      }
      this.setState({
        focusIndex: newFocusIndex,
        keyWidth: nextProps.desktop ? 64 : 56
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoWidth) this.setWidth();
    }
  }, {
    key: 'getValueLink',


    // Do not use outside of this component, it will be removed once valueLink is deprecated
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'setKeyboardFocused',
    value: function setKeyboardFocused(keyboardFocused) {
      this.setState({
        isKeyboardFocused: keyboardFocused
      });
    }
  }, {
    key: 'getFilteredChildren',
    value: function getFilteredChildren(children) {
      var filteredChildren = [];
      _react2.default.Children.forEach(children, function (child) {
        if (child) {
          filteredChildren.push(child);
        }
      });
      return filteredChildren;
    }
  }, {
    key: 'cloneMenuItem',
    value: function cloneMenuItem(child, childIndex, styles, index) {
      var _this2 = this;

      var childIsDisabled = child.props.disabled;

      var selectedChildStyles = {};
      if (!childIsDisabled) {
        var selected = this.isChildSelected(child, this.props);

        if (selected) {
          Object.assign(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
        }
      }
      var mergedChildStyles = Object.assign({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);

      var extraProps = {
        desktop: this.props.desktop,
        style: mergedChildStyles
      };
      if (!childIsDisabled) {
        var isFocused = childIndex === this.state.focusIndex;
        var focusState = 'none';
        if (isFocused) {
          focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
        }

        Object.assign(extraProps, {
          focusState: focusState,
          onClick: function onClick(event) {
            _this2.handleMenuItemTouchTap(event, child, index);
            if (child.props.onClick) child.props.onClick(event);
          },
          ref: isFocused ? 'focusedMenuItem' : null
        });
      }
      return _react2.default.cloneElement(child, extraProps);
    }
  }, {
    key: 'decrementKeyboardFocusIndex',
    value: function decrementKeyboardFocusIndex(event) {
      var index = this.state.focusIndex;

      index--;
      if (index < 0) index = 0;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'getMenuItemCount',
    value: function getMenuItemCount(filteredChildren) {
      var menuItemCount = 0;
      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';
        var childIsDisabled = child.props.disabled;
        if (!childIsADivider && !childIsDisabled) menuItemCount++;
      });
      return menuItemCount;
    }
  }, {
    key: 'getLastSelectedIndex',
    value: function getLastSelectedIndex(props, filteredChildren) {
      var _this3 = this;

      var selectedIndex = -1;
      var menuItemIndex = 0;

      filteredChildren.forEach(function (child) {
        var childIsADivider = child.type && child.type.muiName === 'Divider';

        if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
        if (!childIsADivider) menuItemIndex++;
      });

      return selectedIndex;
    }
  }, {
    key: 'setFocusIndexStartsWith',
    value: function setFocusIndexStartsWith(event, keys) {
      var foundIndex = -1;
      _react2.default.Children.forEach(this.props.children, function (child, index) {
        if (foundIndex >= 0) {
          return;
        }
        var primaryText = child.props.primaryText;

        if (typeof primaryText === 'string' && primaryText.substr(0, keys.length).toLowerCase() === keys.toLowerCase()) {
          foundIndex = index;
        }
      });
      if (foundIndex >= 0) {
        this.setFocusIndex(event, foundIndex, true);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleMenuItemTouchTap',
    value: function handleMenuItemTouchTap(event, item, index) {
      var children = this.props.children;
      var multiple = this.props.multiple;
      var valueLink = this.getValueLink(this.props);
      var menuValue = valueLink.value;
      var itemValue = item.props.value;
      var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

      this.setFocusIndex(event, focusIndex, false);

      if (multiple) {
        menuValue = menuValue || [];

        var itemIndex = menuValue.indexOf(itemValue);

        var _menuValue = menuValue,
            _menuValue2 = _toArray(_menuValue),
            newMenuValue = _menuValue2.slice(0);

        if (itemIndex === -1) {
          newMenuValue.push(itemValue);
        } else {
          newMenuValue.splice(itemIndex, 1);
        }

        valueLink.requestChange(event, newMenuValue);
      } else if (!multiple && itemValue !== menuValue) {
        valueLink.requestChange(event, itemValue);
      }

      this.props.onItemTouchTap(event, item, index);
    }
  }, {
    key: 'incrementKeyboardFocusIndex',
    value: function incrementKeyboardFocusIndex(event, filteredChildren) {
      var index = this.state.focusIndex;
      var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

      index++;
      if (index > maxIndex) index = maxIndex;

      this.setFocusIndex(event, index, true);
    }
  }, {
    key: 'isChildSelected',
    value: function isChildSelected(child, props) {
      var menuValue = this.getValueLink(props).value;
      var childValue = child.props.value;

      if (props.multiple) {
        return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
      } else {
        return child.props.hasOwnProperty('value') && menuValue === childValue;
      }
    }
  }, {
    key: 'setFocusIndex',
    value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
      if (this.props.onMenuItemFocusChange) {
        // Do this even if `newIndex === this.state.focusIndex` to allow users
        // to detect up-arrow on the first MenuItem or down-arrow on the last.
        this.props.onMenuItemFocusChange(event, newIndex);
      }
      this.setState({
        focusIndex: newIndex,
        isKeyboardFocused: isKeyboardFocused
      });
    }
  }, {
    key: 'setScollPosition',
    value: function setScollPosition() {
      var desktop = this.props.desktop;
      var focusedMenuItem = this.refs.focusedMenuItem;
      var menuItemHeight = desktop ? 32 : 48;

      if (focusedMenuItem) {
        var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

        // Make the focused item be the 2nd item in the list the user sees
        var scrollTop = selectedOffSet - menuItemHeight;
        if (scrollTop < menuItemHeight) scrollTop = 0;

        _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
      }
    }
  }, {
    key: 'cancelScrollEvent',
    value: function cancelScrollEvent(event) {
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = _reactDom2.default.findDOMNode(this);
      var listEl = _reactDom2.default.findDOMNode(this.refs.list);
      var elWidth = el.offsetWidth;
      var keyWidth = this.state.keyWidth;
      var minWidth = keyWidth * 1.5;
      var keyIncrements = elWidth / keyWidth;
      var newWidth = void 0;

      keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
      newWidth = keyIncrements * keyWidth;

      if (newWidth < minWidth) newWidth = minWidth;

      el.style.width = newWidth + 'px';
      listEl.style.width = newWidth + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          autoWidth = _props.autoWidth,
          children = _props.children,
          desktop = _props.desktop,
          disableAutoFocus = _props.disableAutoFocus,
          initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          multiple = _props.multiple,
          onItemTouchTap = _props.onItemTouchTap,
          onEscKeyDown = _props.onEscKeyDown,
          onMenuItemFocusChange = _props.onMenuItemFocusChange,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          menuItemStyle = _props.menuItemStyle,
          style = _props.style,
          value = _props.value,
          valueLink = _props.valueLink,
          width = _props.width,
          other = _objectWithoutProperties(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemTouchTap', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var mergedRootStyles = Object.assign(styles.root, style);
      var mergedListStyles = Object.assign(styles.list, listStyle);

      var filteredChildren = this.getFilteredChildren(children);

      var menuItemIndex = 0;
      var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
        var childIsDisabled = child.props.disabled;
        var childName = child.type ? child.type.muiName : '';
        var newChild = child;

        switch (childName) {
          case 'MenuItem':
            newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
            break;

          case 'Divider':
            newChild = _react2.default.cloneElement(child, {
              style: Object.assign({}, styles.divider, child.props.style)
            });
            break;
        }

        if (childName === 'MenuItem' && !childIsDisabled) {
          menuItemIndex++;
        }

        return newChild;
      });

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'div',
          {
            onKeyDown: this.handleKeyDown,
            onWheel: this.handleOnWheel,
            style: prepareStyles(mergedRootStyles),
            ref: 'scrollContainer',
            role: 'presentation'
          },
          _react2.default.createElement(
            _List2.default,
            Object.assign({}, other, {
              ref: 'list',
              style: mergedListStyles,
              role: 'menu'
            }),
            newChildren
          )
        )
      );
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  /**
   * @property {PropTypes.bool} autoWidth - If true, the width of the menu will be set automatically
   * according to the widths of its children,
   * using proper keyline increments (64px for desktop,
   * 56px otherwise).
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - The content of the menu. This is usually used to pass `MenuItem`
   * elements.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} desktop - If true, the menu item will render with compact desktop styles.
   */
  desktop: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} disableAutoFocus - If true, the menu will not be auto-focused.
   */
  disableAutoFocus: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} initiallyKeyboardFocused - If true, the menu will be keyboard-focused initially.
   */
  initiallyKeyboardFocused: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} listStyle - Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.number} maxHeight - The maximum height of the menu in pixels. If specified,
   * the menu will be scrollable if it is taller than the provided
   * height.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} menuItemStyle - Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} multiple - If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onChange - Callback function fired when a menu item with `value` not
   * equal to the current `value` of the menu is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {any}  value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onEscKeyDown - Callback function fired when the menu is focused and the *Esc* key
   * is pressed.
   *
   * @param {object} event `keydown` event targeting the menu.
   */
  onEscKeyDown: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onItemTouchTap - Callback function fired when a menu item is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the menu item.
   * @param {object} menuItem The menu item.
   * @param {number} index The index of the menu item.
   */
  onItemTouchTap: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onMenuItemFocusChange - Callback function fired when the focus on a `MenuItem` is changed.
   * There will be some "duplicate" changes reported if two different
   * focusing event happen, for example if a `MenuItem` is focused via
   * the keyboard and then it is clicked on.
   *
   * @param {object} event The event that triggered the focus change.
   * The event can be null since the focus can be changed for non-event
   * reasons such as prop changes.
   * @param {number} newFocusIndex The index of the newly focused
   * `MenuItem` or `-1` if focus was lost.
   */
  onMenuItemFocusChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} selectedMenuItemStyle - Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.any} value - If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   * This component also supports valueLink.
   */
  value: _propTypes2.default.any,
  /**
   * @property {PropTypes.object} valueLink - ValueLink for the menu's `value`.
   */
  valueLink: _propTypes2.default.object,
  /**
   * @property {PropTypes.stringOrNumber} width - The width of the menu. If not specified, the menu's width
   * will be set according to the widths of its children, using
   * proper keyline increments (64px for desktop, 56px otherwise).
   */
  width: _propTypes4.default.stringOrNumber
};
Menu.defaultProps = {
  autoWidth: true,
  desktop: false,
  disableAutoFocus: false,
  initiallyKeyboardFocused: false,
  maxHeight: null,
  multiple: false,
  onChange: function onChange() {},
  onEscKeyDown: function onEscKeyDown() {},
  onItemTouchTap: function onItemTouchTap() {},
  onKeyDown: function onKeyDown() {}
};
Menu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.handleClickAway = function (event) {
    if (event.defaultPrevented) {
      return;
    }

    var focusIndex = _this5.state.focusIndex;

    if (focusIndex < 0) {
      return;
    }

    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var focusedItem = filteredChildren[focusIndex];
    if (focusedItem.props.menuItems && focusedItem.props.menuItems.length > 0) {
      return;
    }

    _this5.setFocusIndex(event, -1, false);
  };

  this.handleKeyDown = function (event) {
    var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
    var key = (0, _keycode2.default)(event);
    switch (key) {
      case 'down':
        event.preventDefault();
        _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        break;
      case 'esc':
        _this5.props.onEscKeyDown(event);
        break;
      case 'tab':
        event.preventDefault();
        if (event.shiftKey) {
          _this5.decrementKeyboardFocusIndex(event);
        } else {
          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
        }
        break;
      case 'up':
        event.preventDefault();
        _this5.decrementKeyboardFocusIndex(event);
        break;
      default:
        if (key && key.length === 1) {
          var hotKeys = _this5.hotKeyHolder.append(key);
          if (_this5.setFocusIndexStartsWith(event, hotKeys)) {
            event.preventDefault();
          }
        }
    }
    _this5.props.onKeyDown(event);
  };

  this.handleOnWheel = function (event) {
    var scrollContainer = _this5.refs.scrollContainer;
    // Only scroll lock if the the Menu is scrollable.
    if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;

    var scrollTop = scrollContainer.scrollTop,
        scrollHeight = scrollContainer.scrollHeight,
        clientHeight = scrollContainer.clientHeight;

    var wheelDelta = event.deltaY;
    var isDeltaPositive = wheelDelta > 0;

    if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
      scrollContainer.scrollTop = scrollHeight;
      return _this5.cancelScrollEvent(event);
    } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
      scrollContainer.scrollTop = 0;
      return _this5.cancelScrollEvent(event);
    }
  };
};

exports.default = Menu;

//# sourceMappingURL=Menu.js.map