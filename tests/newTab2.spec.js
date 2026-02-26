import { test,expect } from "@playwright/test";

test('', async({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.lipsum.com/")

   let t1 = await page.locator('//h4[contains(text(),"Neque porro quisquam est qui dolorem ipsum quia d")]').textContent();

   console.log(t1);

  
   let t2 =  await page.locator('//h4[contains(text(),"Neque porro quisquam est qui dolorem ipsum quia d")]').isVisible()

   //page.waitForLoadState('')

   if(t2){
    console.log('t2 is visible')
   }else{
    console.log('t2 is not visible')
   }

   const page2 = await context.newPage();

   await page2.goto("https://www.google.com/");
   await page2.waitForLoadState();

await expect(page2).toHaveURL(/google/);

await page2.close();

await page.bringToFront();

await expect(page).toHaveURL(/lipsum/);



//    const newPage = await context.newPage();
//     await newPage.goto("https://www.google.com/");
//     await newPage.waitForLoadState();

})