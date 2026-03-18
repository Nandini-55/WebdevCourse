const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

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
//example using try catch
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

//New route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//Create route
app.post("/chats", async (req, res, next) => {
  try {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
      from: from,
      msg: msg,
      to: to,
      created_at: new Date(),
    });
    await newChat.save();

    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
}

//show route - contains example of throwing custom error in async function and handling it with asynWrap
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id); //if the chat would be undefined or incorret and not handled then mongoose will not through error , the error would be thrown by ejs template for chat values undefined
    //if the route is on wrong id
    if (!chat) {
      // throw new ExpressError(404, "Chat not found"); //this will not work and the site would crash as in async functions express doesn't call the 'next' function .therefore, pass the error in 'next' function
      return next(new ExpressError(404, "Chat not found")); //but ! this error will not work if the wrong id excceds its length .
    }
    res.render("show.ejs", { chat });
  })
);

//edit route
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

//update route
app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true }
    );
    res.redirect("/chats");
  })
);

//destroy route
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
  })
);

app.get("/", (req, res) => {
  console.log("root is working");
});

const handleValidationErr = (err) => {
  console.log("This was a Validation error. Please follow rules.");
  console.dir(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

//Error Handling Middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});
app.listen(8000, () => {
  console.log("Listening on port 8000");
});
