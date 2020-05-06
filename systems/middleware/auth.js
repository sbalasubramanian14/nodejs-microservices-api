const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, accessTokenSecret, (err, admin) => {
      if (err) {
        return res.status(403).json({ msg: "Invalid access token" });
      }

      req.admin = admin;
      next();
    });
  } else {
    res.status(401).json({ msg: "Missing auth header" });
  }
};

module.exports = authenticateJWT;
