const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);