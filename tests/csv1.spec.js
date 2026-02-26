import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const csvpath = path.join(__dirname, '../TestJsons/testCSV1.csv');

const csvpath = path.join(path.dirname(fileURLToPath(import.meta.url)), '../TestJsons/testCSV1.csv');

const data = parse(fs.readFileSync(csvpath), {
  columns: true,
  skip_empty_lines: true
});

test.describe('CSV parsing descr..', () => {
  for (const data1 of data) {
    test(`csv parsing.${data1.testID}`, async ({ page }) => {
      await page.goto(process.env.URL);
      await page.locator('#APjFqb').fill(data1.sr1);
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(/search/);
    });
  }
});
