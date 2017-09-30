import { InjectionToken } from '@angular/core';
import { TooltipConfig } from './tooltip-config.interface';

export const IW_TOOLTIP_CONFIG = new InjectionToken<TooltipConfig>('iw-tooltip.config');
