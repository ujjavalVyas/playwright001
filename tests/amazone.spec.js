import { test,expect } from "@playwright/test";


test('hover test 1', async ({page}) =>{

    await page.goto("https://www.amazon.in/")
   // await page.waitForTimeout(1000);
    //await page.reload();

    const hoverText =  page.locator("//a[contains(@href,'fresh')]");
    await expect(hoverText).toBeVisible({timeout: 10000});
    await hoverText.hover();
    //await page.waitForTimeout(1000);
    //await page.pause()
   

    const hoverText2 = await hoverText.textContent();
    console.log("hover text :::", hoverText2);

    await expect(hoverText2).toBe("Fresh");

   await hoverText.click();
 
    const url3 = page.url();
    console.log("last url:", url3);

    expect(page).toHaveURL(/alm\/storefront\?almBrandId=ctnow/)
   // console.log("last url:", url3);

    //await page.waitForTimeout(1000);
 

})