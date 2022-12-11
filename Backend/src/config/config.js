require('dotenv').config();

const config = {
    secret: process.env.JWT_SECRET,
    expire: process.env.JWT_EXPIRES_IN
}

module.exports = config;