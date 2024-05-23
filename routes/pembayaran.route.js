const express = require('express')
const { getAllPembayaran, getPembayaranById, createPembayaran, updatePembayaran, deletePembayaran } = require('../controllers/pembayaran.controller')

const route = express.Router()

route.get('/', getAllPembayaran)
route.get('/:id', getPembayaranById)
route.post('/', createPembayaran)
route.put('/:id', updatePembayaran)
route.delete('/:id', deletePembayaran)

module.exports = route
