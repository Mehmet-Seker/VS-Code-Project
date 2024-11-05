import{test} from "@playwright/test";

test("Simple Playwright Automation @youtube2", async ({page}) => {
    await page.goto("https://www.youtube.com");
   // await page.waitForTimeout(3000);
    const searchBox= page.locator("//input[@id='search']");
    await searchBox.click();

   // await searchBox.type("CYDEO School IT Training");
   await searchBox.fill("CYDEO");

   await page.waitForTimeout(3000);

   await searchBox.press("Enter");

    //await page.waitForTimeout(3000);
    const firstVideo = page.locator("(//a[@id='video-title'])[1]");

   await  firstVideo.click();

   // await page.waitForTimeout(10000);
    await page.close();

});