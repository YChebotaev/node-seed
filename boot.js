module.exports = function(cb){

  global.config = require('config');
  global.logger = require('./logger');
  
  return cb();
};