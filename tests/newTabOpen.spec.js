
 import {test,expect} from '@playwright/test'

// test('testing tab things..', async({page,context}) =>{

// await page.goto("https://www.google.com/");

// //await page.locator("//textarea[@id='APjFqb']").press('Enter');

// await page.locator("//textarea[@id='APjFqb']").fill('youtube');
// await page.locator("//textarea[@id='APjFqb']").click();


// const [you] = await Promise.all([
//   context.waitForEvent('page'),
//   page.getByRole('link', { name: /youtube/i })
//       .first()
//       .click({ modifiers: ['Control'] }) // Cmd on macOS
// ]);

// await you.waitForLoadState();
// await expect(you).toHaveURL(/youtube\.com/);

// })




// test('Open Google and open YouTube in new tab', async ({ page, context }) => {
//   // Open Google
//   await page.goto('https://www.google.com');

//   // Search for YouTube
//   await page.fill('textarea[name="q"]', 'YouTube');
//   await page.press('textarea[name="q"]', 'Enter');

//   // Wait for new tab to open when clicking YouTube link
//   const [newTab] = await Promise.all([
//     context.waitForEvent('page'),   // wait for new tab
//     page.click('a[href*="youtube.com"]')
//   ]);

//   // Wait for YouTube page to load
//   await newTab.waitForLoadState();

//   // Assertion
//   await expect(newTab).toHaveURL(/youtube\.com/);
// });


// import { test, expect } from '@playwright/test';

test('open new tab simple example', async ({ page, context }) => {
  await page.goto('https://demoqa.com/alerts');

  const [newTab] = await Promise.all([
    context.waitForEvent('page'),     // waits for new tab
    page.click('text=Click Here') ,
        // this opens a new tab
        //await page.waitForTimeout(1000)
  ]);

  await newTab.waitForLoadState();

  await expect(newTab).toHaveTitle('New Window');

await newTab.close();
await page.bringToFront();

await expect(page).toHaveTitle('The Internet');

await page.waitForTimeout(1000)


});
