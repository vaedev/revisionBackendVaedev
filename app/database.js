const { Pool } = require("pg");

const pool = new Pool(process.env);

console.log(`✅ DB client connected`);

// pool.query('SELECT * FROM livres',(err,res) =>{
//     if(err) return console.log(err);

//     console.log(res);
// });



module.exports = pool;
