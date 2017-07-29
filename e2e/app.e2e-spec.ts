import { FormsUdemyPage } from './app.po';

describe('forms-udemy App', function() {
  let page: FormsUdemyPage;

  beforeEach(() => {
    page = new FormsUdemyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
