import { ExempleDirectivesPage } from './app.po';

describe('exemple-directives App', () => {
  let page: ExempleDirectivesPage;

  beforeEach(() => {
    page = new ExempleDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
