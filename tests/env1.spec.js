
    import { test,expect } from "@playwright/test";
    import testdata from '../TestJsons/testJSON1.json' assert{type:'json'} ;

    const {searchBy} = testdata;

        test.beforeAll(async()=>{  console.log("the testing is started....");});


    for(const[key,value] of Object.entries(searchBy)){

        test.describe('describe test',async ()=>{


    test(`env based test ${key}`, async({page})=>{

    await page.goto(process.env.URL);

    await page.locator('#APjFqb').fill(value)


    })
    })
    }
       test.afterAll(async()=>{  console.log("End....");});
