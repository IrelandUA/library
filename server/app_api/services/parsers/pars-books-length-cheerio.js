const cheerio = require("cheerio");

module.exports.pars = async function () {
  let booksLength = 0;
  try {
    console.log("Start pars -> Books length cheerio");
    const response = await fetch("https://www.gutenberg.org/ebooks/10", {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
    if (!response.ok) {
      return booksLength;
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    const selector = "#content > div.breadcrumbs > ul > li:nth-child(2) > a";
    const rawText = $(selector).text().trim();
    console.log("Books length text:", rawText);
    if (rawText.length > 0) {
      const parts = rawText.split(" ")[0].trim().split(",");
      const thousands = parseInt(parts[0], 10) || 0;
      const remainder = parseInt(parts[1], 10) || 0;
      booksLength = thousands * 1000 + remainder;
    }
    return booksLength;
  } catch (e) {
    console.error("Error pars Books length by cheerio!");
    console.error(e);
    return booksLength;
  }
};
