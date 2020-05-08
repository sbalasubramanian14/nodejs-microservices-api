const express = require("express");
const router = express.Router();
const { errHandler, paginate } = require("../../helpers");
const User =
  process.env.NODE_ENV != "test"
    ? require("./../../models/User")
    : require("./../../models/User.stub");

// Get all users with pagination
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);

  const users = await User.findAll({
    attributes: ["id", "name", "email"],
    ...paginate({ page, pageSize }),
  }).catch(errHandler);

  res.json(users);
});

module.exports = router;
