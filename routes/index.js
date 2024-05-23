const express = require('express');
const route = express.Router();

const authRoute = require('./auth.route');
const barangRoute = require('./barang.route');
const karyawanRoute = require('./karyawan.route');
const lokasiRoute = require('./lokasi.route');
const pelangganRoute = require('./pelanggan.route');
const pembayaranRoute = require('./pembayaran.route');
const peminjamanRoute = require('./pembayaran.route');
const userRoute = require('./user.route')
const pesananRoute = require('./pesanan.route')

route.get("/", (req, res) => {
    res.json("Express mongoose halo");
});

route.use("/auth", authRoute);
route.use("/barang", barangRoute);
route.use("/karyawan", karyawanRoute);
route.use("/lokasi", lokasiRoute)
route.use("/pelanggan", pelangganRoute)
route.use("/pembayaran", pembayaranRoute)
route.use("/peminjaman", peminjamanRoute)
route.use("/pesanan", pesananRoute)
route.use("/user", userRoute)




module.exports = route;
