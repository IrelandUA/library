const { firefox } = require("playwright");
const parsMethod = require("./pars-method");

async function closeBrowser(context, browser) {
  await context.clearCookies();
  await context.close();
  await browser.close();
}

module.exports.pars = async function (candidate) {
  let newBook = {
    title: "",
    image: "",
    author: [],
    read_now_url: "",
  };
  try {
    console.log("Start pars -> Book === ", candidate.number);
    const browser = await firefox.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await browser.newPage();
    await page.goto(candidate.more_info_url, {
      timeout: 10000, // время ожидания загрузки страницы (в миллисекундах)
    });
    await page.waitForTimeout(2000);
    let selector = "#about_book_table";
    const element = await page.$(selector);
    let rows = 0;
    if (element) {
      rows = await page.$$eval(`${selector} > tbody > tr`, (rows) => rows);
    }
    console.log("rows", rows.length);
    for (let i = 0; i < rows.length - 1; i++) {
      let selectorTr = `${selector} > tbody > tr:nth-child(${i + 1})`;
      let row = await page.$(selectorTr);
      if (row) {
        try {
          let key = await parsMethod.getOneText(page, `${selectorTr} > th`);
          if (key && key.trim().length > 0) {
            if (key === "Author") {
              let author = {
                author: "",
                number: "",
                link: "",
              };
              let linkAuthor = `${selectorTr} > td > a`;
              let linkAuthorElement = await page.$(linkAuthor);
              if (linkAuthorElement) {
                let hrefAuthor = await parsMethod.getOneHref(page, linkAuthor);
                if (hrefAuthor && hrefAuthor.length > 0) {
                  author.link = hrefAuthor.trim();
                  author.number =
                    hrefAuthor.split("/")[hrefAuthor.split("/").length - 1];
                  let authorName = await parsMethod.getOneText(
                    page,
                    linkAuthor,
                  );
                  author.author =
                    authorName && authorName.length ? authorName.trim() : "";
                  if (author.author.length > 0) {
                    newBook.author.push(author);
                  }
                }
              }
            }
            if (key === "Title") {
              let titleLink = `${selectorTr} > td`;
              let titleElement = await page.$(titleLink);
              if (titleElement) {
                let title = await parsMethod.getOneText(page, titleLink);
                newBook.title = title && title.length ? title.trim() : "";
              }
            }
          }
        } catch (e) {
          console.log(`Not found th for - ${i}`);
        }
      }
    }
    let selectorReadOnline = "#download_options_table a[title='Read online']";
    const elementReadOnline = await page.$(selectorReadOnline);
    if (elementReadOnline) {
      let hrefLinkReadOnline = await parsMethod.getOneHref(
        page,
        selectorReadOnline,
      );
      newBook.read_now_url =
        hrefLinkReadOnline && hrefLinkReadOnline.length > 0
          ? hrefLinkReadOnline.trim()
          : "";
    }
    let selectorImage = "#cover > img";
    const elementImage = await page.$(selectorImage);
    if (elementImage) {
      const src = await page.getAttribute(selectorImage, "src");
      newBook.image = src ? src.trim() : "";
    }
    await closeBrowser(context, browser);
    return newBook;
  } catch (e) {
    console.error("Error pars Books length!");
    return newBook;
  }
};
