const Karyawan = require('../models/karyawan')

module.exports = {
    getAllKaryawan: async (req, res) => {
        try {
            const karyawan = await Karyawan.find();
            res.json({
                message: 'Berhasil mendapatkan semua karyawan',
                data: karyawan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mendapatkan karyawan',
                error: error.message,
            });
        }
    },

    getKaryawanById: async (req, res) => {
        try {
            const karyawanId = req.params.id;
            const karyawan = await Karyawan.findById(karyawanId);
            if (!karyawan) {
                return res.status(404).json({
                    message: 'Karyawan tidak ditemukan',
                });
            }
            res.json({
                message: 'Berhasil mendapatkan karyawan',
                data: karyawan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mendapatkan karyawan',
                error: error.message,
            });
        }
    },

    addKaryawan: async (req, res) => {
        try {
            const karyawanData = req.body;
            const newKaryawan = await Karyawan.create(karyawanData);
            res.status(201).json({
                message: 'Berhasil menambahkan karyawan baru',
                data: newKaryawan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal menambahkan karyawan baru',
                error: error.message,
            });
        }
    },

    updateKaryawan: async (req, res) => {
        try {
            const karyawanId = req.params.id;
            const updatedData = req.body;
            const updatedKaryawan = await Karyawan.findByIdAndUpdate(karyawanId, updatedData, { new: true });
            if (!updatedKaryawan) {
                return res.status(404).json({
                    message: 'Karyawan tidak ditemukan',
                });
            }
            res.json({
                message: 'Berhasil memperbarui data karyawan',
                data: updatedKaryawan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal memperbarui data karyawan',
                error: error.message,
            });
        }
    },

    deleteKaryawanById: async (req, res) => {
        try {
            const karyawanId = req.params.id;
            const deletedKaryawan = await Karyawan.findByIdAndDelete(karyawanId);
            if (!deletedKaryawan) {
                return res.status(404).json({
                    message: 'Karyawan tidak ditemukan',
                });
            }
            res.json({
                message: 'Berhasil menghapus karyawan',
                data: deletedKaryawan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal menghapus karyawan',
                error: error.message,
            });
        }
    }
};
