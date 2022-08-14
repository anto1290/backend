const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
// Router
const productRouter = require('./Routes/routerProduct');


app.use(morgan('dev'));


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Testing Middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.cookies);
    next();
});
app.use('/api/v1/products', productRouter);



module.exports = app;