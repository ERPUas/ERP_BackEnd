const mongoose = require('mongoose')

const pesananSchema = new mongoose.Schema({
    pesananID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pesanan",
    },
    pelangganID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelanggan",
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
    status: {
        type: String,
        enum: ["Pending", "Success"],
        default: "pending"
    }
})

const Pesanan = mongoose.model("Pesanan", pesananSchema)
module.exports = Pesanan
