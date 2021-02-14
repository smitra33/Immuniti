var CronJob = require('cron').CronJob;

const fetchNews = require('./tasks/fetch-api')

// fetch the api
new CronJob('0 * * * *', fetchNews, null, true, 'America/Los_Angeles');

