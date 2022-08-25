# Notes

## Setting up an automated cron job using Github Actions

I need to look into adding some type of automated job (cron job?) to run the scraper.js script on a regular interval (weekly?). I could just run an Amazon S3 server and set up a cron job, but I'd like to look into using something like Github Actions. Here are some resources to get started:

- [Automate Your Workflow with GitHub Actions and Cron](https://towardsdatascience.com/automate-workflow-github-actions-cron-130a8bf68ca6)
- [Setting Up a Cron Job with GitHub Actions](https://www.lagerdata.com/articles/setting-up-a-cron-job-with-github-actions)
- [How to Create a Custom GitHub Action with Node & JavaScript](https://spacejelly.dev/posts/how-to-create-a-custom-github-action-with-node-javascript/)
- [GitHub Actions — Getting Started With Node.js](https://futurestud.io/tutorials/github-actions-getting-started-with-node-js)
- [A guide to GitHub Actions using Node.js for Git workflow automation](https://medium.com/datreeio/a-guide-to-github-actions-using-node-js-for-git-workflow-automation-dbf1d3470f31)

I was able to successfully set up Github Actions to automatically run scraper.js, but I ran into a few issues:

First, I followed the instructions in [Automate Your Workflow with GitHub Actions and Cron](https://towardsdatascience.com/automate-workflow-github-actions-cron-130a8bf68ca6) for the general setup.

I got the following error: "The `npm ci` command can only install with an existing package-lock.json or", which I first tried to resolve by using `npm install` instead of `npm ci`, however, I found that I first needed to checkout my code (I'm still not sure exactly why I needed this step) by following the instructions [here](https://stackoverflow.com/questions/68607702/npm-install-falied-in-github-action).

## To do

- [ ] Sort array by player "number"
- [x] Set up automation to run scraper.js
- [ ] Add ability to sort by Offense, Defense, and Special Teams
