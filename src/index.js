"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var bodyParser = require("body-parser");
// port
var port = process.env.PORT || 3000;
// bodyparser
App_1["default"].use(bodyParser.urlencoded({ extended: true }));
App_1["default"].use(bodyParser.json());
App_1["default"].listen(port, function (err) {
    if (err) {
        // error
        return console.log(err);
    }
    // startup port
    return console.log("server is listening on " + port);
});
