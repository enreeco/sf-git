'use strict';
var express = require('express');
var app = express();
app.get('/', function(req,res){

  if (req.url === '/favicon.ico') {
    res.status(404);
    return res.send("No icon");
  }
  res.status(200);
  res.set("Content-Type","application/json");
  res.send('{"status":"SF-Git is Running", "details":"https://github.com/enreeco/sf-git"}');
});
var PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});
