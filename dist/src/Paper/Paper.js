'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var rounded = props.rounded,
      circle = props.circle,
      transitionEnabled = props.transitionEnabled,
      zDepth = props.zDepth;
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      paper = _context$muiTheme.paper,
      borderRadius = _context$muiTheme.borderRadius;


  return {
    root: {
      color: paper.color,
      backgroundColor: paper.backgroundColor,
      transition: transitionEnabled && _transitions2.default.easeOut(),
      boxSizing: 'border-box',
      fontFamily: baseTheme.fontFamily,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
      borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
    }
  };
}

/**
 * @description
 *  
 * A Paper element is a basic container that can give depth to the page.
 * 
 * @example 
 * 
 * // Paper examples showing the range of zDepth.
 * 
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * 
 * const style = {
 *   height: 100,
 *   width: 100,
 *   margin: 20,
 *   textAlign: 'center',
 *   display: 'inline-block',
 * };
 * 
 * const PaperExampleSimple = () => (
 *   <div>
 *     <Paper style={style} zDepth={1} />
 *     <Paper style={style} zDepth={2} />
 *     <Paper style={style} zDepth={3} />
 *     <Paper style={style} zDepth={4} />
 *     <Paper style={style} zDepth={5} />
 *   </div>
 * );
 * 
 * export default PaperExampleSimple;
 * 
 * 
 * @example 
 * // Corners are rounded by default. Set the rounded property to false for square corners.
 * 
 *
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * 
 * const style = {
 *   height: 100,
 *   width: 100,
 *   margin: 20,
 *   textAlign: 'center',
 *   display: 'inline-block',
 * };
 * 
 * const PaperExampleRounded = () => (
 *   <div>
 *     <Paper style={style} zDepth={1} rounded={false} />
 *     <Paper style={style} zDepth={2} rounded={false} />
 *     <Paper style={style} zDepth={3} rounded={false} />
 *     <Paper style={style} zDepth={4} rounded={false} />
 *     <Paper style={style} zDepth={5} rounded={false} />
 *   </div>
 * );
 * 
 * export default PaperExampleRounded;
 * 
 * 
 * @example 
 * // Set the circle property for circular Paper.
 * 
 *
 * import React from 'react';
 * import Paper from 'material-ui/Paper';
 * 
 * const style = {
 *   height: 100,
 *   width: 100,
 *   margin: 20,
 *   textAlign: 'center',
 *   display: 'inline-block',
 * };
 * 
 * const PaperExampleCircle = () => (
 *   <div>
 *     <Paper style={style} zDepth={1} circle={true} />
 *     <Paper style={style} zDepth={2} circle={true} />
 *     <Paper style={style} zDepth={3} circle={true} />
 *     <Paper style={style} zDepth={4} circle={true} />
 *     <Paper style={style} zDepth={5} circle={true} />
 *   </div>
 * );
 * 
 * export default PaperExampleCircle;
 * 
 */

var Paper = function (_Component) {
  _inherits(Paper, _Component);

  function Paper() {
    _classCallCheck(this, Paper);

    return _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).apply(this, arguments));
  }

  _createClass(Paper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          circle = _props.circle,
          rounded = _props.rounded,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          zDepth = _props.zDepth,
          other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        Object.assign({}, other, { style: prepareStyles(Object.assign(styles.root, style)) }),
        children
      );
    }
  }]);

  return Paper;
}(_react.Component);

Paper.propTypes = {
  /**
   * @property {PropTypes.node} children - Children passed into the paper element.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} circle - Set to true to generate a circular paper container.
   */
  circle: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} rounded - By default, the paper container will have a border radius.
   * Set this to false to generate a container with sharp corners.
   */
  rounded: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} transitionEnabled - Set to false to disable CSS transitions for the paper element.
   */
  transitionEnabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.zDepth} zDepth - This number represents the zDepth of the paper shadow.
   */
  zDepth: _propTypes4.default.zDepth
};
Paper.defaultProps = {
  circle: false,
  rounded: true,
  transitionEnabled: true,
  zDepth: 1
};
Paper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Paper;

//# sourceMappingURL=Paper.js.map