// Source: https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921
const puppeteer = require("puppeteer");
const fs = require("fs");
const fetch = require("node-fetch");

let download = async (url, name) => {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(`assets/img/players/${name}.png`, buffer, () =>
    console.log(`Downloaded image for ${name}`)
  );
};

let scrape = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.exposeFunction("download", download);

  await page.goto("https://www.clevelandbrowns.com/team/players-roster/");
  //await page.waitFor(1000); // DEPRECATED
  await page.waitForTimeout(10000);

  const result = await page.evaluate(() => {
    let rows = document.querySelectorAll("tbody tr");
    let data = [];

    // Loop over the rows
    rows.forEach((row) => {
      let stats = row.querySelectorAll("td");
      let player = new Object();

      player.name = stats[0].querySelector(
        ".nfl-o-roster__player-name a"
      ).innerText;
      player.number = stats[1].innerText;
      player.position = stats[2].innerText;
      player.height = stats[3].innerText;
      player.weight = stats[4].innerText;
      player.age = stats[5].innerText;
      player.exp = stats[6].innerText;
      player.college = stats[7].innerText;

      // Push the player object into the players array
      data.push(player);

      let imageURL = stats[0].querySelector("img").src;
      download(imageURL, player.name.replaceAll(" ", "-"));
    });

    return data;
  });

  browser.close();
  return result;
};

scrape().then((value) => {
  console.log(typeof value);
  console.log(value); // Success!

  // Source: https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
  fs.writeFile("assets/data/players.json", JSON.stringify(value), (err) => {
    if (err) return console.log(err);
    console.log("Saved to players.js");
  });
});
