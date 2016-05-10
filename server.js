var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// var mongo_uri = process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'mongodb://localhost/dashboard-db';
var mongo_uri = "mongodb://heroku_cjz43w1w:pqua4v1tolr4suv4p0q4garbg8@ds017582.mlab.com:17582/heroku_cjz43w1w";
mongoose.connect(mongo_uri, function (err, res) {
  if (err) {
    console.log ('Error connecting to: ' + mongo_uri + '. ' + err);
  } else {
    console.log ('Success connecting to: ' + mongo_uri);
  }
});

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

// app.get('/', function(request, response){
//   response.send('Hello World')
// })

app.set('port', (process.env.PORT || 5000));
app.listen( app.get('port'), function() {
  console.log("App running at:" + app.get('port'))
})
