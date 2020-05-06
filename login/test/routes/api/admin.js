process.env.NODE_ENV = "test";

const app = require("../../../index");
const Admin = require("./../../../src/models/Admin");
const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();

chai.use(chaiHttp);

describe("/POST login", () => {
  it("it should not login the admin", (done) => {
    const admin = {
      email: "admin",
      password: "admin@123",
    };

    chai
      .request(app)
      .post("/api/v1/login")
      .send(admin)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.property("msg");
        done();
      });
  });
});
