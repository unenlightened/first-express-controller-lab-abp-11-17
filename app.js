var express = require('express')
var app = express()

// Load Controllers
const SiteController = require("./controllers/SiteController.js")

// Routes
app.get("/", SiteController.Index)
app.get("/about", SiteController.About)
app.get("/contact", SiteController.Contact)

module.exports = app










