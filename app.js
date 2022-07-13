const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 4050;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/ping', require('./routes/ping'));
app.use('/api/reports', require('./routes/reports'));

module.exports = app;

app.listen(port, ()=>{
    console.log('localhost:'+port);
})