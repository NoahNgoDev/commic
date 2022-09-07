const path = require('path');
const express = require('express');
const exhandlerbars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const mongodb = require('./config/mongodb/indexMongodb.js');
const indexRouters = require('./Routers/storyRouter');



// connect to server
mongodb.connect();
const port = 9000;


// express urlencode and json
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Public')));
app.use(methodOverride('_method'));

//Template engine 
app.engine('hbs', exhandlerbars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'Resources', 'views'));



// routers web
//indexRouters(app);



// check connect with sever
app.listen(port, () => {
    console.log('gate post: ' + port);
});

