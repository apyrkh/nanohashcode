import Benchmark from 'benchmark'
import pico from 'picocolors'
import { hashCode } from '../hashCode.js'
import { hashCode as hashCodeBrowser } from '../hashCode.browser.js'
import { hashCode1, hashCode2, hashCode3 } from './benchmark.sandbox.js'

function formatNumber (number) {
  return String(number)
    .replace(/\d{3}$/, ',$&')
    .replace(/^(\d|\d\d)(\d{3},)/, '$1,$2')
}

let suite = new Benchmark.Suite()

suite
  .add('hashCode', () => {
    hashCode('hello world')
  })
  .add('hashCode browser', () => {
    hashCodeBrowser('hello world')
  })
  .add('hashCode1', () => {
    hashCode1('hello world')
  })
  .add('hashCode2', () => {
    hashCode2('hello world')
  })
  .add('hashCode3', () => {
    hashCode3('hello world')
  })
  // add listeners
  .on('cycle', function (event) {
    let name = event.target.name.padEnd('hashCode browser'.length)
    let hz = formatNumber(event.target.hz.toFixed(0)).padStart(15)
    process.stdout.write(`${name}${pico.bold(hz)}${pico.dim(' ops/sec')}\n`)
  })
  .on('complete', function () {
    process.stdout.write(`Fastest is ${pico.bold(this.filter('fastest').map('name'))}`)
  })
  // run async
  .run({ async: true })
