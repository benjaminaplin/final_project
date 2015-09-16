//dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var ejs = require("ejs");
var app = express();
var request = require('request');
var rp = require('request-promise');

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
  console.log("I'm listening for totally ridic politics on 3000!");
});

app.get('/', function(req,res){
    var html = fs.readFileSync('./views/index.html.ejs', 'utf8');
    var rendered = ejs.render(html);
    res.send(rendered);
})

// app.get('/candidate', function(req, res){ 
//   var candidateReceiptsArr = [];

//   candidates.forEach(function(e,i,a){ 
//     var commId = e.commId;
//     var key = 'w9zQ9pt9PNe6et305JsAtxiNQvhygjQC8yrCMMc8';

//     var requestTotalUrl = 'https://api.open.fec.gov/v1/committee/'+ commId +'/totals/?api_key='+ key +'&page=1&per_page=20&sort_nulls_large=true&sort=-cycle';
//     request.get(requestTotalUrl, function(err, response, body){
//       var parsedJSON = JSON.parse(body);
//       var candidateReceipts = parsedJSON.results[0];
//       candidateReceiptsArr.push(candidateReceipts)
//       // console.log(candidateReceipts)
//       // console.log(e.commId, myParsedData.results[0].receipts)
//       });
//     console.log(candidateReceiptsArr);
//   });
//     // var html = fs.readFileSync('./views/index.html.ejs', 'utf8');
//     // var rendered = ejs.render(html, {candidateReceipts:candidateReceipts});
//     // res.send(rendered);

// });


