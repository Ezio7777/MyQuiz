const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const mongoURL = `${process.env.MONGO_DB_URL}`;

const connectToMongo = () => {
  mongoose.connect(mongoURL).then(console.log("connected with mongoose at "));
};

module.exports = connectToMongo;
