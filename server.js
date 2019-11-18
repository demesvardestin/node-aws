const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/app.routes.js')(app);

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is listening on port 8080");
});