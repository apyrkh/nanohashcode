import { test } from 'uvu'
import { is } from 'uvu/assert'

import { hashCode as hashCodeNode } from '../hashCode.js'
import { hashCode as hashCodeBrowser } from '../hashCode.browser.js'

for (let type of ['node', 'browser']) {
  const hashCode = type === 'node' ? hashCodeNode : hashCodeBrowser

  test(`${type} / hashCode returns 0 for undefined`, () => {
    is(hashCode(), 0)
  })
  test(`${type} / hashCode returns 0 for null`, () => {
    is(hashCode(null), 0)
  })
  test(`${type} / hashCode returns 0 for empty string`, () => {
    is(hashCode(''), 0)
  })
  test(`${type} / hashCode returns 1794106052 for 'hello world'`, () => {
    is(hashCode('hello world'), 1794106052)
  })
}

test.run()
