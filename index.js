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
