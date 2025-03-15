# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-03-15)

<section class="packages">

### Packages

<section class="package" id="math-base-ops-unreleased">

#### [@stdlib/math/base/ops](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops)

<details>

<section class="features">

##### Features

-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799) - update namespace TypeScript declarations [(#5511)](https://github.com/stdlib-js/stdlib/pull/5511)
-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce) - update namespace TypeScript declarations [(#5385)](https://github.com/stdlib-js/stdlib/pull/5385)
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254)
-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95) - update namespace TypeScript declarations [(#5243)](https://github.com/stdlib-js/stdlib/pull/5243)
-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a) - update namespace TypeScript declarations [(#5130)](https://github.com/stdlib-js/stdlib/pull/5130)
-   [`8409bd1`](https://github.com/stdlib-js/stdlib/commit/8409bd17639c21c94be23d8498789fca5352892b) - update namespace TypeScript declarations [(#4856)](https://github.com/stdlib-js/stdlib/pull/4856)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0c06190`](https://github.com/stdlib-js/stdlib/commit/0c0619036e1d1c2eea8d3996fb7a8488fc881032): remove `div`

    -   To migrate, users should access `div` via the `number/float64/base` namespace.

-   [`975673b`](https://github.com/stdlib-js/stdlib/commit/975673bff1cb9bd1b313e79ad4ee7595142fe1ff): remove `cnegf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float32/base/neg` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`112db79`](https://github.com/stdlib-js/stdlib/commit/112db79f8adcf64554e4b246c08c3462a6fb1451): remove `cneg`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`ec9247d`](https://github.com/stdlib-js/stdlib/commit/ec9247d8f9fdefc32a28a68ed0bbae29898f5c81): remove `cdiv`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`782bbfd`](https://github.com/stdlib-js/stdlib/commit/782bbfd4fca9765fc4a916aa2a4d4701647c7a19): remove `umuldw`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-uint32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`b2228a8`](https://github.com/stdlib-js/stdlib/commit/b2228a8607c4ec969a1896b69ba40157bcf8e16c): remove `imuldw`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-int32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`b70a6d6`](https://github.com/stdlib-js/stdlib/commit/b70a6d61be09792e9f7b51815223bfab2b3139b2): remove `imul`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-int32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799): remove `mulf` from `math/base/ops` namespace

    -   To migrate, users should access the same symbol via the `number/float32/base` namespace.

-   [`ba7f7ab`](https://github.com/stdlib-js/stdlib/commit/ba7f7ab1afb8f31f763f21ddfaae4937e333d757): remove `umul`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-uint32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`80f11b8`](https://github.com/stdlib-js/stdlib/commit/80f11b8ab164070e9caa9d1940925c0258f5322c): remove `subf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce): remove `dnanmean` from `stats/base`

    -   To migrate, users should access the same symbol via the `@stdlib/stats-strided` namespace.

-   [`0667356`](https://github.com/stdlib-js/stdlib/commit/0667356f8cd3b95699e57d29fe2e4f4d3fdb671c): remove `mulf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410): remove `dmaxabs`

    -   To migrate, users should access `dmaxabs` via the `stats/strided` namespace.

-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95): remove `add5`

    -   To migrate, users should access the `add5` symbol via the `number/float64/base` namespace.

-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a): remove `add`, `add3`, and `add4`

    -   To migrate, users should access those symbols in the `number/float64/base` namespace.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add-unreleased">

#### [@stdlib/math/base/ops/add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b253140`](https://github.com/stdlib-js/stdlib/commit/b253140185322817c25fd8e3bb238703d013727a): remove `math/base/ops/add`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: passed
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: passed
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add3-unreleased">

#### [@stdlib/math/base/ops/add3](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add3)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`69d0ade`](https://github.com/stdlib-js/stdlib/commit/69d0adefc17b11a444273ec9afac7246a8f5b3cb): remove `math/base/ops/add3`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add3` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add4-unreleased">

#### [@stdlib/math/base/ops/add4](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add4)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e621529`](https://github.com/stdlib-js/stdlib/commit/e6215295bef94ff94f5b6d7a893c99283725d7c9): remove `math/base/ops/add4`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add4` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add5-unreleased">

#### [@stdlib/math/base/ops/add5](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add5)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`cfa99a4`](https://github.com/stdlib-js/stdlib/commit/cfa99a44297521f94fb485a4f3009b6070340728): remove `math/base/ops/add5`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add5` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-addf-unreleased">

#### [@stdlib/math/base/ops/addf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/addf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`ec08225`](https://github.com/stdlib-js/stdlib/commit/ec0822505673b3032e591de02a9e0dc67b598f81): remove `math/base/ops/addf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/add` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cdiv-unreleased">

#### [@stdlib/math/base/ops/cdiv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cdiv)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9752725`](https://github.com/stdlib-js/stdlib/commit/9752725fc04e4a14c4460d3ef7e188ad80bb3d60): remove `math/base/ops/cdiv`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/div` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cneg-unreleased">

#### [@stdlib/math/base/ops/cneg](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cneg)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`f8e419f`](https://github.com/stdlib-js/stdlib/commit/f8e419fd8c741b7a6dd062c570fccc18cb7b2b61): remove `math/base/ops/cneg`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/neg` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cnegf-unreleased">

#### [@stdlib/math/base/ops/cnegf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cnegf)

<details>

<section class="reverts">

##### Reverts

-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - chore: update to modern benchmark Makefile

</section>

<!-- /.reverts -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bfb8cf2`](https://github.com/stdlib-js/stdlib/commit/bfb8cf278c204e83d1d3c9bae6e37553f1827345): remove `math/base/ops/cnegf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/neg` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-div-unreleased">

#### [@stdlib/math/base/ops/div](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/div)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0f7955c`](https://github.com/stdlib-js/stdlib/commit/0f7955ca28cb90556930d603e0784129011b8480): remove `math/base/ops/div`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/div` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-divf-unreleased">

#### [@stdlib/math/base/ops/divf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/divf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`72c6513`](https://github.com/stdlib-js/stdlib/commit/72c6513ad86ddf20c6fe38ecabbbf2b17a112582): remove `math/base/ops/divf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/div` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-imul-unreleased">

#### [@stdlib/math/base/ops/imul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/imul)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b830e28`](https://github.com/stdlib-js/stdlib/commit/b830e280f9d2df36f473527b62418539844229c9): remove `math/base/ops/imul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-int32/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-imuldw-unreleased">

#### [@stdlib/math/base/ops/imuldw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/imuldw)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b2a6bb8`](https://github.com/stdlib-js/stdlib/commit/b2a6bb80465a0d6dcc78f4edaddf719e62d89004): remove `math/base/ops/imuldw`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-int32/base/muldw` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#5105](https://github.com/stdlib-js/stdlib/issues/5105)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-mul-unreleased">

#### [@stdlib/math/base/ops/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/mul)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`e7ab8a5`](https://github.com/stdlib-js/stdlib/commit/e7ab8a5aaeee5e088db91cbd7b1184a8b7ccde38): remove `math/base/ops/mul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-mulf-unreleased">

#### [@stdlib/math/base/ops/mulf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/mulf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`910ed0a`](https://github.com/stdlib-js/stdlib/commit/910ed0a3d5c4efab8a59308499ab5fd4aa0d136f): remove `math/base/ops/mulf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-sub-unreleased">

#### [@stdlib/math/base/ops/sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/sub)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`35875b3`](https://github.com/stdlib-js/stdlib/commit/35875b3b4162a530c02e72e8444589053fd1cb2d): remove `math/base/ops/sub`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/sub` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-subf-unreleased">

#### [@stdlib/math/base/ops/subf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/subf)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`c0aca6a`](https://github.com/stdlib-js/stdlib/commit/c0aca6aff2bbf9141fe738dba75c652bcfbe57d0): remove `math/base/ops/subf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/sub` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-umul-unreleased">

#### [@stdlib/math/base/ops/umul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/umul)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`29cc785`](https://github.com/stdlib-js/stdlib/commit/29cc785ee4c0d56aff6a5a2dda3dbf9ad90fbc71): remove `math/base/ops/umul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-uint32/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-umuldw-unreleased">

#### [@stdlib/math/base/ops/umuldw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/umuldw)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`7398503`](https://github.com/stdlib-js/stdlib/commit/7398503d9c24fd184ec56f06181fa28f3a32aac0): remove `math/base/ops/umuldw`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-uint32/base/muldw` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`0c06190`](https://github.com/stdlib-js/stdlib/commit/0c0619036e1d1c2eea8d3996fb7a8488fc881032): remove `div`

    -   To migrate, users should access `div` via the `number/float64/base` namespace.

-   [`bfb8cf2`](https://github.com/stdlib-js/stdlib/commit/bfb8cf278c204e83d1d3c9bae6e37553f1827345): remove `math/base/ops/cnegf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/neg` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`975673b`](https://github.com/stdlib-js/stdlib/commit/975673bff1cb9bd1b313e79ad4ee7595142fe1ff): remove `cnegf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float32/base/neg` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`f8e419f`](https://github.com/stdlib-js/stdlib/commit/f8e419fd8c741b7a6dd062c570fccc18cb7b2b61): remove `math/base/ops/cneg`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/neg` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`112db79`](https://github.com/stdlib-js/stdlib/commit/112db79f8adcf64554e4b246c08c3462a6fb1451): remove `cneg`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`9752725`](https://github.com/stdlib-js/stdlib/commit/9752725fc04e4a14c4460d3ef7e188ad80bb3d60): remove `math/base/ops/cdiv`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/div` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`ec9247d`](https://github.com/stdlib-js/stdlib/commit/ec9247d8f9fdefc32a28a68ed0bbae29898f5c81): remove `cdiv`

    -   To migrate, users should access the same symbol via the
        `@stdlib/complex-float64/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`7398503`](https://github.com/stdlib-js/stdlib/commit/7398503d9c24fd184ec56f06181fa28f3a32aac0): remove `math/base/ops/umuldw`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-uint32/base/muldw` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`782bbfd`](https://github.com/stdlib-js/stdlib/commit/782bbfd4fca9765fc4a916aa2a4d4701647c7a19): remove `umuldw`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-uint32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`b2a6bb8`](https://github.com/stdlib-js/stdlib/commit/b2a6bb80465a0d6dcc78f4edaddf719e62d89004): remove `math/base/ops/imuldw`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-int32/base/muldw` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`b2228a8`](https://github.com/stdlib-js/stdlib/commit/b2228a8607c4ec969a1896b69ba40157bcf8e16c): remove `imuldw`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-int32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`b830e28`](https://github.com/stdlib-js/stdlib/commit/b830e280f9d2df36f473527b62418539844229c9): remove `math/base/ops/imul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-int32/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`b70a6d6`](https://github.com/stdlib-js/stdlib/commit/b70a6d61be09792e9f7b51815223bfab2b3139b2): remove `imul`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-int32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799): remove `mulf` from `math/base/ops` namespace

    -   To migrate, users should access the same symbol via the `number/float32/base` namespace.

-   [`29cc785`](https://github.com/stdlib-js/stdlib/commit/29cc785ee4c0d56aff6a5a2dda3dbf9ad90fbc71): remove `math/base/ops/umul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-uint32/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`ba7f7ab`](https://github.com/stdlib-js/stdlib/commit/ba7f7ab1afb8f31f763f21ddfaae4937e333d757): remove `umul`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-uint32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`c0aca6a`](https://github.com/stdlib-js/stdlib/commit/c0aca6aff2bbf9141fe738dba75c652bcfbe57d0): remove `math/base/ops/subf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/sub` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`80f11b8`](https://github.com/stdlib-js/stdlib/commit/80f11b8ab164070e9caa9d1940925c0258f5322c): remove `subf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: passed
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce): remove `dnanmean` from `stats/base`

    -   To migrate, users should access the same symbol via the `@stdlib/stats-strided` namespace.

-   [`910ed0a`](https://github.com/stdlib-js/stdlib/commit/910ed0a3d5c4efab8a59308499ab5fd4aa0d136f): remove `math/base/ops/mulf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`0667356`](https://github.com/stdlib-js/stdlib/commit/0667356f8cd3b95699e57d29fe2e4f4d3fdb671c): remove `mulf`

    -   To migrate, users should access the same symbol via the
        `@stdlib/number-float32/base` namespace.
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: passed
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---

-   [`72c6513`](https://github.com/stdlib-js/stdlib/commit/72c6513ad86ddf20c6fe38ecabbbf2b17a112582): remove `math/base/ops/divf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/div` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`35875b3`](https://github.com/stdlib-js/stdlib/commit/35875b3b4162a530c02e72e8444589053fd1cb2d): remove `math/base/ops/sub`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/sub` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`0f7955c`](https://github.com/stdlib-js/stdlib/commit/0f7955ca28cb90556930d603e0784129011b8480): remove `math/base/ops/div`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/div` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`e7ab8a5`](https://github.com/stdlib-js/stdlib/commit/e7ab8a5aaeee5e088db91cbd7b1184a8b7ccde38): remove `math/base/ops/mul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/mul` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410): remove `dmaxabs`

    -   To migrate, users should access `dmaxabs` via the `stats/strided` namespace.

-   [`ec08225`](https://github.com/stdlib-js/stdlib/commit/ec0822505673b3032e591de02a9e0dc67b598f81): remove `math/base/ops/addf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float32/base/add` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95): remove `add5`

    -   To migrate, users should access the `add5` symbol via the `number/float64/base` namespace.

-   [`cfa99a4`](https://github.com/stdlib-js/stdlib/commit/cfa99a44297521f94fb485a4f3009b6070340728): remove `math/base/ops/add5`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add5` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a): remove `add`, `add3`, and `add4`

    -   To migrate, users should access those symbols in the `number/float64/base` namespace.

-   [`e621529`](https://github.com/stdlib-js/stdlib/commit/e6215295bef94ff94f5b6d7a893c99283725d7c9): remove `math/base/ops/add4`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add4` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`69d0ade`](https://github.com/stdlib-js/stdlib/commit/69d0adefc17b11a444273ec9afac7246a8f5b3cb): remove `math/base/ops/add3`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add3` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: na
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: na
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

-   [`b253140`](https://github.com/stdlib-js/stdlib/commit/b253140185322817c25fd8e3bb238703d013727a): remove `math/base/ops/add`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/number-float64/base/add` which provides the same API and
        implementation.
        Ref: https://github.com/stdlib-js/stdlib/issues/2261
        ---
        type: pre_commit_static_analysis_report
        description: Results of running static analysis checks when committing changes.
        report:
          - task: lint_filenames
            status: passed
          - task: lint_editorconfig
            status: passed
          - task: lint_markdown
            status: na
          - task: lint_package_json
            status: na
          - task: lint_repl_help
            status: na
          - task: lint_javascript_src
            status: na
          - task: lint_javascript_cli
            status: na
          - task: lint_javascript_examples
            status: na
          - task: lint_javascript_tests
            status: na
          - task: lint_javascript_benchmarks
            status: na
          - task: lint_python
            status: na
          - task: lint_r
            status: na
          - task: lint_c_src
            status: na
          - task: lint_c_examples
            status: na
          - task: lint_c_benchmarks
            status: na
          - task: lint_c_tests_fixtures
            status: na
          - task: lint_shell
            status: na
          - task: lint_typescript_declarations
            status: na
          - task: lint_typescript_tests
            status: na
          - task: lint_license_headers
            status: passed
        ---
        ---
        type: pre_push_report
        description: Results of running various checks prior to pushing changes.
        report:
          - task: run_javascript_examples
            status: na
          - task: run_c_examples
            status: na
          - task: run_cpp_examples
            status: na
          - task: run_javascript_readme_examples
            status: passed
          - task: run_c_benchmarks
            status: na
          - task: run_cpp_benchmarks
            status: na
          - task: run_fortran_benchmarks
            status: na
          - task: run_javascript_benchmarks
            status: passed
          - task: run_julia_benchmarks
            status: na
          - task: run_python_benchmarks
            status: na
          - task: run_r_benchmarks
            status: na
          - task: run_javascript_tests
            status: na
        ---

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#5105](https://github.com/stdlib-js/stdlib/issues/5105)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Aayush Khanna
-   Athan Reines
-   Gururaj Gurram
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`5cc0967`](https://github.com/stdlib-js/stdlib/commit/5cc0967af847836f11be2f3ce41f56c2d5345530) - **docs:** update namespace table of contents [(#6060)](https://github.com/stdlib-js/stdlib/pull/6060) _(by stdlib-bot)_
-   [`0c06190`](https://github.com/stdlib-js/stdlib/commit/0c0619036e1d1c2eea8d3996fb7a8488fc881032) - **remove:** remove `div` from namespace _(by Gururaj Gurram)_
-   [`bfb8cf2`](https://github.com/stdlib-js/stdlib/commit/bfb8cf278c204e83d1d3c9bae6e37553f1827345) - **remove:** remove `math/base/ops/cnegf` _(by Gururaj Gurram)_
-   [`bde09b5`](https://github.com/stdlib-js/stdlib/commit/bde09b5464e1faab4b01b03509626755c661db20) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`975673b`](https://github.com/stdlib-js/stdlib/commit/975673bff1cb9bd1b313e79ad4ee7595142fe1ff) - **remove:** remove `cnegf` from namespace _(by Gururaj Gurram)_
-   [`216ed03`](https://github.com/stdlib-js/stdlib/commit/216ed034f920b72bd4ffc82724285333d28e33cc) - **docs:** update namespace table of contents [(#6010)](https://github.com/stdlib-js/stdlib/pull/6010) _(by stdlib-bot, Athan Reines)_
-   [`f8e419f`](https://github.com/stdlib-js/stdlib/commit/f8e419fd8c741b7a6dd062c570fccc18cb7b2b61) - **remove:** remove `math/base/ops/cneg` _(by Gururaj Gurram)_
-   [`adef168`](https://github.com/stdlib-js/stdlib/commit/adef168dccaecd20560002341c76e9bb06794c6d) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`112db79`](https://github.com/stdlib-js/stdlib/commit/112db79f8adcf64554e4b246c08c3462a6fb1451) - **remove:** remove `cneg` from namespace _(by Gururaj Gurram)_
-   [`9752725`](https://github.com/stdlib-js/stdlib/commit/9752725fc04e4a14c4460d3ef7e188ad80bb3d60) - **remove:** remove `math/base/ops/cdiv` _(by Gururaj Gurram)_
-   [`3bad287`](https://github.com/stdlib-js/stdlib/commit/3bad287c1589abf75463bbb43311c22d4a991c22) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`ec9247d`](https://github.com/stdlib-js/stdlib/commit/ec9247d8f9fdefc32a28a68ed0bbae29898f5c81) - **remove:** remove `cdiv` from namespace _(by Gururaj Gurram)_
-   [`daee91a`](https://github.com/stdlib-js/stdlib/commit/daee91a9b272effbc3d8801225957d2bbb5b44b2) - **remove:** remove `divf` from namespace [(#5958)](https://github.com/stdlib-js/stdlib/pull/5958) _(by Gururaj Gurram)_
-   [`83b446f`](https://github.com/stdlib-js/stdlib/commit/83b446ffb685852b7d1d7d339a8e68c36b46a330) - **docs:** update namespace table of contents [(#5907)](https://github.com/stdlib-js/stdlib/pull/5907) _(by stdlib-bot)_
-   [`7398503`](https://github.com/stdlib-js/stdlib/commit/7398503d9c24fd184ec56f06181fa28f3a32aac0) - **remove:** remove `math/base/ops/umuldw` _(by Gururaj Gurram)_
-   [`b709cec`](https://github.com/stdlib-js/stdlib/commit/b709cec2e463ba1af5406e3c08a219036941dd09) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`782bbfd`](https://github.com/stdlib-js/stdlib/commit/782bbfd4fca9765fc4a916aa2a4d4701647c7a19) - **remove:** remove `umuldw` from namespace _(by Gururaj Gurram)_
-   [`b2a6bb8`](https://github.com/stdlib-js/stdlib/commit/b2a6bb80465a0d6dcc78f4edaddf719e62d89004) - **remove:** remove `math/base/ops/imuldw` _(by Gururaj Gurram)_
-   [`9a6831e`](https://github.com/stdlib-js/stdlib/commit/9a6831eb31d985baec5ca19f5286e5756bacad8f) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`b2228a8`](https://github.com/stdlib-js/stdlib/commit/b2228a8607c4ec969a1896b69ba40157bcf8e16c) - **remove:** remove `imuldw` from namespace _(by Gururaj Gurram)_
-   [`1229ea7`](https://github.com/stdlib-js/stdlib/commit/1229ea77f838afd290122ab1470796312785be9a) - **remove:** remove `addf` from namespace [(#5737)](https://github.com/stdlib-js/stdlib/pull/5737) _(by Gururaj Gurram)_
-   [`b830e28`](https://github.com/stdlib-js/stdlib/commit/b830e280f9d2df36f473527b62418539844229c9) - **remove:** remove `math/base/ops/imul` _(by Gururaj Gurram)_
-   [`2540748`](https://github.com/stdlib-js/stdlib/commit/2540748e5850b4f7e8268904faeec1f2e9cb7bfd) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`b70a6d6`](https://github.com/stdlib-js/stdlib/commit/b70a6d61be09792e9f7b51815223bfab2b3139b2) - **remove:** remove `imul` from namespace _(by Gururaj Gurram)_
-   [`4efada9`](https://github.com/stdlib-js/stdlib/commit/4efada90febbd19180bcba37915b0f19e918348e) - **docs:** update namespace table of contents [(#5513)](https://github.com/stdlib-js/stdlib/pull/5513) _(by stdlib-bot)_
-   [`211d758`](https://github.com/stdlib-js/stdlib/commit/211d7589cc78cf73556270c7bd8e669537d21799) - **feat:** update namespace TypeScript declarations [(#5511)](https://github.com/stdlib-js/stdlib/pull/5511) _(by stdlib-bot)_
-   [`29cc785`](https://github.com/stdlib-js/stdlib/commit/29cc785ee4c0d56aff6a5a2dda3dbf9ad90fbc71) - **remove:** remove `math/base/ops/umul` _(by Gururaj Gurram)_
-   [`5260d13`](https://github.com/stdlib-js/stdlib/commit/5260d1347c8cd3f669d47dabe8cc6f954809bb27) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`ba7f7ab`](https://github.com/stdlib-js/stdlib/commit/ba7f7ab1afb8f31f763f21ddfaae4937e333d757) - **remove:** remove `umul` from namespace _(by Gururaj Gurram)_
-   [`c0aca6a`](https://github.com/stdlib-js/stdlib/commit/c0aca6aff2bbf9141fe738dba75c652bcfbe57d0) - **remove:** remove `math/base/ops/subf` _(by Gururaj Gurram)_
-   [`5081120`](https://github.com/stdlib-js/stdlib/commit/50811206a32132606851c5b5505c6a1e9b145319) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`80f11b8`](https://github.com/stdlib-js/stdlib/commit/80f11b8ab164070e9caa9d1940925c0258f5322c) - **remove:** remove `subf` from namespace _(by Gururaj Gurram)_
-   [`9d532b5`](https://github.com/stdlib-js/stdlib/commit/9d532b5510055d80c5df8ba4c8e897c1670dcd1a) - **docs:** update namespace table of contents [(#5438)](https://github.com/stdlib-js/stdlib/pull/5438) _(by stdlib-bot, Philipp Burckhardt)_
-   [`31d673e`](https://github.com/stdlib-js/stdlib/commit/31d673e7ec3a7393b6b689d9ab724b783deef4ce) - **feat:** update namespace TypeScript declarations [(#5385)](https://github.com/stdlib-js/stdlib/pull/5385) _(by stdlib-bot)_
-   [`910ed0a`](https://github.com/stdlib-js/stdlib/commit/910ed0a3d5c4efab8a59308499ab5fd4aa0d136f) - **remove:** remove `math/base/ops/mulf` _(by Gururaj Gurram)_
-   [`1eac550`](https://github.com/stdlib-js/stdlib/commit/1eac550d7e113582faa355fe13dfbb24e02d9238) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`0667356`](https://github.com/stdlib-js/stdlib/commit/0667356f8cd3b95699e57d29fe2e4f4d3fdb671c) - **remove:** remove `mulf` from namespace _(by Gururaj Gurram)_
-   [`afbe56b`](https://github.com/stdlib-js/stdlib/commit/afbe56bcdf992a969b20a912828b42d0cdbe717a) - **docs:** update namespace table of contents [(#5387)](https://github.com/stdlib-js/stdlib/pull/5387) _(by stdlib-bot)_
-   [`72c6513`](https://github.com/stdlib-js/stdlib/commit/72c6513ad86ddf20c6fe38ecabbbf2b17a112582) - **remove:** remove `math/base/ops/divf` _(by Gururaj Gurram)_
-   [`adbcf39`](https://github.com/stdlib-js/stdlib/commit/adbcf39b36d49a9c2876bdc2848e9dac842cf90f) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`54ed22a`](https://github.com/stdlib-js/stdlib/commit/54ed22a2eb989926f99680f33bd8bf700d5759b0) - **docs:** update namespace TypeScript declarations [(#5330)](https://github.com/stdlib-js/stdlib/pull/5330) _(by stdlib-bot)_
-   [`bf18c77`](https://github.com/stdlib-js/stdlib/commit/bf18c7705ea5e96e733a13f20844bf975a4dac18) - **docs:** update namespace table of contents [(#5351)](https://github.com/stdlib-js/stdlib/pull/5351) _(by stdlib-bot)_
-   [`35875b3`](https://github.com/stdlib-js/stdlib/commit/35875b3b4162a530c02e72e8444589053fd1cb2d) - **remove:** remove `math/base/ops/sub` _(by Gururaj Gurram)_
-   [`92761ec`](https://github.com/stdlib-js/stdlib/commit/92761ec746d55b5cd6d48a06276b5e1bffe2cfb0) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`13fc14e`](https://github.com/stdlib-js/stdlib/commit/13fc14e776090d0c8917b7a7a4757dd8b9051d71) - **docs:** update namespace table of contents [(#5332)](https://github.com/stdlib-js/stdlib/pull/5332) _(by stdlib-bot)_
-   [`0f7955c`](https://github.com/stdlib-js/stdlib/commit/0f7955ca28cb90556930d603e0784129011b8480) - **remove:** remove `math/base/ops/div` _(by Gururaj Gurram)_
-   [`e910b33`](https://github.com/stdlib-js/stdlib/commit/e910b3362443e36936a6f3705daf63e032d891dc) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`7ddbcbe`](https://github.com/stdlib-js/stdlib/commit/7ddbcbe83f92390dc20a10164b3b775111aa7267) - **docs:** fix typos in `math/base/ops/subf` [(#5290)](https://github.com/stdlib-js/stdlib/pull/5290) _(by Gururaj Gurram)_
-   [`c813d0a`](https://github.com/stdlib-js/stdlib/commit/c813d0aa99426f802689af745dd16ccb3929a3d9) - **docs:** update namespace TypeScript declarations [(#5308)](https://github.com/stdlib-js/stdlib/pull/5308) _(by stdlib-bot)_
-   [`3037993`](https://github.com/stdlib-js/stdlib/commit/3037993cc6603fedea48ca6612edc7462dce2a91) - **docs:** update namespace table of contents [(#5310)](https://github.com/stdlib-js/stdlib/pull/5310) _(by stdlib-bot)_
-   [`e7ab8a5`](https://github.com/stdlib-js/stdlib/commit/e7ab8a5aaeee5e088db91cbd7b1184a8b7ccde38) - **remove:** remove `math/base/ops/mul` _(by Gururaj Gurram)_
-   [`eecf3f4`](https://github.com/stdlib-js/stdlib/commit/eecf3f43ccd1e5702f95ed616bef8001ac6eb66c) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`ae8e7b9`](https://github.com/stdlib-js/stdlib/commit/ae8e7b9f2140d1a5b98e8bc03fb909df3171d410) - **feat:** update namespace TypeScript declarations [(#5254)](https://github.com/stdlib-js/stdlib/pull/5254) _(by stdlib-bot)_
-   [`ec08225`](https://github.com/stdlib-js/stdlib/commit/ec0822505673b3032e591de02a9e0dc67b598f81) - **remove:** remove `math/base/ops/addf` _(by Gururaj Gurram)_
-   [`2752fe3`](https://github.com/stdlib-js/stdlib/commit/2752fe3ed80c146e8a122c1e7ed442099ba367bc) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`86d5fea`](https://github.com/stdlib-js/stdlib/commit/86d5fea1b11336c6dea72e2247dd71a0304177e0) - **docs:** update namespace table of contents [(#5245)](https://github.com/stdlib-js/stdlib/pull/5245) _(by stdlib-bot)_
-   [`76cf95f`](https://github.com/stdlib-js/stdlib/commit/76cf95f336fc29cb4e83184fe6f215c23a723e95) - **feat:** update namespace TypeScript declarations [(#5243)](https://github.com/stdlib-js/stdlib/pull/5243) _(by stdlib-bot)_
-   [`cfa99a4`](https://github.com/stdlib-js/stdlib/commit/cfa99a44297521f94fb485a4f3009b6070340728) - **remove:** remove `math/base/ops/add5` _(by Gururaj Gurram)_
-   [`3ae3c5f`](https://github.com/stdlib-js/stdlib/commit/3ae3c5f79f267ecc17041b6b10d8c543f5f0686c) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`d66db3f`](https://github.com/stdlib-js/stdlib/commit/d66db3fd4b220adcc318a5993a97fe79e5b7445a) - **feat:** update namespace TypeScript declarations [(#5130)](https://github.com/stdlib-js/stdlib/pull/5130) _(by stdlib-bot)_
-   [`9ae04b5`](https://github.com/stdlib-js/stdlib/commit/9ae04b5c7607e49078a9ad3cdbb27e3addfaebd2) - **docs:** update namespace table of contents [(#5132)](https://github.com/stdlib-js/stdlib/pull/5132) _(by stdlib-bot, Philipp Burckhardt)_
-   [`e621529`](https://github.com/stdlib-js/stdlib/commit/e6215295bef94ff94f5b6d7a893c99283725d7c9) - **remove:** remove `math/base/ops/add4` _(by Gururaj Gurram)_
-   [`60334d6`](https://github.com/stdlib-js/stdlib/commit/60334d6d17a9f29c0045c139b8ede24d1182b870) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`69d0ade`](https://github.com/stdlib-js/stdlib/commit/69d0adefc17b11a444273ec9afac7246a8f5b3cb) - **remove:** remove `math/base/ops/add3` _(by Gururaj Gurram)_
-   [`8da0e78`](https://github.com/stdlib-js/stdlib/commit/8da0e787b914f30db9bafcd1c0804ae2f1a99e36) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`b253140`](https://github.com/stdlib-js/stdlib/commit/b253140185322817c25fd8e3bb238703d013727a) - **remove:** remove `math/base/ops/add` _(by Gururaj Gurram)_
-   [`836170d`](https://github.com/stdlib-js/stdlib/commit/836170decec14309639deb41ae3a3c22256d68af) - **refactor:** update paths _(by Gururaj Gurram)_
-   [`b562cf6`](https://github.com/stdlib-js/stdlib/commit/b562cf6a430608fc5c7bc3f1cf1eead7c982b659) - **test:** update function signatures [(#5110)](https://github.com/stdlib-js/stdlib/pull/5110) _(by Aayush Khanna)_
-   [`f6682eb`](https://github.com/stdlib-js/stdlib/commit/f6682ebd521481cf1c77c3cee2b279b8c19dc264) - **chore:** fix C linting errors in `math/base/ops/imuldw` [(#5107)](https://github.com/stdlib-js/stdlib/pull/5107) _(by Aayush Khanna)_
-   [`8409bd1`](https://github.com/stdlib-js/stdlib/commit/8409bd17639c21c94be23d8498789fca5352892b) - **feat:** update namespace TypeScript declarations [(#4856)](https://github.com/stdlib-js/stdlib/pull/4856) _(by stdlib-bot)_
-   [`22a3dcf`](https://github.com/stdlib-js/stdlib/commit/22a3dcfe916b7f5c979d6ee93045d37add5d685d) - **docs:** update namespace TypeScript declaration comments [(#4794)](https://github.com/stdlib-js/stdlib/pull/4794) _(by stdlib-bot, Philipp Burckhardt)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`90e96d0`](https://github.com/stdlib-js/stdlib/commit/90e96d01b7a32ec3b71caf3e5f57528338199a8f) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`b0e68c5`](https://github.com/stdlib-js/stdlib/commit/b0e68c5bc8ee985794eb2ea1791c9337cd15fbd0) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`dbbb0ba`](https://github.com/stdlib-js/stdlib/commit/dbbb0bab688e9a2de22d967a57eeb31738b93340) - **revert:** chore: update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`184d71f`](https://github.com/stdlib-js/stdlib/commit/184d71f0d04083ef6e64b641eccfc322273f544c) - **chore:** update to modern benchmark Makefile _(by Philipp Burckhardt)_
-   [`b89c97c`](https://github.com/stdlib-js/stdlib/commit/b89c97ce0b812ff0b2aab16b4d77969d44fe3e8c) - **docs:** resolve lint errors in TS declaration files _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-28)

<section class="packages">

### Packages

<section class="package" id="math-base-ops-v0.3.0">

#### [@stdlib/math/base/ops](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops)

<details>

<section class="features">

##### Features

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cadd-v0.3.0">

#### [@stdlib/math/base/ops/cadd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cadd)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`60c4a36`](https://github.com/stdlib-js/stdlib/commit/60c4a36e189ddaf4aba2d9f4096e7a066d5dcbea): remove `math/base/ops/cadd`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/add` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-caddf-v0.3.0">

#### [@stdlib/math/base/ops/caddf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/caddf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`3e09994`](https://github.com/stdlib-js/stdlib/commit/3e099945fc7bb4e638c7ed407b26cc51d849657b): remove `math/base/ops/caddf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/add` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cdiv-v0.3.0">

#### [@stdlib/math/base/ops/cdiv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cdiv)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`53cf211`](https://github.com/stdlib-js/stdlib/commit/53cf211f341dc87077710b30ac41a0938e83b773) - use correct assignment and adjust test tolerances
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cmul-v0.3.0">

#### [@stdlib/math/base/ops/cmul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cmul)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`b82c6f0`](https://github.com/stdlib-js/stdlib/commit/b82c6f020ef6fe6b045fc71ccf773bb18c451303): remove `math/base/ops/cmul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/mul` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cmulf-v0.3.0">

#### [@stdlib/math/base/ops/cmulf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cmulf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`4aa299e`](https://github.com/stdlib-js/stdlib/commit/4aa299e35880a36de22c0c483bb128057b6e3784): remove `math/base/ops/cmulf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/mul` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cneg-v0.3.0">

#### [@stdlib/math/base/ops/cneg](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cneg)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cnegf-v0.3.0">

#### [@stdlib/math/base/ops/cnegf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cnegf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-csub-v0.3.0">

#### [@stdlib/math/base/ops/csub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/csub)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-csubf-v0.3.0">

#### [@stdlib/math/base/ops/csubf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/csubf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb): update namespace declarations

    -   To migrate, users should see the guidance found in the relevant commits for namespace refactoring. See issue #2260.

-   [`b82c6f0`](https://github.com/stdlib-js/stdlib/commit/b82c6f020ef6fe6b045fc71ccf773bb18c451303): remove `math/base/ops/cmul`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/mul` which provides the same API and
        implementation.

-   [`4aa299e`](https://github.com/stdlib-js/stdlib/commit/4aa299e35880a36de22c0c483bb128057b6e3784): remove `math/base/ops/cmulf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/mul` which provides the same API and
        implementation.

-   [`60c4a36`](https://github.com/stdlib-js/stdlib/commit/60c4a36e189ddaf4aba2d9f4096e7a066d5dcbea): remove `math/base/ops/cadd`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/add` which provides the same API and
        implementation.

-   [`3e09994`](https://github.com/stdlib-js/stdlib/commit/3e099945fc7bb4e638c7ed407b26cc51d849657b): remove `math/base/ops/caddf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/add` which provides the same API and
        implementation.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   EuniceSim142
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`9dc29b4`](https://github.com/stdlib-js/stdlib/commit/9dc29b4d2e6eb5ba0b2625c3bfe9f50034a3ed99) - **docs:** add sub-namespace sections and update namespace table of contents _(by Philipp Burckhardt)_
-   [`bd258a3`](https://github.com/stdlib-js/stdlib/commit/bd258a3c2803d841658c7465505966149845a6fb) - **feat:** update namespace TypeScript declarations [(#2628)](https://github.com/stdlib-js/stdlib/pull/2628) _(by stdlib-bot, Athan Reines)_
-   [`b82c6f0`](https://github.com/stdlib-js/stdlib/commit/b82c6f020ef6fe6b045fc71ccf773bb18c451303) - **remove:** remove `math/base/ops/cmul` _(by Athan Reines)_
-   [`e3a3679`](https://github.com/stdlib-js/stdlib/commit/e3a3679f1e733cf02ce47cdc4bd0137bd37bef41) - **refactor:** update paths _(by Athan Reines)_
-   [`4aa299e`](https://github.com/stdlib-js/stdlib/commit/4aa299e35880a36de22c0c483bb128057b6e3784) - **remove:** remove `math/base/ops/cmulf` _(by Athan Reines)_
-   [`ddd4403`](https://github.com/stdlib-js/stdlib/commit/ddd44032f9d8a6d318c80e3b239ff72280ffc599) - **refactor:** update paths _(by Athan Reines)_
-   [`60c4a36`](https://github.com/stdlib-js/stdlib/commit/60c4a36e189ddaf4aba2d9f4096e7a066d5dcbea) - **remove:** remove `math/base/ops/cadd` _(by Athan Reines)_
-   [`0406147`](https://github.com/stdlib-js/stdlib/commit/04061476d1036e1b8b786736b1ba1653eddff1ef) - **refactor:** update paths _(by Athan Reines)_
-   [`3e09994`](https://github.com/stdlib-js/stdlib/commit/3e099945fc7bb4e638c7ed407b26cc51d849657b) - **remove:** remove `math/base/ops/caddf` _(by Athan Reines)_
-   [`b9703b5`](https://github.com/stdlib-js/stdlib/commit/b9703b569dc2f0a67e604e388a0d188b08138b48) - **refactor:** update paths _(by Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`8908bda`](https://github.com/stdlib-js/stdlib/commit/8908bda11588f80edf375466ae9e84a3d70cf7d3) - **refactor:** update paths _(by Athan Reines)_
-   [`ad760a9`](https://github.com/stdlib-js/stdlib/commit/ad760a922086631226d8f759a0d467c707fbc0fb) - **refactor:** update paths _(by Athan Reines)_
-   [`53cf211`](https://github.com/stdlib-js/stdlib/commit/53cf211f341dc87077710b30ac41a0938e83b773) - **fix:** use correct assignment and adjust test tolerances _(by Athan Reines)_
-   [`44aa02f`](https://github.com/stdlib-js/stdlib/commit/44aa02fd4339364a4717ccfac6fc7c1b1ce616bc) - **refactor:** ensure variables are static _(by Athan Reines)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`41d41e9`](https://github.com/stdlib-js/stdlib/commit/41d41e959b4eaad3c631e6898e3144a4015a5458) - **test:** include trailing newlines in Julia-generated JSON fixtures _(by Philipp Burckhardt)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`ad45e04`](https://github.com/stdlib-js/stdlib/commit/ad45e04385185efe8d79961bbee1b8aa19230c14) - **docs:** improve `math/base/ops` README.md examples _(by EuniceSim142, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="packages">

### Packages

<section class="package" id="math-base-ops-v0.2.0">

#### [@stdlib/math/base/ops](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops)

<details>

<section class="features">

##### Features

-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170)
-   [`5d6b573`](https://github.com/stdlib-js/stdlib/commit/5d6b573040bf6551f3f460ba9570ea5d9567cb84) - add `add5` to namespace
-   [`1cba14e`](https://github.com/stdlib-js/stdlib/commit/1cba14e2370f9a50078713f9ac8ad1bf119bc01c) - add `add4` to namespace
-   [`5c48417`](https://github.com/stdlib-js/stdlib/commit/5c48417bea1eb163504f2b38d6e4ff48fd269382) - update namespace TypeScript declarations [(#1134)](https://github.com/stdlib-js/stdlib/pull/1134)
-   [`4dd6a68`](https://github.com/stdlib-js/stdlib/commit/4dd6a6836e33c7646ae7a6ce1d629b66b1b96e76) - add `add3` to namespace
-   [`252ce69`](https://github.com/stdlib-js/stdlib/commit/252ce69eebed888c9fd70e7d7cb774892d49542a) - add `divf` to namespace
-   [`4bcbffb`](https://github.com/stdlib-js/stdlib/commit/4bcbffbe6621aabfde24fa5382440c2b4a434165) - add `cnegf` to namespace
-   [`749152f`](https://github.com/stdlib-js/stdlib/commit/749152f1c8d8f39b4d2f8e2f45ac8ab74dbb5a3c) - add `div` to namespace

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add3-v0.2.0">

#### [@stdlib/math/base/ops/add3](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add3)

<details>

<section class="features">

##### Features

-   [`b1b4604`](https://github.com/stdlib-js/stdlib/commit/b1b46040bff6549e7d3652bacfb87641a169772c) - add `math/base/ops/add3`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add4-v0.2.0">

#### [@stdlib/math/base/ops/add4](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add4)

<details>

<section class="features">

##### Features

-   [`b88e712`](https://github.com/stdlib-js/stdlib/commit/b88e7127d936b4d55e02afa8a47bd7a1302c0369) - add `math/base/ops/add4`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add5-v0.2.0">

#### [@stdlib/math/base/ops/add5](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add5)

<details>

<section class="features">

##### Features

-   [`b11b3fb`](https://github.com/stdlib-js/stdlib/commit/b11b3fbf45728f7456757b5147e45f17f4bf49f1) - add `math/base/ops/add5`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-div-v0.2.0">

#### [@stdlib/math/base/ops/div](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/div)

<details>

<section class="features">

##### Features

-   [`b28d2a9`](https://github.com/stdlib-js/stdlib/commit/b28d2a9660fa7190070a17305e9ffdf694be74bf) - add `math/base/ops/div`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-divf-v0.2.0">

#### [@stdlib/math/base/ops/divf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/divf)

<details>

<section class="features">

##### Features

-   [`a967398`](https://github.com/stdlib-js/stdlib/commit/a967398cd29d0dd88ab2121e35bc4909e455b835) - add `math/base/ops/divf`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`ed8a998`](https://github.com/stdlib-js/stdlib/commit/ed8a998f95cebd180f2a974548379a6335988970) - **docs:** update related packages sections [(#1296)](https://github.com/stdlib-js/stdlib/pull/1296) _(by stdlib-bot)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`9b87012`](https://github.com/stdlib-js/stdlib/commit/9b87012e598bd0d2692af5d59332cb0e2231e9e8) - **docs:** update related packages sections [(#1243)](https://github.com/stdlib-js/stdlib/pull/1243) _(by stdlib-bot)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(#1179)](https://github.com/stdlib-js/stdlib/pull/1179) _(by stdlib-bot)_
-   [`4d6b104`](https://github.com/stdlib-js/stdlib/commit/4d6b104a0309b9a016700badd64b137ff384de52) - **docs:** update related packages sections [(#1172)](https://github.com/stdlib-js/stdlib/pull/1172) _(by stdlib-bot, Athan Reines)_
-   [`783804d`](https://github.com/stdlib-js/stdlib/commit/783804dbc9b3899c5227c5593e0ca1e8a6a9f195) - **feat:** update namespace TypeScript declarations [(#1170)](https://github.com/stdlib-js/stdlib/pull/1170) _(by stdlib-bot, Athan Reines)_
-   [`d575e8b`](https://github.com/stdlib-js/stdlib/commit/d575e8b063a37d90c3178fcff7b425314ae73c98) - **docs:** update related packages sections [(#1167)](https://github.com/stdlib-js/stdlib/pull/1167) _(by stdlib-bot)_
-   [`74bf172`](https://github.com/stdlib-js/stdlib/commit/74bf172cde4e19feaf4840c9e03b904bf9819934) - **docs:** update related packages sections [(#1165)](https://github.com/stdlib-js/stdlib/pull/1165) _(by stdlib-bot)_
-   [`57d81e4`](https://github.com/stdlib-js/stdlib/commit/57d81e4c196065f6680f08f22aeccfdc6e590b8f) - **docs:** update related packages sections [(#1151)](https://github.com/stdlib-js/stdlib/pull/1151) _(by stdlib-bot)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`1b31b43`](https://github.com/stdlib-js/stdlib/commit/1b31b437442c7d861aadf0e5ee00bb86cc191982) - **docs:** update namespace table of contents [(#1138)](https://github.com/stdlib-js/stdlib/pull/1138) _(by stdlib-bot, Athan Reines)_
-   [`5d6b573`](https://github.com/stdlib-js/stdlib/commit/5d6b573040bf6551f3f460ba9570ea5d9567cb84) - **feat:** add `add5` to namespace _(by Athan Reines)_
-   [`b11b3fb`](https://github.com/stdlib-js/stdlib/commit/b11b3fbf45728f7456757b5147e45f17f4bf49f1) - **feat:** add `math/base/ops/add5` _(by Athan Reines)_
-   [`1cba14e`](https://github.com/stdlib-js/stdlib/commit/1cba14e2370f9a50078713f9ac8ad1bf119bc01c) - **feat:** add `add4` to namespace _(by Athan Reines)_
-   [`b88e712`](https://github.com/stdlib-js/stdlib/commit/b88e7127d936b4d55e02afa8a47bd7a1302c0369) - **feat:** add `math/base/ops/add4` _(by Athan Reines)_
-   [`9dd4da3`](https://github.com/stdlib-js/stdlib/commit/9dd4da3d3eff22c863ed009cc6a909ad524e2b83) - **docs:** update namespace table of contents [(#1136)](https://github.com/stdlib-js/stdlib/pull/1136) _(by stdlib-bot, Philipp Burckhardt)_
-   [`5c48417`](https://github.com/stdlib-js/stdlib/commit/5c48417bea1eb163504f2b38d6e4ff48fd269382) - **feat:** update namespace TypeScript declarations [(#1134)](https://github.com/stdlib-js/stdlib/pull/1134) _(by stdlib-bot, Philipp Burckhardt)_
-   [`4dd6a68`](https://github.com/stdlib-js/stdlib/commit/4dd6a6836e33c7646ae7a6ce1d629b66b1b96e76) - **feat:** add `add3` to namespace _(by Athan Reines)_
-   [`b1b4604`](https://github.com/stdlib-js/stdlib/commit/b1b46040bff6549e7d3652bacfb87641a169772c) - **feat:** add `math/base/ops/add3` _(by Athan Reines)_
-   [`252ce69`](https://github.com/stdlib-js/stdlib/commit/252ce69eebed888c9fd70e7d7cb774892d49542a) - **feat:** add `divf` to namespace _(by Athan Reines)_
-   [`a967398`](https://github.com/stdlib-js/stdlib/commit/a967398cd29d0dd88ab2121e35bc4909e455b835) - **feat:** add `math/base/ops/divf` _(by Athan Reines)_
-   [`942be90`](https://github.com/stdlib-js/stdlib/commit/942be9085906fa7e87fa41fc5486a7a0d4d42953) - **docs:** remove duplicate minus sign _(by Athan Reines)_
-   [`4bcbffb`](https://github.com/stdlib-js/stdlib/commit/4bcbffbe6621aabfde24fa5382440c2b4a434165) - **feat:** add `cnegf` to namespace _(by Athan Reines)_
-   [`749152f`](https://github.com/stdlib-js/stdlib/commit/749152f1c8d8f39b4d2f8e2f45ac8ab74dbb5a3c) - **feat:** add `div` to namespace _(by Athan Reines)_
-   [`b28d2a9`](https://github.com/stdlib-js/stdlib/commit/b28d2a9660fa7190070a17305e9ffdf694be74bf) - **feat:** add `math/base/ops/div` _(by Athan Reines)_
-   [`37c6c77`](https://github.com/stdlib-js/stdlib/commit/37c6c77ce78430486c95f3034dd1c836fac8b65d) - **style:** resolve C lint errors _(by Athan Reines)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`7eb7d96`](https://github.com/stdlib-js/stdlib/commit/7eb7d96f3860d0b1229b905caceb1b6641ee43c5) - **docs:** update links _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="packages">

### Packages

<section class="package" id="math-base-ops-v0.1.0">

#### [@stdlib/math/base/ops](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-add-v0.1.0">

#### [@stdlib/math/base/ops/add](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/add)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-addf-v0.1.0">

#### [@stdlib/math/base/ops/addf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/addf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cadd-v0.1.0">

#### [@stdlib/math/base/ops/cadd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cadd)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-caddf-v0.1.0">

#### [@stdlib/math/base/ops/caddf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/caddf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cdiv-v0.1.0">

#### [@stdlib/math/base/ops/cdiv](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cdiv)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`7fc8042`](https://github.com/stdlib-js/stdlib/commit/7fc804208ff8addbe09f62b0a81a53ba7498c5b3) - add C implementation for `math/base/ops/cdiv` [(#1001)](https://github.com/stdlib-js/stdlib/pull/1001)

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cmul-v0.1.0">

#### [@stdlib/math/base/ops/cmul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cmul)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cmulf-v0.1.0">

#### [@stdlib/math/base/ops/cmulf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cmulf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cneg-v0.1.0">

#### [@stdlib/math/base/ops/cneg](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cneg)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-cnegf-v0.1.0">

#### [@stdlib/math/base/ops/cnegf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/cnegf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-csub-v0.1.0">

#### [@stdlib/math/base/ops/csub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/csub)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-csubf-v0.1.0">

#### [@stdlib/math/base/ops/csubf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/csubf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-imul-v0.1.0">

#### [@stdlib/math/base/ops/imul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/imul)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-imuldw-v0.1.0">

#### [@stdlib/math/base/ops/imuldw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/imuldw)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`1f04214`](https://github.com/stdlib-js/stdlib/commit/1f042141f219a7a3f010e488264d6b0a94321c15) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-mul-v0.1.0">

#### [@stdlib/math/base/ops/mul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/mul)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-mulf-v0.1.0">

#### [@stdlib/math/base/ops/mulf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/mulf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-sub-v0.1.0">

#### [@stdlib/math/base/ops/sub](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/sub)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-subf-v0.1.0">

#### [@stdlib/math/base/ops/subf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/subf)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-umul-v0.1.0">

#### [@stdlib/math/base/ops/umul](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/umul)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="math-base-ops-umuldw-v0.1.0">

#### [@stdlib/math/base/ops/umuldw](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/ops/umuldw)

<details>

<section class="features">

##### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`1f04214`](https://github.com/stdlib-js/stdlib/commit/1f042141f219a7a3f010e488264d6b0a94321c15) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Stephannie Jiménez Gacha

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`1f04214`](https://github.com/stdlib-js/stdlib/commit/1f042141f219a7a3f010e488264d6b0a94321c15) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`38a6047`](https://github.com/stdlib-js/stdlib/commit/38a604780563d434371ba646dbbc463530be790d) - **docs:** update JSDoc comment formatting _(by Philipp Burckhardt)_
-   [`b734544`](https://github.com/stdlib-js/stdlib/commit/b734544a52783cb7f5cf1115f4355cabe46d0abe) - **refactor:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`a1d78a7`](https://github.com/stdlib-js/stdlib/commit/a1d78a7791dbdee5f27e8eee15e740510e3a2013) - **style:** fix indentation in `manifest.json` files [(#1063)](https://github.com/stdlib-js/stdlib/pull/1063) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`705da11`](https://github.com/stdlib-js/stdlib/commit/705da11230b151a494464b29a9940a43e84aec1b) - **chore:** update package meta data [(#1053)](https://github.com/stdlib-js/stdlib/pull/1053) _(by stdlib-bot, Athan Reines)_
-   [`7fc8042`](https://github.com/stdlib-js/stdlib/commit/7fc804208ff8addbe09f62b0a81a53ba7498c5b3) - **feat:** add C implementation for `math/base/ops/cdiv` [(#1001)](https://github.com/stdlib-js/stdlib/pull/1001) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`c24499b`](https://github.com/stdlib-js/stdlib/commit/c24499b3805a869bcb6de3e7643a010f53c20f39) - **bench:** update benchmark name to match other pkg benchmarks _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`20f8809`](https://github.com/stdlib-js/stdlib/commit/20f8809022581a74a0d7d9643840c4ae7e7de7b5) - **chore:** update package meta data [(#911)](https://github.com/stdlib-js/stdlib/pull/911) _(by stdlib-bot, Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

