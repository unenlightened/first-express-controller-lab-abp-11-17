const SiteController = {};

// Define Your Controller Actions for SiteController Below
SiteController.Index = function(req, resp){
  resp.render("site/index")
}
SiteController.About = function(req, resp){
  resp.render("site/about")
}
SiteController.Contact = function(req, resp){
  resp.render("site/contact")
}

module.exports = SiteController;