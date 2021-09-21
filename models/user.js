const mongoose = require('mongoose');

// Schema or Template of data which will be saved into db

const userSchema = new mongoose.Schema({
    name: {
        type: String   
    },
    email: {
        type: String,
        unique: true
    },
    comment: {
        type: String,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;