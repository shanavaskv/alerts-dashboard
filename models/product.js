var restful = require('node-restful');
var mongoose = restful.mongoose;

var schema = new mongoose.Schema({
  name  : String,
  sku   : String,
  price : Number
});

module.exports = restful.model('Products', schema);
