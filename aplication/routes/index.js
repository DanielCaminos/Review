const express = require('express');
const router = express.Router();
const climaController = require('../controller/climaController')

router.get('/', climaController.getData);

module.exports = router;