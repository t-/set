var express = require("express");
var app = express();
app.configure(function(){
  server.use('/set', express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
});

app.listen(8080);
