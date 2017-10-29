/**
 * Created by rejhan on 23.10.2017.
 */
var mongoose = require("mongoose");
mongoose.createConnection("mongodb://localhost/react-db");

module.exports.User = require("./user");