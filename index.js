
var express = require('express');
var app = express();
var os = require('os');

app.get('/', function (req, res) {
  res.send(`Hello World! ${os.hostname()}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

