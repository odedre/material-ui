'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-env mocha */


describe('<Checkbox />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, {
      context: { muiTheme: muiTheme },
      childContextTypes: { muiTheme: _propTypes2.default.object }
    });
  };

  describe('props: defaultChecked', function () {
    it('should display checkmark when checked by default', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Checkbox2.default, { defaultChecked: true }));

      var enhancedSwitch = wrapper.find('EnhancedSwitch');
      var svgs = wrapper.prop('switchElement').props.children;
      var checkMarkNode = (0, _enzyme.shallow)(svgs[1]);

      _chai.assert.ok(enhancedSwitch.prop('switched'));
      _chai.assert.strictEqual(svgs[1].type.displayName, 'ToggleCheckBox', 'Should use the right icon.');
      _chai.assert.strictEqual(checkMarkNode.props().style.opacity, 1);
    });

    it('should NOT display checkmark when not checked by default', function () {
      var wrapper = shallowWithContext(_react2.default.createElement(_Checkbox2.default, { defaultChecked: false }));

      var enhancedSwitch = wrapper.find('EnhancedSwitch');
      var svgs = wrapper.prop('switchElement').props.children;
      var checkMarkNode = (0, _enzyme.shallow)(svgs[1]);

      _chai.assert.notOk(enhancedSwitch.prop('switched'));
      _chai.assert.strictEqual(svgs[1].type.displayName, 'ToggleCheckBox', 'Should use the right icon.');
      _chai.assert.strictEqual(checkMarkNode.props().style.opacity, 0);
    });

    describe('when initially unchecked', function () {
      var wrapper = void 0;

      beforeEach(function () {
        wrapper = mountWithContext(_react2.default.createElement(_Checkbox2.default, { defaultChecked: false }));
      });

      it('should display checkmark when clicked once', function () {
        var input = wrapper.find('input');
        input.node.checked = !input.node.checked;
        input.simulate('change');
        var enhancedSwitch = wrapper.find('EnhancedSwitch');
        _chai.assert.ok(enhancedSwitch.prop('switched'));
      });

      it('should NOT display checkmark when clicked twice', function () {
        var input = wrapper.find('input');
        input.node.checked = !input.node.checked;
        input.simulate('change');
        input.node.checked = !input.node.checked;
        input.simulate('change');
        var enhancedSwitch = wrapper.find('EnhancedSwitch');
        _chai.assert.notOk(enhancedSwitch.prop('switched'));
      });
    });
  });

  describe('props: onChange', function () {
    it('should update the switch state when the component is uncontrolled', function () {
      var CheckboxUncontrolled = function (_Component) {
        _inherits(CheckboxUncontrolled, _Component);

        function CheckboxUncontrolled() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, CheckboxUncontrolled);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckboxUncontrolled.__proto__ || Object.getPrototypeOf(CheckboxUncontrolled)).call.apply(_ref, [this].concat(args))), _this), _this.handleCheck = function () {
            _this.setState({});
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(CheckboxUncontrolled, [{
          key: 'render',
          value: function render() {
            return _react2.default.createElement(_Checkbox2.default, { onCheck: this.handleCheck });
          }
        }]);

        return CheckboxUncontrolled;
      }(_react.Component);

      var wrapper = mountWithContext(_react2.default.createElement(CheckboxUncontrolled, null));
      var enhancedSwitch = wrapper.find('EnhancedSwitch');
      _chai.assert.strictEqual(enhancedSwitch.props().switched, false);

      // Simulate a change on the input
      var input = wrapper.find('input');
      input.node.checked = !input.node.checked;
      input.simulate('change');

      _chai.assert.strictEqual(enhancedSwitch.props().switched, true, 'should take into account the input change state');
    });
  });
});

//# sourceMappingURL=Checkbox.spec.js.map