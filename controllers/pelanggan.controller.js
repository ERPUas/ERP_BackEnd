const Pelanggan = require('../models/pelanggan');

module.exports = {
    getAllPelanggan: async (req, res) => {
        try {
            const pelanggan = await Pelanggan.find();
            res.json({
                message: 'Berhasil mendapatkan semua pelanggan',
                data: pelanggan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mendapatkan pelanggan',
                error: error.message,
            });
        }
    },

    getPelangganById: async (req, res) => {
        try {
            const pelangganId = req.params.id;
            const pelanggan = await Pelanggan.findById(pelangganId);
            if (!pelanggan) {
                return res.status(404).json({
                    message: 'Pelanggan tidak ditemukan',
                });
            }
            res.json({
                message: 'Berhasil mendapatkan pelanggan',
                data: pelanggan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal mendapatkan pelanggan',
                error: error.message,
            });
        }
    },

    addPelanggan: async (req, res) => {
        try {
            const pelangganData = req.body;
            const newPelanggan = await Pelanggan.create(pelangganData);
            res.status(201).json({
                message: 'Berhasil menambahkan pelanggan baru',
                data: newPelanggan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal menambahkan pelanggan baru',
                error: error.message,
            });
        }
    },

    updatePelanggan: async (req, res) => {
        try {
            const pelangganId = req.params.id;
            const updatedData = req.body;
            const updatedPelanggan = await Pelanggan.findByIdAndUpdate(pelangganId, updatedData, { new: true });
            if (!updatedPelanggan) {
                return res.status(404).json({
                    message: 'Pelanggan tidak ditemukan',
                });
            }
            res.json({
                message: 'Berhasil memperbarui data pelanggan',
                data: updatedPelanggan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal memperbarui data pelanggan',
                error: error.message,
            });
        }
    },

    deletePelangganById: async (req, res) => {
        try {
            const pelangganId = req.params.id;
            const deletedPelanggan = await Pelanggan.findByIdAndDelete(pelangganId);
            if (!deletedPelanggan) {
                return res.status(404).json({
                    message: 'Pelanggan tidak ditemukan',
                });
            }
            res.json({
                message: 'Berhasil menghapus pelanggan',
                data: deletedPelanggan,
            });
        } catch (error) {
            res.status(500).json({
                message: 'Gagal menghapus pelanggan',
                error: error.message,
            });
        }
    }
};
