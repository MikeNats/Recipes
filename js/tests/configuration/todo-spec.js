describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://127.0.0.1:62959/index.html#/index');

  
		expect(element(by.css('#logIn')).isPresent()).toBe(true);
     		element(by.css('#logIn')).click().then(function(){
     	//	alert(browser.getLocationAbsUrl())
     		//	expect(browser.getLocationAbsUrl()).toBe('http://127.0.0.1:62959/index.html#/createdit');
     		});
		

  });
});


