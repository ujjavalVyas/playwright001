import {test,expect} from '@playwright/test'

test('test of env..', async ({page})=>{

await page.goto(process.env.URL)

await page.locator("//textarea[@id='APjFqb']").fill(process.env.Value);

await expect(page).toHaveURL(/playwright/);


page.on('dialog', async function(dialog){
    await dialog.dismiss();
})


})