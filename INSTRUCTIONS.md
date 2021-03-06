
# String Calculator Kata: implementation

A [Node.js](https://nodejs.org)-based implementation of `String Calculator Kata`.

[![Build Status](https://travis-ci.org/mpangrazzi/string-calculator-kata.svg?branch=master)](https://travis-ci.org/mpangrazzi/string-calculator-kata)

For every step I have:

- Created a branch named `stepN`, where `N` is the number of the current step
- Written test(s), implementation and documentation (if needed).
- (if everything was ok) Merged the branch `stepN` to `master`


## Requirements 

### Install Node.js

**Easiest way**: download the install package from the [website](https://nodejs.org/en/).

Or, you could install a Node.js version mananger like [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm), then install the last stable version (version `5.10` at the time of writing).


## Build & Run

### Install dependencies

Once you have Node.js up and running, you have to:

1. Clone this repository
2. `cd string-calculator-kata` or repo's folder
3. Run `npm install` from the CLI

Note that the only "big" dependency here is [AVA](https://github.com/sindresorhus/ava), a *very* nice test runner.

### Run tests

To run tests, simply run:

```bash
npm test
```

### Run examples

To run examples, simply run: 

```bash
node examples/step-{N}.js
```


### Debug

This project uses the [debug](https://github.com/visionmedia/debug) module. If you want to see the debug messages, simply run an example script in this way:

```bash
DEBUG=sc* node examples/step-4
```
