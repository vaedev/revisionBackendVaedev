const express = require("express");
const mainController = require("./controller/mainController");

const router = express.Router();

router.get("/", mainController.getHome);
router.get("/livres", mainController.getLivres);
router.get("/livres/:id", mainController.getOneLivre);


module.exports = router;
