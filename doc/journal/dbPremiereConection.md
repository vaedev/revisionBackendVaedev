# première conexion

Il n'y a pas à dire, quand ça marche, c'est trop bien.

l'initialisation avec pg-admin est enfantine, la gestion des mots de passe, des users...

Ce petit snippet va permettre de vérifier que l'on a bien notre connexion de fait. Il ne faut pas hésiter à tester l'erreur en remplaçant ici livres par autre chose qui n'existe pas dans la db.

```js
const monTest = pool.query("SELECT * FROM livres", (err, res) => {
  if (err) return console.log(err);

  console.log(res);
});
```

Attention à ne pas oublier de bien mettre pool dans le dataMapper, je viens de perdre quelques minutes car il était encore configuré en client...

bien chopper la logique index => router => controller => database et ça passe tout seul.

j'ai enfin réussi à mettre un vue avec la méthode, voici les étapes:

dans le dataMapper :

```js
const dataMapper = {
  getAllBooks: async () => {
    const sqlQuery = `SELECT * FROM livres;`;
    const data = await pool.query(sqlQuery);
    return data.rows;
  },
};
```

dans le controller :

```js
getBooks: async (req, res) => {
    try{
      const books = await dataMapper.getAllBooks();
      res.render('books', {books});

    } catch (error) {
      console.log(error);
      res.status(500).send(`quelque chose ne marche pas`)
    }
  },
```

et ensuite ne pas oublier la vue :

```js
<% for(const book of books) { %>
    <div>
        <h3><%= book.titre %></h3>
        <p><%=book.auteur%></p>
        <p><%=book.nb_page%></p>
    </div>
    <% } %>
```

le minimum est ici.
