const express = require('express')
const app = express();
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/conversations', function(req, res) {
  res.send("2 + 2 equals 4")
})

app.listen(port)
