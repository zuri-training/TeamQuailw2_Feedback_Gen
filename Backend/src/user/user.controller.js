import User from ('../user/user.model.js')
import mongoose from 'mongoose'


export async function Register(req, res, next) {
    try {
        const user = new User({
            _id: mongoose.Types.ObjectId(),
            username: req.body.username,
            email: req.body.email,
            timestamp: Date()
        })
        await user.save()
        res.json(user)

    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}