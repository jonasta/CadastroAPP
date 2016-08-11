import { CadastroAPPPage } from './app.po';

describe('cadastro-app App', function() {
  let page: CadastroAPPPage;

  beforeEach(() => {
    page = new CadastroAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
