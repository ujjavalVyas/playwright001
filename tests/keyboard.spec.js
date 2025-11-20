import { test, expect } from '@playwright/test';

test("test keyboard 1", async function({page}){

    await page.goto("https://www.google.com/");

    // await page.locator("//textarea[@class='gLFyf' and @name='q']").type("youtube", {delay:200})

    // await page.waitForTimeout(2000);

    // await page.keyboard.press('Enter');

    await page.locator("//textarea[@class='gLFyf' and @name='q']").focus();
    await page.waitForTimeout(1000);
    await page.keyboard.type("yout", {delay:200})
    await page.keyboard.down('ArrowDown',{delay:200});
    await page.waitForTimeout(1000);
    await page.keyboard.press('Enter');

    await page.waitForTimeout(1000);

    if (page.url().includes("youtube")) {
    await expect(page).toHaveURL(/youtube/);
    console.log("URL is correct..");
} else {
    console.log("URL is incorrect...!!");
}

    //await page.waitForTimeout(2000);
})
