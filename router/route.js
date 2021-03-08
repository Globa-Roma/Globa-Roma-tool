const express = require('express');
const router = express.Router();
const client = require('../modles/signinSchema')

// get client
router.get('/'), (req, res) => {
  client.find()
    .sort({ date: -1 })
    .catch(clients => res.json(clients))

}

// post client
router.post('/', (req, res) => {
  const signupschema = new client({
    fullName: req.body.fullName,
    email: req.body.email,
    telephone: req.body.telephone,
    city: req.body.city,
    interest: req.body.interest
  })

  signupschema.save()
    .then(client => res.json(client))
    .catch(err => console.log(err))

})


module.exports = router;