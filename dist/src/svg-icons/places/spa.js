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

var PlacesSpa = function PlacesSpa(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z' }),
    _react2.default.createElement('path', { d: 'M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z' })
  );
}; /** 
    * # Spa SVG Icon. 
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
    * <svg width="24" height="24" ><path d="M8.55 12c-1.07-.71-2.25-1.27-3.53-1.61 1.28.34 2.46.9 3.53 1.61zm10.43-1.61c-1.29.34-2.49.91-3.57 1.64 1.08-.73 2.28-1.3 3.57-1.64z"/><path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z"/></svg> 
    */

PlacesSpa = (0, _pure2.default)(PlacesSpa);
PlacesSpa.displayName = 'PlacesSpa';
PlacesSpa.muiName = 'SvgIcon';

exports.default = PlacesSpa;

//# sourceMappingURL=spa.js.map