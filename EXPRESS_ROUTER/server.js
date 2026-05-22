// Express Routers are a way to organize your express application such that our primary app.js file does not become bloated(very huge).
//It is not compulsory to use it, but it is an effective way to manage your routes.
//seperate and store similar routes in one file and just import and use them thorugh one function e.g.:-

//run - npm run dev - to run this file
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi i am root .");
});

//e.g.- you have to create a social media app in which you have two models - user and post
//you will create following routes for user CRUD:

// WITHOUT USING EXPRESS ROUTER

//Index - users
// app.get("/users", (req, res) => {
//   res.send("GET for users ");
// });
// //SHOW route - user
// app.get("/users/:id", (req, res) => {
//   res.send("GET for show users ");
// });
// //POST route - user
// app.post("/users", (req, res) => {
//   res.send("POST for users id ");
// });
// //DELETE route - user
// app.delete("/users/:id", (req, res) => {
//   res.send("DELETE user. ");
// });

//POSTS
//  INDEX Route - post
// app.get("/posts", (req, res) => {
//   res.send("GET for post");
// });
// //  SHOW Route - post
// app.get("/posts/:id", (req, res) => {
//   res.send("GET for post ID");
// });
// // POST  Route - post
// app.post("/posts", (req, res) => {
//   res.send(" POST new post");
// });
// //  DELETE Route - post
// app.delete("/posts/:id", (req, res) => {
//   res.send(" DELETE for post id");
// });

//---------------------------------------------------------------------------------------------
//USING EXPRESS ROUTER : - reduced the length of server.js

const router = express.Router(); //creates new router object
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

app.use("/users", users); //"/users" - defines the common path in all routes

app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is listening to 3000. ");
});
