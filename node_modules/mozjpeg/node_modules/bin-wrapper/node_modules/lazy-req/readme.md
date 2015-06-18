# lazy-req [![Build Status](https://travis-ci.org/sindresorhus/lazy-req.svg?branch=master)](https://travis-ci.org/sindresorhus/lazy-req)

> Require modules lazily


## Install

```sh
$ npm install --save lazy-req
```


## Usage

```js
// pass in `require` or a custom require function
var lazyReq = require('lazy-req')(require);
var lodash = require('lodash');

// where you would normally do
_.isNumber(2);

// you now instead call it as a function
_().isNumber(2);

// it's cached on consecutive calls
_().isString('unicorn');
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
