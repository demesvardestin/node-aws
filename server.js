const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/app.routes.js')(app);

app.set('views', './app/views');

app.set('view engine', 'ejs');

app.get('/new', (req, res) => {
    res.render('new');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening on port 8080");
});