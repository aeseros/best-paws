const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("lookin' good, feline good")
});

app.listen(process.env.PORT || 5001);