//const { test,expect } = require('allure-playwright');

import { test, expect } from '@playwright/test';
//const(test)  require('@playwright/test')
test.describe('Home Page Tests', () => {

  test('Validate Home Page', async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    // Title
    const pageTitle = await page.title(); // need await
    console.log("Page title is:", pageTitle);

    await expect(page).toHaveTitle('STORE'); // validation

    // URL
    const pageURL = page.url();
    console.log("Page URL is:", pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/');

    await page.close(); // await needed
  });
   
});

test("test 01",async function ({page}){
let test01 = expect("ujjaval vyas").toContain("ujjaval")
console.log("test01 result is",test01)


});

test.skip("test 02",async function ({page}){
expect(100).toBe(101)
  
});






