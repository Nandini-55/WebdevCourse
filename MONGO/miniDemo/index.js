const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
main()
  .then((res) => {
    // console.log(res);
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp"); // mongoose help js file to cennect with mongodb database

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat({
//   from: "Nandini",
//   to: "Vinu",
//   msg: "Good morning",
//   created_at: new Date(), // js pre installed function to generate random dates
// });
// chat1
//   .save()
//   .then((res) => {
//     console.log(res);//{
// //   from: 'Nandini',
// //   to: 'Vinu',
// //   msg: 'Good morning',
// //   created_at: 2025-12-23T18:32:48.025Z,//UTC Format
// //   _id: new ObjectId('694ae05062643a13feec554e'),
// //   __v: 0
// // }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

//New route
app.get("/chats/new", async (req, res) => {
  res.render("new.ejs");
});

//Create route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      console.log("chat added");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

//update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});

//destroy route
app.delete("/chats/:id", async (req, res) => {
  let {id}=req.params;
  let deletedChat =  await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
});

app.get("/", (req, res) => {
  console.log("root is working");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
