//initialise.js
const mongoose = require("mongoose");

const Chat = require("./models/chat.js");
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
 let allChats = [ {
    from: "Aarav",
    to: "Riya",
    msg: "Did you attend today's lecture?",
    created_at: new Date(),
  },
  {
    from: "Riya",
    to: "Aarav",
    msg: "Yes, the DBMS part was confusing 😐",
    created_at: new Date(),
  },
  {
    from: " Nathan",
    to: "Sneha",
    msg: "Movie tonight?",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: " Nathan",
    msg: "Only if it's not another horror movie 😒",
    created_at: new Date(),
  },
  {
    from: "Kabir",
    to: "Ananya",
    msg: "Your internship interview went well?",
    created_at: new Date(),
  },
  {
    from: "Ananya",
    to: "Kabir",
    msg: "Yeah! They asked mostly about Python and SQL.",
    created_at: new Date(),
  },
  {
    from: "Meera",
    to: "Ishaan",
    msg: "Gym tomorrow morning?",
    created_at: new Date(),
  },];
Chat.insertMany(allChats);
//command to add this data to database = run this file = node init.js

