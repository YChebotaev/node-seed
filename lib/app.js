var express = require('express');
var _ = require('lodash');
var config = require('config');

var app = express();

_.forEach(config.get('app'), function(val, key){
  app.set(key, val);
});

require('./routes').install(app);

module.exports = app;