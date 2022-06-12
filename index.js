const express = require("express");
const app = express();
const conectDb = require("./src/connections/connectToDB");
const routes = require("./src/routes/routes");

app.use(express.json());
conectDb();

app.use(routes);

const port = 3000;
app.listen(port, () => {
    console.log("🚀 Server is running.");
});
