const mongoose = require('mongoose')

const Karyawanchema = new mongoose.Schema({
    karyawanID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Karyawan",
    },
    UserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: String,
    jabatan: String,
    departemen: String,
    gaji: Number,
})

const Karyawan = mongoose.model("Karyawan", Karyawanchema)
module.exports = Karyawan
