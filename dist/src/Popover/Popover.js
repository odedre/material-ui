'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _RenderToLayer = require('../internal/RenderToLayer');

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _PopoverAnimationDefault = require('./PopoverAnimationDefault');

var _PopoverAnimationDefault2 = _interopRequireDefault(_PopoverAnimationDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    display: 'none'
  }
};

/**
 * @description 
 * // A Popover can be used as an alternative to a Drop Down Menu that can contain elements inside. In our examples we are using a Menu, but any suitable combination of components can be used.
 *
 * @example 
 * 
 * // A simple example showing a Popover containing a Menu. It can be also closed by clicking away from the Popover.
 *
 * import React from 'react';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import Popover from 'material-ui/Popover';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class PopoverExampleSimple extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = (event) => {
 *     // This prevents ghost click.
 *     event.preventDefault();
 * 
 *     this.setState({
 *       open: true,
 *       anchorEl: event.currentTarget,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Click me"
 *         />
 *         <Popover
 *           open={this.state.open}
 *           anchorEl={this.state.anchorEl}
 *           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *           targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *           onRequestClose={this.handleRequestClose}
 *         >
 *           <Menu>
 *             <MenuItem primaryText="Refresh" />
 *             <MenuItem primaryText="Help &amp; feedback" />
 *             <MenuItem primaryText="Settings" />
 *             <MenuItem primaryText="Sign out" />
 *           </Menu>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example
 * 
 * // The default animation style is to animate around the origin. An alternative animation can be applied using the animation property. Currently one alternative animation is available, popover-animation-from-top, which animates vertically.
 * 
 * import React from 'react';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
 * import Menu from 'material-ui/Menu';
 * import MenuItem from 'material-ui/MenuItem';
 * 
 * export default class PopoverExampleAnimation extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       open: false,
 *     };
 *   }
 * 
 *   handleTouchTap = (event) => {
 *     // This prevents ghost click.
 *     event.preventDefault();
 * 
 *     this.setState({
 *       open: true,
 *       anchorEl: event.currentTarget,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Click me"
 *         />
 *         <Popover
 *           open={this.state.open}
 *           anchorEl={this.state.anchorEl}
 *           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
 *           targetOrigin={{horizontal: 'left', vertical: 'top'}}
 *           onRequestClose={this.handleRequestClose}
 *           animation={PopoverAnimationVertical}
 *         >
 *           <Menu>
 *             <MenuItem primaryText="Refresh" />
 *             <MenuItem primaryText="Help &amp; feedback" />
 *             <MenuItem primaryText="Settings" />
 *             <MenuItem primaryText="Sign out" />
 *           </Menu>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * 
 * // Use the radio buttons to adjust the anchorOrigin and targetOrigin positions.
 * 
 * import React from 'react';
 * import RaisedButton from 'material-ui/RaisedButton';
 * import RadioButton from 'material-ui/RadioButton';
 * import Popover from 'material-ui/Popover/Popover';
 * import {Menu, MenuItem} from 'material-ui/Menu';
 * 
 * const styles = {
 *   h3: {
 *     marginTop: 20,
 *     fontWeight: 400,
 *   },
 *   block: {
 *     display: 'flex',
 *   },
 *   block2: {
 *     margin: 10,
 *   },
 *   pre: {
 *     overflow: 'hidden', // Fix a scrolling issue on iOS.
 *   },
 * };
 * 
 * export default class PopoverExampleConfigurable extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 * 
 *     this.state = {
 *       open: false,
 *       anchorOrigin: {
 *         horizontal: 'left',
 *         vertical: 'bottom',
 *       },
 *       targetOrigin: {
 *         horizontal: 'left',
 *         vertical: 'top',
 *       },
 *     };
 *   }
 * 
 *   handleTouchTap = (event) => {
 *     // This prevents ghost click.
 *     event.preventDefault();
 *     this.setState({
 *       open: true,
 *       anchorEl: event.currentTarget,
 *     });
 *   };
 * 
 *   handleRequestClose = () => {
 *     this.setState({
 *       open: false,
 *     });
 *   };
 * 
 *   setAnchor = (positionElement, position) => {
 *     const {anchorOrigin} = this.state;
 *     anchorOrigin[positionElement] = position;
 * 
 *     this.setState({
 *       anchorOrigin: anchorOrigin,
 *     });
 *   };
 * 
 *   setTarget = (positionElement, position) => {
 *     const {targetOrigin} = this.state;
 *     targetOrigin[positionElement] = position;
 * 
 *     this.setState({
 *       targetOrigin: targetOrigin,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <RaisedButton
 *           onClick={this.handleTouchTap}
 *           label="Click me"
 *         />
 *         <h3 style={styles.h3}>Current Settings</h3>
 *         <pre style={styles.pre}>
 *           anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
 *           <br />
 *           targetOrigin: {JSON.stringify(this.state.targetOrigin)}
 *         </pre>
 *         <h3 style={styles.h3}>Position Options</h3>
 *         <p>Use the settings below to toggle the positioning of the popovers above</p>
 *         <h3 style={styles.h3}>Anchor Origin</h3>
 *         <div style={styles.block}>
 *           <div style={styles.block2}>
 *             <span>Vertical</span>
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'vertical', 'top')}
 *               label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'vertical', 'center')}
 *               label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
 *               label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
 *             />
 *           </div>
 *           <div style={styles.block2}>
 *             <span>Horizontal</span>
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
 *               label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
 *               label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
 *             />
 *             <RadioButton
 *               onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
 *               label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
 *             />
 *           </div>
 *         </div>
 *         <h3 style={styles.h3}>Target Origin</h3>
 *         <div style={styles.block}>
 *           <div style={styles.block2}>
 *             <span>Vertical</span>
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'vertical', 'top')}
 *               label="Top" checked={this.state.targetOrigin.vertical === 'top'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'vertical', 'center')}
 *               label="Center" checked={this.state.targetOrigin.vertical === 'center'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
 *               label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
 *             />
 *           </div>
 *           <div style={styles.block2}>
 *             <span>Horizontal</span>
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'horizontal', 'left')}
 *               label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
 *               label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
 *             />
 *             <RadioButton
 *               onClick={this.setTarget.bind(this, 'horizontal', 'right')}
 *               label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
 *             />
 *           </div>
 *         </div>
 *         <Popover
 *           open={this.state.open}
 *           anchorEl={this.state.anchorEl}
 *           anchorOrigin={this.state.anchorOrigin}
 *           targetOrigin={this.state.targetOrigin}
 *           onRequestClose={this.handleRequestClose}
 *         >
 *           <Menu>
 *             <MenuItem primaryText="Refresh" />
 *             <MenuItem primaryText="Help &amp; feedback" />
 *             <MenuItem primaryText="Settings" />
 *             <MenuItem primaryText="Sign out" />
 *           </Menu>
 *         </Popover>
 *       </div>
 *     );
 *   }
 * } 
 * 
 * 
 * // The event.preventDefault(); in the examples above is to prevent an effect called ghost click that happens with touch-devices. It is recommended that you add that call whenever you handle a TouchTap event associated with closing/opening Popover.
 * 
 */

var Popover = function (_Component) {
  _inherits(Popover, _Component);

  function Popover(props, context) {
    _classCallCheck(this, Popover);

    var _this = _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props, context));

    _this.timeout = null;

    _this.renderLayer = function () {
      var _this$props = _this.props,
          animated = _this$props.animated,
          animation = _this$props.animation,
          anchorEl = _this$props.anchorEl,
          anchorOrigin = _this$props.anchorOrigin,
          autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
          canAutoPosition = _this$props.canAutoPosition,
          children = _this$props.children,
          onRequestClose = _this$props.onRequestClose,
          style = _this$props.style,
          targetOrigin = _this$props.targetOrigin,
          useLayerForClickAway = _this$props.useLayerForClickAway,
          scrollableContainer = _this$props.scrollableContainer,
          other = _objectWithoutProperties(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway', 'scrollableContainer']);

      var styleRoot = style;

      if (!animated) {
        styleRoot = {
          position: 'fixed',
          zIndex: _this.context.muiTheme.zIndex.popover
        };

        if (!_this.state.open) {
          return null;
        }

        return _react2.default.createElement(
          _Paper2.default,
          Object.assign({ style: Object.assign(styleRoot, style) }, other),
          children
        );
      }

      var Animation = animation || _PopoverAnimationDefault2.default;

      return _react2.default.createElement(
        Animation,
        Object.assign({
          targetOrigin: targetOrigin,
          style: styleRoot
        }, other, {
          open: _this.state.open && !_this.state.closing
        }),
        children
      );
    };

    _this.componentClickAway = function () {
      _this.requestClose('clickAway');
    };

    _this.setPlacement = function (scrolling) {
      if (!_this.state.open) {
        return;
      }

      if (!_this.popoverRefs.layer.getLayer()) {
        return;
      }

      var targetEl = _this.popoverRefs.layer.getLayer().children[0];
      if (!targetEl) {
        return;
      }

      var _this$props2 = _this.props,
          targetOrigin = _this$props2.targetOrigin,
          anchorOrigin = _this$props2.anchorOrigin;

      var anchorEl = _this.props.anchorEl || _this.anchorEl;

      var anchor = _this.getAnchorPosition(anchorEl);
      var target = _this.getTargetPosition(targetEl);

      var targetPosition = {
        top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
        left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
      };

      if (scrolling && _this.props.autoCloseWhenOffScreen) {
        _this.autoCloseWhenOffScreen(anchor);
      }

      if (_this.props.canAutoPosition) {
        target = _this.getTargetPosition(targetEl); // update as height may have changed
        targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
      }

      targetEl.style.top = targetPosition.top + 'px';
      targetEl.style.left = targetPosition.left + 'px';
      targetEl.style.maxHeight = window.innerHeight + 'px';
    };

    _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
    _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

    _this.popoverRefs = {};

    _this.state = {
      open: props.open,
      closing: false
    };
    return _this;
  }

  _createClass(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.placementTimeout = setTimeout(this.setPlacement);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.open === this.props.open) {
        return;
      }

      if (nextProps.open) {
        clearTimeout(this.timeout);
        this.timeout = null;
        this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
        this.setState({
          open: true,
          closing: false
        });
      } else {
        if (nextProps.animated) {
          if (this.timeout !== null) return;
          this.setState({ closing: true });
          this.timeout = setTimeout(function () {
            _this2.setState({
              open: false
            }, function () {
              _this2.timeout = null;
            });
          }, 500);
        } else {
          this.setState({
            open: false
          });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      clearTimeout(this.placementTimeout);
      this.placementTimeout = setTimeout(this.setPlacement);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleScroll.cancel();

      if (this.placementTimeout) {
        clearTimeout(this.placementTimeout);
        this.placementTimeout = null;
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(reason) {
      if (this.props.onRequestClose) {
        this.props.onRequestClose(reason);
      }
    }
  }, {
    key: 'getAnchorPosition',
    value: function getAnchorPosition(el) {
      if (!el) {
        el = _reactDom2.default.findDOMNode(this);
      }

      var rect = el.getBoundingClientRect();
      var a = {
        top: rect.top,
        left: rect.left,
        width: el.offsetWidth,
        height: el.offsetHeight
      };

      a.right = rect.right || a.left + a.width;
      a.bottom = rect.bottom || a.top + a.height;
      a.middle = a.left + (a.right - a.left) / 2;
      a.center = a.top + (a.bottom - a.top) / 2;

      return a;
    }
  }, {
    key: 'getTargetPosition',
    value: function getTargetPosition(targetEl) {
      return {
        top: 0,
        center: targetEl.offsetHeight / 2,
        bottom: targetEl.offsetHeight,
        left: 0,
        middle: targetEl.offsetWidth / 2,
        right: targetEl.offsetWidth
      };
    }
  }, {
    key: 'autoCloseWhenOffScreen',
    value: function autoCloseWhenOffScreen(anchorPosition) {
      if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
        this.requestClose('offScreen');
      }
    }
  }, {
    key: 'getOverlapMode',
    value: function getOverlapMode(anchor, target, median) {
      if ([anchor, target].indexOf(median) >= 0) return 'auto';
      if (anchor === target) return 'inclusive';
      return 'exclusive';
    }
  }, {
    key: 'getPositions',
    value: function getPositions(anchor, target) {
      var a = Object.assign({}, anchor);
      var t = Object.assign({}, target);

      var positions = {
        x: ['left', 'right'].filter(function (p) {
          return p !== t.horizontal;
        }),
        y: ['top', 'bottom'].filter(function (p) {
          return p !== t.vertical;
        })
      };

      var overlap = {
        x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
        y: this.getOverlapMode(a.vertical, t.vertical, 'center')
      };

      positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
      positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

      if (overlap.y !== 'auto') {
        a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
        if (overlap.y === 'inclusive') {
          t.vertical = t.vertical;
        }
      }

      if (overlap.x !== 'auto') {
        a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
        if (overlap.y === 'inclusive') {
          t.horizontal = t.horizontal;
        }
      }

      return {
        positions: positions,
        anchorPos: a
      };
    }
  }, {
    key: 'applyAutoPositionIfNeeded',
    value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
      var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
          positions = _getPositions.positions,
          anchorPos = _getPositions.anchorPos;

      if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
        var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
        if (newTop + target.bottom <= window.innerHeight) {
          targetPosition.top = Math.max(0, newTop);
        } else {
          newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
          if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = Math.max(0, newTop);
          }
        }
      }

      if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
        var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
        if (newLeft + target.right <= window.innerWidth) {
          targetPosition.left = Math.max(0, newLeft);
        } else {
          newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
          if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = Math.max(0, newLeft);
          }
        }
      }

      return targetPosition;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(_reactEventListener2.default, {
          target: this.props.scrollableContainer,
          onScroll: this.handleScroll,
          onResize: this.handleResize
        }),
        _react2.default.createElement(_RenderToLayer2.default, {
          ref: function ref(_ref) {
            return _this3.popoverRefs.layer = _ref;
          },
          open: this.state.open,
          componentClickAway: this.componentClickAway,
          useLayerForClickAway: this.props.useLayerForClickAway,
          render: this.renderLayer
        })
      );
    }
  }]);

  return Popover;
}(_react.Component);

Popover.propTypes = {
  /**
   * @property {PropTypes.object} anchorEl - This is the DOM element that will be used to set the position of the
   * popover.
   */
  anchorEl: _propTypes2.default.object,
  /**
   * @property {PropTypes.origin} anchorOrigin - This is the point on the anchor where the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.bool} animated - If true, the popover will apply transitions when
   * it is added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} animation - Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} autoCloseWhenOffScreen - If true, the popover will hide when the anchor is scrolled off the screen.
   */
  autoCloseWhenOffScreen: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} canAutoPosition - If true, the popover (potentially) ignores `targetOrigin`
   * and `anchorOrigin` to make itself fit on screen,
   * which is useful for mobile devices.
   */
  canAutoPosition: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - The content of the popover.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.func} onRequestClose - Callback function fired when the popover is requested to be closed.
   *
   * @param {string} reason The reason for the close request. Possibles values
   * are 'clickAway' and 'offScreen'.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} open - If true, the popover is visible.
   */
  open: _propTypes2.default.bool,
  /**
   * @property {object|string} scrollableContainer - Represents the parent scrollable container.
   * It can be an element or a string like `window`.
   */
  scrollableContainer: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.origin} targetOrigin - This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.bool} useLayerForClickAway - If true, the popover will render on top of an invisible
   * layer, which will prevent clicks to the underlying
   * elements, and trigger an `onRequestClose('clickAway')` call.
   */
  useLayerForClickAway: _propTypes2.default.bool,
  /**
   * @property {PropTypes.zDepth} zDepth - The zDepth of the popover.
   */
  zDepth: _propTypes4.default.zDepth
};
Popover.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  autoCloseWhenOffScreen: true,
  canAutoPosition: true,
  onRequestClose: function onRequestClose() {},
  open: false,
  scrollableContainer: 'window',
  style: {
    overflowY: 'auto'
  },
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  useLayerForClickAway: true,
  zDepth: 1
};
Popover.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Popover;

//# sourceMappingURL=Popover.js.map