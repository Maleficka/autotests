const LoginPage = require('./../pom/pages/login.page.js');

// create LoginPage instance
const loginPage = new LoginPage();

// TODO: separate file for credentials
// TODO: add clear cash because need to login for different conditions

describe("LogIn",async ()=>{
    beforeEach(async ()=>{
        await browser.url('/');
    })

    it("LogIn pass",async ()=>{
        await loginPage.setValueToInput('email','test33@test.com');
        // await $('#email').setValue('test33@test.com');
        await loginPage.setValueToInput('password','testtest');
        // await $('#password').setValue('testtest');
        await loginPage.buttonsClick('login');
        // await $('//span[text()="Log in"]/..').click();

        await expect(browser).toHaveUrl('https://app.test.qrit.dev/en/lk');
    })

    // it('click Back btn',async()=>{
    //   })
})
