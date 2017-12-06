import { PopoverOptions } from './popover-options.interface';

export function smartPosition(elements: {
  container: HTMLElement
  arrowElement: HTMLElement
  target: HTMLElement
}, options: PopoverOptions) {
  const container: HTMLElement = elements.container;
  const arrowElement: HTMLElement = elements.arrowElement;
  if (options.direction === 'vertical' || options.direction === undefined) {
    verticalSmartPosition(elements, options);
  } else {
    horizontalSmartPosition(elements, options);
  }

  container.style.visibility = 'visible';
  arrowElement.style.visibility = 'visible';
}

export function verticalSmartPosition(elements: {
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
    options.popoverPosition({ vertical: 'top', horizontal: undefined });
  } else {
    container.style.top = bottom + 'px';
    arrowElement.style.top = container.style.top;
    arrowElement.classList.add('from-the-bottom');
    options.popoverPosition({ vertical: 'bottom', horizontal: undefined });
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

export function horizontalSmartPosition(elements: {
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
    options.popoverPosition({ vertical: undefined, horizontal: 'left' });
  } else {
    container.style.left = right + 'px';
    arrowElement.style.left = container.style.left;
    arrowElement.classList.add('from-the-right');
    options.popoverPosition({ vertical: undefined, horizontal: 'right' });
  }

  const centerY = 0.5 * (top + bottom);
  arrowElement.style.top = `${centerY}px`;
  if (options.verticalAlignment === 'topWithTop') {
    const maxTop = document.body.getBoundingClientRect().height - container.offsetHeight;
    container.style.top = Math.max(0, Math.min(maxTop, top)) + 'px';
  } else {
    const maxTop = document.body.getBoundingClientRect().height - container.offsetHeight;
    container.style.top = Math.max(0, Math.min(maxTop, centerY - 0.5 * container.offsetHeight)) + 'px';
  }
}

export function addClasses(element: HTMLElement, str: string) {
  (str || '').split(' ').filter(s => !!s).forEach(c => element.classList.add(c));
}
