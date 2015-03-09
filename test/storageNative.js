'use strict';

var test = require('tape');
var sn = require('../src/');

test('storage-native should stringify and parse date', function (t) {
  var date = new Date();
  
  sn.local.setItem('date', date);

  t.equal(date.getHours(), sn.local.getItem('date').getHours());
  t.end();
});

test('storage-native should stringify and parse regexp', function (t) {
  sn.session.setItem('r', /[0-9]/g);

  t.equal(sn.session.getItem('r').test('smelly cat'), false);
  t.end();
});

test('storage-native should stringify and parse function', function (t) {
  sn.local.setItem('f', function add(x, y) { return x + y; });

  t.equal(sn.local.getItem('f')(2, 3), 5);
  t.end();
});
