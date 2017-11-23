'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const SiteController = require("../controllers/SiteController.js");

let SiteControllerAbout;
let SiteControllerIndex;
let SiteControllerContact;

if (SiteController.About){
  SiteControllerAbout = sinon.spy(SiteController, "About")  
};
if (SiteController.Index){
  SiteControllerIndex = sinon.spy(SiteController, "Index")
};
if (SiteController.Contact){
  SiteControllerContact = sinon.spy(SiteController, "Contact")  
};

const app = require('../server');
const server = app.listen(3001)

chai.use(chaiHttp);
chai.use(sinonChai);

describe("SiteController.js", function(){  


  describe("GET / routing to SiteController.Index", function(){
    it("defines an Index function on SiteController in 'controllers/SiteController.js'", function(){
      expect(SiteController.Index, "Did you define SiteController.Index? Did you export SiteController?")
          .to.be.a("function");
    })   
     
    it("routes '/' to SiteController.Index in app.js", function(done){
      chai.request(app)
        .get("/")
        .end(function(err, res){  
          expect(SiteControllerIndex, "Is app.get('/') handled by SiteController.Index?")
              .to.have.been.calledOnce;

          SiteControllerIndex.restore()
          done();
        }); 
    })

    it("SiteController.Index renders site/index.ejs", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/")
        .end(function(err, res){
          const renderCalls = spy.getCall(0)
          expect(renderCalls, "Does resp render site/index.ejs?")
               .to.not.be.null

          const viewRendered = renderCalls.args[0];
          expect(viewRendered, "You sure you are resp.render('site/index')?").to.be.eql('site/index');
      
          spy.restore();
          done()
        });
    })    
  })



  describe("GET / routing to SiteController.About", function(){
    it("defines an About function on SiteController", function(){
      expect(SiteController.About, "Did you define SiteController.About?")
           .to.be.a("function")
    })    

    it("routes '/about' to SiteController.About in app.js", function(done){
      chai.request(app)
        .get("/about")
        .end(function(err, res){  
          expect(SiteControllerAbout, "Is app.get('/about') handled by SiteController.About?")
              .to.have.been.calledOnce
          SiteControllerAbout.restore()
          done();
        }); 
    })
    
    it("SiteController.About renders site/about.ejs", function(done){
      const spy = sinon.spy(app, 'render');

      chai.request(app)
        .get("/about")
        .end(function(err, res){
          const renderCalls = spy.getCall(0)
          expect(renderCalls, "Does resp render site/about.ejs?")
               .to.not.be.null

          const viewRendered = renderCalls.args[0];      
          expect(viewRendered, "You sure you are resp.render('site/about.ejs')?")
              .to.be.eql('site/about');
      
          spy.restore();
          done()
        });
    })    
  })

  describe("GET /contact routing to SiteController.Contact", function(){
    it("defines an Contact function on SiteController", function(){
      expect(SiteController.Contact, "Did you define SiteController.Contact?")
           .to.be.a("function")
    })

    it("routes '/contact' to SiteController.Contact in app.js", function(done){
      chai.request(app)
        .get("/contact")
        .end(function(err, res){  
          expect(SiteControllerContact, "Is app.get('/contact') handled by SiteController.Contact?")
              .to.have.been.calledOnce
          SiteControllerContact.restore()
          done();
        }); 
    })
    
    it("SiteController.Contact renders site/contact.ejs", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/contact")
        .end(function(err, res){
          const renderCalls = spy.getCall(0)
          expect(renderCalls, "Does resp render site/contact.ejs?")
               .to.not.be.null

          const viewRendered = renderCalls.args[0];      
          expect(viewRendered, "You sure you are resp.render('site/contact.ejs')?")
              .to.be.eql('site/contact');
      
          spy.restore();
          done()
        });
    })

  })

})
