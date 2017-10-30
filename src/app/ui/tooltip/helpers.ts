import { Renderer } from '@angular/core';

export function smartPosition(target: HTMLElement, container: HTMLElement, renderer: Renderer) {
  const targetRect = target.getBoundingClientRect();

  // do that after, otherwise it can change the bounding client rect of the target
  renderer.invokeElementMethod(document.body, 'appendChild', [container]);

  const y = targetRect.top;
  const centerYBody = document.body.getBoundingClientRect().height / 2;
  if (y > centerYBody) {
    container.style.top = (targetRect.top - container.offsetHeight) + 'px';
  } else {
    container.style.top = targetRect.bottom + 'px';
  }

  const maxLeft = document.body.getBoundingClientRect().width - container.offsetWidth;
  container.style.left = Math.min(maxLeft, targetRect.left) + 'px';
  container.style.visibility = 'visible';
}
