const BasePage = require('./base.page.js')

class LoginPage extends BasePage{
 
    constructor(){
        super('https://app.test.qrit.dev/en/login');
    }

    /**
     * 
     * @param name {'email'|'password'}
     * @returns 
     */
    inputs(name){
        let input={
            email: '#email',
            password: '#password'
        }
        return $(input[name.toLowerCase()])
    }

    buttons(name){
        let button={
            login: '//span[text()="Log in"]/..',
            showpass: '//button/svg/..'
        }
        return $(button[name.toLowerCase()])
    }

    buttonsClick(name){
        return this.buttons(name).click();
    }
    
    /**
     * 
     * @param {*} inputName 
     * @param {*} value 
     */
        async setValueToInput(inputName,value){
            await this.inputs(inputName).setValue(value);
            console.log(`Inserted in ${inputName} value ${value}`)
        }
}

module.exports = LoginPage;