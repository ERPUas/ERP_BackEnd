const Barang = require('../models/barang');

module.exports = {
    getAllBarang: async (req, res) => {
        try {
            const barang = await Barang.find();
            res.json(barang);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    createBarang: async (req, res) => {
        const barang = new Barang({
            Merek: req.body.Merek,
            Model: req.body.Model,
            Tahun: req.body.Tahun,
            Warna: req.body.Warna,
            Biaya: req.body.Biaya,
            Status: req.body.Status,
            Stok: req.body.Stok
        });

        if (req.file) {
            barang.Gambar.data = req.file.buffer;
            barang.Gambar.contentType = req.file.mimetype;
        }

        try {
            const newBarang = await barang.save();
            res.status(201).json(newBarang);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getBarangById: async (req, res) => {
        try {
            const barang = await Barang.findById(req.params.id);
            if (barang == null) {
                return res.status(404).json({ message: 'Barang not found' });
            }
            res.json(barang);
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    updateBarang: async (req, res) => {
        try {
            const barang = await Barang.findById(req.params.id);
            if (barang == null) {
                return res.status(404).json({ message: 'Barang not found' });
            }

            if (req.body.Merek != null) {
                barang.Merek = req.body.Merek;
            }
            if (req.body.Model != null) {
                barang.Model = req.body.Model;
            }
            if (req.body.Tahun != null) {
                barang.Tahun = req.body.Tahun;
            }
            if (req.body.Warna != null) {
                barang.Warna = req.body.Warna;
            }
            if (req.body.Biaya != null) {
                barang.Biaya = req.body.Biaya;
            }
            if (req.body.Status != null) {
                barang.Status = req.body.Status;
            }
            if (req.body.Stok != null) {
                barang.Stok = req.body.Stok;
            }
            if (req.file) {
                barang.Gambar.data = req.file.buffer;
                barang.Gambar.contentType = req.file.mimetype;
            }

            const updatedBarang = await barang.save();
            res.json(updatedBarang);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteBarang: async (req, res) => {
        try {
            const barang = await Barang.findById(req.params.id);
            if (barang == null) {
                return res.status(404).json({ message: 'Barang not found' });
            }
            await barang.remove();
            res.json({ message: 'Barang deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
