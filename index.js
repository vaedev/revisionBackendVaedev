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


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});