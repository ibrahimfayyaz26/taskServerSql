const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
const auth = require("./middleware/auth");
const morgan = require("morgan");
require("dotenv/config");
const { Models } = require("./models/Models");
const { Routes } = require("./Routes/Routes");

const app = express();

app.use(morgan("dev"));
app.use(auth());
app.use(cors());
app.options("*", cors());

//Error
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({
      message: "The user is not authorized",
    });
  }
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/upload", express.static(__dirname + "/upload"));

//Routers Use
app.use("/User", Routes.User);
app.use("/Payment", Routes.Payment);
app.use("/Profile", Routes.Profile);
app.use("/Documents", Routes.Documents);
app.use("/IdCard", Routes.IdCard);
app.use("/Passport", Routes.Passport);
app.use("/ResetPassword", Routes.ResetPassword);
app.use("/Approve", Routes.Approve);
app.use("/Wallet", Routes.Wallet);

// simple route
app.get("/", (req, res) => {
  res.json("Task server");
});

db.sync()
  .then((result) => {
    const PORT = process.env.PORT || 1000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

process.on("SIGINT", async function () {
  console.log("SIGINT Shutdown received.");
  process.exit(0);
});

// //Terminate active connection on kill
process.on("SIGTERM", async function () {
  console.log("SIGTERM Shutdown received.");
  process.exit(0);
});
// set port, listen for requests
