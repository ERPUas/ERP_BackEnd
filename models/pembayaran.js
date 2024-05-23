const mongoose = require('mongoose')

const pembayaranSchema = new mongoose.Schema({
    pembayaranID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Log",
    },
    pesananID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Pesanan"
    },
    jenisTransaksi:{
        type: String,
        enum: ['Debit', 'Kedit Card', 'Cash'],
        default: 'Cash'
    },
    tanggal: {
        type:Date,
        default: Date.now
    },
    jumlahPembayaran: String,
    
})

const Pembayaran = mongoose.model("Log", pembayaranSchema)
module.exports = Pembayaran
