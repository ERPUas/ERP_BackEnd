const express = require('express')
const { getAllUlasan, getUlasanById, addUlasan, updateUlasan, deleteUlasan } = require('../controllers/ulasan.controller')
const route = express.Router()

route.get('/', getAllUlasan)
route.get('/:id',getUlasanById)
route.post('/', addUlasan)
route.put('/:id', updateUlasan)
route.delete('/:id', deleteUlasan)

module.exports = route