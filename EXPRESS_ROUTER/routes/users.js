const express = require("express");
const router = express.Router();

//Index - users
router.get("/", (req, res) => {
  res.send("GET for users ");
});
//SHOW route - user
router.get("/:id", (req, res) => {
  res.send("GET for show users ");
});
//POST route - user
router.post("/", (req, res) => {
  res.send("POST for users id ");
});
//DELETE route - user
router.delete("/:id", (req, res) => {
  res.send("DELETE user. ");
});

module.exports = router;//router stores all the routes