//const {test} = require('@playwright/test');
import{test} from '@playwright/test';

test("Simple PalywrightAutomation Test", async ({page}) => {
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(1000);
    let searchBox= page.locator("//textarea[@class='gLFyf' and @id='APjFqb']");

    searchBox.fill("Playwright Automation");

    await page.waitForTimeout(3000);
    await searchBox.press("Enter");
    await page.waitForTimeout(3000);


})