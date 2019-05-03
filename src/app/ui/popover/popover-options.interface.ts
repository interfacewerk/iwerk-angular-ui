import { PopoverPosition } from './popover-position.interface';

export interface PopoverOptions {
  popoverClass?: string;
  arrowClass?: string;
  horizontal?: boolean;
  horizontalAlignment?: 'leftWithLeft' | 'rightWithRight' | undefined;
  scrollMaskClass?: string;
  escToClose?: boolean;
  clickOutsideToClose?: boolean;
  shouldClose?: () => void;
  popoverPosition?: (p: PopoverPosition) => void;
}
