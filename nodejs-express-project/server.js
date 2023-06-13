const express = require('express');
const UserRoute = require('./Routes/User.route.js');
const createError = require('http-errors');
const app = express();
require('dotenv').config();
require('./helps/connection_mongdb.js');

app.get('/', (req, res, next) => {
    res.send('Home page');
})

app.use('/user', UserRoute);

//create a Middleware
app.use((req, res, next) => {
    next(createError.NotFound('This route does not exist'));
})

app.use((err, req, res, next) => {
    if (err) {
        res.json({
            status: err.status || 500,
            message: err.message
        })
    }
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})