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

var EditorBubbleChart = function EditorBubbleChart(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('circle', { cx: '7.2', cy: '14.4', r: '3.2' }),
    _react2.default.createElement('circle', { cx: '14.8', cy: '18', r: '2' }),
    _react2.default.createElement('circle', { cx: '15.2', cy: '8.8', r: '4.8' })
  );
}; /** 
    * # BubbleChart SVG Icon. 
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
     
    */

EditorBubbleChart = (0, _pure2.default)(EditorBubbleChart);
EditorBubbleChart.displayName = 'EditorBubbleChart';
EditorBubbleChart.muiName = 'SvgIcon';

exports.default = EditorBubbleChart;

//# sourceMappingURL=bubble-chart.js.map