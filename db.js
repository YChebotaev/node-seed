var config = require('config');
var r = require('rethinkdb');
require('rethinkdb-fake-connection').patch(r);
require('rethinkdb-ensure')(r);
var Db = require('rethinkdb-database');

var db = Db.connect(config.get('db'));

module.exports = db;