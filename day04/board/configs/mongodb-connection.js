const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://yeoun0570:lSOWwsGxNn84NpKk@cluster0.0dagz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = function (callback) {
    return MongoClient.connect(uri,callback)
}