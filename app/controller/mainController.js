const dataMapper = require("../models/dataMapper");

const mainController = {
  getHome: (req, res) => {
    res.render("accueil");
  },
  getLivres: (req, res) => {
    res.render("livres/livres");
  },
  data: (req, res) => {
    const test = {
      titre: "Test",
      items: ["un", "deux", "trois"],
    };
    res.render("data", { model: test });
  },
  getOneLivre: (req, res) => {
    let titleName = req.params.nom;
    res.render("livres/oneLivre", {
      nom: titleName,
    });
  },
  getBooks: async (req, res) => {
    try{
      const books = await dataMapper.getAllBooks();
      res.render('books', {books});
      
    } catch (error) {
      console.log(error);
      res.status(500).send(`quelque chose ne marche pas`)
    }
  },
};

module.exports = mainController;
