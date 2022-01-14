const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const path = require('path')
const app = express()
const port = 3000;

//--------------------------------------------//
const handlebars = require('express-handlebars')


//Routes
const route = require('./routes')
const db = require('./config/db')

//Connect database
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json())

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(methodOverride('_method'))

//HTTP logger
app.use(morgan('combined'))

//Route init
route(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})