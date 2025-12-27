// faker - refers to a package which helps to produce fake data -- command to install -npm i @faker-js/faker
//mysql2 package - helps to connect node with database . mysql -is also one package but i can rise authentication error so just for convinience using mysql2 -- command to install - npm i mysql2
//command to connect you terminal with sql -  mysql -u root -p
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "shri_app",
  password: "Your pass",
});

let getRandomUser = () => {
  //returns an array
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//Routes to be created :-
//GET - / ->Show no. of users in db
//GET/user ->Show users'(id,email,username)-> ejs //not password
//PATCH/user/:id -> edit username
//POST -> add user
//DESTROY -> delete user

// console.log(getRandomUser());

//home route
app.get("/", (req, res) => {
  let q = `SELECT count(*) from user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
  // res.send("Welcome to home page");
});

// Show route
app.get("/user", (req, res) => {
  // res.send("Success");
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      // console.log(users);
      // res.send(users);
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some err in DB");
  }
});

//Edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `Select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some err in DB");
  }
  // res.render("edit.ejs");
});

//UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `Select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG PASSWORD!");
      } else {
        let uq = `Update user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(uq, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
      // console.log(password, newUsername);
      // res.send(user);
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

//add  user
app.get("/user/add", (req, res) => {
  res.render("add.ejs");
});
app.post("/user", (req, res) => {
  let { username, email, password } = req.body;
  let newId = uuidv4();

  let q = `INSERT INTO user (id,username,email,password) Values ('${newId}','${username}','${email}','${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    res.send("Some error in DB");
  }
});

//delete user
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `Select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("deleteuser.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some err in DB");
  }
  // res.render("edit.ejs");
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, email: formEmail } = req.body;
  let q = `Select * from user where id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password || formEmail != user.email) {
        res.send("WRONG PASSWORD or EMAIL!");
      } else {
        let dq = `DELETE FROM user WHERE id='${id}'`;
        connection.query(dq, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

app.listen("8000", () => {
  console.log("Listening to port 8000");
});

// try {
//   connection.query(q, [data], (err, result) => {
//     //user for single user
//     if (err) throw err;
//     console.log(result);
//     // console.log(result.length);
//     // console.log(result[0]);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end(); //ends connection
