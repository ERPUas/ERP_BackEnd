const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    username: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
