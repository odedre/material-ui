'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BeforeAfterWrapper = require('./BeforeAfterWrapper');

var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
  before: {
    content: "' '",
    display: 'table'
  },
  after: {
    content: "' '",
    clear: 'both',
    display: 'table'
  }
};

var ClearFix = function ClearFix(_ref) {
  var style = _ref.style,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ['style', 'children']);

  return _react2.default.createElement(
    _BeforeAfterWrapper2.default,
    Object.assign({}, other, {
      beforeStyle: styles.before,
      afterStyle: styles.after,
      style: style
    }),
    children
  );
};

ClearFix.muiName = 'ClearFix';

ClearFix.propTypes = {
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

exports.default = ClearFix;

//# sourceMappingURL=ClearFix.js.map