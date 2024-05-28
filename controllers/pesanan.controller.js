const Pesanan = require('../models/pesanan');

module.exports = {
    getAllPesanan: async (req, res) => {
        try {
            const pesanan = await Pesanan.find().populate('pelangganID').populate('barangID');
            res.json(pesanan);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getPesananById: async (req, res) => {
        try {
            const pesanan = await Pesanan.findById(req.params.id).populate('pelangganID').populate('barangID');
            if (pesanan == null) {
                return res.status(404).json({ message: 'Pesanan not found' });
            }
            res.json(pesanan);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    createPesanan: async (req, res) => {
        const pesanan = new Pesanan({
            pelangganID: req.body.pelangganID,
            barangID: req.body.barangID,
            tanggalMulaiPemesanan: req.body.tanggalMulaiPemesanan,
            tanggalAkhirPemesanan: req.body.tanggalAkhirPemesanan,
            status: req.body.status
        });

        try {
            const newPesanan = await pesanan.save();
            const populatedPesanan = await newPesanan.populate('pelangganID').populate('barangID').execPopulate();
            res.status(201).json(populatedPesanan);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    updatePesanan: async (req, res) => {
        try {
            const pesanan = await Pesanan.findById(req.params.id);
            if (pesanan == null) {
                return res.status(404).json({ message: 'Pesanan not found' });
            }
    
            if (req.body.pelangganID != null) {
                pesanan.pelangganID = req.body.pelangganID;
            }
            if (req.body.barangID != null) {
                pesanan.barangID = req.body.barangID;
            }
            if (req.body.tanggalMulaiPemesanan != null) {
                pesanan.tanggalMulaiPemesanan = req.body.tanggalMulaiPemesanan;
            }
            if (req.body.tanggalAkhirPemesanan != null) {
                pesanan.tanggalAkhirPemesanan = req.body.tanggalAkhirPemesanan;
            }
            if (req.body.status != null) {
                pesanan.status = req.body.status;
            }
    
            const updatedPesanan = await pesanan.save();
            res.json(updatedPesanan); // Mengembalikan objek pesanan yang diperbarui tanpa populate
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    


    deletePesanan: async (req, res) => {
        try {
            const pesanan = await Pesanan.findById(req.params.id);
            if (!pesanan) {
                return res.status(404).json({ message: 'Pesanan not found' });
            }
            await Pesanan.deleteOne({ _id: req.params.id });
            res.json({ message: 'Pesanan deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    
};
