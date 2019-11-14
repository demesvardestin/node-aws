{"changed":true,"filter":false,"title":"server.js","tooltip":"/server.js","value":"","undoManager":{"mark":20,"position":22,"stack":[[{"start":{"row":0,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["const express = require('express');","const bodyParser = require('body-parser');","const dbConfig = require('./config/database.config.js');","const mongoose = require('mongoose');","const app = express();","","app.use(bodyParser.urlencoded({ extended: true }));","app.use(bodyParser.json());","","mongoose.Promise = global.Promise;","","// Connecting to the database","mongoose.connect(dbConfig.url, {","    useNewUrlParser: true,","    useUnifiedTopology: true","}).then(() => {","    console.log(\"Successfully connected to the database\");    ","}).catch(err => {","    console.log('Could not connect to the database. Exiting now...', err);","    process.exit();","});","","require('./app/routes/app.routes.js')(app);","","app.set('views', './views');","app.set('view engine', 'pug');","app.get('/*', (req, res) => {","    res.redirect('/addresses');","});","","// listen for requests","app.listen(process.env.PORT || 3000, () => {","    console.log(\"Server is listening on port 3000\");","});"],"id":1}],[{"start":{"row":1,"column":42},"end":{"row":3,"column":37},"action":"remove","lines":["","const dbConfig = require('./config/database.config.js');","const mongoose = require('mongoose');"],"id":2}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["a"],"id":3},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["p"]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["p"]},{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":["/"]}],[{"start":{"row":23,"column":24},"end":{"row":23,"column":27},"action":"remove","lines":["pug"],"id":4},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["e"]},{"start":{"row":23,"column":25},"end":{"row":23,"column":26},"action":"insert","lines":["j"]},{"start":{"row":23,"column":26},"end":{"row":23,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":16},"action":"remove","lines":["redirect"],"id":5},{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["r"]},{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["e"]},{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["n"]},{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["d"]},{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["e"]},{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":27},"end":{"row":18,"column":3},"action":"remove","lines":["","","mongoose.Promise = global.Promise;","","// Connecting to the database","mongoose.connect(dbConfig.url, {","    useNewUrlParser: true,","    useUnifiedTopology: true","}).then(() => {","    console.log(\"Successfully connected to the database\");    ","}).catch(err => {","    console.log('Could not connect to the database. Exiting now...', err);","    process.exit();","});"],"id":6}],[{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":[","],"id":7}],[{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":12,"column":29},"end":{"row":12,"column":31},"action":"insert","lines":["{}"],"id":9}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":["s"],"id":10},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"insert","lines":["t"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"insert","lines":["a"]},{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"insert","lines":["t"]},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"insert","lines":["i"]},{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"insert","lines":["c"]}],[{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"insert","lines":["_"],"id":11},{"start":{"row":12,"column":37},"end":{"row":12,"column":38},"action":"insert","lines":["p"]},{"start":{"row":12,"column":38},"end":{"row":12,"column":39},"action":"insert","lines":["a"]},{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"insert","lines":["t"]},{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"insert","lines":["h"]},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"insert","lines":[":"]}],[{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"insert","lines":[" "],"id":12}],[{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"insert","lines":[" "],"id":13}],[{"start":{"row":12,"column":44},"end":{"row":12,"column":46},"action":"insert","lines":["''"],"id":14}],[{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":[" "],"id":15}],[{"start":{"row":12,"column":45},"end":{"row":12,"column":46},"action":"insert","lines":["s"],"id":16},{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":["t"]},{"start":{"row":12,"column":47},"end":{"row":12,"column":48},"action":"insert","lines":["a"]},{"start":{"row":12,"column":48},"end":{"row":12,"column":49},"action":"insert","lines":["t"]},{"start":{"row":12,"column":49},"end":{"row":12,"column":50},"action":"insert","lines":["i"]},{"start":{"row":12,"column":50},"end":{"row":12,"column":51},"action":"insert","lines":["c"]}],[{"start":{"row":12,"column":45},"end":{"row":12,"column":46},"action":"insert","lines":["a"],"id":17},{"start":{"row":12,"column":46},"end":{"row":12,"column":47},"action":"insert","lines":["p"]},{"start":{"row":12,"column":47},"end":{"row":12,"column":48},"action":"insert","lines":["p"]},{"start":{"row":12,"column":48},"end":{"row":12,"column":49},"action":"insert","lines":["/"]}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["/"],"id":18}],[{"start":{"row":12,"column":17},"end":{"row":12,"column":25},"action":"remove","lines":["ddresses"],"id":19},{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"remove","lines":["a"]}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["i"],"id":20},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["n"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["d"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["e"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["x"]}],[{"start":{"row":12,"column":27},"end":{"row":12,"column":51},"action":"remove","lines":["tatic_path: 'app/static'"],"id":21},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["s"]}],[{"start":{"row":16,"column":31},"end":{"row":16,"column":35},"action":"remove","lines":["3000"],"id":23},{"start":{"row":16,"column":31},"end":{"row":16,"column":32},"action":"insert","lines":["8"]},{"start":{"row":16,"column":32},"end":{"row":16,"column":33},"action":"insert","lines":["0"]},{"start":{"row":16,"column":33},"end":{"row":16,"column":34},"action":"insert","lines":["8"]},{"start":{"row":16,"column":34},"end":{"row":16,"column":35},"action":"insert","lines":["0"]}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":49},"action":"remove","lines":["3000"],"id":24},{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["8"]},{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["0"]},{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["8"]},{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["0"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":10},"end":{"row":7,"column":14},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1573763295948}