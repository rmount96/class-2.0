const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const port = 3000;

//app, please listen for requests from browser
//the anonymous function will handle the request
//and send back the response
app.get('/', (req, res) => {
    // req and res are passed to my anon function
    // i need to make room for the them with placeholders
    res.send('Hello World');
});

app.get('/cats', (req, res) => {
    res.send(`
    <ul>
    <li><a href = "/cats/oakley">Oakley</a></li>
    <li><a href = "/cats/milla">Milla</a></li>
    </ul>
    
    `)
});

// :catName is a route param - an argument that is 
app.get('/cats/:catName', (req, res) => {
    const catName = req.params.catName;
    res.send(`Welcome to ${catName}'s House!
    <br>
    <a href="/cats">Back</a>
`)
});

// what port do i listen on?
// what is my IP address?
// a callback that runs after we've started
server.listen(port, 'localhost', () => {
    console.log('Running on port 3000')
});