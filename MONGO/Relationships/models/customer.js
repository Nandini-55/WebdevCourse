const mongoose = require("mongoose");

const { Schema } = mongoose; //helps to avoid writing mongoose.Schema()
main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId, //Way to store object ID.
      ref: "Order",
    },
  ],
});

//-------------------------later part (creating middleware)------------------------------------
customerSchema.post("findOneAndDelete", async (customer) => {
  
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);//{ acknowledged: true, deletedCount: 1 }
  }
  console.log("after deletion");//after deletion
});

//------------------------------------------------------------------------------------------

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addOrders = async () => {
  let res = await Order.insertMany([
    { item: "Samosa", price: 20 },
    { item: "Chips", price: 10 },
    { item: "Chocolate", price: 40 },
  ]);

  console.log(res);
};

const addCustomer = async () => {
  let cust1 = new Customer({
    name: "Vinu",
  });

  //two ways to insert the order - i) only add the id ii) add the whole child document
  //using ii) // but by default only that object's id is stored in mongodb
  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });
  cust1.orders.push(order1);
  cust1.orders.push(order2);

  let result = await cust1.save();
  console.log(result);
};

const findCustomer = async () => {
  let result = await Customer.find({});
  console.log(result);
};

const findCustomerWithObject = async () => {
  let result = await Customer.find({}).populate("orders"); //popuate replaces the id with the real object of with that id.
  console.log(result[0]); //prints the first customer only
};

// addOrders();
// [
//   {
//     _id: ObjectId('69ddea57c245a5f637caeb19'),
//     item: 'Samosa',
//     price: 20,
//     __v: 0
//   },
//   {
//     _id: ObjectId('69ddea57c245a5f637caeb1a'),
//     item: 'Chips',
//     price: 10,
//     __v: 0
//   },
//   {
//     _id: ObjectId('69ddea57c245a5f637caeb1b'),
//     item: 'Chocolate',
//     price: 40,
//     __v: 0
//   }
// ]

// addCustomer();
//{
//   name: 'Vinu',
//   orders: [
//     {
//       item: 'Chips',
//       price: 10,
//       _id: new ObjectId('69ddea57c245a5f637caeb1a'), -- same orderid as for chips
//       __v: 0
//     },
//     {
//       item: 'Chocolate',
//       price: 40,
//       _id: new ObjectId('69ddea57c245a5f637caeb1b'),
//       __v: 0
//     }
//   ],
//   _id: new ObjectId('69ddeaacdde093509c5124b0'),
//   __v: 0
// }

// findCustomer();
//[
//   {
//     _id: ObjectId('69ddeaacdde093509c5124b0'),
//     name: 'Vinu',
//     orders: [
//       ObjectId('69ddea57c245a5f637caeb1a'),//stores the object id only
//       ObjectId('69ddea57c245a5f637caeb1b')
//     ],
//     __v: 0
//   }
// ]

// findCustomerWithObject();
//{
//   _id: new ObjectId('69ddeaacdde093509c5124b0'),
//   name: 'Vinu',
//   orders: [
//     {
//       _id: new ObjectId('69ddea57c245a5f637caeb1a'),
//       item: 'Chips',
//       price: 10,
//       __v: 0
//     },
//     {
//       _id: new ObjectId('69ddea57c245a5f637caeb1b'),
//       item: 'Chocolate',
//       price: 40,
//       __v: 0
//     }
//   ],
//   __v: 0
// }

//---------------------------------------------------------------------------------------------
// part 2 : Handling deletion - when you have to delete one entity you have two choices :
// i) only delete the entity not the other objects related to it . e.g. -deleting an insta user but not its posts , comments on others posts etc.
//ii) delete the entity and all its related objects . e.g. - deleting an insta user with its posts , comments etc.

//e.g.- 1st way - only entity gets deleted:-
const addCust = async () => {
  let newCust = new Customer({
    name: "Nandini Gupta",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 150,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
};

const delCust = async () => {
  let data = await Customer.findOneAndDelete({name:"Nandini Gupta"});
  console.log(data);
};
// addCust();
// delCust();
//e.g.- 2nd way - deleting entities with all related objects
//Using mongoose middlewares:
//two types of middelwares: i)pre - run before the query is executed ii)post - run after the query is executed

//creating middleware :
//above -> before - const Order = mongoose.model("Order", orderSchema);

addCust();

delCust();