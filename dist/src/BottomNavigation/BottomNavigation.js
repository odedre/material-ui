'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getStyles(props, context) {
  var bottomNavigation = context.muiTheme.bottomNavigation;


  var styles = {
    root: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: bottomNavigation.backgroundColor,
      height: bottomNavigation.height
    },
    item: {
      flex: '1'
    }
  };

  return styles;
}

/**
 * @description The bottom navigation is a special kind of toolbar that’s used for navigation.
 * Also see https://www.google.com/design/spec/components/bottom-navigation.html#bottom-navigation-behavior
 * 
 * @example 
 * 
 * // A simple example of `BottomNavigation`, with three labels and icons provided. The selected `BottomNavigationItem` is determined by application state (for instance, by the URL).
 * 
 * import React, {Component} from 'react';
 * import FontIcon from 'material-ui/FontIcon';
 * import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
 * import Paper from 'material-ui/Paper';
 * import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
 * 
 * const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
 * const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
 * const nearbyIcon = <IconLocationOn />;
 * 
 * class BottomNavigationExampleSimple extends Component {
 *   state = {
 *     selectedIndex: 0,
 *   };
 * 
 *   select = (index) => this.setState({selectedIndex: index});
 * 
 *   render() {
 *     return (
 *       <Paper zDepth={1}>
 *         <BottomNavigation selectedIndex={this.state.selectedIndex}>
 *           <BottomNavigationItem
 *             label="Recents"
 *             icon={recentsIcon}
 *             onClick={() => this.select(0)}
 *           />
 *           <BottomNavigationItem
 *             label="Favorites"
 *             icon={favoritesIcon}
 *             onClick={() => this.select(1)}
 *           />
 *           <BottomNavigationItem
 *             label="Nearby"
 *             icon={nearbyIcon}
 *             onClick={() => this.select(2)}
 *           />
 *         </BottomNavigation>
 *       </Paper>
 *     );
 *   }
 * }
 * 
 * export default BottomNavigationExampleSimple;
 * 
 */
var BottomNavigation = function BottomNavigation(props, context) {
  var children = props.children,
      style = props.style,
      selectedIndex = props.selectedIndex,
      other = _objectWithoutProperties(props, ['children', 'style', 'selectedIndex']);

  var prepareStyles = context.muiTheme.prepareStyles;

  var styles = getStyles(props, context);

  var preparedChildren = _react.Children.map(children, function (child, index) {
    return (0, _react.cloneElement)(child, {
      style: Object.assign({}, styles.item, child.props.style),
      selected: index === selectedIndex
    });
  });

  return _react2.default.createElement(
    'div',
    Object.assign({}, other, { style: prepareStyles(Object.assign({}, styles.root, style)) }),
    preparedChildren
  );
};

BottomNavigation.propTypes = {
  /**
   * @property {PropTypes.node} children - The `BottomNavigationItem`s to populate the element with.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.number} selectedIndex - The index of the currently selected navigation item.
   */
  selectedIndex: _propTypes2.default.number,
  /**
   * @ignore
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

BottomNavigation.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = BottomNavigation;

//# sourceMappingURL=BottomNavigation.js.map