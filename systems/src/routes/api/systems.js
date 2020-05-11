const express = require("express");
const router = express.Router();
const { errHandler, paginate } = require("../../helpers");
const System = require("../../models/System");
const compression = require("compression");

// Get all systems
router.get("/", compression(), async (req, res) => {
  const page = parseInt(req.query.page);
  const pageSize = parseInt(req.query.pageSize);

  const systems = await System.findAll({
    ...paginate({ page, pageSize }),
  }).catch(errHandler);

  res.json(systems);
});

// Get single System
router.get("/:id", async (req, res) => {
  const system = await System.findAll({
    where: {
      id: req.params.id,
    },
  }).catch(errHandler);

  if (system && system.length > 0) {
    res.json(system);
  } else {
    res.status(400).json({ msg: "System not found" });
  }
});

// Create System
router.post("/", async (req, res) => {
  const newSystem = {
    sysname: req.body.sysname,
    ip: req.body.ip,
  };

  if (!newSystem.sysname || !newSystem.ip) {
    return res
      .status(400)
      .json({ msg: "Please include a sysname and ip address" });
  }

  const system = await System.create(newSystem).catch(errHandler);

  if (system) {
    res.json(system);
  } else {
    res.status(500).json({ msg: "internal db error occoured" });
  }
});

// Update System
router.put("/:id", async (req, res) => {
  const system = await System.findAll({
    where: {
      id: req.params.id,
    },
  }).catch(errHandler);

  if (system && system.length > 0) {
    const updSystem = req.body;
    const result = await System.update(
      {
        name: updSystem.sysname ? updSystem.sysname : system[0].name,
        email: updSystem.ip ? updSystem.ip : system[0].email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).catch(errHandler);

    res.json({ msg: "System updated", updSystem });
  } else {
    res.status(400).json({ msg: "System not found" });
  }
});

// Delete System
router.delete("/:id", async (req, res) => {
  const system = await System.findAll({
    where: {
      id: req.params.id,
    },
  }).catch(errHandler);

  if (system && system.length > 0) {
    const system = system.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      msg: "Member deleted",
    });
  } else {
    res.status(400).json({ msg: "System not found" });
  }
});

module.exports = router;
