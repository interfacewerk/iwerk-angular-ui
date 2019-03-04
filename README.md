[![Build Status](https://travis-ci.org/interfacewerk/iwerk-angular-ui.svg?branch=master)](https://travis-ci.org/interfacewerk/iwerk-angular-ui)
[![Coverage Status](https://coveralls.io/repos/github/interfacewerk/iwerk-angular-ui/badge.svg?branch=master)](https://coveralls.io/github/interfacewerk/iwerk-angular-ui?branch=ci%2Fcoverage)
[![npm monthly downloads](https://img.shields.io/npm/dm/iwerk-angular-ui.svg)](https://www.npmjs.com/package/iwerk-angular-ui)
[![current version](https://img.shields.io/npm/v/iwerk-angular-ui.svg)](https://www.npmjs.com/package/iwerk-angular-ui)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Iwerk Angular Ui

This project is a collection of useful Angular 2 directives and components. The implemented UI concepts (stateful buttons, popovers, tooltips) are very opinionated and are the basic blocks to provide the best UX as possible to users. For instance, the popovers and tooltips are always put in the body and positioned relatively to the target element according to a very simple heuristics.

We decided to take this implementation inside a bigger library to make it easier to maintain and it should not have any influence on your bundle size as you can import the modules you want!

## Install

```
npm install iwerk-angular-ui --save
```

## Usage

[Check the demo page](https://interfacewerk.github.io/iwerk-angular-ui)

## Contributing

### Start the "app"

```
npm start
```

### Run E2E Tests

```
npm run e2e
```

### Run Unit Tests

```
npm run test
```

### Documentation

Documentation is generated automatically by using inline documentation and an Angular CLI side project called `demo`. To serve the documentation application, use:

#### Serve

1. Start the watcher `npm run watch:docs`
2. Start the application `npm run start:docs`

### Build

To build, run `npm run build:docs`.
