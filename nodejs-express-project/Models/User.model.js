const mongoose = require('mongoose');
const schema = mongoose.Schema();

const UseSchema = new schema({
    userName: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', UseSchema);