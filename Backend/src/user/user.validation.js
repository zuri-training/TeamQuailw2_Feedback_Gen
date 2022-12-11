const Joi = require("joi");
const { password, objectId } = require("../utilities/custom.validation");

const register = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        password: Joi.string().required().custom(password),
    }),
};

const login = {
    body: Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required().custom(password),
    }),
};

const getUserById = {
    params: Joi.object().keys({
        id: Joi.required().custom(objectId)
    }),
};

module.exports = {
    register,
    login,
    getUserById,
};
