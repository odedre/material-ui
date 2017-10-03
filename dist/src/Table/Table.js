'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getStyles(props, context) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      table = _context$muiTheme.table;


  return {
    root: {
      backgroundColor: table.backgroundColor,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      tableLayout: 'fixed',
      fontFamily: baseTheme.fontFamily
    },
    bodyTable: {
      height: props.fixedHeader || props.fixedFooter ? props.height : 'auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    tableWrapper: {
      height: props.fixedHeader || props.fixedFooter ? 'auto' : props.height,
      overflow: 'auto'
    }
  };
}

/**
* @description
* 
* Tables are used to display data and to organize it.
* Also see http://www.material-ui.com/#/components/table 
* 
* 
* @example 
* 
* // A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
* 
* import React from 'react';
*
* import {
*   Table,
*   TableBody,
*   TableHeader,
*   TableHeaderColumn,
*   TableRow,
*   TableRowColumn,
* } from 'material-ui/Table';
* 
* 
* 
* const TableExampleSimple = () => (
*   <Table>
*     <TableHeader>
*       <TableRow>
*         <TableHeaderColumn>ID</TableHeaderColumn>
*         <TableHeaderColumn>Name</TableHeaderColumn>
*         <TableHeaderColumn>Status</TableHeaderColumn>
*       </TableRow>
*     </TableHeader>
*     <TableBody>
*       <TableRow>
*         <TableRowColumn>1</TableRowColumn>
*         <TableRowColumn>John Smith</TableRowColumn>
*         <TableRowColumn>Employed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>2</TableRowColumn>
*         <TableRowColumn>Randal White</TableRowColumn>
*         <TableRowColumn>Unemployed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>3</TableRowColumn>
*         <TableRowColumn>Stephanie Sanders</TableRowColumn>
*         <TableRowColumn>Employed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>4</TableRowColumn>
*         <TableRowColumn>Steve Brown</TableRowColumn>
*         <TableRowColumn>Employed</TableRowColumn>
*       </TableRow>
*       <TableRow>
*         <TableRowColumn>5</TableRowColumn>
*         <TableRowColumn>Christopher Nolan</TableRowColumn>
*         <TableRowColumn>Unemployed</TableRowColumn>
*       </TableRow>
*     </TableBody>
*   </Table>
* );
* 
* export default TableExampleSimple;
* 
* @example 
* // Controlled example
*
* import React, {Component} from 'react';
* import {
*   Table,
*   TableBody,
*   TableHeader,
*   TableHeaderColumn,
*   TableRow,
*   TableRowColumn,
* } from 'material-ui/Table';
* 
* export default class TableExampleControlled extends Component {
*   state = {
*     selected: [1],
*   };
* 
*   isSelected = (index) => {
*     return this.state.selected.indexOf(index) !== -1;
*   };
* 
*   handleRowSelection = (selectedRows) => {
*     this.setState({
*       selected: selectedRows,
*     });
*   };
* 
*   render() {
*     return (
*       <Table onRowSelection={this.handleRowSelection}>
*         <TableHeader>
*           <TableRow>
*             <TableHeaderColumn>ID</TableHeaderColumn>
*             <TableHeaderColumn>Name</TableHeaderColumn>
*             <TableHeaderColumn>Status</TableHeaderColumn>
*           </TableRow>
*         </TableHeader>
*         <TableBody>
*           <TableRow selected={this.isSelected(0)}>
*             <TableRowColumn>1</TableRowColumn>
*             <TableRowColumn>John Smith</TableRowColumn>
*             <TableRowColumn>Employed</TableRowColumn>
*           </TableRow>
*           <TableRow selected={this.isSelected(1)}>
*             <TableRowColumn>2</TableRowColumn>
*             <TableRowColumn>Randal White</TableRowColumn>
*             <TableRowColumn>Unemployed</TableRowColumn>
*           </TableRow>
*           <TableRow selected={this.isSelected(2)}>
*             <TableRowColumn>3</TableRowColumn>
*             <TableRowColumn>Stephanie Sanders</TableRowColumn>
*             <TableRowColumn>Employed</TableRowColumn>
*           </TableRow>
*           <TableRow selected={this.isSelected(3)}>
*             <TableRowColumn>4</TableRowColumn>
*             <TableRowColumn>Steve Brown</TableRowColumn>
*             <TableRowColumn>Employed</TableRowColumn>
*           </TableRow>
*         </TableBody>
*       </Table>
*     );
*   }
* }
* 
*
* @example 
* //A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
*
* import React, {Component} from 'react';
* import {
*   Table,
*   TableBody,
*   TableFooter,
*   TableHeader,
*   TableHeaderColumn,
*   TableRow,
*   TableRowColumn,
* } from 'material-ui/Table';
* import TextField from 'material-ui/TextField';
* import Toggle from 'material-ui/Toggle';
* 
* const styles = {
*   propContainer: {
*     width: 200,
*     overflow: 'hidden',
*     margin: '20px auto 0',
*   },
*   propToggleHeader: {
*     margin: '20px auto 10px',
*   },
* };
* 
* const tableData = [
*   {
*     name: 'John Smith',
*     status: 'Employed',
*   },
*   {
*     name: 'Randal White',
*     status: 'Unemployed',
*   },
*   {
*     name: 'Stephanie Sanders',
*     status: 'Employed',
*   },
*   {
*     name: 'Steve Brown',
*     status: 'Employed',
*   },
*   {
*     name: 'Joyce Whitten',
*     status: 'Employed',
*   },
*   {
*     name: 'Samuel Roberts',
*     status: 'Employed',
*   },
*   {
*     name: 'Adam Moore',
*     status: 'Employed',
*   },
* ];
* 
* 
* export default class TableExampleComplex extends Component {
*   state = {
*     fixedHeader: true,
*     fixedFooter: true,
*     stripedRows: false,
*     showRowHover: false,
*     selectable: true,
*     multiSelectable: false,
*     enableSelectAll: false,
*     deselectOnClickaway: true,
*     showCheckboxes: true,
*     height: '300px',
*   };
* 
*   handleToggle = (event, toggled) => {
*     this.setState({
*       [event.target.name]: toggled,
*     });
*   };
* 
*   handleChange = (event) => {
*     this.setState({height: event.target.value});
*   };
* 
*   render() {
*     return (
*       <div>
*         <Table
*           height={this.state.height}
*           fixedHeader={this.state.fixedHeader}
*           fixedFooter={this.state.fixedFooter}
*           selectable={this.state.selectable}
*           multiSelectable={this.state.multiSelectable}
*         >
*           <TableHeader
*             displaySelectAll={this.state.showCheckboxes}
*             adjustForCheckbox={this.state.showCheckboxes}
*             enableSelectAll={this.state.enableSelectAll}
*           >
*             <TableRow>
*               <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
*                 Super Header
*               </TableHeaderColumn>
*             </TableRow>
*             <TableRow>
*               <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
*               <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
*               <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
*             </TableRow>
*           </TableHeader>
*           <TableBody
*             displayRowCheckbox={this.state.showCheckboxes}
*             deselectOnClickaway={this.state.deselectOnClickaway}
*             showRowHover={this.state.showRowHover}
*             stripedRows={this.state.stripedRows}
*           >
*             {tableData.map( (row, index) => (
*               <TableRow key={index}>
*                 <TableRowColumn>{index}</TableRowColumn>
*                 <TableRowColumn>{row.name}</TableRowColumn>
*                 <TableRowColumn>{row.status}</TableRowColumn>
*               </TableRow>
*               ))}
*           </TableBody>
*           <TableFooter
*             adjustForCheckbox={this.state.showCheckboxes}
*           >
*             <TableRow>
*               <TableRowColumn>ID</TableRowColumn>
*               <TableRowColumn>Name</TableRowColumn>
*               <TableRowColumn>Status</TableRowColumn>
*             </TableRow>
*             <TableRow>
*               <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
*                 Super Footer
*               </TableRowColumn>
*             </TableRow>
*           </TableFooter>
*         </Table>
* 
*         <div style={styles.propContainer}>
*           <h3>Table Properties</h3>
*           <TextField
*             floatingLabelText="Table Body Height"
*             defaultValue={this.state.height}
*             onChange={this.handleChange}
*           />
*           <Toggle
*             name="fixedHeader"
*             label="Fixed Header"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.fixedHeader}
*           />
*           <Toggle
*             name="fixedFooter"
*             label="Fixed Footer"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.fixedFooter}
*           />
*           <Toggle
*             name="selectable"
*             label="Selectable"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.selectable}
*           />
*           <Toggle
*             name="multiSelectable"
*             label="Multi-Selectable"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.multiSelectable}
*           />
*           <Toggle
*             name="enableSelectAll"
*             label="Enable Select All"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.enableSelectAll}
*           />
*           <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
*           <Toggle
*             name="deselectOnClickaway"
*             label="Deselect On Clickaway"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.deselectOnClickaway}
*           />
*           <Toggle
*             name="stripedRows"
*             label="Stripe Rows"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.stripedRows}
*           />
*           <Toggle
*             name="showRowHover"
*             label="Show Row Hover"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.showRowHover}
*           />
*           <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
*           <Toggle
*             name="showCheckboxes"
*             label="Show Checkboxes"
*             onToggle={this.handleToggle}
*             defaultToggled={this.state.showCheckboxes}
*           />
*         </div>
*       </div>
*     );
*   }
* }
* 
*/

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      allRowsSelected: false
    }, _this.onCellClick = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellClick) _this.props.onCellClick(rowNumber, columnNumber, event);
    }, _this.onCellHover = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHover) _this.props.onCellHover(rowNumber, columnNumber, event);
    }, _this.onCellHoverExit = function (rowNumber, columnNumber, event) {
      if (_this.props.onCellHoverExit) _this.props.onCellHoverExit(rowNumber, columnNumber, event);
    }, _this.onRowHover = function (rowNumber) {
      if (_this.props.onRowHover) _this.props.onRowHover(rowNumber);
    }, _this.onRowHoverExit = function (rowNumber) {
      if (_this.props.onRowHoverExit) _this.props.onRowHoverExit(rowNumber);
    }, _this.onRowSelection = function (selectedRows) {
      if (_this.state.allRowsSelected) {
        _this.setState({ allRowsSelected: false });
      }

      if (_this.props.onRowSelection) {
        _this.props.onRowSelection(selectedRows);
      }
    }, _this.onSelectAll = function () {
      if (_this.props.onRowSelection) {
        if (!_this.state.allRowsSelected) {
          _this.props.onRowSelection('all');
        } else {
          _this.props.onRowSelection('none');
        }
      }

      _this.setState({ allRowsSelected: !_this.state.allRowsSelected });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Table, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.allRowsSelected) {
        this.setState({ allRowsSelected: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
        this.setState({ allRowsSelected: nextProps.allRowsSelected });
      }
    }
  }, {
    key: 'isScrollbarVisible',
    value: function isScrollbarVisible() {
      var tableDivHeight = this.refs.tableDiv.clientHeight;
      var tableBodyHeight = this.refs.tableBody.clientHeight;

      return tableBodyHeight > tableDivHeight;
    }
  }, {
    key: 'createTableHeader',
    value: function createTableHeader(base) {
      return _react2.default.cloneElement(base, {
        enableSelectAll: base.props.enableSelectAll && this.props.selectable && this.props.multiSelectable,
        onSelectAll: this.onSelectAll,
        selectAllSelected: this.state.allRowsSelected
      });
    }
  }, {
    key: 'createTableBody',
    value: function createTableBody(base) {
      return _react2.default.cloneElement(base, {
        allRowsSelected: this.state.allRowsSelected,
        multiSelectable: this.props.multiSelectable,
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowSelection: this.onRowSelection,
        selectable: this.props.selectable
      });
    }
  }, {
    key: 'createTableFooter',
    value: function createTableFooter(base) {
      return base;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          fixedFooter = _props.fixedFooter,
          fixedHeader = _props.fixedHeader,
          style = _props.style,
          wrapperStyle = _props.wrapperStyle,
          headerStyle = _props.headerStyle,
          bodyStyle = _props.bodyStyle,
          footerStyle = _props.footerStyle;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var tHead = void 0;
      var tFoot = void 0;
      var tBody = void 0;

      _react2.default.Children.forEach(children, function (child) {
        if (!_react2.default.isValidElement(child)) return;

        var muiName = child.type.muiName;

        if (muiName === 'TableBody') {
          tBody = _this2.createTableBody(child);
        } else if (muiName === 'TableHeader') {
          tHead = _this2.createTableHeader(child);
        } else if (muiName === 'TableFooter') {
          tFoot = _this2.createTableFooter(child);
        } else {
          (0, _warning2.default)(false, 'Material-UI: Children of the Table component must be TableBody or TableHeader or TableFooter.\n           Nothing is rendered.');
        }
      });

      // If we could not find a table-header and a table-body, do not attempt to display anything.
      if (!tBody && !tHead) return null;

      var mergedTableStyle = Object.assign(styles.root, style);
      var headerTable = void 0;
      var footerTable = void 0;
      var inlineHeader = void 0;
      var inlineFooter = void 0;

      if (fixedHeader) {
        headerTable = _react2.default.createElement(
          'div',
          { style: prepareStyles(Object.assign({}, headerStyle)) },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle },
            tHead
          )
        );
      } else {
        inlineHeader = tHead;
      }

      if (tFoot !== undefined) {
        if (fixedFooter) {
          footerTable = _react2.default.createElement(
            'div',
            { style: prepareStyles(Object.assign({}, footerStyle)) },
            _react2.default.createElement(
              'table',
              { className: className, style: prepareStyles(mergedTableStyle) },
              tFoot
            )
          );
        } else {
          inlineFooter = tFoot;
        }
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(Object.assign(styles.tableWrapper, wrapperStyle)) },
        headerTable,
        _react2.default.createElement(
          'div',
          { style: prepareStyles(Object.assign(styles.bodyTable, bodyStyle)), ref: 'tableDiv' },
          _react2.default.createElement(
            'table',
            { className: className, style: mergedTableStyle, ref: 'tableBody' },
            inlineHeader,
            inlineFooter,
            tBody
          )
        ),
        footerTable
      );
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  /**
   * @property {PropTypes.bool} allRowsSelected - Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} bodyStyle - Override the inline-styles of the body's table element.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.node} children - Children passed to table.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} fixedFooter - If true, the footer will appear fixed below the table.
   * The default value is true.
   */
  fixedFooter: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} fixedHeader - If true, the header will appear fixed above the table.
   * The default value is true.
   */
  fixedHeader: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} footerStyle - Override the inline-styles of the footer's table element.
   */
  footerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} headerStyle - Override the inline-styles of the header's table element.
   */
  headerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.string} height - The height of the table.
   */
  height: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} multiSelectable - If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * @property {PropTypes.func} onCellClick - Called when a row cell is clicked.
   * rowNumber is the row number and columnId is
   * the column number or the column key.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onCellHover - Called when a table cell is hovered.
   * rowNumber is the row number of the hovered row
   * and columnId is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onCellHoverExit - Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRowHover - Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRowHoverExit - Called when a table row is no longer hovered.
   * rowNumber is the row number of the row that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onRowSelection - Called when a row is selected.
   * selectedRows is an array of all row selections.
   * IF all rows have been selected, the string "all"
   * will be returned instead to indicate that all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} selectable - If true, table rows can be selected.
   * If multiple row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} wrapperStyle - Override the inline-styles of the table's wrapper element.
   */
  wrapperStyle: _propTypes2.default.object
};
Table.defaultProps = {
  allRowsSelected: false,
  fixedFooter: true,
  fixedHeader: true,
  height: 'inherit',
  multiSelectable: false,
  selectable: true
};
Table.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = Table;

//# sourceMappingURL=Table.js.map