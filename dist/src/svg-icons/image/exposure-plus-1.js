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

var ImageExposurePlus1 = function ImageExposurePlus1(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z' })
  );
}; /** 
    * # ExposurePlus1 SVG Icon. 
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
    * <svg width="24" height="24" ><path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"/></svg> 
    */

ImageExposurePlus1 = (0, _pure2.default)(ImageExposurePlus1);
ImageExposurePlus1.displayName = 'ImageExposurePlus1';
ImageExposurePlus1.muiName = 'SvgIcon';

exports.default = ImageExposurePlus1;

//# sourceMappingURL=exposure-plus-1.js.map