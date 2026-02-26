

    import {test,expect} from '@playwright/test'

    
//     test.beforeAll('clear cookies', async ({browser}) =>{

//         const context = await browser.newContext();
//         await context.clearCookies();
//         await context.close();

// })

let a = [dialog,popup];
        page.on('a',async(dialog)=>{
            console.log(dialog.message());
            await dialog.accept();
            await popup.close();
        })



    test('test', async function ({browser}){


        const context = await browser.newContext();
        await context.clearCookies();
        const page = await context.newPage();

        await page.goto('https://www.youtube.com/watch?v=CxeH_w4-6Yg&list=PL6flErFppaj0ekTfLaQ4seSQP9kuds-Cj&index=6');
        

    })