import { Renderer } from '@angular/core';

export function smartPosition(options: {
  target: HTMLElement,
  container: HTMLElement,
  renderer: Renderer,
},
  type: 'horizontal' | 'vertical' = 'vertical'
) {
  switch (type) {
    case 'horizontal':
    horizontalSmartPosition(options);
    break;
    case 'vertical':
    default:
    verticalSmartPosition(options);
    break;
  }
}

function verticalSmartPosition(options: {
  target: HTMLElement,
  container: HTMLElement,
  renderer: Renderer,
}) {
  const targetRect = options.target.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();
  options.container.style.visibility = 'hidden';

  // do that after, otherwise it can change the bounding client rect of the target
  options.renderer.invokeElementMethod(document.body, 'appendChild', [options.container]);

  const y = targetRect.top;
  const centerYBody = bodyRect.height / 2;
  if (y > centerYBody) {
    options.container.style.top = (targetRect.top - options.container.offsetHeight - 1) + 'px';
    options.container.classList.add('iw-tooltip-container--top');
  } else {
    options.container.style.top = (1 + targetRect.bottom) + 'px';
    options.container.classList.add('iw-tooltip-container--bottom');
  }

  const containerWidth = options.container.offsetWidth;
  const idealLeft = targetRect.left + targetRect.width / 2  - containerWidth / 2;
  const maxLeft = bodyRect.width - containerWidth;
  options.container.style.left = Math.min(maxLeft, idealLeft) + 'px';
  options.container.style.visibility = 'visible';
}

function horizontalSmartPosition(options: {
  target: HTMLElement,
  container: HTMLElement,
  renderer: Renderer,
}) {
  const targetRect = options.target.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();
  options.container.style.visibility = 'hidden';

  // do that after, otherwise it can change the bounding client rect of the target
  options.renderer.invokeElementMethod(document.body, 'appendChild', [options.container]);

  const x = targetRect.left;
  const centerXBody = bodyRect.width / 2;
  if (x > centerXBody) {
    options.container.style.left = (targetRect.left - options.container.offsetWidth - 1) + 'px';
    options.container.classList.add('iw-tooltip-container--left');
  } else {
    options.container.style.left = (1 + targetRect.right) + 'px';
    options.container.classList.add('iw-tooltip-container--right');
  }

  const containerHeight = options.container.offsetHeight;
  const idealTop = targetRect.top + targetRect.height / 2  - containerHeight / 2;
  const maxTop = bodyRect.height - containerHeight;
  options.container.style.top = Math.min(maxTop, idealTop) + 'px';
  options.container.style.visibility = 'visible';
}
