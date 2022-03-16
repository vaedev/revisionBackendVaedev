const pool = require(`../database`);

const dataMapper = {
  getAllBooks: async () => {
    const sqlQuery = `SELECT * FROM livres ;`;
    const data = await pool.query(sqlQuery);
    return data.rows;
  },
  getOneBooksByID: async (livre_id) =>{
    const sqlQuery = `SELECT * FROM livres WHERE livre_id = $1`;
    const data = await pool.query(sqlQuery,[livre_id]);
    return data.rows;
  }
};

module.exports = dataMapper;

// ici un test simple :
// pool.query("SELECT * FROM livres", (err, res) => {
//     if (err) return console.log(err);

//     console.log(res);






// const sqlQuery = `SELECT * FROM livres INNER JOIN rhetoric ON livres.rhetoric_id = rhetoric.rhetoric_id;`;