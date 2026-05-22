const express = require("express");
const router = express.Router();

//  INDEX Route - post
router.get("/", (req, res) => {
  res.send("GET for post");
});
//  SHOW Route - post
router.get("/:id", (req, res) => {
  res.send("GET for post ID");
});
// POST  Route - post
router.post("/", (req, res) => {
  res.send(" POST new post");
});
//  DELETE Route - post
router.delete("/:id", (req, res) => {
  res.send(" DELETE for post id");
});

module.exports = router;//router stores all the routes
