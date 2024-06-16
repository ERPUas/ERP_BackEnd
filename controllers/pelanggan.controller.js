const Pelanggan = require('../models/pelanggan');

module.exports = {
    getAllPelanggan: async (req, res) => {
        try {
            const pelanggan = await Pelanggan.find().populate('UserID');
            res.status(200).json(pelanggan);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getPelangganById: async (req, res) => {
        try {
            const pelanggan = await Pelanggan.findById(req.params.id).populate('UserID');
            if (!pelanggan) {
                return res.status(404).json({ message: 'Pelanggan not found' });
            }
            res.status(200).json(pelanggan);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    addPelanggan: async (req, res) => {
        const {UserID, name, Alamat, NoTelp} = req.body
        const Gambar = req.file ? req.file.path : null;

        const pelanggan = new Pelanggan({
            UserID,
            name,
            Alamat,
            NoTelp,
            Gambar
        })
        try {
            const newPelanggan = await pelanggan.save();
            res.status(201).json(newPelanggan);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updatePelanggan: async (req, res) => {
        try {
            const pelanggan = await Pelanggan.findById(req.params.id);
            if (!pelanggan) {
                return res.status(404).json({ message: 'Pelanggan not found' });
            }
            pelanggan.UserID = req.body.UserID;
            pelanggan.name = req.body.name;
            pelanggan.Alamat = req.body.Alamat;
            pelanggan.NoTelp = req.body.NoTelp;

            if (req.file) {
                pelanggan.Gambar = req.file.path;
            }

            const updatedPelanggan = await pelanggan.save();
            res.status(200).json(pelanggan);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deletePelangganById: async (req, res) => {
        try {
            const pelanggan = await Pelanggan.findByIdAndDelete(req.params.id);
            if (!pelanggan) {
                return res.status(404).json({ message: 'Pelanggan not found' });
            }
            res.status(200).json({ message: 'Pelanggan deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
