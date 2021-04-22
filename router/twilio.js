const express = require("express")
const bodyParser = require('body-parser');
const pino = require('pino');
const twilio = require('twilio');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
const twilioRouter = express.Router();


  //twilio requirements -- Texting API 
const accountSid = 'AC6d98e20ca2d6ac9bb63c267a72762f34';
const authToken = 'ebd08d58ca1292b631f5a610613fb81e'; 
const client = new twilio(accountSid, authToken);

twilioRouter.post('/send-sms', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: "+12562901220",
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  });



module.exports = twilioRouter;