const mongoose = require('mongoose')

const ulasanSchema = new mongoose.Schema({
    ulasanID: {
        type:mongoose.Types.ObjectId,
        ref: 'Ulasan'
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    PelangganID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelanggan",
    },
    rating: Number,
    ulasan: String,
    Gambar: {
        type: String,
        required:true
    }
})

const Ulasan = mongoose.model('Ulasan', ulasanSchema)
module.exports = Ulasan