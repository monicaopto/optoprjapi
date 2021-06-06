const express = require('express');
const router = express.Router()

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/api/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    console.log(user);
    sendMail(user, (err, info) => {
      if (err) {
        console.log(err);
        res.status(400);
        res.send({ error: "Failed to send email" });
      } else {
        console.log("Email has been sent");
        res.send(info);
      }
    });
  });
  
  const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: ""
      }
    });
    transporter.sendMail(mailOptions, callback);
  }

  
  const mailOptions = {
    from: `"", ""`,
    // to: `<${user.email}>`,
    to: ``,
    subject: "NewsLetter Subscription",
    html: ``
  };

module.exports = router