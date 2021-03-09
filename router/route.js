const express = require('express');
const router = express.Router();
const client = require('../modles/signinSchema')


// post client
router.post('/register', (req, res) => {
  const signupschema = new client({
    fullName: req.body.fullName,
    email: req.body.email,
    telephone: req.body.telephone,
    city: req.body.city,
    language: req.body.language,
    other: req.body.other,
    interest: req.body.interest,
    
    
  })

  signupschema.save()
    .then(client => res.json(client))
    .catch(err => console.log(err))

})


module.exports = router;