const { firefox } = require("playwright");
const parsMethod = require("./pars-method");

module.exports.pars = async function () {
  try {
    console.log("Start pars -> Books length");
    const browser = await firefox.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto(`https://www.gutenberg.org/ebooks/2`, {
      timeout: 10000, // время ожидания загрузки страницы (в миллисекундах)
    });
    await page.waitForTimeout(2000);
    let booksLength = 0;
    let selector = "#content > div.breadcrumbs > ul > li:nth-child(2) > a";
    const element = await page.$(selector);
    if (element) {
      booksLength = await parsMethod.getOneText(page, selector);
    }
    console.log("Books length text", booksLength);
    if (booksLength.length > 0) {
      let arr = booksLength.split(" ")[0].trim().split(",");
      booksLength = +arr[0] * 1000 + +arr[1];
    }
    await context.clearCookies();
    await context.close();
    await browser.close();
    return booksLength;
  } catch (e) {
    console.error("Error pars Books length!");
    console.error(e);
    return null;
  }
};
