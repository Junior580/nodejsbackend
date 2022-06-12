const mongoose = require("mongoose");

function client() {
    mongoose
        .connect("mongodb://172.17.0.2:27017/cluster")
        .then(() => {
            console.log("🖥 Conected to DB");
        })
        .catch((err) => {
            console.log("Não foi possivel conectar ao mongoDB: " + err);
        });
}
module.exports = client;
