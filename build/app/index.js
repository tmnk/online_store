"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.config();
var PORT = process.env.PORT || 8080;
var app = express();
app.listen(PORT, function () { return console.log("Server work on " + PORT); });
