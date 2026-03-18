//TODO - Create an admin route and send an custom error with a 403 status code.
const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

app.use((req, res, next) => {
  let { password } = req.query;
  if (password === "HiAdmin") {
    next();
  }
  throw new ExpressError(403, "You are not the admin 🤨.");
});

app.get("/", (req, res) => {
  res.send("Hi!I am root");
});

app.get("/admin", (req, res) => {
  res.send("Your secret is : You forget to achive your goal 😢 ");
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("Listening on 8080 port.");
});
