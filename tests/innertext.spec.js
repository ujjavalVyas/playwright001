

import {test,expect} from '@playwright/test';

test('check inner text', async({page})=>{

await page.goto('https://www.google.com/');

let search = await page.locator("//textarea[contains(@class,'gLFyf')]");

let search1 = await search.isVisible()
let search2 = await search.isEditable()
if(search1 && search2){
    console.log("search box is visible & editable")
}else{
    console.log("ISSUE not visible and editable")
}
await expect(search).toBeEnabled(); 

let searchB = await search.fill("programiz js");

let textA = await search.inputValue()
expect(textA).toBe("programiz js")  


const [newPage] = await Promise.all([

    page.waitForEvent("popup"),
   // search.

]) ;


await newPage.waitForLoadState("load")

  console.log("New Page Title:", await newPage.title());



}); 