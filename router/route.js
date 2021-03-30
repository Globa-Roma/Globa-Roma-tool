const express = require('express');
const router = express.Router();
const client = require('../modles/signinSchema')


// // get
router.get('/clients', (req, res) => {

  client.find({  })
      .then((data) => {
          // console.log('Data: ', data);
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

  //find the client information that belong to client Id 
    client.find({ '_id': { $in: client } })
        .populate('Client')
        .exec((err, client) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(client)
        })
 
})






// delete
router.delete("/delete/:id", (req, res) => {
  client.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
});


module.exports = router;