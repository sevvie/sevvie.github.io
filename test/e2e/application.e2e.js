describe('sevvie.github.io', () => {

  describe('/#/', () => {
    beforeEach(() => {
      browser.get("/");
    });

    it('should have a title', () => {
      expect( browser.getTitle() ).toEqual( "sevvie.github.io" );
    });
  });

  describe('/#/bye', () => {
    beforeEach(() => {
      browser.get("/");
    });
    it('should respond to clicks through shadow-domming', () => {
      expect( element(by.css('hello')).getText() ).toEqual('Hello and welcome.');

      element( by.linkText('Goodbye') ).click();
      expect( element(by.css('goodbye')).getText() ).toEqual('Ciao, fucko.');
      expect( browser.getCurrentUrl() ).toMatch(/\/\#\/bye/);

      element( by.linkText('Hello') ).click();
      expect( element(by.css('hello')).getText() ).toEqual('Hello and welcome.');
      expect( browser.getCurrentUrl() ).not.toMatch(/#/);
    });
  });
});
