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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context, state) {
  var color = props.color,
      hoverColor = props.hoverColor;
  var baseTheme = context.muiTheme.baseTheme;

  var offColor = color || baseTheme.palette.textColor;
  var onColor = hoverColor || offColor;

  return {
    root: {
      color: state.hovered ? onColor : offColor,
      position: 'relative',
      fontSize: baseTheme.spacing.iconSize,
      display: 'inline-block',
      userSelect: 'none',
      transition: _transitions2.default.easeOut()
    }
  };
}

/**
 * @description 
 * This component will render any icon defined in any stylesheet included in your project. You can use sites like IcoMoon to generate custom font files, or use prebuilt fonts such as Material icons or Font Awesome either included in your project, or served from a public Content Delivery Network.
 *
 * Refer to this [article](http://google.github.io/material-design-icons/#icon-font-for-the-web) to learn how to use font icons from any of the above websites in your project.
 *
 * To use FontIcon, add the icon stylesheet to your project and reference the icon's class in the className prop. If the icon font supports ligatures, reference the font in the className and enclose the icon name in the FontIcon tag.
 * 
 * @example
 * 
 * // This example uses a custom font (not part of Material-UI). The className defines the specific icon. The third example has a hoverColor defined.
 * 
 * import React from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import {blue500, red500, greenA200} from 'material-ui/styles/colors';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const FontIconExampleSimple = () => (
 *   <div>
 *     <FontIcon
 *       className="muidocs-icon-action-home"
 *       style={iconStyles}
 *     />
 * 
 *     <FontIcon
 *       className="muidocs-icon-action-home"
 *       style={iconStyles}
 *       color={blue500}
 *     />
 * 
 *     <FontIcon
 *       className="muidocs-icon-action-home"
 *       style={iconStyles}
 *       color={red500}
 *       hoverColor={greenA200}
 *     />
 *   </div>
 * );
 * 
 * export default FontIconExampleSimple;
 * 
 * 
 * @example
 * 
 * // This example uses the Material icons font, referenced in the <head> of the docs site index page. The className defines the font, and the IconFont tag content defines the specific icon.
 * 
 * import React from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import {red500, yellow500, blue500} from 'material-ui/styles/colors';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const FontIconExampleIcons = () => (
 *   <div>
 *     <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
 *     <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
 *     <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
 *     <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
 *   </div>
 * );
 * 
 * export default FontIconExampleIcons;
 * 
 */

var FontIcon = function (_Component) {
  _inherits(FontIcon, _Component);

  function FontIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FontIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FontIcon.__proto__ || Object.getPrototypeOf(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      // hover is needed only when a hoverColor is defined
      if (_this.props.hoverColor !== undefined) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FontIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          hoverColor = _props.hoverColor,
          onMouseLeave = _props.onMouseLeave,
          onMouseEnter = _props.onMouseEnter,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement('span', Object.assign({}, other, {
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        style: prepareStyles(Object.assign(styles.root, style))
      }));
    }
  }]);

  return FontIcon;
}(_react.Component);

FontIcon.muiName = 'FontIcon';
FontIcon.propTypes = {
  /**
   * @property {PropTypes.string} color - This is the font color of the font icon. If not specified,
   * this component will default to muiTheme.palette.textColor.
   */
  color: _propTypes2.default.string,
  /**
   * @property {PropTypes.string} hoverColor - This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
FontIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};
FontIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = FontIcon;

//# sourceMappingURL=FontIcon.js.map