'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const proxyquire = require('proxyquire')
const SiteController = require("../controllers/SiteController.js")

chai.use(chaiHttp);
chai.use(sinonChai);

describe("/about SiteController.About", function(){  
  it("defines an About function on SiteController", function(){
    expect(SiteController.About).to.be.a("function")
  })

  describe("GET /about routing to SiteController.About", function(){
    it("routes '/about' to SiteController.About", function(){
      const SiteControllerSpy = sinon.spy(SiteController, "About")
      let app = require('../server');
      let server = app.listen(3001)
      chai.request(app)
        .get("/about")
        .end(function(err, res){  
          expect(SiteControllerSpy).to.have.been.calledOnce
          SiteControllerSpy.restore()
          // let app = null;
          // delete require.cache[require.resolve('../server')];
          // server.close()
          // done();
        }); 
    })
  })
})
