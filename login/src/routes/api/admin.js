const express = require("express");
const router = express.Router();
const { errHandler } = require("../../helpers");
const Admin =
  process.env.NODE_ENV !== "test"
    ? require("./../../models/Admin")
    : require("./../../models/Admin.stub");
const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

// login admin
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  const admin = await Admin.findAll({
    where: {
      email: email,
      password: password,
    },
  }).catch(errHandler);

  if (admin && admin.length > 0) {
    // expires after half and hour (1800 seconds = 30 minutes)
    const accessToken = jwt.sign(
      { name: admin[0].name, email: admin[0].email },
      accessTokenSecret,
      { expiresIn: "1800s" }
    );

    res.json({
      accessToken,
    });
  } else {
    res.status(400).json({ msg: "Username or password incorrect" });
  }
});

module.exports = router;
