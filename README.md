# Your First Express Controller Lab

## Objectives

1. Build an Express controller.
2. Define 3 actions for the controller.
3. Render the appropriate views in each action.
4. Mount the controller in the app.
5. Draw routes for the app to the controller actions.

## Instructions

Your goals is to build an express application using the C (controllers) in the M-V-C paradigm of application development. Your site will respond to 3 URLs, each mapping to a discrete controller action defined as a function in the `SiteController` class.

1. `GET '/'` should map to `SiteController.Index` and render `site/index` creating a Home Page.
2. `GET '/about'` should map to `SiteController.About` and render `site/about` creating an About Page.
3. `GET '/contact'` should map to `SiteController.Contact` and render `'site/contact` creating a Contact Page.

We've given you the views for this application in `views/site`, so you don't need to worry about them.

Build the controller in `controllers/SiteController.js` by defining an object for `SiteController` and attaching functions to handle the express routes directly onto that object.

Remember, functions that are valid express handlers need to accept at least two arguments, generally called `req` and `resp`. These functions become the controller's actions. Each function should use the `resp` to render the apporpriate view.

Finally, make sure to export the controller so you can mount the controller in `app.js` using `require`. Then create the routing table in `app.js` using the express `app` constant and passing each URL to the appropriate controller action.

You can run the tests with `learn`. The tests specify the full flow for each URL sequentially.

You can run the server with `npm start` and preview it in your browser.
