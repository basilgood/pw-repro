const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');

	await page.getByLabel('Color').fill('#ff00ff')

	await page.keyboard.press('Enter');
});
