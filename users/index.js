const express = require("express");
const path = require("path");
const fs = require("fs");
const authenticateJWT = require("./middleware/auth");
const { catch404, errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");
const swaggerDocument2 = require("./docs/swaggerV2.json");
const logger = require("morgan");

const app = express();

// Init middlewares
app.use(
  logger("common", {
    stream: fs.createWriteStream("./access.log", { flags: "a" }),
  })
);
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api-docs/v1", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api-docs/v2", swaggerUi.serve, swaggerUi.setup(swaggerDocument2));

app.use(authenticateJWT);

// DB Connection
require("./src/database/connection");

// Bootstrap
require("./src/bootstrap")();

// User routes
app.use("/api/v2/users", require("./src/routes/api/usersV2"));
app.use("/api/v1/users", require("./src/routes/api/users"));

app.use(catch404);
app.use(errorHandler);

// App config
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

module.exports = server;
