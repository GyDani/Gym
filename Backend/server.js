const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
})

const PORT = 3500;

app.listen(PORT);

console.log('listening on port');