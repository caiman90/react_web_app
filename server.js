/**
 * Created by rejhan on 23.10.2017.
 */
var express = require('express');
var app = express();
app.set('view engine', 'html');
app.listen(3000,function () {
    console.log("Server has been started");
});
app.get('/',function (req,res) {
    res.sendFile("index.html", {"root": __dirname + '/dist'});
}).use(express.static(__dirname + '/dist'));
