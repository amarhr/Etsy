var helper = require('../../helper'),
    faker = require('faker');

var HomePage = function() {

    //random generates from 'faker' library
    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomEmail = faker.internet.email();
    var randomPassword = faker.internet.password();
    var randomUsername = faker.internet.userName();

    //title and texts of notifications/error messages
    this.pageTitle = 'Etsy - Shop for handmade, vintage, custom, and unique gifts for everyone';
    this.passwordExistText = 'Password was incorrect.';
    this.passwordBlankText = "Can't be blank.";

    //sign in form elements selected by id
    this.signInButton = element(by.cssContainingText('.select-signin', 'Sign in'));
    this.singInLoginForm = element(by.name('submit_attempt'));
    this.usernameField = element(by.id('join_neu_email_field'));
    this.userPasswordField = element(by.id('join_neu_password_field'));
    this.passwordExistingError = element(by.id('aria-join_neu_password_field-error'));
    this.usernameExistingError = element(by.id('aria-join_neu_email_field-error'));
    this.registerButton = element(by.css('.select-register'));

    //register form elements
    this.registerButtonOnMainPage = element(by.id('register'));
    this.firstNameField = element(by.id('join_neu_first_name_field'));
    this.lastNameField = element(by.id('last-name'));
    this.emailField = element(by.id('email'));
    // this.passwordField = element(by.id('password'));
    this.passwordConfirmField = element(by.id('password-repeat'));
    this.usernameRegisterField = element(by.id('username'));
    this.etsyFinds = element(by.name('submit_attempt'));
    this.registerButtonRegisterPopUp = element(by.css('.select-register'));

    //functions to interact with our page
    /*this.goToRegister = function() {
        helper.waitElementToBeClickable(this.registerButtonOnMainPage)
        this.registerButtonOnMainPage.click()
    }*/

    this.goToRegister = function() {
        helper.waitElementToBeClickable(this.registerButton)
        this.registerButton.click()
    }

    this.goToLogin = function() {
        //helper.waitUntilReady(this.signInButton)
        this.signInButton.click()
    }
    
    this.login = function(username, pwd) {
    	this.goToLogin();
        helper.waitUntilReady(this.usernameField);
        this.usernameField.sendKeys(username);
        
        helper.waitUntilReady(this.userPasswordField);
        this.userPasswordField.sendKeys(pwd);
        
        this.singInLoginForm = element(by.name('submit_attempt'));
        this.singInLoginForm.click();
    }

    this.doRegister = function() {
    	browser.sleep(5000)
    	this.firstNameField = element(by.id('join_neu_first_name_field'));
        this.usernameField = element(by.id('join_neu_email_field'));
        this.userPasswordField = element(by.id('join_neu_password_field'));
        
        console.log('All fields are ready')
        console.log('fields are read again')
        console.log('randomFirstName: ' + randomFirstName)
        console.log('randomEmail: ' + randomEmail)
        console.log('randomPassword: ' + randomPassword)
        
        this.firstNameField.sendKeys(randomFirstName)
        console.log('First name entered')
        this.usernameField.sendKeys(randomEmail)
        console.log('Username entered')
        
        this.userPasswordField.sendKeys(randomPassword)
        console.log('Pwd entered')
        
        helper.waitUntilReady(this.etsyFinds)
        this.etsyFinds.click()
    } 	  		
} 				

module.exports = HomePage;
