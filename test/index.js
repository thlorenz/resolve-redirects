'use strict';
/*jshint asi: true */

var test = require('tap').test
var resolve = require('../')

function inspect(obj, depth) {
  console.error(require('util').inspect(obj, false, depth || 5, true));
}

test('\nordered redirects', function (t) {
  var redirects = {
    1: 2,
    2: 3,
    4: 5,
    6: 7,
    7: 8,
    8: 9
  }
  var resolved = resolve(redirects);
  

  t.deepEqual(
      resolved
    , { '1': 3,
        '2': 3,
        '4': 5,
        '6': 9,
        '7': 9,
        '8': 9 }
    , 'resolved'
  )
  t.deepEqual(
      redirects
    , { 1: 2,
        2: 3,
        4: 5,
        6: 7,
        7: 8,
        8: 9 }
    , 'originals preserved'
  )

  t.end()
})

test('\nunordered redirects', function (t) {
  var redirects = {
    2: 3,
    4: 5,
    1: 2,
    7: 8,
    8: 9,
    6: 7
  }
  var resolved = resolve(redirects);
  
  t.deepEqual(
      resolved
    , { '1': 3,
        '2': 3,
        '4': 5,
        '6': 9,
        '7': 9,
        '8': 9 }
    , 'resolved'
  )
  t.deepEqual(
      redirects
    , { 1: 2,
        2: 3,
        4: 5,
        6: 7,
        7: 8,
        8: 9 }
    , 'originals preserved'
  )

  t.end()
})
