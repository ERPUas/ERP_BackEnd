const mongoose = require('mongoose');

const barangSchema = new mongoose.Schema({
    barangID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barang",
    },
    Gambar: {
        data: Buffer,
        contentType: String,
    },
    Merek: String,
    Model: String,
    Tahun: Number,
    Warna: String,
    Biaya: Number,
    Status: {  
        type: String,
        enum: ['Tersedia', 'Tidak Tersedia'],
        default: 'Tersedia'
    },
    Stok: Number
});

const Barang = mongoose.model("Barang", barangSchema);
module.exports = Barang;
