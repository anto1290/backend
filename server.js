const app = require('./app');
const client = require('./config/mongoDb');
const connect = require('./config/mongooseDb');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
// Native MongoDB driver
(async () => {
    try {
        await client.connect();
        console.log("DB connection successful!");
    } catch (error) {
        console.log(error);
    }
})();
// Mongoose ORM
connect();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
