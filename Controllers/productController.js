const Product = require('../Models/productModel');


exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            status: 'success',
            results: products.length,
            data: {
                products
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error'
        });
    }
}

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error'
        });
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.find().where('_id').equals(req.params.id);
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error'
        });
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                product
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error'
        });
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Server Error'
        });
    }
}