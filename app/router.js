const express = require('express');
const mainController = require('./controller/mainController')

const router = express.Router();

router.get('/',mainController.getHome);
router.get('/about',mainController.getLivres);
router.get('/data',mainController.data);

module.exports = router;