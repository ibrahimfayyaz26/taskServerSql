const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
const User = require("./models/User");
const UserRoute = require("./Routes/User");
const PaymentRoute = require("./Routes/Payment");
const ProfileRoute = require("./Routes/Profile");
const DocumentsRoute = require("./Routes/Documents");
const IdCardRoute = require("./Routes/IdCard");
const PassportRoute = require("./Routes/Passport");
const ResetPasswordRoute = require("./Routes/ResetPassword");
const AproveRoute = require("./Routes/Aprove")
const auth = require("./middleware/auth");
const morgan = require("morgan");
require("dotenv/config");

const app = express();

app.use(morgan("dev"));
app.use(auth());
app.use(cors());
app.options("*", cors())

//Error
app.use(
  function(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
      // jwt authentication error
      return res.status(401).json({
        message: "The user is not authorized"
      });
    }
  })

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
app.use("/User", UserRoute);
app.use("/Payment", PaymentRoute);
app.use("/Profile", ProfileRoute);
app.use("/Documents", DocumentsRoute);
app.use("/IdCard", IdCardRoute);
app.use("/Passport", PassportRoute);
app.use("/ResetPassword",ResetPasswordRoute)
app.use("/Aprove",AproveRoute)



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