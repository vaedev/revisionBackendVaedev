const dataMapper = require('../dataMapper')

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
  getOneLivre:(req,res) =>{
    let titleName=(req.params.nom); 
    res.render("livres/oneLivre", {
      nom:titleName
    });
  }
};

module.exports = mainController;
