import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();   // Launch browser
  const context = await browser.newContext(); // Create context (like a fresh session)
  const page = await context.newPage();       // Open new tab

  await page.goto('https://google.com');      // Navigate to a URL

  console.log(await page.title());             // Print page title

  await browser.close();                       // Close everything
})();
