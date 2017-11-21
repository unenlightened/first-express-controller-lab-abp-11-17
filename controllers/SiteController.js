const SiteController = {};

SiteController.Index = function(req, resp){

  resp.render("site/index")
};

SiteController.About = function(req, resp){

  resp.render("site/about")
};

SiteController.Contact = function(req, resp){

};

module.exports = SiteController;