var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'Views');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port);
