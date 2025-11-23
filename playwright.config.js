// import { defineConfig, devices } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',   // folder where your tests are
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },
//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
//   ],
// });

// @ts-check

import { defineConfig, devices } from '@playwright/test';
//const { defineConfig, devices  } = require('@playwright/test');

export default defineConfig({
  testDir: './tests', // folder where your tests are stored
  timeout: 30 * 1000, // 30 seconds timeout for each test
  retries: 1, // retry once on failure
  
  use: { //Global settings applied to all tests
    headless: true, // run in headless mode
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // timeout for each action
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', // record video only when test fails
    screenshot: 'only-on-failure', // take screenshot only on failure
    trace: 'retain-on-failure', // record trace when test fails
  
  },
  reporter: [['list'], ['html'],['allure-playwright']], // show console list + HTML report
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    

    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    
    },
  ],
});

