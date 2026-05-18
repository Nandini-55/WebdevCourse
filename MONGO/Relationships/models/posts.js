//One to squillions
//Store a reference of parent document inside the child
//e.g.- one user has multiple posts - instead of storing posts' ids in user , store user's reference in each post
const mongoose = require("mongoose");

const { Schema } = mongoose; //helps to avoid writing mongoose.Schema()
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new User({
    username: "vinu48",
    email: "vinu488@gmail.com",
  });

  let post1 = new Post({
    content: "Always be happy.",
    likes: 55,
  });

  let post2 = new Post({
    content: "Went to Edinburgh <3",
    likes: 555,
  });

  post1.user = user1;
  post2.user = user1;

  await user1.save();
  let res = await post1.save();
  let res2 = await post2.save();
  console.log(res);
  console.log(res2);
};

// addData();

const getData = async ()=>{

    let res = await Post.findOne({}).populate("user","username");//only returns username of the user
    console.log(res);
}

getData();
// {
//   _id: new ObjectId('69de413b7e384a72bb0ef3b5'),
//   content: 'Always be happy.',
//   likes: 55,
//   user: { _id: new ObjectId('69de413b7e384a72bb0ef3b4'), username: 'vinu48' },
//   __v: 0
// }

