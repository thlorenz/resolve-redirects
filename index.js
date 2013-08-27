'use strict';

function resolve (redirects, k) {
  var val = redirects[k];
  var peek = val;
  while (peek = redirects[peek], peek) val = peek;
  return val;
}

/**
 * Resolves the key/value redirects to find the best possible value for each redirect.
 *
 * @name exports
 * @function
 * @param redirects {Object} unresolved redirects
 * @return {Object} resolved redirects
 */
var go = module.exports = function (redirects) {
  var keys = Object.keys(redirects);

  return keys.reduce(function (acc, k) {
    acc[k] = resolve(redirects, k);  
    return acc;
  }, {});
};

// Test
if (!module.parent) {
  var redirects = {
    1: 2,
    2: 3,
    4: 5,
    6: 7,
    7: 8,
    8: 9
  }
  go (redirects);
}
