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

The current best way to find how the library works is to have a look at the `src/app/demo` folder.
