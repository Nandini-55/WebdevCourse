const mongoose = require("mongoose");
const { Schema } = mongoose; //helps to avoid writing mongoose.Schema()
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
// Implementing one-to-few relationship in MongoDB - stores child document inside the parent document  (only for few this is  good approach but not for many )
//No need to create a new model for the document which is dependent on another document. For example, in the following example, we are storing addresses for a particular user, so the addresses are assigned to the user. The user can be used specifically, like if we want to take a review of a particular user, we need that user's ID. For the address, we require the user which is assigned to it. We can't just use an address alone. We want that connectivity of that address with the user, so there is no need to create a new model for the address. That's why, in one-to-few, we will use a child document. We will create a child document inside the parent document itself.
const userSchema = new Schema({
  username: String,
  addresses: [
    //Creating an array to store multiple addresses in one user
    {
      //Object of each address being stored will look like this.  - is also a valid document and mongodb will give it a specific id too.
      _id: false, // to avoid creating a specific id for each address
      location: String,
      city: String,
    },
  ],
});
//For one-to-few relationship schemas, we can also make a separate schema for addresses and then embed it with the user schema. In this one, the address schema is simpler; it only has two to three attributes, so there is no requirement of creating a new schema for addresses and embedding it with the user. It will become more complex.
const User = mongoose.model("User", userSchema);
User.deleteMany({});
const addUser = async () => {
  let user1 = new User({
    username: "sherlockholmes",
    addresses: [
      {
        location: "221B , Bakers Street",
        city: "London",
      },
    ],
  });

  user1.addresses.push({ location: "P32 WallStreet", city: "London" }); //another way to push/add adderess
  let result = await user1.save();
  console.log(result);
};

addUser();
