const express = require('express');
const multer = require('multer');
const path = require('path');
const { getAllBarang, getBarangById, createBarang, updateBarang, deleteBarang } = require('../controllers/barang.controller');

const route = express.Router();

// Set up multer storage to save files to a directory
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

route.get('/', getAllBarang);
route.get('/:id', getBarangById);
route.post('/', upload.single('Gambar'), createBarang);
route.put('/:id', upload.single('Gambar'), updateBarang);
route.delete('/:id', deleteBarang);

module.exports = route;
