const Peminjaman = require('../models/peminjaman');

module.exports = {
    getAllPeminjaman: async (req, res) => {
        try {
            const peminjaman = await Peminjaman.find();
            res.json(peminjaman);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createPeminjaman: async (req, res) => {
        const peminjaman = new Peminjaman({
            karyawanID: req.body.karyawanID,
            barangID: req.body.barangID,
            tanggalMulaiPemesanan: req.body.tanggalMulaiPemesanan,
            tanggalAkhirPemesanan: req.body.tanggalAkhirPemesanan
        });

        try {
            const newPeminjaman = await peminjaman.save();
            res.status(201).json(newPeminjaman);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getPeminjamanById: async (req, res) => {
        try {
            const peminjaman = await Peminjaman.findById(req.params.id);
            if (peminjaman == null) {
                return res.status(404).json({ message: 'Peminjaman not found' });
            }
            res.json(peminjaman);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    updatePeminjaman: async (req, res) => {
        try {
            const peminjaman = await Peminjaman.findById(req.params.id);
            if (peminjaman == null) {
                return res.status(404).json({ message: 'Peminjaman not found' });
            }
            if (req.body.karyawanID != null) {
                peminjaman.karyawanID = req.body.karyawanID;
            }
            if (req.body.barangID != null) {
                peminjaman.barangID = req.body.barangID;
            }
            if (req.body.tanggalMulaiPemesanan != null) {
                peminjaman.tanggalMulaiPemesanan = req.body.tanggalMulaiPemesanan;
            }
            if (req.body.tanggalAkhirPemesanan != null) {
                peminjaman.tanggalAkhirPemesanan = req.body.tanggalAkhirPemesanan;
            }
            const updatedPeminjaman = await peminjaman.save();
            res.json(updatedPeminjaman);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deletePeminjaman: async (req, res) => {
        try {
            const peminjaman = await Peminjaman.findById(req.params.id);
            if (peminjaman == null) {
                return res.status(404).json({ message: 'Peminjaman not found' });
            }
            await peminjaman.remove();
            res.json({ message: 'Peminjaman deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
