const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const ApiError = require("../utilities/ApiError");
const User = require("../user/user.model");

const auth = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    try {
        if (!token) {
            throw new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = auth;
