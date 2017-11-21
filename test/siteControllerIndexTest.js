'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const proxyquire = require('proxyquire')
const SiteController = require("../controllers/SiteController.js")

delete require.cache[require.resolve('../server')];

chai.use(chaiHttp);
chai.use(sinonChai);

describe("SiteController.js", function(){
  it("defines and exports the SiteController object", function(){
    expect(SiteController).to.exist
  })
  
  it("defines an Index function on SiteController", function(){
    expect(SiteController.Index).to.be.a("function")
  })

  describe("GET / routing to SiteController.Index", function(){
    it("routes '/' to SiteController.Index", function(done){
      const SiteControllerSpy = sinon.spy(SiteController, "Index")
      let app2 = require('../server');
      let server = app2.listen(3002)
      chai.request(app2)
        .get("/")
        .end(function(err, res){  
          expect(SiteControllerSpy).to.have.been.calledOnce
          SiteControllerSpy.restore()
          delete require.cache[require.resolve('../server')];
          server.close()
          let app2 = null;
          done();
        }); 
    })
  })
})
