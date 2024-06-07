const mongoose = require('mongoose');

const barangSchema = new mongoose.Schema({
    Merek: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Tahun: {
        type: Number,
        required: true
    },
    Warna: {
        type: String,
        required: true
    },
    Biaya: {
        type: Number,
        required: true
    },
    Status: {
        type: String,
        required: true
    },
    Stok: {
        type: Number,
        required: true
    },
    Gambar: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Barang', barangSchema);
