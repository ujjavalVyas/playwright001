import { test, expect } from "@playwright/test";

test('Amazon Fresh click and URL check', async ({ page }) => {
    // 1. Go to Amazon
    await page.goto("https://www.amazon.in/");

    // 2. Locate the Fresh link
    const freshLink = page.locator("//a[contains(@href,'/fresh')]");
    
    // 3. Hover on it (optional, just to simulate hover)
    await freshLink.hover();

    // 4. Get text of the link
    const hoverText = await freshLink.textContent();
    console.log("Hover Text:", hoverText);

    // 5. Assert text
    await expect(hoverText?.trim()).toBe("Fresh");

    // 6. Click the link
    await freshLink.click();

    // 7. Verify the new page URL
    await expect(page).toHaveURL(/alm\/storefront/);
});
