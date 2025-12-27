// this is an example of schema validation  - basically, rules for schema

const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  //this schema will be followed whle insertion .if any update occurs in any document the schema validations will not be followed by default , to follow the schema use option "runValidators:true"
  title: {
    type: String,
    required: true, //similar to not null in sql
    maxlength: 20, //update2 -- can give error - title: ValidatorError: Path `title` (`Gone girllllllllllllllllllllll...`, length 71) is longer than the maximum allowed length (20).
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1,"Price is too low to sell"], //update 3(min value) , update 6 (adding a custom error message )
  },
  discount: {
    //updated after this part(//price as string but no.)
    type: Number,
    default: 0, //update1-even if the discount is not added to the data their will be dafult value to all the documents
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"], //update 4//no other category can be defined , it will thorw an error if do so - category: ValidatorError: `Comic` is not a valid enum value for path `category`.
  },
  genre: [String], //update 5 - can store array
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Mathematics",
//   author: "RD Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//without title -- errors: {  title: ValidatorError: Path `title` is required.
//   let book1 = new Book({
//   author: "RD Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);//errors: { title: ValidatorError: Path `title` is required.
//   });

//without author - no error-
//   let book1 = new Book({
//   title: "Mathematics X",
//   price: 1100,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);//{
// //   title: 'Mathematics X',
// //   _id: new ObjectId('694a235d2819b1a989fc5a85'),
// //   __v: 0
// // }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//price as string and alphabet --CastError: Cast to Number failed for value "Abc" (type string) at path "price"
// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "RD Sharma",
//   price: "Abc",
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);//CastError: Cast to Number failed for value "Abc" (type string) at path "price"
//   });//as mongoose type cast the taken data into the type assigned in schema

//price as string but no. - no error - as the value is able to type cast to number
//   let book1 = new Book({
//   title: "Mathematics IX",
//   author:"RD sharma",
//   price: "1200",
// });

//if maxlength of title got excceded - error -title: ValidatorError: Path `title` (`Gone girllllllllllllllllllllll...`, length 71) is longer than the maximum allowed length (20).
// let book1 = new Book({
//   title:
//     "Gone girlllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllls",
//   price: "499",
// });

//if price is less then minimum value - error - price: ValidatorError: Path `price` (-10) is less than minimum allowed value (1).
// let book1 = new Book({
//   title:
//     "Gone girls",
//   price: -10,
// });

//if any other category defined than enum values  -error -category: ValidatorError: `Comic` is not a valid enum value for path `category`.
// let book1 = new Book({
//   title: "Marvels Comic",
//   price: 399,
//   category: "Comic",
// });

//storing string array
// let book1 = new Book({
//   title: "Marvels Comic v2",
//   price: 499,
//   genre:["comics","fiction","sci-fi"],
// });
// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//updations in document - if any update occurs in any document the schema validations will not be followed by default , to follow the schema use option "runValidators:true"
// Book.findByIdAndUpdate({ _id: "694ad3bb834f4c9c8cd7f8ac" }, { price: -550 },{new:true})
//   .then((res) => {
//     console.log(res);//-- {
// //   _id: new ObjectId('694ad3bb834f4c9c8cd7f8ac'),
// //   title: 'Marvels Comic v2',
// //   price: -550,//here the value got negative even we had set min value to 1 in schema 
// //   discount: 0,
// //   genre: [ 'comics', 'fiction', 'sci-fi' ],
// //   __v: 0
// // }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//custom error message -

let book1 = new Book({
  title: "Marvels Comic v3",
  price: -499,// price: ValidatorError: Price is too low to sell
});
book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // console.log(err);
    console.log(err.errors.price.properties.message);//to print the message only- Price is too low to sell
  });

//to avoid the above condition use:-
// Book.findByIdAndUpdate({ _id: "694ad3bb834f4c9c8cd7f8ac" }, { price: -500 },{new:true , runValidators:true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);//-price: ValidatorError: Path `price` (-500) is less than minimum allowed value (1).
//   });

