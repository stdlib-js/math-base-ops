<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Operators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library base math operators.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math-base-ops' );
```

#### ns

Standard library base math operators.

```javascript
var operators = ns;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cadd( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/cadd]</span><span class="delimiter">: </span><span class="description">add two complex numbers.</span>
-   <span class="signature">[`cdiv( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two complex numbers.</span>
-   <span class="signature">[`cmul( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/cmul]</span><span class="delimiter">: </span><span class="description">multiply two complex numbers.</span>
-   <span class="signature">[`cneg( [out,] re, im )`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a complex number.</span>
-   <span class="signature">[`csub( [out,] re1, im1, re2, im2 )`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two complex numbers.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/math-base-ops' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops

[test-image]: https://github.com/stdlib-js/math-base-ops/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-ops/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/ops/cadd]: https://github.com/stdlib-js/math-base-ops-cadd

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math-base-ops-cdiv

[@stdlib/math/base/ops/cmul]: https://github.com/stdlib-js/math-base-ops-cmul

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math-base-ops-cneg

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math-base-ops-csub

<!-- </toc-links> -->

</section>

<!-- /.links -->
