const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'kushwahdivyansh2@gmail.com', // Replace with your Gmail email
      pass: 'Divyakush@123',       // Replace with your Gmail password or app-specific password
    },
  });

  const mailOptions = {
    from: 'kushwahdivya08@gmail.com',
    to: 'kushwahdivyansh2@gmail.com', // Your email
    subject: `New Message from ${name}`,
    text: `${message}\n\nContact Email: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
