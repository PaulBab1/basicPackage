var express = require("express");
var path = require("path");
var url = require("url");
var qs = require("querystring");
var app = express();
var bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({
  extended:true
}));

// UNCOMMENT this part to accept CORS requests /////////////////////////////////
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-CSRF-TOKEN");
//   next();
// });
////////////////////////////////////////////////////////////////////////////////

// Minimal requests implémentation /////////////////////////////////////////////
app.get("/", (req, res) => {
  res.status(200)
  .sendFile(path.resolve(__dirname, './index.html'));
});

app.get("/jquery", (req, res) => {
  res.status(200)
  .sendFile(path.resolve(__dirname,
    "./node_modules/jquery/dist/jquery.min.js"));
});

app.get("/bootstrap.js", (req, res) => {
  res.status(200)
  .sendFile(path.resolve(__dirname,
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"));
});

app.get("/bootstrap.css", (req, res) => {
  res.status(200)
  .sendFile(path.resolve(__dirname,
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"));
});

app.get("/main.js", (req, res) => {
  res.status(200)
  .sendFile(path.resolve(__dirname, "./dist/js/main.bundle.js"))
});

app.get("/main.css", (req, res) => {
  res.status(200)
  .sendFile(path.resolve(__dirname, "./dist/css/main.css"));
});


////////////////////////////////////////////////////////////////////////////////


app.listen(3000);
