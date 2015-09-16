//dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var ejs = require("ejs");
var app = express();
var request = require('request');

//global variables
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

// app.locals.appdata = require('./data.json');
//middleware
var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

//config
app.listen(3000, function() {
  console.log("I'm listening for ridic politics on 3000!");
});

var candidates = [
    // 'chafee': {},
    {'name':'Clinton', 'candId': 'P00003392', 'commId': 'C00575795'},
    {'name':'O\'Malley', 'candId': 'P60007671', 'commId': 'C00578658'},
    {'name':'Sanders', 'candId': 'P60007168', 'commId': 'C00577130'},
    // {'name':'webb', 'candId': 'P60008885', 'commId': 'C00581215'},
    {'name':'Bush', 'candId': 'P60008059', 'commId': 'C00579458'},


    {'name':'Carson','candId': 'P60005915', 'commId': 'C00573519'},
    // // {'name':'christie','candId': 'P60008521', 'commId': 'C00580399'},
    {'name':'Cruz','candId': 'P60006111', 'commId': 'C00574624'},
    {'name': 'Fiorina','candId': 'P60007242', 'commId': 'C00577312'},
    // // {'name':'gilmore': {},
    {'name':'Graham','candId': 'P60007697', 'commId':'C00578757'},
    {'name':'Huckabee','candId': 'P80003478', 'commId': 'C00577981'},
    {'name':'Jindal','candId': 'P60008398', 'commId': 'C00580159'},
    // // {'name':'kasich','candId': 'P60003670', 'commId': 'C00581876'},
    // // '{'name':'pataki': {},
    {'name':'Paul','candId': 'P40003576', 'commId': 'C00575449'},
    {'name':'Rubio','candId': 'P60006723', 'commId': 'C00458844'},
    {'name':'Santorum','candId': 'P20002721', 'commId': 'C00578492'},
    {'name':'Trump','candId': 'P80001571', 'commId': 'C00580100' },
    // {'name':'walker','candId': 'P60006046', 'commId': 'C00580480'}
]

app.get('/', function(req,res){
  res.redirect('/candidate');
})

app.get('/candidate', function(req, res){ 
  var candidateReceiptsArr = [];

  candidates.forEach(function(e,i,a){ 
    var commId = e.commId;
    var key = 'w9zQ9pt9PNe6et305JsAtxiNQvhygjQC8yrCMMc8';

    var requestTotalUrl = 'https://api.open.fec.gov/v1/committee/'+ commId +'/totals/?api_key='+ key +'&page=1&per_page=20&sort_nulls_large=true&sort=-cycle';
    request.get(requestTotalUrl, function(err, response, body){
      var parsedJSON = JSON.parse(body);
      var candidateReceipts = parsedJSON.results[0];
      candidateReceiptsArr.push(candidateReceipts)
      // console.log(e.commId, myParsedData.results[0].receipts)
      });
    });
    console.log(candidateReceiptsArr);
    // var html = fs.readFileSync('./views/index.html.ejs', 'utf8');
    // var rendered = ejs.render(html, {candidateReceipts:candidateReceipts});
    // res.send(rendered);

});

