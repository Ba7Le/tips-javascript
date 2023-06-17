'use strict'

const mongoose = require('mongoose')

const connectString = 'mongodb://127.0.0.1:27017/shopDev'

class Database {
    constructor() {
        this.connect();
    }

    //Connect
    connect() {
        mongoose.connect(connectString).then(_ => console.log('Connected Mongodb success'))
            .catch(err => console.log(`Error Connect`));
    }
}