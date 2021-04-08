const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//dotenv help to put the link save
const dotenv = require('dotenv')
const router = require('./router/route');
const mailerRouter = require('./router/nodeRouter')
const cors = require('cors');


// body parser middleware
app.use(bodyParser.json())


dotenv.config()
mongoose.connect(process.env.Database_link, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false  })
    .then((result) => console.log('Mongo is connect ...'))
    .catch((err) => console.log(err))


app.use(express.json());
app.use(cors());
app.use('/', router)
app.use('/', mailerRouter)


// // and this work in heroku
// app.listen(process.env.PORT, '0.0.0.0');

// this work in local matchine

app.listen(8080,()=>{
    console.log('My server start ....')
})





