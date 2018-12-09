const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const authRouter = require('./routes/auth');
const profileRouter = require('./routes/profile');


// Instantiation
const app = express();

// Configuration
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(cookieParser());

app.use(authRouter);
app.use(profileRouter);


app.use((err, req, res, next) => {
    console.log(`${err}`);
    res.status(500);
})


// Bootup
app.listen(3000);
