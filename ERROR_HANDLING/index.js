//middlewares - functions in express , plays between the server recieves the request and sends the response - must be written before sending response
//middlewares runs irrespective of the request body or how the request is structured - even if the path entered is wrong
//properties -
//o can access request and response body
//o can be chanined(call another middleware)
//o can send reponse
//o if path no defined , than will be run over every request

//used to perform next steps over request

const express = require("express");
const app = express();

const ExpressError = require("./ExpressError");

// app.use((req,res)=>{//this will run infinitly as their is no next step defined after printing hi!
//     console.log("Hi!");
// });//custom middleware

// app.use((req, res) => {
//   //this can access request
//   let { query } = req.query;
//   console.log(query);
//   console.log("Hi!");
// }); //custom middleware

// app.use((req, res) => {
//   //this can send reponse

//   console.log("Hi!");
//   res.send("Middleware ends"); //after this nothing will execute even the route has some different reponse
// }); //custom middleware

// ---------------------------------Using next------------------------------------------------

// The next middleware function is commonly denoted by a variable named next.

// app.use((req, res, next) => {
//   console.log("1st middleware");
//   next();
//   console.log("This is after next().");//this will run after response will be sent as the next funcitons completes its function till end - but this is not a good practice so avoid this as next is considered as the end of middleware - therefore , developers use 'return' before next - so even if anycode is written after next that would not be executed
// });

//output - 1st middleware
// 2nd middleware
// This is after next().

// app.use((req, res, next) => {
//   console.log("2nd middleware");
//   next();
// });
// If the current middleware function does not end the request-response
// cycle, it must call next() to pass control to the next middleware function.

// ------------------------------ Creating utility middleware(useful)-------------------------
///logger - helps to log(print useful info over console)-e.g.-request type(get,post,put,etc.)or time(to record reponse time), hostname -- usually use pakage to do so which is morgan

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString(); //manipulating req body - new Date()- helps to convert this format'1767431101289' into this - 'Sat Jan 03 2026 14:36:11 GMT+0530 (India Standard Time)'
  console.log(req.method, req.hostname, req.path, req.time); //output - GET localhost /random
  next();
});

//-----------------------------path with middlewares ------------------------------------------
//app.use has two parameters - path(default-"/"- root path - refers to all paths) , path pattern(middleware , array of middlewares ,multiple middlewares seperated with commas, or combination of all )

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
});
// //for error -404
// app.use((req, res) => {
//   res.status(404).send("Page not found!"); //res.body has these info
// });-- must be used at last

//------------------------ API token check -if token(inside the path as query string) is right then the info will be given -----
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("ACCESS DENIED!");//will not work as next()- leads to the reponse in the route
// });-- can be passed as a fucntion in app.get -

// const checkToken = (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   } else {
//     res.send("ACCESS DENIED!");
//   } //will not work as next()- leads to the reponse in the route
// };
// app.get("/api", checkToken, (req, res) => {
//   res.send("Here is the gift 🎁 ");
// });
//------------------------Error handling -----------------------------------------------------
//express - has a default error handler-middleware function added at the end of the middleware function stack- which sends the stack trace of the error in response as res.statuMessage and also give res.statusCode-500

app.get("/err", (req, res) => {
  abcd = abcd; //not a correct way to through errors. therefore, use error Class for custom errors
});

app.use((err, req, res, next) => {
  // console.log(err);//prints the stack trace and the site just being in loading state
  console.log("-------------ERROR--------------");
  // next(); //this will search for a non-error handlinig middlewares- therefore  prints - Cannot GET/err
  next(err); //to trigger the next error handling middleware (custom or the express default)
});
// app.use((err, req, res, next) => {
//   console.log("-------------ERROR 2middleware--------------");
//   next(err); //to trigger the next error handling middleware (custom or the express default)
// });

//------------custom error(error class created in another file(ExpressError.js)----------------

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED!");
  }
};
app.get("/api", checkToken, (req, res) => {
  res.send("Here is the gift 🎁 ");
});

app.get("/", (req, res) => {
  res.send("Hi!I am root.");
});

app.get("/random", (req, res) => {
  res.send("Random route");
});

app.use((err, req, res, next) => {
  console.log("-------------ERROR--------------");
  // res.send(err); //to trigger the next error handling middleware (custom or the express default)-- output - {"status":401,"message":"ACCESS DENIED!"}- ran custom error - to avoid this extract the status and message from error and print it

  let { status = 500, message = "Some error occured" } = err; //if any other error got generated - then it will have no status therefore, to set value if not give like 500 in this case
  res.status(status).send(message);
});

//More concepts regarding Async funcion error handling and asyncWrap is used in MONGO/miniDemo/index.js

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
