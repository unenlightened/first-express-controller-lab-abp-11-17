const SiteController = {};

SiteController.Index = function(req, resp){

  resp.send("Hi.")
};

SiteController.About = function(req, resp){

};

SiteController.Contact = function(req, resp){

};

module.exports = SiteController;