
<!-- TITLE/ -->

# Extract Options

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/bevry/extract-opts/master.svg)](http://travis-ci.org/bevry/extract-opts "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/extract-opts.svg)](https://npmjs.org/package/extract-opts "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/extract-opts.svg)](https://npmjs.org/package/extract-opts "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/bevry/extract-opts.svg)](https://david-dm.org/bevry/extract-opts)
[![Dev Dependency Status](https://img.shields.io/david/dev/bevry/extract-opts.svg)](https://david-dm.org/bevry/extract-opts#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/bevry.svg)](https://www.gratipay.com/bevry/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

Extract the options and callback from a function's arguments easily

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('extract-opts')`
- Install: `npm install --save extract-opts`

### [Browserify](http://browserify.org/)
- Use: `require('extract-opts')`
- Install: `npm install --save extract-opts`
- CDN URL: `//wzrd.in/bundle/extract-opts@3.0.1`

### [Ender](http://enderjs.com)
- Use: `require('extract-opts')`
- Install: `ender add extract-opts`

<!-- /INSTALL -->


## Usage

``` javascript
var extractOpts = require('extract-opts')

// fs.readFile(filename, [options], callback)
var readFile = function(filename, opts, callback){
	// Extract options and callback
	var args = extractOpts(opts, callback)
	opts = args[0]
	callback = args[1]

	// Forward for simplicities sake
	require('fs').readFile(filename, opts, callback)
};

// Test it
var next = console.log.bind(console)
readFile('package.json', next)          // works with no options
readFile('package.json', null, next)    // works with null options
readFile('package.json', {next:next})   // works with just options
```


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/extract-opts/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/extract-opts/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/bevry.svg)](https://www.gratipay.com/bevry/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/extract-opts/commits?author=balupton)
- [sfrdmn](https://github.com/sfrdmn) — [view contributions](https://github.com/bevry/extract-opts/commits?author=sfrdmn)

[Become a contributor!](https://github.com/bevry/extract-opts/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

- Copyright &copy; 2013+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)
- Copyright &copy; 2011+ Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

and licensed under:

- The #{type} License

<!-- /LICENSE -->


