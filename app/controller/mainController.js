const { getOneBooksByID } = require("../models/dataMapper");
const dataMapper = require("../models/dataMapper");

const mainController = {
  getHome: (req, res) => {
    res.render("accueil");
  },
  getLivres: async (req, res) => {
    try {
      const livres = await dataMapper.getAllBooks();
      console.log(livres);
      res.render("livres/livres", { livres });
    } catch (err) {
      console.log(err).status(500).render("something wrong");
    }
  },
  getOneLivre: async (req, res) => {
    const livreID = Number(req.params.id);
    try {
      const livreTAB = await dataMapper.getOneBooksByID(livreID);
      const livre = livreTAB[0];
      console.log(livre);
      res.render("livres/oneLivre", {livre});
    } catch (err) {
      console.log(err).status(500).render("something wrong");
    }
  },
};

module.exports = mainController;
