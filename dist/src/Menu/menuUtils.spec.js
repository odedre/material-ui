'use strict';

var _chai = require('chai');

var _menuUtils = require('./menuUtils');

var Utils = _interopRequireWildcard(_menuUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* eslint-env mocha */
describe('Menu Utils', function () {
  describe('HotKeyHolder', function () {
    var hotKeyHolder = void 0;
    beforeEach(function () {
      hotKeyHolder = new Utils.HotKeyHolder();
    });
    afterEach(function () {
      hotKeyHolder = null;
    });
    it('returns the key appended', function () {
      _chai.assert.strictEqual(hotKeyHolder.append('k'), 'k');
    });
    it('holds keys within 500ms and dispose these afterwards', function () {
      hotKeyHolder.append('k');
      return timeout(100).then(function () {
        _chai.assert.strictEqual(hotKeyHolder.append('o'), 'ko');
        _chai.assert.strictEqual(hotKeyHolder.append('k'), 'kok');
        _chai.assert.strictEqual(hotKeyHolder.append('o'), 'koko');
        _chai.assert.strictEqual(hotKeyHolder.append('s'), 'kokos');
      }).then(function () {
        return timeout(400);
      }).then(function () {
        _chai.assert.strictEqual(hotKeyHolder.append('a'), 'kokosa');
        _chai.assert.strictEqual(hotKeyHolder.append('k'), 'kokosak');
        _chai.assert.strictEqual(hotKeyHolder.append('e'), 'kokosake');
      }).then(function () {
        return timeout(600);
      }).then(function () {
        _chai.assert.isNull(hotKeyHolder.lastKeys);
        _chai.assert.strictEqual(hotKeyHolder.append('k'), 'k');
      });
    });
    function timeout(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  });
});

//# sourceMappingURL=menuUtils.spec.js.map