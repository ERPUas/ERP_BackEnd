const express = require('express')
const { getAllLokasi, getLokasiById, createLokasi, updateLokasi, deleteLokasi } = require('../controllers/lokasi.controller')
const route = express.Router()

route.get('/', getAllLokasi)
route.get('/:id', getLokasiById)
route.post('/', createLokasi)
route.put('/:id', updateLokasi)
route.delete('/:id', deleteLokasi)

module.exports = route
