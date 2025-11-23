import { test, expect } from '@playwright/test';

test('hi', async ({ browser }) => {

  const context = await browser.newContext(
    {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    permissions: ['geolocation', 'microphone', 'camera'],
    ignoreHTTPSErrors: true

    }
  )

  // First tab
  const tab1 = await context.newPage();
  await tab1.goto('https://google.com');

  // Second tab
  const tab2 = await context.newPage();
  await tab2.goto('https://youtube.com',{waitUntil:'domcontentloaded'});   // ✅ FIXED: use tab2
  await tab2.waitForTimeout(5000);

  await tab2.pause();

//   await tab2.waitForTimeout(2000);
//   await tab2.pause();  // pause on second tab for debugging
  

});





