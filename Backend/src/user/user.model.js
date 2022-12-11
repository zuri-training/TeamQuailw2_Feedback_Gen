const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "can't be blank"],
            index: true,
        },
        lastName: {
            type: String,
            required: [true, "can't be blank"],
            index: true,
        },
        email: {
            type: String,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, "is invalid"],
            index: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
    const payload = {
        id: this._id,
        email: this.email,
        iat: moment().unix(),
        exp: moment().add(config.expire, "minutes").unix(),
    };

    return jwt.sign(payload, config.secret);
};

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
