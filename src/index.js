const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

//--------------------------------------------//
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

//Routes
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// TEMPLATE ENGINE
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

//HTTP logger
app.use(morgan('combined'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
