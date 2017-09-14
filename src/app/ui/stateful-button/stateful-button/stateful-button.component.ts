import {
  Component,
  Input,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'sb-label-idle',
  template: `<ng-content></ng-content>`
})
export class SBLabelIdleComponent { }

@Component({
  selector: 'sb-label-success',
  template: `<ng-content></ng-content>`
})
export class SBLabelSuccessComponent { }

@Component({
  selector: 'sb-label-doing',
  template: `<ng-content></ng-content>`
})
export class SBLabelDoingComponent { }

@Component({
  selector: 'sb-label-failure',
  template: `<ng-content></ng-content>`
})
export class SBLabelFailureComponent { }

@Component({
  selector: 'iw-stateful-button',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./stateful-button.component.scss']
})
export class StatefulButtonComponent {
  @HostBinding('attr.class') get elementClass(): string {
    const always = 'stateful-button ';
    switch (this.buttonState) {
      case 'DOING':
        return always + 'stateful-button--doing';
      case 'SUCCESS':
        return always + 'stateful-button--success';
      case 'FAILURE':
        return always + 'stateful-button--failure';
      default:
        return always + 'stateful-button--idle';
    }
  }

  @Input() buttonState: ButtonState = 'IDLE';

  showLoading: boolean;
  showSuccess: boolean;

  constructor() { }

}

export type ButtonState = 'IDLE' | 'DOING' | 'SUCCESS' | 'FAILURE';

export function delay(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(() => resolve(), ms));
}
