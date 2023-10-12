'use strict'

const _SECONDS = 5000
const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

//count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of Connection::${numConnection}`)
}

//check overload
const checkOverload = () => {
    let intervalId = setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length; //4
        const memoryUsage = process.memoryUsage().rss; // byte
        //Example maximun number of connecions based on number of cores
        const maxConnections = numCores * 5;

        console.log(`Active connection:: ${numConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`)

        if (numConnection > maxConnections) {
            console.log('Connection overload deteccted')
        }

    }, _SECONDS) // Monitor every 5 seconds

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000)
}

module.exports = {
    countConnect,
    checkOverload
}