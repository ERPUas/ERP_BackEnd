const Pembayaran = require('../models/pembayaran');

module.exports = {
    getAllPembayaran: async (req, res) => {
        try {
            const pembayaran = await Pembayaran.find();
            res.json(pembayaran);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createPembayaran: async (req, res) => {
        const pembayaran = new Pembayaran({
            pesananID: req.body.pesananID,
            jenisTransaksi: req.body.jenisTransaksi,
            tanggal: req.body.tanggal,
            jumlahPembayaran: req.body.jumlahPembayaran
        });

        try {
            const newPembayaran = await pembayaran.save();
            res.status(201).json(newPembayaran);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getPembayaranById: async (req, res) => {
        try {
            const pembayaran = await Pembayaran.findById(req.params.id);
            if (pembayaran == null) {
                return res.status(404).json({ message: 'Pembayaran not found' });
            }
            res.json(pembayaran);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    updatePembayaran: async (req, res) => {
        try {
            const pembayaran = await Pembayaran.findById(req.params.id);
            if (pembayaran == null) {
                return res.status(404).json({ message: 'Pembayaran not found' });
            }
            if (req.body.pesananID != null) {
                pembayaran.pesananID = req.body.pesananID;
            }
            if (req.body.jenisTransaksi != null) {
                pembayaran.jenisTransaksi = req.body.jenisTransaksi;
            }
            if (req.body.tanggal != null) {
                pembayaran.tanggal = req.body.tanggal;
            }
            if (req.body.jumlahPembayaran != null) {
                pembayaran.jumlahPembayaran = req.body.jumlahPembayaran;
            }
            const updatedPembayaran = await pembayaran.save();
            res.json(updatedPembayaran);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deletePembayaran: async (req, res) => {
        try {
            const pembayaran = await Pembayaran.findById(req.params.id);
            if (pembayaran == null) {
                return res.status(404).json({ message: 'Pembayaran not found' });
            }
            await pembayaran.remove();
            res.json({ message: 'Pembayaran deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
