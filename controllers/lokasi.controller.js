const Lokasi = require('../models/lokasi');

module.exports = {
    getAllLokasi: async (req, res) => {
        try {
            const lokasi = await Lokasi.find();
            res.json(lokasi);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createLokasi: async (req, res) => {
        const lokasi = new Lokasi({
            namaLokasi: req.body.namaLokasi,
            Alamat: req.body.Alamat
        });

        try {
            const newLokasi = await lokasi.save();
            res.status(201).json(newLokasi);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getLokasiById: async (req, res) => {
        try {
            const lokasi = await Lokasi.findById(req.params.id);
            if (lokasi == null) {
                return res.status(404).json({ message: 'Lokasi not found' });
            }
            res.json(lokasi);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    updateLokasi: async (req, res) => {
        try {
            const lokasi = await Lokasi.findById(req.params.id);
            if (lokasi == null) {
                return res.status(404).json({ message: 'Lokasi not found' });
            }
            if (req.body.namaLokasi != null) {
                lokasi.namaLokasi = req.body.namaLokasi;
            }
            if (req.body.Alamat != null) {
                lokasi.Alamat = req.body.Alamat;
            }
            const updatedLokasi = await lokasi.save();
            res.json(updatedLokasi);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteLokasi: async (req, res) => {
        try {
            const lokasi = await Lokasi.findById(req.params.id);
            if (lokasi == null) {
                return res.status(404).json({ message: 'Lokasi not found' });
            }
            await lokasi.remove();
            res.json({ message: 'Lokasi deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
