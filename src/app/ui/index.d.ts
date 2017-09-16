declare namespace IWUi {
  type PopoverHorizontalAlignment = 'leftWithLeft' | undefined;

  interface IPopover {
    close: () => void;
  }

  interface PopoverPosition {
    vertical: 'top' | 'bottom';
  }
}
