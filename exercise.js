const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
const port = 5000;

app.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Guitar World!</h1>
    <h3>What do you play?</h3>
    <ul>
        <li><a href="/acoustic">Acoustic</a></li>    
        <li><a href="/electric">Electric</a></li>
        <li><a href="/bass">Bass</a></li>
        <li><a href="/drums">Drums</a></li>
    </ul>
    `)
});

app.get('/acoustic', (req, res) => {
    res.send(`Congratulations! You can become famous without a band!
            <br>
            <a href='/'>Back</a>`)
})

app.get('/electric', (req, res) => {
    res.send(`Wow! You must be super cool!
            <br>
            Have you played a <a href='/electric/prs'>PRS?</a>
            <br>
            <a href='/'>Back</a>`)
})

app.get('/electric/:eName', (req, res) => {
    const prs = req.params.eName;
    res.send(`Wow I can't believe you've played a ${prs}`)
})

app.get('/bass', (req, res) => {
    res.send(`
    No one cares!
    <br>
    <a href='/'>Back</a>`)
})

app.get('/drums', (req, res) => {
    res.send(`<h1> 404 This is GUITARWORLD not drumworld smh`)
})


server.listen(port, 'localhost', () => {
    console.log(`Running on ${port}`)
})