const Sequelize = require("sequelize");
let sequelize;

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

if (process.env.NODE_ENV === "test") {
  let SequelizeMock = require("sequelize-mock");
  sequelize = new SequelizeMock();
} else {
  sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_HOST,
      dialect: "mysql",
    }
  );
}

module.exports = sequelize;
global.sequelize = sequelize;
