var express = require('express');
var path = require('path');
var app = express();

var server = app.listen(process.env.PORT || 3000, function() {
  var port = server.address().port;
  console.log('listening on port ', port);
  console.log("hello world");
})

function handleGet(request, response) {
  console.log('received a request!');
  response.sendFile(path.join(__dirname, './index.html'));
};
app.get('/', handleGet);
