'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

 
   
  it('should automatically redirect to /index.html when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index.html");
  });
  
  it('should show a list of members on the main page', function() {
    browser.get('index.html');
    var section = $('#user-list')
    expect(section.getText()).toContain('Username')
  });
  
  it('should display a list of users', function() {
    browser.get('index.html');
    var list = $('ul#list')
    expect(list.getText()).toMatch(/Username/);
  });

  it('should display a search box', function() {
    browser.get('index.html');
    expect(element(by.id('search')).isPresent()).toBe(true);
  });

  it('should return a filtered search', function($httpBackend) {
    $httpBackend.whenGET('https://api.github.com/orgs/makersacademy/members').respond('name');
    browser.get('index.html');
    element(by.model('query')).sendKeys('Adrian')
    var list = $('ul#list')
    expect(list.getText()).not.toMatch(/Bibiana/)
    expect(list.getText()).toMatch(/Adrian/)
  });

});




