const routes = require("express").Router();
const padraoController = require("../controller/controller");

routes.get("/users/:id", padraoController.get);
routes.post("/usr", padraoController.post);

module.exports = routes;
