const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const path = require('path');
// Router
const productRouterv1 = require('./Routes/routerProductv1');
const productRouter = require('./Routes/routerProduct');

app.use(morgan('dev'));


// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Cors Middleware
const allowlist = ['http://localhost:3005', 'http://localhost:5000', 'https://frontend-temp.herokuapp.com/'];
const corsOptions = {
    origin: (origin, callback) => {
        if (allowlist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}
app.use(cors(corsOptions))
// Static Files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Testing Middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.cookies);
    next();
});
app.use('/api/v1/products', productRouterv1);
app.use('/api/v2/products', productRouter);



module.exports = app;