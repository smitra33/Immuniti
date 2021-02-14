const express = require('express')
const app = express()
const port = 3001

var redis = require("redis"),
newapp = redis.createClient();

const {promisify} = require('util');
const getAsync = promisify(newapp.get).bind(newapp);

app.get('/api/health', async (req, res) => {
    const health = await getAsync('healthy');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    return res.send(health);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))