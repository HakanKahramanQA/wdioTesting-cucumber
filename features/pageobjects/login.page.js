

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
       // return $('#username');
    }

    get inputPassword() {
       // return $('#password');
    }

    get btnSubmit() {
       // return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
       await this.inputUsername.setValue(username);
       await this.inputPassword.setValue(password);
       await this.btnSubmit.click();
      const assert = require('assert');
      browser.pause(20000)
          driver.rotateDevice(100, 100);

          // Check if the title is correct
          assert.ok(true, 'Example Domain');
       //   undefinedMethod() // for getting error for undefined method

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        //return super.open('login');
        
        
    }

    

    



}

module.exports = new LoginPage();
