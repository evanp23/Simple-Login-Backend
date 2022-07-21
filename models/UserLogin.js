const mongoose = require('mongoose');

const UserLoginSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserLogin', UserLoginSchema);