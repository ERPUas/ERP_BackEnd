const express = require('express')
const { getAllUser, getByIdUser, addUser, updateUser, deleteUserById } = require('../controllers/user.controller')
const route = express.Router()

route.get('/', getAllUser)
route.get('/:id', getByIdUser)
route.post('/', addUser)
route.put('/:id', updateUser)
route.delete('/:id', deleteUserById)

module.exports = route
