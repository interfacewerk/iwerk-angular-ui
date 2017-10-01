import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  Type,
  Injector,
  ApplicationRef,
  TemplateRef,
  Inject,
  Optional
} from '@angular/core';
import {
  DialogContainerComponent,
  DialogOptions,
  IDialog
} from './dialog-container/dialog-container.component';
import { IW_DIALOG_CONFIG } from './dialog.config';
import { DialogConfig } from './dialog-config.interface';
import { DialogRef } from './dialog-ref.class';
export { IDialog };

@Injectable()
export class DialogService {
  containerFactory: ComponentFactory<DialogContainerComponent>;

  private __defaultOptions: DialogOptions = {
    containerClass: '',
    clickToClose: true,
    escToClose: true,
    onClose: () => {}
  };

  private __previousDialog: DialogRef;

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Optional() @Inject(IW_DIALOG_CONFIG) private dialogConfig: DialogConfig
  ) {
    this.containerFactory = this.componentFactoryResolver.resolveComponentFactory(DialogContainerComponent);
  }

  /**
   * Open a dialog that embeds an entry component.
   * @param componentType the component class to embed into the dialog
   * @param options the options to use with the dialog
   * @param data the data to pass to the embedded component
   */
  open<T>(componentType: Type<T>, options?: DialogOptions, data?: {[key: string]: any}): IDialog {
    const factory = this.componentFactoryResolver.resolveComponentFactory<{[key: string]: any}>(componentType);
    const component = factory.create(this.injector);
    const _data = data || {};
    for (const key in _data) {
      if (_data.hasOwnProperty(key)) {
        component.instance[key] = _data[key];
      }
    }
    const dialogRef = new DialogRef(
      this.containerFactory.create(this.injector, [[component.location.nativeElement]]),
      component.hostView,
      this.appRef,
      () => {
        this.__close(dialogRef);
      },
      this.__createOptions(options)
    );
    return this.__open(dialogRef);
  }

  /**
   * Open a dialog that loads a template.
   * @param templateRef the template to load inside the dialog
   * @param context the context to associate with the template
   * @param options the options to use with the dialog
   */
  openTemplateRef<T>(templateRef: TemplateRef<T>, context: T, options: DialogOptions): IDialog {
    const view = templateRef.createEmbeddedView(context);
    const dialogRef = new DialogRef(
      this.containerFactory.create(this.injector, [view.rootNodes]),
      view,
      this.appRef,
      () => {
        this.__close(dialogRef);
      },
      this.__createOptions(options)
    );
    return this.__open(dialogRef);
  }

  /**
   * Close the currently opened dialog, if any
   */
  close() {
    if (this.__previousDialog) {
      this.__close(this.__previousDialog);
    }
  }

  private __close(dialogRef: DialogRef) {
    if (this.__previousDialog === dialogRef) {
      this.__previousDialog.detach();
      this.__previousDialog = undefined;
    }
  }

  private __open(dialogRef: DialogRef): IDialog {
    this.close();
    this.__previousDialog = dialogRef;
    dialogRef.attach();
    return dialogRef;
  }

  private __createOptions(_options?: DialogOptions) {
    const dialogConfig = this.dialogConfig || {};
    const options = _options || {};
    return Object.assign({}, this.__defaultOptions, dialogConfig, options, {
      containerClass: (dialogConfig.containerClass || '') + ' ' + (options.containerClass || '')
    });
  }
}

