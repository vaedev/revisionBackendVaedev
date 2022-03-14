const pool = require(`../database`);
console.log(`LE DATAMAPPER FTW`);

const dataMapper = {
  getAllBooks: async () => {
    const sqlQuery = `SELECT * FROM livres;`;
    const data = await pool.query(sqlQuery);
    return data.rows;
  },
};

module.exports = dataMapper;

// ici un test simple :
// pool.query("SELECT * FROM livres", (err, res) => {
//     if (err) return console.log(err);

//     console.log(res);
