const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
app.use(express.static('public'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    // res.send("lookin' good, feline good")
    res.render('home');
});
app.get('/comments', (req, res) => {
    const comments = [{title: 'hi', message: 'hihi'}, {title: 'hi', message: 'hihi'}, {title: 'hi', message: 'hihi'}];
    res.render('comments', {comments: comments});
})
app.listen(process.env.PORT || 5001);
