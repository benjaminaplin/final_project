//dependencies
var express = require('express');
var path = require('path');
var fs = require("fs");
var ejs = require("ejs");
var app = express();
var request = require('request');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// app.locals.appdata = require('./data.json');
//middleware
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//config
app.listen(80, function() {
  console.log("I'm listening for politics on 80!");
});

app.get('/', function(req,res){
    var html = fs.readFileSync('./views/index.html.ejs', 'utf8');
    var rendered = ejs.render(html);
    res.send(rendered);
})



