const express = require('express');
const mailerRouter = express.Router();
 const Nodemailer = require('nodemailer');
const Clients = require('../modles/signinSchema')



mailerRouter.post('/clients', (req, res) => {

  const data = req.body

  // file
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file
  console.log(req.files)
  console.log(file)

  file.mv(`${__dirname}/../clients/public/images/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/images/${file.name}` });
  });

  Clients.find({}, function(err, allUsers){
  if(err){
      console.log(err);
  }
  var mailList = [];
  allUsers.forEach(function(users){
      mailList.push(users.email);
      return mailList;
  });
  var smtpTransport = Nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: 'globa.roma10',
        pass: "globaroma100%"
      }
  });
  var mailOptions = {
          to: [],
          bcc: mailList,
          from: `${data.email}`,
          subject: `${data.subject}`,
          text: `${data.messages}`,
          attachments:[{
            path: `${__dirname}/../clients/public/images/${file.name}`,
          }]
      };
      smtpTransport.sendMail(mailOptions, function(err) {
          if(err){
              console.log(err);
          }
          console.log('mail sent to ' + mailList);
      });
});

})

//}

  module.exports = mailerRouter;