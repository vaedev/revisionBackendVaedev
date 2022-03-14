require('dotenv').config();
const express = require('express');
const router=require('./app/router');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(morgan('dev'))

app.use(express.static('public'));

app.use(router)

app.use((req, res, next) => {
    // Met le code HTTP à 404 et affiche un message au client
    res.status(404).send("J'ai pas trouvé, tu cherche le film Kaamelott ?");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});