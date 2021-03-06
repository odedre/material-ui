'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('../IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _chevronLeft = require('../svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('../svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _SlideIn = require('../internal/SlideIn');

var _SlideIn2 = _interopRequireDefault(_SlideIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    height: 48
  },
  titleDiv: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%'
  },
  titleText: {
    height: 'inherit',
    paddingTop: 12
  }
};

var CalendarToolbar = function (_Component) {
  _inherits(CalendarToolbar, _Component);

  function CalendarToolbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CalendarToolbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarToolbar.__proto__ || Object.getPrototypeOf(CalendarToolbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transitionDirection: 'up'
    }, _this.handleTouchTapPrevMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(-1);
      }
    }, _this.handleTouchTapNextMonth = function () {
      if (_this.props.onMonthChange) {
        _this.props.onMonthChange(1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalendarToolbar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.displayDate !== this.props.displayDate) {
        var nextDirection = this.context.muiTheme.isRtl ? 'right' : 'left';
        var prevDirection = this.context.muiTheme.isRtl ? 'left' : 'right';
        var direction = nextProps.displayDate > this.props.displayDate ? nextDirection : prevDirection;
        this.setState({
          transitionDirection: direction
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          locale = _props.locale,
          displayDate = _props.displayDate;


      var dateTimeFormatted = new DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric'
      }).format(displayDate);

      var nextButtonIcon = this.context.muiTheme.isRtl ? _react2.default.createElement(_chevronLeft2.default, null) : _react2.default.createElement(_chevronRight2.default, null);
      var prevButtonIcon = this.context.muiTheme.isRtl ? _react2.default.createElement(_chevronRight2.default, null) : _react2.default.createElement(_chevronLeft2.default, null);

      return _react2.default.createElement(
        'div',
        { style: styles.root },
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: !this.props.prevMonth,
            onClick: this.handleTouchTapPrevMonth
          },
          prevButtonIcon
        ),
        _react2.default.createElement(
          _SlideIn2.default,
          {
            direction: this.state.transitionDirection,
            style: styles.titleDiv
          },
          _react2.default.createElement(
            'div',
            { key: dateTimeFormatted, style: styles.titleText },
            dateTimeFormatted
          )
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: !this.props.nextMonth,
            onClick: this.handleTouchTapNextMonth
          },
          nextButtonIcon
        )
      );
    }
  }]);

  return CalendarToolbar;
}(_react.Component);

CalendarToolbar.propTypes = {
  DateTimeFormat: _propTypes2.default.func.isRequired,
  displayDate: _propTypes2.default.object.isRequired,
  locale: _propTypes2.default.string.isRequired,
  nextMonth: _propTypes2.default.bool,
  onMonthChange: _propTypes2.default.func,
  prevMonth: _propTypes2.default.bool
};
CalendarToolbar.defaultProps = {
  nextMonth: true,
  prevMonth: true
};
CalendarToolbar.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = CalendarToolbar;

//# sourceMappingURL=CalendarToolbar.js.map