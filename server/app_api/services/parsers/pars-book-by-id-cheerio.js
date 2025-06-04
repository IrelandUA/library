const cheerio = require("cheerio");

module.exports.pars = async function (candidate) {
  let newBook = {
    title: "",
    image: "",
    author: [],
    read_now_url: "",
    parsed: false,
  };
  try {
    console.log("Start pars -> Book by cheerio === ", candidate.number);
    const response = await fetch(candidate.more_info_url, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });
    if (!response.ok) {
      newBook.parsed = false;
      return newBook;
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    console.log("$title", $("title").text());
    const selector = "#about_book_table";
    const rows = $(`${selector} > tbody > tr`);
    console.log("rows count:", rows.length);
    rows.each((index, tr) => {
      const key = $(tr).find("th").text().trim();
      if (!key) {
        return;
      }
      if (key === "Author") {
        const a = $(tr).find("td > a");
        const href = a.attr("href");
        if (href) {
          const link = "https://www.gutenberg.org" + href.trim();
          const number = link.split("/").pop() || "";
          const authorName = a.text().trim();
          newBook.author.push({
            author: authorName,
            number,
            link,
          });
        }
      }
      if (key === "Title") {
        newBook.title = $(tr).find("td").text().trim();
      }
    });

    const readNowHref = $(
      "#download_options_table a[title='Read online']",
    ).attr("href");
    newBook.read_now_url =
      readNowHref && readNowHref.length > 0
        ? "https://www.gutenberg.org" + readNowHref.trim()
        : "";
    const imageHref = $("#cover img").attr("src");
    newBook.image = imageHref && imageHref.length > 0 ? imageHref.trim() : "";
    newBook.parsed = true;
    if (newBook.title.length > 0) {
      newBook.parsed = true;
    }
    return newBook;
  } catch (e) {
    console.error("Error pars Books length!");
    return newBook;
  }
};
