var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
  name          : String,
  acknowledged  : Boolean,
  resolved      : Boolean,
  resolution    : String
});

module.exports = restful.model('Alerts', schema);
