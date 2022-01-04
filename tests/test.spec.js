const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('#myCheck');
  await page.waitForSelector('"Checkbox is CHECKED!"');
});
