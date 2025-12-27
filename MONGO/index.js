const mongoose = require("mongoose");

main()
  .then((res) => {
    // console.log(res);
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test"); // mongoose help js file to cennect with mongodb database

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} //all the operational code is written outside this function even if the connection is not yet setup , because mongoose uses operation buffering - Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to MongoDB.

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema); //test> show collections  , output->users

//inserting data -
//one document
// const user1 = new User({ name: "Adam", email: "adam@yahoo,in", age: 48 }); //created object in mongoose(mongoose assign a id to each object ) but to create it in mongodb use next line:-
// user1.save(); //created object in mongodb //returns  a promise

// const user2 = new User({ name: "Eve", email: "eve@yahoo,in", age: 27 });
// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//insert many
// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Bruce", email: "bruce@gmail.com", age: 47 },
//   { name: "Peter", email: "peter@gmail.com", age: 30 },
// ]).then((data) => {
//   console.log(data);
// });

//search for data :
//using find method - find method doesn't returns a promise but the returned query object is thennable(have a .then())
// User.find({ age: { $gt: 47 } })
//   .then((res) => {
//     console.log(res[0].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //using findById
// User.findById({_id:"6948f8f97a84de16d9de61d5" })
//   .then((res) => {
//     console.log(res.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update

// User.updateOne({name:"Bruce"},{age:49})//for multiple can use - updateMany
//   .then((res) => {
//     console.log(res); //output->
// // {  acknowledged: true,
// //   modifiedCount: 1,
// //   upsertedId: null,
// //   upsertedCount: 0,
// //   matchedCount: 1
// // }
//   })
//   .catch((err) => {
//     console.log(err);
//   });//as this update method returns a metadata object , therefore , to get the updated data another method is used -> .findOneAndUpdate

// User.findOneAndUpdate({name:"Bruce"},{age:37},{new:true})//this method will return the query object of  the updated document but the older version not the updated one -- to get the updated document use "new" option and make it true , it is false by defualt
// .then((res) => {
//   console.log(res); //output->{
//   _id: new ObjectId('6949022c9c3a34040db54fa7'),
//   name: 'Bruce',
//   email: 'bruce@gmail.com',
//   age: 35,
//   __v: 0
// }

// })
// .catch((err) => {
//   console.log(err);
// });

//findByIdAndUpdate
//  User.findByIdAndUpdate({_id:"6949022c9c3a34040db54fa7"},{age:39},{new:true})//this method will return the query object of  the updated document -- as "new" option value is passed true
// .then((res) => {
//   console.log(res); //output->{
//   _id: new ObjectId('6949022c9c3a34040db54fa7'),
//   name: 'Bruce',
//   email: 'bruce@gmail.com',
//   age: 39,
//   __v: 0
// }
// })
// .catch((err) => {
//   console.log(err);
// });

//Deleting documents
// User.deleteOne({ name: "Bruce" }) //this method will return the query object  //to delete moultiple use 'deleteMany'
//   .then((res) => {
//     console.log(res); //output-> { acknowledged: true, deletedCount: 1 } //to have the deleted object as result use "findOneAndDelete" or "findByIdAndDelete"
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findByIdAndDelete({ _id: "6948f8f97a84de16d9de61d5" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
