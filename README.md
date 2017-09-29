[![CircleCI](https://circleci.com/gh/interfacewerk/iwerk-angular-ui/tree/master.svg?style=svg)](https://circleci.com/gh/interfacewerk/iwerk-angular-ui/tree/master)

# Iwerk Angular Ui

This project is a collection of useful Angular 2 directives and components. The implemented UI concepts (stateful buttons, popovers, tooltips) are very opinionated and are the basic blocks to provide the best UX as possible to users. For instance, the popovers and tooltips are always put in the body and positioned relatively to the target element according to a very simple heuristics.

We decided to take this implementation inside a bigger library to make it easier to maintain and it should not have any influence on your bundle size as you can import the modules you want!

## Install

```
npm install iwerk-angular-ui --save
```

## Use

```
// Pick the modules you want!
import { DialogModule, PopoverModule, TooltipModule, StateButtonModule } from 'iwerk-angular-ui';

@NgModule({
  …
  imports: [
    …
    DialogModule,
    PopoverModule,
    TooltipModule,
    StateButtonModule
    …
  ],
  …
})
```

The current best way to find how the library works is to have a look at the `src/app/demo` folder.

## Dialog

The dialog can be used in two ways.

### Declarative way

```
<button (click)="myDialog.open()">Open a dialog with a template</button>
...
<ng-template iwDialog #myDialog="iw-dialog">
  Here is my dialog!
</ng-template>
```

### Programmatic way

Import the DialogService, inject it and embed any of your component inside.

```
import { DialogService, IDialog } from 'iwerk-angular-ui';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {
  private __dialogInstance: IDialog;

  constructor(private dialog: DialogService) { }

  ngOnDestroy() {
    if (this.__dialogInstance) {
      this.__dialogInstance.close();
    }
  }

  openDialog() {
    this.__dialogInstance = this.dialog.open(MyDialogComponent, undefined, {
      title: 'Programmatic Dialog'
    });
  }
}
```

## Popover

### Declarative way

```
<button (click)="isPopoverOpen = true" iwPopoverTarget>
  Click to open!

  <ng-template iwPopover 
    [isOpen]="isPopoverOpen"
    popoverClass="popover-demo"
    (shouldClose)="isPopoverOpen = false">
  ...
  </ng-template>
</button>
```

### Programmatic way

Import the PopoverService, inject it and embed any of your component inside.

```
this.popoverService.open(MyComponent, $event.target, {
  ...
}, instance => {
  ...
});
```

## Tooltip

```
<button>
  ...
  <ng-template iwTooltip>
    Hey, click me!
  </ng-template>
  ...
</button>
```

## State Button

There are four states `{'IDLE', 'DOING', 'SUCCESS', 'FAILURE'}`. You can refer to the type ButtonState to take advantage of type checking.

```
// in .ts
import { ButtonState } from 'iwerk-angular-ui';

class MyComponent {
  ...
  myButtonState: ButtonState = 'IDLE'
}

// in .html
<button [iwStateButton]="myButtonState" (click)="do()">
  <ng-template sbIdle>Save</ng-template>
  <ng-template sbDoing>Saving</ng-template>
  <ng-template sbSuccess>Saved</ng-template>
  <ng-template sbFailure>Save failed!</ng-template>
</button>
```
