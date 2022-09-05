const path = require('path');
const express = require('express');
const exhandlerbars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();

const port = 9000;


app.use(express.static(path.join(__dirname, 'Public')))
app.use(methodOverride('_method'))

//Template engine 
app.engine('hbs', exhandlerbars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'Resources', 'views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/search', (req, res) => {
    res.render('search')
});


app.listen(port, () => {
    console.log('gate post: ' + port);
});