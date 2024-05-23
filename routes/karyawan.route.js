const express = require('express')
const { getAllKaryawan, getKaryawanById, addKaryawan, updateKaryawan, deleteKaryawanById } = require('../controllers/karyawan.controller')
const route = express.Router()

route.get('/', getAllKaryawan)
route.get('/:id', getKaryawanById)
route.post('/', addKaryawan)
route.put('/:id', updateKaryawan)
route.delete('/:id', deleteKaryawanById)

module.exports = route
