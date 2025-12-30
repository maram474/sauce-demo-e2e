// tests/test-setup.js
const { test: base } = require('@playwright/test');
const cartData = require('../Data/cartdata_set.json');

async function setupConnection(page) {
  await page.goto(cartData.base_url);
  await page.fill('#user-name', cartData.login.username);
  await page.fill('#password', cartData.login.password);
  await page.click('#login-button');
  await page.locator('.title').waitFor();
}

// Extend the base test
const test = base.extend({
  page: async ({ page }, use) => {
    await setupConnection(page); // login before giving page to test
    await use(page);
  }
});

module.exports = { test, expect: base.expect };
