const http = require('node:http');
const dgram = require('node:dgram');
const { Buffer } = require('node:buffer');
const serverless = require("serverless-http");
const express = require('express')
const app = express()
const port = 3000
const message = Buffer.from('1234567890123456789');
const client = dgram.createSocket('udp4');


function send() {
    const message = Buffer.from('1234567890123456789');
    const client = dgram.createSocket('udp4');
    client.send(message, 1234, '75.82.36.11', (err) => {
      client.close();
    });
    }

    app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('index.html')
})
app.get('/siren', (req, res) => {
    res.send('<h1> WRONG! </h1>')
  })
  app.post('/send', (req, res) => {
console.log("send")
send()
  })
  app.get('/send', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})