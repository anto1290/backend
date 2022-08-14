const Product = require('../Models/productModel');
exports.getAllProducts = async (req, res, next) => {
    try {
        Product.sync();
        const products = await Product.findAll();
        res.status(200).json({
            message: 'All products fetched successfully',
            products: products
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to fetch products',
            error: err
        });
    }
}
exports.createProduct = async (req, res, next) => {
    console.log(req.file);
    console.log(req.body);
    try {
        Product.sync();
        const product = await Product.create(req.body);
        res.status(201).json({
            message: 'Product created successfully',
            product: product
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create product',
            error: err
        });
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        Product.sync();
        const product = await Product.findByPk(req.params.id);
        res.status(200).json({
            message: 'Product fetched successfully',
            product: product
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to fetch product',
            error: err
        });
    }
}
exports.updateProduct = async (req, res, next) => {
    try {
        Product.sync();
        const product = await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            message: 'Product updated successfully',
            product: product
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update product',
            error: err
        });
    }
}
exports.deleteProduct = async (req, res, next) => {
    try {
        Product.sync();
        const product = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            message: 'Product deleted successfully',
            product: product
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete product',
            error: err
        });
    }
}