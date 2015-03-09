'use strict';

var store = require('./store');

module.exports = {
  local: store('local'),
  session: store('session')
};
