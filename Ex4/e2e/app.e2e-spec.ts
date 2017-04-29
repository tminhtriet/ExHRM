import { ProjectDefaultPage } from './app.po';

describe('project-default App', function() {
  let page: ProjectDefaultPage;

  beforeEach(() => {
    page = new ProjectDefaultPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
