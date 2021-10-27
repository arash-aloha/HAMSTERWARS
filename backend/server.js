//Import dependencies
const express = require('express');
const cors = require('cors');
const app = express();

//Configure server
const PORT = process.env.PORT || 1337;
let reqCount = 0;

//Middleware
app.use( cors() )
app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );
app.use( (req, res, next) => {
    reqCount++
    console.log(`${reqCount}, Method: ${req.method}, Request URL: ${req.url}`, req.body)
    next();
})
app.use( express.static(__dirname + '/build') )
//app.use( '/img', express.static(__dirname + '/../hamsters') )

//Endpoints
// app.get('/', (req, res) => {
//     console.log('Server received GET / ');
//     res.send('GET "/" response');
// });
app.get('/hamsters', (req,res) => {
    console.log('Server received GET /hamsters');
    res.send('GET "/HAMSTERS"')
})

app.get('*', (req, res) => {
    console.log('* is being called...')
    res.send(__dirname + '/build/index.html');
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});