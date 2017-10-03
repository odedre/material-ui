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

function getStyles(props) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -props.padding / 2
    },
    item: {
      boxSizing: 'border-box',
      padding: props.padding / 2
    }
  };
}

/**
 * 
 * @description
 * 
 * Simple flex-box based Grid List implementation. Support tiles with arbitrary cell size, but cannot implement complex layouts (limited to flex-box limitations).
 * 
 * Also see http://www.material-ui.com/#/components/grid-list
 * 
 * @example 
 * 
 * // A simple example of a scrollable `GridList` containing a Subheader.
 * 
 * import React from 'react';
 * import {GridList, GridTile} from 'material-ui/GridList';
 * import IconButton from 'material-ui/IconButton';
 * import Subheader from 'material-ui/Subheader';
 * import StarBorder from 'material-ui/svg-icons/toggle/star-border';
 * 
 * const styles = {
 *   root: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *     justifyContent: 'space-around',
 *   },
 *   gridList: {
 *     width: 500,
 *     height: 450,
 *     overflowY: 'auto',
 *   },
 * };
 * 
 * const tilesData = [
 *   {
 *     img: 'images/grid-list/00-52-29-429_640.jpg',
 *     title: 'Breakfast',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/burger-827309_640.jpg',
 *     title: 'Tasty burger',
 *     author: 'pashminu',
 *   },
 *   {
 *     img: 'images/grid-list/camera-813814_640.jpg',
 *     title: 'Camera',
 *     author: 'Danson67',
 *   },
 *   {
 *     img: 'images/grid-list/morning-819362_640.jpg',
 *     title: 'Morning',
 *     author: 'fancycrave1',
 *   },
 *   {
 *     img: 'images/grid-list/hats-829509_640.jpg',
 *     title: 'Hats',
 *     author: 'Hans',
 *   },
 *   {
 *     img: 'images/grid-list/honey-823614_640.jpg',
 *     title: 'Honey',
 *     author: 'fancycravel',
 *   },
 *   {
 *     img: 'images/grid-list/vegetables-790022_640.jpg',
 *     title: 'Vegetables',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/water-plant-821293_640.jpg',
 *     title: 'Water plant',
 *     author: 'BkrmadtyaKarki',
 *   },
 * ];
 * 
 * const GridListExampleSimple = () => (
 *   <div style={styles.root}>
 *     <GridList
 *       cellHeight={180}
 *       style={styles.gridList}
 *     >
 *       <Subheader>December</Subheader>
 *       {tilesData.map((tile) => (
 *         <GridTile
 *           key={tile.img}
 *           title={tile.title}
 *           subtitle={<span>by <b>{tile.author}</b></span>}
 *           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
 *         >
 *           <img src={tile.img} />
 *         </GridTile>
 *       ))}
 *     </GridList>
 *   </div>
 * );
 * 
 * export default GridListExampleSimple;
 * 
 * 
 * @example 
 * 
 * // This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * // The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 *  
 * 
 * import React from 'react';
 * import {GridList, GridTile} from 'material-ui/GridList';
 * import IconButton from 'material-ui/IconButton';
 * import StarBorder from 'material-ui/svg-icons/toggle/star-border';
 * 
 * const styles = {
 *   root: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *     justifyContent: 'space-around',
 *   },
 *   gridList: {
 *     width: 500,
 *     height: 450,
 *     overflowY: 'auto',
 *   },
 * };
 * 
 * const tilesData = [
 *   {
 *     img: 'images/grid-list/00-52-29-429_640.jpg',
 *     title: 'Breakfast',
 *     author: 'jill111',
 *     featured: true,
 *   },
 *   {
 *     img: 'images/grid-list/burger-827309_640.jpg',
 *     title: 'Tasty burger',
 *     author: 'pashminu',
 *   },
 *   {
 *     img: 'images/grid-list/camera-813814_640.jpg',
 *     title: 'Camera',
 *     author: 'Danson67',
 *   },
 *   {
 *     img: 'images/grid-list/morning-819362_640.jpg',
 *     title: 'Morning',
 *     author: 'fancycrave1',
 *     featured: true,
 *   },
 *   {
 *     img: 'images/grid-list/hats-829509_640.jpg',
 *     title: 'Hats',
 *     author: 'Hans',
 *   },
 *   {
 *     img: 'images/grid-list/honey-823614_640.jpg',
 *     title: 'Honey',
 *     author: 'fancycravel',
 *   },
 *   {
 *     img: 'images/grid-list/vegetables-790022_640.jpg',
 *     title: 'Vegetables',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/water-plant-821293_640.jpg',
 *     title: 'Water plant',
 *     author: 'BkrmadtyaKarki',
 *   },
 * ];
 * 
 * const GridListExampleComplex = () => (
 *   <div style={styles.root}>
 *     <GridList
 *       cols={2}
 *       cellHeight={200}
 *       padding={1}
 *       style={styles.gridList}
 *     >
 *       {tilesData.map((tile) => (
 *         <GridTile
 *           key={tile.img}
 *           title={tile.title}
 *           actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
 *           actionPosition="left"
 *           titlePosition="top"
 *           titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
 *           cols={tile.featured ? 2 : 1}
 *           rows={tile.featured ? 2 : 1}
 *         >
 *           <img src={tile.img} />
 *         </GridTile>
 *       ))}
 *     </GridList>
 *   </div>
 * );
 * 
 * export default GridListExampleComplex;
 * 
 * @example 
 * 
 * // This example demonstrates the horizontal scrollable single-line grid list of images.
 * 
 * import React from 'react';
 * import {GridList, GridTile} from 'material-ui/GridList';
 * import IconButton from 'material-ui/IconButton';
 * import StarBorder from 'material-ui/svg-icons/toggle/star-border';
 * 
 * const styles = {
 *   root: {
 *     display: 'flex',
 *     flexWrap: 'wrap',
 *     justifyContent: 'space-around',
 *   },
 *   gridList: {
 *     display: 'flex',
 *     flexWrap: 'nowrap',
 *     overflowX: 'auto',
 *   },
 *   titleStyle: {
 *     color: 'rgb(0, 188, 212)',
 *   },
 * };
 * 
 * const tilesData = [
 *   {
 *     img: 'images/grid-list/00-52-29-429_640.jpg',
 *     title: 'Breakfast',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/burger-827309_640.jpg',
 *     title: 'Tasty burger',
 *     author: 'pashminu',
 *   },
 *   {
 *     img: 'images/grid-list/camera-813814_640.jpg',
 *     title: 'Camera',
 *     author: 'Danson67',
 *   },
 *   {
 *     img: 'images/grid-list/morning-819362_640.jpg',
 *     title: 'Morning',
 *     author: 'fancycrave1',
 *   },
 *   {
 *     img: 'images/grid-list/hats-829509_640.jpg',
 *     title: 'Hats',
 *     author: 'Hans',
 *   },
 *   {
 *     img: 'images/grid-list/honey-823614_640.jpg',
 *     title: 'Honey',
 *     author: 'fancycravel',
 *   },
 *   {
 *     img: 'images/grid-list/vegetables-790022_640.jpg',
 *     title: 'Vegetables',
 *     author: 'jill111',
 *   },
 *   {
 *     img: 'images/grid-list/water-plant-821293_640.jpg',
 *     title: 'Water plant',
 *     author: 'BkrmadtyaKarki',
 *   },
 * ];
 * 
 * const GridListExampleSingleLine = () => (
 *   <div style={styles.root}>
 *     <GridList style={styles.gridList} cols={2.2}>
 *       {tilesData.map((tile) => (
 *         <GridTile
 *           key={tile.img}
 *           title={tile.title}
 *           actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
 *           titleStyle={styles.titleStyle}
 *           titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
 *         >
 *           <img src={tile.img} />
 *         </GridTile>
 *       ))}
 *     </GridList>
 *   </div>
 * );
 * 
 * export default GridListExampleSingleLine;
 * 
 */

var GridList = function (_Component) {
  _inherits(GridList, _Component);

  function GridList() {
    _classCallCheck(this, GridList);

    return _possibleConstructorReturn(this, (GridList.__proto__ || Object.getPrototypeOf(GridList)).apply(this, arguments));
  }

  _createClass(GridList, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cols = _props.cols,
          padding = _props.padding,
          cellHeight = _props.cellHeight,
          children = _props.children,
          style = _props.style,
          other = _objectWithoutProperties(_props, ['cols', 'padding', 'cellHeight', 'children', 'style']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var mergedRootStyles = Object.assign(styles.root, style);

      var wrappedChildren = _react2.default.Children.map(children, function (currentChild) {
        if (_react2.default.isValidElement(currentChild) && currentChild.type.muiName === 'Subheader') {
          return currentChild;
        }
        var childCols = currentChild.props.cols || 1;
        var childRows = currentChild.props.rows || 1;
        var itemStyle = Object.assign({}, styles.item, {
          width: 100 / cols * childCols + '%',
          height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + padding
        });

        return _react2.default.createElement(
          'div',
          { style: prepareStyles(itemStyle) },
          currentChild
        );
      });

      return _react2.default.createElement(
        'div',
        Object.assign({ style: prepareStyles(mergedRootStyles) }, other),
        wrappedChildren
      );
    }
  }]);

  return GridList;
}(_react.Component);

GridList.propTypes = {
  /**
   * @property {PropTypes.number|auto} cellHeight - Number of px for one cell height.
   * You can set `'auto'` if you want to let the children determine the height.
   */
  cellHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['auto'])]),
  /**
   * @property {PropTypes.node} children - Grid Tiles that will be in Grid List.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.number} cols - Number of columns.
   */
  cols: _propTypes2.default.number,
  /**
   * @property {PropTypes.number} padding - Number of px for the padding/spacing between items.
   */
  padding: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
GridList.defaultProps = {
  cols: 2,
  padding: 4,
  cellHeight: 180
};
GridList.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = GridList;

//# sourceMappingURL=GridList.js.map