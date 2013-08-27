'use strict';

var resolve = require('../');

var redirects = { 1: 2, 2: 3, 4: 5, 6: 7, 7: 8, 8: 9 }
console.log(resolve(redirects));
