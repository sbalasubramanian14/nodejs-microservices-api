const createError = require("http-errors");

// catch 404 and forward to error handler
const catch404 = (req, res, next) => {
  next(createError(404));
};

const errorHandler = (req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

module.exports = { catch404, errorHandler };
