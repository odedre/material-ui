'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var primary = props.primary,
      secondary = props.secondary;
  var badge = context.muiTheme.badge;


  var badgeBackgroundColor = void 0;
  var badgeTextColor = void 0;

  if (primary) {
    badgeBackgroundColor = badge.primaryColor;
    badgeTextColor = badge.primaryTextColor;
  } else if (secondary) {
    badgeBackgroundColor = badge.secondaryColor;
    badgeTextColor = badge.secondaryTextColor;
  } else {
    badgeBackgroundColor = badge.color;
    badgeTextColor = badge.textColor;
  }

  var radius = 12;
  var radius2x = Math.floor(2 * radius);

  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      padding: radius2x + 'px ' + radius2x + 'px ' + radius + 'px ' + radius + 'px'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      fontWeight: badge.fontWeight,
      fontSize: radius,
      width: radius2x,
      height: radius2x,
      borderRadius: '50%',
      backgroundColor: badgeBackgroundColor,
      color: badgeTextColor
    }
  };
}

/**
 * @description This component generates a small badge to the top-right of its child(ren).
 * Also see http://www.material-ui.com/#/components/badge
 * 
 * @example 
 * // Two examples of badges containing text, using primary and secondary colors. The badge is applied to its children - an icon for the first example, and an [Icon Button](https://bitsrc.io/materialui/react-material-ui/buttons/icon-button) with tooltip for the second.
 * 
 * import React from 'react';
 * import Badge from 'material-ui/Badge';
 * import IconButton from 'material-ui/IconButton';
 * import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
 * 
 * const BadgeExampleSimple = () => (
 *   <div>
 *     <Badge
 *       badgeContent={4}
 *       primary={true}
 *     >
 *       <NotificationsIcon />
 *     </Badge>
 *     <Badge
 *       badgeContent={10}
 *       secondary={true}
 *       badgeStyle={{top: 12, right: 12}}
 *     >
 *       <IconButton tooltip="Notifications">
 *         <NotificationsIcon />
 *       </IconButton>
 *     </Badge>
 *   </div>
 * );
 * 
 * export default BadgeExampleSimple;
 * 
 * @example 
 * 
 * // Badges containing an Icon Button and text, applied to an icon, and text.
 * 
 * // For further info about Icon Button, go to https://bitsrc.io/materialui/react-material-ui/buttons/icon-button.
 * 
 * import React from 'react';
 * import Badge from 'material-ui/Badge';
 * import IconButton from 'material-ui/IconButton';
 * import UploadIcon from 'material-ui/svg-icons/file/cloud-upload';
 * import FolderIcon from 'material-ui/svg-icons/file/folder-open';
 * 
 * const BadgeExampleContent = () => (
 *   <div>
 *     <Badge
 *       badgeContent={<IconButton tooltip="Backup"><UploadIcon /></IconButton>}
 *     >
 *       <FolderIcon />
 *     </Badge>
 *     <Badge
 *       badgeContent="&copy;"
 *       badgeStyle={{fontSize: 20}}
 *     >
 *       Company Name
 *     </Badge>
 *   </div>
 * );
 * 
 * export default BadgeExampleContent;
 * 
 */

var Badge = function (_Component) {
  _inherits(Badge, _Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          badgeContent = _props.badgeContent,
          badgeStyle = _props.badgeStyle,
          children = _props.children,
          primary = _props.primary,
          secondary = _props.secondary,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['badgeContent', 'badgeStyle', 'children', 'primary', 'secondary', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        Object.assign({}, other, { style: prepareStyles(Object.assign({}, styles.root, style)) }),
        children,
        _react2.default.createElement(
          'span',
          { style: prepareStyles(Object.assign({}, styles.badge, badgeStyle)) },
          badgeContent
        )
      );
    }
  }]);

  return Badge;
}(_react.Component);

Badge.propTypes = {
  /**
   * @property {PropTypes.node.isRequired} badgeContent - This is the content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * @property {PropTypes.object} badgeStyle - Override the inline-styles of the badge element.
   */
  badgeStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} children - The badge will be added relativelty to this node.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} primary - If true, the badge will use the primary badge colors.
   */
  primary: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} secondary - If true, the badge will use the secondary badge colors.
   */
  secondary: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
Badge.defaultProps = {
  primary: false,
  secondary: false
};
Badge.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Badge;

//# sourceMappingURL=Badge.js.map