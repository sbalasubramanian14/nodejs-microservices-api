const express = require("express");
const router = express.Router();
const { errHandler, paginate } = require("../../helpers");
const User = require("./../../models/User");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.findAll({
    attributes: ["id", "name", "email"],
  }).catch(errHandler);
  res.json(users);
});

// Get single user
router.get("/:id", async (req, res) => {
  const user = await User.findAll({
    where: {
      id: req.params.id,
    },
  }).catch(errHandler);

  if (user && user.length > 0) {
    res.json(user);
  } else {
    res.status(400).json({ msg: "user not found" });
  }
});

// Create user
router.post("/", async (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
  };

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  const user = await User.create(newUser).catch(errHandler);

  if (user) {
    res.json(user);
  } else {
    res.status(500).json({ msg: "internal db error occoured" });
  }
});

// Update user
router.put("/:id", async (req, res) => {
  const user = await User.findAll({
    where: {
      id: req.params.id,
    },
  }).catch(errHandler);

  if (user && user.length > 0) {
    const updUser = req.body;
    const result = await User.update(
      {
        name: updUser.name ? updUser.name : user[0].name,
        email: updUser.email ? updUser.email : user[0].email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).catch(errHandler);

    res.json({ msg: "user updated", updUser });
  } else {
    res.status(400).json({ msg: "user not found" });
  }
});

// Delete Member
router.delete("/:id", async (req, res) => {
  const user = await User.findAll({
    where: {
      id: req.params.id,
    },
  }).catch(errHandler);

  if (user && user.length > 0) {
    const user = User.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      msg: "Member deleted",
      user,
    });
  } else {
    res.status(400).json({ msg: "user not found" });
  }
});

module.exports = router;
