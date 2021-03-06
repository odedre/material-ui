'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getStyles(props, context) {
  var _titleBar;

  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      gridTile = _context$muiTheme.gridTile;


  var actionPos = props.actionIcon && props.actionPosition;

  var styles = {
    root: {
      position: 'relative',
      display: 'block',
      height: '100%',
      overflow: 'hidden'
    },
    titleBar: (_titleBar = {
      position: 'absolute',
      left: 0,
      right: 0
    }, _defineProperty(_titleBar, props.titlePosition, 0), _defineProperty(_titleBar, 'height', props.subtitle ? 68 : 48), _defineProperty(_titleBar, 'background', props.titleBackground), _defineProperty(_titleBar, 'display', 'flex'), _defineProperty(_titleBar, 'alignItems', 'center'), _titleBar),
    titleWrap: {
      flexGrow: 1,
      marginLeft: actionPos !== 'left' ? baseTheme.spacing.desktopGutterLess : 0,
      marginRight: actionPos === 'left' ? baseTheme.spacing.desktopGutterLess : 0,
      color: gridTile.textColor,
      overflow: 'hidden'
    },
    title: {
      fontSize: '16px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    subtitle: {
      fontSize: '12px',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    actionIcon: {
      order: actionPos === 'left' ? -1 : 1
    },
    childImg: {
      height: '100%',
      transform: 'translateX(-50%)',
      position: 'relative',
      left: '50%'
    }
  };
  return styles;
}

var GridTile = function (_Component) {
  _inherits(GridTile, _Component);

  function GridTile() {
    _classCallCheck(this, GridTile);

    return _possibleConstructorReturn(this, (GridTile.__proto__ || Object.getPrototypeOf(GridTile)).apply(this, arguments));
  }

  _createClass(GridTile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ensureImageCover();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.ensureImageCover();
    }
  }, {
    key: 'ensureImageCover',
    value: function ensureImageCover() {
      var _this2 = this;

      var imgEl = this.refs.img;

      if (imgEl) {
        var fit = function fit() {
          if (imgEl.offsetWidth < imgEl.parentNode.offsetWidth) {
            var isRtl = _this2.context.muiTheme.isRtl;

            imgEl.style.height = 'auto';
            if (isRtl) {
              imgEl.style.right = '0';
            } else {
              imgEl.style.left = '0';
            }
            imgEl.style.width = '100%';
            imgEl.style.top = '50%';
            imgEl.style.transform = imgEl.style.WebkitTransform = 'translateY(-50%)';
          }
          imgEl.removeEventListener('load', fit);
          imgEl = null; // prevent closure memory leak
        };
        if (imgEl.complete) {
          fit();
        } else {
          imgEl.addEventListener('load', fit);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          titlePosition = _props.titlePosition,
          titleBackground = _props.titleBackground,
          titleStyle = _props.titleStyle,
          subtitleStyle = _props.subtitleStyle,
          actionIcon = _props.actionIcon,
          actionPosition = _props.actionPosition,
          style = _props.style,
          children = _props.children,
          containerElement = _props.containerElement,
          other = _objectWithoutProperties(_props, ['title', 'subtitle', 'titlePosition', 'titleBackground', 'titleStyle', 'subtitleStyle', 'actionIcon', 'actionPosition', 'style', 'children', 'containerElement']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = Object.assign(styles.root, style);

      var titleBar = null;

      if (title) {
        titleBar = _react2.default.createElement(
          'div',
          { key: 'titlebar', style: prepareStyles(styles.titleBar) },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.titleWrap) },
            _react2.default.createElement(
              'div',
              { style: prepareStyles(Object.assign(styles.title, titleStyle)) },
              title
            ),
            subtitle ? _react2.default.createElement(
              'div',
              { style: prepareStyles(Object.assign(styles.subtitle, subtitleStyle)) },
              subtitle
            ) : null
          ),
          actionIcon ? _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.actionIcon) },
            actionIcon
          ) : null
        );
      }

      var newChildren = children;

      // if there is a single image passed as children
      // clone it and add our styles
      if (_react2.default.Children.count(children) === 1) {
        newChildren = _react2.default.Children.map(children, function (child) {
          if (child.type === 'img') {
            return _react2.default.cloneElement(child, {
              key: 'img',
              ref: 'img',
              style: prepareStyles(Object.assign({}, styles.childImg, child.props.style))
            });
          } else {
            return child;
          }
        });
      }

      var containerProps = Object.assign({
        style: prepareStyles(mergedRootStyles)
      }, other);

      return _react2.default.isValidElement(containerElement) ? _react2.default.cloneElement(containerElement, containerProps, [newChildren, titleBar]) : _react2.default.createElement(containerElement, containerProps, [newChildren, titleBar]);
    }
  }]);

  return GridTile;
}(_react.Component);

GridTile.propTypes = {
  /**
   * @property {PropTypes.element} actionIcon - An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: _propTypes2.default.element,
  /**
   * @property {left|right} actionPosition - Position of secondary action IconButton.
   */
  actionPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * @property {PropTypes.node} children - Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in whichcase GridTile takes care of making the image "cover" available space
   * (similar to background-size: cover or to object-fit:cover).
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.number} cols - Width of the tile in number of grid cells.
   */
  cols: _propTypes2.default.number,
  /**
   * @property {string|element} containerElement - Either a string used as tag name for the tile root element, or a ReactElement.
   * This is useful when you have, for example, a custom implementation of
   * a navigation link (that knows about your routes) and you want to use it as the primary tile action.
   * In case you pass a ReactElement, please ensure that it passes all props,
   * accepts styles overrides and render it's children.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * @property {PropTypes.number} rows - Height of the tile in number of grid cells.
   */
  rows: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} subtitle - String or element serving as subtitle (support text).
   */
  subtitle: _propTypes2.default.node,
  /**
   * @property {PropTypes.object} subtitleStyle - Override the inline-styles of the subtitle element.
   */
  subtitleStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} title - Title to be displayed on tile.
   */
  title: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} titleBackground - Style used for title bar background.
   * Useful for setting custom gradients for example
   */
  titleBackground: _propTypes2.default.string,
  /**
   * @property {top|bottom} titlePosition - Position of the title bar (container of title, subtitle and action icon).
   */
  titlePosition: _propTypes2.default.oneOf(['top', 'bottom']),
  /**
   * @property {PropTypes.object} titleStyle - Override the inline-styles of the title element.
   */
  titleStyle: _propTypes2.default.object
};
GridTile.defaultProps = {
  titlePosition: 'bottom',
  titleBackground: 'rgba(0, 0, 0, 0.4)',
  actionPosition: 'right',
  cols: 1,
  rows: 1,
  containerElement: 'div'
};
GridTile.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = GridTile;

//# sourceMappingURL=GridTile.js.map