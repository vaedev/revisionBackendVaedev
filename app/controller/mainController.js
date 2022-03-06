const dataMapper = require('../dataMapper')

const mainController = {
  getHome: (req, res) => {
    res.render("accueil");
  },
  getAbout: (req, res) => {
    res.render("about");
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
