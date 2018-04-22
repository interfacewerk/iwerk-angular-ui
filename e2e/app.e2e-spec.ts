import { IwerkAngularUiPage } from './app.po';

describe('iwerk-angular-ui App', function() {
  let page: IwerkAngularUiPage;

  beforeEach(() => {
    page = new IwerkAngularUiPage();
  });

  it('displays Welcome', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome!');
  });
});
