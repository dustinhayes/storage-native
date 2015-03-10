# storage-native

> Save and retrieve native javascript types in localStorage and sessionStorage

storage-native is a small, focused library that allows you to save and retrieve native javascript types (Dates, RegExp and Functions) in localStorage and sessionStorage. https://developer.mozilla.org/en-US/docs/Web/API/Storage

# Installing

from `npm`

```
npm install --save storage-native
```

# API

storage-native exposes two objects, `local` and `session`, that are mostly aliases for `window.localStorage` and `window.sessionStorage`. The only difference is with `#setItem` and `#getItem`.

## `#setItem(key, value)`

Allows for storing values of the following types:
* Object
* Array
* Number
* String
* Date
* RegExp
* Function

```javascript
var sn = require('storage-native');

sn.local.setItem('add', function (x, y) {
  return x + y;
});
```

## `#getItem(key)`

Allows for retrieving values of the previously mentioned types.

```javascript
var sn = require('storage-native');
var add = sn.local.getItem('add');

add(2, 3); // => 5
```

# License

MIT