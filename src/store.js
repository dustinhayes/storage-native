'use strict';

var jn = require('json-native');

module.exports = function (s) {
  return {
    key: s.key,
    clear: s.clear,
    length: s.length,
    removeItem: s.removeItem,
    getItem: function (k) { return jn.parse(s.getItem(k)); },
    setItem: function (k, v) { s.setItem(k, jn.stringify(v)); }
  };
};
