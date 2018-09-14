import { smartPosition } from './helpers';
import { Renderer } from '@angular/core';

describe('tooltip/helpers', () => {
  let target: HTMLElement;
  let container: HTMLElement;
  const renderer = <Renderer>{
    invokeElementMethod: (el: any, methodName: string, args?: any[]) => {
      document.body.appendChild(args[0]);
    }
  };
  beforeEach(() => {
    document.body.style.width = '900px';
    document.body.style.height = '900px';
    target = document.createElement('button');
    container = document.createElement('div');
  });

  afterEach(() => {
    document.body.removeChild(target);
    document.body.removeChild(container);
  });

  it('smartly puts the tooltip above the target if it is in the lowest part of the body', () => {
    addInBody(target, { top: 800, left: 400, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 20 });
    smartPosition({ target, container, renderer });
    expect(container.style.top).toBe('779px');
    expect(container.style.left).toBe('325px');
  });

  it('smartly puts the tooltip at the right of the target', () => {
    addInBody(target, { top: 800, left: 100, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 20 });
    smartPosition({ target, container, renderer }, 'horizontal');
    expect(container.style.top).toBe('805px');
    expect(container.style.left).toBe('151px');
  });

  it('smartly puts the tooltip at the left of the target', () => {
    addInBody(target, { top: 800, left: 800, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 20 });
    smartPosition({ target, container, renderer }, 'horizontal');
    expect(container.style.top).toBe('805px');
    expect(container.style.left).toBe('599px');
  });
});

function addInBody(element: HTMLElement, space: { top: number, left: number, width: number, height: number }) {
  document.body.appendChild(element);
  element.style.display = 'block';
  element.style.border = 'none';
  element.style.position = 'absolute';
  element.style.top = space.top + 'px';
  element.style.left = space.left + 'px';
  element.style.width = space.width + 'px';
  element.style.height = space.height + 'px';
}
