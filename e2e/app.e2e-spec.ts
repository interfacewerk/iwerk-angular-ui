import { IwerkAngularUiPage } from './app.po';

describe('iwerk-angular-ui App', function() {
  let page: IwerkAngularUiPage;

  beforeEach(() => {
    page = new IwerkAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
