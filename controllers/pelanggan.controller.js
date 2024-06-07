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
        try {
            const newPelanggan = new Pelanggan(req.body);
            await newPelanggan.save();
            res.status(201).json(newPelanggan);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updatePelanggan: async (req, res) => {
        try {
            const pelanggan = await Pelanggan.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!pelanggan) {
                return res.status(404).json({ message: 'Pelanggan not found' });
            }
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
