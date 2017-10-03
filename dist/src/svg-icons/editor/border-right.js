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

var EditorBorderRight = function EditorBorderRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z' })
  );
}; /** 
    * # BorderRight SVG Icon. 
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
    * <svg width="24" height="24" ><path d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"/></svg> 
    */

EditorBorderRight = (0, _pure2.default)(EditorBorderRight);
EditorBorderRight.displayName = 'EditorBorderRight';
EditorBorderRight.muiName = 'SvgIcon';

exports.default = EditorBorderRight;

//# sourceMappingURL=border-right.js.map