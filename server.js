const path = require('path');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');

const Models = require('./models/index.js');

const app = express();
const PORT = process.env.PORT || 5001;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

// app.listen(PORT, () => console.log(`Now listening on ${PORT}`));

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
  