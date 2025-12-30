const { test, expect } = require('../Fixture/helper');
const cartData = require('../Jsonfiles/cartdata_set.json');

test.describe('🛒 Tests panier Saucedemo avec setup', () => {

  cartData.test_cases.forEach(testCase => {

    test(`${testCase.id} - ${testCase.description}`, async ({ page }) => {

      // ✅ Ajout d'un seul produit
      if (testCase.action === 'add') {
        await page.click(`text=${testCase.product_name}`);
        await page.click('button:has-text("Add to cart")');
        await page.click('.shopping_cart_link');

        const cartItems = await page.locator('.cart_item').allTextContents();
        expect(cartItems.length).toBe(testCase.expected_cart_count);

        const itemNames = await page.locator('.inventory_item_name').allTextContents();
        for (const name of testCase.expected_items) {
          expect(itemNames).toContain(name);
        }
      }

      // ✅ Ajout de plusieurs produits
      if (testCase.action === 'add_multiple') {
        for (const product of testCase.products) {
          await page.click(`text=${product}`);
          await page.click('button:has-text("Add to cart")');
          await page.goBack();
        }

        await page.click('.shopping_cart_link');
        expect(await page.locator('.cart_item').count())
          .toBe(testCase.expected_cart_count);

        const itemNames = await page.locator('.inventory_item_name').allTextContents();
        for (const name of testCase.expected_items) {
          expect(itemNames).toContain(name);
        }
      }

      // ✅ Ajout puis retrait d’un produit
      if (testCase.action === 'add_then_remove') {
        await page.click(`text=${testCase.product_name}`);
        await page.click('button:has-text("Add to cart")');
        await page.click('.shopping_cart_link');
        await page.click('button:has-text("Remove")');

        expect(await page.locator('.cart_item').count())
          .toBe(testCase.expected_cart_count);
      }

      // ✅ Ajout + continuer les achats
      if (testCase.action === 'add_and_continue') {
        await page.click(`text=${testCase.product_name}`);
        await page.click('button:has-text("Add to cart")');
        await page.click('.shopping_cart_link');

        expect(await page.locator('.cart_item').count())
          .toBe(testCase.expected_cart_count);

        if (testCase.continue_shopping) {
          await page.click('[data-test="continue-shopping"]');
          await expect(page.locator('.title')).toHaveText('Products');
        }
      }

      // ✅ Ajout de tous les produits puis retrait de tous
      if (testCase.action === 'add_all_then_remove_all') {
        for (const product of testCase.products) {
          await page.click(`text=${product}`);
          await page.click('button:has-text("Add to cart")');
          await page.goBack();
        }

        await page.click('.shopping_cart_link');

        while (await page.locator('button:has-text("Remove")').count() > 0) {
          await page.locator('button:has-text("Remove")').first().click();
        }

        expect(await page.locator('.cart_item').count())
          .toBe(testCase.expected_cart_count);
      }

    });

  });

});
