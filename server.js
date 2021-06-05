const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const routes = require('./controllers')
const app = express();
const hbs = exphbs.create();

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// app.get('/', (req, res) => {
//     res.send("lookin' good, feline good")
// });

// app.listen(process.env.PORT || 5001);

// ======= Cesar's updates
// TODO: Decide what to keep

// const exphbs  = require('express-handlebars');

// app.use(express.static('public'))

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');


// app.get('/', (req, res) => {
//     // res.send("lookin' good, feline good")
//     res.render('home');
// });

// app.get('/comments', (req, res) => {
//     const comments = [{title: 'hi', message: 'hihi'}, {title: 'hi', message: 'hihi'}, {title: 'hi', message: 'hihi'}];
//     res.render('comments', {comments: comments});
// })

// app.listen(process.env.PORT || 5001);
