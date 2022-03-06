const { Pool } = require('pg');

const pool = new Pool(process.env);

console.log(`✅ DB client connected`);

// On peut insérer ici quelques lignes de code pour tester notre BDD, mais le reste devra se faire dans le dataMapper.

// const sql_create = `CREATE TABLE IF NOT EXISTS Livres (
//     Livre_ID SERIAL PRIMARY KEY,
//     Titre VARCHAR(100) NOT NULL,
//     Auteur VARCHAR(100) NOT NULL,
//     Commentaires TEXT
//   );`;
  
//   pool.query(sql_create, [], (err, result) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log("Création réussie de la table 'Livres'");
//   });

module.exports = pool;

