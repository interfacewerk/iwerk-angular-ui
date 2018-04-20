import { PopoverPage } from './popover.po';
import { element, by } from 'protractor';

describe('Popover page', function() {
  let page: PopoverPage;

  beforeEach(() => {
    page = new PopoverPage();
    page.navigateTo();
  });

  it('opens and closes the first popover', () => {
    page.openFirstPopover();
    expect(element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
    page.closeFirstPopover();
    expect(element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(false);
  });

  it('opens and tries to close the second popover', () => {
    page.openSecondPopover();
    expect(element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
    page.tryToCloseSecondPopoverWithClick();
    expect(element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
    page.tryToCloseSecondPopoverWithEsc();
    expect(element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
  });
});
