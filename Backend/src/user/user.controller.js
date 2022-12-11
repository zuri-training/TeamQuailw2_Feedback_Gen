const userService = require("./user.service");
const httpStatus = require("http-status");
const catchAsync = require("../utilities/catchAsync");

const register = catchAsync(async (req, res) => {
    const user = await userService.register(req.body);
    res.status(httpStatus.CREATED).send(user);
});

const login = catchAsync(async (req, res) => {
    const user = await userService.login(req.body);
    res.send(user);
});

const getUserById = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.send(user);
});

module.exports = {
    register,
    login,
    getUserById,
};