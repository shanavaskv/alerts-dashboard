var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/HelloMongoose';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.send('Hello World')
})

app.listen( app.get('port'), function() {
  console.log("App running at:" + app.get('port'))
})
