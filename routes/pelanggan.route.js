const express = require('express')
const { getAllPelanggan, getPelangganById, addPelanggan, updatePelanggan, deletePelangganById } = require('../controllers/pelanggan.controller')
const route = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

route.get('/', getAllPelanggan)
route.get('/:id', getPelangganById)
route.post('/', upload.single('Gambar'), addPelanggan)
route.put('/:id', upload.single('Gambar'), updatePelanggan)
route.delete('/:id', deletePelangganById)

module.exports = route
