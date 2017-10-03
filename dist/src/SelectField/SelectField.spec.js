'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _SelectField = require('./SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _TouchRipple = require('../internal/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _MenuItem = require('../MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-env mocha */


describe('<SelectField />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, {
      context: { muiTheme: muiTheme },
      childContextTypes: { muiTheme: _propTypes2.default.object }
    });
  };

  describe('prop: disabled', function () {
    it('disables the ripple effect', function () {
      var wrapper = mountWithContext(_react2.default.createElement(_SelectField2.default, { disabled: true }));
      _chai.assert.strictEqual(wrapper.find(_TouchRipple2.default).length, 0, 'should not contain a TouchRipple');
    });
  });

  describe('MultiSelect', function () {
    var wrapper = void 0;

    it('should multi select 2 items after selecting 3 and deselecting 1', function () {
      var MyComponent2 = function (_Component) {
        _inherits(MyComponent2, _Component);

        function MyComponent2() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, MyComponent2);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyComponent2.__proto__ || Object.getPrototypeOf(MyComponent2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: null
          }, _this.handleChange = function (event, key, value) {
            _this.setState({ value: value });
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(MyComponent2, [{
          key: 'render',
          value: function render() {
            return _react2.default.createElement(
              _SelectField2.default,
              {
                multiple: true,
                value: this.state.value,
                onChange: this.handleChange
              },
              _react2.default.createElement(_MenuItem2.default, { className: 'item1', value: 'item1', primaryText: 'item 1' }),
              _react2.default.createElement(_MenuItem2.default, { className: 'item2', value: 'item2', primaryText: 'item 2' }),
              _react2.default.createElement(_MenuItem2.default, { className: 'item3', value: 'item3', primaryText: 'item 3' })
            );
          }
        }]);

        return MyComponent2;
      }(_react.Component);

      wrapper = mountWithContext(_react2.default.createElement(MyComponent2, null));
      wrapper.find('IconButton').simulate('click'); // open

      var item1 = document.getElementsByClassName('item1')[0];
      _chai.assert.ok(item1);
      var item2 = document.getElementsByClassName('item2')[0];
      _chai.assert.ok(item2);
      var item3 = document.getElementsByClassName('item3')[0];
      _chai.assert.ok(item3);

      _testUtils2.default.Simulate.click(item1);
      _testUtils2.default.Simulate.click(item2);
      _testUtils2.default.Simulate.click(item3);
      _chai.assert.deepEqual(wrapper.state().value, ['item1', 'item2', 'item3']);

      _testUtils2.default.Simulate.click(item1); // deselect
      _chai.assert.deepEqual(wrapper.state().value, ['item2', 'item3']);
    });

    it('should multi select 3 items and render their values colon separated', function () {
      var MyComponent2 = function (_Component2) {
        _inherits(MyComponent2, _Component2);

        function MyComponent2() {
          var _ref2;

          var _temp2, _this2, _ret2;

          _classCallCheck(this, MyComponent2);

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = MyComponent2.__proto__ || Object.getPrototypeOf(MyComponent2)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
            value: null
          }, _this2.handleChange = function (event, key, value) {
            _this2.setState({ value: value });
          }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }

        _createClass(MyComponent2, [{
          key: 'selectionRenderer',
          value: function selectionRenderer(value) {
            return _react2.default.createElement(
              'span',
              { id: 'selection1' },
              value.join(';')
            );
          }
        }, {
          key: 'render',
          value: function render() {
            return _react2.default.createElement(
              _SelectField2.default,
              {
                multiple: true,
                value: this.state.value,
                onChange: this.handleChange,
                selectionRenderer: this.selectionRenderer
              },
              _react2.default.createElement(_MenuItem2.default, { className: 'item1', value: 'item1', primaryText: 'item 1' }),
              _react2.default.createElement(_MenuItem2.default, { className: 'item2', value: 'item2', primaryText: 'item 2' }),
              _react2.default.createElement(_MenuItem2.default, { className: 'item3', value: 'item3', primaryText: 'item 3' })
            );
          }
        }]);

        return MyComponent2;
      }(_react.Component);

      wrapper = mountWithContext(_react2.default.createElement(MyComponent2, null));
      wrapper.find('IconButton').simulate('click'); // open

      var item1 = document.getElementsByClassName('item1')[0];
      _chai.assert.ok(item1);
      var item2 = document.getElementsByClassName('item2')[0];
      _chai.assert.ok(item2);
      var item3 = document.getElementsByClassName('item3')[0];
      _chai.assert.ok(item3);

      _testUtils2.default.Simulate.click(item1);
      _testUtils2.default.Simulate.click(item2);
      _testUtils2.default.Simulate.click(item3);
      _chai.assert.deepEqual(wrapper.state().value, ['item1', 'item2', 'item3']);

      wrapper.find('IconButton').simulate('click'); // close
      _chai.assert.deepEqual(wrapper.find('#selection1').text(), 'item1;item2;item3');
    });

    afterEach(function () {
      if (wrapper) wrapper.unmount();
    });
  });
});

//# sourceMappingURL=SelectField.spec.js.map