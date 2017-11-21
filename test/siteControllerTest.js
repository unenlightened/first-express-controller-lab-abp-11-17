'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const SiteController = require("../controllers/SiteController.js");

let SiteControllerAboutSpy;
let SiteControllerIndexSpy;
let SiteControllerContactSpy;

if (SiteController.About){
  SiteControllerAboutSpy = sinon.spy(SiteController, "About")  
};
if (SiteController.Index){
  SiteControllerIndexSpy = sinon.spy(SiteController, "Index")
};
if (SiteController.Contact){
  SiteControllerContactSpy = sinon.spy(SiteController, "Contact")  
};

const app = require('../server');
const server = app.listen(3001)

chai.use(chaiHttp);
chai.use(sinonChai);

describe("SiteController.js", function(){  
  it("defines an Index function on SiteController", function(){
    expect(SiteController.Index).to.be.a("function")
  })

  describe("GET / routing to SiteController.Index", function(){
    it("routes '/' to SiteController.Index", function(done){
      chai.request(app)
        .get("/")
        .end(function(err, res){  
          expect(SiteControllerIndexSpy).to.have.been.calledOnce
          SiteControllerIndexSpy.restore()
          done();
        }); 
    })
  })

  describe("GET / routing to SiteController.Index", function(){
    it("routes '/' to SiteController.Index", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/")
        .end(function(err, res){
          const viewRendered = spy.getCall(0).args[0];
      
          expect(viewRendered).to.be.eql('site/index');
      
          spy.restore();
          done()
        });
    })
  })

  it("defines an About function on SiteController", function(){
    expect(SiteController.About).to.be.a("function")
  })

  describe("GET / routing to SiteController.About", function(){
    it("routes '/about' to SiteController.About", function(done){
      chai.request(app)
        .get("/about")
        .end(function(err, res){  
          expect(SiteControllerAboutSpy).to.have.been.calledOnce
          SiteControllerAboutSpy.restore()
          done();
        }); 
    })
  })

  describe("GET /about routing to SiteController.About", function(){
    it("routes '/about' to SiteController.About", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/about")
        .end(function(err, res){
          const viewRendered = spy.getCall(0).args[0];
      
          expect(viewRendered).to.be.eql('site/about');
      
          spy.restore();
          done()
        });
    })
  })  

  it("defines an Contact function on SiteController", function(){
    expect(SiteController.Contact).to.be.a("function")
  })

  describe("GET /contact routing to SiteController.Contact", function(){
    it("routes '/contact' to SiteController.Contact", function(done){
      chai.request(app)
        .get("/contact")
        .end(function(err, res){  
          expect(res.text).to.contain("Contact Page")
          done();
        }); 
    })
  })

  describe("GET /contact routing to SiteController.Contact", function(){
    it("routes '/contact' to SiteController.Contact", function(done){
      const spy = sinon.spy(app, 'render');
      
      chai.request(app)
        .get("/contact")
        .end(function(err, res){
          const viewRendered = spy.getCall(0).args[0];
      
          expect(viewRendered).to.be.eql('site/contact');
      
          spy.restore();
          done()
        });
    })
  })

})
