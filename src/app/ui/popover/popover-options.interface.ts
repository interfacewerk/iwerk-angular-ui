import { PopoverPosition } from './popover-position.interface';

export interface PopoverOptions {
  popoverClass?: string;
  arrowClass?: string;
  horizontalAlignment?: 'leftWithLeft' | undefined;
  scrollMaskClass?: string;
  escToClose?: boolean;
  clickOutsideToClose?: boolean;
  shouldClose?: () => void;
  popoverPosition?: (p: PopoverPosition) => void;
}
