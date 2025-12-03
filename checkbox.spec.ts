import { chromium, test, expect } from "@playwright/test";

test("Create Lead and validate fields", async ({ page }) => {

    // Launch browser

    // Go to the application
    await page.goto("https://leafground.com/checkbox.xhtml");

    await page
        .locator('//input[@aria-label="Basic"]/parent::*/parent::*')
        .click();

    await page
        .locator('//input[@aria-label="Ajax"]/parent::*/parent::*')
        .click();

    // verify that the expected message is displayed
    await expect(
        page.locator('//span[contains(text(),"Checked")]')
    ).toBeVisible();

    // click on your favourite language
    await page
        .locator('//input[@value="py"]/parent::*/parent::*')
        .click();

    const triStateDiv = page.locator('div[id*="TriState"]');
    await triStateDiv.click(); // click if needed

    await page.getByLabel('//span[@class="ui-chkbox-icon ui-c "]');

    // toggle switch
    const toggleSwitch = page.locator('div[class*="toggleswitch "]');
    await toggleSwitch.click(); // click if needed

    // verify that the expected message is displayed
    await expect(
        page.locator('//span[contains(text(),"Checked")]')
    ).toBeVisible();

    // verify the checkbox is checked
     await page.getByLabel('//div[@class="ui-toggleswitch ui-widget ui-toggleswitch-checked"]');

    await page.locator('//div[@role="combobox"]').click();

    await page.locator('//li//label[text()="Miami"]').click();

    await page.locator('//li//label[text()="London"]').click();

    await page.locator('//span[@class="ui-icon ui-icon-circle-close"]').click();

});
