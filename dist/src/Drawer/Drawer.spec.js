'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _lodash = require('lodash.merge');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<Drawer />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var shallowWithContext = function shallowWithContext(node) {
    return (0, _enzyme.shallow)(node, { context: { muiTheme: muiTheme } });
  };
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, { context: { muiTheme: muiTheme } });
  };
  var fireBodyMouseEvent = function fireBodyMouseEvent(name, properties) {
    var event = document.createEvent('MouseEvents');
    event.initEvent(name, true, true);
    (0, _lodash2.default)(event, properties);
    document.body.dispatchEvent(event);
  };

  describe('propTypes', function () {
    it('accepts number in the width props', function () {
      shallowWithContext(_react2.default.createElement(_Drawer2.default, { width: 400 }));
    });

    it('accepts a percentage format in string', function () {
      shallowWithContext(_react2.default.createElement(_Drawer2.default, { width: '70%' }));
    });

    it('throws an error on wrong percentage format', function () {
      _chai.assert.throws(function () {
        return shallowWithContext(_react2.default.createElement(_Drawer2.default, { width: '80' }));
      }, Error, 'Not a valid percentage format.');
    });
  });

  describe('touch', function () {
    it('opens and closes', function () {
      var wrapper = mountWithContext(_react2.default.createElement(_Drawer2.default, { width: 200, docked: false }));
      _chai.assert.strictEqual(wrapper.state().open, false, 'should start closed');
      fireBodyMouseEvent('touchstart', { touches: [{ pageX: 0, pageY: 0 }] });
      _chai.assert.strictEqual(wrapper.instance().maybeSwiping, true, 'should be listening for swipe');
      fireBodyMouseEvent('touchmove', { touches: [{ pageX: 20, pageY: 0 }] });
      _chai.assert.strictEqual(wrapper.state().swiping, 'opening', 'should be opening');
      fireBodyMouseEvent('touchend', { changedTouches: [{ pageX: 180, pageY: 0 }] });
      _chai.assert.strictEqual(wrapper.state().open, true, 'should be open');
      fireBodyMouseEvent('touchstart', { touches: [{ pageX: 200, pageY: 0 }] });
      _chai.assert.strictEqual(wrapper.instance().maybeSwiping, true, 'should be listening for swipe');
      fireBodyMouseEvent('touchmove', { touches: [{ pageX: 180, pageY: 0 }] });
      _chai.assert.strictEqual(wrapper.state().swiping, 'closing', 'should be closing');
      fireBodyMouseEvent('touchend', { changedTouches: [{ pageX: 20, pageY: 0 }] });
      _chai.assert.strictEqual(wrapper.state().open, false, 'should be closed');
      wrapper.unmount();
    });

    it('removes event listeners on unmount', function () {
      var wrapper = mountWithContext(_react2.default.createElement(_Drawer2.default, { width: 200, docked: false }));
      // Trigger listeners.
      fireBodyMouseEvent('touchstart', { touches: [{ pageX: 0, pageY: 0 }] });
      wrapper.unmount();
      // Should trigger setState warning if listeners aren't cleaned.
      fireBodyMouseEvent('touchmove', { touches: [{ pageX: 20, pageY: 0 }] });
    });
  });
});

//# sourceMappingURL=Drawer.spec.js.map