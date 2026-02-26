import {test,expect} from '@playwright/test';

test('ALERTS....', async function({page}){

 await page.goto('https://demoqa.com/alerts');

 
 

  page.once('dialog', async function(di1){

    let msg1 = di1.message();
     console.log("alert messageis::",msg1);
    expect(msg1).toMatch(/You clicked/gi);
    await di1.accept();
  })

   await page.getByRole("button",{name:"Click me"}).nth(0).click();


page.once('dialog', async (di2)=>{

  let msg2= di2.message();
  console.log("alert 2 message is >>", msg2);
  await di2.dismiss();

})
 await page.locator("//button[@id='confirmButton']").click();


 page.once('dialog',async(di3)=>{
    let msg3 = di3.message();
    console.log("prompt messageis// ", msg3);
    await di3.accept("i'm groot..");
 })

  await page.locator("//button[@id='promtButton']").click();
 let promptresult = await page.locator("//span[@id='promptResult']").textContent();
 console.log("entered prompt text is :: ", promptresult)
expect(promptresult).toContain('groot');

})