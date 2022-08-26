# Notes

## To do

- [x] Sort array by player "number"
- [x] Set up automation to run scraper.js
- [ ] Add better error checking to `app.js`
- [ ] Add ability to sort by Offense, Defense, and Special Teams (?)
- [ ] Add additional player info and expose on tap (?)
- [ ] Add standings for the AFC North to the bottom (?)

---

## Setting up an automated cron job using Github Actions

I need to look into adding some type of automated job (cron job?) to run the scraper.js script on a regular interval (weekly?). I could just run an Amazon S3 server and set up a cron job, but I'd like to look into using something like Github Actions. Here are some resources to get started:

- [Automate Your Workflow with GitHub Actions and Cron](https://towardsdatascience.com/automate-workflow-github-actions-cron-130a8bf68ca6)
- [Setting Up a Cron Job with GitHub Actions](https://www.lagerdata.com/articles/setting-up-a-cron-job-with-github-actions)
- [How to Create a Custom GitHub Action with Node & JavaScript](https://spacejelly.dev/posts/how-to-create-a-custom-github-action-with-node-javascript/)
- [GitHub Actions — Getting Started With Node.js](https://futurestud.io/tutorials/github-actions-getting-started-with-node-js)
- [A guide to GitHub Actions using Node.js for Git workflow automation](https://medium.com/datreeio/a-guide-to-github-actions-using-node-js-for-git-workflow-automation-dbf1d3470f31)

I was able to successfully set up Github Actions to automatically run scraper.js, but I ran into a few issues:

First, I followed the instructions in [Automate Your Workflow with GitHub Actions and Cron](https://towardsdatascience.com/automate-workflow-github-actions-cron-130a8bf68ca6) for the general setup.

When I checked the status of the action on Github, I got the following error: "The `npm ci` command can only install with an existing package-lock.json or", which I first tried to resolve by using `npm install` instead of `npm ci`, however, I found that I first needed to checkout my code (I'm still not sure exactly why I needed this step) by following the instructions [here](https://stackoverflow.com/questions/68607702/npm-install-falied-in-github-action).

Also, in order to test that the action was working correctly, I set it so that the action would run when I pushed to the `scraper` branch:

```
on:
  push:
    branches:
      - scraper
```

As an aside: check out [Crontab Guru](cron schedule expressions) for creating cron schedule expressions.

## Sorting the player data by jersey number

I found a way to do this within [Sorting an array of objects by property values](https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values).

I was able to do the following:

```
const sortedData = data.sort(
  (a, b) => parseFloat(a.number) - parseFloat(b.number)
);
```

## Shadows

The shadows for the cards were generated using the [Shadow Palette Generator](https://www.joshwcomeau.com/shadow-palette/).

## Launch Screen Image

~~I consulted two sites to get this right. Apple gives you the absolute basics in their guide to [Configuring Web Applications](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), but it turns out there's a bit more to it, which I learned from the following:~~

- ~~[Adding Custom iOS Splash Screens To Your Progressive Web App](https://medium.com/appscope/adding-custom-ios-splash-screens-to-your-progressive-web-app-41a9b18bdca3)~~
- ~~[Enabling iOS Splash Screens for Progressive Web Apps](https://blog.expo.dev/enabling-ios-splash-screens-for-progressive-web-apps-34f06f096e5c)~~

This didn't work out. I'll need to revisit this.
