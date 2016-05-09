var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
  name          : String,
  acknowledged  : Number,
  resolved      : Number,
  resolution    : String
});

module.exports = restful.model('Alerts', schema);
