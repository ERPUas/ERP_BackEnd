const express = require('express')
const { getAllPelanggan, getPelangganById, addPelanggan, updatePelanggan, deletePelangganById } = require('../controllers/pelanggan.controller')
const route = express.Router()

route.get('/', getAllPelanggan)
route.get('/:id', getPelangganById)
route.post('/', addPelanggan)
route.put('/:id', updatePelanggan)
route.delete('/:id', deletePelangganById)

module.exports = route
