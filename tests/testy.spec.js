import { test,expect } from "@playwright/test";
import { l1 } from "../TestJsons/l1";


test('test..1', async function({page}){

await page.goto('https://practicetestautomation.com/practice-test-login')

// await page.locator("//input[@id='username']").fill("student")
// await page.getByRole('textbox',{name:"password"}).fill("Password123")

let c = new l1(page);
await c.login();

await page.locator('#submit').nth(0).click();

//await page.waitForTimeout(2000)
await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")

const text1 = await page.locator("//h1[normalize-space()='Logged In Successfully']").textContent();
const finaltext = text1.trim();

console.log("text tilte is ::",finaltext)
await expect(finaltext).toBe("Logged In Successfully")
if(finaltext === "Logged In Successfully"){

    console.log("you got sucess login..")
}else{
  console.log("login fail..")
}


//await page.waitForTimeout(2000)

})