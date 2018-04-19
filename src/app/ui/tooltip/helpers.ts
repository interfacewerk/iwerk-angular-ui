import { Renderer } from '@angular/core';

export function smartPosition(options: {
  target: HTMLElement,
  container: HTMLElement,
  renderer: Renderer
}) {
  const targetRect = options.target.getBoundingClientRect();
  const bodyRect = document.body.getBoundingClientRect();
  options.container.style.visibility = 'hidden';

  // do that after, otherwise it can change the bounding client rect of the target
  options.renderer.invokeElementMethod(document.body, 'appendChild', [options.container]);

  const y = targetRect.top;
  const centerYBody = bodyRect.height / 2;
  if (y > centerYBody) {
    options.container.style.top = (targetRect.top - options.container.offsetHeight) + 'px';
  } else {
    options.container.style.top = targetRect.bottom + 'px';
  }

  const containerWidth = options.container.offsetWidth;
  const idealLeft = targetRect.left + targetRect.width / 2  - containerWidth / 2;
  const maxLeft = bodyRect.width - containerWidth;
  options.container.style.left = Math.min(maxLeft, idealLeft) + 'px';
  options.container.style.visibility = 'visible';
}
