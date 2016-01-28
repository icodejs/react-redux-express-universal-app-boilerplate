require('babel/register');

var express = require('express');
var path = require('path');
var engine = require('react-engine');
var pkgJson = require('./package');
var app = express();

app.engine('.js', engine.server.create({}));

app.set('views', path.join(__dirname, './public/js/views'));
app.set('view engine', 'js');
app.set('view', engine.expressView);

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
    res.render('home', pkgJson)
});

module.exports = app;