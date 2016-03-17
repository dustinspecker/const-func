'use strict'
import test from 'ava'

import constFunc from '../lib/'

test('it should create function returning constant value', t => {
  t.is(constFunc()(), undefined)
  t.is(constFunc(3)(), 3)
  t.is(constFunc('hi')('whatever'), 'hi')
})
