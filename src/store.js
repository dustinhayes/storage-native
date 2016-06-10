'use strict';

var jn = require('json-native');

module.exports = function (s) {
  return {
    key: s.key,
    clear: s.clear,
    length: s.length,
    removeItem: s.removeItem,
    getItem: function (k) {
      try { return jn.parse(s.getItem(k)); }
      catch (e) { return s.getItem(k); }
    },
    setItem: function (k, v) {
      s.setItem(k, typeof v === 'string' ? v : jn.stringify(v));
    }
  };
};
