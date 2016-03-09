'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index.html");
  });
  
  it('should show a list of members on the main page', function() {
    browser.get('index.html');
    var section = $('#user-list')
    expect(section.getText()).toBe('User 1')
  });
  
  it('should display a list of users', function() {
    browser.get('index.html');
    var list = $('ul#list')
    expect(list.getText()).toBe('User 1');
  });

  
});
