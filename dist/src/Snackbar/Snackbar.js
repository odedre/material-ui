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

var _ClickAwayListener = require('../internal/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _SnackbarBody = require('./SnackbarBody');

var _SnackbarBody2 = _interopRequireDefault(_SnackbarBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      desktopSubheaderHeight = _context$muiTheme.baseTheme.spacing.desktopSubheaderHeight,
      zIndex = _context$muiTheme.zIndex;
  var open = state.open;


  var styles = {
    root: {
      position: 'fixed',
      left: '50%',
      display: 'flex',
      bottom: 0,
      zIndex: zIndex.snackbar,
      visibility: open ? 'visible' : 'hidden',
      transform: open ? 'translate(-50%, 0)' : 'translate(-50%, ' + desktopSubheaderHeight + 'px)',
      transition: _transitions2.default.easeOut('400ms', 'transform') + ', ' + _transitions2.default.easeOut('400ms', 'visibility')
    }
  };

  return styles;
}

/**
 * @description 
 * 
 * Snackbars provide lightweight feedback about an operation by showing a brief message at the bottom of the screen. Snackbars can contain an action.
 * Also see http://www.material-ui.com/#/components/snackbar
 * 
 * @example
 * 
 * // Snackbar is a controlled component, and is displayed when open is true. Click away from the Snackbar to close it, or wait for autoHideDuration to expire.
 * 
 * import React from 'react';
 * import Snackbar from 'material-ui/Snackbar';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class SnackbarExampleSimple extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = () => {
 *     this.setState({
 *       open: true,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Add to my calendar"
 *         />
 *         <Snackbar
 *           open={this.state.open}
 *           message="Event added to your calendar"
 *           autoHideDuration={4000}
 *           onRequestClose={this.handleRequestClose}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // A single action can be added to the Snackbar, and triggers onActionTouchTap. Edit the textfield to change autoHideDuration
 * 
 * import React from 'react';
 * import Snackbar from 'material-ui/Snackbar';
 * import TextField from 'material-ui/TextField';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class SnackbarExampleSimple extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       autoHideDuration: 4000,
 *       message: 'Event added to your calendar',
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = () => {
 *     this.setState({
 *       open: true,
 *     });
 *   };
 * 
 *   handleActionTouchTap = () => {
 *     this.setState({
 *       open: false,
 *     });
 *     alert('Event removed from your calendar.');
 *   };
 * 
 *   handleChangeDuration = (event) => {
 *     const value = event.target.value;
 *     this.setState({
 *       autoHideDuration: value.length > 0 ? parseInt(value) : 0,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Add to my calendar"
 *         />
 *         <br />
 *         <TextField
 *           floatingLabelText="Auto Hide Duration in ms"
 *           value={this.state.autoHideDuration}
 *           onChange={this.handleChangeDuration}
 *         />
 *         <Snackbar
 *           open={this.state.open}
 *           message={this.state.message}
 *           action="undo"
 *           autoHideDuration={this.state.autoHideDuration}
 *           onActionTouchTap={this.handleActionTouchTap}
 *           onRequestClose={this.handleRequestClose}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Changing message causes the Snackbar to animate - it isn't necessary to close and reopen the Snackbar with the open prop.
 * 
 *
 * import React from 'react';
 * import Snackbar from 'material-ui/Snackbar';
 * import RaisedButton from 'material-ui/RaisedButton';
 * 
 * export default class SnackbarExampleTwice extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       message: 'Event 1 added to your calendar',
 *       open: false,
 *     };
 *     this.timer = undefined;
 *   }
 * 
 *   componentWillUnMount() {
 *     clearTimeout(this.timer);
 *   }
 * 
 *   handleTouchTap = () => {
 *     this.setState({
 *       open: true,
 *     });
 * 
 *     this.timer = setTimeout(() => {
 *       this.setState({
 *         message: `Event ${Math.round(Math.random() * 100)} added to your calendar`,
 *       });
 *     }, 1500);
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Add to my calendar two times"
 *         />
 *         <Snackbar
 *           open={this.state.open}
 *           message={this.state.message}
 *           action="undo"
 *           autoHideDuration={3000}
 *           onRequestClose={this.handleRequestClose}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 */

var Snackbar = function (_Component) {
  _inherits(Snackbar, _Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.componentClickAway = function () {
      if (_this.timerTransitionId) {
        // If transitioning, don't close the snackbar.
        return;
      }

      if (_this.props.open !== null && _this.props.onRequestClose) {
        _this.props.onRequestClose('clickaway');
      } else {
        _this.setState({ open: false });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Snackbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        open: this.props.open,
        message: this.props.message,
        action: this.props.action
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.open) {
        this.setAutoHideTimer();
        this.setTransitionTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.open && nextProps.open && (nextProps.message !== this.props.message || nextProps.action !== this.props.action)) {
        this.setState({
          open: false
        });

        clearTimeout(this.timerOneAtTheTimeId);
        this.timerOneAtTheTimeId = setTimeout(function () {
          _this2.setState({
            message: nextProps.message,
            action: nextProps.action,
            open: true
          });
        }, 400);
      } else {
        var open = nextProps.open;

        this.setState({
          open: open !== null ? open : this.state.open,
          message: nextProps.message,
          action: nextProps.action
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.open !== this.state.open) {
        if (this.state.open) {
          this.setAutoHideTimer();
          this.setTransitionTimer();
        } else {
          clearTimeout(this.timerAutoHideId);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHideId);
      clearTimeout(this.timerTransitionId);
      clearTimeout(this.timerOneAtTheTimeId);
    }
  }, {
    key: 'setAutoHideTimer',


    // Timer that controls delay before snackbar auto hides
    value: function setAutoHideTimer() {
      var _this3 = this;

      var autoHideDuration = this.props.autoHideDuration;

      if (autoHideDuration > 0) {
        clearTimeout(this.timerAutoHideId);
        this.timerAutoHideId = setTimeout(function () {
          if (_this3.props.open !== null && _this3.props.onRequestClose) {
            _this3.props.onRequestClose('timeout');
          } else {
            _this3.setState({ open: false });
          }
        }, autoHideDuration);
      }
    }

    // Timer that controls delay before click-away events are captured (based on when animation completes)

  }, {
    key: 'setTransitionTimer',
    value: function setTransitionTimer() {
      var _this4 = this;

      this.timerTransitionId = setTimeout(function () {
        _this4.timerTransitionId = undefined;
      }, 400);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoHideDuration = _props.autoHideDuration,
          contentStyle = _props.contentStyle,
          bodyStyle = _props.bodyStyle,
          messageProp = _props.message,
          onRequestClose = _props.onRequestClose,
          onActionTouchTap = _props.onActionTouchTap,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['autoHideDuration', 'contentStyle', 'bodyStyle', 'message', 'onRequestClose', 'onActionTouchTap', 'style']);

      var _state = this.state,
          action = _state.action,
          message = _state.message,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: open ? this.componentClickAway : null },
        _react2.default.createElement(
          'div',
          Object.assign({}, other, { style: prepareStyles(Object.assign(styles.root, style)) }),
          _react2.default.createElement(_SnackbarBody2.default, {
            action: action,
            contentStyle: contentStyle,
            message: message,
            open: open,
            onActionTouchTap: onActionTouchTap,
            style: bodyStyle
          })
        )
      );
    }
  }]);

  return Snackbar;
}(_react.Component);

Snackbar.propTypes = {
  /**
   * @property {PropTypes.node} action - The label for the action on the snackbar.
   */
  action: _propTypes2.default.node,
  /**
   * @property {PropTypes.number} autoHideDuration - The number of milliseconds to wait before automatically dismissing.
   * If no value is specified the snackbar will dismiss normally.
   * If a value is provided the snackbar can still be dismissed normally.
   * If a snackbar is dismissed before the timer expires, the timer will be cleared.
   */
  autoHideDuration: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} bodyStyle - Override the inline-styles of the body element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} contentStyle - Override the inline-styles of the content element.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node.isRequired} message - The message to be displayed.
   *
   * (Note: If the message is an element or array, and the `Snackbar` may re-render while it is still open,
   * ensure that the same object remains as the `message` property if you want to avoid the `Snackbar` hiding and
   * showing again)
   */
  message: _propTypes2.default.node.isRequired,
  /**
   * @property {PropTypes.func} onActionTouchTap - Fired when the action button is touchtapped.
   *
   * @param {object} event Action button event.
   */
  onActionTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRequestClose - Fired when the `Snackbar` is requested to be closed by a click outside the `Snackbar`, or after the
   * `autoHideDuration` timer expires.
   *
   * Typically `onRequestClose` is used to set state in the parent component, which is used to control the `Snackbar`
   * `open` prop.
   *
   * The `reason` parameter can optionally be used to control the response to `onRequestClose`,
   * for example ignoring `clickaway`.
   *
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool.isRequired} open - Controls whether the `Snackbar` is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
Snackbar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Snackbar;

//# sourceMappingURL=Snackbar.js.map