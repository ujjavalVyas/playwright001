
import{test,expect} from '@playwright/test'

const data1 = require('../logins/loginP2')


test("login test", async({page})=>{

await page.goto("https://practicetestautomation.com/practice-test-login/");

const da = new data1(page);
await da.login12();

})