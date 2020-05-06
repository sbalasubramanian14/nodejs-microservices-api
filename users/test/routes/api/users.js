process.env.NODE_ENV = "test";

const app = require("./../../../index");
const User = require("./../../../src/models/User");
const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();

chai.use(chaiHttp);

require("dotenv").config();

const JWTToken = process.env.JWT_TEST_TOKEN;

describe("/GET user", () => {
  it("it should Get users with pagination", (done) => {
    chai
      .request(app)
      .get("/api/v2/users?page=1&pageSize=10")
      .set("Authorization", `Bearer ${JWTToken}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});

describe("/POST user", () => {
  it("it should create the new user user", (done) => {
    const user = {
      name: "New Name",
      email: "newone@gmail.com",
    };

    chai
      .request(app)
      .post("/api/v1/users")
      .set("Authorization", `Bearer ${JWTToken}`)
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("id");
        res.body.should.have.property("name");
        done();
      });
  });
});

describe("/PUT/:id user", () => {
  it("should not update the user info", (done) => {
    const user = {
      name: "new name",
      email: "newEmail@gmail.com",
    };
    const userId = 200000000;

    chai
      .request(app)
      .put("/api/v1/users/" + userId)
      .set("Authorization", `Bearer ${JWTToken}`)
      .send(user)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.property("msg");
        done();
      });
  });
});
