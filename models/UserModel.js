import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: String,
    surname: String,
    login: String,
    password: String,
    avatar: String
}, { timestamps: true })

export default model('UserModel', UserSchema)