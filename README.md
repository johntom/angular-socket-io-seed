# Angular Socket.io Seed

This fork is for testing angular 1.0.4 with angular.ui and bootstrap.

## How to use it

Clone the angular-socket-io-seed repository and start hacking!

### Running the app

Runs like a typical express app:

    node app.js

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

## Example Application

I created a [simple instant messaging application](https://github.com/btford/angular-socket-io-im)
and wrote a [blog post](http://briantford.com/blog/angular-socket-io.html) walking through the app to
illustrate using the seed.

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
      app.css           --> default stylesheet
      navagator.css     --> default stylesheet
      bootstrap-combined.min.css         --> bootstrap v2.3.0
      angular-ui.css.css-->  stylesheet
      jquery-ui.css     -->  stylesheet
      select2.css       -->  stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
            angular/
            angular.js            --> the latest angular js 1.0.4
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
            angular103/
            angular.js          --> the latest angular js 1.0.3 i=used for teset
            /jquery
            /bootstrap
        
    routes/
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade
        faq.jade        --> test of accordion. 
        select2.jade    --> test of select2



## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.
