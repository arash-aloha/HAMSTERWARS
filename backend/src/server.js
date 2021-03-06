//Install Express
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path')
const hamstersRouter = require('../src/routes/hamsters.js');

//Configure server
const PORT = process.env.PORT || 1337;
let requestCount = 0;

//Middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );
app.use( (req, res, next) => {
    requestCount++
    console.log(`${requestCount}, Method: ${req.method}, Request URL: ${req.url}`, req.body)
    next();
})
app.use( '/img', express.static(path.resolve('backend/hamsters/') ));

//Endpoints
app.use('/hamsters', hamstersRouter);

//Start server
app.listen(PORT, () => {
    console.log(`Server is online, listening to port: ${PORT}...`);
})

app.use( express.static(path.resolve('build/') ));
app.get('*', (req, res) => {
    console.log('* is being called...')
    res.sendFile(path.resolve('build/index.html'));
});
