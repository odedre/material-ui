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

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = require('../internal/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RenderToLayer = require('../internal/RenderToLayer');

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransitionItem = function (_Component) {
  _inherits(TransitionItem, _Component);

  function TransitionItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TransitionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TransitionItem.__proto__ || Object.getPrototypeOf(TransitionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      style: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TransitionItem, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimeout);
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.componentWillAppear(callback);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      var spacing = this.context.muiTheme.baseTheme.spacing;

      this.setState({
        style: {
          opacity: 1,
          transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
        }
      });

      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      this.setState({
        style: {
          opacity: 0,
          transform: 'translate(0, 0)'
        }
      });

      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          other = _objectWithoutProperties(_props, ['style', 'children']);

      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        'div',
        Object.assign({}, other, { style: prepareStyles(Object.assign({}, this.state.style, style)) }),
        children
      );
    }
  }]);

  return TransitionItem;
}(_react.Component);

TransitionItem.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object
};
TransitionItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};


function getStyles(props, context) {
  var autoScrollBodyContent = props.autoScrollBodyContent,
      open = props.open;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      spacing = _context$muiTheme$bas.spacing,
      palette = _context$muiTheme$bas.palette,
      dialog = _context$muiTheme.dialog,
      zIndex = _context$muiTheme.zIndex;


  var gutter = spacing.desktopGutter;
  var borderScroll = '1px solid ' + palette.borderColor;

  return {
    root: {
      position: 'fixed',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: '100%',
      height: '100%',
      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
    },
    content: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      transition: _transitions2.default.easeOut(),
      position: 'relative',
      width: '75%',
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: '0 auto',
      zIndex: zIndex.dialog
    },
    actionsContainer: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 8,
      width: '100%',
      textAlign: 'right',
      marginTop: autoScrollBodyContent ? -1 : 0
    },
    overlay: {
      zIndex: zIndex.dialogOverlay
    },
    title: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: '32px',
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
      boxSizing: 'border-box',
      overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
      borderTop: autoScrollBodyContent ? borderScroll : 'none',
      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
    }
  };
}

var DialogInline = function (_Component2) {
  _inherits(DialogInline, _Component2);

  function DialogInline() {
    var _ref2;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, DialogInline);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = DialogInline.__proto__ || Object.getPrototypeOf(DialogInline)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
      _this2.requestClose(false);
    }, _this2.handleKeyUp = function (event) {
      if ((0, _keycode2.default)(event) === 'esc') {
        _this2.requestClose(false);
      }
    }, _this2.handleResize = function () {
      _this2.positionDialog();
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(DialogInline, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.positionDialog();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.positionDialog();
    }
  }, {
    key: 'positionDialog',
    value: function positionDialog() {
      var _props2 = this.props,
          actions = _props2.actions,
          autoDetectWindowHeight = _props2.autoDetectWindowHeight,
          autoScrollBodyContent = _props2.autoScrollBodyContent,
          bodyStyle = _props2.bodyStyle,
          open = _props2.open,
          repositionOnUpdate = _props2.repositionOnUpdate,
          title = _props2.title;


      if (!open) {
        return;
      }

      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var container = _reactDom2.default.findDOMNode(this);
      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
      var minPaddingTop = 16;

      // Reset the height in case the window was resized.
      dialogWindow.style.height = '';
      dialogContent.style.height = '';

      var dialogWindowHeight = dialogWindow.offsetHeight;
      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

      // Vertically center the dialog window, but make sure it doesn't
      // transition to that position.
      if (repositionOnUpdate || !container.style.paddingTop) {
        container.style.paddingTop = paddingTop + 'px';
      }

      // Force a height if the dialog is taller than clientHeight
      if (autoDetectWindowHeight || autoScrollBodyContent) {
        var styles = getStyles(this.props, this.context);
        styles.body = Object.assign(styles.body, bodyStyle);
        var maxDialogContentHeight = clientHeight - 2 * 64;

        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

        if (_react2.default.Children.count(actions)) {
          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
        }

        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
        if (maxDialogContentHeight > dialogWindowHeight) {
          dialogContent.style.borderBottom = 'none';
          dialogContent.style.borderTop = 'none';
        }
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(buttonClicked) {
      if (!buttonClicked && this.props.modal) {
        return;
      }

      if (this.props.onRequestClose) {
        this.props.onRequestClose(!!buttonClicked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          actions = _props3.actions,
          actionsContainerClassName = _props3.actionsContainerClassName,
          actionsContainerStyle = _props3.actionsContainerStyle,
          bodyClassName = _props3.bodyClassName,
          bodyStyle = _props3.bodyStyle,
          children = _props3.children,
          className = _props3.className,
          contentClassName = _props3.contentClassName,
          contentStyle = _props3.contentStyle,
          overlayClassName = _props3.overlayClassName,
          overlayStyle = _props3.overlayStyle,
          open = _props3.open,
          paperClassName = _props3.paperClassName,
          paperProps = _props3.paperProps,
          style = _props3.style,
          titleClassName = _props3.titleClassName,
          titleStyle = _props3.titleStyle,
          title = _props3.title;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      styles.root = Object.assign(styles.root, style);
      styles.content = Object.assign(styles.content, contentStyle);
      styles.body = Object.assign(styles.body, bodyStyle);
      styles.actionsContainer = Object.assign(styles.actionsContainer, actionsContainerStyle);
      styles.overlay = Object.assign(styles.overlay, overlayStyle);
      styles.title = Object.assign(styles.title, titleStyle);

      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
        'div',
        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
        _react2.default.Children.toArray(actions)
      );

      var titleElement = title;
      if (_react2.default.isValidElement(title)) {
        titleElement = _react2.default.cloneElement(title, {
          className: title.props.className || titleClassName,
          style: prepareStyles(Object.assign(styles.title, title.props.style))
        });
      } else if (typeof title === 'string') {
        titleElement = _react2.default.createElement(
          'h3',
          { className: titleClassName, style: prepareStyles(styles.title) },
          title
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className, style: prepareStyles(styles.root) },
        open && _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyUp: this.handleKeyUp,
          onResize: this.handleResize
        }),
        _react2.default.createElement(
          _TransitionGroup2.default,
          {
            component: 'div',
            ref: 'dialogWindow',
            transitionAppear: true,
            transitionAppearTimeout: 450,
            transitionEnter: true,
            transitionEnterTimeout: 450
          },
          open && _react2.default.createElement(
            TransitionItem,
            {
              className: contentClassName,
              style: styles.content
            },
            _react2.default.createElement(
              _Paper2.default,
              Object.assign({ className: paperClassName, zDepth: 4 }, paperProps),
              titleElement,
              _react2.default.createElement(
                'div',
                {
                  ref: 'dialogContent',
                  className: bodyClassName,
                  style: prepareStyles(styles.body)
                },
                children
              ),
              actionsContainer
            )
          )
        ),
        _react2.default.createElement(_Overlay2.default, {
          show: open,
          className: overlayClassName,
          style: styles.overlay,
          onClick: this.handleTouchTapOverlay
        })
      );
    }
  }]);

  return DialogInline;
}(_react.Component);

/**
 * @description Dialogs contain text and UI controls focused on a specific task. They inform users about critical information, require users to make decisions, or involve multiple tasks.
 * Also see https://www.google.com/design/spec/components/dialogs.html
 * 
 * Dialog can only be a controlled component. You must provide the open prop and handle onRequestClose in order to use this component.
 * 
 * @example  
 * // Dialog with action buttons. The actions are passed in as an array of React objects, in this example FlatButtons.
 * 
 * // You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 * 
 * // For more info on FlatButtons, go to https://bitsrc.io/materialui/react-material-ui/buttons/flat-button
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class DialogExampleSimple extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         keyboardFocused={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Dialog" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Actions"
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *         >
 *           The actions in this window were passed in as an array of React objects.
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example
 *  
 * // A modal dialog can only be closed by selecting one of the actions.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class DialogExampleModal extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         disabled={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Actions"
 *           actions={actions}
 *           modal={true}
 *           open={this.state.open}
 *         >
 *           Only actions can close this dialog.
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // The dialog width has been set to occupy the full width of browser through the `contentStyle` property.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * const customContentStyle = {
 *   width: '100%',
 *   maxWidth: 'none',
 * };
 * 
 * export default class DialogExampleCustomWidth extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Custom Width"
 *           actions={actions}
 *           modal={true}
 *           contentStyle={customContentStyle}
 *           open={this.state.open}
 *         >
 *           This dialog spans the entire width of the screen.
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * export default class DialogExampleDialogDatePicker extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Ok"
 *         primary={true}
 *         keyboardFocused={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Dialog With Date Picker"
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *         >
 *           Open a Date Picker dialog from within a dialog.
 *           <DatePicker hintText="Date Picker" />
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Dialog content can be scrollable.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
 * 
 * const styles = {
 *   radioButton: {
 *     marginTop: 16,
 *   },
 * };
 * 
 * export default class DialogExampleScrollable extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Submit"
 *         primary={true}
 *         keyboardFocused={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     const radios = [];
 *     for (let i = 0; i < 30; i++) {
 *       radios.push(
 *         <RadioButton
 *           key={i}
 *           value={`value${i + 1}`}
 *           label={`Option ${i + 1}`}
 *           style={styles.radioButton}
 *         />
 *       );
 *     }
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
 *         <Dialog
 *           title="Scrollable Dialog"
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *           autoScrollBodyContent={true}
 *         >
 *           <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
 *             {radios}
 *           </RadioButtonGroup>
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * 
 * @example 
 * // Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 * 
 * import React from 'react';
 * import Dialog from 'material-ui/Dialog';
 * import FlatButton from 'material-ui/FlatButton';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class DialogExampleAlert extends React.Component {
 *   state = {
 *     open: false,
 *   };
 * 
 *   handleOpen = () => {
 *     this.setState({open: true});
 *   };
 * 
 *   handleClose = () => {
 *     this.setState({open: false});
 *   };
 * 
 *   render() {
 *     const actions = [
 *       <FlatButton
 *         label="Cancel"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *       <FlatButton
 *         label="Discard"
 *         primary={true}
 *         onClick={this.handleClose}
 *       />,
 *     ];
 * 
 *     return (
 *       <div>
 *         <RaisedButton label="Alert" onClick={this.handleOpen} />
 *         <Dialog
 *           actions={actions}
 *           modal={false}
 *           open={this.state.open}
 *           onRequestClose={this.handleClose}
 *         >
 *           Discard draft?
 *         </Dialog>
 *       </div>
 *     );
 *   }
 * }
 * 
 */


DialogInline.propTypes = {
  actions: _propTypes2.default.node,
  actionsContainerClassName: _propTypes2.default.string,
  actionsContainerStyle: _propTypes2.default.object,
  autoDetectWindowHeight: _propTypes2.default.bool,
  autoScrollBodyContent: _propTypes2.default.bool,
  bodyClassName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  modal: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  paperClassName: _propTypes2.default.string,
  paperProps: _propTypes2.default.object,
  repositionOnUpdate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  titleClassName: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object
};
DialogInline.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

var Dialog = function (_Component3) {
  _inherits(Dialog, _Component3);

  function Dialog() {
    var _ref3;

    var _temp3, _this3, _ret3;

    _classCallCheck(this, Dialog);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref3, [this].concat(args))), _this3), _this3.renderLayer = function () {
      return _react2.default.createElement(DialogInline, _this3.props);
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
    }
  }]);

  return Dialog;
}(_react.Component);

Dialog.propTypes = {
  /**
   * @property {PropTypes.node} actions - Action buttons to display below the Dialog content (`children`).
   * This property accepts either a React element, or an array of React elements.
   */
  actions: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} actionsContainerClassName - The `className` to add to the actions container's root element.
   */
  actionsContainerClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} actionsContainerStyle - Overrides the inline-styles of the actions container's root element.
   */
  actionsContainerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} autoDetectWindowHeight - If set to true, the height of the `Dialog` will be auto detected. A max height
   * will be enforced so that the content does not extend beyond the viewport.
   */
  autoDetectWindowHeight: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} autoScrollBodyContent - If set to true, the body content of the `Dialog` will be scrollable.
   */
  autoScrollBodyContent: _propTypes2.default.bool,
  /**
   * @property {PropTypes.string} bodyClassName - The `className` to add to the content's root element under the title.
   */
  bodyClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} bodyStyle - Overrides the inline-styles of the content's root element under the title.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} containerStyle - The contents of the `Dialog`.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} contentClassName - The `className` to add to the content container.
   */
  contentClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} contentStyle - Overrides the inline-styles of the content container.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} modal - Force the user to use one of the actions in the `Dialog`.
   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
   */
  modal: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onRequestClose - Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
   *
   * @param {bool} buttonClicked Determines whether a button click triggered this request.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool.isRequired} open - Controls whether the Dialog is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * @property {PropTypes.string} overlayClassName - The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} overlayStyle - Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} paperClassName - The CSS class name of the `Paper` element.
   */
  paperClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} paperProps - Properties applied to the `Paper` element.
   */
  paperProps: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} repositionOnUpdate - Determines whether the `Dialog` should be repositioned when it's contents are updated.
   */
  repositionOnUpdate: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} title - The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
   */
  title: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} titleClassName - The `className` to add to the title's root container element.
   */
  titleClassName: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} titleStyle - Overrides the inline-styles of the title's root container element.
   */
  titleStyle: _propTypes2.default.object
};
Dialog.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Dialog.defaultProps = {
  autoDetectWindowHeight: true,
  autoScrollBodyContent: false,
  modal: false,
  repositionOnUpdate: true
};
exports.default = Dialog;

//# sourceMappingURL=Dialog.js.map