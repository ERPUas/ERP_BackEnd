const Ulasan = require('../models/ulasan');

module.exports = {
    getAllUlasan: async (req, res) => {
        try {
            const ulasan = await Ulasan.find()
                .populate('UserID', 'username')
                .populate({
                    path: 'PelangganID',
                    select: 'name Gambar'
                });
            res.status(200).json(ulasan);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUlasanById: async (req, res) => {
        try {
            const ulasan = await Ulasan.findById(req.params.id)
                .populate('UserID', 'username')
                .populate({
                    path: 'PelangganID',
                    select: 'name Gambar'
                });
            if (!ulasan) {
                return res.status(404).json({ message: 'Ulasan not found' });
            }
            res.status(200).json(ulasan);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    addUlasan: async (req, res) => {
        try {
            const newUlasan = new Ulasan(req.body);
            await newUlasan.save();
            res.status(201).json(newUlasan);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateUlasan: async (req, res) => {
        try {
            const ulasan = await Ulasan.findByIdAndUpdate(req.params.id, req.body, { new: true })
                .populate({
                    path: 'PelangganID',
                    select: 'name Gambar'
                });
            if (!ulasan) {
                return res.status(404).json({ message: 'Ulasan not found' });
            }
            res.status(200).json(ulasan);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteUlasan: async (req, res) => {
        try {
            const ulasan = await Ulasan.findByIdAndDelete(req.params.id);
            if (!ulasan) {
                return res.status(404).json({ message: 'Ulasan not found' });
            }
            res.status(200).json({ message: 'Ulasan deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
