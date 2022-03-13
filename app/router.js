const express = require('express');
const mainController = require('./controller/mainController')

const router = express.Router();

router.get('/',mainController.getHome);
router.get('/livres',mainController.getLivres);
router.get('/livres/:nom',mainController.getOneLivre);
router.get('/data',mainController.data);

module.exports = router;