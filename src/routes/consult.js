//Rute for new consult
const express = require('express');
const router = express.Router();

//Controllers 
const consultaController = require("../collections/consultController");

//Metodo Post 
router.post("/", consultaController.consultaPost);


module.exports = router;
