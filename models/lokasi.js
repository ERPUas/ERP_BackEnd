const mongoose = require('mongoose')

const lokasiSchema = new mongoose.Schema({
    lokasiID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lokasi",
    },
    namaLokasi: String,
    Alamat:String
})

const Lokasi = mongoose.model("Detail", lokasiSchema)
module.exports = Lokasi
