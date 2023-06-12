const express = require('express');
const route = express.Router();

route.post('/register', (req, res, next) => {
    res.send('funtion register');
})

route.post('/refresh-token', (req, res, next) => {
    res.send('funtion refresh-token');
})

route.post('/login', (req, res, next) => {
    res.send('funtion login');
})

route.post('/logout', (req, res, next) => {
    res.send('funtion logout');
})

module.exports = route;