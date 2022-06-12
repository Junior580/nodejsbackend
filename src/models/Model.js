const mongoose = require("mongoose");

const User = mongoose.model("User", {
    name: {
        type: String,
        require: true,
    },
    email: { type: String },
    age: {
        type: Number,
        require: true,
    },
    approved: {
        type: Boolean,
        require: true,
    },
});

module.exports = User;
