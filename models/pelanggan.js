const mongoose = require('mongoose')

const pelangganSchema = new mongoose.Schema({
    PelangganID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelanggan",
    },
    name: String,
    Alamat: String,
    NoTelp: Number,
    Email: String,
})

const Pelanggan = mongoose.model("Pelanggan", pelangganSchema)
module.exports = Pelanggan
