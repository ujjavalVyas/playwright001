import { test, expect } from '@playwright/test';

test("testAutoselect-1",async function({page}){

await page.goto("https://www.google.com/")

await page.locator("//textarea[@class='gLFyf' and @name='q']").type("mukesh otwani")

await page.waitForSelector("//div[@class='erkvQe']//ul[@role='listbox']");
const elements = await page.$$("//div[@class='erkvQe']//ul[@role='listbox']");

for(let i=0; i<elements.length;i++){

    const text = await elements[i].textContent()
if(text.includes("youtube")){
    await elements[i].click();
    break

}

}

});

