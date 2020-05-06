process.env.NODE_ENV = "test";

const app = require("../../../index");
const System = require("./../../../src/models/System");
const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();

chai.use(chaiHttp);

require("dotenv").config();

const JWTToken = process.env.JWT_TEST_TOKEN;

describe("/POST system", () => {
  it("it should create the new system entry", (done) => {
    const system = {
      sysname: "test system",
      ip: "127.0.0.1",
    };

    chai
      .request(app)
      .post("/api/v1/systems")
      .set("Authorization", `Bearer ${JWTToken}`)
      .send(system)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("id");
        res.body.should.have.property("sysname");
        done();
      });
  });
});

describe("/PUT/:id system", () => {
  it("should not update the system info", (done) => {
    const system = {
      sysname: "new name",
      id: "newEmail@gmail.com",
    };
    const systemId = 200000000;

    chai
      .request(app)
      .put("/api/v1/systems/" + systemId)
      .set("Authorization", `Bearer ${JWTToken}`)
      .send(system)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.property("msg");
        done();
      });
  });
});
