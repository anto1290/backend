const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const client = new MongoClient(process.env.DATABASE);




module.exports = client;