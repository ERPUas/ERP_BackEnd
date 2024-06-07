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
        const { Merek, Model, Tahun, Warna, Biaya, Status, Stok } = req.body;
        const Gambar = req.file ? req.file.path : null;

        const barang = new Barang({
            Merek,
            Model,
            Tahun,
            Warna,
            Biaya,
            Status,
            Stok,
            Gambar
        });

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
            if (!barang) {
                return res.status(404).json({ message: 'Barang not found' });
            }
            res.json(barang);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateBarang: async (req, res) => {
        try {
            const barang = await Barang.findById(req.params.id);
            if (!barang) {
                return res.status(404).json({ message: 'Barang not found' });
            }

            barang.Merek = req.body.Merek ?? barang.Merek;
            barang.Model = req.body.Model ?? barang.Model;
            barang.Tahun = req.body.Tahun ?? barang.Tahun;
            barang.Warna = req.body.Warna ?? barang.Warna;
            barang.Biaya = req.body.Biaya ?? barang.Biaya;
            barang.Status = req.body.Status ?? barang.Status;
            barang.Stok = req.body.Stok ?? barang.Stok;

            if (req.file) {
                barang.Gambar = req.file.path;
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
            if (!barang) {
                return res.status(404).json({ message: 'Barang not found' });
            }
            await Barang.deleteOne({ _id: req.params.id });
            res.json({ message: 'Barang deleted' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
        res.json({ message: 'Barang deleted successfully', deletedItem });
    }
};
