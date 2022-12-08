const express = require('express');
const router = express.Router();

const funcionarios = require("../controlles/funcionario.controller");

router.get("/read", funcionarios.read);
router.get("/read/:id_funcionario", funcionarios.readAll);
router.post("/create", funcionarios.create);
router.delete("/del/:id_funcionario", funcionarios.del);
router.put("/update", funcionarios.update);

module.exports = router;