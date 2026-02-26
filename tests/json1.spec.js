

import { test,expect } from "@playwright/test";


//const data = JSON.parse(JSON.stringify(require("../TestJsons/testJSON1.json")));
import data from "../TestJsons/testJSON1.json" assert { type: "json" };
 // import {data} from "../TestJsons/testJSON1.json";


test('json check..', async ({page})=>{

await page.goto("https://www.google.com/");

await page.locator("//textarea[@id='APjFqb']").focus();

await page.locator("//textarea[@id='APjFqb']").fill(data.searchBy.srch1);

await page.waitForTimeout(1000);

})