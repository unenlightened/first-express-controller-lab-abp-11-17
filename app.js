var express = require('express')
var app = express()

// load controller
const SiteController = require('./controllers/SiteController')

// routing table
app.get('/', SiteController.Index)
app.get('/about', SiteController.About)
app.get('/contact', SiteController.Contact)

module.exports = app
