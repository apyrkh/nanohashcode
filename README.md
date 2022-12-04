# Nano HashCode

A tiny (75 bytes), string hash code implementation for JavaScript

- Small. 75 bytes (minified and gzipped). Size Limit controls the size.
- No dependencies.

```js
import { hashCode } from 'nanohashcode'
hashCode('hello world') //=> 1794106052
```

Supports modern browsers, IE, Node.js and React Native.

## Install

```bash
npm install --save nanohashcode
```

For quick hacks, you can load Nano HashCode from CDN. Though, it is not recommended
to be used in production because of the lower loading performance.

```js
import { hashCode } from 'https://cdn.jsdelivr.net/npm/nanohashcode/hashCode.js'
```

Nano HashCode provides ES modules. You do not need to do anything to use Nano HashCode
as ESM in webpack, Rollup, Parcel, or Node.js.

```js
import { hashCode } from 'nanohashcode'
