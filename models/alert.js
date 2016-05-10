var restful = require('node-restful');
var mongoose = restful.mongoose;

var alertSchema = new mongoose.Schema({
  name          : String,
  acknowledged  : Boolean,
  resolved      : Boolean,
  resolution    : String,
  createdat     : Date,
  acknowldat    : Date
});

module.exports = restful.model('Alerts', alertSchema);
