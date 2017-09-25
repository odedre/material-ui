'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateUtils = require('./dateUtils');

var _DatePickerDialog = require('./DatePickerDialog');

var _DatePickerDialog2 = _interopRequireDefault(_DatePickerDialog);

var _TextField = require('../TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Date Pickers are used to select a single date for an input.
 * Also see https://www.google.com/design/spec/components/pickers.html#pickers-date-pickers
 * 
 * @example 
 * 
 * // The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * // You can also disable the Dialog passing `true` to the `disabled` property.
 * // To display the year selection first, set the `openToYearSelection` property to `true`.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * const DatePickerExampleSimple = () => (
 *   <div>
 *     <DatePicker hintText="Portrait Dialog" />
 *     <DatePicker hintText="Landscape Dialog" mode="landscape" />
 *     <DatePicker hintText="Dialog Disabled" disabled={true} />
 *     <DatePicker hintText="Open to Year" openToYearSelection={true} />
 *   </div>
 * );
 * 
 * export default DatePickerExampleSimple;
 * 
 * 
 * @example 
 * // Inline Date Pickers are displayed below the input, rather than as a modal dialog.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * const DatePickerExampleInline = () => (
 *   <div>
 *     <DatePicker hintText="Portrait Inline Dialog" container="inline" />
 *     <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
 *   </div>
 * );
 * 
 * export default DatePickerExampleInline;
 * 
 * 
 * @example 
 * //This example allows you to set a date range, and to toggle `autoOk`, and `disableYearSelection`.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * import Toggle from 'material-ui/Toggle';
 * 
 * const optionsStyle = {
 *   maxWidth: 255,
 *   marginRight: 'auto',
 * };
 * 
 * export default class DatePickerExampleToggle extends React.Component {
 *   constructor(props) {
 *     super(props);
 * 
 *     const minDate = new Date();
 *     const maxDate = new Date();
 *     minDate.setFullYear(minDate.getFullYear() - 1);
 *     minDate.setHours(0, 0, 0, 0);
 *     maxDate.setFullYear(maxDate.getFullYear() + 1);
 *     maxDate.setHours(0, 0, 0, 0);
 * 
 *     this.state = {
 *       minDate: minDate,
 *       maxDate: maxDate,
 *       autoOk: false,
 *       disableYearSelection: false,
 *     };
 *   }
 * 
 *   handleChangeMinDate = (event, date) => {
 *     this.setState({
 *       minDate: date,
 *     });
 *   };
 * 
 *   handleChangeMaxDate = (event, date) => {
 *     this.setState({
 *       maxDate: date,
 *     });
 *   };
 * 
 *   handleToggle = (event, toggled) => {
 *     this.setState({
 *       [event.target.name]: toggled,
 *     });
 *   };
 * 
 *   render() {
 *     return (
 *       <div>
 *         <DatePicker
 *           floatingLabelText="Ranged Date Picker"
 *           autoOk={this.state.autoOk}
 *           minDate={this.state.minDate}
 *           maxDate={this.state.maxDate}
 *           disableYearSelection={this.state.disableYearSelection}
 *         />
 *         <div style={optionsStyle}>
 *           <DatePicker
 *             onChange={this.handleChangeMinDate}
 *             autoOk={this.state.autoOk}
 *             floatingLabelText="Min Date"
 *             defaultDate={this.state.minDate}
 *             disableYearSelection={this.state.disableYearSelection}
 *           />
 *           <DatePicker
 *             onChange={this.handleChangeMaxDate}
 *             autoOk={this.state.autoOk}
 *             floatingLabelText="Max Date"
 *             defaultDate={this.state.maxDate}
 *             disableYearSelection={this.state.disableYearSelection}
 *           />
 *           <Toggle
 *             name="autoOk"
 *             value="autoOk"
 *             label="Auto Ok"
 *             toggled={this.state.autoOk}
 *             onToggle={this.handleToggle}
 *           />
 *           <Toggle
 *             name="disableYearSelection"
 *             value="disableYearSelection"
 *             label="Disable Year Selection"
 *             toggled={this.state.disableYearSelection}
 *             onToggle={this.handleToggle}
 *           />
 *         </div>
 *       </div>
 *     );
 *   }
 * }
 * 
 * 
 * @example 
 * // `DatePicker` can be implemented as a controlled input, where `value` is handled by state in the parent component.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * export default class DatePickerExampleControlled extends React.Component {
 *   
 *     constructor(props) {
 *       super(props);
 *   
 *       this.state = {
 *         controlledDate: null,
 *       };
 *     }
 *   
 *     handleChange = (event, date) => {
 *       this.setState({
 *         controlledDate: date,
 *       });
 *     };
 *   
 *     render() {
 *       return (
 *         <DatePicker
 *           hintText="Controlled Date Input"
 *           value={this.state.controlledDate}
 *           onChange={this.handleChange}
 *         />
 *       );
 *     }
 *   }
 * 
 * 
 * @example 
 * // `DatePicker` can disable specific dates based on the return value of a callback.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * 
 * function disableWeekends(date) {
 *   return date.getDay() === 0 || date.getDay() === 6;
 * }
 * 
 * function disableRandomDates() {
 *   return Math.random() > 0.7;
 * }
 * 
 * const DatePickerExampleDisableDates = () => (
 *   <div>
 *     <DatePicker hintText="Weekends Disabled" shouldDisableDate={disableWeekends} />
 *     <DatePicker hintText="Random Dates Disabled" shouldDisableDate={disableRandomDates} />
 *   </div>
 * );
 * 
 * export default DatePickerExampleDisableDates;
 * 
 * 
 * @example 
 * // `DatePicker` can be localised using the `locale` property. The first example is localised in French.
 * // Note that the buttons must be separately localised using the `cancelLabel` and `okLabel` properties.
 *
 * //The second example shows `firstDayOfWeek` set to `0`, (Sunday), and `locale` to `en-US` which matches the
 * //behavior of the Date Picker prior to 0.15.0. Note that the 'en-US' locale is built in, and so does not require `DateTimeFormat` to be supplied.
 *
 * // The final example displays the resulting date in a custom format using the `formatDate` property.
 * 
 * import React from 'react';
 * import DatePicker from 'material-ui/DatePicker';
 * import areIntlLocalesSupported from 'intl-locales-supported';
 * import persianUtils from 'material-ui-persian-date-picker-utils';
 * 
 * let DateTimeFormat;
 * 
 * // Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 * if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
 *   DateTimeFormat = global.Intl.DateTimeFormat;
 * } else {
 *   const IntlPolyfill = require('intl');
 *   DateTimeFormat = IntlPolyfill.DateTimeFormat;
 *   require('intl/locale-data/jsonp/fr');
 *   require('intl/locale-data/jsonp/fa-IR');
 * }
 * 
 * const DatePickerExampleInternational = () => (
 *   <div>
 *     <DatePicker
 *       hintText="fr locale"
 *       DateTimeFormat={DateTimeFormat}
 *       okLabel="OK"
 *       cancelLabel="Annuler"
 *       locale="fr"
 *     />
 *     <DatePicker
 *       hintText="fa-IR locale"
 *       DateTimeFormat={DateTimeFormat}
 *       okLabel="تایید"
 *       cancelLabel="لغو"
 *       locale="fa-IR"
 *       firstDayOfWeek={6}
 *       utils={persianUtils}
 *     />
 *     <DatePicker
 *       hintText="en-US locale"
 *       locale="en-US"
 *       firstDayOfWeek={0}
 *     />
 *     <DatePicker
 *       hintText="Custom date format"
 *       firstDayOfWeek={0}
 *       formatDate={new DateTimeFormat('en-US', {
 *         day: 'numeric',
 *         month: 'long',
 *         year: 'numeric',
 *       }).format}
 *     />
 *   </div>
 * );
 * 
 * export default DatePickerExampleInternational;
 * 
 */
var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      date: undefined
    }, _this.handleAccept = function (date) {
      if (!_this.isControlled()) {
        _this.setState({
          date: date
        });
      }
      if (_this.props.onChange) {
        _this.props.onChange(null, date);
      }
    }, _this.handleFocus = function (event) {
      event.target.blur();
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleTouchTap = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (!_this.props.disabled) {
        setTimeout(function () {
          _this.openDialog();
        }, 0);
      }
    }, _this.formatDate = function (date) {
      if (_this.props.locale) {
        var DateTimeFormat = _this.props.DateTimeFormat || _dateUtils.dateTimeFormat;
        return new DateTimeFormat(_this.props.locale, {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
        }).format(date);
      } else {
        return (0, _dateUtils.formatIso)(date);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        date: this.isControlled() ? this.getControlledDate() : this.props.defaultDate
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlled()) {
        var newDate = this.getControlledDate(nextProps);
        if (!(0, _dateUtils.isEqualDate)(this.state.date, newDate)) {
          this.setState({
            date: newDate
          });
        }
      }
    }
  }, {
    key: 'getDate',
    value: function getDate() {
      return this.state.date;
    }

    /**
     * Open the date-picker dialog programmatically from a parent.
     */

  }, {
    key: 'openDialog',
    value: function openDialog() {
      /**
       * if the date is not selected then set it to new date
       * (get the current system date while doing so)
       * else set it to the currently selected date
       */
      if (this.state.date !== undefined) {
        this.setState({
          dialogDate: this.getDate()
        }, this.refs.dialogWindow.show);
      } else {
        this.setState({
          dialogDate: new Date()
        }, this.refs.dialogWindow.show);
      }
    }

    /**
     * Alias for `openDialog()` for an api consistent with TextField.
     */

  }, {
    key: 'focus',
    value: function focus() {
      this.openDialog();
    }
  }, {
    key: 'isControlled',
    value: function isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'getControlledDate',
    value: function getControlledDate() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (props.value instanceof Date) {
        return props.value;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          autoOk = _props.autoOk,
          cancelLabel = _props.cancelLabel,
          className = _props.className,
          container = _props.container,
          defaultDate = _props.defaultDate,
          dialogContainerStyle = _props.dialogContainerStyle,
          disableYearSelection = _props.disableYearSelection,
          firstDayOfWeek = _props.firstDayOfWeek,
          formatDateProp = _props.formatDate,
          locale = _props.locale,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          mode = _props.mode,
          okLabel = _props.okLabel,
          onDismiss = _props.onDismiss,
          onFocus = _props.onFocus,
          onShow = _props.onShow,
          onClick = _props.onClick,
          openToYearSelection = _props.openToYearSelection,
          shouldDisableDate = _props.shouldDisableDate,
          hideCalendarDate = _props.hideCalendarDate,
          style = _props.style,
          textFieldStyle = _props.textFieldStyle,
          utils = _props.utils,
          other = _objectWithoutProperties(_props, ['DateTimeFormat', 'autoOk', 'cancelLabel', 'className', 'container', 'defaultDate', 'dialogContainerStyle', 'disableYearSelection', 'firstDayOfWeek', 'formatDate', 'locale', 'maxDate', 'minDate', 'mode', 'okLabel', 'onDismiss', 'onFocus', 'onShow', 'onClick', 'openToYearSelection', 'shouldDisableDate', 'hideCalendarDate', 'style', 'textFieldStyle', 'utils']);

      var prepareStyles = this.context.muiTheme.prepareStyles;

      var formatDate = formatDateProp || this.formatDate;

      return _react2.default.createElement(
        'div',
        { className: className, style: prepareStyles(Object.assign({}, style)) },
        _react2.default.createElement(_TextField2.default, Object.assign({}, other, {
          onFocus: this.handleFocus,
          onClick: this.handleTouchTap,
          ref: 'input',
          style: textFieldStyle,
          value: this.state.date ? formatDate(this.state.date) : ''
        })),
        _react2.default.createElement(_DatePickerDialog2.default, {
          DateTimeFormat: DateTimeFormat,
          autoOk: autoOk,
          cancelLabel: cancelLabel,
          container: container,
          containerStyle: dialogContainerStyle,
          disableYearSelection: disableYearSelection,
          firstDayOfWeek: firstDayOfWeek,
          initialDate: this.state.dialogDate,
          locale: locale,
          maxDate: maxDate,
          minDate: minDate,
          mode: mode,
          okLabel: okLabel,
          onAccept: this.handleAccept,
          onShow: onShow,
          onDismiss: onDismiss,
          ref: 'dialogWindow',
          shouldDisableDate: shouldDisableDate,
          hideCalendarDate: hideCalendarDate,
          openToYearSelection: openToYearSelection,
          utils: utils
        })
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  /**
   * @property {PropTypes.func} DateTimeFormat - Constructor for date formatting for the specified `locale`.
   * The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402).
   * `Intl.DateTimeFormat` is supported by most modern browsers, see http://caniuse.com/#search=intl,
   * otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
   *
   * By default, a built-in `DateTimeFormat` is used which supports the 'en-US' `locale`.
   */
  DateTimeFormat: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} autoOk - If true, automatically accept and close the picker on select a date.
   */
  autoOk: _propTypes2.default.bool,
  /**
   * @property {PropTypes.node} cancelLabel - Override the default text of the 'Cancel' button.
   */
  cancelLabel: _propTypes2.default.node,
  /**
   * @property {PropTypes.string} className - The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * @property {dialog|inline} container - Used to control how the Date Picker will be displayed when the input field is focused.
   * `dialog` (default) displays the DatePicker as a dialog with a modal.
   * `inline` displays the DatePicker below the input field (similar to auto complete).
   */
  container: _propTypes2.default.oneOf(['dialog', 'inline']),
  /**
   * @property {PropTypes.object} defaultDate - This is the initial date value of the component.
   * If either `value` or `valueLink` is provided they will override this
   * prop with `value` taking precedence.
   */
  defaultDate: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} dialogContainerStyle - Override the inline-styles of DatePickerDialog's Container element.
   */
  dialogContainerStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.bool} disableYearSelection - Disables the year selection in the date picker.
   */
  disableYearSelection: _propTypes2.default.bool,
  /**
   * @property {PropTypes.bool} disabled - Disables the DatePicker.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @property {PropTypes.number} firstDayOfWeek - Used to change the first day of week. It varies from
   * Saturday to Monday between different locales.
   * The allowed range is 0 (Sunday) to 6 (Saturday).
   * The default is `1`, Monday, as per ISO 8601.
   */
  firstDayOfWeek: _propTypes2.default.number,
  /**
   * @property {PropTypes.func} formatDate - This function is called to format the date displayed in the input field, and should return a string.
   * By default if no `locale` and `DateTimeFormat` is provided date objects are formatted to ISO 8601 YYYY-MM-DD.
   *
   * @param {object} date Date object to be formatted.
   * @returns {any} The formatted date.
   */
  formatDate: _propTypes2.default.func,
  /**
   * @property {PropTypes.bool} hideCalendarDate - Hide date display
   */
  hideCalendarDate: _propTypes2.default.bool,
  /**
   * @property {PropTypes.string} locale - Locale used for formatting the `DatePicker` date strings. Other than for 'en-US', you
   * must provide a `DateTimeFormat` that supports the chosen `locale`.
   */
  locale: _propTypes2.default.string,
  /**
   * @property {PropTypes.object} maxDate - The ending of a range of valid dates. The range includes the endDate.
   * The default value is current date + 100 years.
   */
  maxDate: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} minDate - The beginning of a range of valid dates. The range includes the startDate.
   * The default value is current date - 100 years.
   */
  minDate: _propTypes2.default.object,
  /**
   * @property {portrait|landscape} mode - Tells the component to display the picker in portrait or landscape mode.
   */
  mode: _propTypes2.default.oneOf(['portrait', 'landscape']),
  /**
   * @property {PropTypes.node} okLabel - Override the default text of the 'OK' button.
   */
  okLabel: _propTypes2.default.node,
  /**
   * @property {PropTypes.func} onChange - Callback function that is fired when the date value changes.
   *
   * @param {null} null Since there is no particular event associated with the change,
   * the first argument will always be null.
   * @param {object} date The new date.
   */
  onChange: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onClick - Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
   *
   * @param {object} event TouchTap event targeting the `TextField`.
   */
  onClick: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onDismiss - Callback function that is fired when the Date Picker's dialog is dismissed.
   */
  onDismiss: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onFocus - Callback function that is fired when the Date Picker's `TextField` gains focus.
   */
  onFocus: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onShow - Callback function that is fired when the Date Picker's dialog is shown.
   */
  onShow: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} onTouchTap - Callback function that is fired when a touch tap event occurs on the Date Picker's `TextField`.
   *
   * @param {object} event TouchTap event targeting the `TextField`.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * @property {PropTypes.func} shouldDisableDate - Callback function used to determine if a day's entry should be disabled on the calendar.
   *
   * @param {object} day Date object of a day.
   * @returns {boolean} Indicates whether the day should be disabled.
   */
  shouldDisableDate: _propTypes2.default.func,
  /**
   * @property {PropTypes.object} style - Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} textFieldStyle - Override the inline-styles of DatePicker's TextField element.
   */
  textFieldStyle: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} utils - This object should contain methods needed to build the calendar system.
   *
   * Useful for building a custom calendar system. Refer to the
   * [source code](https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js)
   * and an [example implementation](https://github.com/alitaheri/material-ui-persian-date-picker-utils)
   * for more information.
   */
  utils: _propTypes2.default.object,
  /**
   * @property {PropTypes.object} value - Sets the date for the Date Picker programmatically.
   */
  value: _propTypes2.default.object
};
DatePicker.defaultProps = {
  autoOk: false,
  container: 'dialog',
  disabled: false,
  disableYearSelection: false,
  firstDayOfWeek: 1,
  hideCalendarDate: false,
  style: {},
  openToYearSelection: false
};
DatePicker.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = DatePicker;

//# sourceMappingURL=DatePicker.js.map