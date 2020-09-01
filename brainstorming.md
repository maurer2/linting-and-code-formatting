# Brainstorming

## Tools

* JHLint
* JSCS
* JSHint
* ESLint
* Prettier
* TSLint
* Rome

## Topics

* Benefits
  * Detect errors and bad coding patterns early
  * Better code quality
  * Unified style
  * Better code reviews
  * Less bike shedding
  * Less typing
  * Additional safety net


* The Fallen
  * JSLint
    * First JS linter from 2002 by Douglas Crockford
    * Opinionated
    * Not extendable
    * Uses Regex

  * JSHint
    * Fork of JSLint in 2011
    * Configurable
    * Not extendable
    * Fairly slow to update

* Current state
  * ESLint still most popular
  * Prettier has become very popular especially in the React ecosystem

* ESLint
  * Doesn't support markdown or mdx

* Popular ESLint presets
  * eslint-config-airbnb
    * Most popular styleguide for JS with semicolons
  * eslint-config-standard
    * Most popular styleguide for JS without semicolons

* Popular ESLint plugins
  * eslint-plugin-vue
    * Additional rules for Vue 2 & 3
  * react
    * React and JSX specific rules
  * react-hooks
    * Helps with common issues related to hooks


* Prettier
  * No syntax check
  * AST to prettier AST
  * Popular because it is very opinionated
  * Few config options
  * Also supports JSON and md/mdx

* Linting TypeScript with ESLint vs TSLint
  * typescript-eslint
  * Babel7

* ESLint vs prettier
  * Difference linting and code formatting
  * Pros & cons
  * MD & MDX formatting

* Linting and formatting strategies
  * Manual via npm scripts
  * On save
  * On commit (pre-commit-hooks, pre-push-hook)
  * Server side (CI)

* Configuring ESLint and prettier
  * Rule types (warning, error, off)

* Overriding ESLint and prettier
  * Single line
  * Whole file
  * Disable rule entirely

