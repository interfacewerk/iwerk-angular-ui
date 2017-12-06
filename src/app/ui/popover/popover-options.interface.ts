import { PopoverPosition } from './popover-position.interface';

export interface PopoverOptions {
  popoverClass?: string;
  arrowClass?: string;
  horizontalAlignment?: 'leftWithLeft' | undefined;
  verticalAlignment?: 'topWithTop' | undefined;
  scrollMaskClass?: string;
  escToClose?: boolean;
  clickOutsideToClose?: boolean;
  shouldClose?: () => void;
  popoverPosition?: (p: PopoverPosition) => void;
  direction?: 'vertical' | 'horizontal' | undefined;
}
