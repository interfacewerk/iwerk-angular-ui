import { browser, by, element } from 'protractor';
import { PopoverPage } from './popover.po';
const VisualTestingReport = require('visual-testing-report');

export function wait(t: number) {
  return new Promise(r => setTimeout(r, t));
}

describe('Popover page', function() {
  let page: PopoverPage;
  let report: any;

  beforeAll(async () => {
    report = new VisualTestingReport('visuals/popover');
  });

  beforeEach(async () => {
    await browser.waitForAngularEnabled(true);
    page = new PopoverPage();
    await page.navigateTo();
  });

  it('opens horizontal popover', async () => {
    await page.openHorizontalPopover();
    await report.add('horizontal-popover', await browser.driver.takeScreenshot());
    await page.tryToCloseSecondPopoverWithEsc();
  });

  it('opens and closes the first popover', async () => {
    await page.openFirstPopover();
    expect(await element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
    await page.closeFirstPopover();
    expect(await element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(false);
  });

  it('opens and tries to close the second popover', async () => {
    await page.openSecondPopover();
    expect(await element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
    await page.tryToCloseSecondPopoverWithClick();
    expect(await element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
    await page.tryToCloseSecondPopoverWithEsc();
    expect(await element(by.css('iw-popover-scroll-mask')).isPresent()).toBe(true);
  });

  afterAll(() => {
    report.testIfError();
  });
});
