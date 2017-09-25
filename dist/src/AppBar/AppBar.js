'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getStyles = getStyles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _menu = require('../svg-icons/navigation/menu');

var _menu2 = _interopRequireDefault(_menu);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description React App Bar, formerly known as the action bar in Android, is a special kind of toolbar that’s used for branding, navigation, search, and actions.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Also see http://www.material-ui.com/#/components/app-bar.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * //A simple example of `AppBar` with an icon on the right. By default, the left icon is a navigation-menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AppBar from 'material-ui/AppBar';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // A simple example of `AppBar` with an icon on the right.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // By default, the left icon is a navigation-menu.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const AppBarExampleIcon = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  <AppBar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    title="Title"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    iconClassNameRight="muidocs-icon-navigation-expand-more"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default AppBarExampleIcon;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // This example uses an IconButton on the left, has a clickable title through the onClick property, and a FlatButton on the right.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // For further info about IconButton, refer to https://bitsrc.io/materialui/react-material-ui/buttons/icon-button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AppBar from 'material-ui/AppBar';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import IconButton from 'material-ui/IconButton';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import NavigationClose from 'material-ui/svg-icons/navigation/close';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import FlatButton from 'material-ui/FlatButton';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * function handleTouchTap() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   alert('onClick triggered on the title component');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const styles = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   title: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     cursor: 'pointer',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // This example uses an IconButton on the left, has a clickable `title`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // through the `onClick` property, and a FlatButton(/#/components/flat-button) on the right.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // For further info about FlatButton, refer to https://bitsrc.io/materialui/react-material-ui/buttons/flat-button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const AppBarExampleIconButton = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   <AppBar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     title={<span style={styles.title}>Title</span>}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     onTitleTouchTap={handleTouchTap}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     iconElementRight={<FlatButton label="Save" />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default AppBarExampleIconButton;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // This example is taking advantage of the composability of the `AppBar` to render different components depending on the application state.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React, {Component} from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AppBar from 'material-ui/AppBar';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import IconButton from 'material-ui/IconButton';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import IconMenu from 'material-ui/IconMenu';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import MenuItem from 'material-ui/MenuItem';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import FlatButton from 'material-ui/FlatButton';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import Toggle from 'material-ui/Toggle';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import NavigationClose from 'material-ui/svg-icons/navigation/close';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class Login extends Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   static muiName = 'FlatButton';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   render() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <FlatButton {...this.props} label="Login" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const Logged = (props) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   <IconMenu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     {...props}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     iconButtonElement={
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <IconButton><MoreVertIcon /></IconButton>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <MenuItem primaryText="Refresh" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <MenuItem primaryText="Help" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <MenuItem primaryText="Sign out" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   </IconMenu>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Logged.muiName = 'IconMenu';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // This example is taking advantage of the composability of the `AppBar`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // to render different components depending on the application state.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * class AppBarExampleComposition extends Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   state = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     logged: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   handleChange = (event, logged) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     this.setState({logged: logged});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   render() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <Toggle
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           label="Logged"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           defaultToggled={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           onToggle={this.handleChange}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           labelPosition="right"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           style={{margin: 20}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <AppBar
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           title="Title"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           iconElementRight={this.state.logged ? <Logged /> : <Login />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default AppBarExampleComposition;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      appBar = _context$muiTheme.appBar,
      iconButtonSize = _context$muiTheme.button.iconButtonSize,
      zIndex = _context$muiTheme.zIndex;


  var flatButtonSize = 36;

  var styles = {
    root: {
      position: 'relative',
      zIndex: zIndex.appBar,
      width: '100%',
      display: 'flex',
      backgroundColor: appBar.color,
      paddingLeft: appBar.padding,
      paddingRight: appBar.padding
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      height: appBar.height,
      lineHeight: appBar.height + 'px'
    },
    mainElement: {
      boxFlex: 1,
      flex: '1'
    },
    iconButtonStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: -16
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor
    },
    flatButton: {
      color: appBar.textColor,
      marginTop: (iconButtonSize - flatButtonSize) / 2 + 1
    }
  };

  return styles;
}

var AppBar = function (_Component) {
  _inherits(AppBar, _Component);

  function AppBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppBar.__proto__ || Object.getPrototypeOf(AppBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapLeftIconButton = function (event) {
      if (_this.props.onLeftIconButtonTouchTap) {
        _this.props.onLeftIconButtonTouchTap(event);
      }
    }, _this.handleTouchTapRightIconButton = function (event) {
      if (_this.props.onRightIconButtonTouchTap) {
        _this.props.onRightIconButtonTouchTap(event);
      }
    }, _this.handleTitleTouchTap = function (event) {
      if (_this.props.onTitleTouchTap) {
        _this.props.onTitleTouchTap(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _warning2.default)(!this.props.iconElementLeft || !this.props.iconClassNameLeft, 'Material-UI: Properties iconElementLeft\n      and iconClassNameLeft cannot be simultaneously defined. Please use one or the other.');

      (0, _warning2.default)(!this.props.iconElementRight || !this.props.iconClassNameRight, 'Material-UI: Properties iconElementRight\n      and iconClassNameRight cannot be simultaneously defined. Please use one or the other.');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          titleStyle = _props.titleStyle,
          iconStyleLeft = _props.iconStyleLeft,
          iconStyleRight = _props.iconStyleRight,
          onTitleTouchTap = _props.onTitleTouchTap,
          showMenuIconButton = _props.showMenuIconButton,
          iconElementLeft = _props.iconElementLeft,
          iconElementRight = _props.iconElementRight,
          iconClassNameLeft = _props.iconClassNameLeft,
          iconClassNameRight = _props.iconClassNameRight,
          onLeftIconButtonTouchTap = _props.onLeftIconButtonTouchTap,
          onRightIconButtonTouchTap = _props.onRightIconButtonTouchTap,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth,
          children = _props.children,
          other = _objectWithoutProperties(_props, ['title', 'titleStyle', 'iconStyleLeft', 'iconStyleRight', 'onTitleTouchTap', 'showMenuIconButton', 'iconElementLeft', 'iconElementRight', 'iconClassNameLeft', 'iconClassNameRight', 'onLeftIconButtonTouchTap', 'onRightIconButtonTouchTap', 'className', 'style', 'zDepth', 'children']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var menuElementLeft = void 0;
      var menuElementRight = void 0;

      // If the title is a string, wrap in an h1 tag.
      // If not, wrap in a div tag.
      var titleComponent = typeof title === 'string' || title instanceof String ? 'h1' : 'div';

      var titleElement = _react2.default.createElement(titleComponent, {
        onClick: this.handleTitleTouchTap,
        style: prepareStyles(Object.assign(styles.title, styles.mainElement, titleStyle))
      }, title);

      var iconLeftStyle = Object.assign({}, styles.iconButtonStyle, iconStyleLeft);

      if (showMenuIconButton) {
        if (iconElementLeft) {
          var iconElementLeftProps = {};

          if (iconElementLeft.type.muiName === 'IconButton') {
            var iconElemLeftChildren = iconElementLeft.props.children;
            var iconButtonIconStyle = !(iconElemLeftChildren && iconElemLeftChildren.props && iconElemLeftChildren.props.color) ? styles.iconButtonIconStyle : null;

            iconElementLeftProps.iconStyle = Object.assign({}, iconButtonIconStyle, iconElementLeft.props.iconStyle);
          }

          if (!iconElementLeft.props.onClick && this.props.onLeftIconButtonTouchTap) {
            iconElementLeftProps.onClick = this.handleTouchTapLeftIconButton;
          }

          menuElementLeft = _react2.default.createElement(
            'div',
            { style: prepareStyles(iconLeftStyle) },
            Object.keys(iconElementLeftProps).length > 0 ? (0, _react.cloneElement)(iconElementLeft, iconElementLeftProps) : iconElementLeft
          );
        } else {
          menuElementLeft = _react2.default.createElement(
            _IconButton2.default,
            {
              style: iconLeftStyle,
              iconStyle: styles.iconButtonIconStyle,
              iconClassName: iconClassNameLeft,
              onClick: this.handleTouchTapLeftIconButton
            },
            iconClassNameLeft ? '' : _react2.default.createElement(_menu2.default, { style: Object.assign({}, styles.iconButtonIconStyle) })
          );
        }
      }

      var iconRightStyle = Object.assign({}, styles.iconButtonStyle, {
        marginRight: -16,
        marginLeft: 'auto'
      }, iconStyleRight);

      if (iconElementRight) {
        var iconElementRightProps = {};

        switch (iconElementRight.type.muiName) {
          case 'IconMenu':
          case 'IconButton':
            var iconElemRightChildren = iconElementRight.props.children;
            var _iconButtonIconStyle = !(iconElemRightChildren && iconElemRightChildren.props && iconElemRightChildren.props.color) ? styles.iconButtonIconStyle : null;

            iconElementRightProps.iconStyle = Object.assign({}, _iconButtonIconStyle, iconElementRight.props.iconStyle);
            break;

          case 'FlatButton':
            iconElementRightProps.style = Object.assign({}, styles.flatButton, iconElementRight.props.style);
            break;

          default:
        }

        if (!iconElementRight.props.onClick && this.props.onRightIconButtonTouchTap) {
          iconElementRightProps.onClick = this.handleTouchTapRightIconButton;
        }

        menuElementRight = _react2.default.createElement(
          'div',
          { style: prepareStyles(iconRightStyle) },
          Object.keys(iconElementRightProps).length > 0 ? (0, _react.cloneElement)(iconElementRight, iconElementRightProps) : iconElementRight
        );
      } else if (iconClassNameRight) {
        menuElementRight = _react2.default.createElement(_IconButton2.default, {
          style: iconRightStyle,
          iconStyle: styles.iconButtonIconStyle,
          iconClassName: iconClassNameRight,
          onClick: this.handleTouchTapRightIconButton
        });
      }

      return _react2.default.createElement(
        _Paper2.default,
        Object.assign({}, other, {
          rounded: false,
          className: className,
          style: Object.assign({}, styles.root, style),
          zDepth: zDepth
        }),
        menuElementLeft,
        titleElement,
        menuElementRight,
        children
      );
    }
  }]);

  return AppBar;
}(_react.Component);

AppBar.muiName = 'AppBar';
AppBar.propTypes = {
  /**
   * @property {PropTypes.node} children - Can be used to render a tab inside an app bar for instance.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - Applied to the app bar's root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} iconClassNameLeft - The classname of the icon on the left of the app bar.
   * If you are using a stylesheet for your icons, enter the class name for the icon to be used here.
   */
  iconClassNameLeft: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} iconClassNameRight - Similiar to the iconClassNameLeft prop except that
   * it applies to the icon displayed on the right of the app bar.
   */
  iconClassNameRight: _propTypes2.default.string,
  /**
   * @property {PropTypes.element} iconElementLeft - The custom element to be displayed on the left side of the
   * app bar such as an SvgIcon.
   */
  iconElementLeft: _propTypes2.default.element,
  /**
   * @property {PropTypes.element} iconElementRight - Similiar to the iconElementLeft prop except that this element is displayed on the right of the app bar.
   */
  iconElementRight: _propTypes2.default.element,
  /**
   * @property {PropTypes.object} iconStyleLeft - Override the inline-styles of the element displayed on the left side of the app bar.
   */
  iconStyleLeft: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} iconStyleRight - Override the inline-styles of the element displayed on the right side of the app bar.
   */
  iconStyleRight: _propTypes2.default.object,
  /**
   * @property {PropTypes.func} onLeftIconButtonTouchTap - Callback function for when the left icon is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the left `IconButton`.
   */
  onLeftIconButtonTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRightIconButtonTouchTap - Callback function for when the right icon is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the right `IconButton`.
   */
  onRightIconButtonTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onTitleTouchTap - Callback function for when the title text is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the `title` node.
   */
  onTitleTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} showMenuIconButton - Determines whether or not to display the Menu icon next to the title.
   * Setting this prop to false will hide the icon.
   */
  showMenuIconButton: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} title - The title to display on the app bar.
   */
  title: _propTypes2.default.node,
  /**
   * @property {PropTypes.object} titleStyle - Override the inline-styles of the app bar's title element.
   */
  titleStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.zDepth} zDepth - The zDepth of the component.
   * The shadow of the app bar is also dependent on this property.
   */
  zDepth: _propTypes4.default.zDepth
};
AppBar.defaultProps = {
  showMenuIconButton: true,
  title: '',
  zDepth: 1
};
AppBar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = AppBar;

//# sourceMappingURL=AppBar.js.map