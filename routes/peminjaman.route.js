const express = require('express')
const { getAllPeminjaman, getPeminjamanById, createPeminjaman, updatePeminjaman, deletePeminjaman } = require('../controllers/peminjaman.controller')
const route = express.Router()

route.get('/', getAllPeminjaman)
route.get('/:id', getPeminjamanById)
route.post('/', createPeminjaman)
route.put('/:id', updatePeminjaman)
route.delete('/:id', deletePeminjaman)

module.exports = route
