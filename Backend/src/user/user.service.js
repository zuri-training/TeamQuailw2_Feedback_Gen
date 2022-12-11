const httpStatus = require("http-status");
const ApiError = require("../utilities/ApiError");
const Users = require("./user.model");

const isEmailTaken = async function (email) {
    const user = await Users.findOne({ email });
    return !!user;
};

const register = async (userBody) => {
    if (await isEmailTaken(userBody.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
    }

    const user = await Users.create(userBody);
    const token = user.createJWT();
    return { user, token };
};

const login = async (userBody) => {
    const user = await Users.findOne({ email: userBody.email }).select('+password');

	if (!user || !(await user.correctPassword(userBody.password, user.password))) {
		throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
	}
    const token = user.createJWT();
    
    return { user, token };
};

const getUserById = async (id) => {
    const user = await Users.findOne({ _id: id });

	if (!user) {
		throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
	}
    
    return user;
};

module.exports = {
    register,
    login,
    getUserById,
};
