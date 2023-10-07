'use strict'

const _SECONDS = 5000
const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

//count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of Connection::${numConnection}`)
    return numConnection;
}

//check overload
const checkOverload = () => {
    setTimeout(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length; //4
        const memoryUsage = process.memoryUsage().rss; // byte "Resident Set Size" trong tiếng Việt có thể được dịch là "Kích thước Bộ nhớ Đang cư trú" 
        //Example maximun number of connecions based on number of cores
        const maxConnections = numCores * 5;

        console.log(`Active connection:: ${numConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnections) {
            console.log('Connection overload deteccted')
        }

    }, _SECONDS) // Monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverload
}