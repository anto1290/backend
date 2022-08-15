const express = require('express');
const { ObjectId } = require('mongodb');
const client = require('../config/mongoDb');
const db = client.db('latihan')
const router = express.Router();

router
    .post('/', (req, res) => {
        db.collection('products').insertOne(req.body, (err, product) => {
            if (err) return res.status(500).send(err)
            res.status(201).json({
                status: 'success',
                data: {
                    product
                }
            });
        }
        )
    })
    .get('/', (req, res) => {
        db.collection('products')
            .find()
            .toArray((err, products) => {
                if (err) throw err;
                res.status(200).json({
                    status: 'success',
                    results: products.length,
                    data: {
                        products
                    }
                });
            }
            )
    });
router
    .get('/:id', (req, res) => {
        db.collection('products')
            .findOne({ _id: ObjectId(req.params.id) }, (err, product) => {
                if (err) throw err;
                res.status(200).json({
                    status: 'success',
                    data: {
                        product
                    }
                });
            }
            )
    })
    .put('/:id', (req, res) => {
        db.collection('products')
            .updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body }, (err, product) => {
                if (err) throw err;
                res.status(200).json({
                    status: 'success',
                    data: {
                        product
                    }
                });
            }
            )
    })
    .delete('/:id', (req, res) => {
        db.collection('products')
            .deleteOne({ _id: ObjectId(req.params.id) }, (err, product) => {
                if (err) throw err;
                res.status(204).json({
                    status: 'success',
                    data: null
                });
            }
            )
    });
module.exports = router;