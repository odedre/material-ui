'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnackbarBody = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _withWidth = require('../utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _FlatButton = require('../FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getStyles(props, context) {
  var open = props.open,
      width = props.width;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      _context$muiTheme$bas2 = _context$muiTheme$bas.spacing,
      desktopGutter = _context$muiTheme$bas2.desktopGutter,
      desktopSubheaderHeight = _context$muiTheme$bas2.desktopSubheaderHeight,
      fontFamily = _context$muiTheme$bas.fontFamily,
      _context$muiTheme$sna = _context$muiTheme.snackbar,
      backgroundColor = _context$muiTheme$sna.backgroundColor,
      textColor = _context$muiTheme$sna.textColor,
      actionColor = _context$muiTheme$sna.actionColor,
      borderRadius = _context$muiTheme.borderRadius;


  var isSmall = width === _withWidth.SMALL;

  var styles = {
    root: {
      fontFamily: fontFamily,
      backgroundColor: backgroundColor,
      padding: '0 ' + desktopGutter + 'px',
      height: desktopSubheaderHeight,
      lineHeight: desktopSubheaderHeight + 'px',
      borderRadius: isSmall ? 0 : borderRadius,
      maxWidth: isSmall ? 'inherit' : 568,
      minWidth: isSmall ? 'inherit' : 288,
      width: isSmall ? 'calc(100vw - ' + desktopGutter * 2 + 'px)' : 'auto',
      flexGrow: isSmall ? 1 : 0
    },
    content: {
      fontSize: 14,
      color: textColor,
      opacity: open ? 1 : 0,
      transition: open ? _transitions2.default.easeOut('500ms', 'opacity', '100ms') : _transitions2.default.easeOut('400ms', 'opacity')
    },
    action: {
      color: actionColor,
      float: 'right',
      marginTop: 6,
      marginRight: -16,
      marginLeft: desktopGutter,
      backgroundColor: 'transparent'
    }
  };

  return styles;
}

var SnackbarBody = function SnackbarBody(props, context) {
  var action = props.action,
      contentStyle = props.contentStyle,
      message = props.message,
      open = props.open,
      onActionTouchTap = props.onActionTouchTap,
      style = props.style,
      other = _objectWithoutProperties(props, ['action', 'contentStyle', 'message', 'open', 'onActionTouchTap', 'style']);

  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var actionButton = action && _react2.default.createElement(_FlatButton2.default, {
    style: styles.action,
    label: action,
    onClick: onActionTouchTap
  });

  return _react2.default.createElement(
    'div',
    Object.assign({}, other, { style: prepareStyles(Object.assign(styles.root, style)) }),
    _react2.default.createElement(
      'div',
      { style: prepareStyles(Object.assign(styles.content, contentStyle)) },
      _react2.default.createElement(
        'span',
        null,
        message
      ),
      actionButton
    )
  );
};

exports.SnackbarBody = SnackbarBody;
SnackbarBody.propTypes = {
  /**
   * @property {PropTypes.node} action - The label for the action on the snackbar.
   */
  action: _propTypes2.default.node,
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
   * @ignore
   * Controls whether the `Snackbar` is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   * Width of the screen.
   */
  width: _propTypes2.default.number.isRequired
};

SnackbarBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = (0, _withWidth2.default)()(SnackbarBody);

//# sourceMappingURL=SnackbarBody.js.map