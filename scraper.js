// Source: https://codeburst.io/a-guide-to-automating-scraping-the-web-with-javascript-chrome-puppeteer-node-js-b18efb9e9921
const puppeteer = require("puppeteer");
const fs = require("fs");
const fetch = require("node-fetch");

// Source: https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore
// Source: https://www.codegrepper.com/code-examples/whatever/puppeteer+scroll+to+bottom
let autoScroll = async (page) => {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
};

let downloadImg = async (url, name) => {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(`assets/img/players/${name}.jpg`, buffer, () =>
    console.log(`Downloaded image for ${name}`)
  );
};

let scrapeRoster = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.exposeFunction("downloadImg", downloadImg);
  await page.exposeFunction("autoScroll", autoScroll);

  await page.goto("https://www.detroitlions.com/team/players-roster/");
  //await page.waitFor(1000); // DEPRECATED
  await page.waitForTimeout(5000); // 10000

  await page.setViewport({
    width: 1200,
    height: 800,
  });

  // Have to scroll the page in order to get the lazy loaded images
  await autoScroll(page);

  const result = await page.evaluate(() => {
    let table = document.querySelector("table"); // Just get the first table, which is the "active" roster
    let rows = table.querySelectorAll("tbody tr");
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
      player.img = stats[0].querySelector("picture source").srcset;

      // Push the player object into the players array
      data.push(player);

      //let imageURL = stats[0].querySelector("img").src;
      let imgSrcset = stats[0].querySelector("picture source").srcset;
      let sources = imgSrcset.split(",");
      let imageURL = sources[2];
      downloadImg(imageURL, player.name.replaceAll(" ", "-"));
    });

    return data;
  });

  browser.close();
  return result;
};

let scrapeStandings = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.exposeFunction("downloadImg", downloadImg);
  await page.exposeFunction("autoScroll", autoScroll);

  await page.goto("https://www.detroitlions.com/team/standings/");
  //await page.waitFor(1000); // DEPRECATED
  await page.waitForTimeout(5000); // 10000

  await page.setViewport({
    width: 1200,
    height: 800,
  });

  // Have to scroll the page in order to get the lazy loaded images
  await autoScroll(page);

  const result = await page.evaluate(() => {
    let table = document.querySelector("table"); // Just get the first table, which is the "active" roster
    let rows = table.querySelectorAll("tbody tr");
    let data = [];

    // Loop over the rows
    rows.forEach((row) => {
      let stats = row.querySelectorAll("td");
      let club = new Object();

      club.fullName = stats[0].querySelector(".d3-o-club-fullname").innerText.replace(/(\r\n|\n|\r)/gm, "").trim();
      club.shortName = stats[0].querySelector(".d3-o-club-shortname").innerText.replace(/(\r\n|\n|\r)/gm, "").trim();
      club.wins = stats[1].innerText;
      club.losses = stats[2].innerText;
      club.ties = stats[3].innerText;
      club.percent = stats[4].innerText;

      // Push the club object into the clubs array
      data.push(club);
    });

    return data;
  });

  browser.close();
  return result;
};

scrapeRoster().then((value) => {
  //console.log(typeof value);
  //console.log(value); // Success!

  // Source: https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
  fs.writeFile("assets/data/players.json", JSON.stringify(value), (err) => {
    if (err) return console.log(err);
    console.log("Saved to players.json");
  });

  // Get the current date/time
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const time = today.toLocaleTimeString();

  fs.writeFile("assets/data/last-updated.txt", `${date} at ${time}`, (err) => {
    if (err) return console.log(err);
    console.log("Saved date to last-updated.txt");
  });
});

scrapeStandings().then((value) => {
  //console.log(typeof value);
  //console.log(value); // Success!

  // Source: https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
  fs.writeFile("assets/data/standings.json", JSON.stringify(value), (err) => {
    if (err) return console.log(err);
    console.log("Saved to standings.json");
  });
});
