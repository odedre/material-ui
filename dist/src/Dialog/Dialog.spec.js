'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _sinon = require('sinon');

var _enzyme = require('enzyme');

var _chai = require('chai');

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _getMuiTheme = require('../styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Dialog />', function () {
  var muiTheme = (0, _getMuiTheme2.default)();
  var mountWithContext = function mountWithContext(node) {
    return (0, _enzyme.mount)(node, { context: { muiTheme: muiTheme } });
  };

  it('appends a dialog to the document body', function () {
    var testClass = 'test-dialog-class';
    mountWithContext(_react2.default.createElement(_Dialog2.default, {
      open: true,
      contentClassName: testClass
    }));

    var dialogEl = document.getElementsByClassName(testClass)[0];
    _chai.assert.ok(dialogEl);
  });

  it('registers events on dialog actions', function () {
    var clickSpy = (0, _sinon.spy)();
    var testClass = 'dialog-action';

    mountWithContext(_react2.default.createElement(_Dialog2.default, {
      open: true,
      actions: [_react2.default.createElement(
        'button',
        {
          key: 'a',
          onClick: clickSpy,
          className: testClass
        },
        'test'
      )]
    }));

    var actionEl = document.getElementsByClassName(testClass)[0];
    _chai.assert.ok(actionEl);

    _testUtils2.default.Simulate.click(actionEl);
    _chai.assert.ok(clickSpy.called);
  });

  it('should render a inner content container with sharp corners', function () {
    var testClass = 'test-dialog-paper-rounded-class';

    mountWithContext(_react2.default.createElement(_Dialog2.default, {
      open: true,
      paperClassName: testClass,
      paperProps: { rounded: false }
    }));

    var testEl = document.getElementsByClassName(testClass)[0];
    _chai.assert.strictEqual(testEl.style.borderRadius, '0px');
  });

  describe('should render a custom className', function () {
    var testTitle = 'test-dialog-title';
    var testAction = _react2.default.createElement(
      'button',
      null,
      'test'
    );
    var testClasses = {
      root: 'test-dialog-root-class',
      overlay: 'test-dialog-overlay-class',
      body: 'test-dialog-body-class',
      content: 'test-dialog-content-class',
      innerContent: 'test-dialog-paper-class',
      titleContainer: 'test-dialog-title-container-class',
      actionsContainer: 'test-dialog-actions-container-class'
    };

    mountWithContext(_react2.default.createElement(_Dialog2.default, {
      open: true,
      title: testTitle,
      actionsContainerClassName: testClasses.actionsContainer,
      bodyClassName: testClasses.body,
      className: testClasses.root,
      contentClassName: testClasses.content,
      paperClassName: testClasses.innerContent,
      overlayClassName: testClasses.overlay,
      titleClassName: testClasses.titleContainer,
      actions: testAction
    }));

    for (var key in testClasses) {
      if (testClasses.hasOwnProperty(key)) {
        (function () {
          var testClass = testClasses[key];

          it(testClass, function () {
            _chai.assert.ok(document.getElementsByClassName(testClass)[0]);
          });
        })();
      }
    }
  });
}); /* eslint-env mocha */

//# sourceMappingURL=Dialog.spec.js.map