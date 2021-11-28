const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
const User = require("./models/User");
const Payment = require("./models/Payment");
const Profile = require("./models/Profile");
const UserRoute = require("./Routes/User");
const PaymentRoute = require("./Routes/Payment");
const ProfileRoute = require("./Routes/Profile");
const auth = require('./middleware/auth');
require("dotenv/config");


const app = express();

app.use(cors());
app.use("*", cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(auth());
app.use("/upload", express.static(__dirname + "/upload"));

//Routers Use
app.use("/User", UserRoute);
app.use("/Payment", PaymentRoute);
app.use("/Profile", ProfileRoute);

// simple route
app.get("/", (req, res) => {
  res.json("Task server");
});

db.sync()
  .then((result) => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// set port, listen for requests
