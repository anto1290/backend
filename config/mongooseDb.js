const { mongoose } = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const connect = () => mongoose
    .connect(process.env.DATABASE_LOCAL_MONGOOSE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connection successful!'));

module.exports = connect;