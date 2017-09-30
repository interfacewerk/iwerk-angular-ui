import { InjectionToken } from '@angular/core';
import { DialogConfig } from './dialog-config.interface';

export const IW_DIALOG_CONFIG = new InjectionToken<DialogConfig>('iw-dialog.config');
