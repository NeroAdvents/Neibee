var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const layout = require('express-layout');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.set('views', __dirname + '/up');
app.set('view engine', 'ejs');
app.use('/', routes);
app.listen(4200);
console.log('running server on port 4200');
