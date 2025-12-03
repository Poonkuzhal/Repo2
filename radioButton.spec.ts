import { chromium, test, expect } from "@playwright/test";

test("Create Lead and validate fields", async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");

    // Default selected
    await expect(page.locator('//input[@type="radio" and @value="Option3"]')).toBeChecked();

   /*  // Select Chrome (3rd option)
    await page.locator('(//label[contains(text(),"Chrome")])[1]').click();

    // Validate Chrome is selected
    await expect(page.locator('(//label[contains(text(),"Chrome")])[1]/preceding-sibling::input'))
        .toBeCheck */

    // Select Bengaluru
    await page.getByText("Bengaluru").click();

    // Validate Bengaluru is selected
    await expect(page.locator('//input[@type="radio" and @value="Bengaluru"]')).toBeChecked();

    // Default age selected
    await expect(page.locator('//input[@type="radio" and @value="21-40 Years"]'))
        .toBeChecked();

    // Change age
    await page.getByText("1-20 Years").click();

    // Validate updated age
    await expect(page.locator('//input[@type="radio" and @value="1-20 Years"]'))
        .toBeChecked();
});
