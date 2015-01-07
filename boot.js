module.exports = function(cb){

  global.config = require('config');
  global.logger = require('./logger');
  global.db = require('./db');
  global.r = require('rethinkdb');
  global.Promise = require('bluebird');
  
  db.ready = function(){
    cb();
  };
};