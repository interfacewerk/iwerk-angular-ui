import { DialogFocusTrapDirective } from './dialog-focus-trap.directive';
import { DialogContainerComponent } from './dialog-container/dialog-container.component';

describe('DialogFocusTrapDirective', () => {
  it('should set the focus on the container when getting the focus itself', () => {
    const container = {
      focus: () => {}
    };
    spyOn(container, 'focus');
    const directive = new DialogFocusTrapDirective(container as DialogContainerComponent);
    directive.onFocus(undefined);
    expect(container.focus).toHaveBeenCalled();
  });
});
