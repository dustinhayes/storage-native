'use strict';

var jn = require('json-native');

module.exports = function (t) {
  t = window[t + 'Storage'];
  return {
    key: t.key,
    clear: t.clear,
    length: t.length,
    removeItem: t.removeItem,
    getItem: function (k) { return jn.parse(t.getItem(k)); },
    setItem: function (k, v) { t.setItem(k, jn.stringify(v)); }
  };
};
