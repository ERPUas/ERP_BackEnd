const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UlasanSchema = new Schema({
    UserID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    PelangganID: {
        type: Schema.Types.ObjectId,
        ref: 'Pelanggan',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    ulasan: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ulasan', UlasanSchema);
