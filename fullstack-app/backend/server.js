//Import dependencies
const express = require('express');
const cors = require('cors');
const app = express();

//Configure server
const PORT = 1337;

//Middleware
app.use( cors() );
app.use( express.json() )
app.use( (req, res, next) => {
    requestCount++
    console.log(`${requestCount}, Method: ${req.method}, Request URL: ${req.url}`, req.body)
    next();
})

//Endpoints
app.get('/', (req, res) => {
    console.log('Server received GET / ');
    res.send('GET "/" response');
});
app.get('/hamsters', (req,res) => {
    console.log('Server received GET /hamsters');
    res.send('GET "/HAMSTERS"')
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});