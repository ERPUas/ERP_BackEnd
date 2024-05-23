const express = require('express');
const multer = require('multer');
const { getAllBarang, getBarangById, createBarang, updateBarang, deleteBarang } = require('../controllers/barang.controller');
const route = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

route.get('/', getAllBarang);
route.get('/:id', getBarangById);
route.post('/', upload.single('Gambar'), createBarang);  
route.put('/:id', upload.single('Gambar'), updateBarang); 
route.delete('/:id', deleteBarang);

module.exports = route;
