var express = require('express');
var router = express.Router();

var Alert = require('../models/alert');
Alert.methods(['get', 'put', 'post', 'delete']);
Alert.register(router, '/alerts');

module.exports = router;
