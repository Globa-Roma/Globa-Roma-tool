const express = require('express');
const router = express.Router();
const Clients = require('../modles/signinSchema')



// // get
router.get('/clients', (req, res) => {

  Clients.find({  })
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
  const signupschema = new Clients({
    fullName: req.body.fullName,
    email: req.body.email,
    telephone: req.body.telephone,
    city: req.body.city,
    language: req.body.language,
    other: req.body.other,
    interest: req.body.interest,
    spheres: req.body.spheres
    
    
  })

  signupschema.save()
    .then(Clients => res.json(Clients))
    .catch(err => console.log(err))

})


// find id
router.route('/:id').get((req, res) => {
  Clients.findById(req.params.id)
    .then(people => res.json(people))
    .catch(err => res.status(400).json('Error: ' + err));
});


// delete
router.route('/clients/:id').delete((req, res) => {
  Clients.findByIdAndDelete(req.params.id)
    .then(() => res.json('Client deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});


// update
router.route('/update/:id').post((req, res) => {
  Clients.findById(req.params.id)
    .then(people => {
      people.fullName = req.body.fullName;
      people.email = req.body.email;
      people.telephone = (req.body.telephone);
      people.city = req.body.city;
      people.language = req.body.language;
      people.interest = req.body.interest;
      people.other = req.body.other;
      people.spheres = req.body.spheres;
      people.date = Date.parse(req.body.date);

      people.save()
        .then(() => res.json('client updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});






module.exports = router;