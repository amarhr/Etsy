exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  // specs: ['pages/cart/**/*.spec.js'],
  params: {
      url: 'https://www.etsy.com/'
  },
  suites: {
      //cart: 'pages/cart/**/*.spec.js',
      home: 'pages/home/**/*.spec.js'
      //search: 'pages/search/**/*.spec.js'
  },
  onPrepare: function() {
	  browser.ignoreSynchronization = true;
	  console.log('I am in onPrepare function()')
	  browser.get(browser.params.url);
	  browser.driver.manage().window().maximize();
  },

  jasmineNodeOpts: {
      defaultTimeoutInterval: 25000
  },
  
  browserName: 'chrome',  
  directConnect: true,
}