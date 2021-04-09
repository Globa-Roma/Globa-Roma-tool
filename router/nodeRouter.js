const express = require('express');
const mailerRouter = express.Router();
const Nodemailer = require('nodemailer')
const multer  = require('multer')
const upload = multer()


// nodemailer(request of data from form of sending email)

mailerRouter.post('/clients', (req, res)=>{
    let data = req.body
    const output = `${data.message}`
    const subject = `Globa Aroma ${data.email}:  ${data.subject}`

// create reusable transporter object using the default SMTP transport
    let transporter = Nodemailer.createTransport({
      service: 'Gmail',
      post: 587,
      secure: false,
      auth:{
        user: 'globa.roma10',
        pass: "globaroma100%"
      },
      tls:{
        rejectUnauthorized:false
      }
    });

// setup email data with unicode symbols
   let mailOptions ={
      from: `Globa-Aroma`,
      to: "feruzteame24@gmail.com", // list of recivers
      subject: subject,
      html: output
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (err)=>{
        if(err){
          return console.log(err)
        }else{
          res.send(`Success`)
        }
    })
  
    transporter.close()
  })


  module.exports = mailerRouter;
  