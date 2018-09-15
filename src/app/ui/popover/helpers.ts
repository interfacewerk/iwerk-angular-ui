import { PopoverConfig } from './popover-config.interface';
import { PopoverOptions } from './popover-options.interface';

export function smartPosition(elements: {
  container: HTMLElement
  arrowElement: HTMLElement
  target: HTMLElement
}, options: PopoverOptions) {
  if (options.horizontal) {
    horizontalSmartPosition(elements, options);
  } else {
    verticalSmartPosition(elements, options);
  }

  elements.container.style.visibility = 'visible';
  elements.arrowElement.style.visibility = 'visible';
}

function verticalSmartPosition(elements: {
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
}

function horizontalSmartPosition(elements: {
  container: HTMLElement
  arrowElement: HTMLElement
  target: HTMLElement
}, options: PopoverOptions) {
  const target: HTMLElement = elements.target;
  const container: HTMLElement = elements.container;
  const arrowElement: HTMLElement = elements.arrowElement;

  const { top, left, bottom, right } = target.getBoundingClientRect();
  const centerXBody = document.body.getBoundingClientRect().width / 2;
  if (left > centerXBody) {
    container.style.left = (left - container.offsetWidth) + 'px';
    arrowElement.style.left = left + 'px';
    arrowElement.classList.add('from-the-left');
    options.popoverPosition({ horizontal: 'left' });
  } else {
    container.style.left = right + 'px';
    arrowElement.style.left = container.style.left;
    arrowElement.classList.add('from-the-right');
    options.popoverPosition({ horizontal: 'right' });
  }

  const centerY = 0.5 * (top + bottom);
  arrowElement.style.top = `${centerY}px`;
  const maxTop = document.body.getBoundingClientRect().height - container.offsetHeight;
  container.style.top = Math.max(0, Math.min(maxTop, centerY - 0.5 * container.offsetHeight)) + 'px';
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
    horizontalAlignment: config.horizontalAlignment,
    horizontal: config.horizontal === undefined ? false : config.horizontal
  };
  const result = {
    escToClose: options.escToClose === undefined ? defaultOptions.escToClose : options.escToClose,
    clickOutsideToClose: options.clickOutsideToClose === undefined ? defaultOptions.clickOutsideToClose : options.clickOutsideToClose,
    arrowClass: (options.arrowClass || '') + ' ' + defaultOptions.arrowClass,
    popoverClass: (options.popoverClass || '') + ' ' + defaultOptions.popoverClass,
    scrollMaskClass: (options.scrollMaskClass || '') + ' ' + defaultOptions.scrollMaskClass,
    horizontalAlignment: options.horizontalAlignment || defaultOptions.horizontalAlignment,
    shouldClose: options.shouldClose || (() => { }),
    popoverPosition: options.popoverPosition || (() => { }),
    horizontal: options.hasOwnProperty('horizontal') ? options.horizontal : defaultOptions.horizontal
  };
  return result;
}
