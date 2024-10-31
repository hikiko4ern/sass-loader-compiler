Reproduction for the case where the `sass-loader` does not dispose extra `modern-compiler` sass compilers.

To reproduce:

1. `pnpm i`
2. `pnpm webpack`

The Node.js process will never exit, because the `dart sass.snapshot --embedded` processes run by the compiler will never exit.
