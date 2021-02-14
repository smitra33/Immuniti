var fetch = require('node-fetch');

const redis = require("redis");
const newapp = redis.createClient();

newapp.on("error", function(error) {
  console.error(error);
});

const { promisify } = require("util");
const setAsync = promisify(newapp.set).bind(newapp);


const baseURL = 'https://data.calgary.ca/resource/3x6m-4vs7.json?';
const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?id=5913490&appid=51c0c9576bea623ccff7e50919d7ec96';
const historicalURL = 'http://history.openweathermap.org/data/2.5/history/city?id=5913490&appid=51c0c9576bea623ccff7e50919d7ec96'
const histURL = 'http://history.openweathermap.org/data/2.5/history/city?id=5913490&type=hour&start=1613191512&end=1613191512&appid=c9e676959993a80b442ed02284102728';
var results = [];
var health = [];
var links = []

async function fetchApi(){
    const res = await fetch(baseURL);
    const news = await res.json();


        // filter algo
        const healthnews = news.filter(news => {
            const newsTitle = news.title.toLowerCase();
            // algo logic
            if (
                newsTitle.includes('covid') ||
                newsTitle.includes('health') ||
                newsTitle.includes('vaccine') ||
                newsTitle.includes('virus') ||
                newsTitle.includes('restrictions') ||
                newsTitle.includes('prevention') ||
                newsTitle.includes('disease') ||
                newsTitle.includes('vaccines')
                
            ) {
                return true
            } 
            return false;
        })
    // set in redis
    const success = await setAsync('healthy', JSON.stringify(healthnews));
    console.log({success});
}

fetchApi();
module.exports = fetchApi;