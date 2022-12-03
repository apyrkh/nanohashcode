import { test } from 'uvu'
import { is } from 'uvu/assert'

import { hashCode } from '../index.js'

test('hashCode returns 0 for undefined', () => {
  is(hashCode(), 0)
})
test('hashCode returns 0 for null', () => {
  is(hashCode(null), 0)
})
test('hashCode returns 0 for empty string', () => {
  is(hashCode(''), 0)
})
test('hashCode returns 1794106052 for \'hello world\'', () => {
  is(hashCode('hello world'), 1794106052)
})

test.run()
