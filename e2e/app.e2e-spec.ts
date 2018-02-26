import { SeniorProjectPage } from './app.po';

describe('senior-project App', () => {
  let page: SeniorProjectPage;

  beforeEach(() => {
    page = new SeniorProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
