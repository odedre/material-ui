'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = require('../MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = require('../Popover/Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _propTypes3 = require('../utils/propTypes');

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description React Auto-complete is an extension of a regular text-field that will auto-complete the input dynamically.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * It can take different auto-complete filters and uses a menu to display suggestions.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * More information at [material-ui.com](http://www.material-ui.com/#/components/auto-complete)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // The input is used to create the `dataSource`, so the input always matches three entries.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React, {Component} from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AutoComplete from 'material-ui/AutoComplete';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default class AutoCompleteExampleSimple extends Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   state = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     dataSource: [],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   handleUpdateInput = (value) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     this.setState({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSource: [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         value + value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         value + value + value,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       ],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   render() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           hintText="Type anything"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           dataSource={this.state.dataSource}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           onUpdateInput={this.handleUpdateInput}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           hintText="Type anything"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           dataSource={this.state.dataSource}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           onUpdateInput={this.handleUpdateInput}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           floatingLabelText="Full width"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           fullWidth={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // The first example has `MenuItems` in its data source that display on data entry. The second example uses an array of values as its dataSource, and updates on focus. Both examples have filtering disabled.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AutoComplete from 'material-ui/AutoComplete';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import MenuItem from 'material-ui/MenuItem';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const dataSource1 = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     text: 'text-value1',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     value: (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <MenuItem
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         primaryText="text-value1"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         secondaryText="&#9786;"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     text: 'text-value2',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     value: (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <MenuItem
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         primaryText="text-value2"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         secondaryText="&#9786;"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     ),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const dataSource2 = ['12345', '23456', '34567'];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const dataSource3 = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   {textKey: 'Some Text', valueKey: 'someFirstValue'},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   {textKey: 'Some Text', valueKey: 'someSecondValue'},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const dataSourceConfig = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   text: 'textKey',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   value: 'valueKey',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const AutoCompleteExampleDataSource = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       hintText="text-value data"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       filter={AutoComplete.noFilter}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSource={dataSource1}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       floatingLabelText="showAllItems"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       filter={AutoComplete.noFilter}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       openOnFocus={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSource={dataSource2}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     /><br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       floatingLabelText="Same text, different values"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       filter={AutoComplete.noFilter}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       openOnFocus={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSource={dataSource3}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSourceConfig={dataSourceConfig}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default AutoCompleteExampleDataSource;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // Two examples of filtering. The first uses `caseInsensitiveFilter`, the second uses fuzzyFilter, and limits the number of results displayed using the `maxSearchResults` property.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AutoComplete from 'material-ui/AutoComplete';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const colors = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Red',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Orange',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Yellow',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Green',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Blue',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Purple',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Black',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'White',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const fruit = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Apple', 'Apricot', 'Avocado',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Boysenberry', 'Blood Orange',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Coconut', 'Cranberry', 'Clementine',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Damson', 'Date', 'Dragonfruit', 'Durian',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Elderberry',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Feijoa', 'Fig',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Honeydew', 'Huckleberry',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Kiwi fruit', 'Kumquat',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Lemon', 'Lime', 'Loquat', 'Lychee',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Nectarine',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Olive', 'Orange',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Quince',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Ugli fruit',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Watermelon',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const AutoCompleteExampleFilters = () => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       floatingLabelText="Type 'r', case insensitive"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       filter={AutoComplete.caseInsensitiveFilter}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSource={colors}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <br />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       floatingLabelText="Type 'peah', fuzzy search"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       filter={AutoComplete.fuzzyFilter}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       dataSource={fruit}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       maxSearchResults={5}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default AutoCompleteExampleFilters;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // `AutoComplete` search text can be implemented as a controlled value, where `searchText` is handled by state in the parent component. This value is reset with the `onNewRequest` callback.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React, {Component} from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AutoComplete from 'material-ui/AutoComplete';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const colors = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Red',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Orange',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Yellow',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Green',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Blue',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Purple',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Black',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'White',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default class AutoCompleteExampleControlled extends Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   state = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     searchText: '',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   handleUpdateInput = (searchText) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     this.setState({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       searchText: searchText,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   handleNewRequest = () => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     this.setState({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       searchText: '',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   render() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           hintText="Type 'r', case insensitive"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           searchText={this.state.searchText}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           onUpdateInput={this.handleUpdateInput}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           onNewRequest={this.handleNewRequest}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           dataSource={colors}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           openOnFocus={true}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * // Provide props to be passed into the Menu component.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import React, {Component} from 'react';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * import AutoComplete from 'material-ui/AutoComplete';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const colors = [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Red',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Orange',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Yellow',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Green',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Blue',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Purple',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'Black',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   'White',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * const menuProps = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   desktop: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   disableAutoFocus: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * export default class AutoCompleteExampleMenuProps extends Component {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   render() {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     return (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         <AutoComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           hintText="Type anything"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           dataSource={colors}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *           menuProps={menuProps}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function getStyles(props, context, state) {
  var anchorEl = state.anchorEl;
  var fullWidth = props.fullWidth;


  var styles = {
    root: {
      display: 'inline-block',
      position: 'relative',
      width: fullWidth ? '100%' : 256
    },
    menu: {
      width: '100%'
    },
    list: {
      display: 'block',
      width: fullWidth ? '100%' : 256
    },
    innerDiv: {
      overflow: 'hidden'
    }
  };

  if (anchorEl && fullWidth) {
    styles.popover = {
      width: anchorEl.clientWidth
    };
  }

  return styles;
}

var AutoComplete = function (_Component) {
  _inherits(AutoComplete, _Component);

  function AutoComplete() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      focusTextField: true,
      open: false,
      searchText: undefined
    }, _this.handleRequestClose = function () {
      // Only take into account the Popover clickAway when we are
      // not focusing the TextField.
      if (!_this.state.focusTextField) {
        _this.close();
      }
    }, _this.handleMouseDown = function (event) {
      // Keep the TextField focused
      event.preventDefault();
    }, _this.handleItemTouchTap = function (event, child) {
      var dataSource = _this.props.dataSource;
      var index = parseInt(child.key, 10);
      var chosenRequest = dataSource[index];
      var searchText = _this.chosenRequestText(chosenRequest);

      var updateInput = function updateInput() {
        return _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'click'
        });
      };
      _this.timerTouchTapCloseId = function () {
        return setTimeout(function () {
          _this.timerTouchTapCloseId = null;
          _this.close();
          _this.props.onNewRequest(chosenRequest, index);
        }, _this.props.menuCloseDelay);
      };

      if (typeof _this.props.searchText !== 'undefined') {
        updateInput();
        _this.timerTouchTapCloseId();
      } else {
        _this.setState({
          searchText: searchText
        }, function () {
          updateInput();
          _this.timerTouchTapCloseId();
        });
      }
    }, _this.chosenRequestText = function (chosenRequest) {
      if (typeof chosenRequest === 'string') {
        return chosenRequest;
      } else {
        return chosenRequest[_this.props.dataSourceConfig.text];
      }
    }, _this.handleEscKeyDown = function () {
      _this.close();
    }, _this.handleKeyDown = function (event) {
      if (_this.props.onKeyDown) _this.props.onKeyDown(event);

      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.close();
          var searchText = _this.state.searchText;
          if (searchText !== '') {
            _this.props.onNewRequest(searchText, -1);
          }
          break;

        case 'esc':
          _this.close();
          break;

        case 'down':
          event.preventDefault();
          _this.setState({
            open: true,
            focusTextField: false,
            anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
          });
          break;

        default:
          break;
      }
    }, _this.handleChange = function (event) {
      var searchText = event.target.value;

      // Make sure that we have a new searchText.
      // Fix an issue with a Cordova Webview
      if (searchText === _this.state.searchText) {
        return;
      }

      _this.setState({
        searchText: searchText,
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
      }, function () {
        _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'change'
        });
      });
    }, _this.handleBlur = function (event) {
      if (_this.state.focusTextField && _this.timerTouchTapCloseId === null) {
        _this.timerBlurClose = setTimeout(function () {
          _this.close();
        }, 0);
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      if (!_this.state.open && _this.props.openOnFocus) {
        _this.setState({
          open: true,
          anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
        });
      }

      _this.setState({
        focusTextField: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AutoComplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.requestsList = [];
      this.setState({
        open: this.props.open,
        searchText: this.props.searchText || ''
      });
      this.timerTouchTapCloseId = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.searchText !== nextProps.searchText) {
        this.setState({
          searchText: nextProps.searchText
        });
      }
      if (this.props.open !== nextProps.open) {
        this.setState({
          open: nextProps.open,
          anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerTouchTapCloseId);
      clearTimeout(this.timerBlurClose);
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({
        open: false,
        anchorEl: null
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.refs.searchTextField.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.searchTextField.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchorOrigin = _props.anchorOrigin,
          animated = _props.animated,
          animation = _props.animation,
          dataSource = _props.dataSource,
          dataSourceConfig = _props.dataSourceConfig,
          disableFocusRipple = _props.disableFocusRipple,
          errorStyle = _props.errorStyle,
          floatingLabelText = _props.floatingLabelText,
          filter = _props.filter,
          fullWidth = _props.fullWidth,
          style = _props.style,
          hintText = _props.hintText,
          maxSearchResults = _props.maxSearchResults,
          menuCloseDelay = _props.menuCloseDelay,
          textFieldStyle = _props.textFieldStyle,
          menuStyle = _props.menuStyle,
          menuProps = _props.menuProps,
          listStyle = _props.listStyle,
          targetOrigin = _props.targetOrigin,
          onBlur = _props.onBlur,
          onClose = _props.onClose,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onNewRequest = _props.onNewRequest,
          onUpdateInput = _props.onUpdateInput,
          openOnFocus = _props.openOnFocus,
          popoverProps = _props.popoverProps,
          searchTextProp = _props.searchText,
          other = _objectWithoutProperties(_props, ['anchorOrigin', 'animated', 'animation', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'floatingLabelText', 'filter', 'fullWidth', 'style', 'hintText', 'maxSearchResults', 'menuCloseDelay', 'textFieldStyle', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin', 'onBlur', 'onClose', 'onFocus', 'onKeyDown', 'onNewRequest', 'onUpdateInput', 'openOnFocus', 'popoverProps', 'searchText']);

      var _ref2 = popoverProps || {},
          popoverStyle = _ref2.style,
          popoverOther = _objectWithoutProperties(_ref2, ['style']);

      var _state = this.state,
          open = _state.open,
          anchorEl = _state.anchorEl,
          searchText = _state.searchText,
          focusTextField = _state.focusTextField;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var requestsList = [];

      dataSource.every(function (item, index) {
        switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
          case 'string':
            if (filter(searchText, item, item)) {
              requestsList.push({
                text: item,
                value: _react2.default.createElement(_MenuItem2.default, {
                  innerDivStyle: styles.innerDiv,
                  value: item,
                  primaryText: item,
                  disableFocusRipple: disableFocusRipple,
                  key: index
                })
              });
            }
            break;

          case 'object':
            if (item && typeof item[_this2.props.dataSourceConfig.text] === 'string') {
              var itemText = item[_this2.props.dataSourceConfig.text];
              if (!_this2.props.filter(searchText, itemText, item)) break;

              var itemValue = item[_this2.props.dataSourceConfig.value];
              if (itemValue.type && (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {
                requestsList.push({
                  text: itemText,
                  value: _react2.default.cloneElement(itemValue, {
                    key: index,
                    disableFocusRipple: disableFocusRipple
                  })
                });
              } else {
                requestsList.push({
                  text: itemText,
                  value: _react2.default.createElement(_MenuItem2.default, {
                    innerDivStyle: styles.innerDiv,
                    primaryText: itemText,
                    disableFocusRipple: disableFocusRipple,
                    key: index
                  })
                });
              }
            }
            break;

          default:
          // Do nothing
        }

        return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
      });

      this.requestsList = requestsList;

      var menu = open && requestsList.length > 0 && _react2.default.createElement(
        _Menu2.default,
        Object.assign({
          ref: 'menu',
          autoWidth: false,
          disableAutoFocus: focusTextField,
          onEscKeyDown: this.handleEscKeyDown,
          initiallyKeyboardFocused: true,
          onItemTouchTap: this.handleItemTouchTap,
          onMouseDown: this.handleMouseDown,
          style: Object.assign(styles.menu, menuStyle),
          listStyle: Object.assign(styles.list, listStyle)
        }, menuProps),
        requestsList.map(function (i) {
          return i.value;
        })
      );

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(Object.assign(styles.root, style)) },
        _react2.default.createElement(_TextField2.default, Object.assign({
          ref: 'searchTextField',
          autoComplete: 'off',
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          floatingLabelText: floatingLabelText,
          hintText: hintText,
          fullWidth: fullWidth,
          multiLine: false,
          errorStyle: errorStyle,
          style: textFieldStyle
        }, other, {
          // value and onChange are idiomatic properties often leaked.
          // We prevent their overrides in order to reduce potential bugs.
          value: searchText,
          onChange: this.handleChange
        })),
        _react2.default.createElement(
          _Popover2.default,
          Object.assign({
            style: Object.assign({}, styles.popover, popoverStyle),
            canAutoPosition: false,
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            open: open,
            anchorEl: anchorEl,
            useLayerForClickAway: false,
            onRequestClose: this.handleRequestClose,
            animated: animated,
            animation: animation
          }, popoverOther),
          menu
        )
      );
    }
  }]);

  return AutoComplete;
}(_react.Component);

AutoComplete.propTypes = {
  /**
   * @property {PropTypes.custom} anchorOrigin - Location of the anchor for the auto complete.
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.bool} animated - If true, the auto complete is animated as it is toggled.
   */
  animated: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} animation - Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * @property {PropTypes.array} dataSource - Array of strings or nodes used to populate the list.
   */
  dataSource: _propTypes2.default.array.isRequired,
  /**
   * @property {PropTypes.object} dataSourceConfig - Config for objects list dataSource.
   *
   * @typedef {Object} dataSourceConfig
   *
   * @property {string} text `dataSource` element key used to find a string to be matched for search
   * and shown as a `TextField` input value after choosing the result.
   * @property {string} value `dataSource` element key used to find a string to be shown in search results.
   */
  dataSourceConfig: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} disableFocusRipple - Disables focus ripple when true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} errorStyle - Override style prop for error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} errorText - The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * @property {PropTypes.func} filter - Callback function used to filter the auto complete.
   *
   * @param {string} searchText The text to search for within `dataSource`.
   * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
   * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
   */
  filter: _propTypes2.default.func,
  /**
   * @property {PropTypes.node} floatingLabelText - The content to use for adding floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * @property {PropTypes.bool} fullWidth - If true, the field receives the property `width: 100%`.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} hintText - The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * @property {PropTypes.object} listStyle - Override style for list.
   */
  listStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.number} maxSearchResults - The max number of search results to be shown.
   * By default it shows all the items which matches filter.
   */
  maxSearchResults: _propTypes2.default.number,
  /**
   * @property {PropTypes.number} menuCloseDelay - Delay for closing time of the menu.
   */
  menuCloseDelay: _propTypes2.default.number,
  /**
   * @property {PropTypes.object} menuProps - Props to be passed to menu.
   */
  menuProps: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} menuStyle - Override style for menu.
   */
  menuStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onClose - Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onNewRequest - Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
   *
   * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
   * or the text value of the corresponding list item that was selected.
   * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
   * `TextField`.
   */
  onNewRequest: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onUpdateInput - Callback function that is fired when the user updates the `TextField`.
   *
   * @param {string} searchText The auto-complete's `searchText` value.
   * @param {array} dataSource The auto-complete's `dataSource` array.
   * @param {object} params Additional information linked the update.
   */
  onUpdateInput: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} open - Auto complete menu is open if true.
   */
  open: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} openOnFocus - If true, the list item is showed when a focus event triggers.
   */
  openOnFocus: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} popoverProps - Props to be passed to popover.
   */
  popoverProps: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} searchText - Text being input to auto complete.
   */
  searchText: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.origin} targetOrigin - Origin for location of target.
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * @property {PropTypes.object} textFieldStyle - Override the inline-styles of AutoComplete's TextField element.
   */
  textFieldStyle: _propTypes2.default.object
};
AutoComplete.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  dataSourceConfig: {
    text: 'text',
    value: 'value'
  },
  disableFocusRipple: true,
  filter: function filter(searchText, key) {
    return searchText !== '' && key.indexOf(searchText) !== -1;
  },
  fullWidth: false,
  open: false,
  openOnFocus: false,
  onUpdateInput: function onUpdateInput() {},
  onNewRequest: function onNewRequest() {},
  menuCloseDelay: 300,
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
AutoComplete.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};


AutoComplete.levenshteinDistance = function (searchText, key) {
  var current = [];
  var prev = void 0;
  var value = void 0;

  for (var i = 0; i <= key.length; i++) {
    for (var j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

AutoComplete.noFilter = function () {
  return true;
};

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
  return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = function (searchText, key) {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
  if (distanceLessThan === undefined) {
    return AutoComplete.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return function (s, k) {
    return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
  };
};

AutoComplete.fuzzyFilter = function (searchText, key) {
  var compareString = key.toLowerCase();
  searchText = searchText.toLowerCase();

  var searchTextIndex = 0;
  for (var index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1;
    }
  }

  return searchTextIndex === searchText.length;
};

AutoComplete.Item = _MenuItem2.default;
AutoComplete.Divider = _Divider2.default;

exports.default = AutoComplete;

//# sourceMappingURL=AutoComplete.js.map