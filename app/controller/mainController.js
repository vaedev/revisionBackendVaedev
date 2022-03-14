const dataMapper = require("../models/dataMapper");

const mainController = {
  getHome: (req, res) => {
    res.render("accueil");
  },
  getLivres: async (req, res) => {
    try {
      const livres = await dataMapper.getAllBooks();
      res.render("livres/livres", { livres });
    } catch (err) {
      console.log(err).status(500).render("something wrong");
    }
  },
  getOneLivre: (req, res) => {
    let titleName = req.params.nom;
    res.render("livres/oneLivre", {
      nom: titleName,
    });
  },
};

module.exports = mainController;
