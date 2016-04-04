
# String Calculator Kata: implementation

A [Node.js](https://nodejs.org)-based implementation of `String Calculator Kata`.


## Requirements 

### Install Node.js

**Easiest way**: download the install package from the [website](https://nodejs.org/en/).

Or, you could install a Node.js version mananger like [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm), then install the last stable version (version `5.10` at the time of writing).


## Build & Run

### Install dependencies

Once you have Node.js up and running, you have to:

1. Clone this repository
2. Run `npm install` from the CLI

Note that the only dependency here is [AVA](https://github.com/sindresorhus/ava), a *very* nice test runner.

### Run tests

To run tests, simply run:

```bash
npm test
```

### Run examples

To run examples, simply run `node examples/step-{N}.js`.


### Debug

This project uses the [debug](https://github.com/visionmedia/debug) module. If you want to see the debug messages, simply run an example script in this way:

```bash
DEBUG=add* node examples/step-4
```
