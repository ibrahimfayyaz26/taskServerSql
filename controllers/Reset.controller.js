const User = require("../models/User");
const Reset = require("../models/ResetPassword");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { htm } = require("./format");



exports.forget = async(req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        },
    }).catch((err) => {
        res.send({
            message: "User not found",
        });
    });

    await Reset.update({
        used: 1
    },
        {
            where: {
                email: req.body.email
            }
        });


    let token = jwt.sign({
            email: req.body.email,
        },
        req.body.email, {
            expiresIn: "1h",
        }
    );

    await Reset.create({
        email: req.body.email,
        token: token,
    });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'fairtrader.reset@gmail.com',
          pass: '$fairtrader26'
        }
      });

    var mailOptions = {
        from: "fairtrader.reset@gmail.com",
        to: req.body.email,
        subject: "Reset Password",
        html:htm(token,req.body.email)
    };

    transporter.sendMail(mailOptions).then(() => {
        res.send({
            message: "Password reset link is send",
        });
    })
    .catch((err) => {
        console.log(err)
        res.send({
            message: err.message,
            msg:"request failed"
          });
    });
};

exports.change = async (req,res)=>{
    const reset = await Reset.findOne({
        where: {
            email: req.body.email,
            token: req.body.token,
            used: 0
        }
    })
  
    if (reset == null) {
       res.send({message: 'Token not found. Please try the reset password process again.' });
    }

    if (req.body.password1 !== req.body.password2) {
        res.send({message: 'Passwords do not match. Please try again.'});
    }
    
    await Reset.update({
        used: 1
    },
        {
            where: {
                email: req.body.email,
                token:req.body.token
            }
        });

    await User.update({
            password: bcrypt.hashSync(req.body.password1, 10),
        },
            {
                where: {
                    email: req.body.email
                }
            });

    res.send({msg:"Password updated"})
}