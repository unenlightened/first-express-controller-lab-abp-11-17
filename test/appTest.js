'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai')
  , expect = chai.expect

const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

// describe("app.js", function(){
//   describe('/', function(){
//     it('responds with a 200', function(done){
//       chai.request(app)
//         .get("/")
//         .end(function(err, res){          
//           expect(res).to.have.status(200);
//           done();
//         });
//     });    

//     it('sends "Hello, World!" as the response', function(done){
//       chai.request(app)
//         .get("/")
//         .end(function(err, res){
//           expect(res.text).to.equal('Hello, World!');
//           done();
//         });
//     });
//   });  
// });
