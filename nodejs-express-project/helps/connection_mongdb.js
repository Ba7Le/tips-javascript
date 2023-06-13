const mongoose = require('mongoose');

// const conn = mongoose.createConnection('mongodb://localhost:27017/test');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

conn.on('connected', () => {
    console.log(`mongodb connected: ${this.name}`)
})

module.exports = conn;