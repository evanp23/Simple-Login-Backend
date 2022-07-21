const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const registrationRoute = require('./routes/register');
app.use('/register', registrationRoute);

console.log(Date.now());


Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
           ].join('');
  };


mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("DB Connected.");
});

app.listen(5000);