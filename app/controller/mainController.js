const dataMapper = require('../dataMapper')

const mainController = {
  getHome: (req, res) => {
    res.render("accueil");
  },
  getLivres: (req, res) => {
    res.render("livres");
  },
  data: (req, res) => {
    const test = {
      titre: "Test",
      items: ["un", "deux", "trois"],
    };
    res.render("data", { model: test });
  },
};

module.exports = mainController;
