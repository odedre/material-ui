'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageLooks6 = function ImageLooks6(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z' })
  );
}; /** 
    * # Looks6 SVG Icon. 
    * @property {node} children -  Elements passed into the SVG Icon.
    * @property {string} color - This is the fill color of the svg icon.
    * If not specified, this component will default to muiTheme.palette.textColor.
    * @property {string} hoverColor - This is the icon color when the mouse hovers over the icon.
    * @property {object} style	- Override the inline-styles of the root element.
    * @property {string} viewBox  - Allows you to redefine what the coordinates
    * without units mean inside an svg element. For example,
    * if the SVG element is 500 (width) by 200 (height),
    * and you pass viewBox="0 0 50 20", this means that the coordinates inside
    * the svg will go from the top left corner (0,0) to bottom right (50,20)
    * and each unit will be worth 10px. 
    * @example 
    * <svg width="24" height="24" ><path d="M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z"/></svg> 
    */

ImageLooks6 = (0, _pure2.default)(ImageLooks6);
ImageLooks6.displayName = 'ImageLooks6';
ImageLooks6.muiName = 'SvgIcon';

exports.default = ImageLooks6;

//# sourceMappingURL=looks-6.js.map