// define object
const SiteController = {};

//attaching functions
SiteController.Index = function(req, resp){
  resp.render('site/index')
}

SiteController.About = function(req, resp){
  resp.render('site/about')
}

SiteController.Contact = function(req, resp){
  resp.render('site/contact')
}

//export controller
module.exports = SiteController
