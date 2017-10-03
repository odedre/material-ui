'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _CardExpandable = require('./CardExpandable');

var _CardExpandable2 = _interopRequireDefault(_CardExpandable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description
 * A card is a piece of paper with unique related data that serves as an entry point to more detailed information. 
 * For example, a card could contain a photo, text, and a link about a single subject.
 * 
 * Cards have a constant width and variable height. 
 * The maximum height is limited to the height of the available space on a platform, but it can temporarily expand (for example, to display a comment field). 
 * Cards do not flip over to reveal information on the back.
 * 
 * `Card` expansion can be controlled (use `expanded` and `onExpandChange` properties) or uncontrolled (use `initiallyExpanded` property). 
 * Use the `expandable` property to control whether an element will react to expansion or not. 
 * Use `actAsExpander` on `CardTitle` or `CardHeader` to let them have an expander button.
 * 
 * 
 * 
 * @example
 * 
 * // A `Card` containing each of the card components: `CardHeader` (with avatar), `CardMedia` (with overlay), `CardTitle`, `CardText` & `CardActions`.
 * 
 * import React from 'react';
 * import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * const CardExampleWithAvatar = () => (
 *   <Card>
 *     <CardHeader
 *       title="URL Avatar"
 *       subtitle="Subtitle"
 *       avatar="images/jsa-128.jpg"
 *     />
 *     <CardMedia
 *       overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
 *     >
 *       <img src="images/nature-600-337.jpg" alt="" />
 *     </CardMedia>
 *     <CardTitle title="Card title" subtitle="Card subtitle" />
 *     <CardText>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 *       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 *       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 *     </CardText>
 *     <CardActions>
 *       <FlatButton label="Action1" />
 *       <FlatButton label="Action2" />
 *     </CardActions>
 *   </Card>
 * );
 * 
 * export default CardExampleWithAvatar;
 * 
 * 
 * @example 
 * // An expandable `Card` with `CardHeader`, `CardText` and `CardActions`. Use the icon to expand the card.
 * 
 * import React from 'react';
 * import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
 * import FlatButton from 'material-ui/FlatButton';
 * 
 * const CardExampleExpandable = () => (
 *   <Card>
 *     <CardHeader
 *       title="Without Avatar"
 *       subtitle="Subtitle"
 *       actAsExpander={true}
 *       showExpandableButton={true}
 *     />
 *     <CardActions>
 *       <FlatButton label="Action1" />
 *       <FlatButton label="Action2" />
 *     </CardActions>
 *     <CardText expandable={true}>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 *       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 *       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 *     </CardText>
 *   </Card>
 * );
 * 
 * export default CardExampleExpandable;
 * 
 * 
 * 
 * @example 
 * 
 * // A controlled expandable `Card`. Use the icon, the toggle or the buttons to control the expanded state of the card.
 * 
 * import React from 'react';
 * import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
 * import FlatButton from 'material-ui/FlatButton';
 * import Toggle from 'material-ui/Toggle';
 * 
 * export default class CardExampleControlled extends React.Component {
 * 
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       expanded: false,
 *     };
 *   }
 * 
 *   handleExpandChange = (expanded) => {
 *     this.setState({expanded: expanded});
 *   };
 * 
 *   handleToggle = (event, toggle) => {
 *     this.setState({expanded: toggle});
 *   };
 * 
 *   handleExpand = () => {
 *     this.setState({expanded: true});
 *   };
 * 
 *   handleReduce = () => {
 *     this.setState({expanded: false});
 *   };
 * 
 *   render() {
 *     return (
 *       <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
 *         <CardHeader
 *           title="URL Avatar"
 *           subtitle="Subtitle"
 *           avatar="images/ok-128.jpg"
 *           actAsExpander={true}
 *           showExpandableButton={true}
 *         />
 *         <CardText>
 *           <Toggle
 *             toggled={this.state.expanded}
 *             onToggle={this.handleToggle}
 *             labelPosition="right"
 *             label="This toggle controls the expanded state of the component."
 *           />
 *         </CardText>
 *         <CardMedia
 *           expandable={true}
 *           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
 *         >
 *           <img src="images/nature-600-337.jpg" alt="" />
 *         </CardMedia>
 *         <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
 *         <CardText expandable={true}>
 *           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
 *           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
 *           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
 *         </CardText>
 *         <CardActions>
 *           <FlatButton label="Expand" onClick={this.handleExpand} />
 *           <FlatButton label="Reduce" onClick={this.handleReduce} />
 *         </CardActions>
 *       </Card>
 *     );
 *   }
 * }
 * 
 */
var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: null
    }, _this.handleExpanding = function (event) {
      event.preventDefault();
      var newExpandedState = !_this.state.expanded;
      // no automatic state update when the component is controlled
      if (_this.props.expanded === null) {
        _this.setState({ expanded: newExpandedState });
      }
      if (_this.props.onExpandChange) {
        _this.props.onExpandChange(newExpandedState);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        expanded: this.props.expanded === null ? this.props.initiallyExpanded === true : this.props.expanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // update the state when the component is controlled.
      if (nextProps.expanded !== null) this.setState({ expanded: nextProps.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          containerStyle = _props.containerStyle,
          children = _props.children,
          expandable = _props.expandable,
          expandedProp = _props.expanded,
          initiallyExpanded = _props.initiallyExpanded,
          onExpandChange = _props.onExpandChange,
          other = _objectWithoutProperties(_props, ['style', 'containerStyle', 'children', 'expandable', 'expanded', 'initiallyExpanded', 'onExpandChange']);

      var lastElement = void 0;
      var expanded = this.state.expanded;
      var newChildren = _react2.default.Children.map(children, function (currentChild) {
        var doClone = false;
        var newChild = undefined;
        var newProps = {};
        var element = currentChild;
        if (!currentChild || !currentChild.props) {
          return null;
        }
        if (expanded === false && currentChild.props.expandable === true) return;
        if (currentChild.props.actAsExpander === true) {
          doClone = true;
          newProps.onClick = _this2.handleExpanding;
          newProps.style = Object.assign({ cursor: 'pointer' }, currentChild.props.style);
        }
        if (currentChild.props.showExpandableButton === true) {
          doClone = true;
          newChild = _react2.default.createElement(_CardExpandable2.default, {
            closeIcon: currentChild.props.closeIcon,
            expanded: expanded,
            onExpanding: _this2.handleExpanding,
            openIcon: currentChild.props.openIcon,
            iconStyle: currentChild.props.iconStyle
          });
        }
        if (doClone) {
          element = _react2.default.cloneElement(currentChild, newProps, currentChild.props.children, newChild);
        }
        lastElement = element;
        return element;
      }, this);

      // If the last element is text or a title we should add
      // 8px padding to the bottom of the card
      var addBottomPadding = lastElement && (lastElement.type.muiName === 'CardText' || lastElement.type.muiName === 'CardTitle');

      var mergedStyles = Object.assign({
        zIndex: 1
      }, style);
      var containerMergedStyles = Object.assign({
        paddingBottom: addBottomPadding ? 8 : 0
      }, containerStyle);

      return _react2.default.createElement(
        _Paper2.default,
        Object.assign({}, other, { style: mergedStyles }),
        _react2.default.createElement(
          'div',
          { style: containerMergedStyles },
          newChildren
        )
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  /**
   * @property {PropTypes.node} children - Can be used to render elements inside the Card.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.object} containerStyle - Override the inline-styles of the container element.
   */
  containerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} expandable - If true, this card component is expandable. Can be set on any child of the `Card` component.
   */
  expandable: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} expanded - Whether this card is expanded.
   * If `true` or `false` the component is controlled.
   * if `null` the component is uncontrolled.
   */
  expanded: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} initiallyExpanded - Whether this card is initially expanded.
   */
  initiallyExpanded: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} onExpandChange - Callback function fired when the `expandable` state of the card has changed.
   *
   * @param {PropTypes.boolean} newExpandedState Represents the new `expanded` state of the card.
   */
  onExpandChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} showExpandableButton - If true, this card component will include a button to expand the card. `CardTitle`,
   * `CardHeader` and `CardActions` implement `showExpandableButton`. Any child component
   * of `Card` can implements `showExpandableButton` or forwards the property to a child
   * component supporting it.
   */
  showExpandableButton: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
Card.defaultProps = {
  expandable: false,
  expanded: null,
  initiallyExpanded: false
};
exports.default = Card;

//# sourceMappingURL=Card.js.map