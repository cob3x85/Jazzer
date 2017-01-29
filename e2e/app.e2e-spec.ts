import { JazzerPage } from './app.po';

describe('jazzer App', function() {
  let page: JazzerPage;

  beforeEach(() => {
    page = new JazzerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
