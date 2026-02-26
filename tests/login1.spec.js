import { test,expect } from "@playwright/test";

const data = JSON.parse(JSON.stringify(require('../login01.json')));

test.describe('group of test', ()=> {

for(const datas of data){

test.describe(`login with user ${datas.id}`,function()
{

test('login to app', async({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//input[@id='email1']").fill(datas.username)
    await page.locator("//input[@id='password1']").fill(datas.password);
    await page.pause()

    

})
})
}
})
