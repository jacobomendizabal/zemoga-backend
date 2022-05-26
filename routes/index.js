'use strict'

const express = require('express')
const userCrtl = require('../controllers/user')

const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/users', userCrtl.getUsers)
api.get('/user/:userId', userCrtl.getUser)
api.put('/user/:userId', userCrtl.updateUser)

module.exports = api