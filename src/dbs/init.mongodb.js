'use strict'
// Dưới đây là đoạn code để tạo một singleton
const mongoose = require('mongoose');
const connectString = 'mongodb://127.0.0.1:27017'
const { countConnect } = require('../helpers/check.connect');

class Database {
    constructor() {
        this.connect();
    }

    //Connect
    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectString).then(_ => {
            console.log('Connected Mongodb success PRO', countConnect());
        }).catch(err => console.log(`Error Connect`));
    }


    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;