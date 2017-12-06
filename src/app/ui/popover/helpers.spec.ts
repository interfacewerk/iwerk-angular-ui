import { addClasses, smartPosition } from './helpers';
import { PopoverOptions } from './popover-options.interface';

describe('smartPosition', () => {
  let target: HTMLElement;
  let container: HTMLElement;
  let arrowElement: HTMLElement;

  beforeEach(() => {
    document.body.style.width = '900px';
    document.body.style.height = '900px';
    target = document.createElement('button');
    container = document.createElement('div');
    arrowElement = document.createElement('div');
  });

  afterEach(() => {
    document.body.removeChild(target);
    document.body.removeChild(container);
    document.body.removeChild(arrowElement);
  });

  it('aligns the popover with the bottom left corner of the target', () => {
    addInBody(target, { top: 10, left: 400, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 200 });
    addInBody(arrowElement, { top: 0, left: 0, width: 0, height: 0 });
    smartPosition({
      arrowElement,
      container,
      target,
    }, <PopoverOptions>{
      horizontalAlignment: 'leftWithLeft',
      popoverPosition: () => { }
    });
    expect(arrowElement.style.left).toBe('425px');
    expect(container.style.top).toBe('40px');
    expect(container.style.left).toBe('400px');
  });

  it('aligns the popover with the top left corner of the target', () => {
    addInBody(target, { top: 800, left: 400, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 200 });
    addInBody(arrowElement, { top: 0, left: 0, width: 0, height: 0 });
    smartPosition({
      arrowElement,
      container,
      target,
    }, <PopoverOptions>{
      horizontalAlignment: 'leftWithLeft',
      popoverPosition: () => { }
    });
    expect(arrowElement.style.left).toBe('425px');
    expect(container.style.top).toBe('600px');
    expect(container.style.left).toBe('400px');
  });

  it('aligns the popover with the bottom center of the target', () => {
    addInBody(target, { top: 10, left: 400, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 200 });
    addInBody(arrowElement, { top: 0, left: 0, width: 0, height: 0 });
    smartPosition({
      arrowElement,
      container,
      target,
    }, <PopoverOptions>{
      popoverPosition: () => { }
    });
    expect(arrowElement.style.left).toBe('425px');
    expect(container.style.top).toBe('40px');
    expect(container.style.left).toBe('325px');
  });

  it('aligns the popover on the right', () => {
    addInBody(target, { top: 10, left: 400, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 200 });
    addInBody(arrowElement, { top: 0, left: 0, width: 0, height: 0 });
    smartPosition({
      arrowElement,
      container,
      target,
    }, <PopoverOptions>{
      popoverPosition: () => { },
      direction: 'horizontal'
    });
    expect(arrowElement.style.top).toBe('25px');
    expect(arrowElement.style.left).toBe('450px');
    expect(container.style.top).toBe('0px');
    expect(container.style.left).toBe('450px');
  });

  it('aligns the popover on the left', () => {
    addInBody(target, { top: 10, left: 500, width: 50, height: 30 });
    addInBody(container, { top: 0, left: 0, width: 200, height: 200 });
    addInBody(arrowElement, { top: 0, left: 0, width: 0, height: 0 });
    smartPosition({
      arrowElement,
      container,
      target,
    }, <PopoverOptions>{
      popoverPosition: () => { },
      direction: 'horizontal'
    });
    expect(arrowElement.style.top).toBe('25px');
    expect(arrowElement.style.left).toBe('500px');
    expect(container.style.top).toBe('0px');
    expect(container.style.left).toBe('300px');
  });

});

describe('addClasses', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  it('adds classes to the element', () => {
    addClasses(element, 'class1 class2 class3');
    expect(element.classList.toString()).toBe('class1 class2 class3');
  });

  it('does not throw an error if the class is undefined or empty', () => {
    expect(() => {
      addClasses(element, undefined);
      addClasses(element, '');
    }).not.toThrow();
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
