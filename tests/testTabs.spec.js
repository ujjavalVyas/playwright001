import {test,expect, chromium}  from '@playwright/test';

test('test-1', async({browser}) => {

//const browser = await chromium.launch()    
const context = await browser.newContext()

const page = await context.newPage();
await page.waitForTimeout(2000)
await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.waitForTimeout(2000)

const [newPage] = await Promise.all(
[
        context.waitForEvent("page"),
        page.locator("(//a[contains(@href,'facebook')])[1]").click(),
        await page.waitForTimeout(2000)
])

}) 