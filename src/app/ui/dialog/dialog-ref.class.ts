import {
  ApplicationRef,
  ComponentRef,
  ViewRef
} from '@angular/core';
import {
  DialogContainerComponent,
  DialogOptions
} from './dialog-container/dialog-container.component';

export class DialogRef {
  constructor(
    public container: ComponentRef<DialogContainerComponent>,
    private __viewRef: ViewRef,
    private __appRef: ApplicationRef,
    private __close: () => any,
    private __options: DialogOptions
  ) {
    this.container.instance.onClose.subscribe(() => {
      this.__close();
    });
    this.container.instance.dialogOptions = this.__options;
  }

  close() {
    this.__close();
  }

  attach() {
    document.body.appendChild(this.container.location.nativeElement);
    this.__appRef.attachView(this.container.hostView);
    if (this.__viewRef) {
      this.__appRef.attachView(this.__viewRef);
    }
  }

  detach() {
    if (this.__options.onClose) {
      this.__options.onClose(this);
    }
    document.body.removeChild(this.container.location.nativeElement);
    this.__appRef.detachView(this.container.hostView);
    if (this.__viewRef) {
      this.__appRef.detachView(this.__viewRef);
    }
    this.container.destroy();
    if (this.__viewRef) {
      this.__viewRef.destroy();
    }
  }
}
