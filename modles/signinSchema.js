const mongoose = require('mongoose');

const signIn = new mongoose.Schema({
    
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    telephone: {
        type: String
    },
    city: {
        type: String
    },
    language:{
        type: String
    },
    other: {
        type: String
    },
    interest:{
        type: String
    },
    spheres:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
    
})

module.exports = mongoose.model('signforms', signIn)