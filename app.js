var express = require('express')
var app = express()

// Load Controllers
const SiteController = require("./controllers/SiteController.js")
const PhotosController = require("./controllers/PhotosController.js")

// Routes
app.get("/", SiteController.Index)
app.get("/about", SiteController.About)
app.get("/contact", SiteController.Contact)
app.get("/photos", PhotosController.Index)
app.get("/photos/new", PhotosController.New)

module.exports = app










