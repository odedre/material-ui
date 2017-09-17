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

/**
 * @description
 * 
 * The SvgIcon component takes an SVG path element as its child, and converts it to a React component which displays the path and allows the icon to be styled and respond to mouse events.
 *
 * The resulting icon can be used as is, or included as a child for other Material-UI components that use icons, such as Icon Button.
 *
 * For convenience, the full set of google Material icons are available in Material-UI as pre-built SVG Icon components. Each icon path is already wrapped with SvgIcon, and can be imported and used directly as a React component. Any properties supplied are passed to SvgIcon.
 * The import path for each Material icons component includes the category and icon name, with spaces substituted with dashes. For example to use the 3d rotation icon component, import material-ui/svg-icons/action/3d-rotation.
 * For more info go to http://www.material-ui.com/#/components/svg-icon
 * 
 * @example 
 * 
 * // This example uses a custom svg icon. The third example has a hoverColor defined.
 *
 * import React from 'react';
 * import {blue500, red500, greenA200} from 'material-ui/styles/colors';
 * import SvgIcon from 'material-ui/SvgIcon';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const HomeIcon = (props) => (
 *   <SvgIcon {...props}>
 *     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
 *   </SvgIcon>
 * );
 * 
 * const SvgIconExampleSimple = () => (
 *   <div>
 *     <HomeIcon style={iconStyles} />
 *     <HomeIcon style={iconStyles} color={blue500} />
 *     <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
 *   </div>
 * );
 * 
 * export default SvgIconExampleSimple;
 * 
 * 
 * @example 
 * 
 * // This examples demonstrates how to use the included Material icon components.
 *
 * import React from 'react';
 * import ActionHome from 'material-ui/svg-icons/action/home';
 * import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
 * import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
 * import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
 * import {red500, yellow500, blue500} from 'material-ui/styles/colors';
 * 
 * const iconStyles = {
 *   marginRight: 24,
 * };
 * 
 * const SvgIconExampleIcons = () => (
 *   <div>
 *     <ActionHome style={iconStyles} />
 *     <ActionFlightTakeoff style={iconStyles} color={red500} />
 *     <FileCloudDownload style={iconStyles} color={yellow500} />
 *     <HardwareVideogameAsset style={iconStyles} color={blue500} />
 *   </div>
 * );
 * 
 * export default SvgIconExampleIcons;
 * 
 */

var SvgIcon = function (_Component) {
  _inherits(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

      var _context$muiTheme = this.context.muiTheme,
          svgIcon = _context$muiTheme.svgIcon,
          prepareStyles = _context$muiTheme.prepareStyles;


      var offColor = color ? color : 'currentColor';
      var onColor = hoverColor ? hoverColor : offColor;

      var mergedStyles = Object.assign({
        display: 'inline-block',
        color: svgIcon.color,
        fill: this.state.hovered ? onColor : offColor,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      return _react2.default.createElement(
        'svg',
        Object.assign({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: prepareStyles(mergedStyles),
          viewBox: viewBox
        }),
        children
      );
    }
  }]);

  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.propTypes = {
  /**
   * @property {PropTypes.node} children - Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} color - This is the fill color of the svg icon.
   * If not specified, this component will default
   * to muiTheme.palette.textColor.
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
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} viewBox - Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
};
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = SvgIcon;

//# sourceMappingURL=index.js.map