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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Operators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) math operators.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-ops/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops@v0.2.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { add, add3, add4, add5, addf, cadd, caddf, cdiv, cmul, cmulf, cneg, cnegf, csub, csubf, div, divf, imul, imuldw, mul, mulf, sub, subf, umul, umuldw } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops@esm/index.mjs';
```

#### ns

Namespace for "base" (i.e., lower-level) math operators.

```javascript
var operators = ns;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`add( x, y )`][@stdlib/math/base/ops/add]</span><span class="delimiter">: </span><span class="description">compute the sum of two double-precision floating-point numbers.</span>
-   <span class="signature">[`add3( x, y, z )`][@stdlib/math/base/ops/add3]</span><span class="delimiter">: </span><span class="description">compute the sum of three double-precision floating-point numbers.</span>
-   <span class="signature">[`add4( x, y, z, w )`][@stdlib/math/base/ops/add4]</span><span class="delimiter">: </span><span class="description">compute the sum of four double-precision floating-point numbers.</span>
-   <span class="signature">[`add5( x, y, z, w, u )`][@stdlib/math/base/ops/add5]</span><span class="delimiter">: </span><span class="description">compute the sum of five double-precision floating-point numbers.</span>
-   <span class="signature">[`addf( x, y )`][@stdlib/math/base/ops/addf]</span><span class="delimiter">: </span><span class="description">compute the sum of two single-precision floating-point numbers.</span>
-   <span class="signature">[`cadd( z1, z2 )`][@stdlib/math/base/ops/cadd]</span><span class="delimiter">: </span><span class="description">add two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`caddf( z1, z2 )`][@stdlib/math/base/ops/caddf]</span><span class="delimiter">: </span><span class="description">add two single-precision complex floating-point numbers.</span>
-   <span class="signature">[`cdiv( z1, z2 )`][@stdlib/math/base/ops/cdiv]</span><span class="delimiter">: </span><span class="description">divide two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`cmul( z1, z2 )`][@stdlib/math/base/ops/cmul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`cmulf( z1, z2 )`][@stdlib/math/base/ops/cmulf]</span><span class="delimiter">: </span><span class="description">multiply two single-precision complex floating-point numbers.</span>
-   <span class="signature">[`cneg( z )`][@stdlib/math/base/ops/cneg]</span><span class="delimiter">: </span><span class="description">negate a double-precision complex floating-point number.</span>
-   <span class="signature">[`cnegf( z )`][@stdlib/math/base/ops/cnegf]</span><span class="delimiter">: </span><span class="description">negate a single-precision complex floating-point number.</span>
-   <span class="signature">[`csub( z1, z2 )`][@stdlib/math/base/ops/csub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision complex floating-point numbers.</span>
-   <span class="signature">[`csubf( z1, z2 )`][@stdlib/math/base/ops/csubf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision complex floating-point numbers.</span>
-   <span class="signature">[`div( x, y )`][@stdlib/math/base/ops/div]</span><span class="delimiter">: </span><span class="description">divide two double-precision floating-point numbers.</span>
-   <span class="signature">[`divf( x, y )`][@stdlib/math/base/ops/divf]</span><span class="delimiter">: </span><span class="description">divide two single-precision floating-point numbers.</span>
-   <span class="signature">[`imul( a, b )`][@stdlib/math/base/ops/imul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two signed 32-bit integers.</span>
-   <span class="signature">[`imuldw( a, b )`][@stdlib/math/base/ops/imuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two signed 32-bit integers.</span>
-   <span class="signature">[`mul( x, y )`][@stdlib/math/base/ops/mul]</span><span class="delimiter">: </span><span class="description">multiply two double-precision floating-point numbers.</span>
-   <span class="signature">[`mulf( x, y )`][@stdlib/math/base/ops/mulf]</span><span class="delimiter">: </span><span class="description">multiply two single-precision floating-point numbers.</span>
-   <span class="signature">[`sub( x, y )`][@stdlib/math/base/ops/sub]</span><span class="delimiter">: </span><span class="description">subtract two double-precision floating-point numbers.</span>
-   <span class="signature">[`subf( x, y )`][@stdlib/math/base/ops/subf]</span><span class="delimiter">: </span><span class="description">subtract two single-precision floating-point numbers.</span>
-   <span class="signature">[`umul( a, b )`][@stdlib/math/base/ops/umul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two unsigned 32-bit integers.</span>
-   <span class="signature">[`umuldw( a, b )`][@stdlib/math/base/ops/umuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two unsigned 32-bit integers.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops

[test-image]: https://github.com/stdlib-js/math-base-ops/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-ops/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-ops/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-ops/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-ops/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-ops/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-ops/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-ops/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/base/ops/add]: https://github.com/stdlib-js/math-base-ops-add/tree/esm

[@stdlib/math/base/ops/add3]: https://github.com/stdlib-js/math-base-ops-add3/tree/esm

[@stdlib/math/base/ops/add4]: https://github.com/stdlib-js/math-base-ops-add4/tree/esm

[@stdlib/math/base/ops/add5]: https://github.com/stdlib-js/math-base-ops-add5/tree/esm

[@stdlib/math/base/ops/addf]: https://github.com/stdlib-js/math-base-ops-addf/tree/esm

[@stdlib/math/base/ops/cadd]: https://github.com/stdlib-js/math-base-ops-cadd/tree/esm

[@stdlib/math/base/ops/caddf]: https://github.com/stdlib-js/math-base-ops-caddf/tree/esm

[@stdlib/math/base/ops/cdiv]: https://github.com/stdlib-js/math-base-ops-cdiv/tree/esm

[@stdlib/math/base/ops/cmul]: https://github.com/stdlib-js/math-base-ops-cmul/tree/esm

[@stdlib/math/base/ops/cmulf]: https://github.com/stdlib-js/math-base-ops-cmulf/tree/esm

[@stdlib/math/base/ops/cneg]: https://github.com/stdlib-js/math-base-ops-cneg/tree/esm

[@stdlib/math/base/ops/cnegf]: https://github.com/stdlib-js/math-base-ops-cnegf/tree/esm

[@stdlib/math/base/ops/csub]: https://github.com/stdlib-js/math-base-ops-csub/tree/esm

[@stdlib/math/base/ops/csubf]: https://github.com/stdlib-js/math-base-ops-csubf/tree/esm

[@stdlib/math/base/ops/div]: https://github.com/stdlib-js/math-base-ops-div/tree/esm

[@stdlib/math/base/ops/divf]: https://github.com/stdlib-js/math-base-ops-divf/tree/esm

[@stdlib/math/base/ops/imul]: https://github.com/stdlib-js/math-base-ops-imul/tree/esm

[@stdlib/math/base/ops/imuldw]: https://github.com/stdlib-js/math-base-ops-imuldw/tree/esm

[@stdlib/math/base/ops/mul]: https://github.com/stdlib-js/math-base-ops-mul/tree/esm

[@stdlib/math/base/ops/mulf]: https://github.com/stdlib-js/math-base-ops-mulf/tree/esm

[@stdlib/math/base/ops/sub]: https://github.com/stdlib-js/math-base-ops-sub/tree/esm

[@stdlib/math/base/ops/subf]: https://github.com/stdlib-js/math-base-ops-subf/tree/esm

[@stdlib/math/base/ops/umul]: https://github.com/stdlib-js/math-base-ops-umul/tree/esm

[@stdlib/math/base/ops/umuldw]: https://github.com/stdlib-js/math-base-ops-umuldw/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
