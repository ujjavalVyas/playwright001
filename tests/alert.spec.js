import { test, expect } from '@playwright/test';

test("alert1", async ({ page }) => {

  // Register BEFORE alert opens
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain("I am a JS Alert");
    await dialog.accept();
  });

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Click the button to open alert
  await page.locator("//button[normalize-space()='Click for JS Alert']").click("Click for JS Alert");

  await page.waitForTimeout(2000);
});
