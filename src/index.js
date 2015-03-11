'use strict';

var store = require('./store');

module.exports = {
  local: store(window.localStorage),
  session: store(window.sessionStorage)
};
