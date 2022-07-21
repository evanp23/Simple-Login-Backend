const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register user
router.post('/', async (req, res)=>{

    console.log('register');

    const body = req.body;

    const user = new User(body);

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(body.password, salt);
    user.dateOfBirth = Date.parse(body.dateOfBirth);

    user.save()
    .then((doc) => res.status(201).send(doc));
});

module.exports = router;