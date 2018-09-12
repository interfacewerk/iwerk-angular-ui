import { PopoverConfig } from './popover-config.interface';
import { PopoverOptions } from './popover-options.interface';

export function smartPosition(elements: {
  container: HTMLElement
  arrowElement: HTMLElement
  target: HTMLElement
}, options: PopoverOptions) {
  const target: HTMLElement = elements.target;
  const container: HTMLElement = elements.container;
  const arrowElement: HTMLElement = elements.arrowElement;

  const { top, left, bottom, right } = target.getBoundingClientRect();
  const centerYBody = document.body.getBoundingClientRect().height / 2;
  if (top > centerYBody) {
    container.style.top = (top - container.offsetHeight) + 'px';
    arrowElement.style.top = top + 'px';
    arrowElement.classList.add('from-the-top');
    options.popoverPosition({ vertical: 'top' });
  } else {
    container.style.top = bottom + 'px';
    arrowElement.style.top = container.style.top;
    arrowElement.classList.add('from-the-bottom');
    options.popoverPosition({ vertical: 'bottom' });
  }

  const centerX = 0.5 * (left + right);
  arrowElement.style.left = `${centerX}px`;
  if (options.horizontalAlignment === 'leftWithLeft') {
    const maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
    container.style.left = Math.max(0, Math.min(maxLeft, left)) + 'px';
  } else {
    const maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
    container.style.left = Math.max(0, Math.min(maxLeft, centerX - 0.5 * container.offsetWidth)) + 'px';
  }

  container.style.visibility = 'visible';
  arrowElement.style.visibility = 'visible';
}

export function addClasses(element: HTMLElement, str: string) {
  (str || '').split(' ').filter(s => !!s).forEach(c => element.classList.add(c));
}

export function combineOptionsAndDefaults(providedConfig: PopoverConfig, options: PopoverOptions): PopoverOptions {
  const config = providedConfig || {};
  const defaultOptions = {
    escToClose: config.escToClose === undefined ? true : config.escToClose,
    clickOutsideToClose: config.clickOutsideToClose === undefined ? true : config.clickOutsideToClose,
    arrowClass: config.arrowClass === undefined ? '' : config.arrowClass,
    popoverClass: config.popoverClass === undefined ? '' : config.popoverClass,
    scrollMaskClass: config.scrollMaskClass === undefined ? '' : config.scrollMaskClass,
    horizontalAlignment: config.horizontalAlignment
  };
  const result = {
    escToClose: options.escToClose === undefined ? defaultOptions.escToClose : options.escToClose,
    clickOutsideToClose: options.clickOutsideToClose === undefined ? defaultOptions.clickOutsideToClose : options.clickOutsideToClose,
    arrowClass: (options.arrowClass || '') + ' ' + defaultOptions.arrowClass,
    popoverClass: (options.popoverClass || '') + ' ' + defaultOptions.popoverClass,
    scrollMaskClass: (options.scrollMaskClass || '') + ' ' + defaultOptions.scrollMaskClass,
    horizontalAlignment: options.horizontalAlignment || defaultOptions.horizontalAlignment,
    shouldClose: options.shouldClose || (() => { }),
    popoverPosition: options.popoverPosition || (() => { })
  };
  return result;
}
