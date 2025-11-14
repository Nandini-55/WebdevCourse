//overview of apis:
//GET /posts - index api (main api gives all posts data) -to get fata of all posts
//POST /posts - create api -  to add a new post - require two routes (one to serve the form and another to add the new post)
//GET /posts/:id - view api - to get one post
//PATCH /posts/:id - update - to update specific post
//DELETE /posts/:id -destroy (destroy path) - to delete specific post

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
// uuidv4();  - used to create new id
app.use(express.urlencoded({ extended: true })); //helps to decode/parse the url encoded data from post request and make it understandable to express
app.use(methodOverride("_method")); //helps to override post or get requests from forms in html
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//view folder - stores ejs files
app.use(express.static(path.join(__dirname, "public")));
//public folder - stores consant files -e.g- js and css

//to replicate the missing database useing arrays-
let posts = [
  {
    id: uuidv4(),
    username: "Nandini",
    content: "Victory 🏆",
  },
  {
    id: uuidv4(),
    username: "Neervikas",
    content: "Growth with clearity in mind 🌿",
  },
  {
    id: uuidv4(),
    username: "Boss",
    content: "Hardwork is important to achive success 🧿🖤",
  },
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("new.ejs"); //get request data in form of query sting
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  let newId = uuidv4();
  posts.push({ newId, username, content }); //added post in array
  // console.log(req.body);
  // res.send("Post request working");
  res.redirect("/posts"); //redirects the page after submittion(by default sends get request to same url) -arugment->url where to direct- sends status starts with 3 (indicated a redirect)
}); //gets data from request body
app.get("/posts/:id", (req, res) => {
  //this will not itself creates a id for the post therefore to do that use UUID (Universal Unique IDentifier )package
  // :id - helps to get the url using variable(e.g.- id is different for each user)
  let { id } = req.params;
  // console.log(id);
  let post = posts.find((p) => id === p.id); //finds the posts with given id
  console.log(post);
  res.render("show.ejs", { post });
  // res.send("Request working");
});

app.patch("/posts/:id", (req, res) => {
 
  let { id } = req.params;
  // console.log(id);
  let newContent = req.body.content;
  
  //  console.log(newContent);
  let post = posts.find((p) => id === p.id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  post.content = newContent;
   console.log('Updates ahead!!');
  console.log(post);
  // res.send("Patch request working");
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

app.delete("/posts/:id",(req,res)=>{
  let {id} =req.params;
  posts = posts.filter((p)=> id !== p.id);//extracted posts which are not be deleted and saved in posts
  res.redirect("/posts");

})

app.listen(port, () => {
  console.log("Listening to port :", port);
});
