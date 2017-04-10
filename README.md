[![CircleCI](https://circleci.com/gh/interfacewerk/iwerk-angular-ui/tree/master.svg?style=svg)](https://circleci.com/gh/interfacewerk/iwerk-angular-ui/tree/master)

# Iwerk Angular Ui

This project is a collection of useful Angular 2 directives and components. The implemented UI concepts (stateful buttons, popovers, tooltips) are very opinionated and are the basic blocks to provide the best UX as possible to users. For instance, the popovers and tooltips are always put in the body and positioned relatively to the target element according to a very simple heuristics.

The `stateful-button` is the same as described in [https://github.com/interfacewerk/ng2-stateful-button](https://github.com/interfacewerk/ng2-stateful-button). We decided to take this implementation inside a bigger library to make it easier to maintain and it should not have any influence on your bundle size as you can import the modules you want!

## Install

```
npm install iwerk-angular-ui
```

## Use

```
// Pick the modules you want!
import { PopoverModule, TooltipModule, StatefulButtonModule } from 'iwerk-angular-ui';

@NgModule({
  …
  imports: [
    …
    PopoverModule,
    TooltipModule,
    StatefulButtonModule
    …
  ],
  …
})
```

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
