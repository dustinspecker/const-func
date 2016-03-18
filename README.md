# const-func
[![NPM version](https://badge.fury.io/js/const-func.svg)](https://badge.fury.io/js/const-func) [![Build Status](https://travis-ci.org/dustinspecker/const-func.svg)](https://travis-ci.org/dustinspecker/const-func) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/const-func.svg)](https://coveralls.io/r/dustinspecker/const-func?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/const-func/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/const-func) [![Dependencies](https://david-dm.org/dustinspecker/const-func.svg)](https://david-dm.org/dustinspecker/const-func/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/const-func/dev-status.svg)](https://david-dm.org/dustinspecker/const-func/#info=devDependencies&view=table)

> Create a function always returning a constant

Like [Elm](http://elm-lang.org/)'s [always](http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#always)

## Install
```
npm install --save const-func
```

## Usage
```javascript
import always from 'const-func'

const alwaysUndefined = always()
alwaysUndefined()
  // => undefined

const always3 = always(3)
always3()
  // => 3

const alwaysHi = always('hi')
alwaysHi('whatever')
  // => 'hi'
```

## API

### always(arg)
Returns a function that always returns a constant value.

#### arg
type: `*`

default: `undefined`

The constant value to always return from the constant function.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
