/**
 * Created by rejhan on 23.10.2017.
 */
var express = require('express');
var passport = require("passport");
var bodyParser = require("body-parser");

var app = express();

app.set('view engine', 'html');

app.use(bodyParser.json()); // parsing content
app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.urlencoded({
    extended :true
}));

app.get('/',function (req,res) {
    res.sendFile("index.html", {"root": __dirname + '/dist'});
});

app.listen(3000,function () {
    console.log("Server has been started");
});
require(__dirname + "/server/routes/authenticationRoute.js")(app,passport);
