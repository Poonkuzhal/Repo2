import { chromium, test, expect } from "@playwright/test";

test("Create Lead and validate fields", async ({ page }) => {

    // Go to the application
    await page.goto("https://leafground.com/waits.xhtml");

    // ======================
    // 1️⃣ Wait for element to APPEAR
    // ======================
    await page.locator('(//span[contains(text(),"Click")])[1]').click();

    await page.waitForSelector('//span[contains(text(),"I am here")]', { timeout: 10000 });

    await expect(page.locator('//span[contains(text(),"I am here")]')).toBeVisible();


    // ======================
    // 2️⃣ Wait for element to DISAPPEAR
    // ======================
    await page.locator('(//span[contains(text(),"Click")])[2]').click();

    // Wait until it disappears using state: 'hidden'
    await page.waitForSelector('//span[contains(text(),"I am about to hide")]', {
        timeout: 10000,
        state: 'hidden'
    });


    // ======================
    // 3️⃣ Wait for element to be CLICKABLE
    // ======================
    await page.locator('//span[text()="Click First Button"]').click();

    await page.waitForSelector('//span[contains(text(),"Message 1")]', {
        timeout: 10000
    });

    await expect(page.locator('//span[contains(text(),"Message 1")]')).toBeVisible();


    // ======================
    // 4️⃣ Wait for element to be VISIBLE
    // ======================
    await page.locator('(//span[contains(text(),"Click")])[5]').click();

    await page.waitForSelector('//span[contains(text(),"Did you notice?")]', { timeout: 10000 });

    await expect(page.locator('//span[contains(text(),"Did you notice?")]')).toBeVisible();
});
