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

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _TableRowColumn = require('./TableRowColumn');

var _TableRowColumn2 = _interopRequireDefault(_TableRowColumn);

var _ClickAwayListener = require('../internal/ClickAwayListener');

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableBody = function (_Component) {
  _inherits(TableBody, _Component);

  function TableBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableBody.__proto__ || Object.getPrototypeOf(TableBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedRows: []
    }, _this.isControlled = false, _this.handleClickAway = function () {
      if (_this.props.deselectOnClickaway && _this.state.selectedRows.length > 0) {
        var selectedRows = [];
        _this.setState({ selectedRows: selectedRows });
        if (_this.props.onRowSelection) {
          _this.props.onRowSelection(selectedRows);
        }
      }
    }, _this.onRowClick = function (event, rowNumber) {
      event.stopPropagation();

      if (_this.props.selectable) {
        // Prevent text selection while selecting rows.
        if (window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects.length > 0) {
          window.getSelection().removeAllRanges();
        }
        _this.processRowSelection(event, rowNumber);
      }
    }, _this.onCellClick = function (event, rowNumber, columnNumber) {
      event.stopPropagation();
      if (_this.props.onCellClick) {
        _this.props.onCellClick(rowNumber, _this.getColumnId(columnNumber), event);
      }
    }, _this.onCellHover = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHover) {
        _this.props.onCellHover(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHover(event, rowNumber);
    }, _this.onCellHoverExit = function (event, rowNumber, columnNumber) {
      if (_this.props.onCellHoverExit) {
        _this.props.onCellHoverExit(rowNumber, _this.getColumnId(columnNumber), event);
      }
      _this.onRowHoverExit(event, rowNumber);
    }, _this.onRowHover = function (event, rowNumber) {
      if (_this.props.onRowHover) {
        _this.props.onRowHover(rowNumber);
      }
    }, _this.onRowHoverExit = function (event, rowNumber) {
      if (_this.props.onRowHoverExit) {
        _this.props.onRowHoverExit(rowNumber);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableBody, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.preScanRows) {
        this.setState({
          selectedRows: this.getSelectedRows(this.props)
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.preScanRows) {
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          selectedRows: this.getSelectedRows(this.props)
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.allRowsSelected !== nextProps.allRowsSelected) {
        if (!nextProps.allRowsSelected) {
          this.setState({
            selectedRows: []
          });
          return;
        }
      }

      this.setState({
        selectedRows: this.getSelectedRows(nextProps)
      });
    }
  }, {
    key: 'createRows',
    value: function createRows() {
      var _this2 = this;

      var numChildren = _react2.default.Children.count(this.props.children);
      var rowNumber = 0;
      var handlers = {
        onCellClick: this.onCellClick,
        onCellHover: this.onCellHover,
        onCellHoverExit: this.onCellHoverExit,
        onRowHover: this.onRowHover,
        onRowHoverExit: this.onRowHoverExit,
        onRowClick: this.onRowClick
      };

      return _react2.default.Children.map(this.props.children, function (child) {
        if (_react2.default.isValidElement(child)) {
          var props = {
            hoverable: _this2.props.showRowHover,
            selected: _this2.isRowSelected(rowNumber),
            striped: _this2.props.stripedRows && rowNumber % 2 === 0,
            rowNumber: rowNumber++
          };

          if (rowNumber === numChildren) {
            props.displayBorder = false;
          }

          var children = [_this2.createRowCheckboxColumn(props)];

          _react2.default.Children.forEach(child.props.children, function (child) {
            children.push(child);
          });

          return _react2.default.cloneElement(child, Object.assign({}, props, handlers), children);
        }
      });
    }
  }, {
    key: 'createRowCheckboxColumn',
    value: function createRowCheckboxColumn(rowProps) {
      if (!this.props.displayRowCheckbox) {
        return null;
      }

      var name = rowProps.rowNumber + '-cb';
      var disabled = !this.props.selectable;

      return _react2.default.createElement(
        _TableRowColumn2.default,
        {
          key: name,
          columnNumber: 0,
          style: {
            width: 24,
            cursor: disabled ? 'default' : 'inherit'
          }
        },
        _react2.default.createElement(_Checkbox2.default, {
          name: name,
          value: 'selected',
          disabled: disabled,
          checked: rowProps.selected
        })
      );
    }
  }, {
    key: 'getSelectedRows',
    value: function getSelectedRows(props) {
      var _this3 = this;

      var selectedRows = [];

      if (props.selectable) {
        var index = 0;
        _react2.default.Children.forEach(props.children, function (child) {
          if (_react2.default.isValidElement(child)) {
            if (child.props.selected !== undefined) {
              _this3.isControlled = true;
            }

            if (child.props.selected && (selectedRows.length === 0 || props.multiSelectable)) {
              selectedRows.push(index);
            }

            index++;
          }
        });
      }

      return selectedRows;
    }
  }, {
    key: 'isRowSelected',
    value: function isRowSelected(rowNumber) {
      var _this4 = this;

      if (this.props.allRowsSelected) {
        return true;
      }

      return this.state.selectedRows.some(function (row) {
        if ((typeof row === 'undefined' ? 'undefined' : _typeof(row)) === 'object') {
          if (_this4.isValueInRange(rowNumber, row)) {
            return true;
          }
        } else {
          if (row === rowNumber) {
            return true;
          }
        }

        return false;
      });
    }
  }, {
    key: 'isValueInRange',
    value: function isValueInRange(value, range) {
      if (!range) return false;

      if (range.start <= value && value <= range.end || range.end <= value && value <= range.start) {
        return true;
      }

      return false;
    }
  }, {
    key: 'processRowSelection',
    value: function processRowSelection(event, rowNumber) {
      var selectedRows = [].concat(_toConsumableArray(this.state.selectedRows));

      if (event.shiftKey && this.props.multiSelectable && selectedRows.length > 0) {
        var lastIndex = selectedRows.length - 1;
        var lastSelection = selectedRows[lastIndex];

        if ((typeof lastSelection === 'undefined' ? 'undefined' : _typeof(lastSelection)) === 'object') {
          lastSelection.end = rowNumber;
        } else {
          selectedRows.splice(lastIndex, 1, {
            start: lastSelection,
            end: rowNumber
          });
        }
      } else if ((event.ctrlKey && !event.metaKey || event.metaKey && !event.ctrlKey) && this.props.multiSelectable) {
        var idx = selectedRows.indexOf(rowNumber);
        if (idx < 0) {
          var foundRange = false;
          for (var i = 0; i < selectedRows.length; i++) {
            var range = selectedRows[i];
            if ((typeof range === 'undefined' ? 'undefined' : _typeof(range)) !== 'object') continue;

            if (this.isValueInRange(rowNumber, range)) {
              var _selectedRows;

              foundRange = true;
              var values = this.splitRange(range, rowNumber);
              (_selectedRows = selectedRows).splice.apply(_selectedRows, [i, 1].concat(_toConsumableArray(values)));
            }
          }

          if (!foundRange) selectedRows.push(rowNumber);
        } else {
          selectedRows.splice(idx, 1);
        }
      } else {
        if (selectedRows.length === 1 && selectedRows[0] === rowNumber) {
          selectedRows = [];
        } else {
          selectedRows = [rowNumber];
        }
      }

      if (!this.isControlled) {
        this.setState({ selectedRows: selectedRows });
      }

      if (this.props.onRowSelection) {
        this.props.onRowSelection(this.flattenRanges(selectedRows));
      }
    }
  }, {
    key: 'splitRange',
    value: function splitRange(range, splitPoint) {
      var splitValues = [];
      var startOffset = range.start - splitPoint;
      var endOffset = range.end - splitPoint;

      // Process start half
      splitValues.push.apply(splitValues, _toConsumableArray(this.genRangeOfValues(splitPoint, startOffset)));

      // Process end half
      splitValues.push.apply(splitValues, _toConsumableArray(this.genRangeOfValues(splitPoint, endOffset)));

      return splitValues;
    }
  }, {
    key: 'genRangeOfValues',
    value: function genRangeOfValues(start, offset) {
      var values = [];
      var dir = offset > 0 ? -1 : 1; // This forces offset to approach 0 from either direction.
      while (offset !== 0) {
        values.push(start + offset);
        offset += dir;
      }

      return values;
    }
  }, {
    key: 'flattenRanges',
    value: function flattenRanges(selectedRows) {
      var _this5 = this;

      return selectedRows.reduce(function (rows, row) {
        if ((typeof row === 'undefined' ? 'undefined' : _typeof(row)) === 'object') {
          var values = _this5.genRangeOfValues(row.end, row.start - row.end);
          rows.push.apply(rows, [row.end].concat(_toConsumableArray(values)));
        } else {
          rows.push(row);
        }

        return rows;
      }, []).sort();
    }
  }, {
    key: 'getColumnId',
    value: function getColumnId(columnNumber) {
      return columnNumber - 1;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          allRowsSelected = _props.allRowsSelected,
          multiSelectable = _props.multiSelectable,
          onCellClick = _props.onCellClick,
          onCellHover = _props.onCellHover,
          onCellHoverExit = _props.onCellHoverExit,
          onRowHover = _props.onRowHover,
          onRowHoverExit = _props.onRowHoverExit,
          onRowSelection = _props.onRowSelection,
          selectable = _props.selectable,
          deselectOnClickaway = _props.deselectOnClickaway,
          showRowHover = _props.showRowHover,
          stripedRows = _props.stripedRows,
          displayRowCheckbox = _props.displayRowCheckbox,
          preScanRows = _props.preScanRows,
          other = _objectWithoutProperties(_props, ['style', 'allRowsSelected', 'multiSelectable', 'onCellClick', 'onCellHover', 'onCellHoverExit', 'onRowHover', 'onRowHoverExit', 'onRowSelection', 'selectable', 'deselectOnClickaway', 'showRowHover', 'stripedRows', 'displayRowCheckbox', 'preScanRows']);

      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        _ClickAwayListener2.default,
        { onClickAway: this.handleClickAway },
        _react2.default.createElement(
          'tbody',
          Object.assign({ style: prepareStyles(Object.assign({}, style)) }, other),
          this.createRows()
        )
      );
    }
  }]);

  return TableBody;
}(_react.Component);

TableBody.muiName = 'TableBody';
TableBody.propTypes = {
  /**
   * @ignore
   * Set to true to indicate that all rows should be selected.
   */
  allRowsSelected: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} children - Children passed to table body.
   */
  children: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {PropTypes.bool} deselectOnClickaway - Controls whether or not to deselect all selected
   * rows after clicking outside the table.
   */
  deselectOnClickaway: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} displayRowCheckbox - Controls the display of the row checkbox. The default value is true.
   */
  displayRowCheckbox: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, multiple table rows can be selected.
   * CTRL/CMD+Click and SHIFT+Click are valid actions.
   * The default value is false.
   */
  multiSelectable: _propTypes2.default.bool,
  /**
   * @ignore
   * Callback function for when a cell is clicked.
   */
  onCellClick: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is hovered. rowNumber
   * is the row number of the hovered row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table cell is no longer hovered.
   * rowNumber is the row number of the row and columnId
   * is the column number or the column key of the cell.
   */
  onCellHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is hovered.
   * rowNumber is the row number of the hovered row.
   */
  onRowHover: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a table row is no longer
   * hovered. rowNumber is the row number of the row
   * that is no longer hovered.
   */
  onRowHoverExit: _propTypes2.default.func,
  /**
   * @ignore
   * Called when a row is selected. selectedRows is an
   * array of all row selections. If all rows have been selected,
   * the string "all" will be returned instead to indicate that
   * all rows have been selected.
   */
  onRowSelection: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} preScanRows - Controls whether or not the rows are pre-scanned to determine
   * initial state. If your table has a large number of rows and
   * you are experiencing a delay in rendering, turn off this property.
   */
  preScanRows: _propTypes2.default.bool,
  /**
   * @ignore
   * If true, table rows can be selected. If multiple
   * row selection is desired, enable multiSelectable.
   * The default value is true.
   */
  selectable: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} showRowHover - If true, table rows will be highlighted when
   * the cursor is hovering over the row. The default
   * value is false.
   */
  showRowHover: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} stripedRows - If true, every other table row starting
   * with the first row will be striped. The default value is false.
   */
  stripedRows: _propTypes2.default.bool,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};
TableBody.defaultProps = {
  allRowsSelected: false,
  deselectOnClickaway: true,
  displayRowCheckbox: true,
  multiSelectable: false,
  preScanRows: true,
  selectable: true,
  style: {}
};
TableBody.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = TableBody;

//# sourceMappingURL=TableBody.js.map