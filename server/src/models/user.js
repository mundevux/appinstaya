'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    nameUser: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('Order', UserSchema)