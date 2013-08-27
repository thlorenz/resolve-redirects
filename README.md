# resolve-redirects [![build status](https://secure.travis-ci.org/thlorenz/resolve-redirects.png)](http://travis-ci.org/thlorenz/resolve-redirects)

Resolves key/value pair redirects by following each redirect as far as possible.

```js
var resolve = require('resolve-redirects');

var redirects = { 1: 2, 2: 3, 4: 5, 6: 7, 7: 8, 8: 9 }
console.log(resolve(redirects));
// => { '1': 3, '2': 3, '4': 5, '6': 9, '7': 9, '8': 9 }
```

## Installation

    npm install resolve-redirects

## API

###*resolve(redirects)*

```
/**
 * Resolves the key/value redirects to find the best possible value for each redirect.
 *
 * @name exports
 * @function
 * @param redirects {Object} unresolved redirects
 * @return {Object} resolved redirects
 */
```

## License

MIT
