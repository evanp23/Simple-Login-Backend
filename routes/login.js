const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Login = require('../models/UserLogin');
const User = require('../models/User');
const bcrypt = require('bcrypt');


//User login
router.post('/', async (req, res)=>{
    const body = req.body;

    if(!body.username || !body.password){
        res.status(400).json({message: "missing username or password"});
        return;
    }

    const login = new Login(body);

    const user = await User.findOne({username: body.username});
    if (user) {
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (validPassword) {
            res.status(200).json({ message: "Valid password" });
        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    } else {
        res.status(401).json({ error: "User does not exist" });
    }

    console.log(login);

});

module.exports = router;