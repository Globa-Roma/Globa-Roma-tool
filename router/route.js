const express = require('express');
const router = express.Router();
const client = require('../modles/signinSchema')


// // get
router.get('/clients', (req, res) => {

  client.find({  })
      .then((data) => {
          console.log('Data: ', data);
          res.json(data);
      })
      .catch((error) => {
          console.log('error: ', error);
      });
});

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



// get Detail
router.get('/detail/client_by_id', (req, res) => {

  let type = req.query.type
    let ourClient = req.query.id

    console.log("req.query.id", req.query.id)

    if (type === "array") {
        let ids = req.query.id.split(',');
        ourClient = [];
        ourClient = ids.map(people => {
            return people
        })
      }

      console.log("clientsId", ourClient)


    //we need to find the product information that belong to product Id 
    
    client.find({ '_id': { $in: clients } })
        .populate('writer')
        .exec((err, clients) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(clients)
        })
 
})


module.exports = router;