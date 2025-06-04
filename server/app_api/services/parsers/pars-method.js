module.exports.getAllId = async function (page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return [...document.querySelectorAll(li)].map((anchor) => {
      return { id: anchor.id + "" };
    });
  }, link);
};

module.exports.getAllHref = async function (page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return [...document.querySelectorAll(li)].map((anchor) => {
      return anchor.href;
    });
  }, link);
};

module.exports.getAllClass = async function (page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return [...document.querySelectorAll(li)].map((anchor) => {
      return anchor.classList;
    });
  }, link);
};

module.exports.getAllHtml = async function (page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return [...document.querySelectorAll(li)].map((anchor) => {
      return anchor;
    });
  }, link);
};

module.exports.getOneHref = async function g(page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return document.querySelector(li).href;
  }, link);
};

module.exports.getOneText = async function (page, link) {
  await page.waitForSelector(link, { timeout: 2000 });
  return await page.evaluate((li) => {
    return document.querySelector(li).textContent;
  }, link);
};

module.exports.getOneText1 = async function (page, link) {
  await page.waitForSelector(link, { timeout: 30000 });
  return await page.evaluate((li) => {
    return document.querySelector(li).textContent;
  }, link);
};

module.exports.getOneTitle = async function (page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return document.querySelector(li).title;
  }, link);
};

module.exports.getOneHtml = async function (page, link) {
  await page.waitForSelector(link, { timeout: 2000 });
  return await page.evaluate((li) => {
    return document.querySelector(li).innerHTML;
  }, link);
};

module.exports.getOneClass = async function (page, link) {
  await page.waitForSelector(link);
  return await page.evaluate((li) => {
    return document.querySelector(li).classList;
  }, link);
};
