const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/MyNotebook?readPreference=primary&directConnection=true&tls=false";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully.");
    })
    mongoose.set('strictQuery', true)
}

module.exports = connectToMongo;