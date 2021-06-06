const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const url ='mongodb://localhost/monicaoptohub'

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(express.json());

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected...')
})

const userRoute = require('../optoprjapi/routes/users')
app.use('/api/users',userRoute)

const brandRoute = require('../optoprjapi/routes/brands')
app.use('/api/brands',brandRoute)

//Send Mail Api -- all Methods declared in senmail.js
const sendMailRoute = require('../optoprjapi/routes/sendmail');
app.use('/api/sendmail',sendMailRoute)


app.listen(3000, () => console.log('Listening to port 3000....'));