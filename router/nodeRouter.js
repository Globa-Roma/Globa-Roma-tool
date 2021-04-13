const express = require('express');
const mailerRouter = express.Router();
 const Nodemailer = require('nodemailer')



mailerRouter.post('/clients', (req, res) => {

const data = req.body
console.log(`${data.name}, ${data.email}, ${data.subject}, ${data.messages}`)
const output = `Name: ${data.name} <br>
                Email: ${data.email}<br><br>
                
                ${data.messages}`

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
      from: `Globa-Aroma}`,
      to: "globa.roma10@gmail.com", // list of recivers
      name: `${data.name}`,
      html: output,
      attachments:[{
          path: `${__dirname}/../clients/public/images/${file.name}`,
        }]
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (err)=>{
        if(err){
          return console.log(err)
        }else{
          console.log(`Success`)
        }
    })
  
    transporter.close()

  })

  module.exports = mailerRouter;
  

  