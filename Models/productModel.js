const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,

    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;