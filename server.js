var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var uristring = process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'mongodb://localhost/HelloMongoose';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('Error connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Success connecting to: ' + uristring);
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
