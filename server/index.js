const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const bookRouter = require("./app_api/routes/book-router");

require("./app_api/models/db");

const PORT = 2800;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);
app.use(express.static(path.join(__dirname + "/app_cli")));

app.use("/api/book", bookRouter);

// предоставление ангуяру делатиь ройтинг
app.get("/*", function (req, res, next) {
  console.log("Reloading");
  res.sendFile("/app_cli/index.html", { root: __dirname });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log("Server started on port 2800"));
  } catch (err) {
    console.log(err);
  }
};

start().then();
