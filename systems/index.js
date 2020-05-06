const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const authenticateJWT = require("./middleware/auth");
const { catch404, errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

const app = express();

// Init middleware
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Set static folder
app.use(express.static(path.join(__dirname, "public")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(authenticateJWT);
// DB Connection
require("./src/database/connection");

// Bootstrap
require("./src/bootstrap")();

// User routes
app.use("/api/v1/systems", require("./src/routes/api/systems"));

app.use(catch404);
app.use(errorHandler);

// App config
const PORT = process.env.PORT || 5002;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

module.exports = server;
