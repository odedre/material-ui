'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _EnhancedTextarea = require('./EnhancedTextarea');

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env mocha */
describe('<EnhancedTextArea />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var rowHeight = 24;
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, {
      context: { muiTheme: muiTheme },
      childContextTypes: { muiTheme: _propTypes2.default.object }
    });
  };

  it('renders with no arguments', function () {
    var wrapper = mountWithContext(_react2.default.createElement(_EnhancedTextarea2.default, null));
    _chai.assert.isAbove(wrapper.find('div').length, 0);
  });

  it('has one row initial height', function () {
    var wrapper = mountWithContext(_react2.default.createElement(_EnhancedTextarea2.default, null));
    _chai.assert.strictEqual(wrapper.state().height, rowHeight);
  });

  // This test will not succeed due to
  // jsdom limitations
  // https://github.com/tmpvar/jsdom/issues/1013
  /* eslint mocha/no-skipped-tests: 0 */
  it.skip('has zero initial height', function () {
    var wrapper = mountWithContext(_react2.default.createElement(_EnhancedTextarea2.default, {
      value: 'A really long string that should go over multiple lines and should trigger more rows than one'
    }));
    _chai.assert.isAbove(wrapper.state().height, rowHeight);
  });
});

//# sourceMappingURL=EnhancedTextarea.spec.js.map