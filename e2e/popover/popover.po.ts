import { browser, element, by } from 'protractor';
import { protractor } from 'protractor';

export class PopoverPage {
  navigateTo() {
    return browser.get('/popover');
  }

  getParagraphText() {
    return element(by.css('app-popover-demo h1')).getText();
  }

  openHorizontalPopover() {
    return element(by.id('horizontal-e2e')).click();
  }

  openFirstPopover() {
    return element(by.css('app-popover-demo button#pop1')).click();
  }

  closeFirstPopover() {
    return element(by.css('iw-popover-scroll-mask')).click();
  }

  openSecondPopover() {
    return element(by.css('app-popover-demo button#pop2')).click();
  }

  tryToCloseSecondPopoverWithClick() {
    return element(by.css('iw-popover-scroll-mask')).click();
  }

  tryToCloseSecondPopoverWithEsc() {
    return element(by.css('body')).sendKeys(protractor.Key.ESCAPE);
  }
}
