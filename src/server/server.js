//this handles the backend
//process.env.NODE_EXTRA_CA_CERTS = A_FILE_IN_OUR_PROJECT;

const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");
require("dotenv").config()

// use nodemailer to handle transport
// and set up smtp for mail host
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
  rejectUnauthorized: false,
});

//verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Success! Server is ready to take messages");
  }
});

//setting up POST route
router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var phone_number = req.body.phone_number;
  var message = req.body.massage;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: "ambrosia.spa.life@gmail.com",
    subject: `New message from ${name}`,
    phone_number: phone_number,
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });

      transporter.sendMail(
        {
          from: "ambrosia.spa.life@gmail.com",
          to: email,
          subject: "Message Sent Successfully!",
          text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
        },
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Message sent: " + info.response);
          }
        }
      );
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
