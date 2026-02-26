
import { test,expect } from "@playwright/test";

test('test 1', async({page}) => {

await page.goto("https://www.google.com/");


await expect(page.locator("//textarea[@id='APjFqb']")).toBeVisible();
await expect(page).toHaveTitle("Google");

await expect.soft(page.locator("//textarea[@id='APjFqb']")).toBeVisible();

let v = page.viewportSize();

console.log("h: " , v.height);
console.log("w: " , v.width);

})
