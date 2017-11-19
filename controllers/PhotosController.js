const PhotosController = {}

PhotosController.Index = function(req, resp){

  resp.render("photos/index")
}

PhotosController.Show = function(req, resp){

  resp.render("photos/show")
}

PhotosController.New = function(req, resp){

  resp.render("photos/new")
}

PhotosController.Create = function(req, resp){

  // Hmmm...
}

module.exports = PhotosController

