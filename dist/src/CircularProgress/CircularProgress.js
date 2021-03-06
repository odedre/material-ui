'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoPrefix = require('../utils/autoPrefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return clampedValue / (max - min);
}

function getArcLength(fraction, props) {
  return fraction * Math.PI * (props.size - props.thickness);
}

function getStyles(props, context) {
  var max = props.max,
      min = props.min,
      size = props.size,
      value = props.value;
  var palette = context.muiTheme.baseTheme.palette;


  var styles = {
    root: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size
    },
    wrapper: {
      width: size,
      height: size,
      display: 'inline-block',
      transition: _transitions2.default.create('transform', '20s', null, 'linear'),
      transitionTimingFunction: 'linear'
    },
    svg: {
      width: size,
      height: size,
      position: 'relative'
    },
    path: {
      stroke: props.color || palette.primary1Color,
      strokeLinecap: 'round',
      transition: _transitions2.default.create('all', '1.5s', null, 'ease-in-out')
    }
  };

  if (props.mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max);
    styles.path.transition = _transitions2.default.create('all', '0.3s', null, 'linear');
    styles.path.strokeDasharray = getArcLength(relVal, props) + ', ' + getArcLength(1, props);
  }

  return styles;
}

/**
 * @description Circular Progress will rotate to show the progress of a task or that there is a wait for a task to complete.
 * Also see https://www.google.com/design/spec/components/progress-activity.html#progress-activity-types-of-indicators
 * 
 *  
 * @example 
 * // By default, the indicator animates continuously.
 * 
 * import React from 'react';
 * import CircularProgress from 'material-ui/CircularProgress';
 * 
 * const CircularProgressExampleSimple = () => (
 *   <div>
 *     <CircularProgress />
 *     <CircularProgress size={60} thickness={7} />
 *     <CircularProgress size={80} thickness={5} />
 *   </div>
 * );
 * 
 * export default CircularProgressExampleSimple;
 * 
 * @example 
 * 
 * // In determinate mode, the indicator adjusts to show the percentage complete, as a ratio of `value`: `max-min`.
 * 
 * import React from 'react';
 * import CircularProgress from 'material-ui/CircularProgress';
 * 
 * export default class CircularProgressExampleDeterminate extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       completed: 0,
 *     };
 *   }
 * 
 *   componentDidMount() {
 *     this.timer = setTimeout(() => this.progress(5), 1000);
 *   }
 * 
 *   componentWillUnmount() {
 *     clearTimeout(this.timer);
 *   }
 * 
 *   progress(completed) {
 *     if (completed > 100) {
 *       this.setState({completed: 100});
 *     } else {
 *       this.setState({completed});
 *       const diff = Math.random() * 10;
 *       this.timer = setTimeout(() => this.progress(completed + diff), 1000);
 *     }
 *   }
 * 
 *   render() {
 *     return (
 *       <div>
 *         <CircularProgress
 *           mode="determinate"
 *           value={this.state.completed}
 *         />
 *         <CircularProgress
 *           mode="determinate"
 *           value={this.state.completed}
 *           size={60}
 *           thickness={7}
 *         />
 *         <CircularProgress
 *           mode="determinate"
 *           value={this.state.completed}
 *           size={80}
 *           thickness={5}
 *         />
 *       </div>
 *     );
 *   }
 * }
 * 
 */

var CircularProgress = function (_Component) {
  _inherits(CircularProgress, _Component);

  function CircularProgress() {
    _classCallCheck(this, CircularProgress);

    return _possibleConstructorReturn(this, (CircularProgress.__proto__ || Object.getPrototypeOf(CircularProgress)).apply(this, arguments));
  }

  _createClass(CircularProgress, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scalePath(this.refs.path);
      this.rotateWrapper(this.refs.wrapper);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.scalePathTimer);
      clearTimeout(this.rotateWrapperTimer);
    }
  }, {
    key: 'scalePath',
    value: function scalePath(path) {
      var _this2 = this;

      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.props.mode !== 'indeterminate') return;

      step %= 3;

      if (step === 0) {
        path.style.strokeDasharray = getArcLength(0, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = 0;
        path.style.transitionDuration = '0ms';
      } else if (step === 1) {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-0.3, this.props);
        path.style.transitionDuration = '750ms';
      } else {
        path.style.strokeDasharray = getArcLength(0.7, this.props) + ', ' + getArcLength(1, this.props);
        path.style.strokeDashoffset = getArcLength(-1, this.props);
        path.style.transitionDuration = '850ms';
      }

      this.scalePathTimer = setTimeout(function () {
        return _this2.scalePath(path, step + 1);
      }, step ? 750 : 250);
    }
  }, {
    key: 'rotateWrapper',
    value: function rotateWrapper(wrapper) {
      var _this3 = this;

      if (this.props.mode !== 'indeterminate') return;

      _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(0deg)');
      _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '0ms');

      setTimeout(function () {
        _autoPrefix2.default.set(wrapper.style, 'transform', 'rotate(1800deg)');
        _autoPrefix2.default.set(wrapper.style, 'transitionDuration', '10s');
        _autoPrefix2.default.set(wrapper.style, 'transitionTimingFunction', 'linear');
      }, 50);

      this.rotateWrapperTimer = setTimeout(function () {
        return _this3.rotateWrapper(wrapper);
      }, 10050);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          innerStyle = _props.innerStyle,
          size = _props.size,
          thickness = _props.thickness,
          other = _objectWithoutProperties(_props, ['style', 'innerStyle', 'size', 'thickness']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        Object.assign({}, other, { style: prepareStyles(Object.assign(styles.root, style)) }),
        _react2.default.createElement(
          'div',
          { ref: 'wrapper', style: prepareStyles(Object.assign(styles.wrapper, innerStyle)) },
          _react2.default.createElement(
            'svg',
            {
              viewBox: '0 0 ' + size + ' ' + size,
              style: prepareStyles(styles.svg)
            },
            _react2.default.createElement('circle', {
              ref: 'path',
              style: prepareStyles(styles.path),
              cx: size / 2,
              cy: size / 2,
              r: (size - thickness) / 2,
              fill: 'none',
              strokeWidth: thickness,
              strokeMiterlimit: '20'
            })
          )
        )
      );
    }
  }]);

  return CircularProgress;
}(_react.Component);

CircularProgress.propTypes = {
  /**
   *  @property {PropTypes.string} color - Override the progress's color.
   */
  color: _propTypes2.default.string,
  /**
   *  @property {PropTypes.object} innerStyle - Style for inner wrapper div.
   */
  innerStyle: _propTypes2.default.object,
  /**
   *  @property {PropTypes.number} max - The max value of progress, only works in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   *  @property {PropTypes.number} min - The min value of progress, only works in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   *  @property {PropTypes.oneOf(['determinate', 'indeterminate'])} mode - The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   *  @property {PropTypes.number} size - The diameter of the progress in pixels.
   */
  size: _propTypes2.default.number,
  /**
   *  @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   *  @property {PropTypes.number} thickness - Stroke width in pixels.
   */
  thickness: _propTypes2.default.number,
  /**
   *  @property {PropTypes.number} value - The value of progress, only works in determinate mode.
   */
  value: _propTypes2.default.number
};
CircularProgress.defaultProps = {
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100,
  size: 40,
  thickness: 3.5
};
CircularProgress.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = CircularProgress;

//# sourceMappingURL=CircularProgress.js.map