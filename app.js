'use strict';
/*
 * This web service is only used to create a web process on Heroku.
 * Can be completely removed or simply replaced with anything else.
 */
var express = require('express');
var app = express();
app.get('/', function(req,res){
  res.status(200);
  res.set("Content-Type","application/json");
  res.send('{"status":"SF-Git is Running", "details":"https://github.com/enreeco/sf-git"}');
});
var PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});
