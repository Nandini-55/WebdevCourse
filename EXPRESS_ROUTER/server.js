// Express Routers are a way to organize your express application such that our primary app.js file does not become bloated(very huge).
//It is not compulsory to use it, but it is an effective way to manage your routes.
//seperate and store similar routes in one file and just import and use them thorugh one function e.g.:-

//run - npm run dev - to run this file
const express = require("express");
const app = express();

//e.g.- you have to create a social media app in which you have two models - user and post
//you will create following routes for user CRUD:

// WITHOUT USING EXPRESS ROUTER
// app.get("/", (req, res) => {
//   res.send("Hi i am root .");
// });

//Index - users
// app.get("/users", (req, res) => {
//   res.send("GET for users ");
// });
// //SHOW route - user
// app.get("/users/:id", (req, res) => {
//   res.send("GET for show users ");
// });
// //POST route - user
// app.post("/users", (req, res) => {
//   res.send("POST for users id ");
// });
// //DELETE route - user
// app.delete("/users/:id", (req, res) => {
//   res.send("DELETE user. ");
// });

//POSTS
//  INDEX Route - post
// app.get("/posts", (req, res) => {
//   res.send("GET for post");
// });
// //  SHOW Route - post
// app.get("/posts/:id", (req, res) => {
//   res.send("GET for post ID");
// });
// // POST  Route - post
// app.post("/posts", (req, res) => {
//   res.send(" POST new post");
// });
// //  DELETE Route - post
// app.delete("/posts/:id", (req, res) => {
//   res.send(" DELETE for post id");
// });

//---------------------------------------------------------------------------------------------
//USING EXPRESS ROUTER : - reduced the length of server.js

const router = express.Router(); //creates new router object
const users = require("./routes/users.js");
const posts = require("./routes/posts.js");

app.use("/users", users); //"/users" - defines the common path in all routes
app.use("/posts", posts);

//---------------------------------------------------------------------------------------------
//COOKIES -
// HTTP cookies are small blocks of data created by the web server while a user is browsing a website and placed on user's computer or other device by the user's web browser.
// Cookies are small text files websites store on your device to remember information.
//stores info in name , value pairs

//Uses-
//Session management - (session - one interaction between client and server) , e.g.- user visits a website without login and added some items in cart , so if it switches tab due to shop some accessiores items , the website have to remeber the items added in the cart and show it if the user login
//Personalization - to show relevant content
//Tracking- user actions or web browsing habits for marketing etc. purpose.

//You see the cookies of the website through going to inspect and then application tab , it cookies tab

// Types of Cookies:
// First-Party Cookies: Set directly by the website you are currently visiting.
// Third-Party Cookies: Created by external domains (like advertisers or embedded video players) that track your activity across multiple websites.
// Session Cookies: Temporary files deleted as soon as you close your browser.
// Persistent Cookies: Files that remain on your device until they expire or you manually delete them.

// part 1:
const cookieParser = require("cookie-parser"); //npm i cookie-parser - helps to read the cookies
// app.use(cookieParser());

//reading cookies
app.get("/", (req, res) => {
  console.dir(req.cookies); // this command will only work when cookie-parser is used , else 'undefined' will be the resul
  //{ Greet: 'Good day', Cart: 'Bangles', Date: '22-05-2026' }
  res.send("Hi i am root .");
});

app.get("/greet", (req, res) => {
  let { name = "anonymous" } = req.cookies; //default name's value is anonymous // enter a name - name(case sensitive) and value - yourName in inspect's application tab and the result will be 'Hi yourName'//used in authentication
  res.send(`Hi ${name}`);
});

//sending cookies
app.get("/getcookies", (req, res) => {
  //once you goes to this path - go to inspect and applications to see the cookies
  res.cookie("Greet", "Good day"); //Name: Greet	Value: Good%20day
  //once the cookies are created , when you switches routes(in the same website) , it will still be their
  res.cookie("Cart", "Bangles");
  res.cookie("Date", "22-05-2026");
  res.send("Sent you some cookies!");
});
//part 2: signed cookies - add signed property which ensures cookie is signed(not tampered-no alteration)- it is of boolean type

app.use(cookieParser("secretcode")); //this will be used to verify the cookie is signed or not - it will be attached to each cookie //it must be difficult - this is for example
app.get("/getssignedcookies", (req, res) => {
  res.cookie("colour", "red", { signed: true }); //Name - colour ; Value - s%3Ared.lUr%2BT1qtRh1Bd8t0cUsklj6hPuj5qNsebwjYhudU%2Fv0
  res.send("Done!");
});

app.get("/verify", (req, res) => {
  // console.log(req.cookies);//{} - only returns unsigned cookies
  console.log(req.signedCookies); //returns signed cookies
  //outputs:
  // no changes - [Object: null prototype] { colour: 'red' }
  //changed value totally - [Object: null prototype] {} - changed (s%3Ared.lUr%2BT1qtRh1Bd8t0cUsklj6hPuj5qNsebwjYhudU%2Fv0) to (red)
  //changed value a bit - [Object: null prototype] { colour: false } - changed the value to (s%3Ayellow.lUr%2BT1qtRh1Bd8t0cUsklj6hPuj5qNsebwjYhudU%2Fv0)
  res.send("Done!");
});

//---------------------------------------------------------------------------------------------

//Express Session: An attempt to make our session stateful.It stores data in the server and assigns a session ID.It is an npm package. It creates a seesion middleware with options.
// The session ID is required to store it as a cookie to retain the information regarding the previous session.

//a single session has same client and server just reqest and responses increses
const session = require("express-session");
const sessionOptions = {
  secret: "mysecretstring",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions)); //it must be difficult - this is for example
//check this is working or not by going application tab in inspect - then cookies - their will be a cookie name : connect.sid- with random value -this shows session has assigned an id
//id will be same even if opened mulitple tabs or same website's different pages
//it is different in different browsers as it consider's them as different user
//the deprecated warning :
// express-session deprecated undefined resave option; provide resave option server.js:129:9
// express-session deprecated undefined saveUninitialized option; provide saveUninitialized option server.js:129:9-- are due to options of resave(automatic resave even if no change is their in the session ) and saveUninitialized(saves uninitialized session -  A session is uninitialized when it is new but not modified.)

// app.get("/test",(req,res)=>{
//   res.send("test successful");
// })

app.get("/reqcount", (req, res) => {
  //counts no. of req send by same user
  if (req.session.reqcount) {
    req.session.reqcount += 1;
  } else {
    req.session.reqcount = 1; //creates a new property
    //stored in  MemoryStore - a temporary storage - it can be used in development stage(testing) but not appropriate for production (deployed websites and others can use it), instead use session stores(their are multiple types of session stores . e.g.- cassandra-store , cluster-store, connect-dynamodb)
  }
  res.send(`You send a requeset ${req.session.reqcount} times`); //stateful response as it changes the reponse on the basis of session info.
});

//use session info :-
app.get("/register", (req, res) => {
  //enter name query in url  - e.g. - http://localhost:3000/register/?name=nandini
  let { name = "anonymous" } = req.query;
  req.session.name = name;//now the session object of request will have a name property which stores the name.
  console.log( req.session);//Session {cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }, name: 'nandini'}
  res.redirect("/hello");
});

app.get("/hello", (req, res)=>{
  res.send(`Hello 👋 , ${req.session.name}`);//here we read the value from current session 
});
//---------------------------------------------------------------------------------------------
app.listen(3000, () => {
  console.log("Server is listening to 3000. ");
});
