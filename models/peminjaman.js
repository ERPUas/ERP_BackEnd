const mongoose = require('mongoose')

const peminjamanSchema = new mongoose.Schema({
    peminjamanID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Peminjaman",
    },
    karyawanID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Karyawan",
    },
    barangID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Barang"
    },
    tanggalMulaiPemesanan:{
        type:Date,
        default: Date.now
    },
    tanggalAkhirPemesanan:{
        type:Date,
        default: Date.now
    },
})

const Peminjaman = mongoose.model("Detail", peminjamanSchema)
module.exports = Peminjaman
