const mongoose = require('mongoose')

const pelangganSchema = new mongoose.Schema({
    PelangganID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelanggan",
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    Alamat: String,
    NoTelp: Number,
    Gambar: {
        type: String,
        required:true
    }
})

const Pelanggan = mongoose.model("Pelanggan", pelangganSchema)
module.exports = Pelanggan
