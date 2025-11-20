import { test, expect } from '@playwright/test';

const log1 = require("../logins/loginPage")

test('test login 1', async({page})=> 
    {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const Log1 = new log1(page)

await Log1.loginToPage()

});